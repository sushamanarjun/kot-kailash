import Image from 'next/image';
import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';

export default function Tehni({ compact }: { compact?: boolean }) {
  return (
    <section
      id="tehni"
      style={{
        background: 'var(--cream)',
        padding: '120px 64px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}
      className="tehni-grid"
    >
      {/* Left: Text */}
      <RevealWrapper>
        <div className="eyebrow">III · Tehni</div>
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.4rem, 3.6vw, 3.4rem)',
            fontWeight: 300,
            color: 'var(--ink)',
            lineHeight: 1.15,
            marginBottom: '24px',
          }}
        >
          The kitchen
          <br />
          as a{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
            curriculum.
          </em>
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
            Tehni is the Kumaoni word for the kitchen — literally, the place
            where things are made ready. At Kot Kailash, the kitchen is where
            the ridge expresses itself most directly.
          </p>
          {!compact && (
            <p style={{ marginTop: '15px' }}>
              Everything that comes out of it is either grown on the property,
              sourced from the village, or procured from farmers within the
              district. The mandua (finger millet) flour for the rotis comes from
              the terraced fields below. The bhatt (black soybean) is a Kumaoni
              staple that most guests have never encountered. The rhododendron
              sherbet is seasonal and irreplaceable.
            </p>
          )}
        </div>

        <div style={{ marginTop: '28px' }}>
          <Link
            href="/tehni"
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(138,90,56,0.22)',
              paddingBottom: '2px',
              transition: 'color 0.3s',
            }}
          >
            Explore Tehni →
          </Link>
        </div>
      </RevealWrapper>

      {/* Right: Image */}
      <RevealWrapper delay={2}>
        <div style={{ position: 'relative' }}>
          <div className="tehni-img-wrap" style={{ width: '100%', height: '510px', overflow: 'hidden' }}>
            <Image
              src="/images/tehni-kitchen-interior-kot-kailash.jpg"
              alt="The Tehni — Kumaoni kitchen at Kot Kailash"
              width={800}
              height={510}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
