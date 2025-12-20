'use client'

import Header from './Header'
import MobileNav from './MobileNav'

interface AppShellProps {
  children: React.ReactNode
  displayName?: string
  showNav?: boolean
}

export default function AppShell({ children, displayName, showNav = true }: AppShellProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-whiskey-50 to-whiskey-100">
      {showNav && <Header displayName={displayName} />}
      
      {/* Main content - add bottom padding on mobile for nav */}
      <main className={showNav ? 'pb-20 md:pb-0' : ''}>
        {children}
      </main>
      
      {showNav && <MobileNav />}
    </div>
  )
}
