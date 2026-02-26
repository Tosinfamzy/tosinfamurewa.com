export interface Interest {
  title: string
  description: string
  link?: string
  type: 'project' | 'interest' | 'now'
}

export const INTERESTS: Interest[] = [
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
