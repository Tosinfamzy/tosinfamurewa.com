import { SocialLinks } from '@/components/social-links'
import { InterestsSection } from '@/components/interests-section'
import { SITE_CONFIG } from '@/data/site'

export default function HomePage(): React.ReactElement {
  return (
    <div className="mx-auto max-w-2xl space-y-16 px-6 py-16">
      <section className="space-y-4">
        <h1 className="font-heading text-4xl font-bold tracking-tight">
          {SITE_CONFIG.name}
        </h1>
        <p className="text-xl text-text-muted">
          {SITE_CONFIG.title}
        </p>
        <p className="text-lg leading-relaxed">
          {SITE_CONFIG.description}
        </p>
        <SocialLinks className="pt-2" />
      </section>

      <InterestsSection />
    </div>
  )
}
