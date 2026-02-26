import { SocialLinks } from './social-links'

export function Footer(): React.ReactElement {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-8">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Oluwatosin Famurewa
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
