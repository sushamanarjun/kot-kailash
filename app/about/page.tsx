import type { Metadata } from 'next';
import Image from 'next/image';
import { buildMetadata } from '@/lib/seo';
import Founders from '@/components/sections/Founders';
import Sustainability from '@/components/sections/Sustainability';
import RevealWrapper from '@/components/ui/RevealWrapper';

export const metadata: Metadata = buildMetadata({
  title: 'Our Story | Kot Kailash — Heritage Retreat, Kumaon',
  description:
    'The story of Kot Kailash — a family ancestral storehouse on the Shaukiyathal ridge restored by Pushkar Singh Negi. The village of Kailash Kot, the ridge, and the homecoming.',
  path: '/about',
  keywords: [
    'Kot Kailash story',
    'Pushkar Singh Negi',
    'Kumaoni heritage restoration',
    'Shaukiyathal history',
    'heritage hotel founders',
  ],
});

const MILESTONES = [
  {
    year: '~1920',
    label: 'The ancestral storehouse',
    detail: 'Kot Kailash serves as the ancestral storehouse of the Negi family — farmers from the five-house village of Kailash Kot, on the Shaukiyathal ridge.',
  },
  {
    year: '2018',
    label: 'The homecoming',
    detail: 'Pushkar Singh Negi — co founder of The Kumaon at Kasar Devi — returns home to restore the family property. Not renovate. Restore.',
  },
  {
    year: '2021',
    label: 'Craftspeople return',
    detail: 'The same craftspeople who maintain older village structures re-press the mud plaster walls by hand. Almost everything made locally.',
  },
  {
    year: '2023',
    label: 'Kot Kailash opens',
    detail: 'Eight rooms across three structures. No fixed menu. One ridge. Open to guests who understand the difference.',
  },
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        @keyframes abFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes abScrollCue {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50%       { opacity: 0.7; transform: translateY(7px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ab-anim, .ab-cue { animation: none !important; opacity: 1 !important; }
        }

        /* ── Split-screen hero ── */
        .ab-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100dvh;
        }
        /* Hero must be full-bleed — override global section padding rules */
        section.ab-hero,
        section.ab-hero:first-child {
          padding: 0 !important;
        }
        @media (max-width: 768px) {
          .ab-hero {
            grid-template-columns: 1fr;
            min-height: auto !important;
            background: var(--ink);
          }
          .ab-hero-text { order: 2; padding: 52px 24px 56px !important; }
          .ab-hero-img  { order: 1; min-height: 55vw; }
          .ab-scroll-cue { left: 24px !important; bottom: 20px !important; }
        }

        /* ── Long-read story ── */
        .ab-story-col {
          max-width: 660px;
          margin: 0 auto;
          fontFamily: var(--serif);
        }
        .ab-story-col p {
          font-family: var(--serif);
          font-size: 1.05rem;
          color: var(--ink-soft);
          line-height: 1.92;
          margin-top: 22px;
        }
        .ab-story-col p:first-child { margin-top: 0; }

        /* ── Milestones strip ── */
        .ab-milestones {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 860px) {
          .ab-milestones { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .ab-milestones { grid-template-columns: 1fr; }
        }
        .ab-ms-cell {
          padding: 52px 40px;
          border-left: 1px solid rgba(255,255,255,0.05);
          position: relative;
        }
        .ab-ms-cell:first-child { border-left: none; }
        @media (max-width: 860px) {
          .ab-ms-cell:nth-child(odd)  { border-left: none; }
          .ab-ms-cell:nth-child(3),
          .ab-ms-cell:nth-child(4)    { border-top: 1px solid rgba(255,255,255,0.05); }
        }
        @media (max-width: 480px) {
          .ab-ms-cell { border-left: none !important; border-top: 1px solid rgba(255,255,255,0.05); }
          .ab-ms-cell:first-child { border-top: none; }
          .ab-ms-cell { padding: 36px 32px; }
        }
      `}</style>

      {/* ─── Epigraph — dedication, precedes everything ──────── */}
      <section style={{
        background: 'var(--parchment)',
        padding: '64px 40px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
          fontStyle: 'italic',
          fontWeight: 300,
          color: 'var(--ink-soft)',
          lineHeight: 1.75,
          margin: 0,
        }}>
          The best travel leaves you quieter than it found you.
        </p>
      </section>

      {/* ─── §1 Hero — split-screen ───────────────────────────── */}
      <section className="ab-hero">
        <h1 className="sr-only">Our Story — Kot Kailash Heritage Retreat, Kumaon</h1>

        {/* Left: Text panel */}
        <div
          className="ab-hero-text"
          style={{
            background: 'var(--ink)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '140px 72px 80px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Faint year as background texture */}
          <div style={{
            position: 'absolute',
            bottom: '-5%',
            left: '-5%',
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(14rem, 22vw, 26rem)',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.022)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '-0.04em',
          }}>1920</div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              className="ab-anim"
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '11px',
                letterSpacing: '0.38em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '28px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                animation: 'abFadeUp 0.8s ease both',
                animationDelay: '0.15s',
                opacity: 0,
              }}
            >
              <span style={{ width: '28px', height: '1px', background: 'var(--gold)', opacity: 0.45 }} />
              Our Story
            </div>

            <h2
              className="ab-anim"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(2.8rem, 4.2vw, 4.4rem)',
                fontWeight: 300,
                color: 'white',
                lineHeight: 1.1,
                marginBottom: '28px',
                animation: 'abFadeUp 0.8s ease both',
                animationDelay: '0.32s',
                opacity: 0,
              }}
            >
              Not a hotel.
              <br />
              <span style={{ color: 'rgba(255,255,255,0.36)' }}>
                Not a homestay.
              </span>
            </h2>

            <p
              className="ab-anim"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1rem',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.48)',
                lineHeight: 1.85,
                maxWidth: '380px',
                animation: 'abFadeUp 0.8s ease both',
                animationDelay: '0.5s',
                opacity: 0,
              }}
            >
              A Kumaoni heritage home restored without apology to its origins.
              Hand-pressed mud plaster walls. Oak and rhododendron forest.
              Air that runs between AQI 9 and 25, year-round.
            </p>

            {/* Divider */}
            <div
              className="ab-anim"
              style={{
                width: '40px',
                height: '1px',
                background: 'rgba(139,107,61,0.4)',
                margin: '36px 0',
                animation: 'abFadeUp 0.8s ease both',
                animationDelay: '0.65s',
                opacity: 0,
              }}
            />

            <div
              className="ab-anim"
              style={{
                animation: 'abFadeUp 0.8s ease both',
                animationDelay: '0.65s',
                opacity: 0,
              }}
            >
              <a
                href="https://reservations.hotel-spider.com/032644b5fbfafed6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ padding: '13px 36px', fontSize: '11px', letterSpacing: '0.24em' }}
              >
                Reserve Your Stay
              </a>
            </div>
          </div>

          {/* Scroll cue */}
          <div
            className="ab-cue ab-scroll-cue"
            style={{
              position: 'absolute',
              bottom: '36px',
              left: '72px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              animation: 'abScrollCue 2.6s ease-in-out infinite',
              animationDelay: '1.4s',
              opacity: 0,
            }}
          >
            <svg width="44" height="1" viewBox="0 0 44 1">
              <line x1="0" y1="0.5" x2="44" y2="0.5" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
            </svg>
            <span style={{
              fontFamily: 'var(--sans)', fontSize: '9px',
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.28)',
            }}>Scroll</span>
          </div>
        </div>

        {/* Right: Image panel */}
        <div
          className="ab-hero-img"
          style={{
            background: 'linear-gradient(170deg, #0a1208 0%, #1a2416 35%, #2e3d2a 70%, #1c2a18 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Property image */}
          <Image
            src="/images/kot-kailash-experience-kumaon.JPG"
            alt="Kot Kailash — the main house on the Shaukiyathal ridge, Almora"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          {/* Atmospheric overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 70% 60% at 55% 40%, rgba(139,107,61,0.1) 0%, transparent 65%)',
            zIndex: 1,
          }} />
          {/* Caption strip at bottom */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '48px 36px 28px',
            background: 'linear-gradient(to top, rgba(10,18,8,0.92) 0%, rgba(10,18,8,0.6) 50%, transparent 100%)',
            zIndex: 2,
          }}>
            <p style={{
              fontFamily: 'var(--serif)',
              fontSize: '0.82rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.88)',
              lineHeight: 1.5,
            }}>
              Kot Kailash, Shaukiyathal ridge, Almora · 7,800 ft
            </p>
          </div>
        </div>
      </section>

      {/* ─── §2 The long-read story ───────────────────────────── */}
      <section style={{ background: 'var(--parchment)', padding: '100px 64px' }}>
        <RevealWrapper>
          <div className="ab-story-col">

            {/* Chapter heading: Our Story */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '36px',
            }}>
              <span style={{
                fontFamily: 'var(--sans)',
                fontSize: '11px',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                whiteSpace: 'nowrap',
              }}>Our Story</span>
              <span style={{
                flex: 1,
                height: '1px',
                background: 'rgba(26,22,18,0.1)',
              }} />
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2rem, 3vw, 2.8rem)',
              fontWeight: 300,
              color: 'var(--ink)',
              lineHeight: 1.15,
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}>
              A Century-Old House on a Ridge at 7,800 Feet
            </h2>

            <p style={{
              fontFamily: 'var(--sans)',
              fontSize: '10px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              opacity: 0.75,
              marginBottom: '36px',
            }}>
              Almora District, Uttarakhand, Indian Himalayas
            </p>

            <div className="ab-story-col">
              <p>
                In the village of Kunja Gunth, on a ridge the Shauka shepherds
                once crossed with their flocks, there is a house that has stood
                for a hundred years. Its walls are hand-pressed mud plaster and
                cow dung — built not for aesthetics, but for insulation and
                endurance. Its floors are traditional clay. The cedar and oak
                forests around it have been there longer than anyone can say with
                certainty, and the air quality index, on most mornings, runs in
                single digits.
              </p>
              <p>
                This is where Kot Kailash Kumaon was founded.
              </p>
              <p>
                Not as a hotel. Not as a homestay. But as something the Indian
                boutique travel market is only beginning to find language for —
                a property with the warmth and cultural specificity of a private
                home, operated with the precision and standards of a world-class
                retreat. Its founders call this Professionalized Intimacy. It is,
                in practice, the rarest thing in contemporary travel: a place
                that feels genuinely discovered rather than designed to be found.
              </p>
            </div>

            {/* Chapter divider: The Place */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              margin: '56px 0 36px',
            }}>
              <span style={{
                fontFamily: 'var(--sans)',
                fontSize: '11px',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                whiteSpace: 'nowrap',
              }}>The Place</span>
              <span style={{
                flex: 1,
                height: '1px',
                background: 'rgba(26,22,18,0.1)',
              }} />
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2.4rem, 3.6vw, 3.4rem)',
              fontWeight: 300,
              color: 'var(--ink)',
              lineHeight: 1.12,
              marginBottom: '36px',
            }}>
              Three structures.<br />Eight keys.<br />One ridge.
            </h2>

            <div className="ab-story-col">
              <p>
                Kot Kailash unfolds across three structures — Kumaoni Suites,
                Kutir Suites with their machan lofts, a two bedroom Family Suite,
                and Kumaon Vann, a standalone forest cottage with a freestanding
                bathtub positioned to face Nanda Devi — keeping the experience
                intimate in the way that only very small, very considered
                properties can. The hamlet of Shaukiyathal holds no more than
                six or seven houses and a modest village shop. Guests do not
                arrive here by accident.
              </p>
              <p>
                The kitchen is called Tehni — a zero-kilometre, harvest-led
                concept with no fixed menu, rooted entirely in the produce of
                the immediate village and the season that surrounds it. What is
                served is determined by what the land offers that morning.
              </p>
              <p>
                Within walking distance lies Vriddh Jageshwar — believed to be
                Lord Shiva&rsquo;s original abode, and among the oldest living
                Shiva temples in the Kumaon Hills, predating Jageshwar Dham by
                five centuries. Jageshwar Dham, Kasar Devi, and Kainchi Dham
                are all within easy reach. The ridge is, by geography and by
                spirit, one of the most culturally layered landscapes in the
                Indian Himalayas.
              </p>
              <p>
                A dedicated sound healing retreat programme — Bur&#257;nsh; is
                offered in collaboration with Cchitvan, whose principals hold
                PhDs in Dhrupad. It is not a wellness amenity. It is a
                considered cultural offering, built for guests who understand
                the difference.
              </p>
            </div>

          </div>
        </RevealWrapper>
      </section>

      {/* ─── §3 Milestones — horizontal strip ────────────────── */}
      {/* <section style={{ background: 'var(--ink)' }}>
        <div className="ab-milestones">
          {MILESTONES.map((m, i) => (
            <RevealWrapper key={m.year} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="ab-ms-cell">
                <div style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(3rem, 4.5vw, 5rem)',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.06)',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '16px',
                  userSelect: 'none',
                }}>{m.year}</div>
                <div style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '10px',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '10px',
                }}>{m.label}</div>
                <p style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '0.88rem',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.44)',
                  lineHeight: 1.75,
                }}>{m.detail}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section> */}

      {/* ─── §4 Positioning statement ────────────────────────── */}
      <section style={{
        background: 'var(--ink)',
        padding: '88px 64px',
        textAlign: 'center',
      }}>
        <RevealWrapper>
          <p style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.05rem, 1.7vw, 1.3rem)',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '680px',
            margin: '0 auto',
            lineHeight: 1.85,
          }}>
            Kot Kailash Kumaon is, by any serious assessment, one of the most
            quietly compelling boutique properties to have opened in the Indian
            Himalayas in recent years. It has arrived at the right moment, in
            the right place, built by the right people.
          </p>
        </RevealWrapper>
      </section>

      {/* ─── §5 Founders ─────────────────────────────────────── */}
      <Founders />

      {/* ─── §6 How We Work ──────────────────────────────────── */}
      <Sustainability />

      {/* ─── §7 CTA — light break ────────────────────────────── */}
      <section style={{
        background: 'var(--parchment)',
        padding: '80px 64px',
        textAlign: 'center',
      }}>
        <RevealWrapper>
          <span style={{
            fontFamily: 'var(--sans)',
            fontSize: '11px',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '20px',
          }}>
            <span style={{ width: '22px', height: '1px', background: 'var(--gold)', opacity: 0.4 }} />
            Rare Availability
            <span style={{ width: '22px', height: '1px', background: 'var(--gold)', opacity: 0.4 }} />
          </span>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--ink)',
            marginBottom: '14px',
            lineHeight: 1.15,
          }}>
            Reserve your stay at Kot Kailash.
          </h2>
          <p style={{
            fontFamily: 'var(--serif)',
            fontSize: '0.96rem',
            fontStyle: 'italic',
            color: 'var(--ink-soft)',
            lineHeight: 1.8,
            maxWidth: '400px',
            margin: '0 auto 32px',
          }}>
            Direct bookings always receive the best available rate.
          </p>
          <a
            href="https://reservations.hotel-spider.com/032644b5fbfafed6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ padding: '15px 52px', fontSize: '11px', letterSpacing: '0.26em' }}
          >
            Reserve Your Stay
          </a>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '11px',
            letterSpacing: '0.1em',
            color: 'var(--ink-soft)',
            marginTop: '18px',
          }}>
            Or call{' '}
            <a
              href="tel:+919650264905"
              style={{ color: 'var(--ink)', textDecoration: 'none' }}
            >
              +91 9650264905
            </a>
            {' '}· We respond to every enquiry personally
          </p>
        </RevealWrapper>
      </section>
    </>
  );
}
