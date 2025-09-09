#!/usr/bin/env bun

import { createClient } from '@libsql/client'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

if (!process.env.TURSO_DATABASE_URL || !process.env.TURSO_AUTH_TOKEN) {
  console.error('Error: Missing TURSO_DATABASE_URL or TURSO_AUTH_TOKEN environment variables')
  process.exit(1)
}

const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
})

async function initDatabase() {
  try {
    console.log('🚀 Initializing database tables...')
    
    // Create newsletter_subscribers table
    await client.execute(`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        city TEXT NOT NULL,
        subscribed_at TEXT DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
        status TEXT DEFAULT 'active' NOT NULL CHECK (status IN ('active', 'unsubscribed')),
        source TEXT DEFAULT 'popup' NOT NULL CHECK (source IN ('popup', 'footer'))
      )
    `)
    console.log('✅ Created newsletter_subscribers table')
    
    // Create contact_submissions table  
    await client.execute(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        submitted_at TEXT DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
        status TEXT DEFAULT 'new' NOT NULL CHECK (status IN ('new', 'read', 'responded', 'archived')),
        ip_address TEXT,
        user_agent TEXT
      )
    `)
    console.log('✅ Created contact_submissions table')
    
    // Create pending_newsletter_emails table
    await client.execute(`
      CREATE TABLE IF NOT EXISTS pending_newsletter_emails (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        created_at TEXT DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
        converted INTEGER DEFAULT 0 NOT NULL
      )
    `)
    console.log('✅ Created pending_newsletter_emails table')

    // Create blogs table
    await client.execute(`
      CREATE TABLE IF NOT EXISTS blogs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        excerpt TEXT,
        content TEXT NOT NULL,
        content_format TEXT DEFAULT 'markdown',
        featured_image TEXT,
        featured INTEGER DEFAULT 0 NOT NULL,
        author TEXT NOT NULL DEFAULT 'Admin',
        category TEXT,
        tags TEXT,
        status TEXT DEFAULT 'draft' NOT NULL CHECK (status IN ('draft','published')),
        published_date TEXT,
        created_at TEXT DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
        updated_at TEXT DEFAULT (CURRENT_TIMESTAMP) NOT NULL
      )
    `)
    console.log('✅ Created blogs table')

    // Create indexes for blogs table
    await client.execute(`
      CREATE INDEX IF NOT EXISTS idx_blogs_slug
      ON blogs(slug)
    `)

    await client.execute(`
      CREATE INDEX IF NOT EXISTS idx_blogs_status
      ON blogs(status)
    `)

    await client.execute(`
      CREATE INDEX IF NOT EXISTS idx_blogs_published_date
      ON blogs(published_date)
    `)
    console.log('✅ Created blogs table indexes')

    // Ensure content_format exists on existing deployments
    const pragma = await client.execute(`PRAGMA table_info(blogs)`)
    const hasContentFormat = Array.isArray(pragma.rows)
      && pragma.rows.some((r: any) => (r.name || r['name']) === 'content_format')
    if (!hasContentFormat) {
      await client.execute(`ALTER TABLE blogs ADD COLUMN content_format TEXT DEFAULT 'markdown'`)
      console.log('🔧 Added content_format column to blogs')
    }

    // Create indexes for better query performance
    await client.execute(`
      CREATE INDEX IF NOT EXISTS idx_newsletter_email 
      ON newsletter_subscribers(email)
    `)
    
    await client.execute(`
      CREATE INDEX IF NOT EXISTS idx_newsletter_status 
      ON newsletter_subscribers(status)
    `)
    
    await client.execute(`
      CREATE INDEX IF NOT EXISTS idx_contact_status 
      ON contact_submissions(status)
    `)
    
    await client.execute(`
      CREATE INDEX IF NOT EXISTS idx_pending_email 
      ON pending_newsletter_emails(email)
    `)
    console.log('✅ Created database indexes')
    
    console.log('🎉 Database initialization completed successfully!')
    
  } catch (error) {
    console.error('❌ Error initializing database:', error)
    process.exit(1)
  }
}

// Run the initialization
initDatabase()
  .then(() => {
    console.log('✨ Database is ready to use!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Fatal error:', error)
    process.exit(1)
  })