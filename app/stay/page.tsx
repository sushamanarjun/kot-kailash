import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { rooms, buyout } from '@/lib/content/rooms';
import Reserve from '@/components/sections/Reserve';
import RevealWrapper from '@/components/ui/RevealWrapper';

const HOTEL_SPIDER_URL = 'https://reservations.hotel-spider.com/032644b5fbfafed6';

const ROOM_HIGHLIGHTS: Record<string, string[]> = {
  'kumaon-vann':    ['Freestanding bath', 'Snow peak views', 'Private bonfire', 'Seclusion'],
  'family-suite':   ['Glass observatory', 'Private dining', 'Fireplace', 'Library'],
  'kutir-suites':   ['Machan loft', 'Himalayan views', '4 independent keys'],
  'kumaoni-suites': ['Clay walls', 'Century-old stone', 'Valley views'],
};

const INCLUSIONS = [
  { roman: 'I',   label: 'All Meals',       detail: 'Breakfast, lunch & dinner from Tehni — the on-property kitchen.' },
  { roman: 'II',  label: 'All Experiences', detail: 'Nature walks, guided trails, bonfires — every activity included.' },
  { roman: 'III', label: 'Your Host',       detail: 'Pushkar Singh Negi is on the property every day, personally.' },
  { roman: 'IV',  label: 'Zero Extras',     detail: 'No service charge, no hidden fees — what you book is what you pay.' },
];

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
  const featuredRooms = rooms.filter(r => r.featured);
  const suiteRooms    = rooms.filter(r => !r.featured);

  return (
    <>
      <style>{`
        /* ─── Keyframes ─── */
        @keyframes stayFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineExpand {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes stayScrollCue {
          0%, 100% { opacity: 0.28; transform: translateY(0); }
          50%       { opacity: 0.65; transform: translateY(7px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .st-anim, .st-cue, .st-line {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .st-img-inner, .st-suite-img-inner { transition: none !important; }
        }

        /* ─── Animated line ─── */
        .st-line {
          display: block;
          height: 1px;
          background: rgba(255,255,255,0.1);
          transform-origin: left center;
          animation: lineExpand 1.1s cubic-bezier(0.25,0.46,0.45,0.94) 0.5s both;
          margin: 32px 0 30px;
          max-width: 520px;
        }

        /* ─── Stat strip ─── */
        .st-stats {
          display: flex;
          flex-wrap: wrap;
        }
        .st-stat {
          padding: 18px 32px 18px 0;
          margin-right: 32px;
          border-right: 1px solid rgba(255,255,255,0.07);
        }
        .st-stat:last-child { border-right: none; margin-right: 0; }
        @media (max-width: 480px) {
          .st-stat { padding: 12px 20px 12px 0; margin-right: 20px; }
        }

        /* ─── Inclusions grid ─── */
        .st-incl-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 860px) {
          .st-incl-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .st-incl-grid { grid-template-columns: 1fr; }
        }
        .st-incl-cell {
          padding: 52px 44px;
          border-left: 1px solid rgba(255,255,255,0.05);
          position: relative;
          overflow: hidden;
        }
        .st-incl-cell:first-child { border-left: none; }
        @media (max-width: 860px) {
          .st-incl-cell:nth-child(odd)  { border-left: none; }
          .st-incl-cell:nth-child(3),
          .st-incl-cell:nth-child(4)    { border-top: 1px solid rgba(255,255,255,0.05); }
        }
        @media (max-width: 480px) {
          .st-incl-cell                 { border-left: none !important; padding: 36px 24px; }
          .st-incl-cell + .st-incl-cell { border-top: 1px solid rgba(255,255,255,0.05); }
        }

        /* ─── Featured room cards ─── */
        .st-card {
          display: grid;
          background: var(--ink);
          overflow: hidden;
          position: relative;
        }
        .st-card-img-wrap { overflow: hidden; }
        .st-img-inner {
          width: 100%; height: 100%;
          transition: transform 1.1s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .st-card:hover .st-img-inner,
        .st-card:focus-within .st-img-inner { transform: scale(1.04); }

        @media (max-width: 1000px) {
          .st-card { grid-template-columns: 1fr !important; }
          .st-card .st-card-img-wrap { min-height: 60vw !important; order: 1 !important; }
          .st-card .st-card-content  { order: 2 !important; }
        }

        /* ─── Suite grid (2-col comparison) ─── */
        .st-suite-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }
        @media (max-width: 720px) {
          .st-suite-grid { grid-template-columns: 1fr; }
        }
        .st-suite-card {
          background: var(--ink);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .st-suite-img-wrap {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          flex-shrink: 0;
        }
        .st-suite-img-inner {
          width: 100%; height: 100%;
          transition: transform 1.1s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .st-suite-card:hover .st-suite-img-inner,
        .st-suite-card:focus-within .st-suite-img-inner { transform: scale(1.04); }
        .st-suite-content {
          padding: 44px 48px 52px;
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 480px) {
          .st-suite-content { padding: 36px 24px 44px; }
        }

        /* ─── Highlight pills ─── */
        .st-pill {
          font-family: var(--sans);
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.52);
          border: 1px solid rgba(255,255,255,0.14);
          padding: 5px 12px;
          display: inline-block;
          white-space: nowrap;
        }

        /* ─── CTA per card ─── */
        .st-book-btn {
          font-family: var(--sans);
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink);
          background: var(--gold);
          border: none;
          padding: 14px 32px;
          min-height: 44px;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: opacity 0.2s ease, transform 0.15s ease;
        }
        .st-book-btn:hover { opacity: 0.88; transform: translateY(-1px); }

        .st-explore {
          font-family: var(--sans);
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 14px 0;
          min-height: 44px;
          transition: color 0.2s ease;
        }
        .st-explore:hover { color: rgba(255,255,255,0.82); }

        /* ─── Section divider label ─── */
        .st-sub-label {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 0 clamp(24px, 5vw, 64px);
          margin-bottom: 20px;
        }
        .st-sub-label-text {
          font-family: var(--sans);
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(26,22,18,0.32);
          white-space: nowrap;
        }
        .st-sub-rule {
          flex: 1;
          height: 1px;
          background: rgba(26,22,18,0.08);
          display: block;
        }
      `}</style>

      {/* ─── §1 Hero ─────────────────────────────────────────── */}
      <section
        style={{
          minHeight: '100dvh',
          background: 'var(--forest-deep)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: `0 clamp(24px, 5vw, 64px) clamp(56px, 7vw, 80px)`,
        }}
      >
        {/* Atmospheric glows */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 55% at 72% 32%, rgba(46,61,42,0.65) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 45% 40% at 12% 78%, rgba(139,107,61,0.09) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        {/* Ghost "8" — total keys */}
        <div style={{
          position: 'absolute',
          top: '50%', right: '-4%',
          transform: 'translateY(-52%)',
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(20rem, 32vw, 44rem)',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.022)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.05em',
        }}>8</div>

        <h1 className="sr-only">Rooms &amp; Suites — Kot Kailash Heritage Retreat, Kumaon</h1>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px' }}>
          {/* Eyebrow */}
          <div
            className="st-anim"
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.36em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '26px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              animation: 'stayFadeUp 0.8s ease 0.1s both',
              opacity: 0,
            }}
          >
            <span style={{ width: '28px', height: '1px', background: 'var(--gold)', opacity: 0.45, display: 'block', flexShrink: 0 }} />
            The Stay · Shaukiyathal · Almora
          </div>

          {/* Headline */}
          <h2
            className="st-anim"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(3rem, 5.6vw, 5.6rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'white',
              lineHeight: 1.04,
              animation: 'stayFadeUp 0.8s ease 0.28s both',
              opacity: 0,
            }}
          >
            Eight keys.
            <br />
            <span style={{ color: 'rgba(255,255,255,0.28)', fontStyle: 'normal' }}>
              Three houses.
            </span>
          </h2>

          {/* Animated rule */}
          <span className="st-line" role="presentation" />

          {/* Stats strip */}
          <div
            className="st-anim st-stats"
            style={{
              animation: 'stayFadeUp 0.8s ease 0.62s both',
              opacity: 0,
              marginBottom: '36px',
            }}
          >
            {([
              { value: '8',        label: 'Keys' },
              { value: '3',        label: 'Houses' },
              { value: '7,800 ft', label: 'Altitude' },
              { value: '100%',     label: 'All-Inclusive' },
            ] as const).map(stat => (
              <div key={stat.label} className="st-stat">
                <div style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(1.4rem, 2vw, 1.85rem)',
                  fontWeight: 300,
                  color: 'white',
                  lineHeight: 1,
                }}>{stat.value}</div>
                <div style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '9px',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                  marginTop: '6px',
                }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="st-anim"
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              alignItems: 'center',
              animation: 'stayFadeUp 0.8s ease 0.78s both',
              opacity: 0,
            }}
          >
            <a
              href={HOTEL_SPIDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ padding: '15px 44px', fontSize: '11px', letterSpacing: '0.24em' }}
            >
              Check Availability
            </a>
            <a
              href="#rooms"
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '11px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                minHeight: '44px',
                transition: 'color 0.2s',
              }}
            >
              Explore rooms ↓
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="st-cue"
          style={{
            position: 'absolute',
            bottom: '36px',
            right: 'clamp(24px, 5vw, 64px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            animation: 'stayScrollCue 2.8s ease-in-out 1.8s infinite',
            opacity: 0,
          }}
        >
          <span style={{
            fontFamily: 'var(--sans)', fontSize: '9px',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.22)',
          }}>Scroll</span>
          <svg width="1" height="48" viewBox="0 0 1 48" aria-hidden="true">
            <line x1="0.5" y1="0" x2="0.5" y2="48" stroke="rgba(255,255,255,0.14)" strokeWidth="1"/>
          </svg>
        </div>
      </section>

      {/* ─── §2 All-Inclusive Promise ─────────────────────────── */}
      <section style={{ background: 'var(--ink)' }}>
        <RevealWrapper>
          <div style={{
            padding: `clamp(44px, 6vw, 64px) clamp(24px, 5vw, 64px) 40px`,
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '32px',
            flexWrap: 'wrap',
          }}>
            <div>
              <span style={{
                fontFamily: 'var(--sans)',
                fontSize: '11px',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                display: 'block',
                marginBottom: '12px',
              }}>All-inclusive</span>
              <h2 style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'white',
                lineHeight: 1.12,
                maxWidth: '480px',
              }}>
                Every stay includes everything.
              </h2>
            </div>
            <p style={{
              fontFamily: 'var(--serif)',
              fontSize: '0.92rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.36)',
              lineHeight: 1.82,
              maxWidth: '280px',
            }}>
              No supplements. No schedule. What you see is what you get — and everything is already there.
            </p>
          </div>
        </RevealWrapper>

        <div className="st-incl-grid">
          {INCLUSIONS.map((item, i) => (
            <RevealWrapper key={item.label} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="st-incl-cell">
                {/* Ghost roman numeral */}
                <div style={{
                  position: 'absolute',
                  top: '10px', right: '14px',
                  fontFamily: 'var(--serif)',
                  fontSize: '4.8rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.04)',
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}>{item.roman}</div>

                {/* Gold accent line */}
                <div style={{
                  width: '20px', height: '1px',
                  background: 'var(--gold)',
                  opacity: 0.45,
                  marginBottom: '22px',
                }} />

                <div style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.1rem',
                  color: 'white',
                  fontWeight: 300,
                  marginBottom: '10px',
                  lineHeight: 1.25,
                }}>{item.label}</div>
                <p style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '0.88rem',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.4)',
                  lineHeight: 1.78,
                }}>{item.detail}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* ─── §3 Rooms ─────────────────────────────────────────── */}
      <section
        id="rooms"
        style={{ background: 'var(--parchment)', paddingTop: 'clamp(56px, 7vw, 80px)' }}
      >
        {/* Section header */}
        <RevealWrapper>
          <div style={{
            padding: `0 clamp(24px, 5vw, 64px)`,
            marginBottom: '56px',
            display: 'flex',
            alignItems: 'flex-end',
            gap: '32px',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
            <div>
              <span style={{
                fontFamily: 'var(--sans)',
                fontSize: '11px',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '14px',
              }}>
                <span style={{ width: '24px', height: '1px', background: 'var(--gold)', opacity: 0.4, display: 'block', flexShrink: 0 }} />
                4 Accommodations · 8 Keys
              </span>
              <h2 style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(2.2rem, 3.4vw, 3.2rem)',
                fontWeight: 300,
                color: 'var(--ink)',
                lineHeight: 1.1,
              }}>
                Choose your ridge.
              </h2>
            </div>
            <a
              href={HOTEL_SPIDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ padding: '14px 36px', fontSize: '11px', letterSpacing: '0.22em', flexShrink: 0 }}
            >
              Check Availability
            </a>
          </div>
        </RevealWrapper>

        {/* ── Signature Stays (featured — editorial tall cards) ── */}
        <div style={{ marginBottom: '4px' }}>
          <RevealWrapper>
            <div className="st-sub-label">
              <span className="st-sub-label-text">Signature Stays</span>
              <span className="st-sub-rule" />
            </div>
          </RevealWrapper>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {featuredRooms.map((room, i) => {
              const imageLeft  = i % 2 === 0;
              const highlights = ROOM_HIGHLIGHTS[room.id] ?? [];
              const roomNumber = String(i + 1).padStart(2, '0');

              return (
                <RevealWrapper key={room.id} delay={(i % 2) as 0 | 1}>
                  <article
                    className="st-card"
                    aria-label={room.name}
                    style={{
                      gridTemplateColumns: imageLeft ? '58% 42%' : '42% 58%',
                      minHeight: '68vh',
                    }}
                  >
                    {/* Image panel */}
                    <div
                      className="st-card-img-wrap"
                      style={{
                        minHeight: '68vh',
                        order: imageLeft ? 1 : 2,
                        position: 'relative',
                      }}
                    >
                      <div className="st-img-inner">
                        <Image
                          src={room.image}
                          alt={room.imageAlt}
                          fill
                          sizes="(max-width:1000px) 100vw, 58vw"
                          loading={i === 0 ? 'eager' : 'lazy'}
                          style={{ objectFit: 'cover' }}
                        />
                      </div>

                      {/* Type badge */}
                      <div style={{
                        position: 'absolute',
                        top: '20px', left: '20px',
                        background: 'rgba(26,22,18,0.76)',
                        backdropFilter: 'blur(8px)',
                        padding: '6px 14px',
                      }}>
                        <span style={{
                          fontFamily: 'var(--sans)',
                          fontSize: '9px',
                          letterSpacing: '0.22em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.6)',
                        }}>{room.type.split('·')[1]?.trim() ?? room.type}</span>
                      </div>
                    </div>

                    {/* Content panel */}
                    <div
                      className="st-card-content"
                      style={{
                        padding: 'clamp(40px, 5vw, 64px) clamp(32px, 4.5vw, 60px)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        order: imageLeft ? 2 : 1,
                      }}
                    >
                      {/* Ghost room number */}
                      <div style={{
                        position: 'absolute',
                        bottom: '-24px', right: '-8px',
                        fontFamily: 'var(--serif)',
                        fontSize: 'clamp(8rem, 13vw, 16rem)',
                        fontWeight: 300,
                        color: 'rgba(255,255,255,0.025)',
                        lineHeight: 1,
                        userSelect: 'none',
                        pointerEvents: 'none',
                        letterSpacing: '-0.04em',
                      }}>{roomNumber}</div>

                      <div style={{ position: 'relative', zIndex: 1 }}>
                        <span style={{
                          fontFamily: 'var(--sans)',
                          fontSize: '11px',
                          letterSpacing: '0.28em',
                          textTransform: 'uppercase',
                          color: 'var(--gold)',
                          display: 'block',
                          marginBottom: '12px',
                        }}>{room.type.split('·')[0].trim()}</span>

                        <h3 style={{
                          fontFamily: 'var(--serif)',
                          fontSize: 'clamp(2rem, 3vw, 3rem)',
                          fontWeight: 300,
                          color: 'white',
                          lineHeight: 1.06,
                          marginBottom: '18px',
                        }}>{room.name}</h3>

                        {highlights.length > 0 && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                            {highlights.map(h => (
                              <span key={h} className="st-pill">{h}</span>
                            ))}
                          </div>
                        )}

                        <p style={{
                          fontFamily: 'var(--serif)',
                          fontSize: '0.93rem',
                          fontStyle: 'italic',
                          color: 'rgba(255,255,255,0.56)',
                          lineHeight: 1.9,
                          maxWidth: '380px',
                          marginBottom: '28px',
                        }}>{room.description}</p>

                        {/* Rate + capacity */}
                        <div style={{
                          paddingTop: '20px',
                          borderTop: '1px solid rgba(255,255,255,0.06)',
                          marginBottom: '24px',
                          display: 'flex',
                          gap: '36px',
                          flexWrap: 'wrap',
                        }}>
                          <div>
                            <span style={{
                              fontFamily: 'var(--sans)', fontSize: '10px',
                              letterSpacing: '0.22em', textTransform: 'uppercase',
                              color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '5px',
                            }}>Rate</span>
                            <span style={{
                              fontFamily: 'var(--sans)', fontSize: '14px',
                              letterSpacing: '0.04em', color: 'var(--gold)',
                            }}>{room.price}</span>
                          </div>
                          <div>
                            <span style={{
                              fontFamily: 'var(--sans)', fontSize: '10px',
                              letterSpacing: '0.22em', textTransform: 'uppercase',
                              color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '5px',
                            }}>Capacity</span>
                            <span style={{
                              fontFamily: 'var(--sans)', fontSize: '12px',
                              color: 'rgba(255,255,255,0.52)',
                            }}>{room.capacity}</span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
                          <a href={HOTEL_SPIDER_URL} target="_blank" rel="noopener noreferrer" className="st-book-btn">
                            Reserve
                          </a>
                          <Link href={`/stay/${room.id}`} className="st-explore">
                            {room.exploreLabel}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </RevealWrapper>
              );
            })}
          </div>
        </div>

        {/* ── The Suites (2-col comparison grid) ── */}
        <div>
          <RevealWrapper>
            <div className="st-sub-label" style={{ paddingTop: '48px' }}>
              <span className="st-sub-label-text">The Suites</span>
              <span className="st-sub-rule" />
            </div>
          </RevealWrapper>

          <div className="st-suite-grid">
            {suiteRooms.map((room, i) => {
              const highlights = ROOM_HIGHLIGHTS[room.id] ?? [];
              const roomNumber = String(featuredRooms.length + i + 1).padStart(2, '0');

              return (
                <RevealWrapper key={room.id} delay={(i % 2) as 0 | 1}>
                  <article className="st-suite-card" aria-label={room.name}>
                    {/* Image */}
                    <div className="st-suite-img-wrap">
                      <div className="st-suite-img-inner">
                        <Image
                          src={room.image}
                          alt={room.imageAlt}
                          fill
                          sizes="(max-width:720px) 100vw, 50vw"
                          loading="lazy"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div style={{
                        position: 'absolute', top: '16px', left: '16px',
                        background: 'rgba(26,22,18,0.74)',
                        backdropFilter: 'blur(8px)',
                        padding: '5px 12px',
                      }}>
                        <span style={{
                          fontFamily: 'var(--sans)', fontSize: '9px',
                          letterSpacing: '0.22em', textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.6)',
                        }}>{room.type.split('·')[1]?.trim() ?? room.type}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="st-suite-content">
                      {/* Ghost number */}
                      <div style={{
                        position: 'absolute',
                        bottom: '-18px', right: '-6px',
                        fontFamily: 'var(--serif)',
                        fontSize: '7.5rem',
                        fontWeight: 300,
                        color: 'rgba(255,255,255,0.025)',
                        lineHeight: 1,
                        userSelect: 'none',
                        pointerEvents: 'none',
                        letterSpacing: '-0.04em',
                      }}>{roomNumber}</div>

                      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <span style={{
                          fontFamily: 'var(--sans)', fontSize: '11px',
                          letterSpacing: '0.28em', textTransform: 'uppercase',
                          color: 'var(--gold)', display: 'block', marginBottom: '10px',
                        }}>{room.type.split('·')[0].trim()}</span>

                        <h3 style={{
                          fontFamily: 'var(--serif)',
                          fontSize: 'clamp(1.8rem, 2.4vw, 2.4rem)',
                          fontWeight: 300, color: 'white',
                          lineHeight: 1.08, marginBottom: '16px',
                        }}>{room.name}</h3>

                        {highlights.length > 0 && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                            {highlights.map(h => (
                              <span key={h} className="st-pill">{h}</span>
                            ))}
                          </div>
                        )}

                        <p style={{
                          fontFamily: 'var(--serif)', fontSize: '0.9rem',
                          fontStyle: 'italic', color: 'rgba(255,255,255,0.52)',
                          lineHeight: 1.88, marginBottom: '24px',
                        }}>{room.description}</p>

                        {/* Price row */}
                        <div style={{
                          paddingTop: '18px',
                          borderTop: '1px solid rgba(255,255,255,0.06)',
                          marginBottom: '22px',
                          display: 'flex', gap: '28px', flexWrap: 'wrap',
                        }}>
                          <div>
                            <span style={{
                              fontFamily: 'var(--sans)', fontSize: '10px',
                              letterSpacing: '0.22em', textTransform: 'uppercase',
                              color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '4px',
                            }}>Rate</span>
                            <span style={{
                              fontFamily: 'var(--sans)', fontSize: '13px',
                              color: 'var(--gold)',
                            }}>{room.price}</span>
                          </div>
                          <div>
                            <span style={{
                              fontFamily: 'var(--sans)', fontSize: '10px',
                              letterSpacing: '0.22em', textTransform: 'uppercase',
                              color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '4px',
                            }}>Capacity</span>
                            <span style={{
                              fontFamily: 'var(--sans)', fontSize: '11px',
                              color: 'rgba(255,255,255,0.5)',
                            }}>{room.capacity}</span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap', marginTop: 'auto' }}>
                          <a
                            href={HOTEL_SPIDER_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="st-book-btn"
                            style={{ padding: '13px 28px' }}
                          >
                            Reserve
                          </a>
                          <Link href={`/stay/${room.id}`} className="st-explore">
                            {room.exploreLabel}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </RevealWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── §4 Full buyout ───────────────────────────────────── */}
      <section style={{
        background: 'var(--forest-deep)',
        padding: `clamp(72px, 9vw, 108px) clamp(24px, 5vw, 64px)`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 55%, rgba(139,107,61,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <RevealWrapper>
          <div style={{
            position: 'relative', zIndex: 1,
            maxWidth: '620px', margin: '0 auto', textAlign: 'center',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center',
              gap: '16px', justifyContent: 'center', marginBottom: '26px',
            }}>
              <span style={{ flex: '0 0 60px', height: '1px', background: 'rgba(139,107,61,0.32)', display: 'block' }} />
              <span style={{
                fontFamily: 'var(--sans)', fontSize: '11px',
                letterSpacing: '0.32em', textTransform: 'uppercase',
                color: 'var(--gold)', whiteSpace: 'nowrap',
              }}>Exclusive Use</span>
              <span style={{ flex: '0 0 60px', height: '1px', background: 'rgba(139,107,61,0.32)', display: 'block' }} />
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2.2rem, 3.8vw, 3.6rem)',
              fontWeight: 300, fontStyle: 'italic',
              color: 'white', lineHeight: 1.1, marginBottom: '18px',
            }}>{buyout.title}</h2>

            <p style={{
              fontFamily: 'var(--serif)', fontSize: '1rem',
              fontStyle: 'italic', color: 'rgba(255,255,255,0.48)',
              lineHeight: 1.85, marginBottom: '10px',
            }}>{buyout.description}</p>

            <p style={{
              fontFamily: 'var(--sans)', fontSize: '11px',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.27)', marginBottom: '36px',
            }}>{buyout.note}</p>

            <a
              href="mailto:reach@kotkailash.com?subject=Full%20Property%20Buyout%20Enquiry"
              className="btn-gold"
              style={{ padding: '15px 48px', fontSize: '11px', letterSpacing: '0.24em' }}
            >
              Enquire About Buyout
            </a>
          </div>
        </RevealWrapper>
      </section>

      {/* ─── §5 Reserve ───────────────────────────────────────── */}
      <Reserve />
    </>
  );
}
