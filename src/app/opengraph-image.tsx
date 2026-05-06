import { ImageResponse } from 'next/og'

import { SITE_CONFIG } from '@/data/site'

export const alt = `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage(): Response {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#0C0A09',
          color: '#FAFAF9',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 32,
            color: '#F59E0B',
            marginBottom: 32,
            letterSpacing: '0.02em',
          }}
        >
          tosinfamurewa.com
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          {SITE_CONFIG.name}
        </div>
        <div
          style={{
            fontSize: 44,
            color: '#A8A29E',
            marginTop: 24,
            fontWeight: 400,
          }}
        >
          {SITE_CONFIG.title}
        </div>
      </div>
    ),
    { ...size },
  )
}
