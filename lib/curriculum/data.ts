import { Curriculum, WeekContent, DayContent, Exercise } from './types'

// Helper to create exercise IDs
const exerciseId = (week: number, day: number, num: number) => `w${week}d${day}e${num}`

// Week 1: Hand position, posture, finding C/D/G
const week1: WeekContent = {
  week_number: 1,
  phase: 1,
  title: 'Keyboard Geography',
  overview: 'This week is about building your foundation. Before you play a single melody, you need to know where you are on the keyboard and how to sit at it properly. We\'re finding all the C\'s, D\'s, and G\'s—the key landmarks for "Ol\' 55" which is in D major.',
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
      title: 'Finding D and G',
      objectives: [
        'Find all D\'s on the keyboard',
        'Find all G\'s on the keyboard',
        'Understand why these notes matter for our song'
      ],
      content: `D is between the two black keys in the group of 2. G is between the second and third black keys in the group of 3. These are critical: "Ol' 55" is in D major, and the main chords are D, G, and A. Today we lock in D and G.`,
      exercises: [
        {
          id: exerciseId(1, 2, 1),
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
        },
        {
          id: exerciseId(1, 2, 2),
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
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'C-D-G Landmarks',
      objectives: [
        'Jump between C, D, and G confidently',
        'Start building keyboard geography muscle memory'
      ],
      content: `Now we connect the dots. You should be able to put your finger on any C, D, or G instantly. This is your internal GPS for the keyboard.`,
      exercises: [
        {
          id: exerciseId(1, 3, 1),
          title: 'C-D-G Jumps',
          description: 'Play C, then D, then G in the same octave. Repeat in different octaves.',
          abc_notation: `X:1
T:C-D-G Landmarks
M:4/4
L:1/4
K:C
C D G2 | c d g2 | c' d' g'2 |]`,
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
  title: 'D Major Five-Finger & Coordination',
  overview: 'D major is the key of "Ol\' 55." This week we get comfortable in D position—your home base for the rest of the year. We also push coordination further with both hands playing simultaneously.',
  theory_concepts: ['D major scale', 'F# and C#', 'Home key concept'],
  days: [
    {
      day_number: 1,
      type: 'info_dump',
      title: 'D Major - Your Home Key',
      objectives: ['Learn D major five-finger position', 'Understand why D major is home', 'First black key in position: F#'],
      content: `"Ol\' 55" is in D major. D is home. The D major scale uses F# and C#, but in the five-finger position (D-E-F#-G-A), you only encounter F#.

F# is the black key between F and G. Your third finger (middle finger) will naturally land on it in D position. Get comfortable with this now.`,
      exercises: [
        {
          id: exerciseId(4, 1, 1),
          title: 'D Major Five-Finger RH',
          description: 'Play D-E-F#-G-A with right hand. Note the black key.',
          abc_notation: `X:1
T:D Major Five-Finger RH
M:4/4
L:1/4
K:D
D E ^F G | A G ^F E | D4 |]`,
          target_tempo: 72,
          tips: ['Third finger naturally curves onto F#', 'Don\'t stretch—position your hand correctly'],
          common_mistakes: ['Playing F natural instead of F#', 'Tension reaching for black key']
        }
      ]
    },
    {
      day_number: 2,
      type: 'practice',
      title: 'D Major LH',
      objectives: ['D major five-finger in left hand', 'Black key comfort with non-dominant hand'],
      content: `Same position, other hand. LH in D major also uses F#. Pinky on D, thumb on A.`,
      exercises: [
        {
          id: exerciseId(4, 2, 1),
          title: 'D Major Five-Finger LH',
          description: 'Play D-E-F#-G-A with left hand.',
          abc_notation: `X:1
T:D Major Five-Finger LH
M:4/4
L:1/4
K:D bass
D, E, ^F, G, | A, G, ^F, E, | D,4 |]`,
          target_tempo: 66,
          tips: ['Second finger on F#', 'Wrist stays level even with black key'],
          common_mistakes: ['Wrist twisting to reach F#']
        }
      ]
    },
    {
      day_number: 3,
      type: 'practice',
      title: 'Parallel Motion in D',
      objectives: ['Both hands play the same notes together', 'Parallel motion concept'],
      content: `Parallel motion: both hands play the same notes in the same direction. This is different from contrary motion. Both are essential.`,
      exercises: [
        {
          id: exerciseId(4, 3, 1),
          title: 'D Major Parallel Motion',
          description: 'Both hands play D-E-F#-G-A together, going up, then down.',
          abc_notation: `X:1
T:D Major Parallel
M:4/4
L:1/4
K:D
[D,D] [E,E] [^F,^F] [G,G] | [A,A] [G,G] [^F,^F] [E,E] | [D,D]4 |]`,
          target_tempo: 50,
          tips: ['Hands hit each note at exactly the same time', 'Both hands hit F# together'],
          common_mistakes: ['One hand arriving early', 'Different volumes between hands']
        }
      ]
    },
    {
      day_number: 4,
      type: 'practice',
      title: 'All Three Positions',
      objectives: ['Fluency in C, G, and D positions', 'Quick position changes'],
      content: `You now know three positions: C, G, D. Practice moving between all three. This builds the flexibility you\'ll need.`,
      exercises: [
        {
          id: exerciseId(4, 4, 1),
          title: 'Three Position Round Trip',
          description: 'Play C position, G position, D position, then back through G to C.',
          abc_notation: `X:1
T:Three Positions
M:4/4
L:1/4
K:C
C D E F | G A B c | D E ^F G | A4 |]`,
          target_tempo: 60,
          tips: ['Each position should feel equally comfortable', 'Find the landmarks quickly'],
          common_mistakes: ['D position feels harder (it will at first—keep practicing)']
        }
      ]
    },
    {
      day_number: 5,
      type: 'practice',
      title: 'Hands Together in D',
      objectives: ['Extended parallel motion practice', 'Build D major muscle memory'],
      content: `More time in D position. This is your home key. Get comfortable here.`,
      exercises: [
        {
          id: exerciseId(4, 5, 1),
          title: 'D Major Extended',
          description: 'Play D major parallel motion three times without stopping.',
          abc_notation: `X:1
T:D Major Extended Practice
M:4/4
L:1/4
K:D
[D,D] [E,E] [^F,^F] [G,G] | [A,A] [G,G] [^F,^F] [E,E] | [D,D]2 z2 |]`,
          target_tempo: 60,
          tips: ['Don\'t stop between repetitions', 'Maintain focus all the way through'],
          common_mistakes: ['Quality degrades on repetitions 2 and 3']
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
          description: 'Play C position (both hands), G position (both hands), D position (both hands).',
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
      description: 'LH plays D chord, RH plays D major five-finger.',
      abc_notation: `X:1
T:Chord + Melody
M:4/4
L:1/4
K:D
[D,^F,A,]4 | D E ^F G | A G ^F E | D4 |]`,
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
  title: 'I-IV-V in D Major',
  overview: 'The I-IV-V progression is the backbone of countless songs, including "Ol\' 55." In D major, that\'s D (I), G (IV), and A (V). Time to add the A chord.',
  theory_concepts: ['Roman numeral analysis', 'I-IV-V progression', 'Dominant chord'],
  days: Array.from({ length: 7 }, (_, i) => ({
    day_number: i + 1,
    type: i === 0 ? 'info_dump' : i === 6 ? 'review' : 'practice' as const,
    title: `Day ${i + 1}`,
    objectives: ['Learn A major triad', 'Play I-IV-V progression in D'],
    content: 'A major triad: A-C#-E. This completes your primary chord vocabulary for "Ol\' 55."',
    exercises: [{
      id: exerciseId(7, i + 1, 1),
      title: 'I-IV-V-I Progression',
      description: 'Play D - G - A - D progression.',
      abc_notation: `X:1
T:I-IV-V-I in D
M:4/4
L:1
K:D
[D^FA] | [GBd] | [A^ce] | [D^FA] |]`,
      target_tempo: 60,
      tips: ['Hear the tension and release', 'A wants to resolve to D'],
      common_mistakes: ['Forgetting C# in A chord']
    }],
    checkpoint_criteria: i === 6 ? ['Can play I-IV-V-I smoothly', 'Understand the function of each chord'] : undefined
  }))
}

const week8: WeekContent = {
  week_number: 8,
  phase: 1,
  title: 'Adding ii and vi Chords',
  overview: 'Em (ii) and Bm (vi) add color to the progression. "Ol\' 55" uses these chords for emotional depth. This completes the harmonic vocabulary you need.',
  theory_concepts: ['Minor triads', 'ii and vi chords', 'Complete chord vocabulary'],
  days: Array.from({ length: 7 }, (_, i) => ({
    day_number: i + 1,
    type: i === 0 ? 'info_dump' : i === 6 ? 'review' : 'practice' as const,
    title: `Day ${i + 1}`,
    objectives: ['Learn Em and Bm triads', 'Complete chord vocabulary for song'],
    content: 'Em (E-G-B) and Bm (B-D-F#) are minor triads. They sound "sadder" than major triads. Both appear in "Ol\' 55."',
    exercises: [{
      id: exerciseId(8, i + 1, 1),
      title: 'Minor Triads',
      description: 'Play Em and Bm chords.',
      abc_notation: `X:1
T:Minor Triads
M:4/4
L:1
K:D
[EGB] | [Bd^F] |]`,
      target_tempo: 60,
      tips: ['Minor third is one half step smaller than major third', 'Notice the darker sound'],
      common_mistakes: ['Playing E major instead of E minor']
    }],
    checkpoint_criteria: i === 6 ? ['Can play all chords for Ol\' 55: D, G, A, Em, Bm', 'Phase 1 complete!'] : undefined
  }))
}

// Combine into curriculum
export const curriculum: Curriculum = {
  phases: [
    {
      number: 1,
      name: 'Foundation',
      description: 'Building the physical and theoretical fundamentals. No song yet—just the skills you\'ll need.',
      weeks: [week1, week2, week3, week4, week5, week6, week7, week8]
    }
    // Phases 2-6 would be added as curriculum expands
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
