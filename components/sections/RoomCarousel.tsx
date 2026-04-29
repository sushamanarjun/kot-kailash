'use client';

import { useState } from 'react';
import Image from 'next/image';

type GalleryImage = {
  src: string;
  alt: string;
};

export default function RoomCarousel({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState(0);

  function prev() {
    setActive((i) => (i === 0 ? images.length - 1 : i - 1));
  }

  function next() {
    setActive((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  return (
    <div style={{ width: '100%' }}>
      {/* Main image */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 3',
          overflow: 'hidden',
          background: 'var(--forest-deep)',
        }}
      >
        {images.map((img, i) => (
          <div
            key={img.src}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: i === active ? 1 : 0,
              transition: 'opacity 0.6s ease',
              pointerEvents: i === active ? 'auto' : 'none',
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 1100px) 100vw, 45vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        ))}

        {/* Prev / Next */}
        <button
          onClick={prev}
          aria-label="Previous image"
          style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            background: 'rgba(10,14,8,0.38)',
            border: '1px solid rgba(255,255,255,0.18)',
            color: 'white',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(4px)',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(10,14,8,0.65)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(10,14,8,0.38)')}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M9 2L4 7l5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          onClick={next}
          aria-label="Next image"
          style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            background: 'rgba(10,14,8,0.38)',
            border: '1px solid rgba(255,255,255,0.18)',
            color: 'white',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(4px)',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(10,14,8,0.65)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(10,14,8,0.38)')}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M5 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Counter */}
        <div
          style={{
            position: 'absolute',
            bottom: '14px',
            right: '16px',
            zIndex: 3,
            fontFamily: 'var(--sans)',
            fontSize: '10px',
            letterSpacing: '0.18em',
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          {active + 1} / {images.length}
        </div>
      </div>

      {/* Dot indicators */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
          paddingTop: '16px',
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to image ${i + 1}`}
            style={{
              width: i === active ? '24px' : '6px',
              height: '6px',
              borderRadius: '3px',
              border: 'none',
              background: i === active ? 'var(--gold)' : 'var(--fog)',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.3s ease, background 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
