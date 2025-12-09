import { NextRequest, NextResponse } from 'next/server'
import { companyInfo } from '@/lib/data'

// Rate limiting (simple in-memory store - use Redis in production)
const submissions = new Map<string, number>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const MAX_SUBMISSIONS = 5

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const userSubmissions = submissions.get(ip) || 0

  if (userSubmissions >= MAX_SUBMISSIONS) {
    const firstSubmission = submissions.get(`${ip}_time`) || now
    if (now - firstSubmission < RATE_LIMIT_WINDOW) {
      return false
    }
    // Reset if window expired
    submissions.delete(ip)
    submissions.delete(`${ip}_time`)
  }

  submissions.set(ip, userSubmissions + 1)
  if (userSubmissions === 0) {
    submissions.set(`${ip}_time`, now)
  }

  return true
}

// Honeypot field check
function isSpam(body: Record<string, unknown>): boolean {
  // Check for common spam patterns
  if (body.website || body.url || (body as { honeypot?: string }).honeypot) {
    return true
  }
  return false
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Troppe richieste. Riprova più tardi.' },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Spam check
    if (isSpam(body)) {
      return NextResponse.json(
        { error: 'Richiesta non valida' },
        { status: 400 }
      )
    }

    // Validate required fields
    const { nome, email, telefono, tipo, messaggio } = body

    if (!nome || !email || !telefono || !tipo || !messaggio) {
      return NextResponse.json(
        { error: 'Tutti i campi sono obbligatori' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email non valida' },
        { status: 400 }
      )
    }

    // Here you would send the email using a service like:
    // - Resend
    // - SendGrid
    // - AWS SES
    // - Or forward to EmailJS

    // For now, log the submission (replace with actual email sending)
    console.log('Contact form submission:', {
      nome,
      email,
      telefono,
      tipo,
      messaggio,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending
    // In production, integrate with your email service here

    return NextResponse.json(
      { message: 'Messaggio inviato con successo', success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Errore interno del server' },
      { status: 500 }
    )
  }
}
