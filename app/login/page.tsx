'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      setMessage({ type: 'error', text: error.message })
    } else {
      setMessage({ 
        type: 'success', 
        text: 'Check your email for the login link!' 
      })
    }
    
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-whiskey-50 to-whiskey-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold text-midnight-900">
            Ol' 55
          </Link>
          <p className="text-midnight-500 mt-2">Sign in to continue your journey</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-midnight-700 mb-2"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 border border-midnight-200 rounded-lg focus:ring-2 focus:ring-whiskey-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-whiskey-600 hover:bg-whiskey-700 disabled:bg-whiskey-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              {loading ? 'Sending link...' : 'Send magic link'}
            </button>
          </form>

          {message && (
            <div className={`mt-4 p-4 rounded-lg ${
              message.type === 'success' 
                ? 'bg-green-50 text-green-800' 
                : 'bg-red-50 text-red-800'
            }`}>
              {message.text}
            </div>
          )}

          <p className="mt-6 text-center text-sm text-midnight-500">
            We'll send you a magic link to sign in. No password needed.
          </p>
        </div>

        <p className="mt-6 text-center text-sm text-midnight-400">
          <Link href="/" className="hover:text-whiskey-600">
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  )
}
