import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

// Newsletter Subscribers Table
export const newsletterSubscribers = sqliteTable('newsletter_subscribers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  city: text('city').notNull(),
  subscribedAt: text('subscribed_at')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  status: text('status', { enum: ['active', 'unsubscribed'] })
    .default('active')
    .notNull(),
  source: text('source', { enum: ['popup', 'footer'] })
    .default('popup')
    .notNull(),
})

export type InsertNewsletterSubscriber = typeof newsletterSubscribers.$inferInsert
export type SelectNewsletterSubscriber = typeof newsletterSubscribers.$inferSelect

// Contact Form Submissions Table
export const contactSubmissions = sqliteTable('contact_submissions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
  submittedAt: text('submitted_at')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  status: text('status', { enum: ['new', 'read', 'responded', 'archived'] })
    .default('new')
    .notNull(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
})

export type InsertContactSubmission = typeof contactSubmissions.$inferInsert
export type SelectContactSubmission = typeof contactSubmissions.$inferSelect

// Temporary Email Storage for Footer Newsletter
// This stores emails from footer until full info is collected
export const pendingNewsletterEmails = sqliteTable('pending_newsletter_emails', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  createdAt: text('created_at')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  converted: integer('converted', { mode: 'boolean' }).default(false).notNull(),
})

export type InsertPendingNewsletterEmail = typeof pendingNewsletterEmails.$inferInsert
export type SelectPendingNewsletterEmail = typeof pendingNewsletterEmails.$inferSelect

// Blogs Table
// Stored in SQLite (Turso) using Drizzle ORM
// Note: tags are persisted as a comma-separated string for simplicity
export const blogs = sqliteTable('blogs', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  excerpt: text('excerpt'),
  content: text('content').notNull(),
  contentFormat: text('content_format').default('markdown'),
  featuredImage: text('featured_image'),
  featured: integer('featured', { mode: 'boolean' }).default(false).notNull(),
  author: text('author').notNull().default('Admin'),
  category: text('category'),
  tags: text('tags'), // comma-separated values
  status: text('status', { enum: ['draft', 'published'] }).notNull().default('draft'),
  publishedDate: text('published_date'),
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`).notNull(),
  updatedAt: text('updated_at').default(sql`(CURRENT_TIMESTAMP)`).notNull(),
})

export type InsertBlog = typeof blogs.$inferInsert
export type SelectBlog = typeof blogs.$inferSelect