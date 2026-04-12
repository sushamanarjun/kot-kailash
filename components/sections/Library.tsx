import Image from 'next/image';
import RevealWrapper from '@/components/ui/RevealWrapper';

export default function Library() {
  return (
    <section
      id="library"
      style={{
        background: 'var(--parchment)',
        padding: '120px 64px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}
      className="library-grid"
    >
      {/* Left: Image */}
      <RevealWrapper>
        <div style={{ position: 'relative' }}>
          {/* Gold accent line */}
          <div
            style={{
              position: 'absolute',
              top: '-14px',
              left: '40px',
              width: '2px',
              height: '80px',
              background: 'var(--gold)',
              zIndex: 1,
            }}
            aria-hidden="true"
          />
          <div style={{ width: '100%', height: '540px', overflow: 'hidden' }}>
            <Image
              src="/images/library.webp"
              alt="The library at Kot Kailash — curated books on Kumaon, the Himalayas, and India"
              width={800}
              height={540}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </RevealWrapper>

      {/* Right: Text */}
      <RevealWrapper delay={2}>
        <div className="eyebrow">III · The Library</div>
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.4rem, 3.6vw, 3.4rem)',
            fontWeight: 300,
            lineHeight: 1.15,
            marginBottom: '20px',
            color: 'var(--ink)',
          }}
        >
          A room built
          <br />
          for staying longer.
        </h2>
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '1.02rem',
            color: 'var(--ink-soft)',
            lineHeight: 1.9,
          }}
        >
          <p>
            The library at Kot Kailash is not a shelf of airport novels. It is
            a curated collection of books on Kumaon, the Himalayan ecosystem,
            Indian natural history, and the literary tradition of the mountains.
            E.O. Wilson sits next to Jim Corbett. Ruskin Bond next to
            Shikhandi.
          </p>
          <p style={{ marginTop: '15px' }}>
            There are also four guitars, a chess set that was used by a previous
            generation of the family, and a fire that is lit at 6pm every
            evening between October and March.
          </p>
          <p style={{ marginTop: '15px' }}>
            Guests who arrive for two nights and stay for seven frequently cite
            the library as the reason.
          </p>
        </div>

        {/* Pull Quote */}
        <div
          style={{
            marginTop: '40px',
            background: 'var(--ink)',
            padding: '28px 32px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.08rem',
              fontStyle: 'italic',
              color: 'white',
              lineHeight: 1.62,
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
            — Pushkar Singh Negi
          </span>
        </div>
      </RevealWrapper>
    </section>
  );
}
