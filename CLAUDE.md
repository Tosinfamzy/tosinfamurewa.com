# CLAUDE.md — tosinfamurewa.com

## Project Overview

Personal website for Oluwatosin Famurewa. Next.js 15 (App Router) + Tailwind CSS v4 + MDX via Velite. Deployed on Vercel.

## Tech Stack

- **Framework**: Next.js 15, App Router
- **Styling**: Tailwind CSS v4, CSS custom properties for theming
- **Content**: Velite + MDX for blog posts
- **Syntax highlighting**: rehype-pretty-code (Shiki), build-time
- **Theme**: next-themes, dark mode default
- **Fonts**: Bricolage Grotesque (headings), Inter (body) via next/font

## File Structure

```
src/app/          → Pages and layouts (App Router)
src/components/   → Reusable UI components
src/data/         → Static data (site config, interests)
src/lib/          → Utility functions
content/writing/  → MDX blog posts
```

## Coding Principles

Follow SOLID, DRY, KISS, YAGNI. See CODING_STANDARDS.md for full details.

### Key Rules

- **Server Components by default.** Only add `'use client'` when using hooks, browser APIs, or event handlers.
- **No `any`.** Use `unknown` + type narrowing when type is genuinely unknown.
- **Explicit return types** on all exported functions.
- **Prefer `interface`** for object shapes, `type` for unions/intersections.
- **Named exports only** for components. No default exports.
- **Props interfaces co-located** with their component, named `{ComponentName}Props`.
- **Composition over configuration.** Pass children, not render props.
- **Data fetching at the page level**, passed down as props.
- **Prefer static generation.** Use `generateStaticParams` for dynamic routes.

### Naming Conventions

- Files: `kebab-case.tsx` (e.g., `theme-toggle.tsx`)
- Components: `PascalCase` (e.g., `ThemeToggle`)
- Functions/variables: `camelCase`
- Constants: `UPPER_SNAKE_CASE`
- Types/interfaces: `PascalCase`

### Import Order

1. React / Next.js imports
2. External library imports
3. Internal absolute imports (`@/`)
4. Relative imports
5. Type-only imports

### Do NOT

- Add barrel exports (`index.ts` re-exporting everything)
- Use default exports for components
- Use inline styles — use Tailwind classes or CSS variables
- Add features not in the current plan
- Over-abstract — prefer 3 similar lines over 1 premature helper
- Skip TypeScript strict mode checks
- Use `any` type
