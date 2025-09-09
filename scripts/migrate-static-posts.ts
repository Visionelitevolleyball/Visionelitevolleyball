#!/usr/bin/env bun

import { renderToStaticMarkup } from 'react-dom/server'
import React from 'react'
import dotenv from 'dotenv'
import { db } from '../src/db/db'
import { blogs } from '../src/db/schema'
import { eq } from 'drizzle-orm'

// Load environment variables (Turso, etc.)
dotenv.config({ path: '.env.local' })

async function main() {
  console.log('🔎 Importing static posts from app/blog/posts.tsx ...')
  // Dynamically import to avoid bundler issues
  const mod = await import('../app/blog/posts')
  const posts: any[] = mod.posts
  if (!Array.isArray(posts) || posts.length === 0) {
    console.log('No static posts found. Nothing to migrate.')
    return
  }

  let inserted = 0
  let updated = 0

  for (const p of posts) {
    try {
      const slug: string = p.slug
      const title: string = p.title
      const excerpt: string = p.excerpt ?? ''
      const author: string = p.author ?? 'Admin'
      const category: string | null = p.category ?? null
      const featuredImage: string | null = p.image ?? null
      const featured: boolean = Boolean(p.featured)
      const publishedDate: string = new Date(p.publishedAt || Date.now()).toISOString()

      // Convert ReactNode content -> HTML (avoid JSX in .ts)
      const contentHtml = renderToStaticMarkup(React.createElement('div', null, p.content))

      const [existing] = await db.select().from(blogs).where(eq(blogs.slug, slug))

      const now = new Date().toISOString()

      if (existing) {
        await db
          .update(blogs)
          .set({
            title,
            excerpt,
            content: contentHtml,
            featuredImage: featuredImage ?? undefined,
            featured,
            author,
            category: category ?? undefined,
            status: 'published',
            publishedDate,
            updatedAt: now,
          })
          .where(eq(blogs.slug, slug))
        updated++
        console.log(`♻️  Updated existing blog: ${slug}`)
      } else {
        await db.insert(blogs).values({
          title,
          slug,
          excerpt,
          content: contentHtml,
          featuredImage: featuredImage ?? undefined,
          featured,
          author,
          category: category ?? undefined,
          tags: null,
          status: 'published',
          publishedDate,
          createdAt: now,
          updatedAt: now,
        })
        inserted++
        console.log(`✅ Inserted new blog: ${slug}`)
      }
    } catch (err) {
      console.error('Error migrating a post:', err)
    }
  }

  console.log(`\n🎉 Migration complete. Inserted: ${inserted}, Updated: ${updated}, Total processed: ${inserted + updated}`)
}

main().catch((e) => {
  console.error('Fatal migration error:', e)
  process.exit(1)
})
