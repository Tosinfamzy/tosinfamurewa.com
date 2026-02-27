import Image from 'next/image'

import { SocialLinks } from '@/components/social-links'
import { InterestsSection } from '@/components/interests-section'
import { SITE_CONFIG } from '@/data/site'

export default function HomePage(): React.ReactElement {
  return (
    <div className="mx-auto max-w-2xl space-y-16 px-6 py-16">
      <section className="space-y-4">
        <div className="flex items-center gap-5">
          <Image
            src="/headshot.jpeg"
            alt={SITE_CONFIG.name}
            width={80}
            height={80}
            className="rounded-xl object-cover object-[center_20%]"
            priority
          />
          <div>
            <h1 className="font-heading text-3xl font-bold tracking-tight">
              {SITE_CONFIG.name}
            </h1>
            <p className="text-lg text-text-muted">
              {SITE_CONFIG.title}
            </p>
          </div>
        </div>
        <p className="text-lg leading-relaxed">
          {SITE_CONFIG.description}
        </p>
        <SocialLinks className="pt-2" />
      </section>

      <InterestsSection />
    </div>
  )
}
