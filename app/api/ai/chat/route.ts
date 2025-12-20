import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { createClient } from '@/lib/supabase/server'
import { buildSystemPrompt } from '@/lib/ai/prompts'
import { getWeek, getDay } from '@/lib/curriculum/data'
import { calculatePaceInfo } from '@/lib/pace/calculations'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient()
    
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { message } = await request.json()
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message required' }, { status: 400 })
    }

    // Get user profile and progress
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    const { data: progress } = await supabase
      .from('progress')
      .select('*')
      .eq('user_id', user.id)
      .single()

    // Get conversation history
    const { data: history } = await supabase
      .from('ai_conversations')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: true })
      .limit(20)

    const currentWeek = progress?.current_week || 1
    const currentDay = progress?.current_day || 1
    const currentPhase = progress?.phase || 1
    const daysCompleted = progress?.days_completed || ((currentWeek - 1) * 7) + (currentDay - 1)

    const weekContent = getWeek(currentWeek)
    const dayContent = getDay(currentWeek, currentDay)

    // Calculate pace info
    const startDate = profile?.start_date ? new Date(profile.start_date) : new Date()
    const targetEndDate = profile?.target_end_date 
      ? new Date(profile.target_end_date) 
      : new Date(startDate.getTime() + 365 * 24 * 60 * 60 * 1000)
    
    const paceInfo = calculatePaceInfo(startDate, targetEndDate, daysCompleted)

    // Build system prompt with pace awareness
    const systemPrompt = buildSystemPrompt({
      displayName: profile?.display_name || 'Student',
      musicalBackground: profile?.musical_background || 'none',
      equipment: profile?.equipment || 'acoustic',
      currentWeek,
      currentDay,
      phase: currentPhase,
      weekContent,
      dayContent,
      paceInfo
    })

    // Build messages array
    const messages: { role: 'user' | 'assistant', content: string }[] = []
    
    if (history) {
      for (const msg of history) {
        messages.push({
          role: msg.role as 'user' | 'assistant',
          content: msg.content
        })
      }
    }
    
    messages.push({ role: 'user', content: message })

    // Save user message
    await supabase
      .from('ai_conversations')
      .insert({
        user_id: user.id,
        week_number: currentWeek,
        day_number: currentDay,
        role: 'user',
        content: message
      })

    // Call Claude
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages
    })

    const assistantMessage = response.content[0].type === 'text' 
      ? response.content[0].text 
      : ''

    // Save assistant response
    await supabase
      .from('ai_conversations')
      .insert({
        user_id: user.id,
        week_number: currentWeek,
        day_number: currentDay,
        role: 'assistant',
        content: assistantMessage
      })

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error('AI chat error:', error)
    return NextResponse.json(
      { error: 'Failed to get response' }, 
      { status: 500 }
    )
  }
}
