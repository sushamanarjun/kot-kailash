import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import RevealWrapper from '@/components/ui/RevealWrapper';
import Reserve from '@/components/sections/Reserve';

export const metadata: Metadata = buildMetadata({
  title: 'Press | Kot Kailash — Heritage Retreat, Kumaon',
  description:
    'Kot Kailash in the press. Read what Condé Nast Traveller and other publications have written about the heritage ridge retreat at Shaukiyathal, Almora.',
  path: '/press',
});

const coverage = [
  {
    publication: 'Condé Nast Traveller',
    publicationShort: 'CNT',
    year: '2024',
    title: 'Kot Kailash, Almora — A Heritage Retreat in the Kumaon Himalayas',
    descriptor:
      'The Condé Nast Traveller team visited Kot Kailash and wrote about the ridge, the restored farmhouses, the kitchen, and the particular quiet that settles over the property at dawn.',
    href: 'https://www.cntraveller.in/story/kot-kailash-almora-uttarakhand-homestay/',
    label: 'Condé Nast Traveller India',
    featured: true,
  },
];

export default function PressPage() {
  return (
    <>
      <h1 className="sr-only">Press Coverage — Kot Kailash Heritage Retreat, Kumaon</h1>

      <style>{`
        @keyframes pressFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .press-anim { animation: none !important; opacity: 1 !important; }
        }
        @media (max-width: 860px) {
          .press-card-inner { grid-template-columns: 1fr !important; }
          .press-card-deco   { display: none !important; }
        }
        @media (max-width: 680px) {
          .press-hero-pad { padding: 120px 28px 72px !important; }
          .press-body-pad { padding: 72px 28px !important; }
          .press-enquiry  { flex-direction: column !important; text-align: center !important; }
        }
      `}</style>

      {/* ── §1 Hero ──────────────────────────────────────────── */}
      <section
        className="press-hero-pad"
        style={{
          background: 'var(--ink)',
          padding: '160px 64px 100px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ghost watermark */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '-8%',
            right: '-2%',
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(10rem, 22vw, 20rem)',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.018)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '-0.04em',
          }}
        >
          Press
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px' }}>
          <div
            className="press-anim"
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '10px',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              animation: 'pressFadeUp 0.8s ease both',
              animationDelay: '0.1s',
              opacity: 0,
            }}
          >
            <span
              style={{
                width: '28px',
                height: '1px',
                background: 'var(--gold)',
                opacity: 0.45,
                flexShrink: 0,
              }}
            />
            Press &amp; Media
          </div>

          <h2
            className="press-anim"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2.8rem, 4.5vw, 4.8rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'white',
              lineHeight: 1.08,
              marginBottom: '22px',
              animation: 'pressFadeUp 0.8s ease both',
              animationDelay: '0.28s',
              opacity: 0,
            }}
          >
            The world has
            <br />
            <span style={{ color: 'rgba(255,255,255,0.32)', fontStyle: 'normal' }}>
              found the ridge.
            </span>
          </h2>

          <p
            className="press-anim"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.48)',
              lineHeight: 1.85,
              maxWidth: '440px',
              animation: 'pressFadeUp 0.8s ease both',
              animationDelay: '0.44s',
              opacity: 0,
            }}
          >
            Kot Kailash has been recognised by some of the world&rsquo;s most
            discerning travel publications. Below is a record of that coverage.
          </p>
        </div>
      </section>

      {/* ── §2 Coverage cards ────────────────────────────────── */}
      <section
        className="press-body-pad"
        style={{
          background: 'var(--parchment)',
          padding: '100px 64px',
        }}
      >
        <RevealWrapper>
          <div
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '10px',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '52px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            Featured Coverage
            <span
              style={{
                flex: 1,
                height: '1px',
                background: 'rgba(26,22,18,0.1)',
                maxWidth: '120px',
              }}
            />
          </div>
        </RevealWrapper>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3px',
          }}
        >
          {coverage.map((item) => (
            <RevealWrapper key={item.href}>
              <article
                style={{
                  background: 'white',
                  boxShadow: 'inset 4px 0 0 var(--gold)',
                  padding: '0',
                  transition: 'box-shadow 0.3s ease, background 0.3s ease',
                }}
                className="press-card"
              >
                <style>{`
                  .press-card:hover {
                    background: rgba(139,107,61,0.03) !important;
                  }
                  .press-card:hover .press-read-link {
                    color: var(--rust) !important;
                    border-color: rgba(155,58,42,0.3) !important;
                  }
                `}</style>

                <div
                  className="press-card-inner"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 220px',
                    gap: '0',
                  }}
                >
                  {/* Main content */}
                  <div style={{ padding: '52px 56px 52px 48px' }}>
                    {/* Publication + year row */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        marginBottom: '20px',
                        flexWrap: 'wrap',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--serif)',
                          fontSize: '1rem',
                          fontVariant: 'small-caps',
                          fontWeight: 400,
                          letterSpacing: '0.06em',
                          color: 'var(--ink)',
                        }}
                      >
                        {item.publication}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--sans)',
                          fontSize: '10px',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: 'rgba(61,53,48,0.4)',
                          background: 'rgba(139,107,61,0.07)',
                          padding: '3px 10px',
                        }}
                      >
                        {item.year}
                      </span>
                      {item.featured && (
                        <span
                          style={{
                            fontFamily: 'var(--sans)',
                            fontSize: '10px',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: 'var(--gold)',
                            background: 'rgba(139,107,61,0.07)',
                            padding: '3px 10px',
                          }}
                        >
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Article title */}
                    <h3
                      style={{
                        fontFamily: 'var(--serif)',
                        fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)',
                        fontWeight: 300,
                        fontStyle: 'italic',
                        color: 'var(--ink)',
                        lineHeight: 1.25,
                        marginBottom: '16px',
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Descriptor */}
                    <p
                      style={{
                        fontFamily: 'var(--serif)',
                        fontSize: '0.9rem',
                        fontStyle: 'italic',
                        color: 'var(--ink-soft)',
                        lineHeight: 1.85,
                        maxWidth: '560px',
                        marginBottom: '28px',
                      }}
                    >
                      {item.descriptor}
                    </p>

                    {/* Read link */}
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="press-read-link"
                      style={{
                        fontFamily: 'var(--sans)',
                        fontSize: '11px',
                        letterSpacing: '0.24em',
                        textTransform: 'uppercase',
                        color: 'var(--gold)',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(138,90,56,0.28)',
                        paddingBottom: '2px',
                        transition: 'color 0.3s, border-color 0.3s',
                        display: 'inline-block',
                      }}
                    >
                      Read on {item.label} →
                    </a>
                  </div>

                  {/* Decorative right column */}
                  <div
                    className="press-card-deco"
                    style={{
                      background: 'var(--parchment)',
                      borderLeft: '1px solid rgba(26,22,18,0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '40px 28px',
                      gap: '8px',
                    }}
                    aria-hidden="true"
                  >
                    <span
                      style={{
                        fontFamily: 'var(--serif)',
                        fontSize: '5rem',
                        fontStyle: 'italic',
                        fontWeight: 300,
                        color: 'rgba(139,107,61,0.12)',
                        lineHeight: 1,
                        userSelect: 'none',
                      }}
                    >
                      I
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--sans)',
                        fontSize: '9px',
                        letterSpacing: '0.28em',
                        textTransform: 'uppercase',
                        color: 'rgba(61,53,48,0.3)',
                        textAlign: 'center',
                      }}
                    >
                      First
                      <br />
                      Coverage
                    </span>
                  </div>
                </div>
              </article>
            </RevealWrapper>
          ))}
        </div>

        {/* More to come note */}
        <RevealWrapper>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '0.88rem',
              fontStyle: 'italic',
              color: 'rgba(61,53,48,0.38)',
              marginTop: '32px',
              textAlign: 'center',
              lineHeight: 1.7,
            }}
          >
            Coverage updated as it appears.
          </p>
        </RevealWrapper>
      </section>

      {/* ── §3 Press enquiries ───────────────────────────────── */}
      <section
        style={{
          background: 'var(--ink)',
          padding: '72px 64px',
        }}
      >
        <RevealWrapper>
          <div
            className="press-enquiry"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              maxWidth: '860px',
              margin: '0 auto',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '10px',
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '10px',
                  opacity: 0.8,
                }}
              >
                Press &amp; Media Enquiries
              </div>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.72)',
                  lineHeight: 1.65,
                  maxWidth: '440px',
                }}
              >
                For interviews, FAM stays, photography trips, or media partnerships — write to us directly.
              </p>
            </div>
            <a
              href="mailto:info@kotkailash.com?subject=Press%20Enquiry%20%E2%80%94%20Kot%20Kailash"
              className="btn-outline"
              style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              Contact for Press
            </a>
          </div>
        </RevealWrapper>
      </section>

      <Reserve />
    </>
  );
}
