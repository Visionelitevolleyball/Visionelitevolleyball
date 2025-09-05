# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Volleyball Fraser Valley** - A Next.js volleyball training platform website for Fraser Valley region, affiliated with VISION Elite Academy.

## Essential Commands

Always use `bun` for all commands (not npm, yarn, or pnpm):

```bash
# Development
bun run dev         # Start development server with Turbopack at localhost:3000

# Build & Production
bun run build       # Build for production with Turbopack
bun run start       # Start production server

# Code Quality
bun run lint        # Run ESLint

# Package Management
bun install         # Install dependencies
bun add <package>   # Add new dependency
```

## Architecture & Structure

### Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with custom color system (oklch colors)
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Package Manager**: Bun

### Key Design System Colors

- **Primary**: #ECBA58 (yellow from logo) - `oklch(0.82 0.12 85)`
- **Secondary**: #2D348E (dark blue from logo) - `oklch(0.35 0.15 265)`

### Component Architecture

#### Navbar (`/app/components/shared/navbar.tsx`)

Two-tier professional navbar design with:

- Desktop: Logo spans both levels vertically on left, navigation spread across bottom tier
- Mobile: Responsive with slide-out menu (Sheet component)
- Phone: 403-510-1784 (important - used throughout site)

Key implementation details:

- Logo sizes: Desktop 260x85, Mobile 180x50
- Desktop uses `pt-28` (7rem), Mobile uses `pt-16` (4rem) for content offset
- Navigation items with dropdown submenus using NavigationMenu component

### Layout Considerations

- Main content wrapped in `<main className="pt-16 lg:pt-28">` to account for fixed navbar
- Page heights use `h-[calc(100vh-4rem)] lg:h-[calc(100vh-7rem)]` to prevent scroll

### Project Documentation

Located in `/project-docs/`:

- `project-overview.md` - Vision, objectives, target audiences
- `programs.md` - All volleyball programs (Camps, Day Camps, Premier League, Club)
- `testimonials.md` - Parent, athlete, and coach testimonials
- `site-structure.md` - Navigation hierarchy
- `content-messaging.md` - Hero taglines and key messaging

## Important Context

### Business Requirements

- Primary audience: Parents looking for youth volleyball programs (grades 3-9)
- Programs range from beginner to university prep
- All coaches must complete VEA Coaching Academy
- Site should resemble Volleyball Calgary in functionality

### Current Implementation Status

- ✅ Two-tier navbar with responsive mobile design
- ✅ Professional color scheme matching brand
- ✅ Basic routing structure defined
- ⏳ Program pages need implementation
- ⏳ Registration/enrollment system TBD
- ⏳ Payment processing TBD

### Navigation Structure

```
Home
Programs (dropdown)
  - Program Overview
  - Summer Camps
  - Coach Bios
  - Reviews
Club
Leagues
Resources (dropdown)
  - Training Videos
  - Parent Guide
  - FAQ
Contact Us (dropdown)
  - About Us
  - Get in Touch
  - Location
  - Join Our Team
Testimonials
Blog
```

## Development Patterns

### Component Creation

- Place shared components in `/app/components/shared/`
- Use shadcn/ui components from `/components/ui/`
- Follow existing patterns for responsive design (hidden/block with lg: breakpoint)

### Styling Approach

- Use Tailwind classes directly
- Responsive design: mobile-first with lg: breakpoint for desktop
- Use `cn()` utility for conditional classes
- Colors use oklch color space for consistency

## Git Commit & PR Guidelines

### Branch Strategy

- **Always work in development branch** - never commit directly to main
- Create PR from development to main when ready
- Switch to development: `git checkout development`

### Commit Message Rules

- **Always lowercase** - no capital/uppercase letters
- **One-liner only** - no descriptions or multi-line commits
- **Always use prefix** - specify the type of change
- **Never mention Claude** - avoid any AI assistant references

### Commit Prefixes

```bash
feat: implement user authentication
fix: resolve navbar alignment issue
refactor: optimize image loading
style: update button hover states
chore: update dependencies
docs: add api documentation
test: add unit tests for navbar
perf: improve build performance
```

### Pull Request Rules

- Same format as commits - lowercase, one-liner with prefix
- No PR descriptions needed
- Example: `feat: add volleyball program registration flow`
