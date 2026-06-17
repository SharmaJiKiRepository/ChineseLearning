export interface NemotronMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

export interface NemotronResponse {
    content: string;
    model: string;
    usage?: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
}

export interface NemotronClientOptions {
    apiKey: string;
    /** Defaults to https://openrouter.ai/api/v1/chat/completions */
    baseUrl?: string;
    /** Defaults to nvidia/nemotron-3-ultra-550b-a55b:free */
    defaultModel?: string;
    /** Custom headers for OpenRouter (HTTP-Referer, X-Title) */
    referer?: string;
    appName?: string;
    /** Max retries for rate limits (429). Defaults to 3. */
    maxRetries?: number;
}

export interface ChatOptions {
    temperature?: number;
    maxTokens?: number;
    /** Forces the model to return a JSON object (if the system prompt instructs it to) */
    jsonMode?: boolean;
}

export class NemotronClient {
    private apiKey: string;
    private baseUrl: string;
    private defaultModel: string;
    private headers: Record<string, string>;
    private maxRetries: number;

    constructor(options: NemotronClientOptions) {
        if (!options.apiKey) {
            throw new Error('API key is required to initialize NemotronClient.');
        }

        this.apiKey = options.apiKey;
        this.baseUrl = options.baseUrl || 'https://openrouter.ai/api/v1/chat/completions';
        this.defaultModel = options.defaultModel || 'nvidia/nemotron-3-ultra-550b-a55b:free';
        this.maxRetries = options.maxRetries ?? 3;

        this.headers = {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
        };

        if (options.referer) {
            this.headers['HTTP-Referer'] = options.referer;
        }
        if (options.appName) {
            this.headers['X-Title'] = options.appName;
        }
    }

    /**
     * Send a conversational request to Nemotron.
     */
    async chat(messages: NemotronMessage[], options: ChatOptions = {}): Promise<NemotronResponse> {
        const {
            temperature = 0.7,
            maxTokens = 2048,
            jsonMode = false,
        } = options;

        const body: any = {
            model: this.defaultModel,
            messages,
            temperature,
            max_tokens: maxTokens,
        };

        if (jsonMode) {
            body.response_format = { type: 'json_object' };
        }

        let lastError: Error | null = null;

        for (let attempt = 0; attempt < this.maxRetries; attempt++) {
            try {
                const response = await fetch(this.baseUrl, {
                    method: 'POST',
                    headers: this.headers,
                    body: JSON.stringify(body),
                });

                if (response.status === 429) {
                    const waitMs = Math.pow(2, attempt) * 1000;
                    console.warn(`[NemotronClient] Rate limited. Retrying in ${waitMs}ms (attempt ${attempt + 1}/${this.maxRetries})`);
                    await new Promise(resolve => setTimeout(resolve, waitMs));
                    continue;
                }

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`OpenRouter API error (${response.status}): ${errorText}`);
                }

                const data = await response.json();

                if (data.error) {
                    throw new Error(`Nemotron error: ${data.error.message}`);
                }

                if (!data.choices || data.choices.length === 0) {
                    throw new Error('No response from Nemotron');
                }

                return {
                    content: data.choices[0].message.content,
                    model: data.model,
                    usage: data.usage,
                };
            } catch (error) {
                lastError = error instanceof Error ? error : new Error(String(error));
                
                if (attempt < this.maxRetries - 1 && (
                    lastError.message.includes('429') ||
                    lastError.message.includes('fetch') ||
                    lastError.message.includes('network')
                )) {
                    const waitMs = Math.pow(2, attempt) * 1000;
                    await new Promise(resolve => setTimeout(resolve, waitMs));
                    continue;
                }
            }
        }

        throw lastError || new Error('Failed to get response from Nemotron');
    }

    /**
     * Helper for a simple, single-turn text completion.
     */
    async generate(systemPrompt: string, userPrompt: string, options: ChatOptions = {}): Promise<string> {
        const result = await this.chat(
            [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt }
            ],
            options
        );
        return result.content;
    }

    /**
     * Helper that enforces JSON output and parses the result automatically.
     */
    async generateJSON<T>(systemPrompt: string, userPrompt: string, options: Omit<ChatOptions, 'jsonMode'> = {}): Promise<T> {
        const systemPromptWithJsonInstruction = systemPrompt + '\n\nYou MUST respond with valid JSON only. No markdown formatting, no explanation, just raw JSON.';
        
        const result = await this.chat(
            [
                { role: 'system', content: systemPromptWithJsonInstruction },
                { role: 'user', content: userPrompt }
            ],
            { ...options, jsonMode: true }
        );

        try {
            return JSON.parse(result.content) as T;
        } catch {
            const jsonMatch = result.content.match(/```(?:json)?\s*([\s\S]*?)```/);
            if (jsonMatch) {
                return JSON.parse(jsonMatch[1].trim()) as T;
            }
            throw new Error(`Failed to parse Nemotron response as JSON. Raw output:\n${result.content}`);
        }
    }
}
