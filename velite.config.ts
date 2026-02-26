import rehypePrettyCode from 'rehype-pretty-code'
import { defineCollection, defineConfig, s } from 'velite'

const posts = defineCollection({
  name: 'Post',
  pattern: 'writing/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(120),
      slug: s.slug('post'),
      date: s.isodate(),
      description: s.string().max(300),
      published: s.boolean().default(true),
      body: s.mdx(),
      metadata: s.metadata(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/writing/${data.slug}`,
      readingTime: Math.ceil((data.metadata?.wordCount ?? 0) / 225),
    })),
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'github-dark-dimmed',
            light: 'github-light',
          },
          keepBackground: false,
        },
      ],
    ],
  },
})
