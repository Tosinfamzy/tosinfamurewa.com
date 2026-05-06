import { posts } from '#site/content'

import { SITE_CONFIG } from '@/data/site'

import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedPosts = posts.filter((post) => post.published)

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_CONFIG.url,
      lastModified: new Date(),
    },
  ]

  if (publishedPosts.length > 0) {
    staticRoutes.push({
      url: `${SITE_CONFIG.url}/writing`,
      lastModified: new Date(),
    })
  }

  const postRoutes: MetadataRoute.Sitemap = publishedPosts.map((post) => ({
    url: `${SITE_CONFIG.url}${post.permalink}`,
    lastModified: new Date(post.date),
  }))

  return [...staticRoutes, ...postRoutes]
}
