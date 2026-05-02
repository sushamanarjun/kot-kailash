import Image from 'next/image';

interface FullBleedImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function FullBleedImage({ src, alt, caption }: FullBleedImageProps) {
  return (
    <div
      style={{
        height: '90vh',
        minHeight: '560px',
        overflow: 'hidden',
        position: 'relative',
      }}
      className="fullbleed-img"
    >
      <style>{`
        .fullbleed-img img { transition: transform 9s ease !important; }
        .fullbleed-img:hover img { transform: scale(1.04) !important; }
      `}</style>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        quality={85}
        loading="lazy"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      {caption && (
        <>
          {/* Gradient scrim so caption is always legible */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '120px',
              background: 'linear-gradient(to top, rgba(10,14,8,0.72), transparent)',
              pointerEvents: 'none',
            }}
          />
          <span
            style={{
              position: 'absolute',
              bottom: '24px',
              right: '30px',
              fontFamily: 'var(--sans)',
              fontSize: '8px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.75)',
              textShadow: '0 1px 6px rgba(0,0,0,0.6)',
              zIndex: 1,
            }}
            aria-hidden="true"
          >
            {caption}
          </span>
        </>
      )}
    </div>
  );
}
