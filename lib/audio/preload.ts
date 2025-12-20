// Preload soundfont samples in the background
// Call this early (dashboard load) so samples are cached before first practice

const SOUNDFONT_URL = 'https://paulrosen.github.io/midi-js-soundfonts/MusyngKite/acoustic_grand_piano-mp3/'

// Notes to preload - covers the range used in early lessons
const NOTES_TO_PRELOAD = [
  'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3',
  'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4',
  'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5',
]

let preloadStarted = false
let preloadComplete = false

export function preloadSoundfont(): void {
  if (preloadStarted || typeof window === 'undefined') return
  preloadStarted = true

  // Use requestIdleCallback if available, otherwise setTimeout
  const schedulePreload = window.requestIdleCallback || ((cb) => setTimeout(cb, 1000))

  schedulePreload(() => {
    // Preload each note sample quietly in background
    NOTES_TO_PRELOAD.forEach((note, index) => {
      setTimeout(() => {
        const audio = new Audio()
        audio.preload = 'auto'
        audio.src = `${SOUNDFONT_URL}${note}.mp3`
        // Just load it, don't play
        audio.load()
      }, index * 100) // Stagger requests to avoid overwhelming network
    })

    // Mark complete after estimated load time
    setTimeout(() => {
      preloadComplete = true
    }, NOTES_TO_PRELOAD.length * 100 + 2000)
  })
}

export function isPreloadComplete(): boolean {
  return preloadComplete
}
