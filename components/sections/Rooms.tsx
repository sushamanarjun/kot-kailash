import Image from 'next/image';
import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { rooms, buyout } from '@/lib/content/rooms';

const HOTEL_SPIDER_URL = 'https://reservations.hotel-spider.com/032644b5fbfafed6';

interface RoomsProps {
  showRates?: boolean;
}

export default function Rooms({ showRates = false }: RoomsProps) {
  const featured = rooms.filter((r) => r.featured);
  const small = rooms.filter((r) => !r.featured);

  return (
    <section
      id="stay"
      style={{
        background: 'var(--stone)',
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
              color: 'var(--clay)',
              maxWidth: '230px',
              textAlign: 'right',
              lineHeight: 1.75,
            }}
          >
            All meals included. Minimum three nights. Extended stays warmly encouraged.
          </p>
        </div>
      </RevealWrapper>

      {/* Featured Rooms (2-col) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.35fr 1fr',
          gap: '3px',
          marginBottom: '3px',
        }}
        className="rooms-featured"
      >
        {featured.map((room, i) => (
          <RevealWrapper key={room.id} delay={i as 0 | 1}>
            <RoomCard room={room} showRates={showRates} />
          </RevealWrapper>
        ))}
      </div>

      {/* Small Rooms (3-col) */}
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
            <RoomCard room={room} showRates={showRates} small />
          </RevealWrapper>
        ))}

        {/* Buyout Card */}
        <RevealWrapper delay={2}>
          <div
            style={{
              background: 'var(--parchment)',
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
                fontSize: '7.5px',
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
              href={`mailto:stay@kotkailash.com?subject=Full%20Buyout%20Enquiry`}
              className="btn-gold"
            >
              Enquire
            </a>
          </div>
        </RevealWrapper>
      </div>

      {/* CTA (only if not showing rates — homepage) */}
      {!showRates && (
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
                View Rates & Reserve
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
  showRates,
  small,
}: {
  room: (typeof rooms)[0];
  showRates: boolean;
  small?: boolean;
}) {
  return (
    <article
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--ink)',
      }}
      className="room-card"
    >
      <style>{`
        .room-card:hover .room-card-img { transform: scale(1.06); }
        .room-card-img { transition: transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94); }
      `}</style>

      {/* Image */}
      <div
        style={{
          width: '100%',
          height: small ? '310px' : '420px',
          overflow: 'hidden',
          background: 'var(--forest-deep)',
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
      <div style={{ padding: '22px 28px 26px' }}>
        <span
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '7.5px',
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
            color: 'rgba(255,255,255,0.38)',
            lineHeight: 1.68,
          }}
        >
          {room.description}
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '17px',
            paddingTop: '15px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '7.5px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.22)',
            }}
          >
            {room.inclusions}
          </span>
          <Link
            href="/reserve"
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '8px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(197,153,90,0.22)',
              paddingBottom: '2px',
              transition: 'color 0.3s, border-color 0.3s',
            }}
          >
            Reserve Your Stay
          </Link>
        </div>
      </div>
    </article>
  );
}
