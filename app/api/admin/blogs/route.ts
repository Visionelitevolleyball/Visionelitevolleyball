import { NextResponse } from 'next/server'
import { and, desc, eq, like } from 'drizzle-orm'
import { db } from '@/src/db/db'
import { blogs } from '@/src/db/schema'
import { slugify } from '@/lib/utils'
import { ADMIN_TOKEN_COOKIE, verifyAdminJWT } from '@/lib/auth'

function toArrayOrCSV(tags: unknown): string | null {
  if (!tags) return null
  if (Array.isArray(tags)) return tags.map(String).map(t => t.trim()).filter(Boolean).join(',')
  if (typeof tags === 'string') return tags
  return null
}

export async function GET(req: Request) {
  try {
    // Require admin auth (parse cookie header manually to avoid type issues)
    const cookieHeader = req.headers.get('cookie') || ''
    const token = cookieHeader
      .split(';')
      .map((v) => v.trim())
      .find((v) => v.startsWith(`${ADMIN_TOKEN_COOKIE}=`))
      ?.split('=')[1]
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    await verifyAdminJWT(token)
    const { searchParams } = new URL(req.url)
    const page = Number(searchParams.get('page') || '1')
    const pageSize = Number(searchParams.get('pageSize') || '10')
    const search = searchParams.get('search')?.trim()
    const status = searchParams.get('status')?.trim() as 'draft' | 'published' | undefined

    const where = (() => {
      const titleCond = search ? like(blogs.title, `%${search}%`) : null
      const statusCond = status ? eq(blogs.status, status) : null
      if (titleCond && statusCond) return and(titleCond, statusCond)
      if (titleCond) return titleCond
      if (statusCond) return statusCond
      // no filter
      return undefined as unknown as ReturnType<typeof and>
    })()

    const offset = (page - 1) * pageSize

    const items = where
      ? await db
          .select()
          .from(blogs)
          .where(where)
          .orderBy(desc(blogs.createdAt))
          .limit(pageSize)
          .offset(offset)
      : await db
          .select()
          .from(blogs)
          .orderBy(desc(blogs.createdAt))
          .limit(pageSize)
          .offset(offset)

    // Naive total count for pagination
    // libsql doesn't support count(*) in drizzle easily without raw sql; keep simple by estimating next page presence

    return NextResponse.json({ items })
  } catch (error) {
    console.error('GET /admin/blogs error', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    // Require admin auth
    const cookieHeader = req.headers.get('cookie') || ''
    const token = cookieHeader
      .split(';')
      .map((v) => v.trim())
      .find((v) => v.startsWith(`${ADMIN_TOKEN_COOKIE}=`))
      ?.split('=')[1]
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    await verifyAdminJWT(token)
    const body = await req.json()
    const title = (body?.title || '').toString().trim()
    if (!title) return NextResponse.json({ error: 'Title is required' }, { status: 400 })

    const providedSlug = (body?.slug || '').toString().trim()
    const slug = providedSlug || slugify(title)

    const [exists] = await db.select().from(blogs).where(eq(blogs.slug, slug))
    if (exists) return NextResponse.json({ error: 'Slug already exists' }, { status: 409 })

    const now = new Date().toISOString()

    const data = {
      title,
      slug,
      excerpt: (body?.excerpt || '') as string,
      content: (body?.content || '') as string,
      contentFormat: (body?.content_format || body?.contentFormat || 'markdown') as string,
      featuredImage: (body?.featured_image || body?.featuredImage || '') as string,
      featured: Boolean(body?.featured) ?? false,
      author: (body?.author || 'Admin') as string,
      category: (body?.category || '') as string,
      tags: toArrayOrCSV(body?.tags),
      status: (body?.status === 'published' ? 'published' : 'draft') as 'draft' | 'published',
      publishedDate: body?.published_date || (body?.status === 'published' ? now : null),
      createdAt: now,
      updatedAt: now,
    }

    await db.insert(blogs).values(data)
    const [created] = await db.select().from(blogs).where(eq(blogs.slug, slug))
    return NextResponse.json(created)
  } catch (error) {
    console.error('POST /admin/blogs error', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
