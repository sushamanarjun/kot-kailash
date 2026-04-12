import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { rooms } from '@/lib/content/rooms';
import Reserve from '@/components/sections/Reserve';
import RevealWrapper from '@/components/ui/RevealWrapper';

const HOTEL_SPIDER_URL = 'https://reservations.hotel-spider.com/032644b5fbfafed6';

export const metadata: Metadata = buildMetadata({
  title: 'Rooms & Suites | Kot Kailash Heritage Retreat, Kumaon',
  description:
    'Three ways to stay at Kot Kailash — Kumaoni Suites in the heritage house, Kutir Suites with Machan loft, and Kumaon Vann forest cottage with Himalayan views.',
  path: '/stay',
  keywords: [
    'heritage suites Kumaon Uttarakhand',
    'Kumaoni Suites Almora',
    'Kutir Suites Machan loft',
    'Kumaon Vann forest cottage',
    'mountain stay Uttarakhand',
  ],
});

export default function StayPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--forest-deep)',
          padding: '160px 64px 80px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
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
          Heritage Suites & Forest Cottage
          <br />
          <em style={{ fontStyle: 'normal', color: 'var(--gold-pale)' }}>
            in Kumaon, Uttarakhand.
          </em>
        </h1>
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '1rem',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '480px',
            margin: '0 auto 36px',
            lineHeight: 1.8,
          }}
        >
          Eight keys across three houses at 7,800 feet. All stays fully
          inclusive — every meal, every experience.
        </p>
        <a
          href={HOTEL_SPIDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
        >
          Check Availability
        </a>
      </section>

      {/* Room Cards */}
      <section style={{ background: 'var(--parchment)', padding: '100px 64px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {rooms.map((room, i) => (
            <RevealWrapper key={room.id} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <article
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  background: 'var(--ink)',
                  overflow: 'hidden',
                  minHeight: '380px',
                }}
                className="stay-card"
              >
                <style>{`
                  .stay-card:hover .stay-card-img { transform: scale(1.04); }
                  .stay-card-img { transition: transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94); }
                  @media (max-width: 1100px) {
                    .stay-card { grid-template-columns: 1fr !important; }
                  }
                `}</style>

                {/* Image */}
                <div style={{ overflow: 'hidden', minHeight: '320px' }}>
                  <div className="stay-card-img" style={{ width: '100%', height: '100%' }}>
                    <Image
                      src={room.image}
                      alt={room.imageAlt}
                      width={800}
                      height={500}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: '52px 56px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '16px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '11px',
                      letterSpacing: '0.28em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                    }}
                  >
                    {room.type}
                  </span>
                  <h2
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)',
                      fontWeight: 300,
                      color: 'white',
                      lineHeight: 1.1,
                    }}
                  >
                    {room.name}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '0.9rem',
                      fontStyle: 'italic',
                      color: 'rgba(255,255,255,0.65)',
                      lineHeight: 1.85,
                      maxWidth: '380px',
                    }}
                  >
                    {room.description}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      gap: '32px',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--sans)',
                          fontSize: '11px',
                          letterSpacing: '0.22em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.55)',
                          display: 'block',
                          marginBottom: '4px',
                        }}
                      >
                        Includes
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--sans)',
                          fontSize: '11px',
                          color: 'rgba(255,255,255,0.5)',
                        }}
                      >
                        {room.inclusions}
                      </span>
                    </div>
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--sans)',
                          fontSize: '11px',
                          letterSpacing: '0.22em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.55)',
                          display: 'block',
                          marginBottom: '4px',
                        }}
                      >
                        From
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--sans)',
                          fontSize: '11px',
                          color: 'var(--gold)',
                        }}
                      >
                        {room.price}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', marginTop: '8px', flexWrap: 'wrap' }}>
                    <Link
                      href={`/stay/${room.id}`}
                      style={{
                        fontFamily: 'var(--sans)',
                        fontSize: '11px',
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color: 'var(--gold)',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(139,107,61,0.3)',
                        paddingBottom: '2px',
                        transition: 'color 0.2s, border-color 0.2s',
                      }}
                    >
                      {room.exploreLabel}
                    </Link>
                  </div>
                </div>
              </article>
            </RevealWrapper>
          ))}
        </div>
      </section>

      <Reserve />
    </>
  );
}
