'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import abcjs from 'abcjs'

interface VocalPracticeProps {
  section: 'verse1' | 'verse2' | 'verse3' | 'chorus' | 'ending' | 'full'
  abcNotation?: string
  tempo?: number
  className?: string
}

const SECTION_ABC = {
  verse1: `X:1
T:Verse 1 - With Vocals
M:4/4
L:1/4
Q:1/4=74
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
  verse2: `X:1
T:Verse 2 - With Vocals
M:4/4
L:1/4
Q:1/4=74
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
  verse3: `X:1
T:Verse 3 - With Vocals
M:4/4
L:1/4
Q:1/4=74
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
  chorus: `X:1
T:Chorus - With Vocals
M:4/4
L:1/4
Q:1/4=74
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][DGA]2 [A,] | [D,][DGA]2 [A,] |]`,
  ending: `X:1
T:Ending - With Vocals
M:4/4
L:1/4
Q:1/4=74
K:G
[G,,][GBd]2 [G,,] | [^C,][^CEG]2 [^C,] | [C,][CEG]2 [C,] | [D,][D^FAc]2 [D,] |]`,
  full: `X:1
T:Full Song Demo
M:4/4
L:1/4
Q:1/4=74
K:G
[G,,][GBd]2 [D,] |]`
}

const SECTION_LYRICS = {
  verse1: [
    "Well my time went so quickly,",
    "I went lickety-splitly,",
    "out to my ol' fifty-five.",
    "As I pulled away slowly,",
    "feeling so holy,",
    "God knows I was feeling alive."
  ],
  verse2: [
    "Now the sun's coming up,",
    "I'm riding with Lady Luck,",
    "freeway cars and trucks.",
    "Stars beginning to fade,",
    "and I lead the parade,",
    "just a-wishing I'd stayed a little longer."
  ],
  verse3: [
    "Six in the morning,",
    "gave me no warning,",
    "I had to be on my way.",
    "Now the cars are all passing me,",
    "trucks are all flashing me,",
    "I'm headed home from your place."
  ],
  chorus: [
    "And I got the sun coming up over the trees,",
    "I got the sun coming up over my knees.",
    "Ol' fifty-five, coming alive,",
    "I got the radio on,",
    "I got the windows rolled down."
  ],
  ending: [
    "Freeway cars and trucks...",
    "(repeat and fade)"
  ],
  full: ["Full song demo"]
}

export default function VocalPractice({ 
  section, 
  abcNotation, 
  tempo = 74,
  className = '' 
}: VocalPracticeProps) {
  const [isLoadingVocals, setIsLoadingVocals] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [vocalAudioUrl, setVocalAudioUrl] = useState<string | null>(null)
  const [pianoReady, setPianoReady] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentLyricIndex, setCurrentLyricIndex] = useState(-1)
  const [playMode, setPlayMode] = useState<'vocals' | 'piano' | 'both'>('both')
  
  const vocalAudioRef = useRef<HTMLAudioElement | null>(null)
  const synthControlRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const abc = abcNotation || SECTION_ABC[section]
  const lyrics = SECTION_LYRICS[section]

  // Initialize piano synth
  useEffect(() => {
    if (containerRef.current && typeof window !== 'undefined') {
      // Render the notation
      abcjs.renderAbc(containerRef.current, abc, {
        responsive: 'resize',
        add_classes: true
      })
      
      // Check if synth is available
      if (abcjs.synth && abcjs.synth.supportsAudio()) {
        setPianoReady(true)
      }
    }
  }, [abc])

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (vocalAudioUrl) {
        URL.revokeObjectURL(vocalAudioUrl)
      }
      if (synthControlRef.current) {
        synthControlRef.current.stop()
      }
    }
  }, [vocalAudioUrl])

  // Pre-generate vocals
  const generateVocals = useCallback(async () => {
    if (vocalAudioUrl || section === 'full') return // Already generated or full song
    
    setIsLoadingVocals(true)
    setError(null)

    try {
      const response = await fetch('/api/vocals/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to generate vocals')
      }

      const audioBlob = await response.blob()
      const url = URL.createObjectURL(audioBlob)
      setVocalAudioUrl(url)

      // Set up audio element
      const audio = new Audio(url)
      vocalAudioRef.current = audio
      
      audio.onended = () => setIsPlaying(false)
      audio.onerror = () => setError('Failed to play vocals')

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate vocals')
    } finally {
      setIsLoadingVocals(false)
    }
  }, [section, vocalAudioUrl])

  // Play combined or individual
  const play = async () => {
    setError(null)

    // Generate vocals if needed
    if (!vocalAudioUrl && playMode !== 'piano' && section !== 'full') {
      await generateVocals()
    }

    setIsPlaying(true)
    setCurrentLyricIndex(0)

    // Start lyrics animation
    const lyricInterval = setInterval(() => {
      setCurrentLyricIndex(prev => {
        if (prev >= lyrics.length - 1) {
          clearInterval(lyricInterval)
          return prev
        }
        return prev + 1
      })
    }, (60 / tempo) * 4 * 1000 / lyrics.length * 2) // Rough timing

    try {
      // Play vocals if in vocals or both mode
      if ((playMode === 'vocals' || playMode === 'both') && vocalAudioRef.current) {
        vocalAudioRef.current.currentTime = 0
        vocalAudioRef.current.play()
      }

      // Play piano if in piano or both mode
      if ((playMode === 'piano' || playMode === 'both') && pianoReady && containerRef.current) {
        const visualObj = abcjs.renderAbc(containerRef.current, abc, {
          responsive: 'resize',
          add_classes: true
        })[0]

        if (abcjs.synth.supportsAudio()) {
          const synthControl = new abcjs.synth.SynthController()
          synthControlRef.current = synthControl
          
          await synthControl.load('#audio-controls-' + section, null, {
            displayLoop: false,
            displayRestart: false,
            displayPlay: false,
            displayProgress: false,
            displayWarp: false
          })

          const createSynth = new abcjs.synth.CreateSynth()
          await createSynth.init({
            visualObj: visualObj,
            options: { soundFontUrl: '/soundfonts/' }
          })
          
          await synthControl.setTune(visualObj, false)
          synthControl.play()
        }
      }
    } catch (err) {
      console.error('Playback error:', err)
      setError('Failed to start playback')
      setIsPlaying(false)
      clearInterval(lyricInterval)
    }
  }

  const stop = () => {
    if (vocalAudioRef.current) {
      vocalAudioRef.current.pause()
      vocalAudioRef.current.currentTime = 0
    }
    if (synthControlRef.current) {
      synthControlRef.current.stop()
    }
    setIsPlaying(false)
    setCurrentLyricIndex(-1)
  }

  return (
    <div className={`bg-midnight-800 rounded-xl p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">
          🎤🎹 Vocal Practice: {section.charAt(0).toUpperCase() + section.slice(1).replace(/\d/, ' $&')}
        </h3>
        <span className="text-xs text-sunrise-400 bg-sunrise-500/10 px-2 py-1 rounded">
          AI Vocals + Piano
        </span>
      </div>

      {/* Mode selector */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setPlayMode('both')}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
            playMode === 'both' 
              ? 'bg-sunrise-500 text-midnight-900' 
              : 'bg-midnight-700 text-midnight-300 hover:text-white'
          }`}
        >
          Both
        </button>
        <button
          onClick={() => setPlayMode('vocals')}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
            playMode === 'vocals' 
              ? 'bg-sunrise-500 text-midnight-900' 
              : 'bg-midnight-700 text-midnight-300 hover:text-white'
          }`}
        >
          Vocals Only
        </button>
        <button
          onClick={() => setPlayMode('piano')}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
            playMode === 'piano' 
              ? 'bg-sunrise-500 text-midnight-900' 
              : 'bg-midnight-700 text-midnight-300 hover:text-white'
          }`}
        >
          Piano Only
        </button>
      </div>

      {/* Lyrics display */}
      <div className="bg-midnight-900 rounded-lg p-4 mb-4 min-h-[100px]">
        <div className="space-y-1">
          {lyrics.map((line, i) => (
            <p 
              key={i}
              className={`text-sm transition-all duration-300 ${
                currentLyricIndex === i 
                  ? 'text-sunrise-400 font-medium scale-105 origin-left' 
                  : currentLyricIndex > i
                    ? 'text-midnight-500'
                    : 'text-midnight-400'
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Notation display */}
      <div 
        ref={containerRef}
        className="bg-white rounded-lg p-2 mb-4 overflow-x-auto"
        style={{ minHeight: '80px' }}
      />

      {/* Hidden audio controls container */}
      <div id={`audio-controls-${section}`} className="hidden" />

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={isPlaying ? stop : play}
          disabled={isLoadingVocals}
          className={`
            flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium
            transition-all duration-200
            ${isLoadingVocals
              ? 'bg-midnight-700 text-midnight-400 cursor-wait'
              : isPlaying
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-sunrise-500 hover:bg-sunrise-600 text-midnight-900'
            }
          `}
        >
          {isLoadingVocals ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              Generating Vocals...
            </>
          ) : isPlaying ? (
            <>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16"/>
                <rect x="14" y="4" width="4" height="16"/>
              </svg>
              Stop
            </>
          ) : (
            <>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Play {playMode === 'both' ? 'Demo' : playMode === 'vocals' ? 'Vocals' : 'Piano'}
            </>
          )}
        </button>

        {!vocalAudioUrl && playMode !== 'piano' && section !== 'full' && (
          <button
            onClick={generateVocals}
            disabled={isLoadingVocals}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-midnight-700 text-midnight-300 hover:text-white transition-colors"
          >
            Pre-load Vocals
          </button>
        )}

        {vocalAudioUrl && (
          <span className="text-xs text-green-400 flex items-center gap-1">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            Vocals ready
          </span>
        )}
      </div>

      {error && (
        <p className="mt-3 text-sm text-red-400 flex items-center gap-2">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          {error}
        </p>
      )}

      <p className="mt-4 text-xs text-midnight-500">
        💡 Tip: Use "Vocals Only" to hear how the melody should sound, then switch to "Both" to practice singing along with piano.
      </p>
    </div>
  )
}
