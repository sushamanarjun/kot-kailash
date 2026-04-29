import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Experiences from '@/components/sections/Experiences';
import SacredArc from '@/components/sections/SacredArc';
import Journey from '@/components/sections/Journey';

export const metadata: Metadata = buildMetadata({
  title: 'Experiences · Kot Kailash Kumaon',
  description:
    'Six curated experiences at Kot Kailash: Vriddh Jageshwar walk, Jageshwar Dham, Kumaoni kitchen, ridge picnic, Kasar Devi, and forest walks. Plus five sacred sites within 80km.',
  path: '/experiences',
  keywords: [
    'Jageshwar temple stay',
    'Kumaon experiences',
    'heritage walk Almora',
    'ridge picnic Uttarakhand',
    'Kasar Devi visit',
    'Kumaoni village experience',
  ],
});

export default function ExperiencesPage() {
  return (
    <>
      <section
        style={{
          background: 'var(--ink)',
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
          Experiences
        </span>
        <h1
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'white',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          Several ways to know
          <br />
          <em style={{ fontStyle: 'normal', color: 'var(--gold-pale)' }}>
            the ridge.
          </em>
        </h1>
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '1rem',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.4)',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}
        >
          All experiences are included in the room rate. No booking required.
          No programme. A conversation with your host.
        </p>
      </section>

      <Experiences />
      <SacredArc />
      <Journey />
    </>
  );
}
