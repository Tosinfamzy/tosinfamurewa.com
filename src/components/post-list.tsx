import Link from 'next/link'

import { formatDate } from '@/lib/utils'

interface PostListProps {
  posts: {
    title: string
    date: string
    description: string
    permalink: string
  }[]
}

export function PostList({ posts }: PostListProps): React.ReactElement {
  if (posts.length === 0) {
    return (
      <p className="text-text-muted">No posts yet. Check back soon.</p>
    )
  }

  return (
    <ul className="space-y-6">
      {posts.map((post) => (
        <li key={post.permalink}>
          <Link
            href={post.permalink}
            className="group block rounded-lg p-4 -mx-4 transition-colors hover:bg-surface"
          >
            <h2 className="font-heading font-medium group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <p className="mt-1 text-sm text-text-muted">
              {post.description}
            </p>
            <time
              dateTime={post.date}
              className="mt-2 block text-xs text-text-muted"
            >
              {formatDate(post.date)}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  )
}
