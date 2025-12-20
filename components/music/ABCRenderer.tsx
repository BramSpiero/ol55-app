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
  const synthControlRef = useRef<any>(null)
  const abcjsRef = useRef<any>(null)
  const visualObjRef = useRef<any>(null)

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
      // Cleanup on unmount
      if (synthControlRef.current) {
        try {
          synthControlRef.current.stop()
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    }
  }, [notation])

  const handlePlay = async () => {
    if (!abcjsRef.current || !visualObjRef.current) return
    
    const ABCJS = abcjsRef.current

    if (isPlaying) {
      // Stop playback
      if (synthControlRef.current) {
        synthControlRef.current.stop()
      }
      setIsPlaying(false)
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // Check if AudioContext is available
      if (!ABCJS.synth.supportsAudio()) {
        setError('Audio not supported in this browser')
        setIsLoading(false)
        return
      }

      // Create synth control if it doesn't exist
      if (!synthControlRef.current) {
        synthControlRef.current = new ABCJS.synth.SynthController()
      }

      // Create a new synth for this playback
      const synth = new ABCJS.synth.CreateSynth()
      
      // Initialize with the visual object
      await synth.init({
        visualObj: visualObjRef.current,
        options: {
          qpm: Math.round(80 * (tempo / 100)),
          soundFontUrl: 'https://paulrosen.github.io/midi-js-soundfonts/MusyngKite/',
          onEnded: () => {
            setIsPlaying(false)
          }
        }
      })

      // Prime the audio (load the samples)
      await synth.prime()

      // Start playback
      synth.start()
      synthControlRef.current = synth
      setIsPlaying(true)

    } catch (err) {
      console.error('Playback error:', err)
      setError('Could not play audio. Try again.')
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
                ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                : 'bg-whiskey-100 text-whiskey-700 hover:bg-whiskey-200'
          }`}
        >
          {isLoading ? '...' : isPlaying ? '⏹ Stop' : '▶ Play'}
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
