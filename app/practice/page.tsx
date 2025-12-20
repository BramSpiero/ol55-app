import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { getDay, getWeek } from '@/lib/curriculum/data'
import PracticeContent from './PracticeContent'

interface PracticePageProps {
  searchParams: { week?: string; day?: string }
}

export default async function PracticePage({ searchParams }: PracticePageProps) {
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

  // Current progress position
  const progressWeek = progress?.current_week || 1
  const progressDay = progress?.current_day || 1

  // Check if reviewing a specific lesson (via URL params)
  const requestedWeek = searchParams.week ? parseInt(searchParams.week) : null
  const requestedDay = searchParams.day ? parseInt(searchParams.day) : null
  
  // Validate requested week/day
  const isReviewMode = requestedWeek !== null && requestedDay !== null
  let viewWeek = progressWeek
  let viewDay = progressDay
  
  if (isReviewMode) {
    // Only allow reviewing completed lessons (before current position)
    const requestedPosition = (requestedWeek - 1) * 7 + requestedDay
    const currentPosition = (progressWeek - 1) * 7 + progressDay
    
    if (requestedPosition < currentPosition && requestedWeek >= 1 && requestedDay >= 1 && requestedDay <= 7) {
      viewWeek = requestedWeek
      viewDay = requestedDay
    }
    // If invalid, fall back to current position (isReviewMode will be recalculated)
  }

  const weekContent = getWeek(viewWeek)
  const dayContent = getDay(viewWeek, viewDay)

  // Get today's practice status
  const today = new Date().toISOString().split('T')[0]
  const { data: todaysPractice } = await supabase
    .from('practice_logs')
    .select('*')
    .eq('user_id', user.id)
    .eq('practice_date', today)
    .single()

  // Determine if we're actually in review mode (viewing a past lesson)
  const actuallyReviewing = viewWeek !== progressWeek || viewDay !== progressDay

  return (
    <PracticeContent 
      profile={profile}
      weekContent={weekContent}
      dayContent={dayContent}
      currentWeek={viewWeek}
      currentDay={viewDay}
      progressWeek={progressWeek}
      progressDay={progressDay}
      todaysPractice={todaysPractice}
      userId={user.id}
      isReviewMode={actuallyReviewing}
    />
  )
}
