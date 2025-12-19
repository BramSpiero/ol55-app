import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-whiskey-50 to-whiskey-100">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-midnight-900 mb-4">
            Ol' 55
          </h1>
          <p className="text-xl text-midnight-600 mb-2">
            Learn piano in 48 weeks
          </p>
          <p className="text-midnight-500">
            A structured curriculum to master Tom Waits' classic
          </p>
        </div>

        {/* Main CTA */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-midnight-800 mb-4">
              From zero to performance-ready
            </h2>
            <p className="text-midnight-600 mb-8">
              15 minutes a day. One year. One song. Real piano skills that stick.
            </p>
            
            <div className="space-y-4">
              <Link 
                href="/login"
                className="block w-full bg-whiskey-600 hover:bg-whiskey-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
              >
                Start Your Journey
              </Link>
              <p className="text-sm text-midnight-400">
                Free beta access • No credit card required
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/50 rounded-xl p-6">
            <div className="text-3xl mb-3">🎹</div>
            <h3 className="font-semibold text-midnight-800 mb-2">Structured Curriculum</h3>
            <p className="text-sm text-midnight-600">
              48 weeks of progressive lessons, from finding the keys to performing with vocals
            </p>
          </div>
          
          <div className="bg-white/50 rounded-xl p-6">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-semibold text-midnight-800 mb-2">AI Teaching Assistant</h3>
            <p className="text-sm text-midnight-600">
              Get personalized help, custom exercises, and honest feedback when you need it
            </p>
          </div>
          
          <div className="bg-white/50 rounded-xl p-6">
            <div className="text-3xl mb-3">🎵</div>
            <h3 className="font-semibold text-midnight-800 mb-2">Interactive Playback</h3>
            <p className="text-sm text-midnight-600">
              Hear any exercise at any tempo. See the notation. Practice along.
            </p>
          </div>
        </div>

        {/* The Song */}
        <div className="text-center text-midnight-500 text-sm">
          <p className="italic mb-2">
            "Well my time went so quickly, I went lickety-splickly out to my ol' '55..."
          </p>
          <p>— Tom Waits, Closing Time (1973)</p>
        </div>
      </div>
    </main>
  )
}
