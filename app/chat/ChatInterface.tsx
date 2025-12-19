'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import ABCRenderer from '@/components/music/ABCRenderer'

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
      <div className="space-y-4">
        {parts.map((part, i) => {
          if (typeof part === 'string') {
            return (
              <div key={i} className="whitespace-pre-wrap">
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

  return (
    <main className="min-h-screen bg-gradient-to-b from-whiskey-50 to-whiskey-100 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur border-b border-midnight-100">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="text-midnight-600 hover:text-midnight-900">
            ← Dashboard
          </Link>
          <div className="text-center">
            <h1 className="font-semibold text-midnight-900">AI Teacher</h1>
            <p className="text-xs text-midnight-500">
              Week {progress?.current_week || 1}, Day {progress?.current_day || 1}
            </p>
          </div>
          <div className="w-20" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
          {messages.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🎹</div>
              <h2 className="text-xl font-semibold text-midnight-800 mb-2">
                Hi {profile?.display_name}!
              </h2>
              <p className="text-midnight-500 mb-6">
                I'm your piano teacher. Ask me anything about your current lesson, 
                music theory, or if you're stuck on an exercise.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "I'm struggling with hand position",
                  "Explain the exercise again",
                  "Give me a custom exercise",
                  "What's the goal for this week?"
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setInput(suggestion)}
                    className="px-4 py-2 bg-white rounded-full text-sm text-midnight-600 hover:bg-midnight-50 border border-midnight-200"
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
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  msg.role === 'user'
                    ? 'bg-whiskey-600 text-white'
                    : 'bg-white shadow-sm text-midnight-800'
                }`}
              >
                {msg.role === 'assistant' 
                  ? renderMessageContent(msg.content)
                  : msg.content
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

      {/* Input */}
      <div className="bg-white border-t border-midnight-100">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your teacher..."
              className="flex-1 px-4 py-3 border border-midnight-200 rounded-xl focus:ring-2 focus:ring-whiskey-500 focus:border-transparent outline-none"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-6 py-3 bg-whiskey-600 hover:bg-whiskey-700 disabled:bg-whiskey-400 text-white font-semibold rounded-xl transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
