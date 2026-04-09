import Image from 'next/image';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { dishes } from '@/lib/content/dishes';

export default function Tehni() {
  return (
    <section
      id="tehni"
      style={{
        background: 'var(--parchment)',
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
        <div className="eyebrow">IV · Tehni</div>
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
          <em style={{ fontStyle: 'italic', color: 'var(--clay)' }}>
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
          <p style={{ marginTop: '15px' }}>
            Everything that comes out of it is either grown on the property,
            sourced from the village, or procured from farmers within the
            district. The mandua (finger millet) flour for the rotis comes from
            the terraced fields below. The bhatt (black soybean) is a Kumaoni
            staple that most guests have never encountered. The rhododendron
            sherbet is seasonal and irreplaceable.
          </p>
          <p style={{ marginTop: '15px' }}>
            There is no menu. There is a conversation, and then a meal.
          </p>
        </div>

        {/* Dishes */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '7px 16px',
            marginTop: '38px',
          }}
          role="list"
          aria-label="Kumaoni dishes served"
        >
          {dishes.map((dish) => (
            <span
              key={dish}
              role="listitem"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '0.88rem',
                color: 'var(--ink-soft)',
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
              }}
            >
              <span style={{ color: 'var(--gold)' }}>·</span>
              {dish}
            </span>
          ))}
        </div>
      </RevealWrapper>

      {/* Right: Image */}
      <RevealWrapper delay={2}>
        <div style={{ position: 'relative' }}>
          <div style={{ width: '100%', height: '510px', overflow: 'hidden' }}>
            <Image
              src="/images/tehni-kitchen.webp"
              alt="The Tehni — Kumaoni kitchen at Kot Kailash"
              width={800}
              height={510}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          {/* Decorative word */}
          <span
            style={{
              position: 'absolute',
              bottom: '-26px',
              right: '-12px',
              fontFamily: 'var(--caps)',
              fontSize: '7rem',
              color: 'rgba(138,90,56,0.055)',
              letterSpacing: '0.1em',
              pointerEvents: 'none',
              userSelect: 'none',
              whiteSpace: 'nowrap',
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            TEHNI
          </span>
        </div>
      </RevealWrapper>
    </section>
  );
}
