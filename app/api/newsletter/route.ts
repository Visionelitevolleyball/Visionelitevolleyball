import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/src/db/db'
import { newsletterSubscribers, pendingNewsletterEmails } from '@/src/db/schema'
import { eq } from 'drizzle-orm'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, city, source = 'popup' } = body

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // If only email is provided (from footer), store it temporarily
    if (!name || !city) {
      try {
        // Check if email already exists in pending
        const existingPending = await db
          .select()
          .from(pendingNewsletterEmails)
          .where(eq(pendingNewsletterEmails.email, email))
          .limit(1)

        if (existingPending.length === 0) {
          // Store email temporarily
          await db.insert(pendingNewsletterEmails).values({
            email,
            converted: false,
          })
        }

        return NextResponse.json(
          { 
            success: true, 
            requiresMoreInfo: true,
            message: 'Please complete your subscription' 
          },
          { status: 200 }
        )
      } catch (error) {
        console.error('Error storing pending email:', error)
        return NextResponse.json(
          { error: 'Failed to store email' },
          { status: 500 }
        )
      }
    }

    // Full subscription with all fields
    try {
      // Check if already subscribed
      const existingSubscriber = await db
        .select()
        .from(newsletterSubscribers)
        .where(eq(newsletterSubscribers.email, email))
        .limit(1)

      if (existingSubscriber.length > 0) {
        // Update existing subscriber if unsubscribed
        if (existingSubscriber[0].status === 'unsubscribed') {
          await db
            .update(newsletterSubscribers)
            .set({ 
              status: 'active',
              name,
              city,
              subscribedAt: new Date().toISOString()
            })
            .where(eq(newsletterSubscribers.email, email))

          return NextResponse.json(
            { success: true, message: 'Successfully re-subscribed to newsletter!' },
            { status: 200 }
          )
        }

        return NextResponse.json(
          { error: 'Email already subscribed' },
          { status: 409 }
        )
      }

      // Insert new subscriber
      await db.insert(newsletterSubscribers).values({
        email,
        name,
        city,
        status: 'active',
        source,
      })

      // Update pending email as converted if exists
      await db
        .update(pendingNewsletterEmails)
        .set({ converted: true })
        .where(eq(pendingNewsletterEmails.email, email))

      return NextResponse.json(
        { success: true, message: 'Successfully subscribed to newsletter!' },
        { status: 201 }
      )
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      
      // Check if it's a unique constraint error
      if (error instanceof Error && error.message.includes('UNIQUE')) {
        return NextResponse.json(
          { error: 'Email already subscribed' },
          { status: 409 }
        )
      }

      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
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

// Optional: GET endpoint to check subscription status
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    if (!email) {
      return NextResponse.json(
        { error: 'Email parameter is required' },
        { status: 400 }
      )
    }

    const subscriber = await db
      .select()
      .from(newsletterSubscribers)
      .where(eq(newsletterSubscribers.email, email))
      .limit(1)

    if (subscriber.length > 0) {
      return NextResponse.json(
        { 
          subscribed: subscriber[0].status === 'active',
          hasFullInfo: true 
        },
        { status: 200 }
      )
    }

    // Check pending emails
    const pending = await db
      .select()
      .from(pendingNewsletterEmails)
      .where(eq(pendingNewsletterEmails.email, email))
      .limit(1)

    if (pending.length > 0) {
      return NextResponse.json(
        { 
          subscribed: false,
          hasFullInfo: false,
          requiresMoreInfo: true 
        },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { subscribed: false, hasFullInfo: false },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription check error:', error)
    return NextResponse.json(
      { error: 'Failed to check subscription status' },
      { status: 500 }
    )
  }
}