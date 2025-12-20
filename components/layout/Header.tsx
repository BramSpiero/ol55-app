'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface HeaderProps {
  displayName?: string
}

export default function Header({ displayName }: HeaderProps) {
  const pathname = usePathname()

  const navItems = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/practice', label: 'Practice' },
    { href: '/chat', label: 'Ask Teacher' },
    { href: '/progress', label: 'Progress' },
  ]

  return (
    <header className="bg-white/80 backdrop-blur border-b border-midnight-100 sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/dashboard" className="text-xl font-bold text-midnight-900">
          Ol' 55
        </Link>
        
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className={`transition-colors ${
                pathname === item.href
                  ? 'text-whiskey-600 font-medium'
                  : 'text-midnight-600 hover:text-midnight-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
          {displayName && (
            <div className="text-sm text-midnight-500 pl-4 border-l border-midnight-200">
              {displayName}
            </div>
          )}
        </nav>

        {/* Mobile - just show name */}
        <div className="md:hidden text-sm text-midnight-500">
          {displayName}
        </div>
      </div>
    </header>
  )
}
