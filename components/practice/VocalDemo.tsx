'use client'

import { useState, useRef, useEffect } from 'react'

interface VocalDemoProps {
  section: 'verse1' | 'verse2' | 'verse3' | 'chorus' | 'ending'
  label?: string
  className?: string
}

const SECTION_LABELS = {
  verse1: 'Verse 1',
  verse2: 'Verse 2', 
  verse3: 'Verse 3',
  chorus: 'Chorus',
  ending: 'Ending'
}

const SECTION_LYRICS = {
  verse1: "Well my time went so quickly, I went lickety-splitly...",
  verse2: "Now the sun's coming up, I'm riding with Lady Luck...",
  verse3: "Six in the morning, gave me no warning...",
  chorus: "And I got the sun coming up over the trees...",
  ending: "Freeway cars and trucks..."
}

export default function VocalDemo({ section, label, className = '' }: VocalDemoProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Clean up audio URL on unmount
  useEffect(() => {
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl)
      }
    }
  }, [audioUrl])

  const generateAndPlay = async () => {
    setError(null)
    
    // If we already have the audio, just play it
    if (audioUrl && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/vocals/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ section })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to generate vocals')
      }

      // Get the audio blob
      const audioBlob = await response.blob()
      const url = URL.createObjectURL(audioBlob)
      setAudioUrl(url)

      // Create and play audio
      const audio = new Audio(url)
      audioRef.current = audio
      
      audio.onended = () => {
        setIsPlaying(false)
      }
      
      audio.onerror = () => {
        setError('Failed to play audio')
        setIsPlaying(false)
      }

      await audio.play()
      setIsPlaying(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate vocals')
    } finally {
      setIsLoading(false)
    }
  }

  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
    }
  }

  return (
    <div className={`bg-midnight-800 rounded-lg p-4 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-medium text-white">
          🎤 {label || SECTION_LABELS[section]}
        </h4>
        <span className="text-xs text-midnight-400">AI Vocal Demo</span>
      </div>
      
      <p className="text-xs text-midnight-400 mb-3 italic">
        "{SECTION_LYRICS[section]}"
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={isPlaying ? stopPlayback : generateAndPlay}
          disabled={isLoading}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm
            transition-all duration-200
            ${isLoading 
              ? 'bg-midnight-700 text-midnight-400 cursor-wait' 
              : isPlaying
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-sunrise-500 hover:bg-sunrise-600 text-midnight-900'
            }
          `}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle 
                  className="opacity-25" 
                  cx="12" cy="12" r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                  fill="none"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Generating...
            </>
          ) : isPlaying ? (
            <>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
              Stop
            </>
          ) : audioUrl ? (
            <>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play Again
            </>
          ) : (
            <>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Hear Vocals
            </>
          )}
        </button>

        {audioUrl && !isPlaying && (
          <button
            onClick={() => {
              if (audioUrl) {
                URL.revokeObjectURL(audioUrl)
                setAudioUrl(null)
              }
            }}
            className="p-2 text-midnight-400 hover:text-white transition-colors"
            title="Clear cached audio"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        )}
      </div>

      {error && (
        <p className="mt-2 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}
