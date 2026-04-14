import type { Metadata } from 'next';
import Image from 'next/image';
import { buildMetadata } from '@/lib/seo';
import { experiences } from '@/lib/content/experiences';
import SacredArc from '@/components/sections/SacredArc';
import Journey from '@/components/sections/Journey';
import Reserve from '@/components/sections/Reserve';
import RevealWrapper from '@/components/ui/RevealWrapper';

export const metadata: Metadata = buildMetadata({
  title: 'Experiences Near Jageshwar | Kot Kailash Retreat, Kumaon',
  description:
    'Temple trails, forest walks, stargazing, and Kumaoni festivals — all from Kot Kailash, 2 km from Jageshwar Dham and within reach of Kasar Devi and Kainchi Dham.',
  path: '/experience',
  keywords: [
    'things to do near Jageshwar temple Almora',
    'Kasar Devi visit',
    'Kumaon experiences',
    'heritage walk Almora',
    'Kainchi Dham',
    'forest walk Uttarakhand',
  ],
});

/* ── Per-experience image atmosphere (placeholder gradients until real photos arrive) ── */
const expAtmosphere = [
  { grad: 'linear-gradient(140deg,#1c2718 0%,#2e3d2a 100%)', gx: 25, gy: 65 },
  { grad: 'linear-gradient(155deg,#2e3d2a 0%,#1a1612 100%)', gx: 70, gy: 35 },
  { grad: 'linear-gradient(125deg,#1a1612 0%,#2e3d2a 80%)',  gx: 40, gy: 55 },
  { grad: 'linear-gradient(160deg,#2e3d2a 0%,#1c2718 100%)', gx: 60, gy: 70 },
  { grad: 'linear-gradient(130deg,#1c2718 0%,#3d3530 100%)', gx: 30, gy: 40 },
  { grad: 'linear-gradient(145deg,#1a1612 0%,#2e3d2a 100%)', gx: 55, gy: 60 },
];

const promises = [
  { label: 'All Included', detail: 'Every experience is part of your room rate. Nothing is extra.' },
  { label: 'No Programme', detail: 'No schedule. No activities desk. A conversation is how it begins.' },
  { label: 'Host-Arranged', detail: 'Pushkar or Aishwarya walks with you, or shows you the way.' },
];

const EXP_IMAGES: Record<string, string> = {
  'I':   '/images/ridge-twoUp.webp',      // Walk to Vriddh Jageshwar — forest trail
  'II':  '/images/tehni-village.webp',    // Jageshwar Dham — village/heritage
  'III': '/images/tehni-kitchen.webp',    // Bread in a Kumaoni Home — cooking
  'IV':  '/images/ridge-fullbleed.jpg',   // Ridge Picnic — panoramic ridge
  'V':   '/images/hero-ridge.jpeg',       // Kasar Devi & Binsar — hills
  'VI':  '/images/room-kumaon-vann.webp', // Forest Walks — forest cottage
};

export default function ExperiencePage() {
  return (
    <>
      <h1 className="sr-only">
        Things to Do Near Jageshwar — Experiences at Kot Kailash, Kumaon
      </h1>

      {/* ═══════════════════════════════════════════════════════════════
          §1  FULL-VIEWPORT HERO — image placeholder
      ═══════════════════════════════════════════════════════════════ */}
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
          @keyframes exp-scroll-cue {
            0%, 100% { transform: translateY(0);  opacity: 0.45; }
            50%       { transform: translateY(8px); opacity: 1; }
          }
          @media (prefers-reduced-motion: reduce) {
            .exp-scroll-cue { animation: none !important; opacity: 0.45 !important; }
          }
          @media (max-width: 680px) {
            .exp-hero-grid   { grid-template-columns: 1fr !important; }
            .exp-hero-scroll { display: none !important; }
            .exp-hero-content { padding: 0 28px 56px !important; }
            .exp-hero-h2 { font-size: clamp(2.6rem, 8vw, 3.4rem) !important; }
          }
        `}</style>

        {/* Hero background image */}
        <Image
          src="/images/hero-ridge.jpeg"
          alt="Ridge view from Kot Kailash, Shaukiyathal — 7,800 ft"
          fill
          priority
          style={{ objectFit: 'cover', zIndex: 0 }}
        />

        {/* Gradient overlay — strong at bottom */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to top, rgba(10,8,5,0.97) 0%, rgba(10,8,5,0.75) 30%, rgba(10,8,5,0.3) 60%, transparent 100%)',
        }} />

        {/* Ghost watermark */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: '50%', left: '50%', zIndex: 1,
          transform: 'translate(-50%,-50%)',
          fontFamily: 'var(--serif)', fontSize: 'clamp(10rem, 28vw, 26rem)',
          fontStyle: 'italic', fontWeight: 300,
          color: 'rgba(255,255,255,0.022)', lineHeight: 1,
          userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap',
        }}>
          VI
        </div>

        {/* Bottom-aligned content */}
        <div
          className="exp-hero-content"
          style={{
            position: 'relative', zIndex: 2,
            padding: '0 64px 84px',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'flex-end',
            gap: '48px',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <span style={{
              fontFamily: 'var(--sans)', fontSize: '11px',
              letterSpacing: '0.38em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '20px',
            }}>
              Experiences · Kot Kailash
            </span>
            <h2
              className="exp-hero-h2"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(3rem, 5.8vw, 5.4rem)',
                fontWeight: 300, fontStyle: 'italic',
                color: 'white', lineHeight: 1.04, marginBottom: '22px',
              }}
            >
              Six ways to know
              <br />
              <em style={{ fontStyle: 'normal', color: 'rgba(255,255,255,0.38)' }}>the ridge.</em>
            </h2>
            <p style={{
              fontFamily: 'var(--serif)', fontSize: '1.05rem',
              fontStyle: 'italic', color: 'rgba(255,255,255,0.58)',
              lineHeight: 1.88, maxWidth: '500px',
            }}>
              Not a programme. Not an activities menu. A conversation with your
              host — and then a trail, a temple, a kitchen, or the ridge at dawn.
            </p>
          </div>

          {/* Scroll cue */}
          <div
            className="exp-scroll-cue exp-hero-scroll"
            aria-hidden="true"
            style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '8px',
              animation: 'exp-scroll-cue 2.4s ease-in-out infinite',
              paddingBottom: '4px',
            }}
          >
            <div style={{
              width: '1px', height: '52px',
              background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.3))',
            }} />
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none"
              stroke="rgba(255,255,255,0.42)" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 1l6 6 6-6" />
            </svg>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          §2  THREE-PROMISE STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--ink)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <style>{`
          @media (max-width: 680px) {
            .exp-promise-strip { flex-direction: column !important; }
            .exp-promise-divider { border-left: none !important; border-top: 1px solid rgba(255,255,255,0.06) !important; }
          }
        `}</style>
        <div className="exp-promise-strip" style={{ display: 'flex' }}>
          {promises.map((p, i) => (
            <div
              key={p.label}
              className={i > 0 ? 'exp-promise-divider' : ''}
              style={{
                flex: 1, padding: '44px 48px',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              <span style={{
                fontFamily: 'var(--sans)', fontSize: '11px',
                letterSpacing: '0.28em', textTransform: 'uppercase',
                color: 'var(--gold)', display: 'block', marginBottom: '10px',
              }}>
                {p.label}
              </span>
              <p style={{
                fontFamily: 'var(--serif)', fontSize: '0.92rem',
                fontStyle: 'italic', color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.75,
              }}>
                {p.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          §3  SIX EXPERIENCES — alternating editorial rows
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{ background: 'var(--ink)' }}
        aria-label="Six experiences at Kot Kailash"
      >
        <style>{`
          /* Row hover — image scales subtly */
          .exp-row-img { transition: transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94); }
          .exp-row:hover .exp-row-img { transform: scale(1.04); }

          /* Row text hover states */
          .exp-row:hover .exp-row-numeral-ghost { opacity: 0.08 !important; }
          .exp-row:hover .exp-row-duration       { color: rgba(255,255,255,0.75) !important; }

          /* Responsive: stack image above text on mobile */
          @media (max-width: 860px) {
            .exp-row-inner  { grid-template-columns: 1fr !important; }
            .exp-row-image  { height: 320px !important; order: -1 !important; }
            .exp-row-text   { padding: 52px 32px !important; min-height: auto !important; }
          }
        `}</style>

        {experiences.map((exp, i) => {
          const imageLeft = i % 2 === 0;
          const atm = expAtmosphere[i];
          const isLast = i === experiences.length - 1;

          return (
            <RevealWrapper key={exp.numeral}>
              <div
                className="exp-row"
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.055)',
                  borderBottom: isLast ? '1px solid rgba(255,255,255,0.055)' : 'none',
                }}
              >
                <div
                  className="exp-row-inner"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: imageLeft ? '52% 1fr' : '1fr 52%',
                  }}
                >
                  {/* Image — left or right depending on row */}
                  {imageLeft && (
                    <div
                      className="exp-row-image"
                      style={{
                        position: 'relative',
                        height: '460px',
                        overflow: 'hidden',
                      }}
                    >
                      <Image
                        src={EXP_IMAGES[exp.numeral] ?? '/images/hero-ridge.jpeg'}
                        alt={exp.name}
                        fill
                        loading="lazy"
                        sizes="(max-width:860px) 100vw, 52vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  )}

                  {/* Text content */}
                  <div
                    className="exp-row-text"
                    style={{
                      padding: '60px 72px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      minHeight: '460px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Ghost numeral background */}
                    <span
                      className="exp-row-numeral-ghost"
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        top: '-24px',
                        right: imageLeft ? '16px' : 'auto',
                        left: imageLeft ? 'auto' : '16px',
                        fontFamily: 'var(--serif)',
                        fontSize: 'clamp(7rem, 12vw, 11rem)',
                        fontStyle: 'italic', fontWeight: 300,
                        color: 'rgba(255,255,255,0.04)',
                        lineHeight: 1, transition: 'opacity 0.35s ease',
                        userSelect: 'none', pointerEvents: 'none',
                      }}
                    >
                      {exp.numeral}
                    </span>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      {/* Small numeral label */}
                      <span style={{
                        fontFamily: 'var(--sans)', fontSize: '11px',
                        letterSpacing: '0.32em', textTransform: 'uppercase',
                        color: 'var(--gold)', display: 'block', marginBottom: '20px',
                      }}>
                        {exp.numeral} — Experience
                      </span>

                      {/* Name */}
                      <h3 style={{
                        fontFamily: 'var(--serif)',
                        fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)',
                        fontWeight: 300, fontStyle: 'italic',
                        color: 'white', lineHeight: 1.18, marginBottom: '20px',
                      }}>
                        {exp.name}
                      </h3>

                      {/* Description */}
                      <p style={{
                        fontFamily: 'var(--serif)', fontSize: '1rem',
                        fontStyle: 'italic', color: 'rgba(255,255,255,0.62)',
                        lineHeight: 1.88, maxWidth: '420px',
                      }}>
                        {exp.description}
                      </p>

                      {/* Duration bar */}
                      <div style={{
                        marginTop: '32px', paddingTop: '20px',
                        borderTop: '1px solid rgba(255,255,255,0.08)',
                        display: 'flex', alignItems: 'center', gap: '12px',
                      }}>
                        {/* Clock SVG */}
                        <svg
                          width="14" height="14" viewBox="0 0 24 24"
                          fill="none" stroke="rgba(197,153,90,0.5)"
                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                          aria-hidden="true" style={{ flexShrink: 0 }}
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span
                          className="exp-row-duration"
                          style={{
                            fontFamily: 'var(--sans)', fontSize: '11px',
                            letterSpacing: '0.18em', textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.4)',
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Image — right side */}
                  {!imageLeft && (
                    <div
                      className="exp-row-image"
                      style={{
                        position: 'relative',
                        height: '460px',
                        overflow: 'hidden',
                      }}
                    >
                      <Image
                        src={EXP_IMAGES[exp.numeral] ?? '/images/hero-ridge.jpeg'}
                        alt={exp.name}
                        fill
                        loading="lazy"
                        sizes="(max-width:860px) 100vw, 52vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </RevealWrapper>
          );
        })}

        {/* Included footer strip */}
        <RevealWrapper>
          <div style={{
            padding: '44px 64px',
            borderTop: '1px solid rgba(255,255,255,0.055)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
            className="exp-included-strip"
          >
            <style>{`
              @media (max-width: 680px) {
                .exp-included-strip { flex-direction: column !important; text-align: center !important; }
              }
            `}</style>
            <div>
              <p style={{
                fontFamily: 'var(--serif)', fontSize: '1.08rem',
                fontStyle: 'italic', color: 'white',
                marginBottom: '4px', lineHeight: 1.3,
              }}>
                All six experiences are included.
              </p>
              <p style={{
                fontFamily: 'var(--serif)', fontSize: '0.9rem',
                fontStyle: 'italic', color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.5,
              }}>
                No extra charge. No booking form. A conversation with your host.
              </p>
            </div>
            <a
              href="mailto:reach@kotkailash.com?subject=Experience%20Enquiry"
              className="btn-outline"
              style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              Ask about your visit
            </a>
          </div>
        </RevealWrapper>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          §4  FULL-WIDTH EDITORIAL QUOTE
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--forest-deep)',
        padding: '100px 64px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div aria-hidden="true" style={{
          position: 'absolute', top: '10px', left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--serif)', fontWeight: 300,
          fontSize: 'clamp(7rem, 16vw, 14rem)',
          color: 'rgba(255,255,255,0.022)', lineHeight: 1,
          userSelect: 'none', pointerEvents: 'none',
        }}>
          &ldquo;
        </div>
        <RevealWrapper>
          <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <p style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1.45rem, 2.8vw, 2.3rem)',
              fontStyle: 'italic', fontWeight: 300,
              color: 'rgba(255,255,255,0.86)',
              lineHeight: 1.55, marginBottom: '32px',
            }}>
              None of these are scheduled programmes.
              They are invitations — to a trail, a temple, a kitchen, a ridge.
              Your host arranges them around you.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px' }}>
              <div style={{ width: '28px', height: '1px', background: 'rgba(197,153,90,0.38)' }} />
              <span style={{
                fontFamily: 'var(--sans)', fontSize: '11px',
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--gold)',
              }}>
                Kot Kailash · Shaukiyathal
              </span>
              <div style={{ width: '28px', height: '1px', background: 'rgba(197,153,90,0.38)' }} />
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          §5  SACRED ARC
      ═══════════════════════════════════════════════════════════════ */}
      <SacredArc />

      {/* ═══════════════════════════════════════════════════════════════
          §6  JOURNEY
      ═══════════════════════════════════════════════════════════════ */}
      <Journey />

      {/* ═══════════════════════════════════════════════════════════════
          §7  CTA — light background breaks the dark run before Reserve
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--parchment)',
        padding: '80px 64px',
        textAlign: 'center',
      }}>
        <RevealWrapper>
          <span style={{
            fontFamily: 'var(--sans)', fontSize: '11px',
            letterSpacing: '0.38em', textTransform: 'uppercase',
            color: 'var(--gold)', display: 'block', marginBottom: '18px',
          }}>
            All six · All included · Nothing extra
          </span>
          <h3 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 300, fontStyle: 'italic',
            color: 'var(--ink)', lineHeight: 1.22, marginBottom: '16px',
          }}>
            Ready to plan your visit?
          </h3>
          <p style={{
            fontFamily: 'var(--serif)', fontSize: '1rem',
            fontStyle: 'italic', color: 'var(--ink-soft)',
            lineHeight: 1.85, maxWidth: '380px',
            margin: '0 auto 36px',
          }}>
            Write to us and we will tell you which season fits what you are
            looking for.
          </p>
          <a
            href="mailto:reach@kotkailash.com?subject=Experience%20Enquiry"
            className="btn-gold"
            style={{ display: 'inline-block' }}
          >
            Ask about your visit
          </a>
          <p style={{
            fontFamily: 'var(--sans)', fontSize: '11px',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'rgba(61,53,48,0.38)', marginTop: '18px',
          }}>
            Or call{' '}
            <a href="tel:+919650264905" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              +91 9650264905
            </a>
          </p>
        </RevealWrapper>
      </section>

      <Reserve />
    </>
  );
}
