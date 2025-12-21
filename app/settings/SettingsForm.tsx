'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

interface SettingsFormProps {
  userId: string
  displayName: string
  allowProfanity: boolean
  equipment: string
  musicalBackground: string
}

export default function SettingsForm({
  userId,
  displayName: initialName,
  allowProfanity: initialProfanity,
  equipment: initialEquipment,
  musicalBackground: initialBackground
}: SettingsFormProps) {
  const [displayName, setDisplayName] = useState(initialName)
  const [allowProfanity, setAllowProfanity] = useState(initialProfanity)
  const [equipment, setEquipment] = useState(initialEquipment)
  const [musicalBackground, setMusicalBackground] = useState(initialBackground)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  
  const supabase = createClient()

  const handleSave = async () => {
    setSaving(true)
    setSaved(false)

    const { error } = await supabase
      .from('profiles')
      .update({
        display_name: displayName,
        allow_profanity: allowProfanity,
        equipment: equipment,
        musical_background: musicalBackground
      })
      .eq('id', userId)

    if (error) {
      console.error('Error saving settings:', error)
      alert('Error saving settings: ' + error.message)
    } else {
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    }

    setSaving(false)
  }

  return (
    <div className="space-y-8">
      {/* Profile Section */}
      <section className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-midnight-800 mb-4">Profile</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-midnight-700 mb-1">
              Display Name
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-4 py-2 border border-midnight-200 rounded-lg focus:ring-2 focus:ring-whiskey-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-midnight-700 mb-1">
              Equipment
            </label>
            <select
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)}
              className="w-full px-4 py-2 border border-midnight-200 rounded-lg focus:ring-2 focus:ring-whiskey-500 focus:border-transparent outline-none"
            >
              <option value="acoustic">Acoustic Piano</option>
              <option value="weighted_digital">Weighted Digital Piano</option>
              <option value="unweighted">Unweighted Keyboard</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-midnight-700 mb-1">
              Musical Background
            </label>
            <select
              value={musicalBackground}
              onChange={(e) => setMusicalBackground(e.target.value)}
              className="w-full px-4 py-2 border border-midnight-200 rounded-lg focus:ring-2 focus:ring-whiskey-500 focus:border-transparent outline-none"
            >
              <option value="none">Complete Beginner</option>
              <option value="some">Some Experience (can read music)</option>
              <option value="significant">Significant Experience</option>
            </select>
          </div>
        </div>
      </section>

      {/* AI Teacher Section */}
      <section className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-midnight-800 mb-4">AI Teacher</h2>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-midnight-700 mb-1">
                Language Style
              </label>
              <p className="text-sm text-midnight-500 mb-2">
                Allow your AI teacher to use casual language and mild profanity for emphasis. 
                This creates a more natural "tough love" coaching experience.
              </p>
            </div>
            <button
              onClick={() => setAllowProfanity(!allowProfanity)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                allowProfanity ? 'bg-whiskey-600' : 'bg-midnight-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  allowProfanity ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          <div className={`p-4 rounded-lg ${allowProfanity ? 'bg-whiskey-50' : 'bg-midnight-50'}`}>
            <p className="text-sm text-midnight-600">
              {allowProfanity 
                ? '🔥 Profanity ON: Your teacher might say things like "Don\'t half-ass this exercise" or "That sounded like crap, let\'s fix it."'
                : '✨ Profanity OFF: Your teacher will keep language clean and professional while still being direct and honest.'}
            </p>
          </div>
        </div>
      </section>

      {/* Save Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-6 py-3 bg-whiskey-600 hover:bg-whiskey-700 disabled:bg-whiskey-400 text-white font-semibold rounded-lg transition-colors"
        >
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
        
        {saved && (
          <span className="text-green-600 font-medium">✓ Settings saved!</span>
        )}
      </div>
    </div>
  )
}
