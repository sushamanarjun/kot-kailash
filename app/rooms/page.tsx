import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Rooms from '@/components/sections/Rooms';
import Reserve from '@/components/sections/Reserve';

export const metadata: Metadata = buildMetadata({
  title: 'Rooms & Suites · Kot Kailash Kumaon',
  description:
    'Eight keys across three houses at 7,800 feet. Kumaon Vann, The Family Suite, Kutir Suites, Kumaoni Suites, and Full Property Buyout. All fully inclusive.',
  path: '/rooms',
  keywords: [
    'Kot Kailash rooms',
    'Kumaon Vann cottage',
    'heritage suites Almora',
    'boutique hotel rooms Uttarakhand',
    'full property buyout Kumaon',
  ],
});

export default function RoomsPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        style={{
          background: 'var(--forest-deep)',
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
          The Stay
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
          Eight keys.
          <br />
          Three houses.
          <br />
          <em style={{ fontStyle: 'normal', color: 'var(--gold-pale)' }}>
            One ridge.
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
          All stays are fully inclusive. Meals, experiences, and in-house
          activities. No extras menu. No hidden charges.
        </p>
      </section>

      {/* Rooms with Rates */}
      <Rooms showRates={true} />
      <Reserve />
    </>
  );
}
