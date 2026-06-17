import { NextResponse } from 'next/server';
import { GoogleGenAI, Type } from '@google/genai';

const API_KEYS = [
  process.env.GEMINI_API_KEY || '',
  'AQ.Ab8RN6I88C6laTHj10fkKZC53gKEH-bebbg_jF6_gP54Vyhc9A',
  'AQ.Ab8RN6IgVpadRqYokNwymjiDeWKl31ylGZh6mH-okEoA0GQExg',
  'AQ.Ab8RN6IwrVxlFKuqQ_z9cBk6-5Hq_lLq2f4NHfAm_EvWf0d3TQ',
  'AQ.Ab8RN6L-PrLER4UFOxChqCuBtphDo3PuEFx90RPs08_6hDYBYQ'
].filter(Boolean);

let currentKeyIndex = 0;

const transcriptSchema = {
  type: Type.ARRAY,
  description: 'An array of strictly processed transcript lines based on the input sentences.',
  items: {
    type: Type.OBJECT,
    properties: {
      startTime: { type: Type.NUMBER, description: 'The exact start time provided in the input.' },
      endTime: { type: Type.NUMBER, description: 'The exact end time provided in the input.' },
      chinese: { type: Type.STRING, description: 'The original Chinese sentence.' },
      pinyin: { type: Type.STRING, description: 'The full pinyin of the Chinese sentence.' },
      english: { type: Type.STRING, description: 'The natural English translation of the sentence.' },
      words: {
        type: Type.ARRAY,
        description: 'The Chinese sentence broken down into individual vocabulary words.',
        items: {
          type: Type.OBJECT,
          properties: {
            chinese: { type: Type.STRING, description: 'The Chinese character(s) for the word.' },
            pinyin: { type: Type.STRING, description: 'The pinyin for the word.' },
            meaning: { type: Type.STRING, description: 'The English meaning of the word.' },
            hskLevel: { type: Type.INTEGER, description: 'The HSK level of the word (1-6). If unknown or a name, use 0.' }
          },
          required: ['chinese', 'pinyin', 'meaning', 'hskLevel']
        }
      }
    },
    required: ['startTime', 'endTime', 'chinese', 'pinyin', 'english', 'words']
  }
};

export async function POST(req: Request) {
  try {
    const { sentences } = await req.json();

    if (!sentences || !Array.isArray(sentences)) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const prompt = `
    You are an expert Chinese linguistics AI. I will provide you with a JSON array of sentences with their start and end times.
    Your task is to:
    1. Keep the exact startTime and endTime provided.
    2. Translate the Chinese sentence into natural English.
    3. Provide the full sentence Pinyin.
    4. Break down the Chinese sentence into individual vocabulary words (tokenization).
    5. For each word, provide the exact Chinese, Pinyin, English meaning, and HSK Level (1-6).

    Input Sentences:
    ${JSON.stringify(sentences, null, 2)}
    `;

    let responseText = null;
    let attempts = 0;

    while (attempts < API_KEYS.length) {
      try {
        const ai = new GoogleGenAI({ apiKey: API_KEYS[currentKeyIndex] });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
            responseSchema: transcriptSchema as any,
            temperature: 0.1,
          }
        });

        if (response.text) {
          responseText = response.text;
          break; // Success!
        }
      } catch (e: any) {
        console.error(`Key index ${currentKeyIndex} failed:`, e.message);
        if (e.message?.includes('429') || e.message?.includes('quota') || e.message?.includes('exhausted')) {
          // Move to next key
          currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
          attempts++;
          console.log(`Switching to backup API Key. Attempt ${attempts} of ${API_KEYS.length}`);
        } else {
          // Unrelated error (e.g. prompt issue), don't retry keys
          throw e;
        }
      }
    }

    if (!responseText) {
      throw new Error('All API keys exhausted or failed to generate a response.');
    }

    const transcript = JSON.parse(responseText);
    return NextResponse.json(transcript);
  } catch (error: any) {
    console.error('Immersion Studio Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
