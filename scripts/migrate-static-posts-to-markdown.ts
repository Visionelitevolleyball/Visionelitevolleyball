#!/usr/bin/env bun

import dotenv from 'dotenv'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import TurndownService from 'turndown'
import { db } from '../src/db/db'
import { blogs } from '../src/db/schema'

dotenv.config({ path: '.env.local' })

function mdFromReactNode(node: React.ReactNode) {
  // Render React nodes to HTML, then convert to Markdown
  const html = renderToStaticMarkup(React.createElement('div', null, node))
  const turndown = new TurndownService({
    headingStyle: 'atx',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
    emDelimiter: '*',
  })
  // Remove excessive whitespace
  let md = turndown.turndown(html)
  md = formatMarkdown(md)
  return md
}

function formatMarkdown(md: string) {
  let out = md.replace(/\r\n/g, '\n')
  // Ensure blank line before headings
  out = out.replace(/([^\n])\n(#{1,6}\s)/g, '$1\n\n$2')
  // Ensure blank line before list items
  out = out.replace(/([^\n])\n(- |\* |\d+\. )/g, '$1\n\n$2')
  // Ensure blank line after a list block
  out = out.replace(/(\n(?:- |\* |\d+\. ).*(?:\n(?:- |\* |\d+\. ).*)*)(\n[^-\*#\d])/g, '$1\n\n$2')
  // Ensure images have blank lines around
  out = out.replace(/([^\n])\n(!\[[^\]]*\]\([^\)]+\))/g, '$1\n\n$2')
  out = out.replace(/(!\[[^\]]*\]\([^\)]+\))\n([^\n])/g, '$1\n\n$2')
  // Collapse 3+ newlines
  out = out.replace(/\n{3,}/g, '\n\n')
  return out.trim()
}

async function main() {
  console.log('🧹 Clearing blogs table...')
  await db.delete(blogs)

  console.log('🔎 Importing posts from app/blog/posts.tsx and converting to Markdown...')
  const mod = await import('../app/blog/posts')
  const posts: any[] = mod.posts
  if (!Array.isArray(posts) || posts.length === 0) {
    console.log('No static posts found. Nothing to migrate.')
    return
  }

  let inserted = 0

  for (const p of posts) {
    const slug: string = p.slug
    const title: string = p.title
    const excerpt: string = p.excerpt ?? ''
    const author: string = p.author ?? 'Admin'
    const category: string | null = p.category ?? null
    const featuredImage: string | null = p.image ?? null
    const featured: boolean = Boolean(p.featured)
    const publishedDate: string = new Date(p.publishedAt || Date.now()).toISOString()

    const markdown = mdFromReactNode(p.content)

    const now = new Date().toISOString()

    await db.insert(blogs).values({
      title,
      slug,
      excerpt,
      content: markdown,
      contentFormat: 'markdown',
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
    console.log(`✅ Inserted (MD) ${slug}`)
  }

  console.log(`\n🎉 Markdown migration complete. Inserted: ${inserted}`)
}

main().catch((e) => {
  console.error('Fatal migration error:', e)
  process.exit(1)
})
