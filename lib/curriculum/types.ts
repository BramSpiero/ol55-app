export interface Exercise {
  id: string
  title: string
  description: string
  abc_notation: string
  target_tempo: number
  tips: string[]
  common_mistakes: string[]
}

export interface DayContent {
  day_number: number
  type: 'info_dump' | 'practice' | 'review'
  title: string
  objectives: string[]
  content: string
  exercises: Exercise[]
  checkpoint_criteria?: string[]
}

export interface WeekContent {
  week_number: number
  phase: number
  title: string
  overview: string
  days: DayContent[]
  theory_concepts?: string[]
}

export interface Phase {
  number: number
  name: string
  description: string
  weeks: WeekContent[]
}

export interface Curriculum {
  phases: Phase[]
}

export function getPhaseForWeek(week: number): number {
  if (week <= 8) return 1
  if (week <= 16) return 2
  if (week <= 24) return 3
  if (week <= 32) return 4
  if (week <= 40) return 5
  return 6
}

export function getPhaseName(phase: number): string {
  const names: Record<number, string> = {
    1: 'Foundation',
    2: 'Song Introduction',
    3: 'Hands Together',
    4: 'Adding Voice',
    5: 'Refinement',
    6: 'Performance Prep'
  }
  return names[phase] || 'Unknown'
}
