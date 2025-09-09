import { NextResponse } from 'next/server'
import { eq, and } from 'drizzle-orm'
import { db } from '@/src/db/db'
import { blogs } from '@/src/db/schema'

export async function GET(req: Request) {
  try {
    const { pathname } = new URL(req.url)
    const slug = decodeURIComponent(pathname.split('/').pop() || '')
    const [item] = await db
      .select()
      .from(blogs)
      .where(and(eq(blogs.slug, slug), eq(blogs.status, 'published' as 'draft' | 'published')))

    if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(item)
  } catch (error) {
    console.error('GET /api/blogs/[slug] error', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
