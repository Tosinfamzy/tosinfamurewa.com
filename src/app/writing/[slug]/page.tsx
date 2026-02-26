import { notFound } from 'next/navigation'

import { posts } from '#site/content'

import { MDXContent } from '@/components/mdx-content'
import { formatDate } from '@/lib/utils'

import type { Metadata } from 'next'

export const dynamicParams = false

export function generateStaticParams(): { slug: string }[] {
  return posts
    .filter((post) => post.published)
    .map((post) => ({ slug: post.slug }))
}

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
  }
}

export default async function PostPage({ params }: PostPageProps): Promise<React.ReactElement> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10 space-y-2">
        <h1 className="font-heading text-3xl font-bold">{post.title}</h1>
        <div className="flex gap-3 text-sm text-text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>&middot;</span>
          <span>{post.readingTime} min read</span>
        </div>
      </header>
      <div>
        <MDXContent code={post.body} />
      </div>
    </article>
  )
}
