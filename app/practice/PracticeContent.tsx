'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import ABCRenderer from '@/components/music/ABCRenderer'
import AppShell from '@/components/layout/AppShell'
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
  const [showContinue, setShowContinue] = useState(false)

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

    // Calculate next position
    let nextWeek = currentWeek
    let nextDay = currentDay + 1
    let nextPhase = Math.ceil(nextWeek / 8)

    if (nextDay > 7) {
      nextDay = 1
      nextWeek += 1
      nextPhase = Math.ceil(nextWeek / 8)
    }

    // Calculate days completed (curriculum days, not calendar days)
    const newDaysCompleted = ((nextWeek - 1) * 7) + (nextDay - 1)

    if (nextWeek <= 48) {
      const { error: progressError } = await supabase
        .from('progress')
        .update({
          current_week: nextWeek,
          current_day: nextDay,
          phase: nextPhase,
          days_completed: newDaysCompleted
        })
        .eq('user_id', userId)

      if (progressError) {
        console.error('Error updating progress:', progressError)
      }
    }

    // Show continue option instead of redirecting
    setShowContinue(true)
    setCompleting(false)
  }

  const handleContinue = () => {
    router.refresh()
    setShowComplete(false)
    setShowContinue(false)
    setDifficulty(3)
    setNotes('')
  }

  const handleFinishForToday = () => {
    router.push('/dashboard')
    router.refresh()
  }

  if (!dayContent) {
    return (
      <AppShell displayName={profile?.display_name}>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-midnight-900 mb-4">No lesson found</h1>
            <Link href="/dashboard" className="text-whiskey-600 hover:underline">
              Return to dashboard
            </Link>
          </div>
        </div>
      </AppShell>
    )
  }

  return (
    <AppShell displayName={profile?.display_name}>
      {/* Subheader */}
      <div className="bg-white border-b border-midnight-100 px-4 py-2 sticky top-[57px] z-30 md:hidden">
        <div className="text-xs text-midnight-500 text-center">
          Week {currentWeek} • Day {currentDay} • {dayContent.type === 'info_dump' ? '📚 Info' : dayContent.type === 'review' ? '✓ Check' : '🎹 Practice'}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-4 md:py-8">
        {/* Lesson header */}
        <div className="mb-4 md:mb-8">
          <div className="text-whiskey-600 text-xs md:text-sm font-medium mb-1 md:mb-2">
            {dayContent.type === 'info_dump' ? '📚 Information Day' : 
             dayContent.type === 'review' ? '✓ Weekly Checkpoint' : '🎹 Practice Day'}
          </div>
          <h1 className="text-xl md:text-3xl font-bold text-midnight-900 mb-1 md:mb-2">
            {dayContent.title}
          </h1>
          {weekContent && (
            <p className="text-midnight-500 text-sm md:text-base">
              {weekContent.title}
            </p>
          )}
        </div>

        {/* Objectives */}
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-4 md:mb-6">
          <h2 className="font-semibold text-midnight-800 mb-3 md:mb-4 text-sm md:text-base">Today's Objectives</h2>
          <ul className="space-y-2">
            {dayContent.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 md:gap-3 text-midnight-600 text-sm md:text-base">
                <span className="w-5 h-5 md:w-6 md:h-6 bg-whiskey-100 text-whiskey-700 rounded-full flex items-center justify-center text-xs md:text-sm font-medium flex-shrink-0">
                  {i + 1}
                </span>
                {obj}
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-4 md:mb-6">
          <h2 className="font-semibold text-midnight-800 mb-3 md:mb-4 text-sm md:text-base">Lesson Content</h2>
          <div className="prose prose-sm md:prose prose-midnight max-w-none">
            {dayContent.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-midnight-600 mb-3 md:mb-4 text-sm md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Exercises */}
        {dayContent.exercises.length > 0 && (
          <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
            <h2 className="font-semibold text-midnight-800 text-lg md:text-xl">Exercises</h2>
            
            {dayContent.exercises.map((exercise) => (
              <div key={exercise.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 md:p-6 border-b border-midnight-100">
                  <h3 className="font-semibold text-midnight-900 mb-1 md:mb-2 text-sm md:text-base">{exercise.title}</h3>
                  <p className="text-midnight-600 mb-3 md:mb-4 text-sm md:text-base">{exercise.description}</p>
                  
                  <div className="text-xs md:text-sm text-midnight-500">
                    Target tempo: {exercise.target_tempo} BPM
                  </div>
                </div>
                
                <ABCRenderer notation={exercise.abc_notation} />
                
                <div className="p-4 md:p-6 bg-midnight-50">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-midnight-800 text-xs md:text-sm mb-2">💡 Tips</h4>
                      <ul className="text-xs md:text-sm text-midnight-600 space-y-1">
                        {exercise.tips.map((tip, i) => (
                          <li key={i}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-midnight-800 text-xs md:text-sm mb-2">⚠️ Watch Out For</h4>
                      <ul className="text-xs md:text-sm text-midnight-600 space-y-1">
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
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 md:p-6 mb-6 md:mb-8">
            <h2 className="font-semibold text-yellow-800 mb-3 md:mb-4 text-sm md:text-base">
              ✓ Checkpoint Criteria
            </h2>
            <p className="text-yellow-700 mb-3 md:mb-4 text-sm md:text-base">
              Before moving on, make sure you can honestly check off each item:
            </p>
            <ul className="space-y-2">
              {dayContent.checkpoint_criteria.map((criterion, i) => (
                <li key={i} className="flex items-start gap-2 md:gap-3 text-yellow-800 text-sm md:text-base">
                  <span className="mt-0.5">☐</span>
                  {criterion}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Complete section */}
        {!practiceComplete && !showComplete && (
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
            <div className="text-center">
              <h2 className="font-semibold text-midnight-800 mb-2 text-sm md:text-base">
                Finished practicing?
              </h2>
              <p className="text-midnight-500 mb-4 text-sm md:text-base">
                Mark today's practice as complete to advance.
              </p>
              <button
                onClick={() => setShowComplete(true)}
                className="w-full sm:w-auto px-8 py-3 bg-whiskey-600 hover:bg-whiskey-700 text-white font-semibold rounded-lg transition-colors min-h-[48px]"
              >
                Complete Today's Practice
              </button>
            </div>
          </div>
        )}

        {!practiceComplete && showComplete && (
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
            <h2 className="font-semibold text-midnight-800 mb-4 text-sm md:text-base">
              How was today's practice?
            </h2>
            
            <div className="mb-4 md:mb-6">
              <label className="block text-xs md:text-sm font-medium text-midnight-700 mb-2">
                Difficulty (1 = easy, 5 = challenging)
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    onClick={() => setDifficulty(n)}
                    className={`flex-1 h-12 rounded-lg font-semibold transition-colors ${
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

            <div className="mb-4 md:mb-6">
              <label className="block text-xs md:text-sm font-medium text-midnight-700 mb-2">
                Notes (optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any struggles or breakthroughs?"
                rows={3}
                className="w-full px-3 md:px-4 py-2 md:py-3 border border-midnight-200 rounded-lg focus:ring-2 focus:ring-whiskey-500 focus:border-transparent outline-none text-sm md:text-base"
              />
            </div>

            <div className="flex flex-col-reverse sm:flex-row gap-3">
              <button
                onClick={() => setShowComplete(false)}
                className="px-6 py-3 text-midnight-600 hover:text-midnight-800 min-h-[48px]"
              >
                Cancel
              </button>
              <button
                onClick={handleComplete}
                disabled={completing}
                className="flex-1 px-8 py-3 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold rounded-lg transition-colors min-h-[48px]"
              >
                {completing ? 'Saving...' : 'Complete & Continue'}
              </button>
            </div>
          </div>
        )}

        {showContinue && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 md:p-6">
            <div className="text-center mb-6">
              <div className="text-3xl md:text-4xl mb-3">✓</div>
              <h2 className="font-semibold text-green-800 mb-2 text-base md:text-lg">
                Day {currentDay} complete!
              </h2>
              <p className="text-green-700 text-sm md:text-base">
                Great work. Want to keep going?
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleFinishForToday}
                className="flex-1 px-6 py-3 border border-green-300 text-green-700 hover:bg-green-100 rounded-lg font-medium transition-colors min-h-[48px]"
              >
                Done for today
              </button>
              <button
                onClick={handleContinue}
                className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors min-h-[48px]"
              >
                Continue to Day {currentDay < 7 ? currentDay + 1 : 1} →
              </button>
            </div>
          </div>
        )}

        {practiceComplete && !showContinue && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 md:p-6 text-center">
            <div className="text-3xl md:text-4xl mb-3 md:mb-4">✓</div>
            <h2 className="font-semibold text-green-800 mb-2 text-sm md:text-base">
              Today's practice is complete!
            </h2>
            <p className="text-green-700 mb-4 text-sm md:text-base">
              Great work. Come back tomorrow.
            </p>
            <Link
              href="/dashboard"
              className="text-green-700 hover:underline text-sm md:text-base"
            >
              Return to Dashboard
            </Link>
          </div>
        )}

        {/* Help link */}
        <div className="mt-6 md:mt-8 text-center">
          <Link
            href="/chat"
            className="text-whiskey-600 hover:text-whiskey-700 text-sm md:text-base"
          >
            Stuck? Ask your AI teacher for help →
          </Link>
        </div>
      </div>
    </AppShell>
  )
}
