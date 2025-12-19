# Ol' 55 Piano Learning App

A 48-week structured curriculum to learn piano, culminating in performing Tom Waits' "Ol' 55" with vocals.

## Features

- **Structured Curriculum**: 48 weeks of progressive lessons
- **AI Teaching Assistant**: Get personalized help and custom exercises
- **Interactive Playback**: Hear any exercise at adjustable tempos using ABC notation
- **Progress Tracking**: Track your daily practice and advancement

## Tech Stack

- Next.js 14 (App Router)
- Supabase (Auth + Database)
- Anthropic Claude API
- abcjs (Music notation & playback)
- Tailwind CSS

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env.local` and fill in your credentials
3. Install dependencies: `npm install`
4. Run development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key
- `ANTHROPIC_API_KEY` - Your Anthropic API key

## Database Setup

Run the SQL in `supabase-schema.sql` in your Supabase SQL editor to create the required tables.

## License

Private - Not for redistribution
