import { Fragment } from 'react';
import RevealWrapper from '@/components/ui/RevealWrapper';

const HOTEL_SPIDER_URL = 'https://reservations.hotel-spider.com/032644b5fbfafed6';

export default function Reserve() {
  return (
    <section
      id="reserve"
      style={{
        background: 'var(--ink)',
        padding: '120px 64px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Giant watermark */}
      <span
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--caps)',
          fontSize: '20vw',
          color: 'rgba(255,255,255,0.011)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          letterSpacing: '0.1em',
          userSelect: 'none',
        }}
        aria-hidden="true"
      >
        RESERVE
      </span>

      <RevealWrapper>
        {/* Eyebrow */}
        <div
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '8.5px',
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '28px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <span style={{ width: '28px', height: '1px', background: 'var(--gold)', opacity: 0.38 }} />
          Reserve your stay
          <span style={{ width: '28px', height: '1px', background: 'var(--gold)', opacity: 0.38 }} />
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'white',
            marginBottom: '14px',
            position: 'relative',
            zIndex: 1,
            lineHeight: 1.1,
          }}
        >
          Eight keys. One ridge.
        </h2>

        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '0.96rem',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.3)',
            marginBottom: '16px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Direct enquiries receive our personal attention.
          <br />
          Direct bookings receive the best available rate.
        </p>

        <p
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '8px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(197,153,90,0.5)',
            marginBottom: '48px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Minimum three nights · All meals included · Extended stays warmly encouraged
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 1,
            marginBottom: '44px',
          }}
        >
          <a
            href={HOTEL_SPIDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '9px',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              background: 'var(--gold)',
              color: 'var(--ink)',
              padding: '15px 44px',
              textDecoration: 'none',
              transition: 'background 0.3s',
              display: 'inline-block',
            }}
          >
            Reserve your stay
          </a>
          <a
            href="mailto:info@kotkailash.com"
            className="btn-outline"
            style={{ padding: '15px 36px', fontSize: '9px', letterSpacing: '0.26em' }}
          >
            Write to us
          </a>
          <a
            href="https://wa.me/919650264905"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ padding: '15px 36px', fontSize: '9px', letterSpacing: '0.26em' }}
          >
            WhatsApp
          </a>
        </div>

        {/* Contact links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '22px',
            position: 'relative',
            zIndex: 1,
            flexWrap: 'wrap',
            marginBottom: '44px',
          }}
        >
          {[
            { href: 'tel:+919650264905', label: '+91 96502 64905' },
            null,
            { href: 'tel:+918860070400', label: '+91 88600 70400' },
            null,
            { href: 'mailto:info@kotkailash.com', label: 'info@kotkailash.com' },
            null,
            { href: 'https://instagram.com/kot.kailash', label: '@kot.kailash', external: true },
          ].map((item, i) =>
            item === null ? (
              <div
                key={`sep-${i}`}
                style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.07)' }}
              />
            ) : (
              <a
                key={item.href}
                href={item.href}
                target={'external' in item ? '_blank' : undefined}
                rel={'external' in item ? 'noopener noreferrer' : undefined}
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '9px',
                  letterSpacing: '0.13em',
                  color: 'rgba(255,255,255,0.26)',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                className="res-ct"
              >
                {item.label}
              </a>
            )
          )}
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
            paddingTop: '36px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '7.5px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.22)',
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
                    fontSize: '9px',
                    fontWeight: 400,
                    letterSpacing: '0.08em',
                    color: 'rgba(255,255,255,0.48)',
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
