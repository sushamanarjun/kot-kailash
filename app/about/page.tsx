import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Founders from '@/components/sections/Founders';
import Sustainability from '@/components/sections/Sustainability';
import Reserve from '@/components/sections/Reserve';
import RevealWrapper from '@/components/ui/RevealWrapper';

export const metadata: Metadata = buildMetadata({
  title: 'Our Story | Kot Kailash — Heritage Retreat, Kumaon',
  description:
    'The story of Kot Kailash — a century-old Kumaoni home on the Shaukiyathal ridge restored by Pushkar Singh Negi and Aishwarya Negi. The Shauk community, the ridge, and the restoration.',
  path: '/about',
  keywords: [
    'Kot Kailash story',
    'Pushkar Singh Negi',
    'Kumaoni heritage restoration',
    'Shaukiyathal history',
    'heritage hotel founders',
  ],
});

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--forest-deep)',
          padding: '160px 64px 80px',
        }}
      >
        <h1 className="sr-only">
          Our Story — Kot Kailash Heritage Retreat, Kumaon
        </h1>
        <div style={{ maxWidth: '640px' }}>
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              display: 'block',
              marginBottom: '20px',
            }}
          >
            Our Story
          </span>
          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            Not a hotel.
            <br />
            <em style={{ fontStyle: 'normal', color: 'var(--gold-pale)' }}>
              Not a homestay.
            </em>
          </h2>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.85,
              maxWidth: '480px',
            }}
          >
            A Kumaoni heritage home restored without apology to its origins.
            Hand-pressed mud plaster walls. Oak and rhododendron forest. Air
            that runs between AQI 9 and 25, year-round.
          </p>
        </div>
      </section>

      {/* Property history */}
      <section
        style={{
          background: 'var(--cream)',
          padding: '100px 64px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}
        className="manifesto-grid"
      >
        <RevealWrapper>
          <div className="eyebrow">The History</div>
          <h3
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2rem, 3vw, 2.8rem)',
              fontWeight: 300,
              color: 'var(--ink)',
              lineHeight: 1.15,
              marginBottom: '28px',
            }}
          >
            A century on the ridge.
          </h3>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.02rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.9,
            }}
          >
            <p>
              Kot Kailash occupies the Shaukiyathal ridge in the Almora
              district of Uttarakhand at 7,800 feet. The main house is over a
              century old — built by the Negi family of the Shauk community,
              one of the original Himalayan trading communities whose routes
              connected the Gangetic plains to Tibet.
            </p>
            <p style={{ marginTop: '18px' }}>
              The property passed through generations before Pushkar Singh Negi
              and Aishwarya Negi decided to restore it — not renovate, restore.
              The mud plaster was re-pressed by the same craftsmen who maintain
              the older structures of the village. The stone was sourced from
              the ridge itself.
            </p>
            <p style={{ marginTop: '18px' }}>
              What exists now is not a simulation of Kumaoni heritage — it is
              Kumaoni heritage, inhabited by people who know the difference.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={2}>
          <div className="eyebrow">The Community</div>
          <h3
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2rem, 3vw, 2.8rem)',
              fontWeight: 300,
              color: 'var(--ink)',
              lineHeight: 1.15,
              marginBottom: '28px',
            }}
          >
            The Shauk of Shaukiyathal.
          </h3>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.02rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.9,
            }}
          >
            <p>
              The village of Shaukiyathal takes its name from the Shauk
              community — the highland traders who historically moved between
              the Himalayan valleys and the Tibetan plateau. The name means,
              approximately, &ldquo;the place of the Shauks.&rdquo;
            </p>
            <p style={{ marginTop: '18px' }}>
              The community today maintains its agricultural traditions — the
              mandua fields, the bhatt cultivation, the seasonal festivals that
              structure the Kumaoni year. Kot Kailash is not separate from this
              village. It is part of it. The food that Tehni serves comes from
              it. The people who work here come from it.
            </p>
          </div>
        </RevealWrapper>
      </section>

      {/* Pull quote */}
      <section
        style={{
          background: 'var(--ink)',
          padding: '80px 64px',
          textAlign: 'center',
        }}
      >
        <RevealWrapper>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            &ldquo;The best travel leaves you quieter than it found you.&rdquo;
          </p>
        </RevealWrapper>
      </section>

      <Founders />
      <Sustainability />
      <Reserve />
    </>
  );
}
