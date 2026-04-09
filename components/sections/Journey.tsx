import RevealWrapper from '@/components/ui/RevealWrapper';
import { transportStats, transferPolicy, journeyNarrative } from '@/lib/content/journey';

export default function Journey() {
  return (
    <section
      id="journey"
      style={{
        background: 'var(--forest-deep)',
        padding: '100px 64px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start',
      }}
      className="journey-grid"
    >
      {/* Left: Copy */}
      <RevealWrapper>
        <div className="eyebrow" style={{ color: 'var(--gold)' }}>
          The Journey
        </div>
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.2rem, 3.4vw, 3.2rem)',
            fontWeight: 300,
            color: 'white',
            lineHeight: 1.18,
            marginBottom: '28px',
          }}
        >
          Getting to the{' '}
          <em style={{ color: 'var(--gold-pale)', fontStyle: 'italic' }}>
            ridge.
          </em>
        </h2>
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.48)',
            lineHeight: 1.92,
            fontStyle: 'italic',
          }}
        >
          <p>
            Shaukiyathal is 90km from Kathgodam and 280km from Delhi. The road
            climbs steadily after Almora town. There is no other way to arrive
            than slowly.
          </p>
          <p style={{ marginTop: '18px' }}>
            We consider the drive to be the beginning of the stay, not a
            preamble to it. Guests who arrive by our arranged transfer report
            the transition happens somewhere on the mountain road — the phone
            signal fades, the air changes.
          </p>
        </div>

        <div
          style={{
            marginTop: '36px',
            borderLeft: '2px solid rgba(197,153,90,0.35)',
            paddingLeft: '20px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '7.5px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              opacity: 0.65,
              display: 'block',
              marginBottom: '7px',
            }}
          >
            {journeyNarrative.label}
          </span>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '0.9rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.38)',
              lineHeight: 1.72,
            }}
          >
            {journeyNarrative.text}
          </p>
        </div>
      </RevealWrapper>

      {/* Right: Stats */}
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {transportStats.map((stat, i) => (
            <RevealWrapper key={stat.time} delay={(i as 0 | 1 | 2)}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '18px',
                  padding: '21px 26px',
                  background: 'rgba(255,255,255,0.03)',
                  borderLeft: '1px solid rgba(197,153,90,0.1)',
                  transition: 'background 0.4s, border-left-color 0.4s',
                }}
                className="jstat"
              >
                <style>{`
                  .jstat:hover { background: rgba(197,153,90,0.05) !important; border-left-color: rgba(197,153,90,0.3) !important; }
                `}</style>
                <span style={{ fontSize: '1.25rem', flexShrink: 0, marginTop: '4px' }}>
                  {stat.icon}
                </span>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '7.5px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      display: 'block',
                      marginBottom: '5px',
                    }}
                  >
                    {stat.time}
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '1rem',
                      color: 'white',
                      marginBottom: '4px',
                      lineHeight: 1.2,
                    }}
                  >
                    {stat.route}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '0.8rem',
                      fontStyle: 'italic',
                      color: 'rgba(255,255,255,0.32)',
                      lineHeight: 1.6,
                    }}
                  >
                    {stat.detail}
                  </p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Transfer Policy */}
        <RevealWrapper delay={3}>
          <div
            style={{
              marginTop: '3px',
              padding: '19px 22px',
              background: 'rgba(197,153,90,0.07)',
              border: '1px solid rgba(197,153,90,0.13)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '7.5px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                display: 'block',
                marginBottom: '8px',
              }}
            >
              {transferPolicy.label}
            </span>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '0.83rem',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.42)',
                lineHeight: 1.72,
              }}
            >
              {transferPolicy.text}
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
