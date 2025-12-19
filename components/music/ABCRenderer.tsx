'use client'

import { useEffect, useRef, useState } from 'react'

interface ABCRendererProps {
  notation: string
  title?: string
}

export default function ABCRenderer({ notation, title }: ABCRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [tempo, setTempo] = useState(100) // percentage
  const synthRef = useRef<any>(null)
  const timerRef = useRef<any>(null)

  useEffect(() => {
    // Dynamically import abcjs since it requires window
    const loadABC = async () => {
      if (typeof window === 'undefined' || !containerRef.current) return
      
      const ABCJS = await import('abcjs')
      
      // Render the notation
      ABCJS.renderAbc(containerRef.current, notation, {
        responsive: 'resize',
        add_classes: true
      })
    }

    loadABC()
  }, [notation])

  const handlePlay = async () => {
    if (typeof window === 'undefined') return
    
    const ABCJS = await import('abcjs')

    if (isPlaying) {
      // Stop playback
      if (synthRef.current) {
        synthRef.current.stop()
      }
      setIsPlaying(false)
      return
    }

    // Create synth and play
    if (!synthRef.current) {
      synthRef.current = new ABCJS.synth.CreateSynth()
    }

    const visualObj = ABCJS.renderAbc('*', notation)[0]
    
    try {
      await synthRef.current.init({
        visualObj: visualObj,
        options: {
          qpm: Math.round(72 * (tempo / 100)) // Base tempo adjusted by slider
        }
      })
      await synthRef.current.prime()
      synthRef.current.start()
      setIsPlaying(true)

      // Auto-stop when done
      const duration = synthRef.current.getDuration() * 1000
      timerRef.current = setTimeout(() => {
        setIsPlaying(false)
      }, duration)
    } catch (err) {
      console.error('Playback error:', err)
    }
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (synthRef.current) synthRef.current.stop()
    }
  }, [])

  return (
    <div className="bg-white rounded-lg border border-midnight-200 overflow-hidden">
      {title && (
        <div className="px-4 py-2 bg-midnight-50 border-b border-midnight-200">
          <h4 className="font-medium text-midnight-800 text-sm">{title}</h4>
        </div>
      )}
      
      <div 
        ref={containerRef} 
        className="p-4 abcjs-container"
      />
      
      <div className="px-4 py-3 bg-midnight-50 border-t border-midnight-200 flex items-center gap-4">
        <button
          onClick={handlePlay}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            isPlaying 
              ? 'bg-red-100 text-red-700 hover:bg-red-200' 
              : 'bg-whiskey-100 text-whiskey-700 hover:bg-whiskey-200'
          }`}
        >
          {isPlaying ? '⏹ Stop' : '▶ Play'}
        </button>
        
        <div className="flex items-center gap-2 flex-1">
          <span className="text-xs text-midnight-500">Tempo:</span>
          <input
            type="range"
            min="50"
            max="150"
            value={tempo}
            onChange={(e) => setTempo(parseInt(e.target.value))}
            className="flex-1 h-2 bg-midnight-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-xs text-midnight-600 w-12">{tempo}%</span>
        </div>
      </div>
    </div>
  )
}
