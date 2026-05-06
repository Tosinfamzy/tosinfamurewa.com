export interface Interest {
  title: string
  description: string
  link?: string
  type: 'project' | 'interest'
}

export const PROJECTS: Interest[] = [
  {
    title: 'Lifters Club',
    description:
      'Not a workout tracker — a training decision engine. Takes your training history and produces seven kinds of next-week calls (load progression, deload, missed-session recovery) with auditable reasoning attached to each. Turborepo across a Hono API, a Next.js web app, and an Expo mobile client.',
    link: 'https://lifters-club.vercel.app',
    type: 'project',
  },
  {
    title: 'Games Night',
    description:
      'A real-time multiplayer party-games platform — the kind of thing you load on a TV when friends are over. NestJS + WebSockets backend, React/Vite SPA frontend.',
    link: 'https://games-nightv2-ui.vercel.app',
    type: 'project',
  },
  {
    title: 'Animeroll',
    description:
      'A personal anime watchlist that produces shareable, Letterboxd-style cards. Shares are immutable artifacts — a snapshot of cover, score, and status is frozen at link creation, so updating your rating later doesn\'t change what the recipient sees. Next.js 16, Drizzle on Turso (libSQL), Jikan for metadata.',
    link: 'https://animeroll-kappa.vercel.app',
    type: 'project',
  },
  {
    title: 'Pim Shop',
    description:
      'A single-product Stripe bookshop for Pim Wangtechawat\'s debut poetry collection — All These Poems Are About Love. Lives in a small monorepo with a shared brand package the upcoming author site will reuse.',
    link: 'https://shop.pimwangtechawat.com',
    type: 'project',
  },
]

export const PERSONAL_INTERESTS: Interest[] = [
  {
    title: 'Weightlifting',
    description: 'Strength training and powerlifting — the gym is the second office',
    type: 'interest',
  },
  {
    title: 'MMA & Muay Thai',
    description: 'Training and watching combat sports',
    type: 'interest',
  },
  {
    title: 'Anime',
    description: 'Always watching something new',
    type: 'interest',
  },
  {
    title: 'Gaming',
    description: 'From casual to competitive — always down for a session',
    type: 'interest',
  },
  {
    title: 'LOTR & Harry Potter',
    description: 'Fantasy worlds that never get old',
    type: 'interest',
  },
]
