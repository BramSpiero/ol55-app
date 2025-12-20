import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { getDay, getWeek } from '@/lib/curriculum/data'
import PracticeContent from './PracticeContent'

export default async function PracticePage() {
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

  console.log('=== PRACTICE PAGE DEBUG ===')
  console.log('User ID:', user.id)
  console.log('Progress from DB:', progress)
  console.log('Current Week:', currentWeek, 'Current Day:', currentDay)

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

  return (
    <PracticeContent 
      profile={profile}
      weekContent={weekContent}
      dayContent={dayContent}
      currentWeek={currentWeek}
      currentDay={currentDay}
      progressWeek={currentWeek}
      progressDay={currentDay}
      todaysPractice={todaysPractice}
      userId={user.id}
      isReviewMode={false}
    />
  )
}
