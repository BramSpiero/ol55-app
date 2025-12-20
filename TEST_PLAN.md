# Ol' 55 Piano App - Test Plan

## Overview

This document outlines the testing strategy for the Ol' 55 Piano Learning App. Testing is divided into three layers: unit tests, integration tests, and edge case scenarios.

---

## Layer 1: Unit Tests (Jest + React Testing Library)

### Curriculum Logic (`lib/curriculum/`)

| Test | Description | Priority |
|------|-------------|----------|
| `getWeek(1)` returns Week 1 content | Basic retrieval | High |
| `getWeek(48)` returns Week 48 content | Boundary test | High |
| `getWeek(49)` returns undefined | Out of bounds | High |
| `getDay(1, 1)` returns correct day | Basic retrieval | High |
| `getDay(1, 8)` returns undefined | Invalid day | High |
| `getPhaseForWeek(1)` returns 1 | Phase 1 start | High |
| `getPhaseForWeek(8)` returns 1 | Phase 1 end | High |
| `getPhaseForWeek(9)` returns 2 | Phase 2 start | High |
| `getPhaseForWeek(48)` returns 6 | Final phase | High |
| `getPhaseName(1)` returns "Foundation" | Name mapping | Medium |
| All weeks have 7 days | Data integrity | High |
| All days have at least 1 exercise | Data integrity | High |
| All exercises have valid ABC notation | Data integrity | High |

### Progress Logic

| Test | Description | Priority |
|------|-------------|----------|
| Day 7 → Day 1 of next week | Week advancement | High |
| Week 8 → Week 9, Phase 1 → 2 | Phase advancement | High |
| Week 48, Day 7 → No advancement | End of curriculum | High |
| Progress defaults to Week 1, Day 1 | New user state | High |

### ABC Notation Validation

| Test | Description | Priority |
|------|-------------|----------|
| All exercises have `X:` header | Valid ABC | High |
| All exercises have `K:` key signature | Valid ABC | High |
| No malformed ABC crashes renderer | Error handling | High |

---

## Layer 2: Integration Tests (Playwright)

### Authentication Flow

| Test | Steps | Expected Result |
|------|-------|-----------------|
| Magic link signup | 1. Go to /login<br>2. Enter email<br>3. Submit | Success message shown |
| Auth callback redirect | 1. Click magic link<br>2. Land on callback | Redirect to /onboarding (new user) or /dashboard (existing) |
| Protected route redirect | 1. Go to /dashboard without auth | Redirect to /login |
| Logout flow | 1. Log out<br>2. Try protected route | Redirect to /login |

### Onboarding Flow

| Test | Steps | Expected Result |
|------|-------|-----------------|
| Complete onboarding | 1. Enter name<br>2. Select background<br>3. Select equipment<br>4. Select schedule<br>5. Submit | Redirect to /dashboard, profile saved |
| Partial onboarding | 1. Enter name<br>2. Navigate away | Progress not saved, must restart |
| Skip onboarding attempt | 1. Try to access /dashboard before completing | Redirect to /onboarding |
| Validation - empty name | 1. Try to proceed without name | Button disabled |

### Dashboard

| Test | Steps | Expected Result |
|------|-------|-----------------|
| Shows current week/day | 1. Load dashboard | Displays Week X, Day Y |
| Shows correct phase | 1. Load dashboard | Phase name matches week |
| Practice button state | 1. Before practice<br>2. After practice | Shows "Start" then "Completed" |
| Navigation works | 1. Click Practice<br>2. Click Chat | Routes correctly |

### Practice Flow

| Test | Steps | Expected Result |
|------|-------|-----------------|
| View lesson content | 1. Go to /practice | Shows objectives, content, exercises |
| ABC playback works | 1. Click Play on exercise | Audio plays, button changes to Stop |
| Tempo slider works | 1. Adjust tempo<br>2. Play | Playback speed changes |
| Complete practice | 1. Click Complete<br>2. Rate difficulty<br>3. Submit | Progress advances, redirect to dashboard |
| Already completed | 1. Complete practice<br>2. Return to /practice | Shows "Completed" state |

### AI Chat

| Test | Steps | Expected Result |
|------|-------|-----------------|
| Send message | 1. Type message<br>2. Submit | Message appears, loading shown |
| Receive response | 1. Send message<br>2. Wait | AI response appears |
| ABC in response | 1. Ask for exercise<br>2. Wait | ABC notation renders with playback |
| Context awareness | 1. Ask "what week am I on" | Response includes current week |
| Conversation history | 1. Send multiple messages<br>2. Refresh page | History preserved |

---

## Layer 3: Edge Cases & Stress Tests

### Boundary Conditions

| Scenario | Test | Expected Behavior |
|----------|------|-------------------|
| End of curriculum | User at Week 48, Day 7 completes practice | No crash, appropriate message |
| First day | New user on Week 1, Day 1 | All content loads correctly |
| Phase transition | User at Week 8, Day 7 completes | Advances to Week 9, Phase 2 |
| Rapid completion | User completes 7 days in 1 minute | Each completion tracked separately |

### Error Handling

| Scenario | Test | Expected Behavior |
|----------|------|-------------------|
| Claude API timeout | Mock 30s delay | Graceful error message, retry option |
| Claude API error | Mock 500 response | Error message, doesn't crash |
| Supabase down | Mock connection failure | Error state, cached data if available |
| Invalid session | Expired JWT | Redirect to login |
| Network offline | Disable network | Appropriate offline message |

### Concurrency & State

| Scenario | Test | Expected Behavior |
|----------|------|-------------------|
| Multiple tabs | Open /practice in 2 tabs, complete in one | Other tab shows updated state on refresh |
| Simultaneous requests | Spam "Complete" button | Only one completion recorded |
| Race condition | Complete practice while AI responding | Both operations succeed |

### Data Integrity

| Scenario | Test | Expected Behavior |
|----------|------|-------------------|
| Duplicate practice log | Try to log same day twice | Upsert, not duplicate |
| Progress rollback | Manually set progress backward | System allows (admin use case) |
| Orphaned data | Delete user, check related tables | Cascade delete works |

### Security

| Scenario | Test | Expected Behavior |
|----------|------|-------------------|
| Access other user's data | Modify user_id in request | RLS blocks access |
| SQL injection | Malicious input in chat | Sanitized, no injection |
| XSS in chat | Script tags in message | Escaped, not executed |
| API without auth | Call /api/ai/chat without session | 401 Unauthorized |

---

## Test Environment Setup

### Dependencies to Install

```bash
npm install -D jest @testing-library/react @testing-library/jest-dom
npm install -D playwright @playwright/test
npm install -D jest-environment-jsdom
```

### Configuration Files Needed

1. `jest.config.js` - Unit test configuration
2. `playwright.config.ts` - E2E test configuration
3. `__tests__/` - Unit test directory
4. `e2e/` - Playwright test directory

### CI/CD Integration

Tests should run on:
- Every push to `main`
- Every pull request
- Nightly (for longer stress tests)

---

## Test Data Strategy

### Fixtures

- Test user with known credentials
- User at various progress points (Week 1, Week 24, Week 48)
- User with empty chat history
- User with extensive chat history

### Database Seeding

```sql
-- Test user at Week 1
INSERT INTO progress (user_id, current_week, current_day, phase) 
VALUES ('test-user-1', 1, 1, 1);

-- Test user at end of curriculum
INSERT INTO progress (user_id, current_week, current_day, phase) 
VALUES ('test-user-2', 48, 7, 6);
```

---

## Priority Order for Implementation

1. **High Priority (Do First)**
   - Auth flow integration tests
   - Practice completion flow
   - Progress advancement unit tests
   - Basic error handling

2. **Medium Priority**
   - AI chat integration tests
   - ABC playback tests
   - Onboarding validation

3. **Lower Priority (Nice to Have)**
   - Stress tests
   - Security penetration tests
   - Performance benchmarks

---

## Success Metrics

- **Unit test coverage:** >80% of curriculum and progress logic
- **Integration test coverage:** All critical user paths
- **Edge case coverage:** All boundary conditions documented above
- **CI run time:** <5 minutes for PR checks, <15 minutes for full suite
