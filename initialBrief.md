# Project Brief: tosinfamurewa.com

## Overview

Build a minimal personal site for tosinfamurewa.com — a landing page + technical blog. This is for a Senior/Staff Software Engineer job search (September 2026). The site should be clean, fast, and easy to
maintain.

## Tech Stack

- **Framework**: Astro (static site generator — fast, simple, markdown-native)
- **Styling**: Tailwind CSS
- **Content**: MDX for blog posts (write in markdown, embed components if needed)
- **Hosting**: Vercel or Cloudflare Pages (free tier, auto-deploy from GitHub)
- **Domain**: tosinfamurewa.com (already owned)

## Pages

### 1. Home (`/`)

- Name: Oluwatosin Famurewa
- Title: Senior Software Engineer
- Short bio (2-3 lines): Python/TypeScript engineer focused on distributed systems, observability, and platform reliability. Currently building CRM integration infrastructure at Sophie Datagen.
- Links: GitHub (Tosinfamzy), LinkedIn, Email
- Link to blog/writing section
- Dark/light mode toggle
- No headshot needed. Keep it typographic and clean.

### 2. Blog index (`/writing`)

- Simple list of posts, title + date + one-line description
- Sorted newest first
- No tags, categories, or pagination needed initially

### 3. Blog post template (`/writing/[slug]`)

- MDX-rendered content
- Title, date, estimated reading time
- Clean typography optimised for long-form technical writing
- Syntax highlighting for code blocks (Python, TypeScript, YAML, HCL)
- No comments section. No share buttons.

## Design Principles

- Minimal. No animations, no hero images, no gradients.
- Fast. Target 100 Lighthouse performance score.
- Mobile responsive.
- Monospace or clean sans-serif font (Inter or JetBrains Mono).
- Dark mode default, light mode option.
- Inspired by: https://leerob.io, https://rauchg.com — simple developer sites.

## Project Structure

src/
pages/
index.astro
writing/
index.astro
[slug].astro
content/
writing/
placeholder-first-post.mdx
layouts/
BaseLayout.astro
PostLayout.astro
components/
Header.astro
ThemeToggle.astro
Footer.astro

## Content — Placeholder First Post

Create one placeholder post titled "Coming Soon" so the blog isn't empty. I'll replace it with real content later. Planned topics:

- Implementing OpenTelemetry in an async Python service
- Defining SLIs/SLOs for a background processing service
- Migrating from loguru to structlog
- Designing retry and DLQ handling for Pub/Sub

## What NOT to do

- No CMS, no database, no authentication
- No project portfolio section (GitHub covers that)
- No contact form
- No analytics initially
- No over-engineering — this should take one session to scaffold
