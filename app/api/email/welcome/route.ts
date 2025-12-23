import { NextRequest, NextResponse } from 'next/server'

// Welcome email template
function getWelcomeEmailHtml(displayName: string, startDate: string): string {
  const formattedDate = new Date(startDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Ol' 55</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse;">
          
          <!-- Header -->
          <tr>
            <td align="center" style="padding: 30px 40px; background: linear-gradient(135deg, #78350f 0%, #a16207 100%); border-radius: 16px 16px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold;">🎹 Ol' 55</h1>
              <p style="margin: 10px 0 0 0; color: #fef3c7; font-size: 16px;">Your piano journey begins</p>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 40px; background-color: #ffffff;">
              <h2 style="margin: 0 0 20px 0; color: #1e1b4b; font-size: 24px;">Welcome, ${displayName}! 🎉</h2>
              
              <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                You've just taken the first step toward something most people only dream about: learning to sing and play a complete song on piano.
              </p>
              
              <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                Over the next 48 weeks, you'll go from absolute beginner to performing Tom Waits' classic "Ol' 55" with your own voice and piano accompaniment.
              </p>
              
              <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 30px 0; border-radius: 0 8px 8px 0;">
                <p style="margin: 0; color: #78350f; font-size: 16px;">
                  <strong>Your journey starts:</strong> ${formattedDate}
                </p>
              </div>
              
              <p style="margin: 0 0 30px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                Just 15 minutes a day. That's all it takes.
              </p>
              
              <!-- Add to Home Screen Section -->
              <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 25px; margin: 30px 0; border-radius: 12px;">
                <h3 style="margin: 0 0 15px 0; color: #166534; font-size: 18px;">📱 Pro Tip: Install the App</h3>
                <p style="margin: 0 0 15px 0; color: #15803d; font-size: 14px; line-height: 1.6;">
                  Add Ol' 55 to your home screen for the best experience:
                </p>
                <ul style="margin: 0; padding-left: 20px; color: #15803d; font-size: 14px; line-height: 1.8;">
                  <li><strong>iPhone/iPad:</strong> Tap Share → "Add to Home Screen"</li>
                  <li><strong>Android:</strong> Tap Menu (⋮) → "Add to Home screen"</li>
                  <li><strong>Desktop:</strong> Look for the install icon in your browser's address bar</li>
                </ul>
              </div>
              
              <!-- CTA Button -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="https://ol55-app.vercel.app/dashboard" style="display: inline-block; padding: 16px 40px; background-color: #78350f; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600; border-radius: 8px;">
                      Open Your Dashboard →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: #1e1b4b; border-radius: 0 0 16px 16px;">
              <p style="margin: 0 0 10px 0; color: #a5b4fc; font-size: 14px; text-align: center;">
                Questions? Just reply to this email or chat with your AI teacher in the app.
              </p>
              <p style="margin: 0; color: #6366f1; font-size: 12px; text-align: center;">
                "And I got the sun coming up over the trees..." 🌅
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

function getWelcomeEmailText(displayName: string, startDate: string): string {
  const formattedDate = new Date(startDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return `
Welcome to Ol' 55, ${displayName}! 🎹

You've just taken the first step toward something most people only dream about: learning to sing and play a complete song on piano.

Over the next 48 weeks, you'll go from absolute beginner to performing Tom Waits' classic "Ol' 55" with your own voice and piano accompaniment.

YOUR JOURNEY STARTS: ${formattedDate}

Just 15 minutes a day. That's all it takes.

---

PRO TIP: Install the App

Add Ol' 55 to your home screen for the best experience:

• iPhone/iPad: Tap Share → "Add to Home Screen"
• Android: Tap Menu (⋮) → "Add to Home screen"  
• Desktop: Look for the install icon in your browser's address bar

---

Open your dashboard: https://ol55-app.vercel.app/dashboard

Questions? Just reply to this email or chat with your AI teacher in the app.

"And I got the sun coming up over the trees..." 🌅
  `
}

export async function POST(request: NextRequest) {
  try {
    const { email, displayName, startDate } = await request.json()

    if (!email || !displayName) {
      return NextResponse.json(
        { error: 'Email and display name required' },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY

    // If no Resend API key, log and return success (don't block onboarding)
    if (!resendApiKey) {
      console.log('Welcome email skipped - RESEND_API_KEY not configured')
      console.log(`Would have sent to: ${email}`)
      return NextResponse.json({ 
        success: true, 
        message: 'Email skipped (no API key configured)' 
      })
    }

    // Send email via Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || 'Ol\' 55 <onboarding@resend.dev>',
        to: [email],
        subject: `Welcome to Ol' 55, ${displayName}! 🎹`,
        html: getWelcomeEmailHtml(displayName, startDate),
        text: getWelcomeEmailText(displayName, startDate)
      })
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Resend API error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: response.status }
      )
    }

    const result = await response.json()
    console.log('Welcome email sent:', result.id)

    return NextResponse.json({ success: true, id: result.id })
  } catch (error) {
    console.error('Email send error:', error)
    // Don't fail the request - email is nice-to-have
    return NextResponse.json({ 
      success: false, 
      message: 'Email sending failed but continuing' 
    })
  }
}
