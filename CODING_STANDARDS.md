# Coding Standards — tosinfamurewa.com

## Core Principles

### SOLID

**Single Responsibility (SRP)**
Each component and function does one thing. Components either render UI or manage state, not both. Utility functions are pure — given the same input, they return the same output with no side effects.

- A `PostCard` renders a single post preview. It does not fetch data.
- A page component (`page.tsx`) fetches/queries data and passes it to presentational components.
- Utility functions like `formatDate` live in `src/lib/` and have no dependencies on React.

**Open/Closed (OCP)**
Components are extensible through props and composition, not modification. The MDX component override system is a direct application: swap how headings or code blocks render without changing the content pipeline.

- Extend behaviour by adding optional props, not by modifying existing logic.
- Use composition (`children`, slots) to vary content without changing the container.

**Liskov Substitution (LSP)**
Components sharing an interface are interchangeable. If two components accept the same props shape, either can be used in place of the other without breaking the parent.

**Interface Segregation (ISP)**
Props interfaces are minimal. Pass only what a component needs — not an entire object when it only uses one field.

```typescript
// Prefer
interface PostCardProps {
  title: string
  date: string
  description: string
  permalink: string
}

// Avoid
interface PostCardProps {
  post: Post // passes everything when only 4 fields are used
}
```

**Dependency Inversion (DIP)**
Components depend on data interfaces (`Interest`, `Post`), not on concrete data sources. The data layer (`src/data/`, Velite collections) can change without touching UI components.

### DRY (Don't Repeat Yourself)

- Shared utilities live in `src/lib/`.
- Shared data lives in `src/data/`.
- Shared layout structure lives in `layout.tsx`.
- **But**: prefer duplication over the wrong abstraction. If two pieces of code look similar but serve different purposes or are likely to diverge, keep them separate.

### KISS (Keep It Simple, Stupid)

- No abstractions until the third repetition.
- Three similar lines of code are better than one premature helper function.
- Favour readable code over clever code.

### YAGNI (You Ain't Gonna Need It)

- Only build what the current plan specifies.
- No "just in case" features, no speculative abstractions.
- If a feature might be needed later, leave a comment — don't build it now.

---

## TypeScript Standards

### Strict Mode
`strict: true` in `tsconfig.json`. No exceptions.

### No `any`
Never use `any`. Use `unknown` with type narrowing when the type is genuinely unknown at compile time.

```typescript
// Correct
function parseResponse(data: unknown): Post {
  if (isPost(data)) return data
  throw new Error('Invalid post data')
}

// Incorrect
function parseResponse(data: any): Post {
  return data as Post
}
```

### Return Types
Explicit return types on all exported functions. This catches accidental type changes and serves as documentation.

```typescript
// Correct
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
```

### Interface vs Type
- `interface` for object shapes (component props, data models).
- `type` for unions, intersections, mapped types, and utility types.

```typescript
interface PostCardProps {
  title: string
  date: string
}

type Theme = 'light' | 'dark'
type WithClassName<T> = T & { className?: string }
```

### Const Assertions
Use `as const` for literal types and exhaustive checks.

```typescript
const SOCIAL_PLATFORMS = ['github', 'linkedin', 'email'] as const
type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number]
```

### `satisfies` Operator
Use `satisfies` to validate object literals against a type while preserving the narrower inferred type.

```typescript
const siteConfig = {
  name: 'Oluwatosin Famurewa',
  title: 'Senior Software Engineer',
} satisfies SiteConfig
```

---

## React / Next.js Patterns

### Server Components by Default
Every component is a React Server Component unless it needs:
- React hooks (`useState`, `useEffect`, `useContext`, etc.)
- Browser APIs (`window`, `document`, `localStorage`)
- Event handlers (`onClick`, `onChange`, etc.)

Only then add `'use client'` at the top of the file.

### Component Structure
Props interface and component in the same file. Named export only.

```typescript
interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps): React.ReactElement {
  return (
    <header className={className}>
      {/* ... */}
    </header>
  )
}
```

### Composition Over Configuration
Pass children and use slots instead of complex prop APIs.

```typescript
// Prefer
<Card>
  <CardTitle>My Title</CardTitle>
  <CardBody>Content here</CardBody>
</Card>

// Avoid
<Card title="My Title" body="Content here" titleClassName="..." />
```

### Data Fetching
Fetch or query data at the page level (`page.tsx`), pass results to components as props. Components should not know where data comes from.

### Static Generation
Use `generateStaticParams` for all dynamic routes. Set `dynamicParams = false` to return 404 for unknown paths rather than attempting server-side rendering.

---

## File & Naming Conventions

| Item | Convention | Example |
|------|-----------|---------|
| Files | `kebab-case.tsx` | `theme-toggle.tsx` |
| Components | `PascalCase` | `ThemeToggle` |
| Functions | `camelCase` | `formatDate` |
| Variables | `camelCase` | `sortedPosts` |
| Constants | `UPPER_SNAKE_CASE` | `SOCIAL_PLATFORMS` |
| Types / Interfaces | `PascalCase` | `PostCardProps` |
| CSS variables | `--kebab-case` | `--color-accent` |

### Import Order

Imports are grouped in this order, separated by blank lines:

1. React / Next.js (`react`, `next/*`)
2. External libraries (`next-themes`, `velite`, etc.)
3. Internal absolute imports (`@/components/*`, `@/lib/*`)
4. Relative imports (`./`, `../`)
5. Type-only imports (`import type { ... }`)

---

## What We Don't Do

- **No barrel exports**: don't create `index.ts` files that re-export from a directory.
- **No default exports for components**: always use named exports.
- **No inline styles**: use Tailwind classes or CSS custom properties.
- **No `React.FC`**: use plain function declarations with typed props.
- **No unnecessary `useEffect`**: if it can be computed during render, compute it during render.
- **No premature optimisation**: don't `useMemo`/`useCallback` unless profiling shows a bottleneck.
- **No god components**: if a component exceeds ~100 lines, consider splitting it.
