import Link from 'next/link'

export default function NotFound(): React.ReactElement {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-6 py-32 text-center">
      <h1 className="font-heading text-4xl font-bold">404</h1>
      <p className="mt-4 text-text-muted">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 text-accent underline underline-offset-4 transition-colors hover:text-accent-hover"
      >
        Go home
      </Link>
    </div>
  )
}
