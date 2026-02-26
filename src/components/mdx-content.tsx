'use client'

import * as runtime from 'react/jsx-runtime'

import { mdxComponents } from './mdx-components'

function useMDXComponent(code: string): React.ComponentType<{ components?: Record<string, React.ComponentType> }> {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXContentProps {
  code: string
}

export function MDXContent({ code }: MDXContentProps): React.ReactElement {
  const Component = useMDXComponent(code)
  return <Component components={mdxComponents} />
}
