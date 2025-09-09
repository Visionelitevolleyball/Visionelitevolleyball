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