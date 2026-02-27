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
      'Building a training decision engine for strength athletes',
    link: 'https://lifters-club.vercel.app',
    type: 'project',
  },
  {
    title: 'Games Night',
    description:
      'A real-time multiplayer games platform for casual play with friends',
    link: 'https://games-nightv2-ui.vercel.app',
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
