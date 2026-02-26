import type { ComponentPropsWithoutRef } from 'react'

export const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<'h1'>): React.ReactElement => (
    <h1
      className="mt-10 mb-4 font-heading text-3xl font-bold"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<'h2'>): React.ReactElement => (
    <h2
      className="mt-8 mb-3 font-heading text-2xl font-semibold"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<'h3'>): React.ReactElement => (
    <h3
      className="mt-6 mb-2 font-heading text-xl font-semibold"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<'p'>): React.ReactElement => (
    <p className="mb-4 leading-relaxed" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<'a'>): React.ReactElement => (
    <a
      className="text-accent underline underline-offset-4 transition-colors hover:text-accent-hover"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<'ul'>): React.ReactElement => (
    <ul className="mb-4 list-disc space-y-1 pl-6" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<'ol'>): React.ReactElement => (
    <ol className="mb-4 list-decimal space-y-1 pl-6" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<'li'>): React.ReactElement => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>): React.ReactElement => (
    <blockquote
      className="my-4 border-l-2 border-accent pl-4 italic text-text-muted"
      {...props}
    />
  ),
  hr: (props: ComponentPropsWithoutRef<'hr'>): React.ReactElement => (
    <hr className="my-8 border-border" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<'code'>): React.ReactElement => {
    const isInline = !props.className?.includes('language-')
    if (isInline) {
      return (
        <code
          className="rounded bg-surface px-1.5 py-0.5 text-sm"
          {...props}
        />
      )
    }
    return <code {...props} />
  },
}
