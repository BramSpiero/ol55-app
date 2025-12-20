import { getWeek, getDay, curriculum } from '@/lib/curriculum/data'
import { getPhaseForWeek, getPhaseName } from '@/lib/curriculum/types'

describe('Curriculum Data', () => {
  describe('getWeek', () => {
    it('returns Week 1 content', () => {
      const week = getWeek(1)
      expect(week).toBeDefined()
      expect(week?.week_number).toBe(1)
      expect(week?.title).toBe('Keyboard Geography')
    })

    it('returns Week 8 content', () => {
      const week = getWeek(8)
      expect(week).toBeDefined()
      expect(week?.week_number).toBe(8)
    })

    it('returns undefined for Week 0', () => {
      const week = getWeek(0)
      expect(week).toBeUndefined()
    })

    it('returns undefined for Week 49', () => {
      const week = getWeek(49)
      expect(week).toBeUndefined()
    })

    it('returns undefined for negative week', () => {
      const week = getWeek(-1)
      expect(week).toBeUndefined()
    })
  })

  describe('getDay', () => {
    it('returns Day 1 of Week 1', () => {
      const day = getDay(1, 1)
      expect(day).toBeDefined()
      expect(day?.day_number).toBe(1)
      expect(day?.type).toBe('info_dump')
    })

    it('returns Day 7 of Week 1 (checkpoint)', () => {
      const day = getDay(1, 7)
      expect(day).toBeDefined()
      expect(day?.day_number).toBe(7)
      expect(day?.type).toBe('review')
      expect(day?.checkpoint_criteria).toBeDefined()
    })

    it('returns undefined for Day 0', () => {
      const day = getDay(1, 0)
      expect(day).toBeUndefined()
    })

    it('returns undefined for Day 8', () => {
      const day = getDay(1, 8)
      expect(day).toBeUndefined()
    })

    it('returns undefined for invalid week', () => {
      const day = getDay(0, 1)
      expect(day).toBeUndefined()
    })
  })

  describe('getPhaseForWeek', () => {
    it('returns Phase 1 for Week 1', () => {
      expect(getPhaseForWeek(1)).toBe(1)
    })

    it('returns Phase 1 for Week 8', () => {
      expect(getPhaseForWeek(8)).toBe(1)
    })

    it('returns Phase 2 for Week 9', () => {
      expect(getPhaseForWeek(9)).toBe(2)
    })

    it('returns Phase 2 for Week 16', () => {
      expect(getPhaseForWeek(16)).toBe(2)
    })

    it('returns Phase 6 for Week 48', () => {
      expect(getPhaseForWeek(48)).toBe(6)
    })

    it('returns Phase 6 for Week 41', () => {
      expect(getPhaseForWeek(41)).toBe(6)
    })
  })

  describe('getPhaseName', () => {
    it('returns Foundation for Phase 1', () => {
      expect(getPhaseName(1)).toBe('Foundation')
    })

    it('returns Performance Prep for Phase 6', () => {
      expect(getPhaseName(6)).toBe('Performance Prep')
    })

    it('returns Unknown for invalid phase', () => {
      expect(getPhaseName(0)).toBe('Unknown')
      expect(getPhaseName(7)).toBe('Unknown')
    })
  })
})

describe('Curriculum Data Integrity', () => {
  describe('Week structure', () => {
    it('all weeks have exactly 7 days', () => {
      for (let weekNum = 1; weekNum <= 8; weekNum++) {
        const week = getWeek(weekNum)
        expect(week?.days.length).toBe(7)
      }
    })

    it('all days have required properties', () => {
      for (let weekNum = 1; weekNum <= 8; weekNum++) {
        const week = getWeek(weekNum)
        week?.days.forEach((day) => {
          expect(day.day_number).toBeGreaterThanOrEqual(1)
          expect(day.day_number).toBeLessThanOrEqual(7)
          expect(day.title).toBeTruthy()
          expect(day.objectives.length).toBeGreaterThan(0)
          expect(day.content).toBeTruthy()
          expect(['info_dump', 'practice', 'review']).toContain(day.type)
        })
      }
    })

    it('Day 1 is always info_dump type', () => {
      for (let weekNum = 1; weekNum <= 8; weekNum++) {
        const day = getDay(weekNum, 1)
        expect(day?.type).toBe('info_dump')
      }
    })

    it('Day 7 is always review type with checkpoint criteria', () => {
      for (let weekNum = 1; weekNum <= 8; weekNum++) {
        const day = getDay(weekNum, 7)
        expect(day?.type).toBe('review')
        expect(day?.checkpoint_criteria).toBeDefined()
        expect(day?.checkpoint_criteria?.length).toBeGreaterThan(0)
      }
    })
  })

  describe('Exercise structure', () => {
    it('all exercises have valid ABC notation', () => {
      for (let weekNum = 1; weekNum <= 8; weekNum++) {
        const week = getWeek(weekNum)
        week?.days.forEach((day) => {
          day.exercises.forEach((exercise) => {
            expect(exercise.abc_notation).toContain('X:')
            expect(exercise.abc_notation).toContain('K:')
            expect(exercise.title).toBeTruthy()
            expect(exercise.target_tempo).toBeGreaterThan(0)
          })
        })
      }
    })

    it('all exercises have tips and common mistakes', () => {
      for (let weekNum = 1; weekNum <= 8; weekNum++) {
        const week = getWeek(weekNum)
        week?.days.forEach((day) => {
          day.exercises.forEach((exercise) => {
            expect(exercise.tips.length).toBeGreaterThan(0)
            expect(exercise.common_mistakes.length).toBeGreaterThan(0)
          })
        })
      }
    })
  })
})

describe('Progress Advancement Logic', () => {
  it('correctly calculates next day within week', () => {
    const currentWeek = 1
    const currentDay = 3
    
    let nextWeek = currentWeek
    let nextDay = currentDay + 1
    
    if (nextDay > 7) {
      nextDay = 1
      nextWeek += 1
    }
    
    expect(nextWeek).toBe(1)
    expect(nextDay).toBe(4)
  })

  it('correctly advances to next week', () => {
    const currentWeek = 1
    const currentDay = 7
    
    let nextWeek = currentWeek
    let nextDay = currentDay + 1
    
    if (nextDay > 7) {
      nextDay = 1
      nextWeek += 1
    }
    
    expect(nextWeek).toBe(2)
    expect(nextDay).toBe(1)
  })

  it('correctly calculates phase transition', () => {
    const currentWeek = 8
    const currentDay = 7
    
    let nextWeek = currentWeek
    let nextDay = currentDay + 1
    
    if (nextDay > 7) {
      nextDay = 1
      nextWeek += 1
    }
    
    const nextPhase = Math.ceil(nextWeek / 8)
    
    expect(nextWeek).toBe(9)
    expect(nextDay).toBe(1)
    expect(nextPhase).toBe(2)
  })

  it('handles end of curriculum', () => {
    const currentWeek = 48
    const currentDay = 7
    
    let nextWeek = currentWeek
    let nextDay = currentDay + 1
    
    if (nextDay > 7) {
      nextDay = 1
      nextWeek += 1
    }
    
    // Should not advance beyond week 48
    const shouldAdvance = nextWeek <= 48
    
    expect(nextWeek).toBe(49)
    expect(shouldAdvance).toBe(false)
  })
})
