import RevealWrapper from '@/components/ui/RevealWrapper';

export default function AltitudeNote() {
  return (
    <section
      style={{
        background: 'var(--parchment)',
        padding: '72px 64px',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '80px',
        alignItems: 'start',
        borderTop: '1px solid var(--fog)',
      }}
      className="altitude-grid"
      aria-label="Note on pricing at altitude"
    >
      <RevealWrapper>
        <span
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '11px',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            display: 'block',
          }}
        >
          A note on altitude
        </span>
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '1.55rem',
            fontWeight: 300,
            color: 'var(--ink)',
            lineHeight: 1.4,
            marginTop: '12px',
          }}
        >
          Why things cost what they cost at 7,800 feet.
        </h2>
      </RevealWrapper>

      <RevealWrapper delay={2}>
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '1rem',
            color: 'var(--ink-soft)',
            lineHeight: 1.9,
            fontStyle: 'italic',
          }}
        >
          <p>
            Everything that arrives at Kot Kailash travels the last 30km on a
            mountain road that takes an hour each way.{' '}
            <strong
              style={{
                fontStyle: 'normal',
                fontWeight: 400,
                color: 'var(--ink)',
              }}
            >
              A gas cylinder that costs ₹900 in Almora town costs ₹1,100 by
              the time it reaches the ridge.
            </strong>{' '}
            A plumber, an electrician, a carpenter: each one is a 90-minute
            round trip minimum.
          </p>
          <p style={{ marginTop: '14px' }}>
            We do not use this as an excuse. We use it as a context. The rates
            at Kot Kailash reflect what it actually costs to maintain a
            hundred-year-old property at altitude to the standard we have set.
            They also reflect what it costs to pay the people who work here
            fairly, and to source food from within the village rather than from
            a wholesale supplier three hours away.
          </p>
          <p style={{ marginTop: '14px' }}>
            <strong
              style={{
                fontStyle: 'normal',
                fontWeight: 400,
                color: 'var(--ink)',
              }}
            >
              What you pay here goes further, geographically and socially, than
              what you pay in a city hotel at the same price point.
            </strong>
          </p>
        </div>
      </RevealWrapper>
    </section>
  );
}
