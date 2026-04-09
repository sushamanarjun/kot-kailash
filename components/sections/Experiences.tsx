import RevealWrapper from '@/components/ui/RevealWrapper';
import { experiences } from '@/lib/content/experiences';

export default function Experiences() {
  const row1 = experiences.slice(0, 3);
  const row2 = experiences.slice(3);

  return (
    <section
      id="experiences"
      style={{
        background: 'var(--ink)',
        padding: '120px 64px',
      }}
    >
      {/* Header */}
      <RevealWrapper>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '72px',
            alignItems: 'end',
            marginBottom: '68px',
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
                color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.9,
              }}
            >
              None of these are scheduled programmes. They are invitations — to
              a trail, a temple, a kitchen, a ridge. Your host arranges them
              around you.
            </p>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1rem',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.4)',
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

      {/* Grid Row 1 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '3px',
          marginBottom: '3px',
        }}
        className="exp-grid"
      >
        {row1.map((exp, i) => (
          <RevealWrapper key={exp.numeral} delay={(i as 0 | 1 | 2)}>
            <ExperienceCard exp={exp} />
          </RevealWrapper>
        ))}
      </div>

      {/* Grid Row 2 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '3px',
        }}
        className="exp-grid"
      >
        {row2.map((exp, i) => (
          <RevealWrapper key={exp.numeral} delay={(i as 0 | 1 | 2)}>
            <ExperienceCard exp={exp} />
          </RevealWrapper>
        ))}
      </div>

      {/* CTA */}
      <RevealWrapper>
        <div
          style={{
            marginTop: '48px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '0.95rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.28)',
              marginBottom: '22px',
            }}
          >
            All experiences are included. No extra charges.
          </p>
          <a
            href="mailto:stay@kotkailash.com?subject=Experience%20Enquiry"
            className="btn-outline"
          >
            Ask about your visit
          </a>
        </div>
      </RevealWrapper>
    </section>
  );
}

function ExperienceCard({ exp }: { exp: (typeof experiences)[0] }) {
  return (
    <article
      style={{
        padding: '34px 30px',
        background: 'rgba(255,255,255,0.025)',
        borderTop: '2px solid rgba(255,255,255,0.04)',
        transition: 'background 0.4s, border-top-color 0.4s',
      }}
      className="exp-card"
    >
      <style>{`
        .exp-card:hover { background: rgba(197,153,90,0.05) !important; border-top-color: var(--gold) !important; }
      `}</style>
      <span
        style={{
          fontFamily: 'var(--caps)',
          fontSize: '1.85rem',
          color: 'rgba(197,153,90,0.07)',
          display: 'block',
          lineHeight: 1,
          marginBottom: '14px',
        }}
        aria-hidden="true"
      >
        {exp.numeral}
      </span>
      <h3
        style={{
          fontFamily: 'var(--serif)',
          fontSize: '1.1rem',
          color: 'white',
          marginBottom: '9px',
          lineHeight: 1.2,
        }}
      >
        {exp.name}
      </h3>
      <p
        style={{
          fontFamily: 'var(--serif)',
          fontSize: '0.8rem',
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.33)',
          lineHeight: 1.72,
        }}
      >
        {exp.description}
      </p>
      <span
        style={{
          fontFamily: 'var(--sans)',
          fontSize: '7.5px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginTop: '14px',
          display: 'block',
        }}
      >
        {exp.duration}
      </span>
    </article>
  );
}
