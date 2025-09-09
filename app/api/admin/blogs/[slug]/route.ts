import { NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'
import { db } from '@/src/db/db'
import { blogs, type InsertBlog } from '@/src/db/schema'
import { ADMIN_TOKEN_COOKIE, verifyAdminJWT } from '@/lib/auth'

function toArrayOrCSV(tags: unknown): string | null {
  if (!tags) return null
  if (Array.isArray(tags)) return tags.map(String).map(t => t.trim()).filter(Boolean).join(',')
  if (typeof tags === 'string') return tags
  return null
}

export async function GET(req: Request) {
  try {
    const { pathname } = new URL(req.url)
    const slug = decodeURIComponent(pathname.split('/').pop() || '')
    const cookieHeader = req.headers.get('cookie') || ''
    const token = cookieHeader
      .split(';')
      .map((v) => v.trim())
      .find((v) => v.startsWith(`${ADMIN_TOKEN_COOKIE}=`))
      ?.split('=')[1]
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    await verifyAdminJWT(token)

    const [item] = await db.select().from(blogs).where(eq(blogs.slug, slug))
    if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(item)
  } catch (error) {
    console.error('GET /admin/blogs/[slug] error', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const { pathname } = new URL(req.url)
    const slug = decodeURIComponent(pathname.split('/').pop() || '')
    const cookieHeader = req.headers.get('cookie') || ''
    const token = cookieHeader
      .split(';')
      .map((v) => v.trim())
      .find((v) => v.startsWith(`${ADMIN_TOKEN_COOKIE}=`))
      ?.split('=')[1]
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    await verifyAdminJWT(token)

    const body = await req.json()
    const now = new Date().toISOString()

    const patch: Partial<InsertBlog> = {
      updatedAt: now,
    }

    if (typeof body.title === 'string') patch.title = body.title
    if (typeof body.excerpt === 'string') patch.excerpt = body.excerpt
    if (typeof body.content === 'string') patch.content = body.content
    if (typeof body.content_format === 'string') patch.contentFormat = body.content_format || 'markdown'
    if (typeof body.contentFormat === 'string') patch.contentFormat = body.contentFormat || 'markdown'
    if (typeof body.featured_image === 'string') patch.featuredImage = body.featured_image
    if (typeof body.featuredImage === 'string') patch.featuredImage = body.featuredImage
    if (typeof body.author === 'string') patch.author = body.author
    if (typeof body.category === 'string') patch.category = body.category
    if (body.tags !== undefined) patch.tags = toArrayOrCSV(body.tags)
    if (typeof body.featured === 'boolean') patch.featured = body.featured
    if (body.status === 'draft' || body.status === 'published') {
      patch.status = body.status
      if (body.status === 'published') {
        patch.publishedDate = body.published_date || now
      } else {
        patch.publishedDate = null
      }
    }

    await db.update(blogs).set(patch).where(eq(blogs.slug, slug))
    const [updated] = await db.select().from(blogs).where(eq(blogs.slug, slug))
    if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(updated)
  } catch (error) {
    console.error('PUT /admin/blogs/[slug] error', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { pathname } = new URL(req.url)
    const slug = decodeURIComponent(pathname.split('/').pop() || '')
    const cookieHeader = req.headers.get('cookie') || ''
    const token = cookieHeader
      .split(';')
      .map((v) => v.trim())
      .find((v) => v.startsWith(`${ADMIN_TOKEN_COOKIE}=`))
      ?.split('=')[1]
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    await verifyAdminJWT(token)

    await db.delete(blogs).where(eq(blogs.slug, slug))
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('DELETE /admin/blogs/[slug] error', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
