'use client'

import { useEffect } from 'react'
import { preloadSoundfont } from '@/lib/audio/preload'

export default function DashboardClient() {
  useEffect(() => {
    // Start preloading soundfont samples in background
    preloadSoundfont()
  }, [])

  // This component doesn't render anything visible
  return null
}
