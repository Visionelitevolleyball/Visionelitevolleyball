import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/src/db/db'
import { contactSubmissions } from '@/src/db/schema'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Get client IP and user agent for tracking
    const ipAddress = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'

    try {
      // Insert contact submission
      await db.insert(contactSubmissions).values({
        name,
        email,
        message,
        status: 'new',
        ipAddress,
        userAgent,
      })

      // TODO: Send email notification to admin
      // You can integrate with services like SendGrid, Resend, or AWS SES here

      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for contacting us! We will get back to you soon.' 
        },
        { status: 201 }
      )
    } catch (error) {
      console.error('Contact submission error:', error)
      
      return NextResponse.json(
        { error: 'Failed to submit contact form' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Request processing error:', error)
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}

// Optional: GET endpoint for admin to retrieve submissions (should be protected)
export async function GET() {
  try {
    // TODO: Add authentication check here
    // For now, we'll just return an error
    
    return NextResponse.json(
      { error: 'Authentication required' },
      { status: 401 }
    )

    // Example implementation after auth:
    /*
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status') || 'new'
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    const submissions = await db
      .select()
      .from(contactSubmissions)
      .where(eq(contactSubmissions.status, status))
      .limit(limit)
      .offset(offset)
      .orderBy(desc(contactSubmissions.submittedAt))

    return NextResponse.json(
      { submissions },
      { status: 200 }
    )
    */
  } catch (error) {
    console.error('Get submissions error:', error)
    return NextResponse.json(
      { error: 'Failed to retrieve submissions' },
      { status: 500 }
    )
  }
}