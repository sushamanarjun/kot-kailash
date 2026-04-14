import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';
import AqiCard from './AqiCard';

export default function Manifesto() {
  return (
    <section
      id="story"
      style={{
        background: 'var(--parchment)',
        padding: '140px 64px 120px',
        display: 'grid',
        gridTemplateColumns: '1fr 460px',
        gap: '96px',
        alignItems: 'start',
      }}
      className="manifesto-grid"
    >
      {/* Left: Story */}
      <RevealWrapper>
        <div className="eyebrow">I · The Story</div>
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
            fontWeight: 300,
            lineHeight: 1.18,
            letterSpacing: '-0.01em',
            color: 'var(--ink)',
            marginBottom: '32px',
          }}
        >
          Not a hotel.
          <br />
          Not a homestay.
          <br />
          <em style={{ color: 'var(--rust)', fontStyle: 'italic' }}>
            A different kind of place.
          </em>
        </h2>
        <div
          style={{
            fontSize: '1.1rem',
            fontWeight: 300,
            color: 'var(--ink-soft)',
            lineHeight: 1.92,
            fontFamily: 'var(--serif)',
          }}
        >
          <p>
            In the village of Kunja Gunth, on the Shaukiyathal ridge in Almora,
            there is a hundred-year-old Kumaoni house. Its walls are
            hand-pressed mud plaster. Its floors are traditional clay. The cedar
            and oak forests have been there longer than the house. The air
            quality index, on most days, runs in single digits.
          </p>
          <p style={{ marginTop: '18px' }}>
            Kot Kailash sits in a category the Indian luxury hospitality market
            is only beginning to find language for: a place where Kumaoni
            culture is not the backdrop — it is the entire point. Living close
            to the land. Eating what the village grows. Walking trails that have
            no signboards. A stay that asks nothing of you except that you
            arrive with time to spend.
          </p>
          <p style={{ marginTop: '18px' }}>
            The founders call this{' '}
            <strong style={{ fontWeight: 400 }}>Professionalized Intimacy.</strong>
          </p>
        </div>
        <div
          style={{
            marginTop: '32px',
            borderLeft: '2px solid var(--gold)',
            paddingLeft: '18px',
            fontFamily: 'var(--sans)',
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
          }}
        >
          Three years in · Eight keys across three houses · One ridge
        </div>
        <Link
          href="/about"
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '11px',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(138,90,56,0.22)',
            paddingBottom: '2px',
            marginTop: '22px',
            display: 'inline-block',
            transition: 'color 0.3s',
          }}
        >
          Our full story →
        </Link>
      </RevealWrapper>

      {/* Right: Pull Quote + AQI */}
      <RevealWrapper delay={2}>
        <div
          style={{
            borderLeft: '2px solid var(--gold)',
            padding: '0 0 0 26px',
            marginBottom: '40px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.38rem',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--ink)',
              lineHeight: 1.55,
            }}
          >
            &ldquo;Some guests come for the mountain. Some come for the silence.
            The ones who stay longest come for the library.&rdquo;
          </p>
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              display: 'block',
              marginTop: '12px',
            }}
          >
            — Pushkar Singh Negi, Co-Founder &amp; GM
          </span>
        </div>

        <AqiCard />
      </RevealWrapper>
    </section>
  );
}
