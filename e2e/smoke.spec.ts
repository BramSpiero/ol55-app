import { test, expect } from '@playwright/test'

test.describe('Landing Page', () => {
  test('loads successfully', async ({ page }) => {
    await page.goto('/')
    
    await expect(page.locator('h1')).toContainText("Ol' 55")
    await expect(page.locator('text=Learn piano in 48 weeks')).toBeVisible()
  })

  test('has working CTA button', async ({ page }) => {
    await page.goto('/')
    
    const ctaButton = page.locator('text=Start Your Journey')
    await expect(ctaButton).toBeVisible()
    
    await ctaButton.click()
    await expect(page).toHaveURL('/login')
  })
})

test.describe('Login Page', () => {
  test('loads successfully', async ({ page }) => {
    await page.goto('/login')
    
    await expect(page.locator('text=Sign in to continue')).toBeVisible()
    await expect(page.locator('input[type="email"]')).toBeVisible()
  })

  test('shows error for invalid email', async ({ page }) => {
    await page.goto('/login')
    
    // HTML5 validation should prevent submission
    const emailInput = page.locator('input[type="email"]')
    const submitButton = page.locator('button[type="submit"]')
    
    await emailInput.fill('invalid-email')
    await submitButton.click()
    
    // Should still be on login page
    await expect(page).toHaveURL('/login')
  })

  test('submits with valid email', async ({ page }) => {
    await page.goto('/login')
    
    const emailInput = page.locator('input[type="email"]')
    const submitButton = page.locator('button[type="submit"]')
    
    await emailInput.fill('test@example.com')
    await submitButton.click()
    
    // Should show success message or error (depending on Supabase config)
    await expect(
      page.locator('text=Check your email').or(page.locator('[class*="error"]'))
    ).toBeVisible({ timeout: 10000 })
  })
})

test.describe('Protected Routes', () => {
  test('redirects to login when not authenticated', async ({ page }) => {
    await page.goto('/dashboard')
    
    // Should redirect to login
    await expect(page).toHaveURL('/login')
  })

  test('practice page redirects to login', async ({ page }) => {
    await page.goto('/practice')
    
    await expect(page).toHaveURL('/login')
  })

  test('chat page redirects to login', async ({ page }) => {
    await page.goto('/chat')
    
    await expect(page).toHaveURL('/login')
  })
})

test.describe('Mobile Navigation', () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test('landing page is mobile responsive', async ({ page }) => {
    await page.goto('/')
    
    // Check that key elements are visible on mobile
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('text=Start Your Journey')).toBeVisible()
  })

  test('login form is usable on mobile', async ({ page }) => {
    await page.goto('/login')
    
    const emailInput = page.locator('input[type="email"]')
    await expect(emailInput).toBeVisible()
    
    // Input should be tappable
    await emailInput.tap()
    await emailInput.fill('test@example.com')
    
    await expect(emailInput).toHaveValue('test@example.com')
  })
})

test.describe('Accessibility', () => {
  test('landing page has proper heading structure', async ({ page }) => {
    await page.goto('/')
    
    const h1 = page.locator('h1')
    await expect(h1).toHaveCount(1)
  })

  test('form inputs have labels', async ({ page }) => {
    await page.goto('/login')
    
    const emailInput = page.locator('input[type="email"]')
    const label = page.locator('label[for="email"]')
    
    await expect(label).toBeVisible()
    await expect(emailInput).toHaveAttribute('id', 'email')
  })

  test('buttons are keyboard accessible', async ({ page }) => {
    await page.goto('/')
    
    // Tab to the CTA button
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    
    // Should be able to activate with Enter
    await page.keyboard.press('Enter')
    
    await expect(page).toHaveURL('/login')
  })
})
