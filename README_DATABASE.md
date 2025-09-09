# Database Setup Guide

This project uses Turso (SQLite) for database management with Drizzle ORM.

## Environment Variables

The following environment variables are already configured in `.env.local`:
- `TURSO_DATABASE_URL` - Your Turso database URL
- `TURSO_AUTH_TOKEN` - Your Turso authentication token

## Database Commands

```bash
# Initialize database tables (run this first!)
bun run db:init

# Generate migrations from schema changes
bun run db:generate

# Push schema changes to database
bun run db:push

# Open Drizzle Studio (database GUI)
bun run db:studio
```

## Database Schema

The database includes three main tables:

### 1. newsletter_subscribers
- Stores newsletter subscriptions with name, email, and city
- Tracks subscription status (active/unsubscribed)
- Records source (popup/footer)

### 2. contact_submissions
- Stores contact form submissions
- Includes name, email, and message
- Tracks submission status (new/read/responded/archived)

### 3. pending_newsletter_emails
- Temporarily stores emails from footer newsletter
- Triggers popup to collect additional info (name, city)
- Tracks conversion status

## API Endpoints

### Newsletter API
- **POST /api/newsletter** - Subscribe to newsletter
  - Body: `{ email, name?, city?, source? }`
  - If only email provided, opens popup for additional info
  
### Contact API
- **POST /api/contact** - Submit contact form
  - Body: `{ name, email, message }`

## Frontend Integration

### Newsletter Popup
- Auto-opens on homepage after 10 seconds
- Can be triggered manually from footer with email pre-filled
- Collects: Name, Email, City (dropdown)

### Contact Form
- Located at `/contact/get-in-touch`
- Submits to `/api/contact`

### Footer Newsletter
- Email-only submission
- Triggers popup for name and city collection

## Development Workflow

1. Make schema changes in `/src/db/schema.ts`
2. Run `bun run db:generate` to create migrations
3. Run `bun run db:push` to apply changes
4. Test with `bun run db:studio` to view data

## Troubleshooting

If you encounter database errors:
1. Check `.env.local` has correct credentials
2. Run `bun run db:init` to ensure tables exist
3. Use `bun run db:studio` to inspect data
4. Check API logs in browser console for errors