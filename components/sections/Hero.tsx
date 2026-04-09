'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import WeatherWidget from './WeatherWidget';

const stats = [
  { number: '8', label: 'Heritage Keys' },
  { number: '7,800', label: 'Feet Altitude' },
  { number: '<10', label: 'AQI Most Days' },
  { number: '0', label: 'Fans Required' },
];

export default function Hero() {
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const capRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const delays = [300, 500, 780, 960];
    const refs = [eyebrowRef, h1Ref, capRef, statsRef];
    const timers: ReturnType<typeof setTimeout>[] = [];

    refs.forEach((ref, i) => {
      const t = setTimeout(() => {
        ref.current?.classList.add('show');
      }, delays[i]);
      timers.push(t);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '720px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
      aria-label="Kot Kailash — A Heritage Ridge Sanctuary at 7,800 Feet"
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--forest-deep)',
        }}
      >
        <Image
          src="/images/hero-ridge.jpeg"
          alt="Kot Kailash — the Shaukiyathal ridge at 7,800 feet, Almora, Uttarakhand"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={90}
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
      </div>

      {/* Gradient Overlay — main cinematic fade */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(10,14,8,0.58) 0%, rgba(10,14,8,0.08) 30%, rgba(10,14,8,0.22) 60%, rgba(10,14,8,0.82) 100%)',
        }}
      />

      {/* Grain */}
      <div className="grain" />

      {/* Weather Widget */}
      <WeatherWidget />

      {/* Hero Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 5,
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'flex-end',
          padding: '0 64px 68px',
          gap: '60px',
        }}
        className="hero-footer"
      >
        <div>
          {/* Eyebrow */}
          <div
            ref={eyebrowRef}
            className="hero-el"
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '9px',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '20px',
              textShadow: '0 0 20px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.8)',
            }}
          >
            <span
              style={{
                width: '32px',
                height: '1px',
                background: 'white',
                opacity: 0.6,
                flexShrink: 0,
                display: 'block',
              }}
            />
            Shaukiyathal · Almora · Uttarakhand · India
          </div>

          {/* H1 */}
          <h1
            ref={h1Ref}
            className="hero-el"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(3.4rem, 6.2vw, 6rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'white',
              lineHeight: 1.06,
              letterSpacing: '-0.01em',
              transitionDelay: '0.2s',
            }}
          >
            A century-old
            <br />
            house on a ridge
            <br />
            <em style={{ fontStyle: 'normal', color: 'var(--gold-pale)' }}>
              at 7,800 feet.
            </em>
          </h1>

          {/* Caption */}
          <p
            ref={capRef}
            className="hero-el"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.72)',
              marginTop: '18px',
              maxWidth: '360px',
              lineHeight: 1.8,
              transitionDelay: '0.48s',
              textShadow: '0 1px 6px rgba(0,0,0,0.45)',
            }}
          >
            &ldquo;The best travel leaves you quieter than it found you.&rdquo;
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="hero-el"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.04)',
            flexShrink: 0,
            transitionDelay: '0.66s',
          }}
          role="list"
          aria-label="Property highlights"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              role="listitem"
              style={{
                padding: '17px 20px',
                background: 'rgba(10,16,8,0.65)',
                backdropFilter: 'blur(8px)',
                textAlign: 'center',
                minWidth: '94px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.8rem',
                  fontWeight: 300,
                  color: 'white',
                  display: 'block',
                  lineHeight: 1,
                }}
              >
                {s.number}
              </span>
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '7.5px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  display: 'block',
                  marginTop: '4px',
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Cue */}
      <div
        style={{
          position: 'absolute',
          bottom: '26px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '9px',
          zIndex: 5,
          opacity: 0,
          animation: 'fi 0.6s 2s forwards',
        }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '7.5px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.22)',
          }}
        >
          Discover
        </span>
        <div
          style={{
            width: '1px',
            height: '46px',
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0.26), transparent)',
            animation: 'pulse 2.2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}
