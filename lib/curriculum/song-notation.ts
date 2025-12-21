// Ol' 55 - ABC Notation for Piano Part
// Transcribed from Tom Waits original (Key: G major, Tempo: ~74 BPM, Swing feel)

// Song structure: Intro - Verse - Chorus - Verse - Chorus - Bridge - Verse - Chorus - Ending

export const ol55SongSections = {
  // Chord progression reference:
  // Intro: G - Bm - C - D - G - Gmaj7 - G
  // Verse: G - Bm - C - D - G - Gmaj7 - G
  // Chorus: G - Bm - C - D7sus4 - G - Bm - C - D7sus4
  // Ending: G - C#m - C - Dmaj7 (repeats)

  intro: {
    title: "Ol' 55 - Intro",
    description: "4 bars, sets up the groove. Piano plays simple chord voicings.",
    abc_notation: `X:1
T:Ol' 55 - Intro (Piano)
M:4/4
L:1/8
Q:1/4=74
K:G
%%MIDI program 0
% Bar 1: G
[G,B,D]4 [G,B,D]4 |
% Bar 2: Bm
[B,DF]4 [B,DF]4 |
% Bar 3: C
[CEG]4 [CEG]4 |
% Bar 4: D
[D^FA]4 [D^FA]4 |]`
  },

  verse_chords: {
    title: "Ol' 55 - Verse Chords",
    description: "Basic chord pattern for verse. LH plays roots, RH plays triads.",
    abc_notation: `X:1
T:Ol' 55 - Verse Chords
M:4/4
L:1/4
Q:1/4=74
K:G
% G - Bm - C - D pattern
[G,B,D]2 [G,B,D]2 | [B,DF]2 [B,DF]2 | [CEG]2 [CEG]2 | [D^FA]2 [D^FA]2 |
% G - Gmaj7 - G
[G,B,D]2 [G,B,D^F]2 | [G,B,D]4 |]`
  },

  verse_melody: {
    title: "Ol' 55 - Verse Melody",
    description: "Vocal melody for the verse. Learn to sing this while playing chords.",
    abc_notation: `X:1
T:Ol' 55 - Verse Melody
M:4/4
L:1/8
Q:1/4=74
K:G
% "Well my time went so quickly, I went lickety-splitly out to my ol' fifty-five"
G2 G2 A2 B2 | d4 d2 B2 | A2 G2 E2 D2 | G6 z2 |
% "As I pulled away slowly, feeling so holy, God knows I was feeling alive"
G2 G2 A2 B2 | d4 d2 B2 | A2 G2 E2 D2 | G6 z2 |]`
  },

  chorus_chords: {
    title: "Ol' 55 - Chorus Chords", 
    description: "Chorus progression with D7sus4. More movement than verse.",
    abc_notation: `X:1
T:Ol' 55 - Chorus Chords
M:4/4
L:1/4
Q:1/4=74
K:G
% G - Bm - C - D7sus4
[G,B,D]2 [G,B,D]2 | [B,DF]2 [B,DF]2 | [CEG]2 [CEG]2 | [DGA]2 [DGA]2 |
% G - Bm - C - D7sus4
[G,B,D]2 [G,B,D]2 | [B,DF]2 [B,DF]2 | [CEG]2 [CEG]2 | [DGA]2 [DGA]2 |]`
  },

  chorus_melody: {
    title: "Ol' 55 - Chorus Melody",
    description: "Sun's coming up, I'm riding with lady luck...",
    abc_notation: `X:1
T:Ol' 55 - Chorus Melody
M:4/4
L:1/8
Q:1/4=74
K:G
% "Sun's coming up"
d4 d2 e2 | d4 z4 |
% "I'm riding with lady luck"
B2 B2 d2 e2 | d4 B2 G2 |
% "Freeway cars and trucks"
A2 A2 B2 c2 | B4 z4 |]`
  },

  ending: {
    title: "Ol' 55 - Ending",
    description: "The outro repeats 'Freeways, cars and trucks' with descending chords.",
    abc_notation: `X:1
T:Ol' 55 - Ending
M:4/4
L:1/4
Q:1/4=74
K:G
% G - C#m - C - Dmaj7 (repeat and fade)
[G,B,D]2 [G,B,D]2 | [^C,E,G]2 [^C,E,G]2 | [CEG]2 [CEG]2 | [D^F,A,C]2 [D^F,A,C]2 |
[G,B,D]2 [G,B,D]2 | [^C,E,G]2 [^C,E,G]2 | [CEG]2 [CEG]2 | [D^F,A,C]2 [D^F,A,C]2 |]`
  },

  // Simplified arrangements for learning progression

  verse_simplified_lh: {
    title: "Verse - LH Only (Simplified)",
    description: "Left hand plays just root notes. Start here when adding vocals.",
    abc_notation: `X:1
T:Verse - LH Roots Only
M:4/4
L:1
Q:1/4=74
K:G bass
G,, | B,, | C, | D, | G,, | G,, |]`
  },

  verse_simplified_both: {
    title: "Verse - Simplified Both Hands",
    description: "LH roots, RH whole-note chords. Use this when first singing along.",
    abc_notation: `X:1
T:Verse - Simplified
M:4/4
L:1
Q:1/4=60
K:G
[G,,][G,B,D] | [B,,][B,DF] | [C,][CEG] | [D,][D^FA] |]`
  },

  full_verse_piano: {
    title: "Full Verse - Piano Part",
    description: "Complete piano arrangement for the verse as heard on recording.",
    abc_notation: `X:1
T:Ol' 55 - Full Verse Piano
M:4/4
L:1/8
Q:1/4=74
K:G
% Bar 1-2: G
[G,,D,G,]2 [G,B,D]2 [G,B,D]2 z2 | [G,,D,G,]2 [G,B,D]2 [G,B,D]2 z2 |
% Bar 3-4: Bm  
[B,,F,B,]2 [B,DF]2 [B,DF]2 z2 | [B,,F,B,]2 [B,DF]2 [B,DF]2 z2 |
% Bar 5-6: C
[C,G,C]2 [CEG]2 [CEG]2 z2 | [C,G,C]2 [CEG]2 [CEG]2 z2 |
% Bar 7-8: D
[D,A,D]2 [D^FA]2 [D^FA]2 z2 | [D,A,D]2 [D^FA]2 [D^FA]2 z2 |]`
  }
}

// Individual chord voicings for practice
export const ol55Chords = {
  G: `[G,B,D]`,
  Gmaj7: `[G,B,D^F]`,
  Bm: `[B,DF]`,
  C: `[CEG]`,
  D: `[D^FA]`,
  D7sus4: `[DGA]`,
  Em: `[EGB]`,
  Csharpm: `[^C,E,G]`,
  Dmaj7: `[D^F,A,C]`
}
