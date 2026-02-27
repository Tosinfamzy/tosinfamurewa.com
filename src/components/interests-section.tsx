import { PROJECTS, PERSONAL_INTERESTS } from '@/data/interests'

import type { Interest } from '@/data/interests'

export function InterestsSection(): React.ReactElement {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="mb-6 font-heading text-xl font-semibold">
          What I&apos;m building
        </h2>
        <div className="space-y-4">
          {PROJECTS.map((project) => (
            <InterestCard key={project.title} interest={project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 font-heading text-xl font-semibold">
          When I&apos;m not coding
        </h2>
        <div className="flex flex-wrap gap-2">
          {PERSONAL_INTERESTS.map((interest) => (
            <InterestTag key={interest.title} interest={interest} />
          ))}
        </div>
      </section>
    </div>
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

interface InterestTagProps {
  interest: Interest
}

function InterestTag({ interest }: InterestTagProps): React.ReactElement {
  return (
    <span
      className="rounded-full border border-border px-3 py-1.5 text-sm transition-colors hover:border-accent/40 hover:bg-surface"
      title={interest.description}
    >
      {interest.title}
    </span>
  )
}
