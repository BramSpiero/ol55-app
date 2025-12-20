'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import ABCRenderer from '@/components/music/ABCRenderer'
import MobileNav from '@/components/layout/MobileNav'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  created_at: string
}

interface ChatInterfaceProps {
  profile: any
  progress: any
  initialHistory: Message[]
}

export default function ChatInterface({ profile, progress, initialHistory }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>(initialHistory)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userMessage = input.trim()
    setInput('')
    setLoading(true)

    // Blur input on mobile to hide keyboard
    inputRef.current?.blur()

    // Add user message optimistically
    const tempUserMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: userMessage,
      created_at: new Date().toISOString()
    }
    setMessages(prev => [...prev, tempUserMsg])

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      })

      if (!response.ok) throw new Error('Failed to get response')

      const data = await response.json()
      
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        created_at: new Date().toISOString()
      }
      setMessages(prev => [...prev, assistantMsg])
    } catch (error) {
      console.error('Chat error:', error)
      // Add error message
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        created_at: new Date().toISOString()
      }
      setMessages(prev => [...prev, errorMsg])
    } finally {
      setLoading(false)
    }
  }

  const renderMessageContent = (content: string) => {
    // Check for ABC notation blocks
    const abcRegex = /```abc\n([\s\S]*?)```/g
    const parts: (string | { type: 'abc', notation: string })[] = []
    let lastIndex = 0
    let match

    while ((match = abcRegex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push(content.slice(lastIndex, match.index))
      }
      parts.push({ type: 'abc', notation: match[1] })
      lastIndex = match.index + match[0].length
    }

    if (lastIndex < content.length) {
      parts.push(content.slice(lastIndex))
    }

    return (
      <div className="space-y-3 md:space-y-4">
        {parts.map((part, i) => {
          if (typeof part === 'string') {
            return (
              <div key={i} className="whitespace-pre-wrap text-sm md:text-base">
                {part}
              </div>
            )
          } else {
            return (
              <ABCRenderer key={i} notation={part.notation} />
            )
          }
        })}
      </div>
    )
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    inputRef.current?.focus()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-whiskey-50 to-whiskey-100 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur border-b border-midnight-100 sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <Link href="/dashboard" className="text-midnight-600 hover:text-midnight-900 text-sm md:text-base">
            ← Back
          </Link>
          <div className="text-center">
            <h1 className="font-semibold text-midnight-900 text-sm md:text-base">AI Teacher</h1>
            <p className="text-xs text-midnight-500">
              Week {progress?.current_week || 1}, Day {progress?.current_day || 1}
            </p>
          </div>
          <div className="w-12 md:w-20" />
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto pb-20 md:pb-0">
        <div className="max-w-3xl mx-auto px-3 md:px-4 py-4 md:py-6 space-y-4 md:space-y-6">
          {messages.length === 0 && (
            <div className="text-center py-8 md:py-12">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">🎹</div>
              <h2 className="text-lg md:text-xl font-semibold text-midnight-800 mb-2">
                Hi {profile?.display_name}!
              </h2>
              <p className="text-midnight-500 mb-4 md:mb-6 text-sm md:text-base px-4">
                Ask me anything about your lesson, music theory, or if you're stuck.
              </p>
              <div className="flex flex-wrap justify-center gap-2 px-2">
                {[
                  "Help with hand position",
                  "Explain the exercise",
                  "Custom exercise",
                  "This week's goal"
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-3 md:px-4 py-2 bg-white rounded-full text-xs md:text-sm text-midnight-600 hover:bg-midnight-50 border border-midnight-200 active:bg-midnight-100"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[90%] md:max-w-[85%] rounded-2xl px-3 md:px-4 py-2 md:py-3 ${
                  msg.role === 'user'
                    ? 'bg-whiskey-600 text-white'
                    : 'bg-white shadow-sm text-midnight-800'
                }`}
              >
                {msg.role === 'assistant' 
                  ? renderMessageContent(msg.content)
                  : <span className="text-sm md:text-base">{msg.content}</span>
                }
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-white shadow-sm rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-midnight-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-midnight-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-midnight-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input - fixed at bottom on mobile, above nav */}
      <div className="bg-white border-t border-midnight-100 fixed bottom-16 md:bottom-0 left-0 right-0 md:relative z-30">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-3 md:px-4 py-3 md:py-4">
          <div className="flex gap-2 md:gap-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your teacher..."
              className="flex-1 px-3 md:px-4 py-2.5 md:py-3 border border-midnight-200 rounded-xl focus:ring-2 focus:ring-whiskey-500 focus:border-transparent outline-none text-sm md:text-base"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-4 md:px-6 py-2.5 md:py-3 bg-whiskey-600 hover:bg-whiskey-700 disabled:bg-whiskey-400 text-white font-semibold rounded-xl transition-colors text-sm md:text-base min-w-[60px] md:min-w-[80px]"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Mobile nav */}
      <MobileNav />
    </div>
  )
}
