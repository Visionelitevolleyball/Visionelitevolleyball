import { NextResponse } from 'next/server'
import { ADMIN_TOKEN_COOKIE, createAdminJWT } from '@/lib/auth'
import { db } from '@/src/db/db'
import { adminUsers } from '@/src/db/schema'
import { eq } from 'drizzle-orm'
import { verifyPassword } from '@/lib/password'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const email = (body?.email || '').toString()
    const password = (body?.password || '').toString()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    // Look up admin user in the database
    const [user] = await db.select().from(adminUsers).where(eq(adminUsers.email, email))
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const ok = await verifyPassword(password, user.passwordHash)
    if (!ok) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const token = await createAdminJWT({ sub: email, email, role: 'admin' })

    const res = NextResponse.json({ success: true })
    const secure = process.env.NODE_ENV === 'production'
    res.cookies.set(ADMIN_TOKEN_COOKIE, token, {
      httpOnly: true,
      secure,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return res
  } catch (error) {
    console.error('Login error', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
