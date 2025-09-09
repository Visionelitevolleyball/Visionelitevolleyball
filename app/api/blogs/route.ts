import { NextResponse } from 'next/server'
import { and, desc, eq, like } from 'drizzle-orm'
import { db } from '@/src/db/db'
import { blogs } from '@/src/db/schema'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const page = Number(searchParams.get('page') || '1')
    const pageSize = Number(searchParams.get('pageSize') || '10')
    const search = searchParams.get('search')?.trim()

    const where = search
      ? and(eq(blogs.status, 'published' as 'draft' | 'published'), like(blogs.title, `%${search}%`))
      : eq(blogs.status, 'published' as 'draft' | 'published')

    const offset = (page - 1) * pageSize

    const items = await db
      .select()
      .from(blogs)
      .where(where)
      .orderBy(desc(blogs.publishedDate))
      .limit(pageSize)
      .offset(offset)

    return NextResponse.json({ items })
  } catch (error) {
    console.error('GET /api/blogs error', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
