import { NextResponse } from 'next/server'
import { ADMIN_TOKEN_COOKIE } from '@/lib/auth'

export async function POST(req: Request) {
  const redirectUrl = new URL('/', req.url)
  const res = NextResponse.redirect(redirectUrl, 303)
  res.cookies.set(ADMIN_TOKEN_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  })
  return res
}
