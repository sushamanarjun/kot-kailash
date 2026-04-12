import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Founders from '@/components/sections/Founders';
import Testimonials from '@/components/sections/Testimonials';

export const metadata: Metadata = buildMetadata({
  title: 'The Founders · Kot Kailash Kumaon',
  description:
    'Kot Kailash was founded by Pushkar Singh Negi, formerly of The Manor New Delhi and The Kumaon at Mungling. A property built by people who know the ridge.',
  path: '/founders',
  keywords: [
    'Pushkar Singh Negi',
    'Kot Kailash founders',
    'heritage hospitality Kumaon',
    'The Manor New Delhi',
    'The Kumaon Mungling',
  ],
});

export default function FoundersPage() {
  return (
    <>
      <section
        style={{
          background: 'var(--parchment)',
          padding: '160px 64px 80px',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '8px',
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            display: 'block',
            marginBottom: '20px',
          }}
        >
          The Founders
        </span>
        <h1
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--ink)',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          Built by people
          <br />
          <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>
            who know the ridge.
          </em>
        </h1>
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '1rem',
            fontStyle: 'italic',
            color: 'var(--ink-soft)',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}
        >
          Kot Kailash was founded by two veterans of India&apos;s finest
          hospitality. They returned to Kumaon to build the kind of property
          they had always wanted to stay in.
        </p>
      </section>

      <Founders />
      <Testimonials />
    </>
  );
}
