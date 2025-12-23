'use client'

import { useState, useEffect } from 'react'

type Platform = 'ios' | 'android' | 'desktop' | 'unknown'

function detectPlatform(): Platform {
  if (typeof window === 'undefined') return 'unknown'
  
  const ua = navigator.userAgent.toLowerCase()
  
  if (/iphone|ipad|ipod/.test(ua)) return 'ios'
  if (/android/.test(ua)) return 'android'
  return 'desktop'
}

function isStandalone(): boolean {
  if (typeof window === 'undefined') return false
  
  // Check if already running as installed PWA
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as any).standalone === true
  )
}

interface AddToHomeScreenProps {
  onSkip?: () => void
  onComplete?: () => void
  showSkip?: boolean
}

export default function AddToHomeScreen({ onSkip, onComplete, showSkip = true }: AddToHomeScreenProps) {
  const [platform, setPlatform] = useState<Platform>('unknown')
  const [alreadyInstalled, setAlreadyInstalled] = useState(false)

  useEffect(() => {
    setPlatform(detectPlatform())
    setAlreadyInstalled(isStandalone())
  }, [])

  if (alreadyInstalled) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="text-4xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-midnight-900 mb-2">You're all set!</h2>
          <p className="text-midnight-500">The app is already installed on your device.</p>
        </div>
        <button
          onClick={onComplete}
          className="w-full px-8 py-3 bg-whiskey-600 hover:bg-whiskey-700 text-white font-semibold rounded-lg transition-colors"
        >
          Continue
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-midnight-900 mb-2">Add to Home Screen</h2>
        <p className="text-midnight-500">
          Install Ol' 55 on your device for the best experience—quick access, full screen, and works offline.
        </p>
      </div>

      {platform === 'ios' && (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
          <div className="flex items-start gap-4">
            <div className="text-3xl">📱</div>
            <div className="space-y-3">
              <h3 className="font-semibold text-midnight-800">On iPhone/iPad:</h3>
              <ol className="space-y-2 text-sm text-midnight-600">
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs font-medium">1</span>
                  <span>Tap the <strong>Share</strong> button <span className="inline-block bg-midnight-100 rounded px-1.5 py-0.5 text-xs">⬆️</span> at the bottom of Safari</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs font-medium">2</span>
                  <span>Scroll down and tap <strong>"Add to Home Screen"</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs font-medium">3</span>
                  <span>Tap <strong>"Add"</strong> in the top right</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {platform === 'android' && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-100">
          <div className="flex items-start gap-4">
            <div className="text-3xl">📱</div>
            <div className="space-y-3">
              <h3 className="font-semibold text-midnight-800">On Android:</h3>
              <ol className="space-y-2 text-sm text-midnight-600">
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs font-medium">1</span>
                  <span>Tap the <strong>menu</strong> button <span className="inline-block bg-midnight-100 rounded px-1.5 py-0.5 text-xs">⋮</span> in Chrome</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs font-medium">2</span>
                  <span>Tap <strong>"Add to Home screen"</strong> or <strong>"Install app"</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs font-medium">3</span>
                  <span>Tap <strong>"Add"</strong> to confirm</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {platform === 'desktop' && (
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-5 border border-purple-100">
          <div className="flex items-start gap-4">
            <div className="text-3xl">💻</div>
            <div className="space-y-3">
              <h3 className="font-semibold text-midnight-800">On Desktop:</h3>
              <ol className="space-y-2 text-sm text-midnight-600">
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs font-medium">1</span>
                  <span>Look for the <strong>install icon</strong> in your browser's address bar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs font-medium">2</span>
                  <span>Or use the browser menu → <strong>"Install Ol' 55"</strong></span>
                </li>
              </ol>
              <p className="text-xs text-midnight-400">Works best in Chrome, Edge, or Brave.</p>
            </div>
          </div>
        </div>
      )}

      {platform === 'unknown' && (
        <div className="bg-midnight-50 rounded-xl p-5">
          <p className="text-sm text-midnight-600">
            Look for "Add to Home Screen" or "Install" option in your browser's menu to install this app.
          </p>
        </div>
      )}

      <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
        <div className="flex items-start gap-3">
          <span className="text-xl">💡</span>
          <div className="text-sm text-amber-800">
            <strong>Why install?</strong> The app loads faster, works in full screen, and you'll have it right on your home screen—ready for daily practice.
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={onComplete}
          className="w-full px-8 py-3 bg-whiskey-600 hover:bg-whiskey-700 text-white font-semibold rounded-lg transition-colors"
        >
          I've Added It!
        </button>
        {showSkip && (
          <button
            onClick={onSkip}
            className="w-full px-8 py-3 text-midnight-500 hover:text-midnight-700 font-medium transition-colors"
          >
            Skip for now
          </button>
        )}
      </div>
    </div>
  )
}
