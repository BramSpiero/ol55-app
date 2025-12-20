'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

interface DebugMenuProps {
  userId: string
  currentWeek: number
  currentDay: number
}

export default function DebugMenu({ userId, currentWeek, currentDay }: DebugMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isResetting, setIsResetting] = useState(false)
  const [jumpWeek, setJumpWeek] = useState(currentWeek)
  const [jumpDay, setJumpDay] = useState(currentDay)
  const router = useRouter()
  const supabase = createClient()

  const handleResetProgress = async () => {
    if (!confirm('Reset all progress to Week 1, Day 1? This cannot be undone.')) return
    
    setIsResetting(true)
    
    const { error } = await supabase
      .from('progress')
      .update({
        current_week: 1,
        current_day: 1,
        phase: 1,
        days_completed: 0,
        pace_status: 'on_track'
      })
      .eq('user_id', userId)

    if (error) {
      console.error('Reset error:', error)
      alert('Failed to reset progress')
    } else {
      // Also clear practice logs
      await supabase
        .from('practice_logs')
        .delete()
        .eq('user_id', userId)
      
      router.refresh()
    }
    
    setIsResetting(false)
    setIsOpen(false)
  }

  const handleJumpTo = async () => {
    if (jumpWeek < 1 || jumpWeek > 48 || jumpDay < 1 || jumpDay > 7) {
      alert('Invalid week/day')
      return
    }

    const phase = Math.ceil(jumpWeek / 8)
    const daysCompleted = ((jumpWeek - 1) * 7) + (jumpDay - 1)

    const { error } = await supabase
      .from('progress')
      .update({
        current_week: jumpWeek,
        current_day: jumpDay,
        phase: phase,
        days_completed: daysCompleted
      })
      .eq('user_id', userId)

    if (error) {
      console.error('Jump error:', error)
      alert('Failed to update progress')
    } else {
      router.refresh()
    }
    
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-xs text-midnight-400 hover:text-midnight-600"
      >
        🛠️ Debug
      </button>

      {isOpen && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white border border-midnight-200 rounded-lg shadow-lg p-4 w-72 z-50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-midnight-800 text-sm">Debug Menu</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-midnight-400 hover:text-midnight-600"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4">
            {/* Current position */}
            <div className="text-xs text-midnight-600">
              Current: Week {currentWeek}, Day {currentDay}
            </div>

            {/* Jump to specific week/day */}
            <div>
              <label className="text-xs text-midnight-600 block mb-2">Jump to:</label>
              <div className="flex gap-2 mb-2">
                <div>
                  <span className="text-xs text-midnight-500">Week</span>
                  <input
                    type="number"
                    min={1}
                    max={48}
                    value={jumpWeek}
                    onChange={(e) => setJumpWeek(parseInt(e.target.value) || 1)}
                    className="w-16 px-2 py-1 border border-midnight-200 rounded text-sm"
                  />
                </div>
                <div>
                  <span className="text-xs text-midnight-500">Day</span>
                  <input
                    type="number"
                    min={1}
                    max={7}
                    value={jumpDay}
                    onChange={(e) => setJumpDay(parseInt(e.target.value) || 1)}
                    className="w-16 px-2 py-1 border border-midnight-200 rounded text-sm"
                  />
                </div>
              </div>
              <button
                onClick={handleJumpTo}
                className="w-full px-3 py-2 bg-blue-100 text-blue-700 rounded text-xs font-medium hover:bg-blue-200"
              >
                Jump to Position
              </button>
            </div>

            {/* Reset progress */}
            <button
              onClick={handleResetProgress}
              disabled={isResetting}
              className="w-full px-3 py-2 bg-red-100 text-red-700 rounded text-xs font-medium hover:bg-red-200 disabled:opacity-50"
            >
              {isResetting ? 'Resetting...' : 'Reset to Week 1, Day 1'}
            </button>

            {/* Review past lessons */}
            <div>
              <label className="text-xs text-midnight-600 block mb-2">Quick review:</label>
              <div className="flex gap-1 flex-wrap">
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <a
                    key={day}
                    href={`/practice?week=1&day=${day}`}
                    className="px-2 py-1 bg-midnight-100 text-midnight-600 rounded text-xs hover:bg-midnight-200"
                  >
                    W1D{day}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
