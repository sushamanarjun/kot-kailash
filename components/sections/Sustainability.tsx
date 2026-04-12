import RevealWrapper from '@/components/ui/RevealWrapper';
import { principles } from '@/lib/content/sustainability';

export default function Sustainability() {
  return (
    <section
      id="sustainability"
      style={{
        background: 'var(--forest)',
        padding: '96px 64px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}
      className="sustain-grid"
    >
      {/* Left: Copy */}
      <RevealWrapper>
        <div className="eyebrow" style={{ color: 'var(--gold)' }}>
          VIII · How We Work
        </div>
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2rem, 3vw, 2.8rem)',
            fontWeight: 300,
            color: 'white',
            lineHeight: 1.2,
            marginBottom: '18px',
          }}
        >
          A property that is
          <br />
          part of the ridge,
          <br />
          not on top of it.
        </h2>
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '0.98rem',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.46)',
            lineHeight: 1.9,
          }}
        >
          We have four principles that govern how Kot Kailash operates. They
          are not marketing statements. They are the conditions under which we
          believe a property like this can exist with integrity.
        </p>
      </RevealWrapper>

      {/* Right: Principles */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
        {principles.map((p, i) => (
          <RevealWrapper key={p.numeral} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                padding: '19px 21px',
                background: 'rgba(255,255,255,0.03)',
                borderLeft: '2px solid rgba(197,153,90,0.2)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '1.1rem',
                  color: 'var(--gold)',
                  opacity: 0.38,
                  flexShrink: 0,
                  lineHeight: 1,
                  marginTop: '2px',
                }}
                aria-hidden="true"
              >
                {p.numeral}
              </span>
              <div>
                <strong
                  style={{
                    display: 'block',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    color: 'white',
                    marginBottom: '2px',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--serif)',
                  }}
                >
                  {p.title}
                </strong>
                <p
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '0.86rem',
                    color: 'rgba(255,255,255,0.5)',
                    fontStyle: 'italic',
                    lineHeight: 1.7,
                  }}
                >
                  {p.body}
                </p>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
