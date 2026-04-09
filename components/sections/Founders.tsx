import Image from 'next/image';
import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { founders, foundersCoda } from '@/lib/content/founders';

export default function Founders() {
  const pushkar = founders[0];

  return (
    <section
      id="story"
      style={{
        background: 'var(--parchment)',
        padding: '120px 64px',
      }}
    >
      {/* Intro */}
      <RevealWrapper>
        <div
          style={{
            textAlign: 'center',
            maxWidth: '560px',
            margin: '0 auto 68px',
          }}
        >
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            VII · The Founders
          </div>
          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2.4rem, 3.6vw, 3.4rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              marginBottom: '14px',
              color: 'var(--ink)',
            }}
          >
            Built by two veterans
            <br />
            who chose the mountain.
          </h2>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1rem',
              fontStyle: 'italic',
              color: 'var(--ink-soft)',
              lineHeight: 1.82,
            }}
          >
            A decade-long professional partnership between two hoteliers who spent
            their careers at the highest levels of Indian luxury hospitality — and
            then decided to build something of their own.
          </p>
        </div>
      </RevealWrapper>

      {/* Pushkar profile */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gap: '72px',
          alignItems: 'start',
          maxWidth: '960px',
          margin: '0 auto',
        }}
        className="founder-inner"
      >
        {/* Image */}
        <RevealWrapper>
          <div style={{ position: 'relative' }}>
            <div
              style={{
                width: '100%',
                height: '420px',
                background: 'linear-gradient(160deg, #362a20, #1f1810)',
                overflow: 'hidden',
              }}
            >
              <Image
                src={pushkar.image}
                alt={pushkar.imageAlt}
                width={300}
                height={420}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '22px',
                background: 'linear-gradient(to top, rgba(10,8,5,0.88), transparent)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '7.5px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  display: 'block',
                  marginBottom: '4px',
                }}
              >
                Co-Founder · General Manager
              </span>
              <span
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  color: 'white',
                }}
              >
                {pushkar.name}
              </span>
            </div>
          </div>
        </RevealWrapper>

        {/* Bio */}
        <RevealWrapper delay={2}>
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '8px',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            {pushkar.role}
          </span>
          <h3
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '2.2rem',
              fontWeight: 300,
              color: 'var(--ink)',
              marginBottom: '5px',
              lineHeight: 1,
            }}
          >
            {pushkar.name}
          </h3>
          <span
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '0.95rem',
              fontStyle: 'italic',
              color: 'var(--clay)',
              display: 'block',
              marginBottom: '20px',
            }}
          >
            {pushkar.subtitle}
          </span>

          <div
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '0.92rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.88,
            }}
          >
            {pushkar.bio.map((para, i) => (
              <p key={i} style={{ marginTop: i > 0 ? '13px' : 0 }}>
                {para}
              </p>
            ))}
          </div>

          {/* TripAdvisor review */}
          {pushkar.review && (
            <div
              style={{
                marginTop: '26px',
                borderLeft: '2px solid var(--gold)',
                paddingLeft: '18px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.65,
                }}
              >
                {pushkar.review.text}
              </p>
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '7.5px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  display: 'block',
                  marginTop: '9px',
                }}
              >
                {pushkar.review.attribution}
              </span>
            </div>
          )}

          <div style={{ marginTop: '28px' }}>
            <Link
              href="/founders"
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '8.5px',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'var(--clay)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(138,90,56,0.22)',
                paddingBottom: '2px',
                transition: 'color 0.3s',
              }}
            >
              Meet both founders →
            </Link>
          </div>
        </RevealWrapper>
      </div>

      {/* Coda */}
      <RevealWrapper>
        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.4rem',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--ink)',
              lineHeight: 1.55,
            }}
          >
            Pushkar is on the ridge every morning.
            <br />
            <span style={{ color: 'var(--rust)', fontStyle: 'normal' }}>
              Sayed is the reason the world will find it.
            </span>
          </p>
        </div>
      </RevealWrapper>
    </section>
  );
}
