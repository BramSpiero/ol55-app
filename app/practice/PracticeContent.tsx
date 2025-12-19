'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import ABCRenderer from '@/components/music/ABCRenderer'
import type { WeekContent, DayContent } from '@/lib/curriculum/types'

interface PracticeContentProps {
  profile: any
  weekContent: WeekContent | undefined
  dayContent: DayContent | undefined
  currentWeek: number
  currentDay: number
  todaysPractice: any
  userId: string
}

export default function PracticeContent({
  profile,
  weekContent,
  dayContent,
  currentWeek,
  currentDay,
  todaysPractice,
  userId
}: PracticeContentProps) {
  const router = useRouter()
  const supabase = createClient()
  
  const [completing, setCompleting] = useState(false)
  const [difficulty, setDifficulty] = useState(3)
  const [notes, setNotes] = useState('')
  const [showComplete, setShowComplete] = useState(false)

  const practiceComplete = todaysPractice?.completed || false

  const handleComplete = async () => {
    setCompleting(true)
    const today = new Date().toISOString().split('T')[0]

    // Log the practice
    const { error: logError } = await supabase
      .from('practice_logs')
      .upsert({
        user_id: userId,
        practice_date: today,
        week_number: currentWeek,
        day_number: currentDay,
        completed: true,
        difficulty_rating: difficulty,
        notes: notes || null
      }, {
        onConflict: 'user_id,practice_date'
      })

    if (logError) {
      console.error('Error logging practice:', logError)
      setCompleting(false)
      return
    }

    // Advance to next day
    let nextWeek = currentWeek
    let nextDay = currentDay + 1
    let nextPhase = Math.ceil(nextWeek / 8)

    if (nextDay > 7) {
      nextDay = 1
      nextWeek += 1
      nextPhase = Math.ceil(nextWeek / 8)
    }

    if (nextWeek <= 48) {
      const { error: progressError } = await supabase
        .from('progress')
        .update({
          current_week: nextWeek,
          current_day: nextDay,
          phase: nextPhase
        })
        .eq('user_id', userId)

      if (progressError) {
        console.error('Error updating progress:', progressError)
      }
    }

    router.push('/dashboard')
    router.refresh()
  }

  if (!dayContent) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-whiskey-50 to-whiskey-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-midnight-900 mb-4">No lesson found</h1>
          <Link href="/dashboard" className="text-whiskey-600 hover:underline">
            Return to dashboard
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-whiskey-50 to-whiskey-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur border-b border-midnight-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="text-midnight-600 hover:text-midnight-900">
            ← Back to Dashboard
          </Link>
          <div className="text-sm text-midnight-500">
            Week {currentWeek} • Day {currentDay}
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Lesson header */}
        <div className="mb-8">
          <div className="text-whiskey-600 text-sm font-medium mb-2">
            {dayContent.type === 'info_dump' ? '📚 Information Day' : 
             dayContent.type === 'review' ? '✓ Weekly Checkpoint' : '🎹 Practice Day'}
          </div>
          <h1 className="text-3xl font-bold text-midnight-900 mb-2">
            {dayContent.title}
          </h1>
          {weekContent && (
            <p className="text-midnight-500">
              {weekContent.title}
            </p>
          )}
        </div>

        {/* Objectives */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h2 className="font-semibold text-midnight-800 mb-4">Today's Objectives</h2>
          <ul className="space-y-2">
            {dayContent.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-3 text-midnight-600">
                <span className="w-6 h-6 bg-whiskey-100 text-whiskey-700 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                  {i + 1}
                </span>
                {obj}
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h2 className="font-semibold text-midnight-800 mb-4">Lesson Content</h2>
          <div className="prose prose-midnight max-w-none">
            {dayContent.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-midnight-600 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Exercises */}
        {dayContent.exercises.length > 0 && (
          <div className="space-y-6 mb-8">
            <h2 className="font-semibold text-midnight-800 text-xl">Exercises</h2>
            
            {dayContent.exercises.map((exercise) => (
              <div key={exercise.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-midnight-100">
                  <h3 className="font-semibold text-midnight-900 mb-2">{exercise.title}</h3>
                  <p className="text-midnight-600 mb-4">{exercise.description}</p>
                  
                  <div className="text-sm text-midnight-500 mb-4">
                    Target tempo: {exercise.target_tempo} BPM
                  </div>
                </div>
                
                <ABCRenderer notation={exercise.abc_notation} />
                
                <div className="p-6 bg-midnight-50">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-midnight-800 text-sm mb-2">💡 Tips</h4>
                      <ul className="text-sm text-midnight-600 space-y-1">
                        {exercise.tips.map((tip, i) => (
                          <li key={i}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-midnight-800 text-sm mb-2">⚠️ Watch Out For</h4>
                      <ul className="text-sm text-midnight-600 space-y-1">
                        {exercise.common_mistakes.map((mistake, i) => (
                          <li key={i}>• {mistake}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Checkpoint criteria */}
        {dayContent.checkpoint_criteria && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-yellow-800 mb-4">
              ✓ Checkpoint Criteria
            </h2>
            <p className="text-yellow-700 mb-4">
              Before moving on, make sure you can honestly check off each item:
            </p>
            <ul className="space-y-2">
              {dayContent.checkpoint_criteria.map((criterion, i) => (
                <li key={i} className="flex items-start gap-3 text-yellow-800">
                  <span className="mt-1">☐</span>
                  {criterion}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Complete section */}
        {!practiceComplete && !showComplete && (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-center">
              <h2 className="font-semibold text-midnight-800 mb-2">
                Finished practicing?
              </h2>
              <p className="text-midnight-500 mb-4">
                Mark today's practice as complete to advance to the next day.
              </p>
              <button
                onClick={() => setShowComplete(true)}
                className="px-8 py-3 bg-whiskey-600 hover:bg-whiskey-700 text-white font-semibold rounded-lg transition-colors"
              >
                Complete Today's Practice
              </button>
            </div>
          </div>
        )}

        {!practiceComplete && showComplete && (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-semibold text-midnight-800 mb-4">
              How was today's practice?
            </h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-midnight-700 mb-2">
                Difficulty (1 = easy, 5 = challenging)
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    onClick={() => setDifficulty(n)}
                    className={`w-12 h-12 rounded-lg font-semibold transition-colors ${
                      difficulty === n
                        ? 'bg-whiskey-600 text-white'
                        : 'bg-midnight-100 text-midnight-600 hover:bg-midnight-200'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-midnight-700 mb-2">
                Notes (optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any struggles or breakthroughs?"
                rows={3}
                className="w-full px-4 py-3 border border-midnight-200 rounded-lg focus:ring-2 focus:ring-whiskey-500 focus:border-transparent outline-none"
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setShowComplete(false)}
                className="px-6 py-3 text-midnight-600 hover:text-midnight-800"
              >
                Cancel
              </button>
              <button
                onClick={handleComplete}
                disabled={completing}
                className="flex-1 px-8 py-3 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold rounded-lg transition-colors"
              >
                {completing ? 'Saving...' : 'Complete & Continue'}
              </button>
            </div>
          </div>
        )}

        {practiceComplete && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">✓</div>
            <h2 className="font-semibold text-green-800 mb-2">
              Today's practice is complete!
            </h2>
            <p className="text-green-700 mb-4">
              Great work. Come back tomorrow for Day {currentDay < 7 ? currentDay + 1 : 1} of Week {currentDay < 7 ? currentWeek : currentWeek + 1}.
            </p>
            <Link
              href="/dashboard"
              className="text-green-700 hover:underline"
            >
              Return to Dashboard
            </Link>
          </div>
        )}

        {/* Help link */}
        <div className="mt-8 text-center">
          <Link
            href="/chat"
            className="text-whiskey-600 hover:text-whiskey-700"
          >
            Stuck? Ask your AI teacher for help →
          </Link>
        </div>
      </div>
    </main>
  )
}
