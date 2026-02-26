import { posts } from '#site/content'

import { PostList } from '@/components/post-list'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Technical writing on distributed systems, observability, and platform engineering.',
}

export default function WritingPage(): React.ReactElement {
  const sortedPosts = posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-10 font-heading text-3xl font-bold">Writing</h1>
      <PostList posts={sortedPosts} />
    </div>
  )
}
