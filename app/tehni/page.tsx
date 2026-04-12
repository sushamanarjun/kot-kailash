import type { Metadata } from 'next';
import Image from 'next/image';
import { buildMetadata } from '@/lib/seo';
import Reserve from '@/components/sections/Reserve';
import RevealWrapper from '@/components/ui/RevealWrapper';

export const metadata: Metadata = buildMetadata({
  title: 'Tehni | Kumaoni Dining Experience at Kot Kailash, Almora',
  description:
    'No fixed menu. Tehni cooks what the land offers — Bhatt ke Dubke, Pahari Mutton, Buransh sherbet. Every ingredient sourced from Kunja Gunth village, Almora.',
  path: '/tehni',
  keywords: [
    'Kumaoni food dining experience Almora',
    'hyperlocal Kumaoni cuisine',
    'Tehni Kot Kailash',
    'Bhatt ke Dubke recipe',
    'Buransh sherbet Uttarakhand',
  ],
});

/* ── Seasonal dishes — three natural groupings ── */
const dishGroups = [
  {
    category: 'Mains',
    items: ['Mandua Roti', 'Aloo Gutuk', 'Kafuli', 'Chudkani'],
  },
  {
    category: 'Dal & Sides',
    items: ['Bhatt ki Churkani', 'Gahat ki Dal', 'Bhang ki Chutney', 'Kumaoni Raita'],
  },
  {
    category: 'Sweets & Sherbet',
    items: ['Bal Mithai', 'Singori', 'Jhangora Kheer', 'Buransh Sherbet'],
  },
];

/* ── Provenance facts ── */
const provenanceFacts = [
  { number: '1', label: 'Source village' },
  { number: '12', label: 'Seasonal dishes' },
  { number: '0', label: 'Fixed menus' },
];

export default function TehniPage() {
  return (
    <>
      <h1 className="sr-only">Tehni — Hyperlocal Kumaoni Dining at Kot Kailash, Almora</h1>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1 — Full-viewport hero with image
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: '100dvh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <style>{`
          /* Scroll cue animation */
          @keyframes tehni-scroll-cue {
            0%   { transform: translateY(0);   opacity: 0.5; }
            50%  { transform: translateY(8px);  opacity: 1;   }
            100% { transform: translateY(0);   opacity: 0.5; }
          }
          @media (prefers-reduced-motion: reduce) {
            .tehni-scroll-cue { animation: none !important; opacity: 0.5 !important; }
          }

          /* Hero responsive */
          @media (max-width: 680px) {
            .tehni-hero-content { padding: 0 28px 60px !important; }
            .tehni-hero-tagline { font-size: clamp(2.4rem, 8vw, 3.2rem) !important; }
          }
        `}</style>

        {/* Hero image */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
          }}
        >
          <Image
            src="/images/tehni-hero.webp"
            alt="Kumaoni kitchen and dining at Kot Kailash, Shaukiyathal"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
        </div>

        {/* Deep gradient overlay — heavier at bottom for text legibility */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(26,22,18,0.95) 0%, rgba(26,22,18,0.55) 45%, rgba(26,22,18,0.12) 100%)',
          }}
        />

        {/* Ghost "TEHNI" watermark — visible through overlay */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(12rem, 30vw, 28rem)',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.028)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Tehni
        </div>

        {/* Hero content — bottom aligned */}
        <div
          className="tehni-hero-content"
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '0 64px 80px',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'flex-end',
            gap: '48px',
          }}
        >
          {/* Left: main headline */}
          <div style={{ maxWidth: '720px' }}>
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
              Dining at Kot Kailash
            </span>
            <h2
              className="tehni-hero-tagline"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(3.2rem, 6vw, 5.6rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'white',
                lineHeight: 1.04,
                marginBottom: '24px',
              }}
            >
              The kitchen
              <br />
              <em style={{ fontStyle: 'normal', color: 'var(--gold-pale)' }}>
                as a curriculum.
              </em>
            </h2>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.05rem',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.85,
                maxWidth: '480px',
              }}
            >
              Tehni is the Kumaoni word for the place where things are made
              ready. No fixed menu. The harvest decides.
            </p>
          </div>

          {/* Right: scroll cue */}
          <div
            className="tehni-scroll-cue"
            aria-hidden="true"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              animation: 'tehni-scroll-cue 2.4s ease-in-out infinite',
              paddingBottom: '4px',
            }}
          >
            <div
              style={{
                width: '1px',
                height: '52px',
                background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.35))',
              }}
            />
            {/* Down chevron SVG */}
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 1l6 6 6-6" />
            </svg>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2 — Atmospheric stats strip
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--ink)',
          padding: '0',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <style>{`
          @media (max-width: 680px) {
            .tehni-stats-strip { flex-direction: column !important; }
            .tehni-stat-divider { border-left: none !important; border-top: 1px solid rgba(255,255,255,0.06) !important; }
          }
        `}</style>
        <div
          className="tehni-stats-strip"
          style={{
            display: 'flex',
          }}
        >
          {provenanceFacts.map((fact, i) => (
            <div
              key={fact.label}
              className={i > 0 ? 'tehni-stat-divider' : ''}
              style={{
                flex: 1,
                padding: '52px 48px',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(3.5rem, 5vw, 5rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.08)',
                  lineHeight: 1,
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                {fact.number}
              </span>
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '11px',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                {fact.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3 — Kitchen story: image-left, narrative-right
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--cream)',
          display: 'grid',
          gridTemplateColumns: '55% 1fr',
        }}
        className="tehni-kitchen-grid"
      >
        <style>{`
          @media (max-width: 960px) {
            .tehni-kitchen-grid   { grid-template-columns: 1fr !important; }
            .tehni-kitchen-image  { height: 480px !important; }
            .tehni-kitchen-text   { padding: 60px 32px !important; }
          }
        `}</style>

        {/* Image — flush to section edges */}
        <div
          className="tehni-kitchen-image"
          style={{
            position: 'relative',
            height: '640px',
            overflow: 'hidden',
            background: 'var(--forest-deep)',
          }}
        >
          <Image
            src="/images/tehni-kitchen.webp"
            alt="The Tehni — Kumaoni kitchen at Kot Kailash"
            fill
            loading="lazy"
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 960px) 100vw, 55vw"
          />
        </div>

        {/* Narrative — centred vertically */}
        <RevealWrapper delay={1}>
          <div
            className="tehni-kitchen-text"
            style={{
              padding: '80px 64px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: '640px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '11px',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                display: 'block',
                marginBottom: '24px',
              }}
            >
              The Kitchen
            </span>

            <h3
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(1.7rem, 2.5vw, 2.4rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--ink)',
                lineHeight: 1.22,
                marginBottom: '28px',
              }}
            >
              Everything on the plate
              <br />
              is within sight of the window.
            </h3>

            <div
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.9,
              }}
            >
              <p>
                The mandua (finger millet) for the rotis comes from the terraced
                fields below. The bhatt (black soybean) is a Kumaoni staple most
                guests have never encountered before arriving here.
              </p>
              <p style={{ marginTop: '16px' }}>
                When the rhododendron blooms in March, it reaches the glass.
                When the harvest comes in, it reaches the plate. The kitchen
                does not interpret the land — it reports it.
              </p>
              <p style={{ marginTop: '16px' }}>
                There is no menu. There is a conversation with your host, and
                then a meal.
              </p>
            </div>

            {/* Divider + atmospheric note */}
            <div
              style={{
                marginTop: '44px',
                paddingTop: '32px',
                borderTop: '1px solid rgba(26,22,18,0.09)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  color: 'rgba(61,53,48,0.55)',
                  lineHeight: 1.7,
                }}
              >
                Served at the long table — family style, at the hour the light
                is right.
              </p>
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4 — The Seasonal Table: editorial menu card
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--parchment)',
          padding: '72px 64px',
        }}
      >
        <style>{`
          @media (max-width: 680px) {
            .tehni-menu-outer { padding: 40px 28px 48px !important; }
            .tehni-menu-columns { grid-template-columns: 1fr !important; gap: 40px !important; }
            .tehni-menu-col-divider { border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(139,107,61,0.12) !important; padding-top: 32px !important; }
          }
        `}</style>

        {/* Section eyebrow */}
        <RevealWrapper>
          <div
            style={{
              textAlign: 'center',
              marginBottom: '32px',
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
                marginBottom: '16px',
              }}
            >
              What the Ridge Sends Up
            </span>
            <h3
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--ink)',
                lineHeight: 1.18,
                marginBottom: '16px',
              }}
            >
              The Seasonal Table
            </h3>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1rem',
                fontStyle: 'italic',
                color: 'var(--ink-soft)',
                lineHeight: 1.85,
                maxWidth: '480px',
                margin: '0 auto',
              }}
            >
              Not a menu. A vocabulary. Assembled each day from what is ready.
            </p>
          </div>
        </RevealWrapper>

        {/* The menu card */}
        <RevealWrapper>
          <div
            className="tehni-menu-outer"
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              border: '1px solid rgba(139,107,61,0.2)',
              padding: '36px 48px 30px',
              position: 'relative',
              background: 'var(--cream)',
            }}
          >
            {/* Corner accents — decorative */}
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner) => {
              const isTop = corner.startsWith('top');
              const isLeft = corner.endsWith('left');
              return (
                <div
                  key={corner}
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    [isTop ? 'top' : 'bottom']: '-1px',
                    [isLeft ? 'left' : 'right']: '-1px',
                    width: '20px',
                    height: '20px',
                    borderTop: isTop ? '2px solid rgba(139,107,61,0.45)' : 'none',
                    borderBottom: !isTop ? '2px solid rgba(139,107,61,0.45)' : 'none',
                    borderLeft: isLeft ? '2px solid rgba(139,107,61,0.45)' : 'none',
                    borderRight: !isLeft ? '2px solid rgba(139,107,61,0.45)' : 'none',
                  }}
                />
              );
            })}

            {/* Menu card header */}
            <div
              style={{
                textAlign: 'center',
                marginBottom: '28px',
                paddingBottom: '20px',
                borderBottom: '1px solid rgba(139,107,61,0.12)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '11px',
                  letterSpacing: '0.38em',
                  textTransform: 'uppercase',
                  color: 'rgba(139,107,61,0.6)',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                Kot Kailash · Shaukiyathal · 7,800 ft
              </span>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '0.92rem',
                  fontStyle: 'italic',
                  color: 'rgba(61,53,48,0.55)',
                  lineHeight: 1.7,
                }}
              >
                Served at the long table · Subject to season and harvest
              </p>
            </div>

            {/* Three-column dish list */}
            <div
              className="tehni-menu-columns"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0',
              }}
              role="list"
              aria-label="Kumaoni dishes at Tehni"
            >
              {dishGroups.map((group, gi) => (
                <div
                  key={group.category}
                  className={gi > 0 ? 'tehni-menu-col-divider' : ''}
                  role="listitem"
                  style={{
                    paddingLeft: gi > 0 ? '48px' : '0',
                    paddingRight: gi < 2 ? '48px' : '0',
                    borderLeft: gi > 0 ? '1px solid rgba(139,107,61,0.1)' : 'none',
                  }}
                >
                  {/* Category label */}
                  <span
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '11px',
                      letterSpacing: '0.28em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      display: 'block',
                      marginBottom: '24px',
                    }}
                  >
                    {group.category}
                  </span>

                  {/* Dish list */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {group.items.map((dish, di) => (
                      <li
                        key={dish}
                        style={{
                          fontFamily: 'var(--serif)',
                          fontSize: '1rem',
                          fontStyle: 'italic',
                          color: 'var(--ink)',
                          lineHeight: 1.3,
                          padding: '9px 0',
                          borderBottom:
                            di < group.items.length - 1
                              ? '1px solid rgba(26,22,18,0.06)'
                              : 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                        }}
                      >
                        {/* Subtle dot */}
                        <span
                          aria-hidden="true"
                          style={{
                            width: '3px',
                            height: '3px',
                            borderRadius: '50%',
                            background: 'rgba(139,107,61,0.3)',
                            flexShrink: 0,
                          }}
                        />
                        {dish}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Menu card footer */}
            <div
              style={{
                marginTop: '24px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(139,107,61,0.12)',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '11px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'rgba(139,107,61,0.5)',
                }}
              >
                All dishes are included in the room rate · No à la carte ordering
              </p>
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5 — Full-width pull quote
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--forest-deep)',
          padding: '80px 64px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Atmospheric decorative quote marks */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(8rem, 18vw, 16rem)',
            color: 'rgba(255,255,255,0.025)',
            lineHeight: 1,
            fontWeight: 300,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          &ldquo;
        </span>

        <RevealWrapper>
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)',
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.88)',
                lineHeight: 1.55,
                marginBottom: '32px',
              }}
            >
              The distance between the field and the plate here is measured in
              minutes, not days. That is not a claim we make — it is a condition
              of the altitude.
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '1px',
                  background: 'rgba(197,153,90,0.4)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '11px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                }}
              >
                Pushkar Singh Negi, Founder
              </span>
              <div
                style={{
                  width: '32px',
                  height: '1px',
                  background: 'rgba(197,153,90,0.4)',
                }}
              />
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6 — Provenance: text + image placeholder
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--forest)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
        className="tehni-provenance-grid"
      >
        <style>{`
          @media (max-width: 960px) {
            .tehni-provenance-grid { grid-template-columns: 1fr !important; }
            .tehni-provenance-text { padding: 64px 32px !important; }
            .tehni-provenance-image { height: 400px !important; }
          }
        `}</style>

        {/* Left: provenance narrative */}
        <RevealWrapper>
          <div
            className="tehni-provenance-text"
            style={{
              padding: '100px 72px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '11px',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                display: 'block',
                marginBottom: '20px',
              }}
            >
              Provenance
            </span>
            <h3
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(2rem, 3.2vw, 3rem)',
                fontWeight: 300,
                color: 'white',
                lineHeight: 1.18,
                marginBottom: '24px',
              }}
            >
              Sourced from
              <br />
              <em style={{ fontStyle: 'normal', color: 'var(--gold-pale)' }}>
                one village.
              </em>
            </h3>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1rem',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.62)',
                lineHeight: 1.9,
                marginBottom: '44px',
              }}
            >
              Kunja Gunth — the village below the ridge — is the primary source
              of Tehni&rsquo;s ingredients. When something cannot be grown or
              sourced locally, we either don&rsquo;t serve it, or we explain why
              it had to come from further away.
            </p>

            {/* Three provenance facts */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
                borderTop: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {[
                { label: 'Primary source', value: 'Kunja Gunth village' },
                { label: 'Secondary source', value: 'Almora district farms' },
                { label: 'Tertiary source', value: 'Explained when used' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    gap: '16px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '11px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.35)',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '0.95rem',
                      fontStyle: 'italic',
                      color: 'rgba(255,255,255,0.7)',
                      textAlign: 'right',
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>

        {/* Right: placeholder — replace with village/fields photo */}
        <RevealWrapper delay={1}>
          <div
            className="tehni-provenance-image"
            style={{
              position: 'relative',
              height: '100%',
              minHeight: '480px',
              overflow: 'hidden',
              background: 'var(--forest-deep)',
            }}
          >
            <Image
              src="/images/tehni-village.webp"
              fill
              loading="lazy"
              style={{ objectFit: 'cover' }}
              alt="Kunja Gunth village below Kot Kailash ridge"
              sizes="(max-width: 960px) 100vw, 50vw"
            />
          </div>
        </RevealWrapper>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7 — CTA
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--parchment)',
          padding: '80px 64px',
          textAlign: 'center',
        }}
      >
        <RevealWrapper>
          <div>
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
              No extra charge · No menu to order from
            </span>
            <h3
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--ink)',
                lineHeight: 1.2,
                marginBottom: '20px',
              }}
            >
              Tehni is included in every stay.
            </h3>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1rem',
                fontStyle: 'italic',
                color: 'var(--ink-soft)',
                lineHeight: 1.85,
                maxWidth: '400px',
                margin: '0 auto 32px',
              }}
            >
              Reserve a room and the kitchen comes with it. The meal begins with
              a conversation.
            </p>

            <a
              href="https://wa.me/919650264905"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ display: 'inline-block' }}
            >
              Ask about your visit
            </a>

            <p
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(61,53,48,0.4)',
                marginTop: '20px',
              }}
            >
              Or write to{' '}
              <a
                href="mailto:reach@kotkailash.com"
                style={{
                  color: 'inherit',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                reach@kotkailash.com
              </a>
            </p>
          </div>
        </RevealWrapper>
      </section>

      <Reserve />
    </>
  );
}
