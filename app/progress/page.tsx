import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { getPhaseName } from '@/lib/curriculum/types'
import AppShell from '@/components/layout/AppShell'

export default async function ProgressPage() {
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

  const { data: practiceLogs } = await supabase
    .from('practice_logs')
    .select('*')
    .eq('user_id', user.id)
    .eq('completed', true)
    .order('practice_date', { ascending: false })
    .limit(30)

  const currentWeek = progress?.current_week || 1
  const currentDay = progress?.current_day || 1
  const currentPhase = progress?.phase || 1
  
  const totalDaysCompleted = ((currentWeek - 1) * 7) + (currentDay - 1)
  const totalDays = 48 * 7
  const percentComplete = Math.round((totalDaysCompleted / totalDays) * 100)

  const streak = calculateStreak(practiceLogs || [])

  return (
    <AppShell displayName={profile?.display_name}>
      <div className="max-w-4xl mx-auto px-4 py-6 md:py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-midnight-900 mb-6 md:mb-8">
          Your Progress
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
          <StatCard 
            label="Current Week" 
            value={`${currentWeek}/48`}
            subtext={`Day ${currentDay}`}
          />
          <StatCard 
            label="Phase" 
            value={currentPhase.toString()}
            subtext={getPhaseName(currentPhase)}
          />
          <StatCard 
            label="Streak" 
            value={`${streak}`}
            subtext={streak === 1 ? 'day' : 'days'}
          />
          <StatCard 
            label="Complete" 
            value={`${percentComplete}%`}
            subtext={`${totalDaysCompleted} days`}
          />
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-6 md:mb-8">
          <h2 className="font-semibold text-midnight-800 mb-4 text-sm md:text-base">
            48-Week Journey
          </h2>
          
          <div className="h-4 md:h-6 bg-midnight-100 rounded-full overflow-hidden mb-4">
            <div 
              className="h-full bg-gradient-to-r from-whiskey-400 to-whiskey-600 rounded-full transition-all duration-500"
              style={{ width: `${percentComplete}%` }}
            />
          </div>

          <div className="flex justify-between text-xs text-midnight-500">
            {[1, 2, 3, 4, 5, 6].map((phase) => (
              <div 
                key={phase}
                className={`text-center ${currentPhase >= phase ? 'text-whiskey-600 font-medium' : ''}`}
              >
                <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full mx-auto mb-1 ${
                  currentPhase > phase ? 'bg-whiskey-500' :
                  currentPhase === phase ? 'bg-whiskey-400' : 'bg-midnight-200'
                }`} />
                <span className="hidden md:inline">Phase {phase}</span>
                <span className="md:hidden">P{phase}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-6 md:mb-8">
          <h2 className="font-semibold text-midnight-800 mb-4 text-sm md:text-base">
            Phase Overview
          </h2>
          
          <div className="space-y-3">
            {[
              { phase: 1, name: 'Foundation', weeks: '1-8', desc: 'Keyboard geography, hand position, basic chords' },
              { phase: 2, name: 'Song Introduction', weeks: '9-16', desc: 'Learning Ol\' 55 hands separately' },
              { phase: 3, name: 'Hands Together', weeks: '17-24', desc: 'Combining hands, building coordination' },
              { phase: 4, name: 'Adding Voice', weeks: '25-32', desc: 'Singing while playing' },
              { phase: 5, name: 'Refinement', weeks: '33-40', desc: 'Dynamics, expression, polish' },
              { phase: 6, name: 'Performance Prep', weeks: '41-48', desc: 'Performance ready' },
            ].map((p) => (
              <div 
                key={p.phase}
                className={`p-3 md:p-4 rounded-lg border ${
                  currentPhase === p.phase 
                    ? 'border-whiskey-300 bg-whiskey-50' 
                    : currentPhase > p.phase
                    ? 'border-green-200 bg-green-50'
                    : 'border-midnight-100 bg-midnight-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-medium text-sm md:text-base ${
                    currentPhase >= p.phase ? 'text-midnight-900' : 'text-midnight-500'
                  }`}>
                    {p.phase}. {p.name}
                  </span>
                  <span className="text-xs text-midnight-500">
                    Weeks {p.weeks}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-midnight-500">
                  {p.desc}
                </p>
                {currentPhase > p.phase && (
                  <span className="text-xs text-green-600 font-medium">✓ Complete</span>
                )}
                {currentPhase === p.phase && (
                  <span className="text-xs text-whiskey-600 font-medium">→ In Progress</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {practiceLogs && practiceLogs.length > 0 && (
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
            <h2 className="font-semibold text-midnight-800 mb-4 text-sm md:text-base">
              Recent Practice
            </h2>
            
            <div className="space-y-2">
              {practiceLogs.slice(0, 7).map((log) => (
                <div 
                  key={log.id}
                  className="flex items-center justify-between py-2 border-b border-midnight-100 last:border-0"
                >
                  <div className="text-sm text-midnight-600">
                    {formatDate(log.practice_date)}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-midnight-500">
                      W{log.week_number}D{log.day_number}
                    </span>
                    <DifficultyDots rating={log.difficulty_rating} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  )
}

function StatCard({ label, value, subtext }: { label: string, value: string, subtext: string }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="text-xs text-midnight-500 mb-1">{label}</div>
      <div className="text-xl md:text-2xl font-bold text-midnight-900">{value}</div>
      <div className="text-xs text-midnight-400">{subtext}</div>
    </div>
  )
}

function DifficultyDots({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <div 
          key={n}
          className={`w-2 h-2 rounded-full ${
            n <= rating ? 'bg-whiskey-400' : 'bg-midnight-200'
          }`}
        />
      ))}
    </div>
  )
}

function calculateStreak(logs: any[]): number {
  if (!logs.length) return 0
  
  let streak = 0
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  for (let i = 0; i < logs.length; i++) {
    const logDate = new Date(logs[i].practice_date)
    logDate.setHours(0, 0, 0, 0)
    
    const expectedDate = new Date(today)
    expectedDate.setDate(today.getDate() - i)
    
    if (logDate.getTime() === expectedDate.getTime()) {
      streak++
    } else if (i === 0 && logDate.getTime() === new Date(today.getTime() - 86400000).getTime()) {
      // Allow yesterday as start of streak
      streak++
    } else {
      break
    }
  }
  
  return streak
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)
  
  if (date.toDateString() === today.toDateString()) {
    return 'Today'
  } else if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday'
  } else {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }
}
