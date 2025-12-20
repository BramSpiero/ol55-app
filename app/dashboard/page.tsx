import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { getDay, getWeek } from '@/lib/curriculum/data'
import { getPhaseName } from '@/lib/curriculum/types'
import { calculatePaceInfo, getStatusColor, getStatusBgColor, getStatusLabel } from '@/lib/pace/calculations'
import Link from 'next/link'
import AppShell from '@/components/layout/AppShell'

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
  const daysCompleted = progress?.days_completed || ((currentWeek - 1) * 7) + (currentDay - 1)

  const weekContent = getWeek(currentWeek)
  const dayContent = getDay(currentWeek, currentDay)

  // Calculate pace info
  const startDate = profile?.start_date ? new Date(profile.start_date) : new Date()
  const targetEndDate = profile?.target_end_date 
    ? new Date(profile.target_end_date) 
    : new Date(startDate.getTime() + 365 * 24 * 60 * 60 * 1000)
  
  const paceInfo = calculatePaceInfo(startDate, targetEndDate, daysCompleted)

  // Get today's practice status (but don't block continuation)
  const today = new Date().toISOString().split('T')[0]
  const { data: todaysPractice } = await supabase
    .from('practice_logs')
    .select('*')
    .eq('user_id', user.id)
    .eq('practice_date', today)
    .single()

  const practicedToday = todaysPractice?.completed || false

  return (
    <AppShell displayName={profile?.display_name}>
      <div className="max-w-5xl mx-auto px-4 py-6 md:py-8">
        {/* Welcome section */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-midnight-900 mb-2">
            {getGreeting()}, {profile?.display_name}
          </h1>
          <p className="text-midnight-600">
            {practicedToday 
              ? "Great work today! Ready for another round?"
              : "Ready for your 15 minutes?"}
          </p>
        </div>

        {/* Pace indicator */}
        <div className={`rounded-xl p-4 mb-6 border ${getStatusBgColor(paceInfo.status)}`}>
          <div className="flex items-center justify-between">
            <div>
              <span className={`text-sm font-medium ${getStatusColor(paceInfo.status)}`}>
                {getStatusLabel(paceInfo.status)}
              </span>
              <span className="text-midnight-500 text-sm ml-2">
                {paceInfo.bufferDays >= 0 ? '+' : ''}{paceInfo.bufferDays} days
              </span>
            </div>
            <Link href="/progress" className="text-xs text-midnight-500 hover:text-midnight-700">
              View details →
            </Link>
          </div>
          <p className="text-sm text-midnight-600 mt-1">
            {paceInfo.message.slice(0, 100)}{paceInfo.message.length > 100 ? '...' : ''}
          </p>
        </div>

        {/* Progress overview - stack on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
          <div className="col-span-2 md:col-span-1 bg-white rounded-xl p-4 md:p-6 shadow-sm">
            <div className="text-xs md:text-sm text-midnight-500 mb-1">Current Phase</div>
            <div className="text-xl md:text-2xl font-bold text-midnight-900">
              {currentPhase}. {getPhaseName(currentPhase)}
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
            <div className="text-xs md:text-sm text-midnight-500 mb-1">Week</div>
            <div className="text-xl md:text-2xl font-bold text-midnight-900">
              {currentWeek}/48
            </div>
            <div className="mt-2 h-1.5 md:h-2 bg-midnight-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-whiskey-500 rounded-full"
                style={{ width: `${(currentWeek / 48) * 100}%` }}
              />
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
            <div className="text-xs md:text-sm text-midnight-500 mb-1">Today</div>
            <div className="text-xl md:text-2xl font-bold text-midnight-900">
              Day {currentDay}
            </div>
            <div className="text-xs md:text-sm text-midnight-500 mt-1">
              {dayContent?.type === 'info_dump' ? '📚 Info' : 
               dayContent?.type === 'review' ? '✓ Check' : '🎹 Practice'}
            </div>
          </div>
        </div>

        {/* Today's lesson card */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden mb-6 md:mb-8">
          <div className="bg-midnight-900 text-white px-4 md:px-6 py-3 md:py-4">
            <div className="text-whiskey-300 text-xs md:text-sm mb-1">
              Week {currentWeek} • Day {currentDay}
            </div>
            <h2 className="text-lg md:text-xl font-semibold">
              {dayContent?.title || 'Today\'s Lesson'}
            </h2>
          </div>
          
          <div className="p-4 md:p-6">
            {dayContent && (
              <>
                <div className="mb-4 md:mb-6">
                  <h3 className="font-semibold text-midnight-800 mb-2 text-sm md:text-base">Objectives</h3>
                  <ul className="space-y-1.5 md:space-y-2">
                    {dayContent.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2 text-midnight-600 text-sm md:text-base">
                        <span className="text-whiskey-500 mt-0.5">•</span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 md:mb-6">
                  <h3 className="font-semibold text-midnight-800 mb-2 text-sm md:text-base">Today's Focus</h3>
                  <p className="text-midnight-600 text-sm md:text-base whitespace-pre-line">
                    {dayContent.content.slice(0, 200)}
                    {dayContent.content.length > 200 && '...'}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/practice"
                    className="flex-1 text-center py-3 md:py-3 px-6 rounded-lg font-semibold transition-colors min-h-[48px] flex items-center justify-center bg-whiskey-600 hover:bg-whiskey-700 text-white"
                  >
                    {practicedToday ? 'Continue Learning' : 'Start Practice'}
                  </Link>
                  <Link
                    href="/chat"
                    className="px-6 py-3 border border-midnight-200 rounded-lg text-midnight-700 hover:bg-midnight-50 transition-colors text-center min-h-[48px] flex items-center justify-center"
                  >
                    Ask a Question
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Week overview - horizontal scroll on mobile */}
        {weekContent && (
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
            <h3 className="font-semibold text-midnight-800 mb-3 md:mb-4 text-sm md:text-base">
              Week {currentWeek}: {weekContent.title}
            </h3>
            <p className="text-midnight-600 mb-4 text-sm md:text-base hidden md:block">{weekContent.overview}</p>
            
            <div className="flex gap-1.5 md:gap-2 overflow-x-auto pb-2 -mx-1 px-1">
              {weekContent.days.map((day) => (
                <div
                  key={day.day_number}
                  className={`flex-shrink-0 w-12 md:flex-1 p-2 md:p-3 rounded-lg text-center text-xs md:text-sm ${
                    day.day_number === currentDay
                      ? 'bg-whiskey-100 text-whiskey-800 font-medium'
                      : day.day_number < currentDay
                      ? 'bg-green-50 text-green-700'
                      : 'bg-midnight-50 text-midnight-500'
                  }`}
                >
                  <div>D{day.day_number}</div>
                  <div className="text-xs mt-0.5 md:mt-1">
                    {day.day_number < currentDay ? '✓' : 
                     day.day_number === currentDay ? '→' : '○'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Version indicator */}
        <div className="text-center mt-8 mb-4">
          <span className="text-xs text-midnight-400">v0.6.0</span>
        </div>
      </div>
    </AppShell>
  )
}

function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}
