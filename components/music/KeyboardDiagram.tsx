'use client'

interface KeyboardDiagramProps {
  highlightNotes?: string[]  // e.g., ['C', 'D', 'G'] or ['C4', 'D4']
  startOctave?: number
  octaves?: number
  showLabels?: boolean
  title?: string
}

const WHITE_KEYS = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
const BLACK_KEY_POSITIONS = [0, 1, 3, 4, 5] // C#, D#, F#, G#, A# relative to white keys

export default function KeyboardDiagram({
  highlightNotes = [],
  startOctave = 3,
  octaves = 2,
  showLabels = true,
  title
}: KeyboardDiagramProps) {
  // Normalize highlight notes (remove octave numbers for matching)
  const highlightSet = new Set(
    highlightNotes.map(n => n.replace(/[0-9]/g, '').toUpperCase())
  )

  const whiteKeyWidth = 100 / (7 * octaves)
  const blackKeyWidth = whiteKeyWidth * 0.6
  const blackKeyHeight = 60

  return (
    <div className="bg-white rounded-lg border border-midnight-200 overflow-hidden">
      {title && (
        <div className="px-3 md:px-4 py-2 bg-midnight-50 border-b border-midnight-200">
          <h4 className="font-medium text-midnight-800 text-xs md:text-sm">{title}</h4>
        </div>
      )}
      
      <div className="p-3 md:p-4">
        <svg 
          viewBox={`0 0 100 ${showLabels ? 35 : 30}`} 
          className="w-full h-auto"
          style={{ maxHeight: '120px' }}
        >
          {/* White keys */}
          {Array.from({ length: octaves }).map((_, octaveIndex) => (
            WHITE_KEYS.map((note, keyIndex) => {
              const x = (octaveIndex * 7 + keyIndex) * whiteKeyWidth
              const isHighlighted = highlightSet.has(note)
              const octaveNum = startOctave + octaveIndex
              
              return (
                <g key={`${note}${octaveNum}`}>
                  <rect
                    x={`${x}%`}
                    y="0"
                    width={`${whiteKeyWidth - 0.3}%`}
                    height="25"
                    fill={isHighlighted ? '#d47d42' : 'white'}
                    stroke="#374151"
                    strokeWidth="0.3"
                    rx="0.5"
                  />
                  {showLabels && (
                    <text
                      x={`${x + whiteKeyWidth / 2}%`}
                      y="32"
                      textAnchor="middle"
                      fontSize="2.5"
                      fill={isHighlighted ? '#d47d42' : '#6b7280'}
                      fontWeight={isHighlighted ? 'bold' : 'normal'}
                    >
                      {note}
                    </text>
                  )}
                </g>
              )
            })
          ))}
          
          {/* Black keys */}
          {Array.from({ length: octaves }).map((_, octaveIndex) => (
            BLACK_KEY_POSITIONS.map((pos, i) => {
              const blackNotes = ['C#', 'D#', 'F#', 'G#', 'A#']
              const note = blackNotes[i]
              const x = (octaveIndex * 7 + pos + 0.65) * whiteKeyWidth
              const isHighlighted = highlightSet.has(note) || highlightSet.has(note.replace('#', 'b'))
              
              return (
                <rect
                  key={`${note}${startOctave + octaveIndex}`}
                  x={`${x}%`}
                  y="0"
                  width={`${blackKeyWidth}%`}
                  height="15"
                  fill={isHighlighted ? '#b45309' : '#1f2937'}
                  rx="0.3"
                />
              )
            })
          ))}
          
          {/* Middle C indicator if in range */}
          {startOctave <= 4 && startOctave + octaves > 4 && (
            <circle
              cx={`${(4 - startOctave) * 7 * whiteKeyWidth + whiteKeyWidth / 2}%`}
              cy="22"
              r="1.5"
              fill="#ef4444"
            />
          )}
        </svg>
        
        {/* Legend */}
        {highlightNotes.length > 0 && (
          <div className="flex items-center gap-4 mt-2 text-xs text-midnight-600">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-whiskey-500 rounded-sm" />
              <span>Target notes</span>
            </div>
            {startOctave <= 4 && startOctave + octaves > 4 && (
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span>Middle C</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
