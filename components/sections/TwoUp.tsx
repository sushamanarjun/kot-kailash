import Image from 'next/image';

const panels = [
  {
    src: '/images/library-two-up-kot-kailash.webp',
    alt: 'The library at Kot Kailash',
    label: 'The Collection',
    name: 'The Library',
  },
  {
    src: '/images/ridge-two-up-kot-kailash.webp',
    alt: 'The Shaukiyathal ridge at dawn',
    label: 'Dawn, October',
    name: 'The Ridge',
  },
];

export default function TwoUp() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3px',
      }}
      className="two-up-grid"
    >
      {panels.map((p) => (
        <div
          key={p.src}
          style={{
            height: '52vh',
            minHeight: '320px',
            overflow: 'hidden',
            position: 'relative',
          }}
          className="two-up-panel"
        >
          <style>{`
            .two-up-panel:hover .two-up-img { transform: scale(1.04) !important; }
            .two-up-img { transition: transform 0.8s ease; }
          `}</style>
          <div className="two-up-img" style={{ width: '100%', height: '100%' }}>
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="50vw"
              loading="lazy"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '56px 24px 22px',
              background:
                'linear-gradient(to top, rgba(10,16,8,0.92) 0%, rgba(10,16,8,0.6) 50%, transparent 100%)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(197,153,90,0.9)',
                display: 'block',
                marginBottom: '4px',
              }}
            >
              {p.label}
            </span>
            <span
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1rem',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.92)',
                textShadow: '0 1px 8px rgba(0,0,0,0.6)',
              }}
            >
              {p.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
