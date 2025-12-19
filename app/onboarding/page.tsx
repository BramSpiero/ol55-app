'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

type Step = 'name' | 'background' | 'equipment' | 'schedule'

export default function OnboardingPage() {
  const router = useRouter()
  const supabase = createClient()
  
  const [step, setStep] = useState<Step>('name')
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    display_name: '',
    musical_background: '',
    equipment: '',
    practice_time_preference: '',
    start_date: getNextMonday()
  })

  function getNextMonday(): string {
    const today = new Date()
    const day = today.getDay()
    const daysUntilMonday = day === 0 ? 1 : 8 - day
    const nextMonday = new Date(today)
    nextMonday.setDate(today.getDate() + daysUntilMonday)
    return nextMonday.toISOString().split('T')[0]
  }

  const handleSubmit = async () => {
    setLoading(true)
    
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }

    const { error } = await supabase
      .from('profiles')
      .update({
        display_name: formData.display_name,
        musical_background: formData.musical_background,
        equipment: formData.equipment,
        practice_time_preference: formData.practice_time_preference,
        start_date: formData.start_date,
        onboarding_completed: true
      })
      .eq('id', user.id)

    if (error) {
      console.error('Error updating profile:', error)
      setLoading(false)
      return
    }

    router.push('/dashboard')
  }

  const nextStep = () => {
    const steps: Step[] = ['name', 'background', 'equipment', 'schedule']
    const currentIndex = steps.indexOf(step)
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1])
    }
  }

  const prevStep = () => {
    const steps: Step[] = ['name', 'background', 'equipment', 'schedule']
    const currentIndex = steps.indexOf(step)
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1])
    }
  }

  const canProceed = () => {
    switch (step) {
      case 'name': return formData.display_name.trim().length > 0
      case 'background': return formData.musical_background !== ''
      case 'equipment': return formData.equipment !== ''
      case 'schedule': return formData.practice_time_preference !== ''
      default: return false
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-whiskey-50 to-whiskey-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <div className="flex justify-center gap-2 mb-8">
          {['name', 'background', 'equipment', 'schedule'].map((s) => (
            <div
              key={s}
              className={`w-3 h-3 rounded-full ${
                s === step ? 'bg-whiskey-600' : 
                ['name', 'background', 'equipment', 'schedule'].indexOf(s) < ['name', 'background', 'equipment', 'schedule'].indexOf(step) 
                  ? 'bg-whiskey-400' : 'bg-whiskey-200'
              }`}
            />
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {step === 'name' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-midnight-900 mb-2">What should I call you?</h2>
                <p className="text-midnight-500">This is how your AI teacher will address you.</p>
              </div>
              <input
                type="text"
                value={formData.display_name}
                onChange={(e) => setFormData({ ...formData, display_name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 border border-midnight-200 rounded-lg focus:ring-2 focus:ring-whiskey-500 focus:border-transparent outline-none"
                autoFocus
              />
            </div>
          )}

          {step === 'background' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-midnight-900 mb-2">What's your musical background?</h2>
                <p className="text-midnight-500">Be honest—this helps calibrate your curriculum.</p>
              </div>
              <div className="space-y-3">
                {[
                  { value: 'none', label: 'Complete beginner', desc: 'Never played an instrument seriously' },
                  { value: 'some', label: 'Some experience', desc: 'Played an instrument before, can read music' },
                  { value: 'significant', label: 'Significant experience', desc: 'Played for years, comfortable with theory' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setFormData({ ...formData, musical_background: option.value })}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      formData.musical_background === option.value
                        ? 'border-whiskey-500 bg-whiskey-50'
                        : 'border-midnight-200 hover:border-midnight-300'
                    }`}
                  >
                    <div className="font-medium text-midnight-800">{option.label}</div>
                    <div className="text-sm text-midnight-500">{option.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'equipment' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-midnight-900 mb-2">What are you playing on?</h2>
                <p className="text-midnight-500">Different instruments have different feels.</p>
              </div>
              <div className="space-y-3">
                {[
                  { value: 'acoustic', label: 'Acoustic piano', desc: 'Traditional piano with hammers and strings' },
                  { value: 'weighted_digital', label: 'Weighted digital piano', desc: 'Electric keyboard with weighted keys' },
                  { value: 'unweighted', label: 'Unweighted keyboard', desc: 'Synth-style keys without weight' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setFormData({ ...formData, equipment: option.value })}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      formData.equipment === option.value
                        ? 'border-whiskey-500 bg-whiskey-50'
                        : 'border-midnight-200 hover:border-midnight-300'
                    }`}
                  >
                    <div className="font-medium text-midnight-800">{option.label}</div>
                    <div className="text-sm text-midnight-500">{option.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'schedule' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-midnight-900 mb-2">When do you prefer to practice?</h2>
                <p className="text-midnight-500">15 minutes daily. When works best?</p>
              </div>
              <div className="space-y-3">
                {[
                  { value: 'morning', label: 'Morning', desc: 'Before the day starts' },
                  { value: 'afternoon', label: 'Afternoon', desc: 'Midday break' },
                  { value: 'evening', label: 'Evening', desc: 'Wind down the day' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setFormData({ ...formData, practice_time_preference: option.value })}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      formData.practice_time_preference === option.value
                        ? 'border-whiskey-500 bg-whiskey-50'
                        : 'border-midnight-200 hover:border-midnight-300'
                    }`}
                  >
                    <div className="font-medium text-midnight-800">{option.label}</div>
                    <div className="text-sm text-midnight-500">{option.desc}</div>
                  </button>
                ))}
              </div>
              
              <div className="pt-4 border-t border-midnight-100">
                <label className="block text-sm font-medium text-midnight-700 mb-2">
                  Start date
                </label>
                <input
                  type="date"
                  value={formData.start_date}
                  onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                  className="w-full px-4 py-3 border border-midnight-200 rounded-lg focus:ring-2 focus:ring-whiskey-500 focus:border-transparent outline-none"
                />
                <p className="mt-2 text-sm text-midnight-400">We recommend starting on a Monday.</p>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t border-midnight-100">
            {step !== 'name' ? (
              <button
                onClick={prevStep}
                className="px-6 py-2 text-midnight-600 hover:text-midnight-800 font-medium"
              >
                Back
              </button>
            ) : (
              <div />
            )}
            
            {step === 'schedule' ? (
              <button
                onClick={handleSubmit}
                disabled={!canProceed() || loading}
                className="px-8 py-3 bg-whiskey-600 hover:bg-whiskey-700 disabled:bg-whiskey-400 text-white font-semibold rounded-lg transition-colors"
              >
                {loading ? 'Setting up...' : 'Start Learning'}
              </button>
            ) : (
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className="px-8 py-3 bg-whiskey-600 hover:bg-whiskey-700 disabled:bg-whiskey-400 text-white font-semibold rounded-lg transition-colors"
              >
                Continue
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
