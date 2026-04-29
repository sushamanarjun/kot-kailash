import Image from 'next/image';
import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { founders, foundersCoda } from '@/lib/content/founders';

interface FoundersProps {
  compact?: boolean;
}

export default function Founders({ compact = false }: FoundersProps) {
  const pushkar = founders[0];
  const sayed = founders[1];

  return (
    <section
      id="story"
      style={{
        background: 'var(--parchment)',
        padding: compact ? '72px 64px' : '120px 64px',
      }}
    >
      {/* Compact header — homepage only */}
      {compact && (
        <RevealWrapper>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '40px',
              flexWrap: 'wrap',
              gap: '24px',
            }}
          >
            <div>
              <div className="eyebrow">VII · The Founders</div>
              <h2
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(2.4rem, 3.6vw, 3.4rem)',
                  fontWeight: 300,
                  lineHeight: 1.15,
                  color: 'var(--ink)',
                }}
              >
                The people
                <br />
                behind the ridge.
              </h2>
            </div>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '0.9rem',
                fontStyle: 'italic',
                color: 'var(--ink-soft)',
                maxWidth: '230px',
                textAlign: 'right',
                lineHeight: 1.75,
              }}
            >
              Two veterans of India&rsquo;s finest hospitality. One ridge.
            </p>
          </div>
        </RevealWrapper>
      )}

      {/* Full intro — dedicated /founders page only */}
      {!compact && (
        <RevealWrapper>
          <div
            style={{
              textAlign: 'center',
              maxWidth: '560px',
              margin: '0 auto 68px',
            }}
          >
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              The Founders
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
      )}

      {/* Pushkar profile */}
      <FounderProfile founder={pushkar} compact={compact} showCta />

      {/* Divider between founders */}
      {!compact && (
        <div style={{
          maxWidth: '960px',
          margin: '80px auto',
          height: '1px',
          background: 'rgba(26,22,18,0.08)',
        }} />
      )}

      {/* Sayed profile — full page only */}
      {!compact && sayed && (
        <FounderProfile founder={sayed} compact={false} />
      )}

      {/* Coda + Final note */}
      {!compact && (
        <RevealWrapper>
          <div style={{
            maxWidth: '600px',
            margin: '80px auto 0',
            textAlign: 'center',
            borderTop: '1px solid rgba(26,22,18,0.08)',
            paddingTop: '64px',
          }}>
            {/* Coda lines */}
            <p style={{
              fontFamily: 'var(--serif)',
              fontSize: '0.95rem',
              fontStyle: 'italic',
              color: 'var(--ink-soft)',
              lineHeight: 1.8,
              margin: '0 0 36px',
            }}>
              Pushkar is on the ridge every morning.
              <br />
              Sayed is the reason the world will find it.
            </p>

            {/* Divider */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '36px',
            }}>
              <span style={{ width: '32px', height: '1px', background: 'var(--gold)', opacity: 0.4 }} />
              <span style={{
                fontFamily: 'var(--sans)',
                fontSize: '10px',
                letterSpacing: '0.36em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
              }}>
                A Final Note
              </span>
              <span style={{ width: '32px', height: '1px', background: 'var(--gold)', opacity: 0.4 }} />
            </div>

            {/* Final paragraph */}
            <p style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.9,
              margin: 0,
            }}>
              Kot Kailash Kumaon is, by any serious assessment, one of the most
              quietly compelling boutique properties to have opened in the Indian
              Himalayas in recent years. It has arrived at the right moment, in
              the right place, built by the right people — for guests who
              understand that the best travel leaves them quieter than it found
              them.
            </p>
          </div>
        </RevealWrapper>
      )}

    </section>
  );
}

function FounderProfile({
  founder,
  compact,
  showCta = false,
}: {
  founder: (typeof founders)[0];
  compact: boolean;
  showCta?: boolean;
}) {
  const isPlaceholder = founder.image.includes('placeholder');
  const imgHeight = compact ? '380px' : '420px';

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: compact ? '260px 1fr' : '300px 1fr',
        gap: compact ? '48px' : '72px',
        alignItems: 'start',
        maxWidth: '960px',
        margin: '0 auto',
      }}
      className="founder-inner"
    >
      {/* Image column — always left */}
      <RevealWrapper>
        <div style={{ position: 'relative' }}>
          <div
            className="founder-img-wrap"
            style={{
              width: '100%',
              height: imgHeight,
              background: 'linear-gradient(160deg, #362a20, #1f1810)',
              overflow: 'hidden',
            }}
          >
            {!isPlaceholder && (
              <Image
                src={founder.image}
                alt={founder.imageAlt}
                width={300}
                height={420}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}
          </div>
          {/* Name overlay — always present */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '64px 22px 22px',
              background: 'linear-gradient(to top, rgba(10,8,5,0.95) 0%, rgba(10,8,5,0.6) 55%, transparent 100%)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(197,153,90,0.9)',
                display: 'block',
                marginBottom: '4px',
              }}
            >
              Co-Founder
            </span>
            <span
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1rem',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.95)',
              }}
            >
              {founder.name}
            </span>
          </div>
        </div>
      </RevealWrapper>

      {/* Bio column — always right */}
      <RevealWrapper delay={2}>
        {/* Role eyebrow */}
        <span
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '11px',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            display: 'block',
            marginBottom: '8px',
          }}
        >
          {founder.role}
        </span>

        {/* Name */}
        <h3
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '2.2rem',
            fontWeight: 300,
            color: 'var(--ink)',
            marginBottom: '20px',
            lineHeight: 1,
          }}
        >
          {founder.name}
        </h3>

        {/* Bio paragraphs */}
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '0.92rem',
            color: 'var(--ink-soft)',
            lineHeight: 1.88,
          }}
        >
          {compact ? (
            <p>{founder.bio[0]}</p>
          ) : (
            founder.bio.map((para, i) => (
              <p key={i} style={{ marginTop: i > 0 ? '13px' : 0 }}>
                {para}
              </p>
            ))
          )}
        </div>

        {/* Compact CTA */}
        {showCta && compact && (
          <>
            <div
              style={{
                marginTop: '28px',
                borderLeft: '2px solid var(--gold)',
                paddingLeft: '18px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'var(--ink)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Pushkar is on the ridge every morning.
                <br />
                <span style={{ color: 'var(--rust)', fontStyle: 'normal' }}>
                  Sayed is the reason the world will find it.
                </span>
              </p>
            </div>
            <div style={{ marginTop: '24px' }}>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  color: 'var(--ink-soft)',
                  marginBottom: '16px',
                }}
              >
                The full story of how Kot Kailash came to be.
              </p>
              <Link href="/about" className="btn-gold">
                Learn More →
              </Link>
            </div>
          </>
        )}
      </RevealWrapper>
    </div>
  );
}
