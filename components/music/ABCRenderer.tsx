'use client'

import { useEffect, useRef, useState } from 'react'

interface ABCRendererProps {
  notation: string
  title?: string
}

export default function ABCRenderer({ notation, title }: ABCRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [tempo, setTempo] = useState(100)
  const [error, setError] = useState<string | null>(null)
  const [audioReady, setAudioReady] = useState(false)
  const synthRef = useRef<any>(null)
  const abcjsRef = useRef<any>(null)
  const visualObjRef = useRef<any>(null)
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    const loadABC = async () => {
      if (typeof window === 'undefined' || !containerRef.current) return
      
      const ABCJS = await import('abcjs')
      abcjsRef.current = ABCJS
      
      // Render the notation
      const visualObj = ABCJS.renderAbc(containerRef.current, notation, {
        responsive: 'resize',
        add_classes: true,
        paddingtop: 0,
        paddingbottom: 0,
        paddingleft: 0,
        paddingright: 0
      })
      
      visualObjRef.current = visualObj[0]
    }

    loadABC()
    
    return () => {
      if (synthRef.current) {
        try {
          synthRef.current.stop()
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    }
  }, [notation])

  const initAudio = async () => {
    // Create or resume AudioContext on user gesture (required for iOS)
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    
    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume()
    }
    
    return audioContextRef.current
  }

  const handlePlay = async () => {
    if (!abcjsRef.current || !visualObjRef.current) {
      setError('Music not loaded yet')
      return
    }
    
    const ABCJS = abcjsRef.current

    if (isPlaying && synthRef.current) {
      synthRef.current.stop()
      setIsPlaying(false)
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // Initialize audio context on user gesture
      const audioContext = await initAudio()
      
      // Check if audio is supported
      if (!ABCJS.synth.supportsAudio()) {
        setError('Audio not supported')
        setIsLoading(false)
        return
      }

      // Create synth
      const synth = new ABCJS.synth.CreateSynth()
      
      // Initialize with audio context
      await synth.init({
        visualObj: visualObjRef.current,
        audioContext: audioContext,
        millisecondsPerMeasure: Math.round(4000 * (100 / tempo)),
        options: {
          soundFontUrl: 'https://paulrosen.github.io/midi-js-soundfonts/MusyngKite/',
          program: 0, // Acoustic Grand Piano
        }
      })

      // Load the audio samples
      await synth.prime()
      
      // Store reference for stop
      synthRef.current = synth
      
      // Start playback
      synth.start()
      setIsPlaying(true)
      setAudioReady(true)

      // Listen for end
      const checkEnded = setInterval(() => {
        if (synth.getIsRunning && !synth.getIsRunning()) {
          setIsPlaying(false)
          clearInterval(checkEnded)
        }
      }, 500)

      // Fallback timeout based on rough duration estimate
      const estimatedDuration = (visualObjRef.current.getTotalBeats?.() || 16) * (60000 / (80 * tempo / 100))
      setTimeout(() => {
        clearInterval(checkEnded)
        if (isPlaying) {
          setIsPlaying(false)
        }
      }, estimatedDuration + 2000)

    } catch (err: any) {
      console.error('Playback error:', err)
      setError(err.message || 'Could not play audio')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg border border-midnight-200 overflow-hidden">
      {title && (
        <div className="px-3 md:px-4 py-2 bg-midnight-50 border-b border-midnight-200">
          <h4 className="font-medium text-midnight-800 text-xs md:text-sm">{title}</h4>
        </div>
      )}
      
      <div 
        ref={containerRef} 
        className="p-2 md:p-4 abcjs-container overflow-x-auto"
      />
      
      {error && (
        <div className="px-3 py-2 bg-red-50 text-red-700 text-xs md:text-sm">
          {error}
        </div>
      )}
      
      <div className="px-3 md:px-4 py-2 md:py-3 bg-midnight-50 border-t border-midnight-200 flex items-center gap-3 md:gap-4">
        <button
          onClick={handlePlay}
          disabled={isLoading}
          className={`px-3 md:px-4 py-2 rounded-lg font-medium text-xs md:text-sm transition-colors min-w-[70px] md:min-w-[80px] ${
            isLoading
              ? 'bg-midnight-200 text-midnight-500 cursor-wait'
              : isPlaying 
                ? 'bg-red-100 text-red-700 hover:bg-red-200 active:bg-red-300' 
                : 'bg-whiskey-100 text-whiskey-700 hover:bg-whiskey-200 active:bg-whiskey-300'
          }`}
        >
          {isLoading ? 'Loading...' : isPlaying ? '⏹ Stop' : '▶ Play'}
        </button>
        
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="text-xs text-midnight-500 hidden sm:inline">Tempo:</span>
          <input
            type="range"
            min="50"
            max="150"
            value={tempo}
            onChange={(e) => setTempo(parseInt(e.target.value))}
            className="flex-1 h-2 bg-midnight-200 rounded-lg appearance-none cursor-pointer min-w-[60px]"
          />
          <span className="text-xs text-midnight-600 w-8 md:w-12 text-right">{tempo}%</span>
        </div>
      </div>
    </div>
  )
}
