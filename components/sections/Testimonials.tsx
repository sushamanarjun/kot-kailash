import RevealWrapper from '@/components/ui/RevealWrapper';
import { testimonials } from '@/lib/content/testimonials';

export default function Testimonials() {
  return (
    <section
      style={{
        background: 'var(--ink)',
        padding: '96px 64px',
      }}
      aria-label="Guest testimonials"
    >
      <RevealWrapper>
        <div className="eyebrow" style={{ color: 'var(--gold)' }}>
          V · What Guests Say
        </div>
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2rem, 3vw, 2.8rem)',
            fontWeight: 300,
            color: 'white',
            marginBottom: '52px',
            lineHeight: 1.2,
          }}
        >
          In their words.
        </h2>
      </RevealWrapper>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '28px',
        }}
        className="testi-grid"
      >
        {testimonials.map((t, i) => (
          <RevealWrapper key={t.author} delay={(i as 0 | 1 | 2)}>
            <blockquote
              style={{
                padding: '32px',
                border: '1px solid rgba(255,255,255,0.04)',
                transition: 'border-color 0.4s',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
              className="testi-card"
            >
              <style>{`
                .testi-card:hover { border-color: rgba(197,153,90,0.16) !important; }
              `}</style>
              {/* Stars */}
              <div
                style={{
                  color: 'var(--gold)',
                  fontSize: '0.85rem',
                  letterSpacing: '4px',
                  marginBottom: '15px',
                }}
                aria-label="5 stars"
              >
                ★★★★★
              </div>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '0.9rem',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.85,
                  marginBottom: '18px',
                  flex: 1,
                }}
              >
                {t.text}
              </p>
              <footer
                style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    flexShrink: 0,
                    background: 'rgba(197,153,90,0.07)',
                    border: '1px solid rgba(197,153,90,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--sans)',
                    fontSize: '0.65rem',
                    color: 'var(--gold)',
                  }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '11px',
                      letterSpacing: '0.13em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.55)',
                      display: 'block',
                    }}
                  >
                    {t.author}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      color: 'rgba(139,107,61,1)',
                    }}
                  >
                    {t.source}
                  </span>
                </div>
              </footer>
            </blockquote>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
