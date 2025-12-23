# Ol' 55 Piano Learning App - Demo Script

## Overview (30 seconds)

> "This is Ol' 55 - a personalized piano learning app that teaches you to sing and play Tom Waits' classic song over 48 weeks. What makes it unique is that the entire app - the curriculum, the code, the design - was built collaboratively with Claude AI."

---

## Demo Flow (5-7 minutes total)

### 1. The Problem & Solution (30 seconds)

> "Learning piano as an adult is hard. Most apps teach generic skills. Ol' 55 takes a different approach: one song, mastered completely, with an AI teacher guiding you personally."

**Show:** Landing page or dashboard overview

---

### 2. Onboarding Experience (45 seconds)

> "Let me show you how a new student gets started."

**Actions:**
1. Click "Get Started" 
2. Show the onboarding questions:
   - Musical background selection
   - Equipment type (keyboard/piano)
   - Schedule preferences
3. Point out the personalized pace calculation

> "The app calculates a custom pace based on when you want to finish and how many days per week you can practice."

---

### 3. Dashboard & Progress Tracking (45 seconds)

> "Here's the student dashboard. You can see exactly where you are in the 48-week journey."

**Show:**
- Current week/day indicator
- Phase progress (Foundation → Song Introduction → Hands Together → Adding Voice → Refinement → Performance)
- Practice streak
- Pace indicator (ahead/behind schedule)

> "The curriculum is structured in 6 phases, taking you from absolute beginner to performing the complete song."

---

### 4. Practice Page - Core Learning (1.5 minutes)

> "Let's look at a typical practice session."

**Actions:**
1. Click "Start Today's Practice"
2. Show lesson structure:
   - Today's objectives
   - Lesson content
   - Interactive exercises

**Highlight the ABC.js notation:**
> "Sheet music is rendered with ABC.js - an open-source music notation library. Students can see the notes AND hear them played back."

**Click Play on the notation:**
> "This is MIDI synthesis happening right in the browser. Students can slow down the tempo, loop sections, and practice along."

---

### 5. AI Teacher Chat (1 minute)

> "Now here's where it gets interesting. Every student has access to a personal AI teacher powered by Claude."

**Actions:**
1. Navigate to Chat
2. Type a question like: "I'm struggling with the left hand bass pattern. Any tips?"
3. Show the personalized response

> "The AI knows exactly where you are in the curriculum, what you've practiced, and adapts its teaching to your level. It's not generic advice - it's personalized coaching."

**Optional follow-up:**
> "Watch how it adjusts if I ask about something we haven't covered yet..."
> Type: "Can you teach me the chorus?"
> Show how it redirects appropriately based on current progress

---

### 6. Vocal Demo - ElevenLabs Integration (1 minute)

> "In Phase 4, students start adding vocals. Here's where ElevenLabs comes in."

**Actions:**
1. Navigate to a Week 25+ lesson (or use debug menu to jump there)
2. Show the "🎤 Vocal Reference" section
3. Click "Hear Vocals"

> "ElevenLabs synthesizes the vocal melody so students can hear exactly how it should sound before trying to sing it themselves. This isn't a recording - it's AI-generated vocals from the lyrics."

**While audio plays:**
> "Students can use this as a reference, then practice singing along with just the piano part."

---

### 7. The Architecture (30 seconds)

**Show the architecture diagram**

> "The whole system runs on:
> - **Vercel** for hosting the Next.js frontend
> - **Supabase** for authentication and progress tracking
> - **Claude API** for the AI teacher
> - **ABC.js** for music notation and playback
> - **ElevenLabs** for vocal synthesis
>
> And the entire thing - every line of code, every week of curriculum - was built through conversation with Claude."

---

### 8. Closing (30 seconds)

> "This is what AI-assisted development looks like in practice. Not AI replacing developers, but AI as a collaborative partner - handling the implementation details while a human guides the vision and user experience."

**Optional callouts:**
- "48 weeks of structured curriculum, 336 daily lessons"
- "Responsive design - works on phone, tablet, desktop"
- "Real progress tracking with practice logs and difficulty ratings"

---

## Quick Feature Demos (if time permits)

### Settings Page (15 seconds)
- Show profanity toggle (Tom Waits mode!)
- Show pace adjustment options

### Progress Page (15 seconds)
- Show the weekly progress grid
- Demonstrate the review mode (clicking past lessons)

### Debug Menu (15 seconds)
- Show the 🛠️ button
- Demonstrate jumping to different weeks for testing

---

## Technical Talking Points

If audience is technical, mention:

1. **Next.js 14 App Router** - Server components for fast initial load
2. **Supabase Row-Level Security** - Each user only sees their own data
3. **ABC Notation** - Text-based music format, version-controllable curriculum
4. **Streaming AI Responses** - Real-time chat experience
5. **Mobile-First Design** - iOS audio quirks handled (soundfont preloading)

---

## Potential Q&A Topics

**Q: How accurate is the AI teacher?**
> It's built on Claude with a detailed system prompt that includes curriculum context, current progress, and teaching philosophy. It won't hallucinate lesson content because the curriculum is structured data.

**Q: Why one song instead of a general piano course?**
> Focused mastery. By the end, you don't just "know some piano" - you can actually perform a complete song. That's a tangible achievement most piano apps never deliver.

**Q: How long did this take to build?**
> The core app was built in collaborative sessions with Claude over [X time period]. The curriculum itself - 48 weeks of detailed daily lessons - was developed iteratively, with Claude generating content based on pedagogical principles and music theory.

**Q: Could this approach work for other songs?**
> Absolutely. The architecture is song-agnostic. The curriculum data structure could be populated with any song's chord progressions, melodies, and lyrics.

---

## Demo Checklist

Before demo, verify:
- [ ] Logged into a test account with some progress
- [ ] ElevenLabs API key is configured (for vocal demo)
- [ ] Sound is working on demo device
- [ ] Architecture diagram is ready to show
- [ ] Debug menu enabled if you need to jump to specific weeks
