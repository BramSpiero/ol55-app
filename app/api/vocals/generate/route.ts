import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// ElevenLabs API configuration
const ELEVENLABS_API_URL = 'https://api.elevenlabs.io/v1/text-to-speech'

// Default singing voice - can be changed to any voice from ElevenLabs library
// Using "Rachel" - a clear, expressive female voice good for singing
const DEFAULT_VOICE_ID = '21m00Tcm4TlvDq8ikWAM'

// Song lyrics for Ol' 55
const SONG_SECTIONS = {
  verse1: {
    lyrics: "Well my time went so quickly, I went lickety-splitly, out to my ol' fifty-five. As I pulled away slowly, feeling so holy, God knows I was feeling alive.",
    section: 'verse'
  },
  verse2: {
    lyrics: "Now the sun's coming up, I'm riding with Lady Luck, freeway cars and trucks. Stars beginning to fade, and I lead the parade, just a-wishing I'd stayed a little longer.",
    section: 'verse'
  },
  verse3: {
    lyrics: "Six in the morning, gave me no warning, I had to be on my way. Now the cars are all passing me, trucks are all flashing me, I'm headed home from your place.",
    section: 'verse'
  },
  chorus: {
    lyrics: "And I got the sun coming up over the trees, I got the sun coming up over my knees. Ol' fifty-five, coming alive, I got the radio on, I got the windows rolled down.",
    section: 'chorus'
  },
  ending: {
    lyrics: "Freeway cars and trucks. Freeway cars and trucks. Freeway cars and trucks.",
    section: 'ending'
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient()
    
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { section, voiceId } = await request.json()
    
    if (!section || !SONG_SECTIONS[section as keyof typeof SONG_SECTIONS]) {
      return NextResponse.json(
        { error: 'Invalid section. Use: verse1, verse2, verse3, chorus, or ending' }, 
        { status: 400 }
      )
    }

    const apiKey = process.env.ELEVENLABS_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'ElevenLabs API key not configured' }, 
        { status: 500 }
      )
    }

    const songSection = SONG_SECTIONS[section as keyof typeof SONG_SECTIONS]
    const selectedVoiceId = voiceId || DEFAULT_VOICE_ID

    // Call ElevenLabs API
    const response = await fetch(`${ELEVENLABS_API_URL}/${selectedVoiceId}`, {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': apiKey
      },
      body: JSON.stringify({
        text: songSection.lyrics,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
          style: 0.5, // Add some style for more expressive singing
          use_speaker_boost: true
        }
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('ElevenLabs API error:', errorText)
      return NextResponse.json(
        { error: 'Failed to generate vocals' }, 
        { status: response.status }
      )
    }

    // Return the audio as a buffer
    const audioBuffer = await response.arrayBuffer()
    
    return new NextResponse(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': audioBuffer.byteLength.toString(),
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      }
    })
  } catch (error) {
    console.error('Vocal generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate vocals' }, 
      { status: 500 }
    )
  }
}

// GET endpoint to list available sections
export async function GET() {
  return NextResponse.json({
    sections: Object.keys(SONG_SECTIONS),
    details: SONG_SECTIONS
  })
}
