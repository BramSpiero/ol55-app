import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Ol' 55 Piano - Learn Piano in 48 Weeks",
  description: 'A structured curriculum to learn piano and perform Tom Waits\' Ol\' 55',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="font-sans overflow-x-hidden">{children}</body>
    </html>
  )
}
