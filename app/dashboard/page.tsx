import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { getDay, getWeek } from '@/lib/curriculum/data'
import { getPhaseName } from '@/lib/curriculum/types'
import Link from 'next/link'

export default async function DashboardPage() {
  const supabase = createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (!profile?.onboarding_completed) redirect('/onboarding')

  const { data: progress } = await supabase
    .from('progress')
    .select('*')
    .eq('user_id', user.id)
    .single()

  const currentWeek = progress?.current_week || 1
  const currentDay = progress?.current_day || 1
  const currentPhase = progress?.phase || 1

  const weekContent = getWeek(currentWeek)
  const dayContent = getDay(currentWeek, currentDay)

  // Get today's practice status
  const today = new Date().toISOString().split('T')[0]
  const { data: todaysPractice } = await supabase
    .from('practice_logs')
    .select('*')
    .eq('user_id', user.id)
    .eq('practice_date', today)
    .single()

  const practiceComplete = todaysPractice?.completed || false

  return (
    <main className="min-h-screen bg-gradient-to-b from-whiskey-50 to-whiskey-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur border-b border-midnight-100">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="text-xl font-bold text-midnight-900">
            Ol' 55
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/practice" className="text-midnight-600 hover:text-midnight-900">
              Practice
            </Link>
            <Link href="/chat" className="text-midnight-600 hover:text-midnight-900">
              Ask Teacher
            </Link>
            <div className="text-sm text-midnight-500">
              {profile?.display_name}
            </div>
          </nav>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Welcome section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-midnight-900 mb-2">
            {getGreeting()}, {profile?.display_name}
          </h1>
          <p className="text-midnight-600">
            {practiceComplete 
              ? "Great work today! Come back tomorrow for your next lesson."
              : "Ready for your 15 minutes?"}
          </p>
        </div>

        {/* Progress overview */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-sm text-midnight-500 mb-1">Current Phase</div>
            <div className="text-2xl font-bold text-midnight-900">
              {currentPhase}. {getPhaseName(currentPhase)}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-sm text-midnight-500 mb-1">Week</div>
            <div className="text-2xl font-bold text-midnight-900">
              {currentWeek} of 48
            </div>
            <div className="mt-2 h-2 bg-midnight-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-whiskey-500 rounded-full"
                style={{ width: `${(currentWeek / 48) * 100}%` }}
              />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-sm text-midnight-500 mb-1">Today</div>
            <div className="text-2xl font-bold text-midnight-900">
              Day {currentDay}
            </div>
            <div className="text-sm text-midnight-500 mt-1">
              {dayContent?.type === 'info_dump' ? '📚 Info Day' : 
               dayContent?.type === 'review' ? '✓ Checkpoint' : '🎹 Practice'}
            </div>
          </div>
        </div>

        {/* Today's lesson card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="bg-midnight-900 text-white px-6 py-4">
            <div className="text-whiskey-300 text-sm mb-1">
              Week {currentWeek} • Day {currentDay}
            </div>
            <h2 className="text-xl font-semibold">
              {dayContent?.title || 'Today\'s Lesson'}
            </h2>
          </div>
          
          <div className="p-6">
            {dayContent && (
              <>
                <div className="mb-6">
                  <h3 className="font-semibold text-midnight-800 mb-2">Objectives</h3>
                  <ul className="space-y-2">
                    {dayContent.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2 text-midnight-600">
                        <span className="text-whiskey-500 mt-1">•</span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-midnight-800 mb-2">Today's Focus</h3>
                  <p className="text-midnight-600 whitespace-pre-line">
                    {dayContent.content.slice(0, 300)}
                    {dayContent.content.length > 300 && '...'}
                  </p>
                </div>

                <div className="flex gap-4">
                  <Link
                    href="/practice"
                    className={`flex-1 text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      practiceComplete
                        ? 'bg-green-100 text-green-800'
                        : 'bg-whiskey-600 hover:bg-whiskey-700 text-white'
                    }`}
                  >
                    {practiceComplete ? '✓ Completed' : 'Start Practice'}
                  </Link>
                  <Link
                    href="/chat"
                    className="px-6 py-3 border border-midnight-200 rounded-lg text-midnight-700 hover:bg-midnight-50 transition-colors"
                  >
                    Ask a Question
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Week overview */}
        {weekContent && (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-midnight-800 mb-4">
              Week {currentWeek}: {weekContent.title}
            </h3>
            <p className="text-midnight-600 mb-4">{weekContent.overview}</p>
            
            <div className="flex gap-2">
              {weekContent.days.map((day) => (
                <div
                  key={day.day_number}
                  className={`flex-1 p-3 rounded-lg text-center text-sm ${
                    day.day_number === currentDay
                      ? 'bg-whiskey-100 text-whiskey-800 font-medium'
                      : day.day_number < currentDay
                      ? 'bg-green-50 text-green-700'
                      : 'bg-midnight-50 text-midnight-500'
                  }`}
                >
                  <div>Day {day.day_number}</div>
                  <div className="text-xs mt-1">
                    {day.day_number < currentDay ? '✓' : 
                     day.day_number === currentDay ? '→' : '○'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}
