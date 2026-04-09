'use client';

import { useState, useEffect, useRef } from 'react';

const aqiData = [
  { city: 'Shaukiyathal', value: '9–25', pct: 2.5, good: true },
  { city: 'Nainital', value: '28–45', pct: 9, good: false },
  { city: 'Pune', value: '52–80', pct: 32, good: false },
  { city: 'Delhi', value: '150–300', pct: 100, good: false },
];

export default function AqiCard() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: 'var(--ink)',
        padding: '32px 36px',
      }}
      role="region"
      aria-label="Air quality comparison"
    >
      <span
        style={{
          fontFamily: 'var(--sans)',
          fontSize: '8px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          display: 'block',
          marginBottom: '24px',
        }}
      >
        The air quality case · A year-round truth
      </span>

      {aqiData.map((row) => (
        <div
          key={row.city}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '11px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '8px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.36)',
              width: '84px',
              flexShrink: 0,
            }}
          >
            {row.city}
          </span>

          <div
            style={{
              flex: 1,
              height: '2px',
              background: 'rgba(255,255,255,0.06)',
              position: 'relative',
            }}
            role="progressbar"
            aria-valuenow={row.pct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${row.city} AQI: ${row.value}`}
          >
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                background: row.good ? 'var(--gold)' : '#c04030',
                width: animated ? `${row.pct}%` : '0%',
                transition: 'width 1.7s cubic-bezier(0.4,0,0.2,1) 0.3s',
              }}
            />
          </div>

          <span
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '0.85rem',
              color: row.good ? 'rgba(110,215,120,0.9)' : 'rgba(255,255,255,0.52)',
              width: '72px',
              textAlign: 'right',
              flexShrink: 0,
            }}
          >
            {row.value}
          </span>
        </div>
      ))}
    </div>
  );
}
