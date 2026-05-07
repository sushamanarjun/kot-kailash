import type { Metadata } from 'next';
import Image from 'next/image';
import { buildMetadata } from '@/lib/seo';
import { experiences } from '@/lib/content/experiences';
import SacredArc from '@/components/sections/SacredArc';
import Reserve from '@/components/sections/Reserve';
import RevealWrapper from '@/components/ui/RevealWrapper';

export const metadata: Metadata = buildMetadata({
  title: 'The Ridge — Experiences at Kot Kailash, Jageshwar, Kumaon',
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

const promises = [
  { label: 'Discuss with your host.', detail: 'Tell us what draws you. We will find the right trail, temple, or table.' },
  { label: 'No Programme', detail: 'No schedule. No activities desk. A conversation is how it begins.' },
  { label: 'Host-Arranged', detail: 'Your host walks with you or shows you the way.' },
];

const EXP_IMAGES: Record<string, string> = {
  '01': '/images/experiences/walk-to-jageshwar.jpg',
  '02': '/images/experiences/jageshwar.jpeg',
  '03': '/images/experiences/trek-to-bimalkot.jpg',
  '04': '/images/experiences/bird-watching.jpg',
  '05': '/images/experiences/yoga.jpg',
  '06': '/images/experiences/culinary-class.jpeg',
  '07': '/images/experiences/jata-ganga.jpg',
  '08': '/images/experiences/udiyar-caves.jpg',
  '09': '/images/experiences/village-picnic.jpg',
};

export default function ExperiencePage() {
  return (
    <>
      <h1 className="sr-only">
        The Ridge — Experiences at Kot Kailash, Jageshwar, Kumaon
      </h1>

      {/* ═══════════════════════════════════════════════════════════════
          §1  FULL-VIEWPORT HERO
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

        <Image
          src="/images/kot-kailash-ridge-shaukiyathal.jpg"
          alt="Ridge view from Kot Kailash, Shaukiyathal — 7,800 ft"
          fill
          priority
          style={{ objectFit: 'cover', zIndex: 0 }}
        />

        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to top, rgba(10,8,5,0.97) 0%, rgba(10,8,5,0.75) 30%, rgba(10,8,5,0.3) 60%, transparent 100%)',
        }} />

        <div aria-hidden="true" style={{
          position: 'absolute', top: '50%', left: '50%', zIndex: 1,
          transform: 'translate(-50%,-50%)',
          fontFamily: 'var(--serif)', fontSize: 'clamp(10rem, 28vw, 26rem)',
          fontStyle: 'italic', fontWeight: 300,
          color: 'rgba(255,255,255,0.022)', lineHeight: 1,
          userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap',
        }}>
          IX
        </div>

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
              The Ridge &nbsp;·&nbsp; Kot Kailash
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
              Several Ways to
              <br />
              <em style={{ fontStyle: 'normal', color: 'rgba(255,255,255,0.38)' }}>Know the Ridge.</em>
            </h2>
            <p style={{
              fontFamily: 'var(--serif)', fontSize: '1.05rem',
              fontStyle: 'italic', color: 'rgba(255,255,255,0.58)',
              lineHeight: 1.88, maxWidth: '500px',
            }}>
              The ridge has a rhythm. The forest has its trails. The kitchen
              follows the harvest. Every experience at Kot Kailash begins where
              the property ends — in the landscape itself.
            </p>
            <p style={{
              fontFamily: 'var(--serif)', fontSize: '0.88rem',
              fontStyle: 'italic', color: 'rgba(255,255,255,0.35)',
              lineHeight: 1.85, maxWidth: '480px', marginTop: '20px',
            }}>
              Nothing here is scheduled. Nothing is managed from a desk. Tell us
              what draws you, and we will find the right trail, temple, kitchen,
              or morning. Some of what this ridge offers cannot be arranged in
              advance. Some of it can only be discovered.
            </p>
          </div>

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
          §2b  BURĀNSH NOTE
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--ink)',
        padding: '0 64px 56px',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}>
        <p style={{
          fontFamily: 'var(--serif)',
          fontSize: '0.95rem',
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.62)',
          lineHeight: 1.8,
          maxWidth: '640px',
        }}>
          <span style={{
            fontFamily: 'var(--sans)',
            fontSize: '10px',
            fontStyle: 'normal',
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
          }}>Burānsh</span>
          {' '}— our sound healing retreat programme in collaboration with Cchitvan, Dhrupad scholars — runs by invitation. The next edition is being considered for October 2026. Enquiries:{' '}
          <a
            href="mailto:info@kotkailash.com"
            style={{ color: 'rgba(197,153,90,0.85)', textDecoration: 'none' }}
          >
            info@kotkailash.com
          </a>
        </p>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          §3  EXPERIENCES — alternating editorial rows
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{ background: 'var(--ink)' }}
        aria-label="Nine experiences at Kot Kailash"
      >
        <style>{`
          .exp-row-img { transition: transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94); }
          .exp-row:hover .exp-row-img { transform: scale(1.04); }
          .exp-row:hover .exp-row-numeral-ghost { opacity: 0.08 !important; }
          .exp-arrange-link { transition: color 0.3s ease, border-bottom-color 0.3s ease; }
          .exp-arrange-link:hover { color: var(--gold) !important; border-bottom-color: rgba(197,153,90,0.7) !important; }
          @media (max-width: 860px) {
            .exp-row-inner  { grid-template-columns: 1fr !important; }
            .exp-row-image  { min-height: 280px !important; order: -1 !important; }
            .exp-row-text   { padding: 52px 32px !important; }
          }
        `}</style>

        {experiences.map((exp, i) => {
          const imageLeft = i % 2 === 0;
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
                    alignItems: 'stretch',
                  }}
                >
                  {imageLeft && (
                    <div
                      className="exp-row-image"
                      style={{ position: 'relative', minHeight: '520px', overflow: 'hidden' }}
                    >
                      <Image
                        src={EXP_IMAGES[exp.numeral] ?? '/images/kot-kailash-ridge-shaukiyathal.jpg'}
                        alt={exp.name}
                        fill
                        loading="lazy"
                        sizes="(max-width:860px) 100vw, 52vw"
                        style={{ objectFit: 'cover', objectPosition: 'bottom' }}
                        className="exp-row-img"
                      />
                    </div>
                  )}

                  {/* Text content */}
                  <div
                    className="exp-row-text"
                    style={{
                      padding: '64px 72px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Ghost numeral */}
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
                      {/* Numeral + duration eyebrow */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                        <span style={{
                          fontFamily: 'var(--sans)', fontSize: '11px',
                          letterSpacing: '0.32em', textTransform: 'uppercase',
                          color: 'var(--gold)',
                        }}>
                          {exp.numeral}
                        </span>
                        <span style={{
                          fontFamily: 'var(--sans)', fontSize: '10px',
                          letterSpacing: '0.16em', textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.3)',
                        }}>
                          {exp.duration}
                        </span>
                      </div>

                      {/* Name */}
                      <h3 style={{
                        fontFamily: 'var(--serif)',
                        fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)',
                        fontWeight: 300, fontStyle: 'italic',
                        color: 'white', lineHeight: 1.18, marginBottom: '10px',
                      }}>
                        {exp.name}
                      </h3>

                      {/* Tagline */}
                      <p style={{
                        fontFamily: 'var(--serif)', fontSize: '0.95rem',
                        fontStyle: 'italic', color: 'rgba(255,255,255,0.42)',
                        lineHeight: 1.65, maxWidth: '420px', marginBottom: '24px',
                      }}>
                        {exp.description}
                      </p>

                      {/* Body copy */}
                      {exp.longDescription.split('\n\n').map((para, j) => (
                        <p key={j} style={{
                          fontFamily: 'var(--serif)', fontSize: '0.9rem',
                          color: 'rgba(255,255,255,0.6)',
                          lineHeight: 1.85, maxWidth: '420px',
                          marginTop: j > 0 ? '14px' : 0,
                        }}>
                          {para}
                        </p>
                      ))}

                      {/* Price + arrange */}
                      {/* <div style={{
                        marginTop: '28px', paddingTop: '22px',
                        borderTop: '1px solid rgba(255,255,255,0.08)',
                      }}>
                        <div style={{
                          display: 'flex', alignItems: 'baseline',
                          gap: '12px', marginBottom: '8px', flexWrap: 'wrap',
                        }}>
                          <span style={{
                            fontFamily: 'var(--serif)', fontSize: '1.15rem',
                            fontStyle: 'italic', color: 'var(--gold)',
                          }}>
                            {exp.price}
                          </span>
                          <span style={{
                            fontFamily: 'var(--sans)', fontSize: '10px',
                            letterSpacing: '0.14em', textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.32)',
                          }}>
                            {exp.priceNote}
                          </span>
                        </div>
                        {exp.priceExtra && (
                          <p style={{
                            fontFamily: 'var(--sans)', fontSize: '10px',
                            letterSpacing: '0.14em', textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.28)', marginBottom: '16px',
                          }}>
                            {exp.priceExtra}
                          </p>
                        )}
                        <a
                          href={`mailto:info@kotkailash.com?subject=Arrange — ${exp.name}`}
                          className="exp-arrange-link"
                          style={{
                            fontFamily: 'var(--sans)', fontSize: '11px',
                            letterSpacing: '0.22em', textTransform: 'uppercase',
                            color: 'rgba(197,153,90,0.7)', textDecoration: 'none',
                            borderBottom: '1px solid rgba(197,153,90,0.25)',
                            paddingBottom: '2px',
                            display: 'inline-block',
                            marginTop: exp.priceExtra ? 0 : '16px',
                          }}
                        >
                          Arrange with us →
                        </a>
                      </div> */}
                    </div>
                  </div>

                  {!imageLeft && (
                    <div
                      className="exp-row-image"
                      style={{ position: 'relative', minHeight: '520px', overflow: 'hidden' }}
                    >
                      <Image
                        src={EXP_IMAGES[exp.numeral] ?? '/images/kot-kailash-ridge-shaukiyathal.jpg'}
                        alt={exp.name}
                        fill
                        loading="lazy"
                        sizes="(max-width:860px) 100vw, 52vw"
                        style={{ objectFit: 'cover', objectPosition: 'bottom' }}
                        className="exp-row-img"
                      />
                    </div>
                  )}
                </div>
              </div>
            </RevealWrapper>
          );
        })}
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          §3b  BEYOND THE PROPERTY
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--ink)',
        borderTop: '1px solid rgba(255,255,255,0.055)',
        padding: '100px 64px',
      }}
        className="beyond-section"
      >
        <style>{`
          @media (max-width: 860px) {
            .beyond-section { padding: 72px 32px !important; }
            .beyond-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
            .beyond-headline { font-size: clamp(3rem, 10vw, 4.5rem) !important; }
          }
        `}</style>
        <RevealWrapper>
          <div
            className="beyond-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.1fr',
              gap: '80px',
              alignItems: 'start',
              maxWidth: '1200px',
            }}
          >
            <div>
              <span style={{
                fontFamily: 'var(--sans)', fontSize: '11px',
                letterSpacing: '0.32em', textTransform: 'uppercase',
                color: 'var(--gold)', display: 'block', marginBottom: '28px',
              }}>
                Beyond the Ridge
              </span>
              <h3
                className="beyond-headline"
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(2.6rem, 4.5vw, 4.2rem)',
                  fontWeight: 300, fontStyle: 'italic',
                  color: 'white', lineHeight: 1.1,
                }}
              >
                The Kumaon
                <br />
                does not end
                <br />
                <span style={{ color: 'rgba(255,255,255,0.32)' }}>at our gate.</span>
              </h3>
            </div>

            <div style={{
              paddingTop: '8px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}>
              <p style={{
                fontFamily: 'var(--serif)', fontSize: '1.05rem',
                fontStyle: 'italic', color: 'rgba(255,255,255,0.62)',
                lineHeight: 1.9, marginBottom: '28px',
              }}>
                The sacred sites, forest trails, waterfall descents, and the wildlife
                at Shaukiyathal are not managed attractions. They are the living
                landscape of this ridge — ancient, unhurried, and entirely genuine.
              </p>
              <p style={{
                fontFamily: 'var(--serif)', fontSize: '0.92rem',
                fontStyle: 'italic', color: 'rgba(255,255,255,0.38)',
                lineHeight: 1.85,
              }}>
                All experiences are arranged through our team. We recommend telling
                us the evening before. Some of what this ridge offers requires no
                arrangement at all — only the willingness to step outside and begin.
              </p>
            </div>
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
      <SacredArc standalone />


      {/* ═══════════════════════════════════════════════════════════════
          §7  CTA
      ═══════════════════════════════════════════════════════════════ */}
      {/* <section style={{
        background: 'var(--parchment)',
        padding: '80px 64px',
        textAlign: 'center',
      }}>
        <RevealWrapper>
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
            href="mailto:info@kotkailash.com?subject=Experience%20Enquiry"
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
      </section> */}

      <Reserve />
    </>
  );
}
