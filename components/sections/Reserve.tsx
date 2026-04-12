import { Fragment } from 'react';
import RevealWrapper from '@/components/ui/RevealWrapper';

const HOTEL_SPIDER_URL = 'https://reservations.hotel-spider.com/032644b5fbfafed6';

export default function Reserve() {
  return (
    <section
      id="reserve"
      style={{
        background: 'var(--ink)',
        padding: '80px 64px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <RevealWrapper>
        {/* Eyebrow */}
        <div
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '11px',
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '20px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <span style={{ width: '28px', height: '1px', background: 'var(--gold)', opacity: 0.38 }} />
          Eight Keys · Rare Availability
          <span style={{ width: '28px', height: '1px', background: 'var(--gold)', opacity: 0.38 }} />
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'white',
            marginBottom: '20px',
            position: 'relative',
            zIndex: 1,
            lineHeight: 1.1,
          }}
        >
          Reserve your stay at Kot Kailash
        </h2>

        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '0.96rem',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.55)',
            marginBottom: '28px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Direct bookings always receive the best available rate.
        </p>

        {/* Single primary CTA */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            position: 'relative',
            zIndex: 1,
            marginBottom: '28px',
          }}
        >
          <a
            href={HOTEL_SPIDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ padding: '15px 52px', fontSize: '11px', letterSpacing: '0.26em' }}
          >
            Check Availability
          </a>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.55)',
            }}
          >
            Or call{' '}
            <a
              href="tel:+919650264905"
              style={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              className="res-ct"
            >
              +91 9650264905
            </a>
            {' '}· We respond to every enquiry personally
          </p>
        </div>

        {/* Payment badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            position: 'relative',
            zIndex: 1,
            paddingTop: '24px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            Accepted on-site
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {['VISA', 'Mastercard', 'UPI', 'Bank Transfer'].map((p, i, arr) => (
              <Fragment key={p}>
                <span
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    padding: '5px 12px',
                    border: '1px solid rgba(255,255,255,0.09)',
                    fontFamily: 'var(--sans)',
                    fontSize: '11px',
                    fontWeight: 400,
                    letterSpacing: '0.08em',
                    color: 'rgba(255,255,255,0.65)',
                  }}
                >
                  {p}
                </span>
                {i < arr.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.14)', fontSize: '0.8rem' }}>
                    ·
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
