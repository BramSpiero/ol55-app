import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import AppShell from '@/components/layout/AppShell'
import SettingsForm from './SettingsForm'

export default async function SettingsPage() {
  const supabase = createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (!profile?.onboarding_completed) redirect('/onboarding')

  return (
    <AppShell displayName={profile?.display_name}>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-midnight-900 mb-6">Settings</h1>
        
        <SettingsForm 
          userId={user.id}
          displayName={profile.display_name}
          allowProfanity={profile.allow_profanity ?? true}
          equipment={profile.equipment}
          musicalBackground={profile.musical_background}
        />
      </div>
    </AppShell>
  )
}
