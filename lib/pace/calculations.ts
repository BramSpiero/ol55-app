// Pace tracking utilities

export type PaceStatus = 'ahead' | 'on_track' | 'behind' | 'at_risk'

export interface PaceInfo {
  daysCompleted: number
  expectedDays: number
  bufferDays: number
  status: PaceStatus
  projectedCompletion: Date
  daysRemaining: number
  percentComplete: number
  message: string
  actionRequired: boolean
}

const TOTAL_CURRICULUM_DAYS = 336 // 48 weeks × 7 days

export function calculatePaceInfo(
  startDate: Date,
  targetEndDate: Date,
  daysCompleted: number
): PaceInfo {
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  
  const start = new Date(startDate)
  start.setHours(0, 0, 0, 0)
  
  const target = new Date(targetEndDate)
  target.setHours(0, 0, 0, 0)
  
  // Days elapsed since start
  const daysElapsed = Math.max(0, Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)))
  
  // Total duration of the program
  const totalDuration = Math.floor((target.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  
  // Expected days based on linear progress
  const expectedDays = totalDuration > 0 
    ? Math.min(Math.round((daysElapsed / totalDuration) * TOTAL_CURRICULUM_DAYS), TOTAL_CURRICULUM_DAYS)
    : TOTAL_CURRICULUM_DAYS
  
  // Buffer (positive = ahead, negative = behind)
  const bufferDays = daysCompleted - expectedDays
  
  // Determine status
  let status: PaceStatus
  if (bufferDays >= 14) {
    status = 'ahead'
  } else if (bufferDays >= -7) {
    status = 'on_track'
  } else if (bufferDays >= -21) {
    status = 'behind'
  } else {
    status = 'at_risk'
  }
  
  // Project completion date based on current pace
  let projectedCompletion: Date
  if (daysCompleted >= TOTAL_CURRICULUM_DAYS) {
    projectedCompletion = now
  } else if (daysCompleted > 0 && daysElapsed > 0) {
    const avgDaysPerCurriculumDay = daysElapsed / daysCompleted
    const remainingCurriculumDays = TOTAL_CURRICULUM_DAYS - daysCompleted
    const projectedDaysRemaining = Math.round(remainingCurriculumDays * avgDaysPerCurriculumDay)
    projectedCompletion = new Date(now.getTime() + projectedDaysRemaining * 24 * 60 * 60 * 1000)
  } else {
    projectedCompletion = target
  }
  
  // Days remaining in curriculum
  const daysRemaining = TOTAL_CURRICULUM_DAYS - daysCompleted
  
  // Percent complete
  const percentComplete = Math.round((daysCompleted / TOTAL_CURRICULUM_DAYS) * 100)
  
  // Generate message
  const message = generatePaceMessage(status, bufferDays, daysRemaining, projectedCompletion, target)
  
  // Action required if behind or at risk
  const actionRequired = status === 'behind' || status === 'at_risk'
  
  return {
    daysCompleted,
    expectedDays,
    bufferDays,
    status,
    projectedCompletion,
    daysRemaining,
    percentComplete,
    message,
    actionRequired
  }
}

function generatePaceMessage(
  status: PaceStatus,
  bufferDays: number,
  daysRemaining: number,
  projectedCompletion: Date,
  targetEnd: Date
): string {
  const projectedStr = projectedCompletion.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  const targetStr = targetEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  
  switch (status) {
    case 'ahead':
      return `You're ${bufferDays} days ahead of schedule! At this pace, you'll finish by ${projectedStr}. Keep the momentum or take a well-earned breather.`
    
    case 'on_track':
      if (bufferDays > 0) {
        return `You're ${bufferDays} days ahead. Right on track for your ${targetStr} goal.`
      } else if (bufferDays < 0) {
        return `You're ${Math.abs(bufferDays)} days behind, but still within range. A few extra sessions will catch you up.`
      } else {
        return `Perfectly on pace for your ${targetStr} goal. Keep it up!`
      }
    
    case 'behind':
      return `You're ${Math.abs(bufferDays)} days behind schedule. Let's make a plan to catch up—maybe add an extra session on weekends?`
    
    case 'at_risk':
      return `You're ${Math.abs(bufferDays)} days behind. We need to talk about adjusting your pace or target date to stay realistic.`
    
    default:
      return `${daysRemaining} days remaining in the curriculum.`
  }
}

export function getStatusColor(status: PaceStatus): string {
  switch (status) {
    case 'ahead': return 'text-green-600'
    case 'on_track': return 'text-whiskey-600'
    case 'behind': return 'text-yellow-600'
    case 'at_risk': return 'text-red-600'
  }
}

export function getStatusBgColor(status: PaceStatus): string {
  switch (status) {
    case 'ahead': return 'bg-green-50 border-green-200'
    case 'on_track': return 'bg-whiskey-50 border-whiskey-200'
    case 'behind': return 'bg-yellow-50 border-yellow-200'
    case 'at_risk': return 'bg-red-50 border-red-200'
  }
}

export function getStatusLabel(status: PaceStatus): string {
  switch (status) {
    case 'ahead': return 'Ahead of schedule'
    case 'on_track': return 'On track'
    case 'behind': return 'Behind schedule'
    case 'at_risk': return 'Needs attention'
  }
}

// Calculate how many days per week needed to finish on time
export function calculateRequiredPace(
  daysRemaining: number,
  targetEndDate: Date
): { daysPerWeek: number; achievable: boolean } {
  const now = new Date()
  const weeksRemaining = Math.max(1, Math.ceil((targetEndDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24 * 7)))
  const daysPerWeek = daysRemaining / weeksRemaining
  
  return {
    daysPerWeek: Math.round(daysPerWeek * 10) / 10,
    achievable: daysPerWeek <= 10 // More than 10 curriculum days per week is unrealistic
  }
}

// Suggest a catch-up plan
export function generateCatchUpPlan(
  bufferDays: number,
  currentDaysPerWeek: number
): string[] {
  const deficit = Math.abs(bufferDays)
  const suggestions: string[] = []
  
  if (deficit <= 7) {
    suggestions.push(`Add one extra 15-minute session this week to catch up`)
    suggestions.push(`Complete 2 days on one of your free days`)
  } else if (deficit <= 14) {
    suggestions.push(`Aim for 2 extra sessions per week for the next 2 weeks`)
    suggestions.push(`Consider a focused weekend practice session`)
  } else if (deficit <= 28) {
    suggestions.push(`We need to increase your weekly pace from ${currentDaysPerWeek} to ${currentDaysPerWeek + 2} days`)
    suggestions.push(`Block out specific catch-up time on your calendar`)
    suggestions.push(`Consider if any life circumstances are blocking practice`)
  } else {
    suggestions.push(`Let's have an honest conversation about your timeline`)
    suggestions.push(`Option 1: Intensive catch-up with daily practice for 2 weeks`)
    suggestions.push(`Option 2: Adjust your target date to stay realistic`)
    suggestions.push(`Option 3: Focus on core skills, condense some material`)
  }
  
  return suggestions
}
