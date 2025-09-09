import { NextRequest, NextResponse } from 'next/server'
import { ADMIN_TOKEN_COOKIE, verifyAdminJWT } from '@/lib/auth'

const ADMIN_LOGIN_PATH = '/admin/login'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Only guard /admin routes
  if (!pathname.startsWith('/admin')) {
    return NextResponse.next()
  }

  // Allow static and API assets to pass
  if (pathname.startsWith('/admin/_next') || pathname.startsWith('/admin/api')) {
    return NextResponse.next()
  }

  const token = req.cookies.get(ADMIN_TOKEN_COOKIE)?.value

  // If visiting login and already authenticated, redirect to /admin
  if (pathname === ADMIN_LOGIN_PATH) {
    if (token) {
      try {
        await verifyAdminJWT(token)
        const url = req.nextUrl.clone()
        url.pathname = '/admin'
        return NextResponse.redirect(url)
      } catch {}
    }
    return NextResponse.next()
  }

  // For other /admin routes, require a valid token
  if (!token) {
    const url = req.nextUrl.clone()
    url.pathname = ADMIN_LOGIN_PATH
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }

  try {
    await verifyAdminJWT(token)
    return NextResponse.next()
  } catch {
    const url = req.nextUrl.clone()
    url.pathname = ADMIN_LOGIN_PATH
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: ['/admin/:path*'],
}
