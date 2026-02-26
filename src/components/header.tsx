import Link from 'next/link'

import { SITE_CONFIG } from '@/data/site'

import { ThemeToggle } from './theme-toggle'

export function Header(): React.ReactElement {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-heading text-sm font-semibold tracking-tight transition-colors hover:text-accent"
        >
          {SITE_CONFIG.name}
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/writing"
            className="text-sm text-text-muted transition-colors hover:text-text"
          >
            Writing
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
