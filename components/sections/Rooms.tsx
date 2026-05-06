import Image from 'next/image';
import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { rooms, buyout } from '@/lib/content/rooms';

const HOTEL_SPIDER_URL = 'https://reservations.hotel-spider.com/032644b5fbfafed6';

interface RoomsProps {
  showRates?: boolean;
  compact?: boolean;
}

export default function Rooms({ showRates = false, compact = false }: RoomsProps) {
  const featured = rooms.filter((r) => r.featured);
  const small = rooms.filter((r) => !r.featured);

  return (
    <section
      id="stay"
      style={{
        background: 'var(--parchment)',
        padding: '120px 64px',
      }}
    >
      {/* Header */}
      <RevealWrapper>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '68px',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <div className="eyebrow">II · The Stay</div>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(2.4rem, 3.6vw, 3.4rem)',
                fontWeight: 300,
                lineHeight: 1.15,
                color: 'var(--ink)',
              }}
            >
              Eight keys.
              <br />
              Three houses.
              <br />
              One ridge.
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
            Extended stays warmly encouraged.
          </p>
        </div>
      </RevealWrapper>

      {/* Featured Rooms (2-col) */}
      <style>{`
        .rooms-featured > div { height: 100%; display: flex; flex-direction: column; }
        .rooms-featured > div > .room-card { flex: 1; }
        .rooms-trio > div { height: 100%; display: flex; flex-direction: column; }
        .rooms-trio > div > .room-card { flex: 1; }
      `}</style>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3px',
          marginBottom: '3px',
        }}
        className="rooms-featured"
      >
        {featured.map((room, i) => (
          <RevealWrapper key={room.id} delay={i as 0 | 1}>
            <RoomCard room={room} />
          </RevealWrapper>
        ))}
      </div>

      {/* Small Rooms (3-col) — hidden in compact/homepage mode */}
      {!compact && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3px',
          }}
          className="rooms-trio"
        >
          {small.map((room, i) => (
            <RevealWrapper key={room.id} delay={i as 0 | 1}>
              <RoomCard room={room} small />
            </RevealWrapper>
          ))}

          {/* Buyout Card */}
          <RevealWrapper delay={2}>
            <div
              style={{
                background: 'var(--cream)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '38px 28px',
                textAlign: 'center',
                gap: '16px',
                minHeight: '310px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '11px',
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                }}
              >
                Full Property
              </span>
              <h3
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.35rem',
                  fontWeight: 400,
                  color: 'var(--ink)',
                  lineHeight: 1.2,
                }}
              >
                {buyout.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '0.88rem',
                  fontStyle: 'italic',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.65,
                  maxWidth: '220px',
                }}
              >
                {buyout.description}
              </p>
              <a
                href={`mailto:info@kotkailash.com?subject=Full%20Buyout%20Enquiry`}
                className="btn-gold"
              >
                Enquire
              </a>
            </div>
          </RevealWrapper>
        </div>
      )}

      {/* CTA */}
      {compact ? (
        <RevealWrapper>
          <div style={{ textAlign: 'center', marginTop: '52px' }}>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '0.95rem',
                fontStyle: 'italic',
                color: 'var(--ink-soft)',
                marginBottom: '22px',
              }}
            >
            </p>
            <Link href="/stay" className="btn-gold">
              View all rooms →
            </Link>
          </div>
        </RevealWrapper>
      ) : !showRates && (
        <RevealWrapper>
          <div
            style={{
              textAlign: 'center',
              marginTop: '52px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '0.95rem',
                fontStyle: 'italic',
                color: 'var(--ink-soft)',
                marginBottom: '22px',
              }}
            >
              Rates and availability on request.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/reserve" className="btn-gold">
                View Rates &amp; Reserve
              </Link>
              <a
                href={HOTEL_SPIDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ background: 'transparent', color: 'var(--ink)', border: '1px solid rgba(24,20,15,0.2)' }}
              >
                Check Availability
              </a>
            </div>
          </div>
        </RevealWrapper>
      )}
    </section>
  );
}

function RoomCard({
  room,
  small,
}: {
  room: (typeof rooms)[0];
  showRates?: boolean;
  small?: boolean;
}) {
  return (
    <article
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--ink)',
        display: 'flex',
        flexDirection: 'column',
      }}
      className="room-card"
    >
      <style>{`
        .room-card:hover .room-card-img { transform: scale(1.06); }
        .room-card-img { transition: transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94); }
        .room-explore-link:hover { color: var(--gold) !important; }
      `}</style>

      {/* Image */}
      <div
        className="room-img-wrap"
        style={{
          width: '100%',
          height: small ? '310px' : '420px',
          overflow: 'hidden',
          background: 'var(--forest-deep)',
          flexShrink: 0,
        }}
      >
        <div className="room-card-img" style={{ width: '100%', height: '100%' }}>
          <Image
            src={room.image}
            alt={room.imageAlt}
            width={800}
            height={small ? 310 : 420}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '22px 28px 26px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '11px',
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            display: 'block',
            marginBottom: '6px',
          }}
        >
          {room.type}
        </span>
        <h3
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '1.35rem',
            fontWeight: 400,
            color: 'white',
            marginBottom: '8px',
          }}
        >
          {room.name}
        </h3>
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '0.8rem',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.68,
          }}
        >
          {room.shortDescription}
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: 'auto',
            paddingTop: '15px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <Link
            href={`/stay/${room.id}`}
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            className="room-explore-link"
          >
            {room.exploreLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
