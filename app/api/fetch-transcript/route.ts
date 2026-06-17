import { NextResponse } from 'next/server';
import { YoutubeTranscript } from 'youtube-transcript';

export async function POST(req: Request) {
  try {
    const { videoId } = await req.json();

    if (!videoId) {
      return NextResponse.json({ error: 'Video ID is required' }, { status: 400 });
    }

    const transcriptInfo = await YoutubeTranscript.fetchTranscript(videoId);
    
    // Combine all the text blocks into a single string
    const rawText = transcriptInfo.map(t => t.text).join(' ');

    return NextResponse.json({ text: rawText });
  } catch (error: any) {
    console.error('Fetch Transcript Error:', error);
    return NextResponse.json({ error: error.message || 'Transcripts are disabled for this video.' }, { status: 500 });
  }
}
