import { Curriculum, WeekContent, DayContent, Exercise } from './types'

// Helper to create exercise IDs
const exerciseId = (week: number, day: number, num: number) => `w${week}d${day}e${num}`

// Week 1: Hand position, posture, finding C/D/G
const week1: WeekContent = {
  week_number: 1,
  phase: 1,
  title: 'Keyboard Geography',
  overview: 'This week is about building your foundation. Before you play a single melody, you need to know where you are on the keyboard and how to sit at it properly. We\'re finding all the C\'s, G\'s, and D\'s—the key landmarks for "Ol\' 55" which is in G major.',
  theory_concepts: ['Piano key layout', 'Octaves', 'White vs black keys'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'Welcome & Finding C',
      objectives: [
        'Understand the 48-week journey ahead',
        'Set up proper posture at the piano',
        'Find all the C\'s on your keyboard'
      ],
      content: `Welcome to Week 1. Let's get something straight: this isn't about talent. It's about showing up for 15 minutes every day for a year. Do that, and you'll be playing "Ol' 55" at a bar by December.

**Your first task is simple: find your piano and sit down at it.**

**Posture matters.** Sit at the center of the keyboard, on the front half of the bench. Your forearms should be roughly parallel to the floor. Feet flat. Shoulders relaxed—not hunched. Wrists level, not drooping or raised.

**Now let's find C:** Look at the black keys. They come in groups of 2 and 3. C is always immediately to the LEFT of a group of 2 black keys. 

🎯 **Your mission:** Find EVERY C on your piano. There are probably 7 or 8 of them. Play each one. Say "C" out loud as you play it.

Middle C is roughly in the center—it's the C closest to the middle of your keyboard. This will be your home base.

Play all the C's from lowest to highest. Then highest to lowest. Notice how they sound the same, just higher or lower? That's called an octave.

**That's it for today.** Find the C's, play them, say them. Simple. See you tomorrow.`,
      exercises: []  // No audio exercises on Day 1 - just exploration
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Finding G and D',
      objectives: [
        'Find all G\'s on the keyboard',
        'Find all D\'s on the keyboard',
        'Understand why these notes matter for our song'
      ],
      content: `G is between the second and third black keys in the group of 3. D is between the two black keys in the group of 2. These are critical: "Ol' 55" is in G major, and G is our home chord. D is the dominant—it creates tension that wants to resolve back to G.`,
      keyboardDiagram: {
        highlightNotes: ['G', 'D'],
        title: 'Find G and D on the keyboard'
      },
      exercises: [
        {
          id: exerciseId(1, 2, 1),
          title: 'Find All the G\'s',
          description: 'Play every G on your piano, low to high.',
          abc_notation: `X:1
T:All the G's
M:4/4
L:1/2
K:G
G,, G, G g g'|]`,
          target_tempo: 60,
          tips: ['G is in the group of 3 black keys, between keys 2 and 3'],
          common_mistakes: ['Confusing G with A or F']
        },
        {
          id: exerciseId(1, 2, 2),
          title: 'Find All the D\'s',
          description: 'Play every D on your piano, low to high.',
          abc_notation: `X:1
T:All the D's
M:4/4
L:1/2
K:D
D,, D, D d d' d''|]`,
          target_tempo: 60,
          tips: ['D sits snugly between the 2 black keys'],
          common_mistakes: ['Playing E instead of D']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'C-G-D Landmarks',
      objectives: [
        'Jump between C, G, and D confidently',
        'Start building keyboard geography muscle memory'
      ],
      content: `Now we connect the dots. You should be able to put your finger on any C, G, or D instantly. This is your internal GPS for the keyboard. These three notes form the backbone of countless songs, including "Ol' 55".`,
      keyboardDiagram: {
        highlightNotes: ['C', 'G', 'D'],
        title: 'Your landmark notes: C, G, and D'
      },
      exercises: [
        {
          id: exerciseId(1, 3, 1),
          title: 'C-G-D Jumps',
          description: 'Play C, then G, then D in the same octave. Repeat in different octaves.',
          abc_notation: `X:1
T:C-G-D Landmarks
M:4/4
L:1/4
K:C
C G, D2 | c g d'2 |]`,
          target_tempo: 60,
          tips: ['Look at where your finger is going before you move', 'Don\'t rush'],
          common_mistakes: ['Looking at your hands too much—try to feel the distances']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Right Hand Position',
      objectives: [
        'Learn proper finger numbering',
        'Place right hand in C position',
        'Play with curved fingers'
      ],
      content: `Fingers are numbered 1-5. Thumb is 1, pinky is 5. This is universal in piano. Right hand in "C position" means thumb on C, and each finger on the next white key (C-D-E-F-G).

Curve your fingers like you're holding a small ball. Play with the fingertip pads, not flat fingers.`,
      exercises: [
        {
          id: exerciseId(1, 4, 1),
          title: 'C Position - Right Hand',
          description: 'Place RH in C position. Play each note: C(1) D(2) E(3) F(4) G(5).',
          abc_notation: `X:1
T:C Position - Right Hand
M:4/4
L:1/4
K:C
"1"C "2"D "3"E "4"F | "5"G "4"F "3"E "2"D | "1"C4 |]`,
          target_tempo: 60,
          tips: ['Keep wrist level', 'Each finger plays independently'],
          common_mistakes: ['Flat fingers', 'Collapsing first knuckle']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Left Hand Position',
      objectives: [
        'Place left hand in C position',
        'Coordinate left hand fingers independently'
      ],
      content: `Same concept, other hand. Left hand C position: pinky (5) on C, up to thumb (1) on G. The finger numbers mirror the right hand—pinky is still 5, thumb is still 1.`,
      exercises: [
        {
          id: exerciseId(1, 5, 1),
          title: 'C Position - Left Hand',
          description: 'Place LH in C position (pinky on C). Play each note: C(5) D(4) E(3) F(2) G(1).',
          abc_notation: `X:1
T:C Position - Left Hand
M:4/4
L:1/4
K:C bass
"5"C, "4"D, "3"E, "2"F, | "1"G, "2"F, "3"E, "4"D, | "5"C,4 |]`,
          target_tempo: 60,
          tips: ['Left hand often feels weaker—this is normal', 'Focus on evenness'],
          common_mistakes: ['Rushing', 'Uneven volume between fingers']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Both Hands Separately',
      objectives: [
        'Alternate between RH and LH exercises',
        'Build comfort with both hand positions'
      ],
      content: `Today you practice both hands, but NOT together. Alternate: RH exercise, then LH exercise. Repeat. We're building independent control.`,
      exercises: [
        {
          id: exerciseId(1, 6, 1),
          title: 'RH Then LH',
          description: 'Play the RH C position exercise, then immediately the LH version.',
          abc_notation: `X:1
T:RH Then LH Practice
M:4/4
L:1/4
K:C
C D E F | G F E D | C4 |]`,
          target_tempo: 60,
          tips: ['Reset your posture between hands', 'Keep the same tempo for both'],
          common_mistakes: ['Rushing the left hand', 'Changing tempo between hands']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 1 Checkpoint',
      objectives: [
        'Verify you can find C, D, G instantly',
        'Confirm proper posture',
        'Play C position with each hand cleanly'
      ],
      content: `Checkpoint time. Be honest with yourself. If you can't do these things, repeat the week. There's no shame in that—there's only shame in moving on unprepared.`,
      exercises: [
        {
          id: exerciseId(1, 7, 1),
          title: 'Checkpoint: Find the Notes',
          description: 'Close your eyes. Find middle C. Then D above it. Then G. Open eyes and verify.',
          abc_notation: `X:1
T:Checkpoint Notes
M:4/4
L:1/2
K:C
C D | G2 |]`,
          target_tempo: 60,
          tips: ['If you miss, go back to Day 2'],
          common_mistakes: ['Guessing instead of knowing']
        }
      ],
      checkpoint_criteria: [
        'Can find any C, D, or G with eyes closed',
        'Posture is correct without thinking about it',
        'RH C position is comfortable',
        'LH C position is comfortable'
      ]
    }
  ]
}

// Week 2: Five-finger patterns in C major (RH), introduce bass clef reading
const week2: WeekContent = {
  week_number: 2,
  phase: 1,
  title: 'Five-Finger Patterns & Bass Clef',
  overview: 'This week we start making music. Five-finger patterns are the building blocks of piano playing. We\'re also introducing bass clef—the notation for your left hand. You already read treble clef from saxophone, so this is adding a second language.',
  theory_concepts: ['Bass clef', 'Five-finger pattern', 'Whole and half steps'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'Five-Finger Pattern Concept',
      objectives: [
        'Understand what a five-finger pattern is',
        'Play C major five-finger pattern with RH',
        'Introduction to bass clef'
      ],
      content: `A five-finger pattern is simply playing five consecutive notes in a scale with your five fingers. In C major, that's C-D-E-F-G. You did this last week without knowing the name.

**Bass clef** is the F clef. The two dots surround the F line. To remember the lines: Good Burritos Don't Fall Apart (G-B-D-F-A from bottom up). Spaces: All Cows Eat Grass (A-C-E-G).

Your left hand lives in bass clef. Your right hand lives in treble clef. When you read piano music, you're reading both simultaneously—but that's later. For now, just get familiar with bass clef landmarks.`,
      exercises: [
        {
          id: exerciseId(2, 1, 1),
          title: 'C Major Five-Finger (RH)',
          description: 'Play C-D-E-F-G ascending, then descending. Smooth and even.',
          abc_notation: `X:1
T:C Major Five-Finger RH
M:4/4
L:1/4
K:C
C D E F | G F E D | C4 |]`,
          target_tempo: 72,
          tips: ['Each note should be the same length and volume', 'Don\'t accent the thumb or pinky'],
          common_mistakes: ['Rushing', 'Uneven rhythm', 'Tension in wrist']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Bass Clef Notes',
      objectives: [
        'Identify bass clef notes on paper',
        'Play bass clef C position notes'
      ],
      content: `Middle C in bass clef sits on a ledger line above the staff. The C below middle C is on the second space from the top. Today, just get comfortable with where the notes live on the bass clef staff.`,
      exercises: [
        {
          id: exerciseId(2, 2, 1),
          title: 'Bass Clef C Position',
          description: 'Play C-D-E-F-G in bass clef range with LH.',
          abc_notation: `X:1
T:Bass Clef C Position LH
M:4/4
L:1/4
K:C bass
C, D, E, F, | G, F, E, D, | C,4 |]`,
          target_tempo: 66,
          tips: ['This is one octave below middle C', 'Pinky on C, thumb reaches to G'],
          common_mistakes: ['Wrong octave', 'Weak pinky']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'RH Five-Finger Variations',
      objectives: [
        'Play five-finger pattern in different rhythms',
        'Build finger independence'
      ],
      content: `Same notes, different rhythms. This builds control and keeps your brain engaged. Don't autopilot through scales—vary them.`,
      exercises: [
        {
          id: exerciseId(2, 3, 1),
          title: 'Long-Short Pattern',
          description: 'Play C (long) D (short) E (long) F (short) G (long).',
          abc_notation: `X:1
T:Long-Short Pattern RH
M:4/4
L:1/8
K:C
C2 D C2 D | E2 F E2 F | G4 z4 |]`,
          target_tempo: 72,
          tips: ['Long notes are twice as long as short notes', 'Keep it steady'],
          common_mistakes: ['Inconsistent rhythm', 'Speeding up on short notes']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'LH Five-Finger Building',
      objectives: [
        'Strengthen left hand five-finger pattern',
        'Focus on evenness and control'
      ],
      content: `Left hand gets extra attention today. For most people, the non-dominant hand needs more work. Slow and even beats fast and sloppy.`,
      exercises: [
        {
          id: exerciseId(2, 4, 1),
          title: 'LH Slow and Steady',
          description: 'Play LH C position at a very slow tempo. Focus on each finger.',
          abc_notation: `X:1
T:LH Slow Practice
M:4/4
L:1/2
K:C bass
C, D, | E, F, | G, F, | E, D, | C,4 |]`,
          target_tempo: 50,
          tips: ['Slower is better', 'Listen for even volume'],
          common_mistakes: ['Speeding up because it feels too easy']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Contrary Motion Introduction',
      objectives: [
        'Play both hands moving in opposite directions',
        'First coordination exercise'
      ],
      content: `Contrary motion: hands move away from each other, then back together. Both start on C (middle C for RH, octave below for LH). RH goes up while LH goes down.`,
      exercises: [
        {
          id: exerciseId(2, 5, 1),
          title: 'Contrary Motion from C',
          description: 'RH plays C-D-E-F-G going up. LH plays C-B-A-G-F going down. Simultaneously.',
          abc_notation: `X:1
T:Contrary Motion
M:4/4
L:1/4
K:C
[C,C] [B,,D] [A,,E] [G,,F] | [F,,G]4 |]`,
          target_tempo: 50,
          tips: ['Start very slow', 'Both hands hit notes at exactly the same time'],
          common_mistakes: ['Hands not synchronized', 'One hand louder than the other']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Combining Skills',
      objectives: [
        'Practice all exercises from this week',
        'Build consistency'
      ],
      content: `Run through each exercise from this week once. The goal is consistency—can you do each one correctly every time?`,
      exercises: [
        {
          id: exerciseId(2, 6, 1),
          title: 'Full Review',
          description: 'Play RH five-finger, LH five-finger, then contrary motion.',
          abc_notation: `X:1
T:Week 2 Review
M:4/4
L:1/4
K:C
C D E F | G F E D | C4 |]`,
          target_tempo: 66,
          tips: ['Don\'t skip any exercise', 'Note which ones need more work'],
          common_mistakes: ['Skipping the hard parts']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 2 Checkpoint',
      objectives: [
        'Verify five-finger patterns are solid',
        'Confirm bass clef note recognition',
        'Contrary motion is controlled'
      ],
      content: `Checkpoint. Same rules as last week—be honest. If contrary motion is a mess, stay here another week.`,
      exercises: [
        {
          id: exerciseId(2, 7, 1),
          title: 'Checkpoint: All Patterns',
          description: 'Play RH pattern, LH pattern, then contrary motion without stopping.',
          abc_notation: `X:1
T:Week 2 Checkpoint
M:4/4
L:1/4
K:C
C D E F | G F E D | C4 z |]`,
          target_tempo: 66,
          tips: ['Smooth transitions between exercises'],
          common_mistakes: ['Hesitating between patterns']
        }
      ],
      checkpoint_criteria: [
        'RH five-finger pattern is even and controlled',
        'LH five-finger pattern is even and controlled',
        'Can identify bass clef notes C through G',
        'Contrary motion is synchronized'
      ]
    }
  ]
}

// Week 3-8 abbreviated for now (full content would be added)
const week3: WeekContent = {
  week_number: 3,
  phase: 1,
  title: 'G Major Five-Finger & LH Independence',
  overview: 'Moving to G major position. This shifts your hand and introduces F# (your first black key). We\'re also drilling left hand independence—critical for accompanying yourself later.',
  theory_concepts: ['G major scale', 'Sharp signs', 'Key signatures'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'G Major Position',
      objectives: [
        'Learn G major five-finger position',
        'Understand F# (F sharp)',
        'Why G major matters for our song'
      ],
      content: `G major uses F# instead of F natural. In the five-finger position starting on G, you play G-A-B-C-D. No black keys yet in this range, but when we get to full scales, F# becomes essential.

For "Ol\' 55", the G chord is your IV chord—one of the three main chords. Getting comfortable in G position now pays off later.`,
      exercises: [
        {
          id: exerciseId(3, 1, 1),
          title: 'G Major Five-Finger RH',
          description: 'Play G-A-B-C-D with right hand, ascending and descending.',
          abc_notation: `X:1
T:G Major Five-Finger RH
M:4/4
L:1/4
K:G
G A B c | d c B A | G4 |]`,
          target_tempo: 72,
          tips: ['Thumb on G, pinky reaches to D', 'Same evenness as C major'],
          common_mistakes: ['Tension when reaching for D']
        },
        {
          id: exerciseId(3, 1, 2),
          title: 'G Major Five-Finger LH',
          description: 'Play G-A-B-C-D with left hand in bass range.',
          abc_notation: `X:1
T:G Major Five-Finger LH
M:4/4
L:1/4
K:G bass
G,, A,, B,, C, | D, C, B,, A,, | G,,4 |]`,
          target_tempo: 66,
          tips: ['Pinky on low G', 'Keep wrist relaxed'],
          common_mistakes: ['Tight wrist', 'Uneven fingers']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Switching Positions',
      objectives: ['Move smoothly between C and G position', 'Build position-switching reflexes'],
      content: `Musicians constantly shift hand positions. Practice moving from C position to G position without looking. Feel the distance.`,
      exercises: [
        {
          id: exerciseId(3, 2, 1),
          title: 'C to G Position Shift RH',
          description: 'Play C position pattern, lift hand, move to G position, play G pattern.',
          abc_notation: `X:1
T:C to G Shift
M:4/4
L:1/4
K:C
C D E F | G2 z2 | G A B c | d2 z2 |]`,
          target_tempo: 60,
          tips: ['The rest is for repositioning—use it', 'Don\'t rush the shift'],
          common_mistakes: ['Sloppy landing on new position']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice', 
      title: 'LH Independence Drills',
      objectives: ['Strengthen left hand control', 'Play LH patterns while RH rests on keys'],
      content: `Your left hand will eventually play steady patterns while your right hand does melody. Start training that independence now.`,
      exercises: [
        {
          id: exerciseId(3, 3, 1),
          title: 'LH Solo with RH Rest',
          description: 'Place RH on C position but don\'t play. LH plays its pattern.',
          abc_notation: `X:1
T:LH Independence
M:4/4
L:1/4
K:C bass
C, D, E, F, | G, F, E, D, | C,4 |]`,
          target_tempo: 66,
          tips: ['RH stays completely still', 'Isolate the left hand movement'],
          common_mistakes: ['RH fingers twitching', 'Losing focus on LH evenness']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Alternating Hands',
      objectives: ['Build coordination between hands', 'Maintain independent control'],
      content: `Play a note with one hand, then the other, back and forth. This is conversation between your hands.`,
      exercises: [
        {
          id: exerciseId(3, 4, 1),
          title: 'Hand Conversation',
          description: 'LH plays C, RH plays G, LH plays D, RH plays A, etc.',
          abc_notation: `X:1
T:Hand Conversation
M:4/4
L:1/4
K:C
C, G | D, A | E, B | F, c |]`,
          target_tempo: 60,
          tips: ['Even spacing between notes', 'Seamless handoff'],
          common_mistakes: ['Gap or overlap between hands']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'G Position Both Hands',
      objectives: ['Play G position with both hands', 'Apply contrary motion in G'],
      content: `Apply what you learned with C position to G position. Same exercises, different starting note.`,
      exercises: [
        {
          id: exerciseId(3, 5, 1),
          title: 'G Position Contrary Motion',
          description: 'Both hands in G position, play contrary motion pattern.',
          abc_notation: `X:1
T:G Contrary Motion
M:4/4
L:1/4
K:G
[G,,G] [A,,A] [B,,B] [c,c] | [d,d]4 |]`,
          target_tempo: 50,
          tips: ['Same synchronization as C position', 'Listen for balance'],
          common_mistakes: ['One hand leading']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Mixed Position Practice',
      objectives: ['Combine C and G position exercises', 'Build flexibility'],
      content: `Mix it up. C pattern, G pattern, C pattern, G pattern. Your hands should feel at home in both positions.`,
      exercises: [
        {
          id: exerciseId(3, 6, 1),
          title: 'Position Medley',
          description: 'Play C five-finger, shift to G five-finger, repeat.',
          abc_notation: `X:1
T:Position Medley
M:4/4
L:1/4
K:C
C D E F | G F E D | G A B c | d c B A |]`,
          target_tempo: 66,
          tips: ['Smooth transitions', 'Don\'t slow down for the shift'],
          common_mistakes: ['Hesitating at the shift point']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 3 Checkpoint',
      objectives: ['G position is solid', 'Position shifts are smooth', 'LH independence improving'],
      content: `Can you play G position as confidently as C? Can you switch between them without thinking? Check yourself.`,
      exercises: [
        {
          id: exerciseId(3, 7, 1),
          title: 'Week 3 Checkpoint',
          description: 'Play C pattern RH, G pattern RH, C pattern LH, G pattern LH, all without stopping.',
          abc_notation: `X:1
T:Week 3 Checkpoint
M:4/4
L:1/4
K:C
C D E F | G A B c | C, D, E, F, | G, A, B, C |]`,
          target_tempo: 66,
          tips: ['No pauses between patterns'],
          common_mistakes: ['Stopping to reset between positions']
        }
      ],
      checkpoint_criteria: [
        'G major five-finger is as solid as C major',
        'Can shift between C and G without hesitation',
        'LH can play independently while RH rests',
        'Contrary motion works in both positions'
      ]
    }
  ]
}

const week4: WeekContent = {
  week_number: 4,
  phase: 1,
  title: 'G Major Five-Finger & Coordination',
  overview: 'G major is the key of "Ol\' 55." This week we solidify G position—your home base for the rest of the year. We also push coordination further with both hands playing simultaneously.',
  theory_concepts: ['G major scale', 'F#', 'Home key concept', 'Dominant chord (D)'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'G Major - Your Home Key',
      objectives: ['Solidify G major five-finger position', 'Understand why G major is home', 'Introduction to F# in the full scale'],
      content: `"Ol' 55" is in G major. G is home. The G major scale uses one sharp: F#. In the five-finger position (G-A-B-C-D), you don't encounter F# yet—but when we play the full G major scale, your fourth finger will land on it.

The D chord is your dominant—it creates tension that wants to resolve back to G. This G→D→G relationship is the heartbeat of countless songs, including ours.`,
      exercises: [
        {
          id: exerciseId(4, 1, 1),
          title: 'G Major Five-Finger RH - Solid',
          description: 'Play G-A-B-C-D with right hand. Make it automatic.',
          abc_notation: `X:1
T:G Major Five-Finger RH
M:4/4
L:1/4
K:G
G A B c | d c B A | G4 |]`,
          target_tempo: 76,
          tips: ['This should feel like home now', 'Completely relaxed'],
          common_mistakes: ['Still thinking too much—it should be reflexive']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Full G Major Scale',
      objectives: ['Play full G major scale (one octave)', 'Learn the F# position', 'Understand scale fingering'],
      content: `The full G major scale: G-A-B-C-D-E-F#-G. F# is the black key between F and G. Standard fingering: 1-2-3-1-2-3-4-5 (RH going up). The thumb crosses under after finger 3.`,
      exercises: [
        {
          id: exerciseId(4, 2, 1),
          title: 'G Major Scale RH',
          description: 'Play G major scale one octave, ascending and descending.',
          abc_notation: `X:1
T:G Major Scale RH
M:4/4
L:1/4
K:G
G A B c | d e ^f g | ^f e d c | B A G2 |]`,
          target_tempo: 66,
          tips: ['Thumb crosses under smoothly after B', 'F# is your fourth finger'],
          common_mistakes: ['Bumpy thumb crossing', 'Playing F natural']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'G Major Scale LH',
      objectives: ['Play full G major scale with left hand', 'Mirror the RH fingering'],
      content: `Left hand G major scale uses fingering 5-4-3-2-1-3-2-1 going up. The third finger crosses over after the thumb.`,
      exercises: [
        {
          id: exerciseId(4, 3, 1),
          title: 'G Major Scale LH',
          description: 'Play G major scale one octave with left hand.',
          abc_notation: `X:1
T:G Major Scale LH
M:4/4
L:1/4
K:G bass
G,, A,, B,, C, | D, E, ^F, G, | ^F, E, D, C, | B,, A,, G,,2 |]`,
          target_tempo: 60,
          tips: ['Third finger crosses over smoothly', 'Keep wrist level'],
          common_mistakes: ['Uneven tempo during finger crossing']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Parallel Motion in G',
      objectives: ['Both hands play G scale together', 'Parallel motion concept'],
      content: `Parallel motion: both hands play the same notes in the same direction. Start slow—this requires coordination.`,
      exercises: [
        {
          id: exerciseId(4, 4, 1),
          title: 'G Major Parallel Motion',
          description: 'Both hands play G major five-finger together.',
          abc_notation: `X:1
T:G Major Parallel
M:4/4
L:1/4
K:G
[G,G] [A,A] [B,B] [c,c] | [d,d] [c,c] [B,B] [A,A] | [G,G]4 |]`,
          target_tempo: 50,
          tips: ['Hands hit each note at exactly the same time'],
          common_mistakes: ['One hand arriving early', 'Different volumes between hands']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'All Three Positions',
      objectives: ['Fluency in C, G, and D positions', 'Quick position changes'],
      content: `You now know C, G, and the full G major scale. Practice moving between positions smoothly.`,
      exercises: [
        {
          id: exerciseId(4, 5, 1),
          title: 'Three Position Round Trip',
          description: 'Play C position, G position, back to C.',
          abc_notation: `X:1
T:Position Changes
M:4/4
L:1/4
K:C
C D E F | G A B c | d c B A | G F E D | C4 |]`,
          target_tempo: 60,
          tips: ['Each position should feel equally comfortable'],
          common_mistakes: ['Hesitating during position shifts']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Review All Skills',
      objectives: ['Consolidate weeks 1-4', 'Identify weak spots'],
      content: `This is the end of Month 1. Run through key exercises from each week. Note what needs more work.`,
      exercises: [
        {
          id: exerciseId(4, 6, 1),
          title: 'Month 1 Review',
          description: 'Play C position (both hands), G position (both hands), G major scale.',
          abc_notation: `X:1
T:Month 1 Review
M:4/4
L:1/4
K:C
[C,C] [D,D] [E,E] [F,F] | [G,G]2 z2 |]`,
          target_tempo: 60,
          tips: ['Treat this like a performance', 'No second chances'],
          common_mistakes: ['Making excuses for mistakes']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Month 1 Checkpoint',
      objectives: ['Verify all three positions are solid', 'Confirm hands-together coordination', 'Ready for Month 2'],
      content: `Month 1 complete. You should now have keyboard geography down, three hand positions mastered, and basic coordination between hands. If not, repeat this week before moving on.`,
      exercises: [
        {
          id: exerciseId(4, 7, 1),
          title: 'Month 1 Final Checkpoint',
          description: 'Play all three positions with both hands, parallel and contrary motion.',
          abc_notation: `X:1
T:Month 1 Checkpoint
M:4/4
L:1/4
K:D
[D,D] [E,E] [^F,^F] [G,G] | [A,A]4 |]`,
          target_tempo: 60,
          tips: ['This should feel achievable', 'If it doesn\'t, you need more time'],
          common_mistakes: ['Rushing to Month 2 when not ready']
        }
      ],
      checkpoint_criteria: [
        'D major five-finger is comfortable with F#',
        'All three positions (C, G, D) are solid',
        'Parallel and contrary motion work in all positions',
        'Both hands feel controlled and independent'
      ]
    }
  ]
}

// Weeks 5-8: Chords & Simple Patterns (abbreviated structure)
const week5: WeekContent = {
  week_number: 5,
  phase: 1,
  title: 'Major Triads: C, G, D',
  overview: 'Time to learn chords. A triad is three notes played together. We start with the three most important major triads for "Ol\' 55": C, G, and D. These form the basis of most pop and folk music.',
  theory_concepts: ['Triad construction', 'Root, third, fifth', 'Major vs minor preview'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'What is a Triad?',
      objectives: ['Understand triad construction', 'Play C major triad', 'Root position concept'],
      content: `A triad has three notes: root, third, and fifth. For C major: C (root), E (third), G (fifth). Stack them and play all three together. This is a chord.

In root position, the root is on the bottom. There are other positions (inversions), but we start here.`,
      exercises: [
        {
          id: exerciseId(5, 1, 1),
          title: 'C Major Triad RH',
          description: 'Play C-E-G together with right hand (fingers 1-3-5).',
          abc_notation: `X:1
T:C Major Triad
M:4/4
L:1/2
K:C
[CEG]2 | [CEG]2 | [CEG]4 |]`,
          target_tempo: 60,
          tips: ['Press all three keys at exactly the same time', 'Listen for the blend'],
          common_mistakes: ['Rolling the chord instead of playing simultaneously']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'G and D Major Triads',
      objectives: ['Learn G major triad (G-B-D)', 'Learn D major triad (D-F#-A)'],
      content: `G major: G-B-D. D major: D-F#-A (note the black key). These are the IV and I chords of "Ol\' 55."`,
      exercises: [
        {
          id: exerciseId(5, 2, 1),
          title: 'G Major Triad',
          description: 'Play G-B-D together with right hand.',
          abc_notation: `X:1
T:G Major Triad
M:4/4
L:1/2
K:G
[GBd]2 | [GBd]2 | [GBd]4 |]`,
          target_tempo: 60,
          tips: ['Same finger pattern: 1-3-5'],
          common_mistakes: ['Wrong notes in the chord']
        },
        {
          id: exerciseId(5, 2, 2),
          title: 'D Major Triad',
          description: 'Play D-F#-A together with right hand.',
          abc_notation: `X:1
T:D Major Triad
M:4/4
L:1/2
K:D
[D^FA]2 | [D^FA]2 | [D^FA]4 |]`,
          target_tempo: 60,
          tips: ['Middle finger on the black key (F#)'],
          common_mistakes: ['Playing F natural instead of F#']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Chord Changes',
      objectives: ['Move between C, G, and D chords', 'Smooth transitions'],
      content: `Chord changes are where most beginners struggle. Slow practice now builds fast playing later.`,
      exercises: [
        {
          id: exerciseId(5, 3, 1),
          title: 'C-G-D Chord Changes',
          description: 'Play C chord, G chord, D chord, each for two beats.',
          abc_notation: `X:1
T:C-G-D Changes
M:4/4
L:1/2
K:C
[CEG]2 | [GBd]2 | [D^FA]2 | z2 |]`,
          target_tempo: 50,
          tips: ['Visualize the next chord before you move', 'Minimize hand movement'],
          common_mistakes: ['Hesitating between chords', 'Lifting hand too high']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'LH Triads',
      objectives: ['Play triads with left hand', 'Build LH chord strength'],
      content: `Same triads, left hand. This is harder because you're using fingers 5-3-1 (pinky, middle, thumb).`,
      exercises: [
        {
          id: exerciseId(5, 4, 1),
          title: 'LH Major Triads',
          description: 'Play C, G, D triads with left hand.',
          abc_notation: `X:1
T:LH Triads
M:4/4
L:1/2
K:C bass
[C,E,G,]2 | [G,,B,,D,]2 | [D,^F,A,]2 | z2 |]`,
          target_tempo: 50,
          tips: ['Fingers 5-3-1', 'Pinky might feel weak—this is normal'],
          common_mistakes: ['Chord not balanced (some notes louder than others)']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Broken Chords',
      objectives: ['Play chord notes separately (arpeggiated)', 'Build finger independence within chords'],
      content: `Broken chords (arpeggios) play each note of the chord separately. This builds control and sounds beautiful.`,
      exercises: [
        {
          id: exerciseId(5, 5, 1),
          title: 'Broken C Major Chord',
          description: 'Play C, then E, then G, then back down.',
          abc_notation: `X:1
T:Broken C Major
M:4/4
L:1/4
K:C
C E G E | C4 |]`,
          target_tempo: 72,
          tips: ['Each note even length and volume', 'Smooth connections'],
          common_mistakes: ['Accenting the thumb']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Chord Progression Practice',
      objectives: ['Play a simple chord progression', 'Introduction to harmonic movement'],
      content: `Let\'s put chords in order: D - G - D - A (we\'ll learn A next week). This is the skeleton of "Ol\' 55."`,
      exercises: [
        {
          id: exerciseId(5, 6, 1),
          title: 'D-G-D Progression',
          description: 'Play D chord, G chord, D chord. Hold each for 4 beats.',
          abc_notation: `X:1
T:D-G-D Progression
M:4/4
L:1
K:D
[D^FA] | [GBd] | [D^FA] |]`,
          target_tempo: 60,
          tips: ['Hear how G creates tension that D resolves', 'This is the sound of "Ol\' 55"'],
          common_mistakes: ['Rushing through chords', 'Not listening to the harmonic movement']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 5 Checkpoint',
      objectives: ['Triads are solid', 'Chord changes are smooth', 'Understand root, third, fifth'],
      content: `Can you play C, G, and D major triads with both hands? Can you switch between them without hesitation? If yes, move on.`,
      exercises: [
        {
          id: exerciseId(5, 7, 1),
          title: 'Week 5 Checkpoint',
          description: 'Play all three triads RH, then all three LH, then chord changes.',
          abc_notation: `X:1
T:Week 5 Checkpoint
M:4/4
L:1/2
K:D
[D^FA] [GBd] | [CEG] [D^FA] |]`,
          target_tempo: 60,
          tips: ['No hesitation on chord changes'],
          common_mistakes: ['Inconsistent chord quality']
        }
      ],
      checkpoint_criteria: [
        'Can play C, G, D triads with RH instantly',
        'Can play C, G, D triads with LH',
        'Chord changes are smooth (under 1 second transition)',
        'Understand what root, third, fifth mean'
      ]
    }
  ]
}

// Weeks 6-8 follow similar pattern...
const week6: WeekContent = {
  week_number: 6,
  phase: 1,
  title: 'Triads with Melody',
  overview: 'Combining chords in the left hand with simple melodies in the right. This is the fundamental texture of piano accompaniment.',
  theory_concepts: ['Accompaniment patterns', 'Melody vs harmony', 'Hand independence'],
  days: Array.from({ length: 7 }, (_, i) => ({
    day_number: i + 1,
    type: i === 0 ? 'info_dump' : i === 6 ? 'review' : 'practice' as const,
    title: `Day ${i + 1}`,
    objectives: ['Combine LH chords with RH melody'],
    content: 'Practice LH holding chords while RH plays five-finger patterns.',
    exercises: [{
      id: exerciseId(6, i + 1, 1),
      title: 'Chord + Melody',
      description: 'LH plays G chord, RH plays G major five-finger.',
      abc_notation: `X:1
T:Chord + Melody
M:4/4
L:1/4
K:G
[G,B,D]4 | G A B c | d c B A | G4 |]`,
      target_tempo: 60,
      tips: ['LH sustains while RH moves', 'Listen for balance'],
      common_mistakes: ['LH overpowers RH melody']
    }],
    checkpoint_criteria: i === 6 ? ['Can play LH chord while RH plays melody'] : undefined
  }))
}

const week7: WeekContent = {
  week_number: 7,
  phase: 1,
  title: 'I-IV-V in G Major',
  overview: 'The I-IV-V progression is the backbone of countless songs, including "Ol\' 55." In G major, that\'s G (I), C (IV), and D (V). These are the essential chords.',
  theory_concepts: ['Roman numeral analysis', 'I-IV-V progression', 'Dominant chord'],
  days: Array.from({ length: 7 }, (_, i) => ({
    day_number: i + 1,
    type: i === 0 ? 'info_dump' : i === 6 ? 'review' : 'practice' as const,
    title: `Day ${i + 1}`,
    objectives: ['Play I-IV-V progression in G', 'Understand chord functions'],
    content: 'G (I) is home. C (IV) adds movement. D (V) creates tension that wants to resolve back to G. This is the heartbeat of "Ol\' 55."',
    exercises: [{
      id: exerciseId(7, i + 1, 1),
      title: 'I-IV-V-I Progression',
      description: 'Play G - C - D - G progression.',
      abc_notation: `X:1
T:I-IV-V-I in G
M:4/4
L:1
K:G
[GBd] | [CEG] | [D^FA] | [GBd] |]`,
      target_tempo: 60,
      tips: ['Hear the tension and release', 'D wants to resolve to G'],
      common_mistakes: ['Forgetting F# in D chord']
    }],
    checkpoint_criteria: i === 6 ? ['Can play I-IV-V-I smoothly', 'Understand the function of each chord'] : undefined
  }))
}

const week8: WeekContent = {
  week_number: 8,
  phase: 1,
  title: 'Adding ii, iii, and vi Chords',
  overview: 'Bm (iii), Em (vi), and Am (ii) add color to the progression. "Ol\' 55" uses these chords for emotional depth. This completes the harmonic vocabulary you need.',
  theory_concepts: ['Minor triads', 'Secondary chords', 'Complete chord vocabulary'],
  days: Array.from({ length: 7 }, (_, i) => ({
    day_number: i + 1,
    type: i === 0 ? 'info_dump' : i === 6 ? 'review' : 'practice' as const,
    title: `Day ${i + 1}`,
    objectives: ['Learn Bm, Em, and Am triads', 'Complete chord vocabulary for song'],
    content: `The chords in "Ol' 55" are: G, Bm, C, D, Gmaj7, D7sus4, Em, C#m. Today we focus on the minor triads. Bm (B-D-F#) and Em (E-G-B) are minor triads—they sound more melancholy than major triads.`,
    exercises: [{
      id: exerciseId(8, i + 1, 1),
      title: 'Minor Triads',
      description: 'Play Bm and Em chords.',
      abc_notation: `X:1
T:Minor Triads
M:4/4
L:1
K:G
[Bd^f] | [EGB] |]`,
      target_tempo: 60,
      tips: ['Minor third is one half step smaller than major third', 'Notice the darker sound'],
      common_mistakes: ['Playing E major instead of E minor']
    }],
    checkpoint_criteria: i === 6 ? ['Can play all chords for Ol\' 55: G, Bm, C, D, Em', 'Phase 1 complete!'] : undefined
  }))
}

// ============================================================================
// PHASE 2: Song Introduction (Weeks 9-16)
// Start learning the actual song, hands separate
// ============================================================================

const week9: WeekContent = {
  week_number: 9,
  phase: 2,
  title: 'Verse Melody - Right Hand',
  overview: 'Welcome to Phase 2! We\'re finally touching the actual song. This week: the verse melody, right hand only. Listen to the original recording multiple times before each practice session. You need to hear it in your head before your fingers can play it.',
  theory_concepts: ['Melody', 'Phrasing', 'Learning by ear vs notation'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'The Verse Melody',
      objectives: [
        'Listen to Ol\' 55 at least 3 times today',
        'Identify the verse melody shape',
        'Learn the first phrase by ear'
      ],
      content: `Phase 2 begins. The foundation work is done—now we build the actual song on top of it.

**First things first:** Listen to the original Tom Waits recording from "Closing Time" (1973). Not the Eagles cover—the original. Listen to it three times today. Pay attention to the vocal melody in the verse.

The verse melody is conversational. It tells a story: "Well my time went so quickly, I went lickety-splitly, out to my ol' fifty-five..."

**The melody starts on G**, moves up stepwise, peaks on D, and comes back down. It's not flashy—it's storytelling. Your right hand is going to learn to sing this melody.

Today's task: Listen, then try to pick out the first phrase on your piano. Don't look at notation yet. Use your ear.`,
      exercises: [
        {
          id: exerciseId(9, 1, 1),
          title: 'Find the Opening Note',
          description: 'The verse starts on G. Play G and sing "Well my time went so quickly" with it.',
          abc_notation: `X:1
T:Verse Opening Note
M:4/4
L:1/4
Q:1/4=74
K:G
G4 |]`,
          target_tempo: 74,
          tips: ['Sing along as you play', 'G is your anchor note'],
          common_mistakes: ['Starting on wrong note', 'Not listening to recording first']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'First Phrase by Ear',
      objectives: [
        'Pick out "Well my time went so quickly" on piano',
        'Verify with notation',
        'Build ear training skills'
      ],
      content: `Yesterday you found the opening G. Today, try to pick out the rest of the first phrase by ear. The melody moves: G-G-A-B-D. It climbs up, then jumps to D.

After you try by ear, check yourself with this notation:`,
      exercises: [
        {
          id: exerciseId(9, 2, 1),
          title: 'First Phrase',
          description: '"Well my time went so quickly" - G G A B D',
          abc_notation: `X:1
T:Verse - First Phrase
M:4/4
L:1/8
Q:1/4=74
K:G
G2 G2 A2 B2 | d4 z4 |]`,
          target_tempo: 74,
          tips: ['Fingering: 1-1-2-3-5 (thumb on G, pinky reaches D)'],
          common_mistakes: ['Rushing through', 'Not singing along']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Complete First Line',
      objectives: [
        'Learn "I went lickety-splitly"',
        'Connect both halves of the line'
      ],
      content: `The melody continues: D-D-B, then descends A-G-E-D back to G. This completes the first full line of the verse.`,
      exercises: [
        {
          id: exerciseId(9, 3, 1),
          title: 'First Line Complete',
          description: '"Well my time went so quickly, I went lickety-splitly out to my ol\' fifty-five"',
          abc_notation: `X:1
T:Verse - First Line
M:4/4
L:1/8
Q:1/4=74
K:G
G2 G2 A2 B2 | d4 d2 B2 | A2 G2 E2 D2 | G6 z2 |]`,
          target_tempo: 60,
          tips: ['Slow it way down at first', 'The descent should feel like exhaling'],
          common_mistakes: ['Speeding up on the descent', 'Not breathing with the phrase']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Second Verse Line',
      objectives: [
        'Learn "As I pulled away slowly"',
        'Notice it\'s the same melody as line one'
      ],
      content: `Good news: the second line uses the exact same melody. "As I pulled away slowly, feeling so holy, God knows I was feeling alive." Same notes, different words.`,
      exercises: [
        {
          id: exerciseId(9, 4, 1),
          title: 'Second Line (Same Melody)',
          description: 'Practice the melody again with the second set of lyrics in mind.',
          abc_notation: `X:1
T:Verse - Second Line
M:4/4
L:1/8
Q:1/4=74
K:G
G2 G2 A2 B2 | d4 d2 B2 | A2 G2 E2 D2 | G6 z2 |]`,
          target_tempo: 66,
          tips: ['Repetition is your friend', 'This is how you build muscle memory'],
          common_mistakes: ['Getting bored—embrace the repetition']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Full Verse Melody',
      objectives: [
        'Play both lines back to back',
        'Work on smooth transitions'
      ],
      content: `Put it together. Two lines, same melody, back to back. This IS the verse. If you can play this smoothly, you've learned the verse melody.`,
      exercises: [
        {
          id: exerciseId(9, 5, 1),
          title: 'Complete Verse Melody',
          description: 'Both verse lines, right hand only.',
          abc_notation: `X:1
T:Verse - Complete Melody
M:4/4
L:1/8
Q:1/4=74
K:G
G2 G2 A2 B2 | d4 d2 B2 | A2 G2 E2 D2 | G6 z2 |
G2 G2 A2 B2 | d4 d2 B2 | A2 G2 E2 D2 | G6 z2 |]`,
          target_tempo: 60,
          tips: ['No pause between lines', 'Think of it as one continuous thought'],
          common_mistakes: ['Stopping between lines', 'Losing tempo consistency']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Verse at Tempo',
      objectives: [
        'Bring verse melody up to 70+ BPM',
        'Maintain expression while increasing speed'
      ],
      content: `Time to approach target tempo. The song sits around 74 BPM with a relaxed swing feel. Don't rush it—the magic is in the laid-back groove.`,
      exercises: [
        {
          id: exerciseId(9, 6, 1),
          title: 'Verse at Near-Tempo',
          description: 'Full verse, aiming for 70-74 BPM.',
          abc_notation: `X:1
T:Verse - At Tempo
M:4/4
L:1/8
Q:1/4=74
K:G
G2 G2 A2 B2 | d4 d2 B2 | A2 G2 E2 D2 | G6 z2 |
G2 G2 A2 B2 | d4 d2 B2 | A2 G2 E2 D2 | G6 z2 |]`,
          target_tempo: 74,
          tips: ['Use metronome', 'Stay relaxed—tension shows in the sound'],
          common_mistakes: ['Tensing up at faster tempo', 'Losing the swing feel']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 9 Checkpoint',
      objectives: [
        'Play verse melody from memory',
        'Sing along while playing'
      ],
      content: `Checkpoint time. Can you play the verse melody without looking at notation? Can you sing the lyrics while your right hand plays? If yes, you're ready for Week 10.`,
      exercises: [
        {
          id: exerciseId(9, 7, 1),
          title: 'Verse Melody Check',
          description: 'Play verse from memory, singing along.',
          abc_notation: `X:1
T:Verse Check
M:4/4
L:1/8
Q:1/4=74
K:G
G2 G2 A2 B2 | d4 d2 B2 | A2 G2 E2 D2 | G6 z2 |
G2 G2 A2 B2 | d4 d2 B2 | A2 G2 E2 D2 | G6 z2 |]`,
          target_tempo: 74,
          tips: ['Close your eyes', 'Trust your muscle memory'],
          common_mistakes: ['Panicking when you can\'t see notation']
        }
      ],
      checkpoint_criteria: [
        'Can play verse melody at 70+ BPM',
        'Can play from memory (no notation)',
        'Can sing lyrics while playing melody'
      ]
    }
  ]
}

const week10: WeekContent = {
  week_number: 10,
  phase: 2,
  title: 'Chorus Melody - Right Hand',
  overview: 'The chorus is the emotional peak: "Sun\'s coming up, I\'m riding with lady luck." The melody is different from the verse—higher, more open. This week we learn it.',
  theory_concepts: ['Chorus structure', 'Melodic contrast', 'Emotional arc'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'The Chorus',
      objectives: [
        'Listen for the chorus in the recording',
        'Understand how it differs from verse',
        'Learn the opening phrase'
      ],
      content: `The chorus lifts. Where the verse tells a story conversationally, the chorus opens up emotionally. "Sun's coming up, I'm riding with lady luck, freeway cars and trucks..."

Listen to how the melody sits higher than the verse. It starts on D (high D), not G. The feeling is more expansive—like watching the sunrise from your car.

**Today:** Find that opening D and learn "Sun's coming up."`,
      exercises: [
        {
          id: exerciseId(10, 1, 1),
          title: 'Chorus Opening',
          description: '"Sun\'s coming up" - starts on high D',
          abc_notation: `X:1
T:Chorus - Opening
M:4/4
L:1/8
Q:1/4=74
K:G
d4 d2 e2 | d4 z4 |]`,
          target_tempo: 74,
          tips: ['D is your pinky in G position', 'Let the note ring'],
          common_mistakes: ['Starting too low', 'Rushing the phrase']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Lady Luck Line',
      objectives: [
        'Learn "I\'m riding with lady luck"',
        'Connect to opening phrase'
      ],
      content: `The melody descends: "I'm riding with lady luck" goes B-B-D-E-D-B-G. It's like the sun rising, then settling into the day.`,
      exercises: [
        {
          id: exerciseId(10, 2, 1),
          title: 'Lady Luck Phrase',
          description: '"I\'m riding with lady luck"',
          abc_notation: `X:1
T:Chorus - Lady Luck
M:4/4
L:1/8
Q:1/4=74
K:G
B2 B2 d2 e2 | d4 B2 G2 |]`,
          target_tempo: 66,
          tips: ['Feel the descent', 'Land solidly on G'],
          common_mistakes: ['Losing the groove']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Freeway Line',
      objectives: [
        'Learn "Freeway cars and trucks"',
        'This phrase repeats in the outro'
      ],
      content: `"Freeway cars and trucks" - A-A-B-C-B. Simple, repetitive, hypnotic. This phrase is the hook of the song—you'll play it many times in the ending.`,
      exercises: [
        {
          id: exerciseId(10, 3, 1),
          title: 'Freeway Phrase',
          description: '"Freeway cars and trucks"',
          abc_notation: `X:1
T:Chorus - Freeway
M:4/4
L:1/8
Q:1/4=74
K:G
A2 A2 B2 c2 | B4 z4 |]`,
          target_tempo: 74,
          tips: ['This is the hook—make it memorable', 'Slight emphasis on "Free-"'],
          common_mistakes: ['Playing it flat/emotionless']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Full Chorus Melody',
      objectives: [
        'Connect all three phrases',
        'Play complete chorus melody'
      ],
      content: `Put all three phrases together. This is your chorus melody. The whole section repeats (you'll sing it twice each time through).`,
      exercises: [
        {
          id: exerciseId(10, 4, 1),
          title: 'Complete Chorus',
          description: 'All three phrases connected.',
          abc_notation: `X:1
T:Chorus - Complete
M:4/4
L:1/8
Q:1/4=74
K:G
d4 d2 e2 | d4 z4 | B2 B2 d2 e2 | d4 B2 G2 | A2 A2 B2 c2 | B4 z4 |]`,
          target_tempo: 60,
          tips: ['Think in phrases, not individual notes', 'Breathe between phrases'],
          common_mistakes: ['Running phrases together without shape']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Verse to Chorus Transition',
      objectives: [
        'Practice moving from verse to chorus',
        'Feel the lift when chorus arrives'
      ],
      content: `In the actual song, you go from verse directly into chorus. Practice that transition—end of verse G, then up to chorus D.`,
      exercises: [
        {
          id: exerciseId(10, 5, 1),
          title: 'Verse to Chorus',
          description: 'Last line of verse into chorus.',
          abc_notation: `X:1
T:Verse to Chorus
M:4/4
L:1/8
Q:1/4=74
K:G
A2 G2 E2 D2 | G6 z2 | d4 d2 e2 | d4 z4 |]`,
          target_tempo: 66,
          tips: ['Feel the lift from G up to D', 'The energy shifts'],
          common_mistakes: ['No change in energy between sections']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Chorus at Tempo',
      objectives: [
        'Bring chorus to 70+ BPM',
        'Maintain the emotional lift'
      ],
      content: `Same as verse work—bring it up to tempo while keeping the feel. The chorus should feel like relief after the verse's story.`,
      exercises: [
        {
          id: exerciseId(10, 6, 1),
          title: 'Chorus at Tempo',
          description: 'Full chorus at near-target tempo.',
          abc_notation: `X:1
T:Chorus at Tempo
M:4/4
L:1/8
Q:1/4=74
K:G
d4 d2 e2 | d4 z4 | B2 B2 d2 e2 | d4 B2 G2 | A2 A2 B2 c2 | B4 z4 |]`,
          target_tempo: 74,
          tips: ['Stay relaxed', 'The swing feel is crucial'],
          common_mistakes: ['Tensing up at speed']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 10 Checkpoint',
      objectives: [
        'Play chorus from memory',
        'Play verse + chorus back to back'
      ],
      content: `Can you play the chorus from memory? Can you go verse → chorus smoothly? If yes, you've got the complete melody framework.`,
      exercises: [
        {
          id: exerciseId(10, 7, 1),
          title: 'Verse + Chorus Check',
          description: 'Full verse into full chorus, from memory.',
          abc_notation: `X:1
T:Verse + Chorus
M:4/4
L:1/8
Q:1/4=74
K:G
G2 G2 A2 B2 | d4 d2 B2 | A2 G2 E2 D2 | G6 z2 |
G2 G2 A2 B2 | d4 d2 B2 | A2 G2 E2 D2 | G6 z2 |
d4 d2 e2 | d4 z4 | B2 B2 d2 e2 | d4 B2 G2 | A2 A2 B2 c2 | B4 z4 |]`,
          target_tempo: 70,
          tips: ['This is the core of the song', 'Trust your preparation'],
          common_mistakes: ['Forgetting the transition']
        }
      ],
      checkpoint_criteria: [
        'Chorus melody memorized',
        'Can transition smoothly from verse to chorus',
        'Both sections at 70+ BPM'
      ]
    }
  ]
}

const week11: WeekContent = {
  week_number: 11,
  phase: 2,
  title: 'Right Hand Chord Voicings',
  overview: 'You know the melody. Now let\'s learn the chord shapes your right hand will actually play when accompanying yourself. These aren\'t just triads—they\'re the voicings that give the song its warm, jazzy character.',
  theory_concepts: ['Chord voicings', 'Voice leading', 'Gmaj7', 'D7sus4'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'Song Chord Shapes',
      objectives: [
        'Review the chords: G, Bm, C, D',
        'Learn Gmaj7 voicing',
        'Understand voicing vs basic triad'
      ],
      content: `The song uses these chords: G, Bm, C, D, Gmaj7, D7sus4. You learned basic triads in Phase 1. Now we learn the specific voicings that sound right for this song.

**Gmaj7** adds an F# on top of the G triad: G-B-D-F#. It's that warm, sophisticated sound you hear at the end of verse phrases.

Today: Master the G to Gmaj7 movement.`,
      exercises: [
        {
          id: exerciseId(11, 1, 1),
          title: 'G to Gmaj7',
          description: 'The signature warm sound of this song.',
          abc_notation: `X:1
T:G to Gmaj7
M:4/4
L:1/2
Q:1/4=74
K:G
[GBd]2 | [GBd^f]2 | [GBd]2 | [GBd^f]2 |]`,
          target_tempo: 60,
          tips: ['Just add pinky on F# for Gmaj7', 'Feel the warmth of that added note'],
          common_mistakes: ['Hitting F natural instead of F#']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'D7sus4 Voicing',
      objectives: [
        'Learn D7sus4 (D-G-A)',
        'Understand sus4 sound'
      ],
      content: `D7sus4 replaces the F# in a D chord with G. So instead of D-F#-A, you play D-G-A. It's an unresolved, floating sound—perfect for the "freeway" feeling.`,
      exercises: [
        {
          id: exerciseId(11, 2, 1),
          title: 'D vs D7sus4',
          description: 'Hear the difference between D and D7sus4.',
          abc_notation: `X:1
T:D vs D7sus4
M:4/4
L:1/2
Q:1/4=74
K:G
[D^FA]2 | [DGA]2 | [D^FA]2 | [DGA]2 |]`,
          target_tempo: 60,
          tips: ['Sus4 sounds "open" and unresolved', 'Perfect for the dreamy chorus'],
          common_mistakes: ['Playing D major when D7sus4 is called for']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Verse Chord Sequence',
      objectives: [
        'Play G - Bm - C - D progression',
        'Smooth voice leading between chords'
      ],
      content: `The verse progression: G - Bm - C - D, then back to G (often with Gmaj7). Practice moving between these smoothly.`,
      exercises: [
        {
          id: exerciseId(11, 3, 1),
          title: 'Verse Progression RH',
          description: 'The verse chord sequence with good voice leading.',
          abc_notation: `X:1
T:Verse Chords RH
M:4/4
L:1/2
Q:1/4=74
K:G
[GBd]2 [GBd]2 | [BdF]2 [BdF]2 | [CEG]2 [CEG]2 | [D^FA]2 [D^FA]2 |
[GBd]2 [GBd^f]2 | [GBd]4 |]`,
          target_tempo: 60,
          tips: ['Minimize finger movement between chords', 'Common tones stay put'],
          common_mistakes: ['Lifting hand completely between chords']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Chorus Chord Sequence',
      objectives: [
        'Play chorus with D7sus4',
        'Feel the difference from verse'
      ],
      content: `Chorus uses D7sus4 instead of D. This gives it that floating, hopeful quality. G - Bm - C - D7sus4.`,
      exercises: [
        {
          id: exerciseId(11, 4, 1),
          title: 'Chorus Chords RH',
          description: 'Chorus progression with D7sus4.',
          abc_notation: `X:1
T:Chorus Chords RH
M:4/4
L:1/2
Q:1/4=74
K:G
[GBd]2 [GBd]2 | [BdF]2 [BdF]2 | [CEG]2 [CEG]2 | [DGA]2 [DGA]2 |]`,
          target_tempo: 60,
          tips: ['Notice how D7sus4 doesn\'t resolve as strongly', 'It keeps the song floating'],
          common_mistakes: ['Using regular D in chorus']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Chord Rhythm Pattern',
      objectives: [
        'Add rhythm to chord changes',
        'Simple comping pattern'
      ],
      content: `Chords need rhythm. A simple pattern: hit chord on beat 1, lift on beat 3, hit again on beat 4. This gives it a gentle swing feel.`,
      exercises: [
        {
          id: exerciseId(11, 5, 1),
          title: 'Basic Comp Rhythm',
          description: 'Add swing rhythm to verse chords.',
          abc_notation: `X:1
T:Comp Rhythm
M:4/4
L:1/4
Q:1/4=74
K:G
[GBd]2 z [GBd] | [BdF]2 z [BdF] | [CEG]2 z [CEG] | [D^FA]2 z [D^FA] |]`,
          target_tempo: 66,
          tips: ['Beat 1 and beat 4 are your anchors', 'Let beat 3 breathe'],
          common_mistakes: ['Rigid rhythm without swing']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Full Song Chords',
      objectives: [
        'Play through verse and chorus chords',
        'Maintain rhythm throughout'
      ],
      content: `Put it all together: verse chords, chorus chords, with rhythm. This is your right hand accompaniment pattern.`,
      exercises: [
        {
          id: exerciseId(11, 6, 1),
          title: 'Full Song Comp',
          description: 'Verse into chorus, right hand chords.',
          abc_notation: `X:1
T:Full Comp Pattern
M:4/4
L:1/4
Q:1/4=74
K:G
% Verse
[GBd]2 z [GBd] | [BdF]2 z [BdF] | [CEG]2 z [CEG] | [D^FA]2 z [D^FA] |
[GBd]2 [GBd^f] [GBd] | z4 |
% Chorus  
[GBd]2 z [GBd] | [BdF]2 z [BdF] | [CEG]2 z [CEG] | [DGA]2 z [DGA] |]`,
          target_tempo: 66,
          tips: ['Verse uses D, chorus uses D7sus4', 'Feel the section changes'],
          common_mistakes: ['Forgetting which D voicing for which section']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 11 Checkpoint',
      objectives: [
        'All chord voicings memorized',
        'Can play verse and chorus progressions with rhythm'
      ],
      content: `Checkpoint: Can you play through the chord progressions without thinking about individual shapes? The chords should be automatic.`,
      exercises: [
        {
          id: exerciseId(11, 7, 1),
          title: 'Chord Voicing Check',
          description: 'Play G, Gmaj7, Bm, C, D, D7sus4 in sequence.',
          abc_notation: `X:1
T:All Voicings
M:4/4
L:1/2
Q:1/4=60
K:G
[GBd]2 | [GBd^f]2 | [BdF]2 | [CEG]2 | [D^FA]2 | [DGA]2 |]`,
          target_tempo: 60,
          tips: ['Name each chord as you play it'],
          common_mistakes: ['Hesitating on Gmaj7 or D7sus4']
        }
      ],
      checkpoint_criteria: [
        'All voicings memorized',
        'Verse progression smooth',
        'Chorus progression smooth',
        'Basic comp rhythm established'
      ]
    }
  ]
}

const week12: WeekContent = {
  week_number: 12,
  phase: 2,
  title: 'Complete Song - Right Hand',
  overview: 'This week you put it all together: melody and chords, right hand only. By the end of this week, your right hand should be able to play through the entire song structure.',
  theory_concepts: ['Song form', 'Sections', 'Arranging for one hand'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'Song Structure',
      objectives: [
        'Map out the complete song form',
        'Understand how sections repeat'
      ],
      content: `Here's the complete structure of Ol' 55:

**Intro** (4 bars)
**Verse 1** (8 bars) - "Well my time went so quickly..."
**Chorus** (8 bars) - "Sun's coming up..."
**Verse 2** (8 bars) - "Now the time went so quickly..."
**Chorus** (8 bars)
**Bridge/Verse 3** (8 bars) - "And I had the parade..."  
**Chorus** (8 bars)
**Outro/Ending** - "Freeway cars and trucks" repeating

For right hand alone, you'll alternate between melody (when singing) and chords (for accompaniment feel). Today: play through the intro.`,
      exercises: [
        {
          id: exerciseId(12, 1, 1),
          title: 'Intro - RH Chords',
          description: 'Four bar intro: G - Bm - C - D',
          abc_notation: `X:1
T:Intro
M:4/4
L:1/2
Q:1/4=74
K:G
[GBd]2 [GBd]2 | [BdF]2 [BdF]2 | [CEG]2 [CEG]2 | [D^FA]2 [D^FA]2 |]`,
          target_tempo: 74,
          tips: ['This sets up the whole song', 'Count yourself in: 1, 2, 3, 4...'],
          common_mistakes: ['Starting without establishing tempo']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Intro into Verse',
      objectives: [
        'Connect intro to verse melody',
        'Smooth transition'
      ],
      content: `After the intro chords, the verse melody begins. Practice going from D chord into the G melody note.`,
      exercises: [
        {
          id: exerciseId(12, 2, 1),
          title: 'Intro to Verse',
          description: 'End of intro into verse melody.',
          abc_notation: `X:1
T:Intro to Verse
M:4/4
L:1/8
Q:1/4=74
K:G
[D^FA]4 [D^FA]4 | G2 G2 A2 B2 | d4 d2 B2 |]`,
          target_tempo: 70,
          tips: ['The D chord sets up the G melody note', 'Don\'t pause between sections'],
          common_mistakes: ['Stopping after intro']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Verse into Chorus',
      objectives: [
        'Practice the verse-to-chorus transition',
        'Feel the energy shift'
      ],
      content: `End of verse resolves to G, then chorus lifts to high D. This is the emotional pivot of the song.`,
      exercises: [
        {
          id: exerciseId(12, 3, 1),
          title: 'Verse to Chorus',
          description: 'Last line of verse into chorus opening.',
          abc_notation: `X:1
T:Verse to Chorus
M:4/4
L:1/8
Q:1/4=74
K:G
A2 G2 E2 D2 | G6 z2 | d4 d2 e2 | d4 z4 |]`,
          target_tempo: 70,
          tips: ['Feel the lift', 'The chorus should feel like relief'],
          common_mistakes: ['No dynamic change between sections']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Full First Half',
      objectives: [
        'Play Intro → Verse → Chorus',
        'Maintain energy through transitions'
      ],
      content: `String together everything up through the first chorus. This is the first half of the song.`,
      exercises: [
        {
          id: exerciseId(12, 4, 1),
          title: 'First Half',
          description: 'Intro through first chorus.',
          abc_notation: `X:1
T:First Half
M:4/4
L:1/8
Q:1/4=74
K:G
% Intro chords
[GBd]4 [GBd]4 | [BdF]4 [BdF]4 | [CEG]4 [CEG]4 | [D^FA]4 [D^FA]4 |
% Verse melody
G2 G2 A2 B2 | d4 d2 B2 | A2 G2 E2 D2 | G6 z2 |
% Chorus melody
d4 d2 e2 | d4 z4 | B2 B2 d2 e2 | d4 B2 G2 |]`,
          target_tempo: 66,
          tips: ['This is substantial—pace yourself', 'Keep tempo steady throughout'],
          common_mistakes: ['Speeding up or slowing down through sections']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'The Ending',
      objectives: [
        'Learn the outro pattern',
        'The "freeway" hook repeats'
      ],
      content: `The ending repeats "freeway cars and trucks" over a descending chord pattern: G - C#m - C - Dmaj7. It fades out with repetition.`,
      exercises: [
        {
          id: exerciseId(12, 5, 1),
          title: 'Outro',
          description: 'The ending hook and chord pattern.',
          abc_notation: `X:1
T:Outro
M:4/4
L:1/8
Q:1/4=74
K:G
% Freeway hook with ending chords
A2 A2 B2 c2 | B4 z4 | A2 A2 B2 c2 | B4 z4 |]`,
          target_tempo: 74,
          tips: ['This can repeat as long as you want', 'Gradually soften toward the end'],
          common_mistakes: ['Ending abruptly instead of fading']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Complete Run-Through',
      objectives: [
        'Play entire song structure, RH only',
        'Identify weak spots'
      ],
      content: `Try to play through the whole song. Note where you stumble—those are your practice priorities.`,
      exercises: [
        {
          id: exerciseId(12, 6, 1),
          title: 'Full Song RH',
          description: 'Complete song, right hand.',
          abc_notation: `X:1
T:Complete Song RH
M:4/4
L:1/4
Q:1/4=74
K:G
% This is a reminder of the structure - play from memory
G2 G2 | B d B G | A G E D | G4 |]`,
          target_tempo: 70,
          tips: ['Don\'t stop for mistakes—push through', 'Note what needs work'],
          common_mistakes: ['Stopping every time you make a mistake']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 12 Checkpoint - Phase 2 Midpoint',
      objectives: [
        'Complete RH run-through',
        'Assess readiness for LH work'
      ],
      content: `This is the midpoint of Phase 2. Your right hand should be able to navigate the entire song. Not perfect—but competent.`,
      exercises: [
        {
          id: exerciseId(12, 7, 1),
          title: 'RH Final Check',
          description: 'Play through song, right hand, as complete as possible.',
          abc_notation: `X:1
T:RH Check
M:4/4
L:1/4
K:G
G4 |]`,
          target_tempo: 70,
          tips: ['This doesn\'t need notation—play from memory', 'Sing along if it helps'],
          common_mistakes: ['Relying on notation instead of memory']
        }
      ],
      checkpoint_criteria: [
        'Can play through complete song structure RH',
        'Transitions between sections are smooth',
        'Know the melody and chord voicings from memory',
        'Ready to add left hand'
      ]
    }
  ]
}

const week13: WeekContent = {
  week_number: 13,
  phase: 2,
  title: 'Left Hand Bass Patterns',
  overview: 'Time to teach your left hand its job. In this style of piano playing, the left hand provides the bass and harmonic foundation. This week: basic patterns that work for the entire song.',
  theory_concepts: ['Bass lines', 'Root-fifth pattern', 'Stride basics'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'LH Role',
      objectives: [
        'Understand left hand function',
        'Learn root note pattern',
        'Establish the groove'
      ],
      content: `Your left hand has one main job: lay down the foundation. In jazz and folk piano, this typically means playing root notes (the bass) on beats 1 and 3, or sometimes just beat 1.

**Simplest pattern:** Just play the root note of each chord on beat 1 and hold it. That's where we start.

G chord = G bass note
Bm chord = B bass note
C chord = C bass note
D chord = D bass note`,
      exercises: [
        {
          id: exerciseId(13, 1, 1),
          title: 'Root Notes Only',
          description: 'Play just the root of each chord, whole notes.',
          abc_notation: `X:1
T:LH Root Notes
M:4/4
L:1
Q:1/4=74
K:G bass
G,, | B,, | C, | D, |]`,
          target_tempo: 74,
          tips: ['This is the skeleton of your bass line', 'Let the notes ring'],
          common_mistakes: ['Playing too loud—bass should support, not dominate']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Root-Fifth Pattern',
      objectives: [
        'Add the fifth to your bass pattern',
        'Root on beat 1, fifth on beat 3'
      ],
      content: `Add the fifth: Root on beat 1, fifth on beat 3. For G, that's G then D. This creates movement while staying simple.`,
      exercises: [
        {
          id: exerciseId(13, 2, 1),
          title: 'Root-Fifth Pattern',
          description: 'G: G-D, Bm: B-F#, C: C-G, D: D-A',
          abc_notation: `X:1
T:LH Root-Fifth
M:4/4
L:1/2
Q:1/4=74
K:G bass
G,, D, | B,, ^F, | C, G, | D, A, |]`,
          target_tempo: 66,
          tips: ['Beat 1 root, beat 3 fifth', 'Keep it steady like a heartbeat'],
          common_mistakes: ['Uneven rhythm between root and fifth']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Octave Pattern',
      objectives: [
        'Learn root-octave pattern',
        'Alternative to root-fifth'
      ],
      content: `Another option: root on beat 1, same note an octave up on beat 3. Root-octave is simpler than root-fifth (no new note to find) but less melodic.`,
      exercises: [
        {
          id: exerciseId(13, 3, 1),
          title: 'Root-Octave Pattern',
          description: 'G low to G high, etc.',
          abc_notation: `X:1
T:LH Root-Octave
M:4/4
L:1/2
Q:1/4=74
K:G bass
G,, G, | B,, B, | C, c | D, d |]`,
          target_tempo: 66,
          tips: ['This has a more driving feel', 'Good for higher energy sections'],
          common_mistakes: ['Stretching too far and creating tension']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Quarter Note Bass',
      objectives: [
        'Four bass notes per bar',
        'Walking bass concept'
      ],
      content: `For more energy, play root-fifth-root-fifth (four quarter notes). This creates a gentle walking bass feel.`,
      exercises: [
        {
          id: exerciseId(13, 4, 1),
          title: 'Quarter Note Bass',
          description: 'Root-fifth-root-fifth per bar.',
          abc_notation: `X:1
T:LH Quarter Notes
M:4/4
L:1/4
Q:1/4=74
K:G bass
G,, D, G,, D, | B,, ^F, B,, ^F, | C, G, C, G, | D, A, D, A, |]`,
          target_tempo: 66,
          tips: ['Even quarter notes', 'This is more active but still simple'],
          common_mistakes: ['Rushing the quarter notes']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Verse Progression LH',
      objectives: [
        'Apply bass pattern to verse chords',
        'Full verse, LH only'
      ],
      content: `Apply your preferred pattern to the full verse chord progression. Try root-fifth for now.`,
      exercises: [
        {
          id: exerciseId(13, 5, 1),
          title: 'Verse Bass Line',
          description: 'Complete verse progression, LH.',
          abc_notation: `X:1
T:Verse Bass
M:4/4
L:1/2
Q:1/4=74
K:G bass
G,, D, | G,, D, | B,, ^F, | B,, ^F, | C, G, | C, G, | D, A, | D, A, |]`,
          target_tempo: 66,
          tips: ['This should feel like second nature', 'Don\'t look at your hand'],
          common_mistakes: ['Losing track of chord changes']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Metronome Work',
      objectives: [
        'Lock LH with metronome',
        'Build rock-solid timing'
      ],
      content: `Your left hand is the timekeeper. Today: metronome on every beat. Your bass notes must be perfectly aligned.`,
      exercises: [
        {
          id: exerciseId(13, 6, 1),
          title: 'Metronome Lock',
          description: 'Full verse progression with metronome.',
          abc_notation: `X:1
T:Metronome Practice
M:4/4
L:1/2
Q:1/4=74
K:G bass
G,, D, | B,, ^F, | C, G, | D, A, | G,, D, | G,, D, |]`,
          target_tempo: 74,
          tips: ['Every note aligned with the click', 'This is your foundation'],
          common_mistakes: ['Drifting ahead of or behind the beat']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 13 Checkpoint',
      objectives: [
        'Solid LH bass pattern',
        'Can play through verse progression without looking'
      ],
      content: `Your left hand should now feel comfortable on the verse progression. Root-fifth pattern, steady as a heartbeat.`,
      exercises: [
        {
          id: exerciseId(13, 7, 1),
          title: 'LH Check',
          description: 'Play verse bass line with eyes closed.',
          abc_notation: `X:1
T:LH Final Check
M:4/4
L:1/2
Q:1/4=74
K:G bass
G,, D, | B,, ^F, | C, G, | D, A, |]`,
          target_tempo: 74,
          tips: ['Eyes closed for real', 'Trust your hands'],
          common_mistakes: ['Peeking']
        }
      ],
      checkpoint_criteria: [
        'Can play root-fifth pattern smoothly',
        'Verse progression memorized for LH',
        'Timing locked with metronome',
        'Can play without looking at hands'
      ]
    }
  ]
}

const week14: WeekContent = {
  week_number: 14,
  phase: 2,
  title: 'Left Hand on Verse',
  overview: 'This week we drill the left hand on the complete verse. By the end, the verse bass line should be automatic—you shouldn\'t have to think about it.',
  theory_concepts: ['Muscle memory', 'Automaticity', 'Bass line variations'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'Verse Deep Dive',
      objectives: [
        'Map out complete verse bass line',
        'Understand where Gmaj7 fits'
      ],
      content: `The verse goes: G - G - Bm - Bm - C - C - D - D - G - Gmaj7 - G. The bass line is mostly root-fifth, but on Gmaj7 you can just hold the G bass (no change needed in LH).

This week is about repetition. The verse should become completely automatic.`,
      exercises: [
        {
          id: exerciseId(14, 1, 1),
          title: 'Complete Verse Bass',
          description: 'Full verse with all chord changes.',
          abc_notation: `X:1
T:Complete Verse Bass
M:4/4
L:1/2
Q:1/4=74
K:G bass
G,, D, | G,, D, | B,, ^F, | B,, ^F, | C, G, | C, G, | D, A, | D, A, | G,, D, | G,, D, | G,, D, | G,,4 |]`,
          target_tempo: 66,
          tips: ['This is the full verse', 'Notice the G stays for Gmaj7'],
          common_mistakes: ['Changing bass note on Gmaj7']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Repetition Day 1',
      objectives: [
        'Play verse bass 10 times',
        'Build automaticity'
      ],
      content: `Today: play through the verse bass line 10 times. Yes, 10 times. This is how muscle memory forms.`,
      exercises: [
        {
          id: exerciseId(14, 2, 1),
          title: 'Rep Session 1',
          description: 'Verse bass line x10.',
          abc_notation: `X:1
T:Verse Bass Rep
M:4/4
L:1/2
Q:1/4=70
K:G bass
G,, D, | B,, ^F, | C, G, | D, A, |]`,
          target_tempo: 70,
          tips: ['Don\'t count—just keep going', 'Notice when it starts feeling automatic'],
          common_mistakes: ['Getting bored and losing focus']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Repetition Day 2',
      objectives: [
        'More repetitions',
        'Increase tempo slightly'
      ],
      content: `More of the same. Push tempo up a bit if yesterday felt solid.`,
      exercises: [
        {
          id: exerciseId(14, 3, 1),
          title: 'Rep Session 2',
          description: 'Verse bass at increased tempo.',
          abc_notation: `X:1
T:Verse Bass - Faster
M:4/4
L:1/2
Q:1/4=74
K:G bass
G,, D, | B,, ^F, | C, G, | D, A, |]`,
          target_tempo: 74,
          tips: ['Target tempo now', 'Should feel easier than yesterday'],
          common_mistakes: ['Tension creeping in at faster speed']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Eyes Closed',
      objectives: [
        'Play verse bass without looking',
        'Trust muscle memory'
      ],
      content: `Close your eyes. Play the verse bass line. If you can do this, you've internalized it.`,
      exercises: [
        {
          id: exerciseId(14, 4, 1),
          title: 'Eyes Closed',
          description: 'Verse bass, no looking.',
          abc_notation: `X:1
T:Verse Bass Blind
M:4/4
L:1/2
Q:1/4=74
K:G bass
G,, D, | B,, ^F, | C, G, | D, A, | G,, D, | G,,4 |]`,
          target_tempo: 70,
          tips: ['Really close your eyes', 'Trust the patterns you\'ve built'],
          common_mistakes: ['Peeking when you feel lost']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Dynamics',
      objectives: [
        'Add dynamic variation',
        'Subtle swells and dips'
      ],
      content: `Now that the notes are automatic, add feel. Slightly louder on beat 1, softer on beat 3. Small variations make it musical.`,
      exercises: [
        {
          id: exerciseId(14, 5, 1),
          title: 'Dynamic Bass',
          description: 'Verse bass with dynamic variation.',
          abc_notation: `X:1
T:Dynamic Bass
M:4/4
L:1/2
Q:1/4=74
K:G bass
G,, D, | B,, ^F, | C, G, | D, A, |]`,
          target_tempo: 74,
          tips: ['Beat 1 slightly stronger', 'This is subtle—not loud/quiet extremes'],
          common_mistakes: ['Overdoing dynamics']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Verse x3',
      objectives: [
        'Play through three verses back to back',
        'Build stamina'
      ],
      content: `The song has three verses. Can you play the bass line three times in a row without your focus drifting?`,
      exercises: [
        {
          id: exerciseId(14, 6, 1),
          title: 'Triple Verse',
          description: 'Bass line for verses 1, 2, and 3.',
          abc_notation: `X:1
T:Triple Verse
M:4/4
L:1/2
Q:1/4=74
K:G bass
% Repeat this pattern three times mentally
G,, D, | B,, ^F, | C, G, | D, A, |]`,
          target_tempo: 74,
          tips: ['Don\'t stop between verses', 'Maintain consistency'],
          common_mistakes: ['Quality degrading on verse 2 and 3']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 14 Checkpoint',
      objectives: [
        'Verse bass completely automatic',
        'Ready for chorus bass'
      ],
      content: `The verse bass should now be effortless. If it's not, spend another few days here before moving on.`,
      exercises: [
        {
          id: exerciseId(14, 7, 1),
          title: 'Verse Bass Final',
          description: 'Full verse bass, automatic, musical.',
          abc_notation: `X:1
T:Verse Bass Final
M:4/4
L:1/2
Q:1/4=74
K:G bass
G,, D, | B,, ^F, | C, G, | D, A, | G,, D, | G,,4 |]`,
          target_tempo: 74,
          tips: ['This should feel easy now'],
          common_mistakes: ['Moving on before it\'s truly automatic']
        }
      ],
      checkpoint_criteria: [
        'Can play verse bass with eyes closed',
        'Tempo is locked at 74 BPM',
        'Dynamic variation present',
        'Can play three verses consecutively'
      ]
    }
  ]
}

const week15: WeekContent = {
  week_number: 15,
  phase: 2,
  title: 'Left Hand on Chorus & Ending',
  overview: 'Chorus and ending bass patterns. The chorus uses the same chords as the verse (with D7sus4), so the bass is similar. The ending has a descending pattern that\'s slightly different.',
  theory_concepts: ['Chromatic bass', 'Descending lines', 'Outro patterns'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'Chorus Bass',
      objectives: [
        'Apply bass pattern to chorus chords',
        'Note D7sus4 uses D bass (same as D)'
      ],
      content: `Good news: the chorus bass is almost identical to the verse. G - Bm - C - D7sus4. The bass notes are still G, B, C, D.

The only difference is the feel—chorus should have slightly more energy. Same notes, more confidence.`,
      exercises: [
        {
          id: exerciseId(15, 1, 1),
          title: 'Chorus Bass',
          description: 'G - Bm - C - D7sus4 bass pattern.',
          abc_notation: `X:1
T:Chorus Bass
M:4/4
L:1/2
Q:1/4=74
K:G bass
G,, D, | G,, D, | B,, ^F, | B,, ^F, | C, G, | C, G, | D, A, | D, A, |]`,
          target_tempo: 74,
          tips: ['Same pattern as verse', 'Just more energy'],
          common_mistakes: ['Playing it exactly like verse—add some life']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Verse to Chorus Transition',
      objectives: [
        'Smooth bass transition between sections',
        'Maintain tempo through change'
      ],
      content: `Practice going from verse bass directly into chorus bass. The chord sequence continues naturally.`,
      exercises: [
        {
          id: exerciseId(15, 2, 1),
          title: 'Section Transition',
          description: 'End of verse into chorus, LH.',
          abc_notation: `X:1
T:Verse to Chorus LH
M:4/4
L:1/2
Q:1/4=74
K:G bass
D, A, | G,, D, | G,, D, | G,, D, | B,, ^F, | C, G, | D, A, |]`,
          target_tempo: 74,
          tips: ['No pause between sections', 'Tempo stays rock solid'],
          common_mistakes: ['Hesitating at section boundary']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Ending Bass Pattern',
      objectives: [
        'Learn the outro chord bass',
        'G - C#m - C - Dmaj7'
      ],
      content: `The ending is different. It goes G - C#m - C - Dmaj7. The bass walks down chromatically at points. G - C# - C - D.`,
      exercises: [
        {
          id: exerciseId(15, 3, 1),
          title: 'Ending Bass',
          description: 'Outro bass pattern.',
          abc_notation: `X:1
T:Ending Bass
M:4/4
L:1/2
Q:1/4=74
K:G bass
G,, D, | ^C, ^G, | C, G, | D, A, |]`,
          target_tempo: 70,
          tips: ['Notice the C# bass for C#m', 'It\'s chromatic: G-C#-C'],
          common_mistakes: ['Missing the C# (it\'s a black key)']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Ending Loop',
      objectives: [
        'Practice ending pattern on repeat',
        'This section loops until fade out'
      ],
      content: `The ending repeats this 4-bar pattern until the song fades. Practice looping it seamlessly.`,
      exercises: [
        {
          id: exerciseId(15, 4, 1),
          title: 'Ending Loop',
          description: 'Repeat the ending pattern 4 times.',
          abc_notation: `X:1
T:Ending Loop
M:4/4
L:1/2
Q:1/4=74
K:G bass
G,, D, | ^C, ^G, | C, G, | D, A, |]`,
          target_tempo: 74,
          tips: ['Seamless loop—no bump at the restart', 'This could go on forever'],
          common_mistakes: ['Audible seam where pattern repeats']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Complete Song Bass',
      objectives: [
        'Play through entire song bass line',
        'Intro through ending'
      ],
      content: `String together verse bass, chorus bass, and ending bass. This is the complete LH part of the song.`,
      exercises: [
        {
          id: exerciseId(15, 5, 1),
          title: 'Full Song Bass',
          description: 'Complete bass line, all sections.',
          abc_notation: `X:1
T:Full Song Bass
M:4/4
L:1/2
Q:1/4=74
K:G bass
% Play verse pattern, chorus pattern, ending pattern in sequence
G,, D, | B,, ^F, | C, G, | D, A, |]`,
          target_tempo: 74,
          tips: ['This is the full journey', 'Know where you are at all times'],
          common_mistakes: ['Getting lost in the form']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Dynamics Through Sections',
      objectives: [
        'Vary energy between sections',
        'Verse mellow, chorus brighter, ending fades'
      ],
      content: `Add dynamic shape to the whole bass line. Start mellow (verse), lift (chorus), fade out (ending).`,
      exercises: [
        {
          id: exerciseId(15, 6, 1),
          title: 'Dynamic Journey',
          description: 'Full bass line with dynamic arc.',
          abc_notation: `X:1
T:Dynamic Bass Journey
M:4/4
L:1/2
Q:1/4=74
K:G bass
G,, D, | B,, ^F, | C, G, | D, A, |]`,
          target_tempo: 74,
          tips: ['Tell a story with volume', 'Ending should almost disappear'],
          common_mistakes: ['Same volume throughout']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 15 Checkpoint',
      objectives: [
        'Complete LH part memorized',
        'All sections, all transitions'
      ],
      content: `Can you play the entire song bass line from memory? That's the goal.`,
      exercises: [
        {
          id: exerciseId(15, 7, 1),
          title: 'LH Complete Check',
          description: 'Full song bass line, memory only.',
          abc_notation: `X:1
T:LH Final Check
M:4/4
L:1
Q:1/4=74
K:G bass
G,, |]`,
          target_tempo: 74,
          tips: ['Close the app, play from memory', 'You know this now'],
          common_mistakes: ['Doubting yourself']
        }
      ],
      checkpoint_criteria: [
        'Verse bass automatic',
        'Chorus bass automatic',
        'Ending pattern memorized',
        'Can play full song LH from memory'
      ]
    }
  ]
}

const week16: WeekContent = {
  week_number: 16,
  phase: 2,
  title: 'Left Hand Mastery & Phase 2 Finale',
  overview: 'Final week of Phase 2. This week is about polish—making the left hand completely solid before we combine hands in Phase 3.',
  theory_concepts: ['Consolidation', 'Preparation for hands together'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'Phase 2 Review',
      objectives: [
        'Review all LH material',
        'Identify any remaining weak spots'
      ],
      content: `This is the final week before we put hands together. Your LH needs to be absolutely solid—it's going to be the foundation while your RH does the more complex work.

Today: Play through the complete bass line slowly. Note anything that still feels uncertain.`,
      exercises: [
        {
          id: exerciseId(16, 1, 1),
          title: 'Slow Review',
          description: 'Full bass line at 60 BPM—identify weak spots.',
          abc_notation: `X:1
T:Slow Review
M:4/4
L:1/2
Q:1/4=60
K:G bass
G,, D, | B,, ^F, | C, G, | D, A, | G,, D, |]`,
          target_tempo: 60,
          tips: ['Slow reveals problems that fast hides', 'Be honest about weak spots'],
          common_mistakes: ['Glossing over problems']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Weak Spot Drill',
      objectives: [
        'Target your weakest transition',
        'Repetition until solid'
      ],
      content: `Whatever felt weakest yesterday, drill it today. 20 repetitions minimum.`,
      exercises: [
        {
          id: exerciseId(16, 2, 1),
          title: 'Target Practice',
          description: 'Your weakest spot, 20 reps.',
          abc_notation: `X:1
T:Target Practice
M:4/4
L:1/2
Q:1/4=74
K:G bass
% Insert your weakest transition here
G,, D, | B,, ^F, |]`,
          target_tempo: 74,
          tips: ['Isolate the problem', 'Repetition is the answer'],
          common_mistakes: ['Not doing enough reps']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Speed Test',
      objectives: [
        'Push tempo to 80 BPM',
        'Test your ceiling'
      ],
      content: `Can you play the bass line at 80 BPM? This is above target tempo—if you can do this, 74 will feel easy.`,
      exercises: [
        {
          id: exerciseId(16, 3, 1),
          title: 'Speed Test',
          description: 'Full bass line at 80 BPM.',
          abc_notation: `X:1
T:Speed Test
M:4/4
L:1/2
Q:1/4=80
K:G bass
G,, D, | B,, ^F, | C, G, | D, A, |]`,
          target_tempo: 80,
          tips: ['This is a test, not the goal', 'See what you can do'],
          common_mistakes: ['Getting sloppy at speed']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Endurance Run',
      objectives: [
        'Play full song bass line 3 times through',
        'Build stamina'
      ],
      content: `Three complete run-throughs, no stopping. This builds the endurance you'll need for the full performance.`,
      exercises: [
        {
          id: exerciseId(16, 4, 1),
          title: 'Endurance Run',
          description: '3x full song bass line.',
          abc_notation: `X:1
T:Endurance Run
M:4/4
L:1/2
Q:1/4=74
K:G bass
G,, D, | B,, ^F, | C, G, | D, A, |]`,
          target_tempo: 74,
          tips: ['No stopping', 'Push through fatigue'],
          common_mistakes: ['Stopping when tired']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Eyes Closed Full Song',
      objectives: [
        'Complete bass line, no looking',
        'Pure muscle memory'
      ],
      content: `The ultimate test: eyes closed, full song. If you can do this, your LH is ready.`,
      exercises: [
        {
          id: exerciseId(16, 5, 1),
          title: 'Blind Run',
          description: 'Full bass line, eyes closed.',
          abc_notation: `X:1
T:Blind Run
M:4/4
L:1/2
Q:1/4=74
K:G bass
G,, D, | B,, ^F, | C, G, | D, A, |]`,
          target_tempo: 74,
          tips: ['Really close them', 'Trust your hands'],
          common_mistakes: ['Peeking']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Musical Bass',
      objectives: [
        'Add expression to bass line',
        'This isn\'t just notes—it\'s music'
      ],
      content: `Your bass line should groove. Slight swing, dynamic variation, intentional feel. Make it musical.`,
      exercises: [
        {
          id: exerciseId(16, 6, 1),
          title: 'Groove Session',
          description: 'Full bass line with maximum feel.',
          abc_notation: `X:1
T:Groove Session
M:4/4
L:1/2
Q:1/4=74
K:G bass
G,, D, | B,, ^F, | C, G, | D, A, |]`,
          target_tempo: 74,
          tips: ['Swing it', 'Breathe with the music'],
          common_mistakes: ['Playing mechanically']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Phase 2 Complete!',
      objectives: [
        'Celebrate Phase 2 completion',
        'Ready for hands together'
      ],
      content: `**Phase 2 Complete!** You now know the complete song with each hand separately. RH has melody and chords. LH has the bass line. 

Phase 3 is where we put them together. It's going to be hard—but you're ready.`,
      exercises: [
        {
          id: exerciseId(16, 7, 1),
          title: 'Phase 2 Finale',
          description: 'Full song, LH only, one final time.',
          abc_notation: `X:1
T:Phase 2 Finale
M:4/4
L:1/2
Q:1/4=74
K:G bass
G,, D, | B,, ^F, | C, G, | D, A, | G,, D, | G,,4 |]`,
          target_tempo: 74,
          tips: ['Take a moment to appreciate how far you\'ve come', 'You know this song now'],
          common_mistakes: ['Rushing through without acknowledging progress']
        }
      ],
      checkpoint_criteria: [
        'LH plays complete song bass from memory',
        'Can play at 74-80 BPM comfortably',
        'Eyes-closed playing is solid',
        'Musical expression present',
        'PHASE 2 COMPLETE - Ready for hands together!'
      ]
    }
  ]
}

// ============================================================================
// PHASE 3: Hands Together (Weeks 17-24)
// The hard part. Slow, methodical integration of both hands.
// ============================================================================

const week17: WeekContent = {
  week_number: 17,
  phase: 3,
  title: 'First Steps - Hands Together',
  overview: 'Welcome to the grind. This is where most adult beginners quit. You\'re not going to. Putting hands together feels like starting over—your brain has to coordinate two independent streams. It\'s going to feel clumsy. That\'s not failure—that\'s the process.',
  theory_concepts: ['Hand independence', 'Coordination', 'Slow practice methodology'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'The Hands Together Challenge',
      objectives: [
        'Understand why this is hard',
        'Learn the approach: painfully slow',
        'Play first chord with both hands'
      ],
      content: `**Phase 3 begins.** This is the mountain.

Here's the truth: putting hands together feels like you've forgotten everything. Your LH, which was solid, suddenly stumbles. Your RH, which was automatic, freezes. This is completely normal.

**The approach:** We go PAINFULLY slow. 40 BPM. Maybe slower. Speed is not the goal right now—coordination is. You're building new neural pathways between your hands.

**Today's only goal:** Play a G chord with both hands at the same time. LH plays G bass, RH plays G triad. Just that. One chord. Together.`,
      exercises: [
        {
          id: exerciseId(17, 1, 1),
          title: 'First Chord Together',
          description: 'G chord, both hands, simultaneously.',
          abc_notation: `X:1
T:First Chord Together
M:4/4
L:1
Q:1/4=40
K:G
[G,,D,][GBd] |]`,
          target_tempo: 40,
          tips: ['Both hands hit at EXACTLY the same time', 'Listen for the blend'],
          common_mistakes: ['One hand arriving before the other']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Four Chords Together',
      objectives: [
        'Play G, Bm, C, D with both hands',
        'No movement yet—just chord hits'
      ],
      content: `Yesterday: one chord. Today: four chords. Still no movement between them—just hit each chord cleanly with both hands.`,
      exercises: [
        {
          id: exerciseId(17, 2, 1),
          title: 'Four Chords Static',
          description: 'G, Bm, C, D - each chord held, both hands.',
          abc_notation: `X:1
T:Four Chords Together
M:4/4
L:1
Q:1/4=40
K:G
[G,,D,][GBd] | [B,,^F,][BdF] | [C,G,][CEG] | [D,A,][D^FA] |]`,
          target_tempo: 40,
          tips: ['Pause between chords to reset', 'Quality over speed'],
          common_mistakes: ['Rushing to the next chord']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'G to Bm Transition',
      objectives: [
        'Move between two chords',
        'First real coordination challenge'
      ],
      content: `Now we move. G to Bm, back and forth. This is your first real hands-together transition. Go absurdly slow.`,
      exercises: [
        {
          id: exerciseId(17, 3, 1),
          title: 'G to Bm Movement',
          description: 'Transition between G and Bm, both hands.',
          abc_notation: `X:1
T:G to Bm
M:4/4
L:1/2
Q:1/4=40
K:G
[G,,D,][GBd]2 | [B,,^F,][BdF]2 | [G,,D,][GBd]2 | [B,,^F,][BdF]2 |]`,
          target_tempo: 40,
          tips: ['Visualize both hand positions before moving', 'Move hands together, not one then the other'],
          common_mistakes: ['Moving one hand, then the other']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Full Progression - Slow',
      objectives: [
        'G - Bm - C - D progression',
        'Still at 40 BPM'
      ],
      content: `The full verse progression, both hands, glacially slow. This is the foundation of the entire song.`,
      exercises: [
        {
          id: exerciseId(17, 4, 1),
          title: 'Verse Progression HT',
          description: 'G - Bm - C - D, hands together.',
          abc_notation: `X:1
T:Verse Progression HT
M:4/4
L:1/2
Q:1/4=40
K:G
[G,,D,][GBd]2 | [B,,^F,][BdF]2 | [C,G,][CEG]2 | [D,A,][D^FA]2 |]`,
          target_tempo: 40,
          tips: ['If you stumble, don\'t restart—isolate the problem spot'],
          common_mistakes: ['Restarting from the beginning every time you stumble']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Adding Bass Movement',
      objectives: [
        'LH plays root-fifth while RH holds chord',
        'First taste of independence'
      ],
      content: `Now LH starts moving while RH holds. LH plays root, then fifth. RH just sustains the chord. This is baby-steps hand independence.`,
      exercises: [
        {
          id: exerciseId(17, 5, 1),
          title: 'LH Movement Under RH',
          description: 'RH holds G chord, LH plays G-D-G-D.',
          abc_notation: `X:1
T:LH Movement Under RH
M:4/4
L:1/4
Q:1/4=40
K:G
[G,,][GBd] [D,]z [G,,]z [D,]z |]`,
          target_tempo: 40,
          tips: ['RH stays completely still', 'LH does all the moving'],
          common_mistakes: ['RH sympathetically moving with LH']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'First Two Bars',
      objectives: [
        'Bars 1-2 of verse, hands together',
        'LH bass pattern, RH chords'
      ],
      content: `Two bars. That's it. LH plays the bass pattern, RH plays chords. This is the actual texture of the song.`,
      exercises: [
        {
          id: exerciseId(17, 6, 1),
          title: 'Verse Bars 1-2',
          description: 'First two bars of verse, full texture.',
          abc_notation: `X:1
T:Verse Bars 1-2
M:4/4
L:1/4
Q:1/4=40
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] |]`,
          target_tempo: 40,
          tips: ['This is what it\'s supposed to sound like', 'Two bars is a victory'],
          common_mistakes: ['Trying to do too much too soon']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 17 Checkpoint',
      objectives: [
        'Can play four chords HT',
        'Can play 2 bars of verse HT'
      ],
      content: `Week 1 of hands together is done. If you can play two bars at 40 BPM with both hands, you're on track. It doesn't need to be pretty yet.`,
      exercises: [
        {
          id: exerciseId(17, 7, 1),
          title: 'Week 17 Check',
          description: 'Two bars of verse, hands together, 40 BPM.',
          abc_notation: `X:1
T:Week 17 Check
M:4/4
L:1/4
Q:1/4=40
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] |]`,
          target_tempo: 40,
          tips: ['This is harder than it looks', 'Celebrate small wins'],
          common_mistakes: ['Being too hard on yourself']
        }
      ],
      checkpoint_criteria: [
        'Can play G-Bm-C-D progression HT at 40 BPM',
        'Can play 2 bars with bass pattern under chords',
        'Hands move together, not sequentially',
        'Mentally prepared for more slow work'
      ]
    }
  ]
}

const week18: WeekContent = {
  week_number: 18,
  phase: 3,
  title: 'Verse Section - Hands Together',
  overview: 'Building out the complete verse, still slow. By the end of this week, you should be able to play the full verse with both hands at 40-45 BPM.',
  theory_concepts: ['Section building', 'Patience', 'Incremental progress'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'Verse Expansion',
      objectives: [
        'Review bars 1-2',
        'Add bars 3-4 (Bm section)'
      ],
      content: `You have bars 1-2. Now we add bars 3-4 (the Bm chord). Same approach: absurdly slow, focus on coordination, not speed.`,
      exercises: [
        {
          id: exerciseId(18, 1, 1),
          title: 'Add Bm Section',
          description: 'Bars 3-4: Bm chord with bass pattern.',
          abc_notation: `X:1
T:Bm Section HT
M:4/4
L:1/4
Q:1/4=40
K:G
[B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |]`,
          target_tempo: 40,
          tips: ['Same pattern, different chord', 'B to F# in LH'],
          common_mistakes: ['Forgetting F# is sharp']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Connect G to Bm',
      objectives: [
        'Bars 1-4 connected',
        'Smooth transition'
      ],
      content: `Connect what you know. Bars 1-2 (G) into bars 3-4 (Bm). Four bars, hands together.`,
      exercises: [
        {
          id: exerciseId(18, 2, 1),
          title: 'Bars 1-4 HT',
          description: 'G section into Bm section.',
          abc_notation: `X:1
T:Verse Bars 1-4
M:4/4
L:1/4
Q:1/4=40
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |]`,
          target_tempo: 40,
          tips: ['The transition is the hard part', 'Prepare both hands for Bm while still on G'],
          common_mistakes: ['Pausing at the transition']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Add C Section',
      objectives: [
        'Bars 5-6: C chord',
        'Connect to previous material'
      ],
      content: `Bars 5-6 are the C chord. Add them to your growing verse.`,
      exercises: [
        {
          id: exerciseId(18, 3, 1),
          title: 'C Section HT',
          description: 'Bars 5-6: C chord with bass pattern.',
          abc_notation: `X:1
T:C Section HT
M:4/4
L:1/4
Q:1/4=40
K:G
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] |]`,
          target_tempo: 40,
          tips: ['C to G in LH', 'RH stays on C-E-G'],
          common_mistakes: ['LH fifth is G, not C']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Add D Section',
      objectives: [
        'Bars 7-8: D chord',
        'Complete verse structure'
      ],
      content: `Final piece: D chord for bars 7-8. This completes the verse chord pattern.`,
      exercises: [
        {
          id: exerciseId(18, 4, 1),
          title: 'D Section HT',
          description: 'Bars 7-8: D chord with bass pattern.',
          abc_notation: `X:1
T:D Section HT
M:4/4
L:1/4
Q:1/4=40
K:G
[D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 40,
          tips: ['D to A in LH', 'RH has F# - don\'t forget'],
          common_mistakes: ['Playing F natural instead of F#']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Full Verse Attempt',
      objectives: [
        'All 8 bars together',
        'First full verse HT'
      ],
      content: `Moment of truth. All 8 bars, hands together, 40 BPM. Don't stop for mistakes—push through.`,
      exercises: [
        {
          id: exerciseId(18, 5, 1),
          title: 'Full Verse HT',
          description: 'Complete verse, hands together.',
          abc_notation: `X:1
T:Full Verse HT
M:4/4
L:1/4
Q:1/4=40
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 40,
          tips: ['Don\'t stop', 'Note where you stumbled'],
          common_mistakes: ['Stopping every time there\'s an error']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Problem Spot Drill',
      objectives: [
        'Identify your weakest transition',
        'Drill it 20 times'
      ],
      content: `Yesterday you played through the verse. Where did you stumble? That spot gets 20 reps today.`,
      exercises: [
        {
          id: exerciseId(18, 6, 1),
          title: 'Weak Spot Drill',
          description: 'Your problem transition, 20 times.',
          abc_notation: `X:1
T:Drill Your Weak Spot
M:4/4
L:1/4
Q:1/4=40
K:G
% Insert your problem transition
[G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] |]`,
          target_tempo: 40,
          tips: ['Isolate the exact moment of trouble', 'Repetition fixes everything'],
          common_mistakes: ['Not being honest about where you struggle']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 18 Checkpoint',
      objectives: [
        'Full verse HT at 40 BPM',
        'Ready to add tempo'
      ],
      content: `Can you play the complete verse, hands together, at 40 BPM? It doesn't need to be perfect—just continuous.`,
      exercises: [
        {
          id: exerciseId(18, 7, 1),
          title: 'Verse HT Check',
          description: 'Full verse, hands together, 40 BPM.',
          abc_notation: `X:1
T:Verse Check
M:4/4
L:1/4
Q:1/4=40
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 40,
          tips: ['Continuous, not perfect'],
          common_mistakes: ['Waiting for perfection before moving on']
        }
      ],
      checkpoint_criteria: [
        'Can play full verse HT at 40 BPM',
        'No complete breakdowns mid-verse',
        'Know your weak spots',
        'Ready to increase tempo'
      ]
    }
  ]
}

const week19: WeekContent = {
  week_number: 19,
  phase: 3,
  title: 'Verse - Building Speed',
  overview: 'You can play the verse at 40 BPM. This week we gradually increase tempo while maintaining quality. By week\'s end: 50-55 BPM.',
  theory_concepts: ['Tempo building', 'Quality maintenance', 'The speed plateau'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'Tempo Increase Strategy',
      objectives: [
        'Understand tempo building',
        'First bump: 40 to 45 BPM'
      ],
      content: `You've been at 40 BPM. Now we inch up. The rule: only increase tempo when the current tempo feels comfortable. If 45 feels like chaos, go back to 42.

**Today:** Try the verse at 45 BPM. If it falls apart, drop to 42. Find your edge.`,
      exercises: [
        {
          id: exerciseId(19, 1, 1),
          title: 'Verse at 45 BPM',
          description: 'Full verse, hands together, tempo bump.',
          abc_notation: `X:1
T:Verse at 45
M:4/4
L:1/4
Q:1/4=45
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 45,
          tips: ['5 BPM is significant at these slow speeds', 'Back off if needed'],
          common_mistakes: ['Ego preventing you from going slower']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Consolidate 45 BPM',
      objectives: [
        'Multiple reps at 45 BPM',
        'Make it feel comfortable'
      ],
      content: `Don't rush to 50. Make 45 feel easy first. Play the verse 5 times at 45 BPM.`,
      exercises: [
        {
          id: exerciseId(19, 2, 1),
          title: 'Verse at 45 x5',
          description: 'Five full verses at 45 BPM.',
          abc_notation: `X:1
T:Verse at 45 x5
M:4/4
L:1/4
Q:1/4=45
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 45,
          tips: ['By rep 5, it should feel more natural'],
          common_mistakes: ['Quality degrading with each rep']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Push to 48 BPM',
      objectives: [
        'Incremental tempo increase',
        'Test your ceiling'
      ],
      content: `Small bump to 48. Three BPM might not seem like much, but your hands notice.`,
      exercises: [
        {
          id: exerciseId(19, 3, 1),
          title: 'Verse at 48 BPM',
          description: 'Full verse at 48 BPM.',
          abc_notation: `X:1
T:Verse at 48
M:4/4
L:1/4
Q:1/4=48
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 48,
          tips: ['Stay relaxed', 'Tension kills speed'],
          common_mistakes: ['Tensing shoulders as tempo increases']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Target: 50 BPM',
      objectives: [
        'Half of target tempo',
        'Major milestone'
      ],
      content: `50 BPM is a milestone—you're now at half the target tempo. This is real progress.`,
      exercises: [
        {
          id: exerciseId(19, 4, 1),
          title: 'Verse at 50 BPM',
          description: 'Half-tempo milestone.',
          abc_notation: `X:1
T:Verse at 50
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 50,
          tips: ['Celebrate this', 'You\'re halfway to target tempo'],
          common_mistakes: ['Not acknowledging progress']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Consolidate 50 BPM',
      objectives: [
        'Make 50 feel comfortable',
        'Multiple clean reps'
      ],
      content: `Same as Day 2—don't rush. Make 50 BPM feel easy before pushing further.`,
      exercises: [
        {
          id: exerciseId(19, 5, 1),
          title: 'Verse at 50 x5',
          description: 'Lock in 50 BPM.',
          abc_notation: `X:1
T:Verse at 50 x5
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 50,
          tips: ['Consistency is the goal'],
          common_mistakes: ['Rushing ahead before 50 is solid']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Push to 55 BPM',
      objectives: [
        'Week\'s target tempo',
        'Test but don\'t force'
      ],
      content: `Final push for the week: 55 BPM. If this feels chaotic, stay at 50-52 and try again next week.`,
      exercises: [
        {
          id: exerciseId(19, 6, 1),
          title: 'Verse at 55 BPM',
          description: 'Week 19 target.',
          abc_notation: `X:1
T:Verse at 55
M:4/4
L:1/4
Q:1/4=55
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 55,
          tips: ['Only if 50 is solid', 'No shame in staying at 50'],
          common_mistakes: ['Forcing tempo before ready']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 19 Checkpoint',
      objectives: [
        'Verse HT at 50-55 BPM',
        'Ready for dynamics'
      ],
      content: `Where did you land? 50 BPM? 55? Whatever your comfortable tempo is, that's your baseline for next week.`,
      exercises: [
        {
          id: exerciseId(19, 7, 1),
          title: 'Week 19 Check',
          description: 'Verse at your comfortable tempo.',
          abc_notation: `X:1
T:Verse Tempo Check
M:4/4
L:1/4
Q:1/4=52
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 52,
          tips: ['Be honest about your actual comfortable tempo'],
          common_mistakes: ['Claiming faster than you can reliably play']
        }
      ],
      checkpoint_criteria: [
        'Verse HT at minimum 50 BPM',
        'No complete breakdowns',
        'Transitions are smooth',
        'Ready to add chorus'
      ]
    }
  ]
}

const week20: WeekContent = {
  week_number: 20,
  phase: 3,
  title: 'Adding Dynamics - Verse',
  overview: 'Before adding more sections, let\'s make the verse musical. Dynamics, breathing, expression. Notes are just the beginning—now we make music.',
  theory_concepts: ['Dynamics', 'Phrasing', 'Musical expression'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'Beyond the Notes',
      objectives: [
        'Understand dynamic variation',
        'Verse as a story'
      ],
      content: `You can play the notes. Now we make it sound like music.

**Dynamics 101:**
- Beat 1 slightly louder (downbeat emphasis)
- Phrase endings soften slightly
- Chord changes can have subtle swells

The verse tells a story. "Well my time went so quickly..." It's wistful, nostalgic. That feeling should come through in how you play—not just what you play.`,
      exercises: [
        {
          id: exerciseId(20, 1, 1),
          title: 'Downbeat Emphasis',
          description: 'Slightly louder on beat 1 of each bar.',
          abc_notation: `X:1
T:Downbeat Emphasis
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] |]`,
          target_tempo: 50,
          tips: ['Subtle—not banging', 'Beat 1 is the anchor'],
          common_mistakes: ['Too much contrast', 'Accenting every beat']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Phrase Shaping',
      objectives: [
        'Slight swell into bar 3',
        'Soft landing on bar 4'
      ],
      content: `Shape the four-bar phrase. Bars 1-2 establish, bar 3 peaks slightly, bar 4 resolves.`,
      exercises: [
        {
          id: exerciseId(20, 2, 1),
          title: 'Phrase Shape',
          description: 'Build and release over 4 bars.',
          abc_notation: `X:1
T:Phrase Shape
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |]`,
          target_tempo: 50,
          tips: ['Think: breathe in (bars 1-2), speak (bar 3), exhale (bar 4)'],
          common_mistakes: ['Flat dynamics throughout']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'LH/RH Balance',
      objectives: [
        'RH slightly louder than LH',
        'Melody/harmony balance'
      ],
      content: `In the final arrangement, RH carries the melody. Start training the balance now—RH is the voice, LH is the support.`,
      exercises: [
        {
          id: exerciseId(20, 3, 1),
          title: 'Balance Practice',
          description: 'RH more prominent than LH.',
          abc_notation: `X:1
T:RH/LH Balance
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] |]`,
          target_tempo: 50,
          tips: ['LH should almost disappear under RH', 'This is subtle'],
          common_mistakes: ['LH overpowering', 'Making it too obvious']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Full Verse Musical',
      objectives: [
        'Apply all dynamics to full verse',
        'Make it feel like a song'
      ],
      content: `Put it together: downbeat emphasis, phrase shaping, balance. Play the full verse as music, not an exercise.`,
      exercises: [
        {
          id: exerciseId(20, 4, 1),
          title: 'Musical Verse',
          description: 'Full verse with expression.',
          abc_notation: `X:1
T:Musical Verse
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 50,
          tips: ['Close your eyes', 'Feel the song'],
          common_mistakes: ['Thinking too much, feeling too little']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Tempo + Dynamics',
      objectives: [
        'Push tempo to 55 with dynamics',
        'Quality at speed'
      ],
      content: `Now try at 55 BPM while maintaining the dynamics. Faster often means flatter—fight that tendency.`,
      exercises: [
        {
          id: exerciseId(20, 5, 1),
          title: 'Verse 55 + Dynamics',
          description: 'Faster with expression maintained.',
          abc_notation: `X:1
T:Verse 55 + Dynamics
M:4/4
L:1/4
Q:1/4=55
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 55,
          tips: ['Dynamics don\'t disappear at speed'],
          common_mistakes: ['Going flat when tempo increases']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Eyes Closed Musical',
      objectives: [
        'Play musically without looking',
        'Full internalization'
      ],
      content: `Eyes closed, full verse, with dynamics. This is where it starts to feel real.`,
      exercises: [
        {
          id: exerciseId(20, 6, 1),
          title: 'Eyes Closed Verse',
          description: 'No looking, full expression.',
          abc_notation: `X:1
T:Eyes Closed Verse
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 50,
          tips: ['Trust yourself', 'Feel the music'],
          common_mistakes: ['Peeking']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 20 Checkpoint',
      objectives: [
        'Musical verse at 50-55 BPM',
        'Ready for chorus'
      ],
      content: `Your verse should now sound like music, not just correct notes. That's the difference between playing and performing.`,
      exercises: [
        {
          id: exerciseId(20, 7, 1),
          title: 'Musical Verse Check',
          description: 'Full verse, musical, 50-55 BPM.',
          abc_notation: `X:1
T:Musical Verse Check
M:4/4
L:1/4
Q:1/4=52
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 52,
          tips: ['This should feel good to play'],
          common_mistakes: ['Still treating it as an exercise']
        }
      ],
      checkpoint_criteria: [
        'Verse HT at 50-55 BPM',
        'Clear dynamic variation',
        'Phrase shaping present',
        'Can play with eyes closed',
        'Ready for chorus section'
      ]
    }
  ]
}

const week21: WeekContent = {
  week_number: 21,
  phase: 3,
  title: 'Chorus - Hands Together',
  overview: 'Now the chorus. Same slow-build approach as the verse. The chorus uses similar chords but with D7sus4—the voicing you learned in Week 11.',
  theory_concepts: ['Section contrast', 'Energy shift', 'Chorus feel'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'Chorus HT Introduction',
      objectives: [
        'Apply verse skills to chorus',
        'Note the D7sus4 difference'
      ],
      content: `The chorus chords are: G - Bm - C - D7sus4. Similar to verse, but D7sus4 instead of D. You already know this voicing.

**The energy shift:** Chorus should feel brighter, more open than verse. "Sun's coming up"—there's hope in this section.

Start at 40 BPM, just like the verse.`,
      exercises: [
        {
          id: exerciseId(21, 1, 1),
          title: 'Chorus Chords HT',
          description: 'G - Bm - C - D7sus4, hands together.',
          abc_notation: `X:1
T:Chorus Chords HT
M:4/4
L:1/2
Q:1/4=40
K:G
[G,,D,][GBd]2 | [B,,^F,][BdF]2 | [C,G,][CEG]2 | [D,A,][DGA]2 |]`,
          target_tempo: 40,
          tips: ['D7sus4 is D-G-A in RH', 'Same LH pattern as D major'],
          common_mistakes: ['Playing D major instead of D7sus4']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Chorus Bass Pattern',
      objectives: [
        'Add bass movement to chorus',
        'Same pattern, different chords'
      ],
      content: `Apply the root-fifth bass pattern to chorus chords. Same technique as verse.`,
      exercises: [
        {
          id: exerciseId(21, 2, 1),
          title: 'Chorus Full Pattern',
          description: 'Chorus with bass movement.',
          abc_notation: `X:1
T:Chorus Full Pattern
M:4/4
L:1/4
Q:1/4=40
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][DGA]2 [A,] | [D,][DGA]2 [A,] |]`,
          target_tempo: 40,
          tips: ['Exact same LH pattern as verse', 'Only RH chord on D changes'],
          common_mistakes: ['Confusing D7sus4 with D']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Chorus at 45 BPM',
      objectives: [
        'Tempo bump',
        'Apply verse lessons'
      ],
      content: `You built verse tempo slowly. Apply those lessons—bump to 45 when 40 feels solid.`,
      exercises: [
        {
          id: exerciseId(21, 3, 1),
          title: 'Chorus at 45',
          description: 'Full chorus, 45 BPM.',
          abc_notation: `X:1
T:Chorus at 45
M:4/4
L:1/4
Q:1/4=45
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][DGA]2 [A,] | [D,][DGA]2 [A,] |]`,
          target_tempo: 45,
          tips: ['Same approach as verse tempo building'],
          common_mistakes: ['Rushing the process']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Chorus at 50 BPM',
      objectives: [
        'Match verse tempo',
        'Sections should align'
      ],
      content: `Get chorus to 50 BPM—same as your verse. The sections need to flow at the same tempo.`,
      exercises: [
        {
          id: exerciseId(21, 4, 1),
          title: 'Chorus at 50',
          description: 'Match verse tempo.',
          abc_notation: `X:1
T:Chorus at 50
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][DGA]2 [A,] | [D,][DGA]2 [A,] |]`,
          target_tempo: 50,
          tips: ['Sections must be at same tempo'],
          common_mistakes: ['Chorus and verse at different tempos']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Verse into Chorus',
      objectives: [
        'Connect the sections',
        'Smooth transition HT'
      ],
      content: `Now connect verse to chorus. End of verse D chord into beginning of chorus G. Feel the lift.`,
      exercises: [
        {
          id: exerciseId(21, 5, 1),
          title: 'V to C Transition HT',
          description: 'Last bars of verse into first bars of chorus.',
          abc_notation: `X:1
T:V to C Transition
M:4/4
L:1/4
Q:1/4=50
K:G
[D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] | [G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] |]`,
          target_tempo: 50,
          tips: ['Feel the energy lift', 'No pause at transition'],
          common_mistakes: ['Hesitating between sections']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Full Run: V + C',
      objectives: [
        'Play verse then chorus',
        'First full section HT'
      ],
      content: `Full verse into full chorus. This is the core of the song—you're playing real music now.`,
      exercises: [
        {
          id: exerciseId(21, 6, 1),
          title: 'Verse + Chorus HT',
          description: 'Both sections, hands together.',
          abc_notation: `X:1
T:Verse + Chorus
M:4/4
L:1/4
Q:1/4=50
K:G
% Verse
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |
% Chorus
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][DGA]2 [A,] | [D,][DGA]2 [A,] |]`,
          target_tempo: 50,
          tips: ['This is substantial', 'Push through any stumbles'],
          common_mistakes: ['Stopping at every mistake']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 21 Checkpoint',
      objectives: [
        'Chorus at 50 BPM',
        'V + C connected'
      ],
      content: `Can you play verse into chorus, hands together, at 50 BPM? This is major progress.`,
      exercises: [
        {
          id: exerciseId(21, 7, 1),
          title: 'V + C Check',
          description: 'Full verse + chorus, 50 BPM.',
          abc_notation: `X:1
T:V + C Check
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |]`,
          target_tempo: 50,
          tips: ['Major milestone'],
          common_mistakes: ['Undervaluing this achievement']
        }
      ],
      checkpoint_criteria: [
        'Chorus HT at 50 BPM',
        'D7sus4 voicing correct',
        'V + C transition smooth',
        'Can play both sections consecutively'
      ]
    }
  ]
}

const week22: WeekContent = {
  week_number: 22,
  phase: 3,
  title: 'Bridge & Ending - Hands Together',
  overview: 'The bridge and ending. The bridge is essentially another verse. The ending has the chromatic descent you learned—G to C#m to C to Dmaj7.',
  theory_concepts: ['Song form completion', 'Chromatic bass', 'Endings'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'Bridge Section',
      objectives: [
        'Understand bridge = verse variant',
        'Same HT skills apply'
      ],
      content: `The bridge ("And I had the parade...") uses the same chord pattern as the verse. If you can play the verse, you can play the bridge. Same hands-together technique.`,
      exercises: [
        {
          id: exerciseId(22, 1, 1),
          title: 'Bridge HT',
          description: 'Bridge section (verse pattern).',
          abc_notation: `X:1
T:Bridge HT
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 50,
          tips: ['Same as verse', 'Different lyrics, same chords'],
          common_mistakes: ['Overcomplicating it']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Ending Chords HT',
      objectives: [
        'Learn ending pattern both hands',
        'G - C#m - C - Dmaj7'
      ],
      content: `The ending is different. G - C#m - C - Dmaj7. The bass walks chromatically: G - C# - C - D. Practice these chords together.`,
      exercises: [
        {
          id: exerciseId(22, 2, 1),
          title: 'Ending Chords',
          description: 'G - C#m - C - Dmaj7 progression.',
          abc_notation: `X:1
T:Ending Chords
M:4/4
L:1/2
Q:1/4=40
K:G
[G,,D,][GBd]2 | [^C,^G,][^CEG]2 | [C,G,][CEG]2 | [D,A,][D^FAc]2 |]`,
          target_tempo: 40,
          tips: ['C#m has C#-E-G#', 'Dmaj7 has D-F#-A-C#'],
          common_mistakes: ['Missing the sharps in C#m', 'Wrong notes in Dmaj7']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Ending Pattern',
      objectives: [
        'Add bass movement',
        'Full ending texture'
      ],
      content: `Add the bass pattern to the ending. It's a simple root pattern—no fifth needed for this section.`,
      exercises: [
        {
          id: exerciseId(22, 3, 1),
          title: 'Ending Full Pattern',
          description: 'Ending with bass movement.',
          abc_notation: `X:1
T:Ending Pattern
M:4/4
L:1/4
Q:1/4=45
K:G
[G,,][GBd]2 [G,,] | [^C,][^CEG]2 [^C,] | [C,][CEG]2 [C,] | [D,][D^FAc]2 [D,] |]`,
          target_tempo: 45,
          tips: ['Bass walks: G - C# - C - D', 'Chromatic movement is the hook'],
          common_mistakes: ['Missing the chromatic bass line']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Ending Loop',
      objectives: [
        'Loop the ending smoothly',
        'Seamless repeat'
      ],
      content: `The ending repeats until fade. Practice looping it—D back to G should be seamless.`,
      exercises: [
        {
          id: exerciseId(22, 4, 1),
          title: 'Ending Loop HT',
          description: 'Loop ending pattern 4 times.',
          abc_notation: `X:1
T:Ending Loop
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [G,,] | [^C,][^CEG]2 [^C,] | [C,][CEG]2 [C,] | [D,][D^FAc]2 [D,] |]`,
          target_tempo: 50,
          tips: ['No audible restart', 'Continuous loop'],
          common_mistakes: ['Bump at the loop point']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Chorus into Ending',
      objectives: [
        'Connect chorus to ending',
        'Transition practice'
      ],
      content: `The ending follows the final chorus. Practice that transition—D7sus4 to ending G.`,
      exercises: [
        {
          id: exerciseId(22, 5, 1),
          title: 'C to Ending',
          description: 'Chorus end into ending section.',
          abc_notation: `X:1
T:Chorus to Ending
M:4/4
L:1/4
Q:1/4=50
K:G
[D,][DGA]2 [A,] | [D,][DGA]2 [A,] | [G,,][GBd]2 [G,,] | [^C,][^CEG]2 [^C,] |]`,
          target_tempo: 50,
          tips: ['D7sus4 resolves to G', 'Ending begins'],
          common_mistakes: ['Losing momentum at transition']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Full Song Structure',
      objectives: [
        'Play through complete structure HT',
        'Identify remaining gaps'
      ],
      content: `Try the complete song structure: V - C - V - C - Bridge - C - Ending. Note where you struggle.`,
      exercises: [
        {
          id: exerciseId(22, 6, 1),
          title: 'Full Structure',
          description: 'Complete song, hands together.',
          abc_notation: `X:1
T:Full Structure
M:4/4
L:1/4
Q:1/4=50
K:G
% Abbreviated - play full song from memory
[G,,][GBd]2 [D,] |]`,
          target_tempo: 50,
          tips: ['Don\'t stop', 'Note weak spots'],
          common_mistakes: ['Not attempting the full structure']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 22 Checkpoint',
      objectives: [
        'All sections HT at 50 BPM',
        'Complete song structure possible'
      ],
      content: `You can now play every section of the song with both hands. It may not be smooth, but the building blocks are there.`,
      exercises: [
        {
          id: exerciseId(22, 7, 1),
          title: 'Structure Check',
          description: 'All sections, hands together.',
          abc_notation: `X:1
T:Structure Check
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 50,
          tips: ['Every section at least possible'],
          common_mistakes: ['Skipping the hard parts']
        }
      ],
      checkpoint_criteria: [
        'Bridge HT at 50 BPM',
        'Ending HT at 50 BPM',
        'All transitions practiced',
        'Complete song structure attempted'
      ]
    }
  ]
}

const week23: WeekContent = {
  week_number: 23,
  phase: 3,
  title: 'Full Song - Hands Together',
  overview: 'Complete run-throughs. By the end of this week, you should be able to play the entire song, hands together, at 50-55 BPM without stopping.',
  theory_concepts: ['Complete performance', 'Continuity', 'Playing through mistakes'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'No Stopping Rule',
      objectives: [
        'Learn to push through mistakes',
        'Complete run-through mindset'
      ],
      content: `New rule: **no stopping.** When you make a mistake, keep going. In performance, you don't get do-overs. Train that now.

This week is about continuity. Play the whole song, start to finish, mistakes and all.`,
      exercises: [
        {
          id: exerciseId(23, 1, 1),
          title: 'No-Stop Run',
          description: 'Full song, no stopping for any reason.',
          abc_notation: `X:1
T:No-Stop Run
M:4/4
L:1/4
Q:1/4=50
K:G
% Play full song from memory - no notation needed
[G,,][GBd]2 [D,] |]`,
          target_tempo: 50,
          tips: ['Mistakes happen—keep going', 'Stopping is not an option'],
          common_mistakes: ['Stopping when you stumble']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Run-Through Analysis',
      objectives: [
        'Play through and note weak spots',
        'Target tomorrow\'s practice'
      ],
      content: `Play through the whole song. Afterward, list the 2-3 spots that were weakest. Those are tomorrow's focus.`,
      exercises: [
        {
          id: exerciseId(23, 2, 1),
          title: 'Analysis Run',
          description: 'Full song with mental note-taking.',
          abc_notation: `X:1
T:Analysis Run
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 50,
          tips: ['Remember where you struggled', 'Write them down'],
          common_mistakes: ['Forgetting what went wrong']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Weak Spot Surgery',
      objectives: [
        'Drill your 2-3 weak spots',
        'Isolation and repetition'
      ],
      content: `Take yesterday's weak spots. Drill each one 15 times. This is how you fix problems.`,
      exercises: [
        {
          id: exerciseId(23, 3, 1),
          title: 'Weak Spot Drill',
          description: 'Your problem areas, 15 reps each.',
          abc_notation: `X:1
T:Weak Spot Drill
M:4/4
L:1/4
Q:1/4=50
K:G
% Insert your weak transitions here
[G,,][GBd]2 [D,] |]`,
          target_tempo: 50,
          tips: ['Isolate the exact problem', '15 clean reps minimum'],
          common_mistakes: ['Not enough repetitions']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Run-Through #2',
      objectives: [
        'Second complete run-through',
        'Check if weak spots improved'
      ],
      content: `After yesterday's drilling, run through the whole song again. Did the weak spots improve?`,
      exercises: [
        {
          id: exerciseId(23, 4, 1),
          title: 'Second Run',
          description: 'Full song, testing improvements.',
          abc_notation: `X:1
T:Second Run
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 50,
          tips: ['Notice improvement in drilled spots'],
          common_mistakes: ['New weak spots appearing']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Push to 55 BPM',
      objectives: [
        'Full song at 55 BPM',
        'Speed while maintaining quality'
      ],
      content: `Try the complete song at 55 BPM. This is challenging—maintain quality, don't just survive.`,
      exercises: [
        {
          id: exerciseId(23, 5, 1),
          title: 'Full Song 55',
          description: 'Complete song at 55 BPM.',
          abc_notation: `X:1
T:Full Song 55
M:4/4
L:1/4
Q:1/4=55
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 55,
          tips: ['Quality over survival', 'Relax into the tempo'],
          common_mistakes: ['Tension at faster tempo']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Performance Simulation',
      objectives: [
        'Play as if performing',
        'No do-overs, full commitment'
      ],
      content: `Pretend someone is watching. Sit down, take a breath, count yourself in, and play the whole song. One take.`,
      exercises: [
        {
          id: exerciseId(23, 6, 1),
          title: 'Performance Sim',
          description: 'One take, full commitment.',
          abc_notation: `X:1
T:Performance Sim
M:4/4
L:1/4
Q:1/4=52
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 52,
          tips: ['Treat it like the real thing', 'Breathe, then begin'],
          common_mistakes: ['Not taking it seriously']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 23 Checkpoint',
      objectives: [
        'Complete song HT, 50-55 BPM',
        'Can play without stopping'
      ],
      content: `Can you play the complete song, hands together, at 50-55 BPM, without stopping? That's the Phase 3 goal within reach.`,
      exercises: [
        {
          id: exerciseId(23, 7, 1),
          title: 'Complete Song Check',
          description: 'Full song, hands together, no stops.',
          abc_notation: `X:1
T:Complete Song Check
M:4/4
L:1/4
Q:1/4=52
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 52,
          tips: ['This is major progress'],
          common_mistakes: ['Underestimating achievement']
        }
      ],
      checkpoint_criteria: [
        'Complete song HT possible',
        'Can play 50-55 BPM',
        'No complete breakdowns',
        'Push-through-mistakes skill developed'
      ]
    }
  ]
}

const week24: WeekContent = {
  week_number: 24,
  phase: 3,
  title: 'Phase 3 Finale - Hands Together Mastery',
  overview: 'Final week of Phase 3. Polish, speed work, and preparation for adding voice. By the end of this week, hands together should feel solid—automatic enough to add singing.',
  theory_concepts: ['Tempo target', 'Preparation for vocals', 'Phase completion'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'Push to 60 BPM',
      objectives: [
        'Target: 60 BPM full song',
        'Approach with confidence'
      ],
      content: `Phase 3's final push: get to 60 BPM. That's about 80% of target tempo. If you can play solidly at 60, you're ready to add voice.`,
      exercises: [
        {
          id: exerciseId(24, 1, 1),
          title: 'Full Song 60',
          description: 'Complete song at 60 BPM.',
          abc_notation: `X:1
T:Full Song 60
M:4/4
L:1/4
Q:1/4=60
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 60,
          tips: ['This is a significant tempo', 'Stay relaxed'],
          common_mistakes: ['Tension building']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Consolidate 60 BPM',
      objectives: [
        'Multiple runs at 60',
        'Make it comfortable'
      ],
      content: `Don't push to 65 yet. Make 60 feel easy. Three complete run-throughs.`,
      exercises: [
        {
          id: exerciseId(24, 2, 1),
          title: '60 BPM x3',
          description: 'Three full songs at 60 BPM.',
          abc_notation: `X:1
T:60 x3
M:4/4
L:1/4
Q:1/4=60
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 60,
          tips: ['Consistency is the goal'],
          common_mistakes: ['Quality dropping on later runs']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Test 65 BPM',
      objectives: [
        'Push tempo boundary',
        'Find your ceiling'
      ],
      content: `Test your ceiling: try 65 BPM. This is above your comfortable zone—see what happens.`,
      exercises: [
        {
          id: exerciseId(24, 3, 1),
          title: 'Test 65',
          description: 'Full song at 65 BPM.',
          abc_notation: `X:1
T:Test 65
M:4/4
L:1/4
Q:1/4=65
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 65,
          tips: ['This is a test, not the goal', 'See where you are'],
          common_mistakes: ['Getting frustrated if it\'s too hard']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Eyes Closed Full Song',
      objectives: [
        'No looking, complete song',
        'Total internalization'
      ],
      content: `Eyes closed, full song, 55-60 BPM. This proves you've internalized it—ready for the mental space singing requires.`,
      exercises: [
        {
          id: exerciseId(24, 4, 1),
          title: 'Eyes Closed Full',
          description: 'Complete song, no looking.',
          abc_notation: `X:1
T:Eyes Closed Full
M:4/4
L:1/4
Q:1/4=55
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 55,
          tips: ['If you can do this, you\'re ready'],
          common_mistakes: ['Peeking']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Musical Full Song',
      objectives: [
        'Complete song with expression',
        'Dynamics through all sections'
      ],
      content: `Dynamics through the whole song: verse mellow, chorus bright, ending fading. This is music, not an exercise.`,
      exercises: [
        {
          id: exerciseId(24, 5, 1),
          title: 'Musical Full Song',
          description: 'Complete song with expression.',
          abc_notation: `X:1
T:Musical Full Song
M:4/4
L:1/4
Q:1/4=58
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 58,
          tips: ['Tell the story with dynamics'],
          common_mistakes: ['Flat dynamics']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Final Performance Sim',
      objectives: [
        'One take performance',
        'Full commitment'
      ],
      content: `Final simulation before Phase 4: one take, full song, 60 BPM, with expression. Ready or not.`,
      exercises: [
        {
          id: exerciseId(24, 6, 1),
          title: 'Final Sim',
          description: 'Performance simulation, full commitment.',
          abc_notation: `X:1
T:Final Sim
M:4/4
L:1/4
Q:1/4=60
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 60,
          tips: ['Treat this as real', 'Breathe, commit, play'],
          common_mistakes: ['Not taking it seriously']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Phase 3 Complete!',
      objectives: [
        'Celebrate Phase 3',
        'Ready for vocals'
      ],
      content: `**Phase 3 Complete!** You can play the entire song, hands together, at 60+ BPM. Your hands work together. 

Phase 4 is where we add your voice. The piano part needs to be automatic—and it is. You're ready.`,
      exercises: [
        {
          id: exerciseId(24, 7, 1),
          title: 'Phase 3 Finale',
          description: 'Final hands together run.',
          abc_notation: `X:1
T:Phase 3 Finale
M:4/4
L:1/4
Q:1/4=60
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 60,
          tips: ['You did it', 'Hands together is conquered'],
          common_mistakes: ['Not celebrating']
        }
      ],
      checkpoint_criteria: [
        'Full song HT at 60+ BPM',
        'Can play with eyes closed',
        'Musical expression present',
        'Can push through mistakes',
        'PHASE 3 COMPLETE - Ready for vocals!'
      ]
    }
  ]
}

// ============================================================================
// PHASE 4: Adding Voice (Weeks 25-32)
// Singing while playing. The ultimate coordination challenge.
// ============================================================================

const week25: WeekContent = {
  week_number: 25,
  phase: 4,
  title: 'Voice Preparation',
  overview: 'Before you sing and play simultaneously, you need to know the vocal part cold. This week is about the voice alone—no piano. Learn the melody, the lyrics, the phrasing. Your voice needs to be as automatic as your hands.',
  theory_concepts: ['Vocal melody', 'Lyrics', 'Phrasing', 'Breath support'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'Know the Song',
      objectives: [
        'Listen to Ol\' 55 five times today',
        'Sing along without piano',
        'Focus on lyrics'
      ],
      content: `**Phase 4 begins.** You're about to do something most people never attempt: sing while playing piano.

Here's the truth: if you have to think about either the piano OR the singing, you'll fail at both. Both parts need to be automatic. Your hands are there (Phase 3). Now we make sure your voice is too.

**This week: voice only.** No piano. Just singing.

**Today:** Listen to "Ol' 55" five times. Sing along every time. Don't worry about sounding good—just learn the melody and lyrics. Print them out if you need to.

Lyrics verse 1:
"Well my time went so quickly, I went lickety-splitly
Out to my ol' fifty-five
As I pulled away slowly, feeling so holy
God knows I was feeling alive"`,
      exercises: [
        {
          id: exerciseId(25, 1, 1),
          title: 'Sing Verse 1',
          description: 'Sing verse 1 without any accompaniment.',
          abc_notation: `X:1
T:Verse 1 Vocal
M:4/4
L:1/8
Q:1/4=74
K:G
% Sing this melody
G2 G2 A2 B2 | d4 d2 B2 | A2 G2 E2 D2 | G6 z2 |
G2 G2 A2 B2 | d4 d2 B2 | A2 G2 E2 D2 | G6 z2 |]`,
          target_tempo: 74,
          tips: ['No piano—just your voice', 'Use the recording as reference'],
          common_mistakes: ['Trying to add piano too soon']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Verse Lyrics Memorization',
      objectives: [
        'Memorize all verse lyrics',
        'Sing without looking at words'
      ],
      content: `Memorize the lyrics. There are three verses:

**Verse 1:** "Well my time went so quickly, I went lickety-splitly, out to my ol' fifty-five. As I pulled away slowly, feeling so holy, God knows I was feeling alive."

**Verse 2:** "Now the sun's coming up, I'm riding with Lady Luck, freeway cars and trucks. Stars beginning to fade, and I lead the parade, just a-wishing I'd stayed a little longer."

**Verse 3:** "Six in the morning, gave me no warning, I had to be on my way. Now the cars are all passing me, trucks are all flashing me, I'm headed home from your place."

Sing each verse five times from memory.`,
      exercises: [
        {
          id: exerciseId(25, 2, 1),
          title: 'Verses from Memory',
          description: 'Sing all three verses without looking.',
          abc_notation: `X:1
T:Verse Melody
M:4/4
L:1/8
Q:1/4=74
K:G
G2 G2 A2 B2 | d4 d2 B2 | A2 G2 E2 D2 | G6 z2 |]`,
          target_tempo: 74,
          tips: ['Close your eyes', 'Picture the drive home'],
          common_mistakes: ['Needing to look at lyrics']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Chorus Lyrics',
      objectives: [
        'Learn chorus lyrics',
        'Understand chorus structure'
      ],
      content: `The chorus is simpler—it repeats the same lines:

"And I got the sun coming up over the trees
I got the sun coming up over my knees
Ol' fifty-five, coming alive
I got the radio on, I got the windows rolled down"

Or the alternate version:
"Trucks are passing me by on the highway
And the sun's coming up over the hill
Ol' fifty-five, still alive..."

Sing the chorus until it's memorized.`,
      exercises: [
        {
          id: exerciseId(25, 3, 1),
          title: 'Chorus from Memory',
          description: 'Sing the chorus without looking.',
          abc_notation: `X:1
T:Chorus Melody
M:4/4
L:1/8
Q:1/4=74
K:G
d4 d2 e2 | d4 z4 | B2 B2 d2 e2 | d4 B2 G2 | A2 A2 B2 c2 | B4 z4 |]`,
          target_tempo: 74,
          tips: ['Chorus should feel like release', 'Open up your voice'],
          common_mistakes: ['Holding back on the chorus']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Full Song Vocal',
      objectives: [
        'Sing complete song structure',
        'Verse - Chorus - Verse - Chorus - Bridge - Chorus - Ending'
      ],
      content: `Sing the complete song, start to finish. No piano. Just your voice and the memory of the melody.`,
      exercises: [
        {
          id: exerciseId(25, 4, 1),
          title: 'Full Song Vocal Only',
          description: 'Complete song, voice only.',
          abc_notation: `X:1
T:Full Song Vocal
M:4/4
L:1/8
Q:1/4=74
K:G
% Sing full song from memory
G2 G2 A2 B2 | d4 d2 B2 |]`,
          target_tempo: 74,
          tips: ['Keep going even if you blank on lyrics', 'Hum through forgotten parts'],
          common_mistakes: ['Stopping when you forget words']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Phrasing and Breath',
      objectives: [
        'Plan breath points',
        'Shape the phrases vocally'
      ],
      content: `Where do you breathe? Plan it:
- After "fifty-five" 
- After "alive"
- At the end of each line

Don't gasp for air mid-phrase. The song has natural breathing points—use them.`,
      exercises: [
        {
          id: exerciseId(25, 5, 1),
          title: 'Phrasing Practice',
          description: 'Sing with planned breath points.',
          abc_notation: `X:1
T:Phrasing Practice
M:4/4
L:1/8
Q:1/4=74
K:G
G2 G2 A2 B2 | d4 d2 B2 | A2 G2 E2 D2 | G6 z2 |]`,
          target_tempo: 74,
          tips: ['Breath at the commas', 'Never gasp mid-word'],
          common_mistakes: ['Running out of air', 'Breathing in weird spots']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Singing with Feeling',
      objectives: [
        'Add expression to vocals',
        'Tell the story'
      ],
      content: `This song is about driving home at dawn, tired but alive. It's nostalgic, wistful, a little triumphant. Let that come through in your voice.`,
      exercises: [
        {
          id: exerciseId(25, 6, 1),
          title: 'Expressive Singing',
          description: 'Full song with emotional commitment.',
          abc_notation: `X:1
T:Expressive Singing
M:4/4
L:1/8
Q:1/4=74
K:G
G2 G2 A2 B2 | d4 d2 B2 |]`,
          target_tempo: 74,
          tips: ['Mean what you sing', 'Picture the sunrise'],
          common_mistakes: ['Singing mechanically']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 25 Checkpoint',
      objectives: [
        'Full song memorized vocally',
        'Ready to add piano'
      ],
      content: `Can you sing the complete song from memory, with expression, at the right tempo? If yes, you're ready to start combining voice and piano.`,
      exercises: [
        {
          id: exerciseId(25, 7, 1),
          title: 'Vocal Check',
          description: 'Full song, voice only, from memory.',
          abc_notation: `X:1
T:Vocal Check
M:4/4
L:1/8
Q:1/4=74
K:G
G2 G2 A2 B2 | d4 d2 B2 |]`,
          target_tempo: 74,
          tips: ['This should feel easy now'],
          common_mistakes: ['Still needing lyrics reference']
        }
      ],
      checkpoint_criteria: [
        'All lyrics memorized',
        'Melody accurate',
        'Phrasing and breath planned',
        'Expression present',
        'Ready for voice + piano'
      ]
    }
  ]
}

const week26: WeekContent = {
  week_number: 26,
  phase: 4,
  title: 'First Words While Playing',
  overview: 'The moment of truth. You\'ll start with the simplest possible combination: holding a single chord while speaking (not singing) the lyrics. Then we build from there.',
  theory_concepts: ['Cognitive load', 'Simplification strategy', 'Gradual integration'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'The Simplification Strategy',
      objectives: [
        'Understand why this is hard',
        'Learn the step-by-step approach',
        'First attempt: hold chord + speak'
      ],
      content: `Here's why singing while playing is hard: your brain is running two complex programs simultaneously. When you first try, both programs crash.

**The solution: simplify everything.**

Step 1: Hold a single chord (no bass movement) while SPEAKING (not singing) the lyrics.
Step 2: Add simple bass movement while speaking.
Step 3: Switch from speaking to humming.
Step 4: Finally, actual singing.

**Today:** Play a G chord. Hold it. While holding it, SPEAK (don't sing): "Well my time went so quickly..."`,
      exercises: [
        {
          id: exerciseId(26, 1, 1),
          title: 'Hold + Speak',
          description: 'Hold G chord, speak verse 1 lyrics.',
          abc_notation: `X:1
T:Hold and Speak
M:4/4
L:1
Q:1/4=60
K:G
[G,,D,G,B,d]4 |]`,
          target_tempo: 60,
          tips: ['Just hold the chord', 'Speak rhythmically, like you\'re reciting poetry'],
          common_mistakes: ['Trying to sing instead of speak']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Chord Changes + Speaking',
      objectives: [
        'Change chords while speaking',
        'Very slow tempo'
      ],
      content: `Now change chords—G to Bm to C to D—while speaking the lyrics. Go very slow. The chord changes happen at phrase endings.`,
      exercises: [
        {
          id: exerciseId(26, 2, 1),
          title: 'Changes + Speak',
          description: 'Chord progression while speaking.',
          abc_notation: `X:1
T:Changes + Speak
M:4/4
L:1
Q:1/4=40
K:G
[G,,D,][GBd] | [B,,^F,][BdF] | [C,G,][CEG] | [D,A,][D^FA] |]`,
          target_tempo: 40,
          tips: ['Chord changes don\'t need to be rhythmic yet', 'Just change when you need to'],
          common_mistakes: ['Trying to time chord changes perfectly']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Bass Pattern + Speaking',
      objectives: [
        'Add root-fifth bass while speaking',
        'First multi-tasking'
      ],
      content: `Now the LH moves while you speak. Play the root-fifth pattern (G-D, G-D) while speaking the verse. Very slow.`,
      exercises: [
        {
          id: exerciseId(26, 3, 1),
          title: 'Bass + Speak',
          description: 'Bass pattern while speaking lyrics.',
          abc_notation: `X:1
T:Bass + Speak
M:4/4
L:1/2
Q:1/4=40
K:G
[G,,][GBd] [D,]z | [G,,][GBd] [D,]z |]`,
          target_tempo: 40,
          tips: ['LH keeps moving', 'Voice keeps speaking', 'They don\'t have to sync perfectly'],
          common_mistakes: ['Stopping one to focus on the other']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Speaking to Humming',
      objectives: [
        'Transition from speaking to humming',
        'Pitch without words'
      ],
      content: `Now instead of speaking, hum the melody while playing. Humming is easier than singing because you don't have to articulate words. Just the tune.`,
      exercises: [
        {
          id: exerciseId(26, 4, 1),
          title: 'Hum + Play',
          description: 'Hum the verse melody while playing chords.',
          abc_notation: `X:1
T:Hum + Play
M:4/4
L:1/4
Q:1/4=45
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] |]`,
          target_tempo: 45,
          tips: ['Lips closed', 'Hum the melody', 'Hands keep moving'],
          common_mistakes: ['Opening mouth to sing words']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'First Real Singing',
      objectives: [
        'Sing first phrase while playing',
        'Just 4 bars'
      ],
      content: `The moment: actually sing "Well my time went so quickly" while playing the first two bars. Just those words, just that music. Go slow.`,
      exercises: [
        {
          id: exerciseId(26, 5, 1),
          title: 'First Sung Phrase',
          description: 'Sing "Well my time went so quickly" with accompaniment.',
          abc_notation: `X:1
T:First Sung Phrase
M:4/4
L:1/4
Q:1/4=45
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] |]`,
          target_tempo: 45,
          tips: ['This is the breakthrough moment', 'It will feel impossible, then suddenly possible'],
          common_mistakes: ['Giving up too quickly']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Expand to First Line',
      objectives: [
        'Sing complete first line with piano',
        'Build on yesterday'
      ],
      content: `Expand: sing "Well my time went so quickly, I went lickety-splitly, out to my ol' fifty-five" while playing. One complete lyrical line.`,
      exercises: [
        {
          id: exerciseId(26, 6, 1),
          title: 'First Line Sung',
          description: 'Complete first line with accompaniment.',
          abc_notation: `X:1
T:First Line Sung
M:4/4
L:1/4
Q:1/4=45
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |]`,
          target_tempo: 45,
          tips: ['If you got this, you can get the whole song'],
          common_mistakes: ['Underestimating this achievement']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 26 Checkpoint',
      objectives: [
        'Can sing first line while playing',
        'Breakthrough achieved'
      ],
      content: `Can you sing the first line of the verse while playing piano? Even at 45 BPM? Even roughly? This is the hardest breakthrough—the rest is refinement.`,
      exercises: [
        {
          id: exerciseId(26, 7, 1),
          title: 'Sing + Play Check',
          description: 'First line, voice and piano together.',
          abc_notation: `X:1
T:Sing + Play Check
M:4/4
L:1/4
Q:1/4=45
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |]`,
          target_tempo: 45,
          tips: ['You did something most people can\'t'],
          common_mistakes: ['Not recognizing the milestone']
        }
      ],
      checkpoint_criteria: [
        'Can speak lyrics over chord changes',
        'Can hum melody while playing',
        'Can sing at least first line while playing',
        'Breakthrough moment achieved'
      ]
    }
  ]
}

const week27: WeekContent = {
  week_number: 27,
  phase: 4,
  title: 'Complete Verse - Singing',
  overview: 'Building out from the first line to the complete verse. Same slow, methodical approach. By the end of this week: one full verse, sung while playing.',
  theory_concepts: ['Building sections', 'Repetition', 'Patience'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'Second Line Addition',
      objectives: [
        'Add "As I pulled away slowly..."',
        'Connect both lines'
      ],
      content: `You have line 1. Now add line 2: "As I pulled away slowly, feeling so holy, God knows I was feeling alive."

Same melody, new words. Same piano, same tempo (45 BPM). Connect the two lines.`,
      exercises: [
        {
          id: exerciseId(27, 1, 1),
          title: 'Add Second Line',
          description: 'Both verse lines, sung with piano.',
          abc_notation: `X:1
T:Both Verse Lines
M:4/4
L:1/4
Q:1/4=45
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 45,
          tips: ['Same skills, more material'],
          common_mistakes: ['Rushing to add more']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Verse Repetitions',
      objectives: [
        'Sing verse 5 times',
        'Build consistency'
      ],
      content: `Repetition is the path. Sing the complete verse with piano 5 times. Note where you stumble—those spots need extra work.`,
      exercises: [
        {
          id: exerciseId(27, 2, 1),
          title: 'Verse x5',
          description: 'Complete verse, 5 repetitions.',
          abc_notation: `X:1
T:Verse x5
M:4/4
L:1/4
Q:1/4=45
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 45,
          tips: ['Each rep should feel slightly easier'],
          common_mistakes: ['Quality degrading with repetition']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Problem Spot Surgery',
      objectives: [
        'Identify your weak spot',
        'Drill it 15 times'
      ],
      content: `Where did you stumble yesterday? That transition, that word, that chord change—isolate it. Drill it 15 times.`,
      exercises: [
        {
          id: exerciseId(27, 3, 1),
          title: 'Drill Weak Spot',
          description: 'Your problem area, 15 repetitions.',
          abc_notation: `X:1
T:Drill Weak Spot
M:4/4
L:1/4
Q:1/4=45
K:G
[G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] |]`,
          target_tempo: 45,
          tips: ['Be honest about what\'s hard'],
          common_mistakes: ['Not drilling enough']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Tempo Bump to 50',
      objectives: [
        'Push verse to 50 BPM',
        'Maintain voice + piano'
      ],
      content: `If 45 BPM feels solid, try 50. Still slow, but closer to target. Quality over speed—if 50 is chaos, stay at 48.`,
      exercises: [
        {
          id: exerciseId(27, 4, 1),
          title: 'Verse at 50',
          description: 'Complete verse at 50 BPM with singing.',
          abc_notation: `X:1
T:Verse at 50
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 50,
          tips: ['5 BPM is noticeable', 'Don\'t force it'],
          common_mistakes: ['Ego pushing tempo too fast']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'All Three Verses',
      objectives: [
        'Apply skills to verses 2 and 3',
        'Same melody, different words'
      ],
      content: `The verse melody repeats with different lyrics. Apply what you've learned to verses 2 and 3. Same piano, different words.`,
      exercises: [
        {
          id: exerciseId(27, 5, 1),
          title: 'All Verses',
          description: 'Verses 1, 2, 3 sung with piano.',
          abc_notation: `X:1
T:All Verses
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |]`,
          target_tempo: 50,
          tips: ['Lyrics change, melody stays', 'Piano stays consistent'],
          common_mistakes: ['Different verses throwing off piano']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Verse Expression',
      objectives: [
        'Add dynamics while singing',
        'Make it musical'
      ],
      content: `Now that you can do it, make it sound good. Dynamics, phrasing, feeling. The verse should tell a story.`,
      exercises: [
        {
          id: exerciseId(27, 6, 1),
          title: 'Expressive Verse',
          description: 'Verse with musical expression.',
          abc_notation: `X:1
T:Expressive Verse
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 50,
          tips: ['You\'re a performer now', 'Mean what you sing'],
          common_mistakes: ['Survival mode instead of performance mode']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 27 Checkpoint',
      objectives: [
        'Complete verse sung with piano at 50 BPM',
        'Ready for chorus'
      ],
      content: `Can you sing a complete verse while playing at 50 BPM? All three verses with different lyrics? You're more than halfway through Phase 4.`,
      exercises: [
        {
          id: exerciseId(27, 7, 1),
          title: 'Verse Sing Check',
          description: 'Complete verse, voice + piano, 50 BPM.',
          abc_notation: `X:1
T:Verse Check
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 50,
          tips: ['Major milestone'],
          common_mistakes: ['Undervaluing progress']
        }
      ],
      checkpoint_criteria: [
        'Complete verse sung with piano',
        'All three verse lyrics work',
        'Tempo at 50 BPM',
        'Expression present',
        'Ready for chorus'
      ]
    }
  ]
}

const week28: WeekContent = {
  week_number: 28,
  phase: 4,
  title: 'Chorus - Singing',
  overview: 'Apply the same approach to the chorus. The chorus is emotionally bigger—let that come through. "Sun\'s coming up..."',
  theory_concepts: ['Chorus energy', 'Lifting the voice', 'Section contrast'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'Chorus Introduction',
      objectives: [
        'Apply verse skills to chorus',
        'Understand chorus energy difference'
      ],
      content: `The chorus is where you let loose. "Sun's coming up, I'm riding with Lady Luck..." It's the release after the verse's story.

Same approach as verse: slow, methodical, build phrase by phrase. But emotionally bigger.`,
      exercises: [
        {
          id: exerciseId(28, 1, 1),
          title: 'Chorus First Line',
          description: 'First line of chorus, sung with piano.',
          abc_notation: `X:1
T:Chorus First Line
M:4/4
L:1/4
Q:1/4=45
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] |]`,
          target_tempo: 45,
          tips: ['Open up your voice', 'Chorus = release'],
          common_mistakes: ['Singing chorus like verse']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Build Chorus',
      objectives: [
        'Add chorus lines progressively',
        'Complete chorus sung'
      ],
      content: `Build out the complete chorus, line by line. "Sun's coming up..." into "I'm riding with Lady Luck..." into "Freeway cars and trucks..."`,
      exercises: [
        {
          id: exerciseId(28, 2, 1),
          title: 'Complete Chorus',
          description: 'Full chorus sung with piano.',
          abc_notation: `X:1
T:Complete Chorus
M:4/4
L:1/4
Q:1/4=45
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][DGA]2 [A,] | [D,][DGA]2 [A,] |]`,
          target_tempo: 45,
          tips: ['D7sus4 in chorus, not regular D'],
          common_mistakes: ['Wrong chord on chorus D']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Chorus at 50 BPM',
      objectives: [
        'Match verse tempo',
        'Sections should align'
      ],
      content: `Bring chorus to 50 BPM to match your verse work. The tempo should be consistent between sections.`,
      exercises: [
        {
          id: exerciseId(28, 3, 1),
          title: 'Chorus at 50',
          description: 'Full chorus at 50 BPM with singing.',
          abc_notation: `X:1
T:Chorus at 50
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][DGA]2 [A,] | [D,][DGA]2 [A,] |]`,
          target_tempo: 50,
          tips: ['Same tempo as verse now'],
          common_mistakes: ['Tempo mismatch between sections']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Verse to Chorus Transition',
      objectives: [
        'Connect verse into chorus while singing',
        'The crucial transition'
      ],
      content: `The payoff: verse into chorus, singing throughout. End of verse, lift into chorus. This is where the song comes alive.`,
      exercises: [
        {
          id: exerciseId(28, 4, 1),
          title: 'V to C Sung',
          description: 'Verse into chorus, singing throughout.',
          abc_notation: `X:1
T:V to C Sung
M:4/4
L:1/4
Q:1/4=50
K:G
% Last line of verse into first line of chorus
[D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] | [G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] |]`,
          target_tempo: 50,
          tips: ['Feel the lift', 'Voice opens on chorus'],
          common_mistakes: ['No energy change at transition']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Full V + C Sung',
      objectives: [
        'Complete verse + chorus, sung',
        'Core of the song'
      ],
      content: `Full verse into full chorus, singing and playing. This is the heart of the song—if you can do this, you can do the whole thing.`,
      exercises: [
        {
          id: exerciseId(28, 5, 1),
          title: 'V + C Full',
          description: 'Verse and chorus, sung throughout.',
          abc_notation: `X:1
T:V + C Full
M:4/4
L:1/4
Q:1/4=50
K:G
% Verse
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |
% Chorus
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][DGA]2 [A,] | [D,][DGA]2 [A,] |]`,
          target_tempo: 50,
          tips: ['This is real singing-while-playing'],
          common_mistakes: ['Treating this as just practice']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Expression Throughout',
      objectives: [
        'Dynamic contrast between sections',
        'Tell the story'
      ],
      content: `Verse is storytelling, chorus is release. Let those dynamics show. Quieter verse, bigger chorus.`,
      exercises: [
        {
          id: exerciseId(28, 6, 1),
          title: 'Dynamic V + C',
          description: 'Verse + chorus with dynamic contrast.',
          abc_notation: `X:1
T:Dynamic V + C
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] |]`,
          target_tempo: 50,
          tips: ['Tell the story with dynamics'],
          common_mistakes: ['Same volume throughout']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 28 Checkpoint',
      objectives: [
        'V + C sung at 50 BPM',
        'Core song structure with voice'
      ],
      content: `Can you sing verse + chorus while playing at 50 BPM? You're doing what most people dream of—singing your own piano accompaniment.`,
      exercises: [
        {
          id: exerciseId(28, 7, 1),
          title: 'V + C Sing Check',
          description: 'Verse and chorus, sung, 50 BPM.',
          abc_notation: `X:1
T:V + C Check
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] |]`,
          target_tempo: 50,
          tips: ['Celebrate this'],
          common_mistakes: ['Not realizing how far you\'ve come']
        }
      ],
      checkpoint_criteria: [
        'Chorus sung with piano at 50 BPM',
        'V to C transition smooth',
        'Dynamic contrast present',
        'Core song structure with voice complete'
      ]
    }
  ]
}

const week29: WeekContent = {
  week_number: 29,
  phase: 4,
  title: 'Complete Song with Voice',
  overview: 'All sections with voice. Verse, chorus, verse, chorus, bridge, chorus, ending. The complete song, sung and played.',
  theory_concepts: ['Complete performance', 'Endurance', 'Song form'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'Bridge Section',
      objectives: [
        'Apply skills to bridge',
        'Same as verse musically'
      ],
      content: `The bridge uses the verse chord pattern with different lyrics. If you can sing the verse, you can sing the bridge. Apply the same approach.`,
      exercises: [
        {
          id: exerciseId(29, 1, 1),
          title: 'Bridge Sung',
          description: 'Bridge section, sung with piano.',
          abc_notation: `X:1
T:Bridge Sung
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] | [G,,][GBd]2 [D,] | [B,,][BdF]2 [^F,] | [B,,][BdF]2 [^F,] |
[C,][CEG]2 [G,] | [C,][CEG]2 [G,] | [D,][D^FA]2 [A,] | [D,][D^FA]2 [A,] |]`,
          target_tempo: 50,
          tips: ['Same as verse, different words'],
          common_mistakes: ['Treating bridge as totally new']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Ending Section',
      objectives: [
        'Sing "Freeway cars and trucks" over ending chords',
        'The repeating outro'
      ],
      content: `The ending repeats "Freeway cars and trucks" over the chromatic descent: G - C#m - C - Dmaj7. Sing the hook while playing the pattern.`,
      exercises: [
        {
          id: exerciseId(29, 2, 1),
          title: 'Ending Sung',
          description: 'Ending section with vocal hook.',
          abc_notation: `X:1
T:Ending Sung
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [G,,] | [^C,][^CEG]2 [^C,] | [C,][CEG]2 [C,] | [D,][D^FAc]2 [D,] |]`,
          target_tempo: 50,
          tips: ['Hook repeats as song fades'],
          common_mistakes: ['Losing the chromatic bass']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'First Half Run',
      objectives: [
        'V1 - C - V2 - C sung',
        'First half of song'
      ],
      content: `Run the first half of the song: Verse 1, Chorus, Verse 2, Chorus. All sung, all played.`,
      exercises: [
        {
          id: exerciseId(29, 3, 1),
          title: 'First Half',
          description: 'V1-C-V2-C, sung throughout.',
          abc_notation: `X:1
T:First Half
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 50,
          tips: ['Push through without stopping'],
          common_mistakes: ['Stopping at section boundaries']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Second Half Run',
      objectives: [
        'Bridge - C - Ending sung',
        'Second half of song'
      ],
      content: `Run the second half: Bridge (Verse 3), final Chorus, Ending. Complete the structure.`,
      exercises: [
        {
          id: exerciseId(29, 4, 1),
          title: 'Second Half',
          description: 'Bridge-C-Ending, sung throughout.',
          abc_notation: `X:1
T:Second Half
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 50,
          tips: ['Ending can repeat as long as you want'],
          common_mistakes: ['Abrupt ending']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Full Song Attempt',
      objectives: [
        'Complete song, sung and played',
        'First full run'
      ],
      content: `The moment: complete song, start to finish, singing and playing. It doesn't have to be perfect. Just complete.`,
      exercises: [
        {
          id: exerciseId(29, 5, 1),
          title: 'Full Song Sung',
          description: 'Complete song, voice and piano.',
          abc_notation: `X:1
T:Full Song Sung
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 50,
          tips: ['No stopping', 'Push through mistakes'],
          common_mistakes: ['Stopping for errors']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Full Song Repetition',
      objectives: [
        'Second complete run',
        'Note improvements'
      ],
      content: `Second complete run. Was it better than yesterday? Note what improved and what still needs work.`,
      exercises: [
        {
          id: exerciseId(29, 6, 1),
          title: 'Full Song x2',
          description: 'Second complete run-through.',
          abc_notation: `X:1
T:Full Song x2
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 50,
          tips: ['Compare to yesterday'],
          common_mistakes: ['Not noticing improvement']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 29 Checkpoint',
      objectives: [
        'Complete song sung at 50 BPM',
        'All sections connected'
      ],
      content: `Can you sing and play the complete song at 50 BPM? Even with rough edges? You're performing now.`,
      exercises: [
        {
          id: exerciseId(29, 7, 1),
          title: 'Complete Song Check',
          description: 'Full song, voice and piano.',
          abc_notation: `X:1
T:Complete Check
M:4/4
L:1/4
Q:1/4=50
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 50,
          tips: ['This is a major achievement'],
          common_mistakes: ['Downplaying this milestone']
        }
      ],
      checkpoint_criteria: [
        'Complete song sung with piano',
        'All sections connected',
        'Tempo at 50 BPM',
        'Can push through without stopping'
      ]
    }
  ]
}

const week30: WeekContent = {
  week_number: 30,
  phase: 4,
  title: 'Building Tempo with Voice',
  overview: 'You can sing the whole song at 50 BPM. Now we push toward target tempo (74 BPM) while maintaining voice + piano integration.',
  theory_concepts: ['Tempo building with vocals', 'Maintaining quality', 'Performance tempo'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'Tempo Push Strategy',
      objectives: [
        'Understand tempo building with vocals',
        'First push: 50 to 55 BPM'
      ],
      content: `Adding voice makes tempo building harder—more cognitive load. Go slower with tempo increases than you did in Phase 3.

**Today:** Try the complete song at 55 BPM. If voice and piano fall apart, drop back to 52.`,
      exercises: [
        {
          id: exerciseId(30, 1, 1),
          title: 'Full Song 55',
          description: 'Complete song at 55 BPM with voice.',
          abc_notation: `X:1
T:Full Song 55
M:4/4
L:1/4
Q:1/4=55
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 55,
          tips: ['Voice makes tempo harder'],
          common_mistakes: ['Pushing too fast']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Consolidate 55',
      objectives: [
        'Make 55 BPM comfortable',
        'Multiple runs'
      ],
      content: `Stay at 55 until it feels solid. Two complete runs at 55 BPM.`,
      exercises: [
        {
          id: exerciseId(30, 2, 1),
          title: '55 x2',
          description: 'Two complete songs at 55 BPM.',
          abc_notation: `X:1
T:55 x2
M:4/4
L:1/4
Q:1/4=55
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 55,
          tips: ['Second run should feel easier'],
          common_mistakes: ['Rushing to 60']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Push to 58',
      objectives: [
        'Small increment',
        'Test comfort zone'
      ],
      content: `Small bump to 58 BPM. These increments feel small but matter when you're singing too.`,
      exercises: [
        {
          id: exerciseId(30, 3, 1),
          title: 'Full Song 58',
          description: 'Complete song at 58 BPM.',
          abc_notation: `X:1
T:Full Song 58
M:4/4
L:1/4
Q:1/4=58
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 58,
          tips: ['Every 3 BPM is noticeable'],
          common_mistakes: ['Skipping increments']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Target 60',
      objectives: [
        '60 BPM with voice',
        'Significant milestone'
      ],
      content: `60 BPM is a big milestone—80% of target tempo, with voice. This is real performing territory.`,
      exercises: [
        {
          id: exerciseId(30, 4, 1),
          title: 'Full Song 60',
          description: 'Complete song at 60 BPM with voice.',
          abc_notation: `X:1
T:Full Song 60
M:4/4
L:1/4
Q:1/4=60
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 60,
          tips: ['80% of target tempo'],
          common_mistakes: ['Tension as tempo increases']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Consolidate 60',
      objectives: [
        'Lock in 60 BPM',
        'Make it feel normal'
      ],
      content: `Stay at 60. Make it comfortable. Two complete runs.`,
      exercises: [
        {
          id: exerciseId(30, 5, 1),
          title: '60 x2',
          description: 'Two complete songs at 60 BPM.',
          abc_notation: `X:1
T:60 x2
M:4/4
L:1/4
Q:1/4=60
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 60,
          tips: ['Consistency is the goal'],
          common_mistakes: ['Quality variation between runs']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Test 65',
      objectives: [
        'Push boundary',
        'Find current ceiling'
      ],
      content: `Test your ceiling: try 65 BPM. This is above comfortable—see what happens.`,
      exercises: [
        {
          id: exerciseId(30, 6, 1),
          title: 'Test 65',
          description: 'Full song at 65 BPM.',
          abc_notation: `X:1
T:Test 65
M:4/4
L:1/4
Q:1/4=65
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 65,
          tips: ['This is a test, not the target'],
          common_mistakes: ['Getting frustrated if it\'s hard']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 30 Checkpoint',
      objectives: [
        'Full song at 60+ BPM with voice',
        'Tempo building continues'
      ],
      content: `Where did you land? 60? 65? Whatever your comfortable tempo, you're performing now—singing and playing a complete song.`,
      exercises: [
        {
          id: exerciseId(30, 7, 1),
          title: 'Tempo Check',
          description: 'Full song at your comfortable tempo.',
          abc_notation: `X:1
T:Tempo Check
M:4/4
L:1/4
Q:1/4=60
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 60,
          tips: ['Be honest about your tempo'],
          common_mistakes: ['Claiming faster than you can do']
        }
      ],
      checkpoint_criteria: [
        'Full song with voice at 60+ BPM',
        'Quality maintained at faster tempo',
        'No complete breakdowns',
        'Tempo building strategy understood'
      ]
    }
  ]
}

const week31: WeekContent = {
  week_number: 31,
  phase: 4,
  title: 'Expression and Feel',
  overview: 'You can do it. Now make it beautiful. This week focuses on the musical qualities that separate playing from performing.',
  theory_concepts: ['Swing feel', 'Vocal expression', 'Piano touch', 'Dynamics'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'The Swing Feel',
      objectives: [
        'Understand swing rhythm',
        'Apply to piano and voice'
      ],
      content: `"Ol' 55" has a gentle swing feel. Not strict swing like jazz—just a relaxed, lilting quality. The eighth notes aren't perfectly even; they have a slight long-short pattern.

Listen to the original recording. Feel how it swings. Apply that to both your piano and your voice.`,
      exercises: [
        {
          id: exerciseId(31, 1, 1),
          title: 'Swing Feel',
          description: 'Full song with swing feel emphasized.',
          abc_notation: `X:1
T:Swing Feel
M:4/4
L:1/4
Q:1/4=60
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 60,
          tips: ['Lazy, relaxed eighth notes', 'Not mechanical'],
          common_mistakes: ['Too strict/mechanical']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Vocal Expression',
      objectives: [
        'Sing with more feeling',
        'Tell the story'
      ],
      content: `Your voice is telling a story about driving home at dawn, tired but alive. Let that wistfulness, that nostalgia, come through. Mean what you sing.`,
      exercises: [
        {
          id: exerciseId(31, 2, 1),
          title: 'Expressive Singing',
          description: 'Full song with emotional commitment.',
          abc_notation: `X:1
T:Expressive Singing
M:4/4
L:1/4
Q:1/4=60
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 60,
          tips: ['Picture the sunrise', 'Feel the freedom'],
          common_mistakes: ['Singing without feeling']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Dynamic Arc',
      objectives: [
        'Shape the whole song dynamically',
        'Verse quiet, chorus bigger, ending fades'
      ],
      content: `The song has a dynamic arc: verses are intimate, choruses open up, the ending fades into dawn. Plan your dynamics for the whole song.`,
      exercises: [
        {
          id: exerciseId(31, 3, 1),
          title: 'Dynamic Arc',
          description: 'Full song with planned dynamics.',
          abc_notation: `X:1
T:Dynamic Arc
M:4/4
L:1/4
Q:1/4=60
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 60,
          tips: ['Plan dynamics before you start'],
          common_mistakes: ['Flat dynamics throughout']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Piano Touch',
      objectives: [
        'Refine piano tone',
        'Support the voice, don\'t compete'
      ],
      content: `Your piano should support your voice, not fight with it. Play with a warm, round tone. Don't bang—caress the keys.`,
      exercises: [
        {
          id: exerciseId(31, 4, 1),
          title: 'Piano Touch',
          description: 'Focus on tone quality while singing.',
          abc_notation: `X:1
T:Piano Touch
M:4/4
L:1/4
Q:1/4=60
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 60,
          tips: ['Warm tone', 'Voice is the star'],
          common_mistakes: ['Piano too loud or harsh']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Complete Musical Performance',
      objectives: [
        'Put it all together',
        'Perform, don\'t just play'
      ],
      content: `Combine everything: swing feel, vocal expression, dynamic arc, piano touch. This isn't practice anymore—this is performing.`,
      exercises: [
        {
          id: exerciseId(31, 5, 1),
          title: 'Full Performance',
          description: 'Complete song as a performance.',
          abc_notation: `X:1
T:Full Performance
M:4/4
L:1/4
Q:1/4=60
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 60,
          tips: ['Commit fully', 'Perform for an imaginary audience'],
          common_mistakes: ['Holding back']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Record Yourself',
      objectives: [
        'Record and listen back',
        'Hear what others hear'
      ],
      content: `Record yourself performing the complete song. Listen back. Be honest: what needs work? What sounds good?`,
      exercises: [
        {
          id: exerciseId(31, 6, 1),
          title: 'Self Recording',
          description: 'Record and analyze.',
          abc_notation: `X:1
T:Self Recording
M:4/4
L:1/4
Q:1/4=60
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 60,
          tips: ['Recording reveals truth', 'Don\'t be too hard on yourself'],
          common_mistakes: ['Not recording', 'Being overly critical']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Week 31 Checkpoint',
      objectives: [
        'Musical performance quality',
        'Ready for final push'
      ],
      content: `Your performance should now have swing, expression, dynamics, and quality touch. Does it feel like music, not exercise?`,
      exercises: [
        {
          id: exerciseId(31, 7, 1),
          title: 'Musical Quality Check',
          description: 'Full performance with all elements.',
          abc_notation: `X:1
T:Quality Check
M:4/4
L:1/4
Q:1/4=60
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 60,
          tips: ['This should feel like performing'],
          common_mistakes: ['Still treating it as practice']
        }
      ],
      checkpoint_criteria: [
        'Swing feel present',
        'Vocal expression evident',
        'Dynamic arc planned and executed',
        'Piano touch supports voice',
        'Performance quality, not just accuracy'
      ]
    }
  ]
}

const week32: WeekContent = {
  week_number: 32,
  phase: 4,
  title: 'Phase 4 Finale - Voice Integration Complete',
  overview: 'Final week of Phase 4. Push tempo toward 65-70 BPM while maintaining all the musical qualities you\'ve developed. By the end: a performable version of the song.',
  theory_concepts: ['Performance tempo', 'Integration', 'Phase completion'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'Final Tempo Push',
      objectives: [
        'Target: 65-70 BPM',
        'Maintain quality'
      ],
      content: `Final push: get to 65-70 BPM while keeping everything musical. Target tempo is 74, but 65-70 is close enough to sound right.`,
      exercises: [
        {
          id: exerciseId(32, 1, 1),
          title: 'Push to 65',
          description: 'Full song at 65 BPM.',
          abc_notation: `X:1
T:Push to 65
M:4/4
L:1/4
Q:1/4=65
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 65,
          tips: ['Quality over speed'],
          common_mistakes: ['Sacrificing musicality for tempo']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'Lock in 65',
      objectives: [
        'Consolidate 65 BPM',
        'Multiple runs'
      ],
      content: `Make 65 feel comfortable. Two complete performances at 65 BPM.`,
      exercises: [
        {
          id: exerciseId(32, 2, 1),
          title: '65 x2',
          description: 'Two full performances at 65 BPM.',
          abc_notation: `X:1
T:65 x2
M:4/4
L:1/4
Q:1/4=65
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 65,
          tips: ['Consistency between runs'],
          common_mistakes: ['Variation in quality']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Test 68',
      objectives: [
        'Push toward 70',
        'Find your comfortable ceiling'
      ],
      content: `Test 68 BPM. Getting closer to target. How does it feel?`,
      exercises: [
        {
          id: exerciseId(32, 3, 1),
          title: 'Test 68',
          description: 'Full song at 68 BPM.',
          abc_notation: `X:1
T:Test 68
M:4/4
L:1/4
Q:1/4=68
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 68,
          tips: ['Close to target tempo'],
          common_mistakes: ['Tension building']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'Target 70',
      objectives: [
        '70 BPM with voice',
        '95% of target tempo'
      ],
      content: `70 BPM—95% of target tempo. If you can do this with voice and all the musical qualities, you're ready to perform.`,
      exercises: [
        {
          id: exerciseId(32, 4, 1),
          title: 'Target 70',
          description: 'Full song at 70 BPM.',
          abc_notation: `X:1
T:Target 70
M:4/4
L:1/4
Q:1/4=70
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 70,
          tips: ['Almost there'],
          common_mistakes: ['Losing musicality at speed']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Performance Run',
      objectives: [
        'Full performance at your best tempo',
        'Treat as real performance'
      ],
      content: `Whatever tempo you can do with quality—60, 65, 70—do a full performance. Treat it as real. Breathe, commit, perform.`,
      exercises: [
        {
          id: exerciseId(32, 5, 1),
          title: 'Performance Run',
          description: 'Full performance at comfortable tempo.',
          abc_notation: `X:1
T:Performance Run
M:4/4
L:1/4
Q:1/4=68
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 68,
          tips: ['This is a performance, not practice'],
          common_mistakes: ['Not treating it seriously']
        }
      ]
    },
    {
      day_number: 6,
      type: 'practice',
      title: 'Record Final Performance',
      objectives: [
        'Record your Phase 4 performance',
        'Document progress'
      ],
      content: `Record yourself performing the complete song. This is your Phase 4 milestone recording. Compare to where you started.`,
      exercises: [
        {
          id: exerciseId(32, 6, 1),
          title: 'Final Recording',
          description: 'Record complete performance.',
          abc_notation: `X:1
T:Final Recording
M:4/4
L:1/4
Q:1/4=68
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 68,
          tips: ['Keep this recording'],
          common_mistakes: ['Not documenting progress']
        }
      ]
    },
    {
      day_number: 7,
      type: 'review',
      title: 'Phase 4 Complete!',
      objectives: [
        'Celebrate Phase 4 completion',
        'Ready for refinement'
      ],
      content: `**Phase 4 Complete!** You can sing and play "Ol' 55." You're doing something most people never achieve—performing a song with your own piano accompaniment.

Phase 5 is refinement: getting to target tempo, polishing details, preparing for actual performance. You're 2/3 of the way through the program.`,
      exercises: [
        {
          id: exerciseId(32, 7, 1),
          title: 'Phase 4 Finale',
          description: 'Celebration performance.',
          abc_notation: `X:1
T:Phase 4 Finale
M:4/4
L:1/4
Q:1/4=68
K:G
[G,,][GBd]2 [D,] |]`,
          target_tempo: 68,
          tips: ['You did it', 'Sing and play together'],
          common_mistakes: ['Not celebrating']
        }
      ],
      checkpoint_criteria: [
        'Full song sung with piano at 65-70 BPM',
        'Swing feel present',
        'Vocal expression evident',
        'Dynamic arc present',
        'Recording made',
        'PHASE 4 COMPLETE - Voice integration achieved!'
      ]
    }
  ]
}

// Combine into curriculum
export const curriculum: Curriculum = {
  phases: [
    {
      number: 1,
      name: 'Foundation',
      description: 'Building the physical and theoretical fundamentals. No song yet—just the skills you\'ll need.',
      weeks: [week1, week2, week3, week4, week5, week6, week7, week8]
    },
    {
      number: 2,
      name: 'Song Introduction',
      description: 'Learning the actual song, hands separate. Right hand gets melody and chords, left hand gets bass patterns.',
      weeks: [week9, week10, week11, week12, week13, week14, week15, week16]
    },
    {
      number: 3,
      name: 'Hands Together',
      description: 'The hard part. Slow, methodical integration of both hands. This is where most adult beginners quit—you won\'t.',
      weeks: [week17, week18, week19, week20, week21, week22, week23, week24]
    },
    {
      number: 4,
      name: 'Adding Voice',
      description: 'Singing while playing. The ultimate coordination challenge. You\'ll learn to perform, not just play.',
      weeks: [week25, week26, week27, week28, week29, week30, week31, week32]
    }
    // Phases 5-6 would be added as curriculum expands
  ]
}

export function getWeek(weekNumber: number): WeekContent | undefined {
  for (const phase of curriculum.phases) {
    const week = phase.weeks.find(w => w.week_number === weekNumber)
    if (week) return week
  }
  return undefined
}

export function getDay(weekNumber: number, dayNumber: number): DayContent | undefined {
  const week = getWeek(weekNumber)
  if (!week) return undefined
  return week.days.find(d => d.day_number === dayNumber)
}
