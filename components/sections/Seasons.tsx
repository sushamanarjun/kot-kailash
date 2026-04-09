import RevealWrapper from '@/components/ui/RevealWrapper';
import { seasons } from '@/lib/content/seasons';

export default function Seasons() {
  return (
    <section
      id="seasons"
      style={{
        background: 'var(--ink)',
        padding: '120px 64px',
      }}
    >
      <RevealWrapper>
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.4rem, 3.6vw, 3.4rem)',
            fontWeight: 300,
            color: 'white',
            marginBottom: '64px',
            lineHeight: 1.15,
          }}
        >
          When to come.
        </h2>
      </RevealWrapper>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '2px',
        }}
        className="seasons-grid"
        role="list"
      >
        {seasons.map((season, i) => (
          <RevealWrapper key={season.period} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <article
              style={{
                padding: '28px 20px',
                background: 'rgba(255,255,255,0.02)',
                borderTop: '2px solid rgba(255,255,255,0.04)',
                transition: 'background 0.4s, border-top-color 0.4s',
                height: '100%',
              }}
              className="season-card"
              role="listitem"
            >
              <style>{`
                .season-card:hover { background: rgba(197,153,90,0.05) !important; border-top-color: var(--gold) !important; }
              `}</style>
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '7.5px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  display: 'block',
                  marginBottom: '10px',
                }}
              >
                {season.period}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.1rem',
                  color: 'white',
                  marginBottom: '10px',
                  lineHeight: 1.2,
                }}
              >
                {season.name}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '0.78rem',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.28)',
                  lineHeight: 1.7,
                }}
              >
                {season.description}
              </p>
            </article>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
