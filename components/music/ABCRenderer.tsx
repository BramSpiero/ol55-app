'use client'

import { useEffect, useRef, useState } from 'react'

interface ABCRendererProps {
  notation: string
  title?: string
}

// Simple note frequency mapping
const NOTE_FREQUENCIES: { [key: string]: number } = {
  'C': 261.63, 'D': 293.66, 'E': 329.63, 'F': 349.23,
  'G': 392.00, 'A': 440.00, 'B': 493.88,
  'c': 523.25, 'd': 587.33, 'e': 659.25, 'f': 698.46,
  'g': 783.99, 'a': 880.00, 'b': 987.77,
}

export default function ABCRenderer({ notation, title }: ABCRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [tempo, setTempo] = useState(100)
  const [error, setError] = useState<string | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const playingRef = useRef<boolean>(false)

  useEffect(() => {
    const loadABC = async () => {
      if (typeof window === 'undefined' || !containerRef.current) return
      
      const ABCJS = await import('abcjs')
      
      // Render the notation
      ABCJS.renderAbc(containerRef.current, notation, {
        responsive: 'resize',
        add_classes: true,
        paddingtop: 0,
        paddingbottom: 0,
        paddingleft: 0,
        paddingright: 0
      })
    }

    loadABC()
    
    return () => {
      playingRef.current = false
      if (audioContextRef.current) {
        audioContextRef.current.close()
        audioContextRef.current = null
      }
    }
  }, [notation])

  // Parse ABC notation to extract notes
  const parseNotes = (abc: string): string[] => {
    const notes: string[] = []
    // Simple regex to find notes - handles basic ABC
    const noteRegex = /[A-Ga-g][,']*[0-9]*/g
    const matches = abc.match(noteRegex)
    if (matches) {
      matches.forEach(note => {
        const baseNote = note[0]
        if (NOTE_FREQUENCIES[baseNote]) {
          notes.push(baseNote)
        }
      })
    }
    return notes.length > 0 ? notes : ['C', 'E', 'G', 'C'] // Default if parsing fails
  }

  const playNotes = async (notes: string[]) => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    
    const ctx = audioContextRef.current
    
    if (ctx.state === 'suspended') {
      await ctx.resume()
    }

    const noteDuration = 0.5 * (100 / tempo)
    let startTime = ctx.currentTime

    for (const note of notes) {
      if (!playingRef.current) break
      
      const freq = NOTE_FREQUENCIES[note] || 440
      
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)
      
      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(freq, startTime)
      
      // Envelope for nicer sound
      gainNode.gain.setValueAtTime(0, startTime)
      gainNode.gain.linearRampToValueAtTime(0.3, startTime + 0.05)
      gainNode.gain.linearRampToValueAtTime(0, startTime + noteDuration - 0.05)
      
      oscillator.start(startTime)
      oscillator.stop(startTime + noteDuration)
      
      startTime += noteDuration
    }

    // Wait for playback to finish
    const totalDuration = notes.length * noteDuration * 1000
    setTimeout(() => {
      if (playingRef.current) {
        setIsPlaying(false)
        playingRef.current = false
      }
    }, totalDuration)
  }

  const handlePlay = async () => {
    if (isPlaying) {
      playingRef.current = false
      setIsPlaying(false)
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      playingRef.current = true
      setIsPlaying(true)
      
      const notes = parseNotes(notation)
      await playNotes(notes)

    } catch (err: any) {
      console.error('Playback error:', err)
      setError('Could not play audio')
      setIsPlaying(false)
      playingRef.current = false
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
