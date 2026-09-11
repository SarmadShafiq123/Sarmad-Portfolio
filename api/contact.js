/**
 * Vercel Serverless Function — Contact Form Handler
 * Sends email via Resend API
 * 
 * Environment Variables Required:
 * - RESEND_API_KEY: Your Resend API key
 * - CONTACT_EMAIL: Email address to receive form submissions
 */

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  // Server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  // Check environment variables
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const CONTACT_EMAIL  = process.env.CONTACT_EMAIL || 'your-email@example.com'

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured')
    return res.status(500).json({ error: 'Email service not configured' })
  }

  try {
    // Call Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>', // Resend verified sender
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `Portfolio Contact: ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Resend API error:', data)
      return res.status(500).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
