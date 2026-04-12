import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { rooms } from '@/lib/content/rooms';
import Reserve from '@/components/sections/Reserve';

const HOTEL_SPIDER_URL = 'https://reservations.hotel-spider.com/032644b5fbfafed6';

const SEO_MAP: Record<string, { h1: string; title: string; description: string }> = {
  'kumaon-vann': {
    h1: 'Private Forest Cottage with Freestanding Bathtub, Almora',
    title: 'Kumaon Vann | Private Forest Cottage — Kot Kailash, Almora',
    description:
      'A freestanding bathtub, Himalayan views, and complete seclusion in the oak and rhododendron forest. Kot Kailash\'s signature cottage at 7,800 ft, Almora.',
  },
  'family-suite': {
    h1: 'Private Family Residence with Observatory, Kumaon',
    title: 'Family Suite | Private Residence — Kot Kailash, Kumaon',
    description:
      'Two bedrooms, a glass observatory, a private dining room with fireplace, and direct access to the Kot Kailash Library. For families who travel together.',
  },
  'kutir-suites': {
    h1: 'Family Suite with Machan Loft — Himalayan Views, Kumaon',
    title: 'Kutir Suites | Machan Loft Suites — Kot Kailash, Kumaon',
    description:
      'Multi-level family suites with Machan loft built in the Kumaoni watchtower tradition. Surreal Himalayan views. Kot Kailash Annexe, Shaukiyathal.',
  },
  'kumaoni-suites': {
    h1: 'Kumaoni Heritage Rooms in Almora with Valley Views',
    title: 'Kumaoni Suites | Heritage Rooms — Kot Kailash, Almora',
    description:
      'Walls hand-pressed with red clay. Stone that survived a hundred Himalayan winters. Valley views. Heritage restored without apology. Kot Kailash, Almora.',
  },
};

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const seo = SEO_MAP[slug];
  if (!seo) return {};
  return buildMetadata({
    title: seo.title,
    description: seo.description,
    path: `/stay/${slug}`,
  });
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = rooms.find((r) => r.id === slug);
  if (!room) notFound();
  const seo = SEO_MAP[slug] ?? { h1: room.name };

  return (
    <>
      {/* Full-screen image hero */}
      <section
        style={{
          position: 'relative',
          height: '92vh',
          minHeight: '600px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'var(--forest-deep)' }}>
          <Image
            src={room.image}
            alt={room.imageAlt}
            fill
            priority
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(10,14,8,0.3) 0%, rgba(10,14,8,0.05) 40%, rgba(10,14,8,0.75) 100%)',
          }}
        />

        {/* SEO h1 — visually hidden */}
        <h1 className="sr-only">{seo.h1}</h1>

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            padding: '0 64px 60px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)',
              display: 'block',
              marginBottom: '10px',
            }}
          >
            {room.type}
          </span>
          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'white',
              lineHeight: 1.06,
              marginBottom: '28px',
            }}
          >
            {room.name}
          </h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={HOTEL_SPIDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Reserve this Suite
            </a>
            <Link href="/stay" className="btn-outline">
              All Rooms
            </Link>
          </div>
        </div>

        {/* Sticky reserve bar */}
        <style>{`
          .room-sticky-bar {
            position: fixed; bottom: 0; left: 0; right: 0;
            background: rgba(26,22,18,0.96); backdrop-filter: blur(12px);
            border-top: 1px solid rgba(255,255,255,0.06);
            padding: 16px 64px; display: flex; align-items: center;
            justify-content: space-between; z-index: 100;
            transform: translateY(100%); transition: transform 0.4s ease;
          }
        `}</style>
      </section>

      {/* Details */}
      <section
        style={{
          background: 'var(--parchment)',
          padding: '100px 64px',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}
        className="room-detail-grid"
      >
        <style>{`
          @media (max-width: 1100px) {
            .room-detail-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

        {/* Left: description */}
        <div>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.1rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.9,
              maxWidth: '540px',
            }}
          >
            {room.description}
          </div>
        </div>

        {/* Right: Key details */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '24px',
            }}
          >
            What&rsquo;s Included
          </h3>
          {[
            { label: 'Occupancy', value: room.capacity },
            { label: 'Meals', value: 'All meals — breakfast, lunch & dinner' },
            { label: 'Experiences', value: 'All included in room rate' },
            { label: 'Minimum Stay', value: 'Three nights' },
            { label: 'Check-in', value: '2:00 pm' },
            { label: 'Check-out', value: '11:00 am' },
            { label: 'Rate', value: room.price },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                padding: '14px 0',
                borderBottom: '1px solid var(--fog)',
                gap: '24px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-soft)',
                  flexShrink: 0,
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '0.9rem',
                  color: 'var(--ink)',
                  textAlign: 'right',
                  lineHeight: 1.4,
                }}
              >
                {item.value}
              </span>
            </div>
          ))}

          <a
            href={HOTEL_SPIDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ marginTop: '32px', textAlign: 'center' }}
          >
            Reserve this Suite
          </a>
        </div>
      </section>

      {/* Other rooms */}
      <section
        style={{
          background: 'var(--ink)',
          padding: '80px 64px',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '11px',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '40px',
          }}
        >
          Other Ways to Stay
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3px',
          }}
          className="rooms-trio"
        >
          {rooms
            .filter((r) => r.id !== room.id)
            .slice(0, 3)
            .map((r) => (
              <Link
                key={r.id}
                href={`/stay/${r.id}`}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '260px',
                  background: 'var(--forest-deep)',
                }}
                className="other-room-card"
              >
                <style>{`
                  .other-room-card:hover .other-room-img { transform: scale(1.06); }
                  .other-room-img { transition: transform 0.8s ease; width: 100%; height: 100%; }
                `}</style>
                <div
                  style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
                >
                  <div className="other-room-img">
                    <Image
                      src={r.image}
                      alt={r.imageAlt}
                      fill
                      sizes="33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10,14,8,0.75) 0%, transparent 60%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '22px',
                    left: '22px',
                    right: '22px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '11px',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      display: 'block',
                      marginBottom: '4px',
                    }}
                  >
                    {r.price}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '1.1rem',
                      color: 'white',
                    }}
                  >
                    {r.name}
                  </span>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <Reserve />
    </>
  );
}
