import Image from 'next/image';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { dishes } from '@/lib/content/dishes';

export default function Tehni() {
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

        {/* Dishes — editorial list */}
        <div
          style={{
            marginTop: '36px',
            paddingTop: '28px',
            borderTop: '1px solid rgba(26,22,18,0.08)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            In the repertoire
          </span>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px 10px',
            }}
            role="list"
            aria-label="Kumaoni dishes served"
          >
            {dishes.map((dish, i) => (
              <span
                key={dish}
                role="listitem"
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '0.88rem',
                  fontStyle: 'italic',
                  color: 'var(--ink-soft)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                {dish}
                {i < dishes.length - 1 && (
                  <span
                    aria-hidden="true"
                    style={{
                      width: '3px',
                      height: '3px',
                      borderRadius: '50%',
                      background: 'rgba(139,107,61,0.3)',
                      flexShrink: 0,
                      display: 'inline-block',
                    }}
                  />
                )}
              </span>
            ))}
          </div>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(61,53,48,0.4)',
              marginTop: '14px',
            }}
          >
            Subject to season
          </p>
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
        </div>
      </RevealWrapper>
    </section>
  );
}
