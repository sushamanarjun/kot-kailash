import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { experiences } from '@/lib/content/experiences';

interface ExperiencesProps {
  /** When true (standalone /experience page), the section header is hidden
   *  since the page hero already provides the h2 + context. */
  standalone?: boolean;
  /** When true (homepage), shows only 3 cards with a CTA to /experience */
  preview?: boolean;
}

export default function Experiences({ standalone = false, preview = false }: ExperiencesProps) {
  const row1 = experiences.slice(0, 3);
  const row2 = experiences.slice(3);

  return (
    <section
      id="experiences"
      style={{
        background: 'var(--ink)',
        padding: '100px 64px 120px',
      }}
    >
      {/* ── Section header — hidden on standalone page ── */}
      {!standalone && (
        <RevealWrapper>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '72px',
              alignItems: 'end',
              marginBottom: '72px',
            }}
            className="exp-hd-grid"
          >
            <div>
              <div className="eyebrow" style={{ color: 'var(--gold)' }}>
                VI · Experiences
              </div>
              <h2
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(2.4rem, 3.6vw, 3.4rem)',
                  fontWeight: 300,
                  color: 'white',
                  lineHeight: 1.15,
                }}
              >
                Six ways to know
                <br />
                the ridge.
              </h2>
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.9,
                }}
              >
                None of these are scheduled programmes. They are invitations —
                to a trail, a temple, a kitchen, a ridge. Your host arranges
                them around you.
              </p>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.9,
                  marginTop: '15px',
                }}
              >
                All experiences are included in the room rate. There is no
                activities menu. There is a conversation.
              </p>
            </div>
          </div>
        </RevealWrapper>
      )}

      {/* ── Standalone: small section separator ── */}
      {standalone && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '64px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}
          >
            The Six Experiences
          </span>
          <div
            style={{
              flex: 1,
              height: '1px',
              background: 'rgba(255,255,255,0.07)',
            }}
          />
        </div>
      )}

      {/* ── Global card styles ── */}
      <style>{`
        .exp-card-v2 {
          border-top: 2px solid transparent;
          background: rgba(255,255,255,0.022);
          transition: background 0.35s ease, border-top-color 0.35s ease;
          cursor: default;
        }
        .exp-card-v2:hover,
        .exp-card-v2:focus-within {
          background: rgba(139,107,61,0.07) !important;
          border-top-color: var(--gold) !important;
        }
        .exp-card-v2:hover .exp-numeral-ghost,
        .exp-card-v2:focus-within .exp-numeral-ghost {
          color: rgba(139,107,61,0.11) !important;
        }
        .exp-card-v2:hover .exp-duration-label {
          color: rgba(255,255,255,0.75) !important;
        }
      `}</style>

      {/* ── Grid Row 1 ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '3px',
          marginBottom: '3px',
        }}
        className="exp-grid"
        role="list"
        aria-label="Experiences at Kot Kailash, part 1"
      >
        {row1.map((exp, i) => (
          <RevealWrapper key={exp.numeral} delay={(i as 0 | 1 | 2)}>
            <ExperienceCard exp={exp} />
          </RevealWrapper>
        ))}
      </div>

      {/* ── Grid Row 2 — hidden in preview/homepage mode ── */}
      {!preview && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3px',
          }}
          className="exp-grid"
          role="list"
          aria-label="Experiences at Kot Kailash, part 2"
        >
          {row2.map((exp, i) => (
            <RevealWrapper key={exp.numeral} delay={(i as 0 | 1 | 2)}>
              <ExperienceCard exp={exp} />
            </RevealWrapper>
          ))}
        </div>
      )}

      {/* ── CTA strip ── */}
      <RevealWrapper>
        {preview ? (
          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '0.95rem',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.55)',
                marginBottom: '18px',
              }}
            >
              Six curated experiences. All included in your stay.
            </p>
            <Link href="/experience" className="btn-outline">
              See all 6 experiences →
            </Link>
          </div>
        ) : (
          <div
            style={{
              marginTop: '64px',
              padding: '40px 48px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap',
            }}
            className="exp-cta-strip"
          >
            <style>{`
              @media (max-width: 680px) {
                .exp-cta-strip { flex-direction: column !important; text-align: center !important; }
              }
            `}</style>
            <div>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  color: 'white',
                  marginBottom: '4px',
                  lineHeight: 1.3,
                }}
              >
                All six experiences are included.
              </p>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '0.9rem',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.5,
                }}
              >
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
        )}
      </RevealWrapper>
    </section>
  );
}

function ExperienceCard({ exp }: { exp: (typeof experiences)[0] }) {
  return (
    <article
      className="exp-card-v2"
      role="listitem"
      style={{
        padding: '44px 38px 40px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '300px',
      }}
    >
      {/* Ghost numeral — atmospheric background */}
      <span
        className="exp-numeral-ghost"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-12px',
          right: '20px',
          fontFamily: 'var(--serif)',
          fontSize: '6.5rem',
          fontStyle: 'italic',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.04)',
          lineHeight: 1,
          transition: 'color 0.35s ease',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        {exp.numeral}
      </span>

      {/* Small numeral label */}
      <span
        style={{
          fontFamily: 'var(--sans)',
          fontSize: '11px',
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          display: 'block',
          marginBottom: '18px',
          opacity: 0.8,
        }}
        aria-hidden="true"
      >
        {exp.numeral}
      </span>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--serif)',
          fontSize: '1.25rem',
          fontWeight: 300,
          color: 'white',
          lineHeight: 1.25,
          marginBottom: '14px',
        }}
      >
        {exp.name}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--serif)',
          fontSize: '0.92rem',
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.65)',
          lineHeight: 1.82,
          flex: 1,
          marginBottom: '28px',
        }}
      >
        {exp.description}
      </p>

      {/* Duration separator + label */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '16px',
        }}
      >
        <span
          className="exp-duration-label"
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '11px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
            transition: 'color 0.3s ease',
            display: 'block',
          }}
        >
          {exp.duration}
        </span>
      </div>
    </article>
  );
}
