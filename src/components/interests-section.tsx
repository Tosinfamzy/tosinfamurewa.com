import { INTERESTS } from '@/data/interests'

import type { Interest } from '@/data/interests'

export function InterestsSection(): React.ReactElement {
  return (
    <section>
      <h2 className="mb-6 font-heading text-xl font-semibold">
        What I&apos;m working on
      </h2>
      <div className="space-y-4">
        {INTERESTS.map((interest) => (
          <InterestCard key={interest.title} interest={interest} />
        ))}
      </div>
    </section>
  )
}

interface InterestCardProps {
  interest: Interest
}

function InterestCard({ interest }: InterestCardProps): React.ReactElement {
  const content = (
    <div className="rounded-lg border border-border p-4 transition-colors hover:border-accent/40 hover:bg-surface">
      <h3 className="font-heading font-medium">{interest.title}</h3>
      <p className="mt-1 text-sm text-text-muted">
        {interest.description}
      </p>
    </div>
  )

  if (interest.link) {
    return (
      <a
        href={interest.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    )
  }

  return content
}
