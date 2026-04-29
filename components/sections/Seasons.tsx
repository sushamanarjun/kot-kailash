'use client';

import { useState } from 'react';
import { seasons } from '@/lib/content/seasons';

export default function Seasons() {
  const [active, setActive] = useState(0);
  const season = seasons[active];

  return (
    <section
      id="seasons"
      style={{
        background: 'var(--ink)',
        padding: '72px 64px',
      }}
    >
      <div style={{ maxWidth: '780px' }}>
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2rem, 3vw, 2.8rem)',
            fontWeight: 300,
            color: 'white',
            marginBottom: '8px',
            lineHeight: 1.15,
          }}
        >
          When to come.
        </h2>
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '0.9rem',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.55)',
            marginBottom: '28px',
            lineHeight: 1.75,
          }}
        >
          Every season on this ridge has a case to be made for it.
        </p>
      </div>

      {/* Tab Row */}
      <div
        style={{
          display: 'flex',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          marginBottom: '28px',
          overflowX: 'auto',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        } as React.CSSProperties}
        role="tablist"
        aria-label="Seasons"
      >
        {seasons.map((s, i) => (
          <button
            key={s.period}
            role="tab"
            aria-selected={active === i}
            aria-controls={`season-panel-${i}`}
            onClick={() => setActive(i)}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: active === i ? '2px solid var(--gold)' : '2px solid transparent',
              marginBottom: '-1px',
              padding: '14px 24px',
              cursor: 'pointer',
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: active === i ? 'var(--gold)' : 'rgba(255,255,255,0.55)',
              transition: 'color 0.25s, border-color 0.25s',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <div
        id={`season-panel-${active}`}
        role="tabpanel"
        key={active}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center',
          animation: 'seasonFadeIn 0.3s ease',
        }}
        className="seasons-panel"
      >
        <style>{`
          @keyframes seasonFadeIn {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @media (max-width: 680px) {
            .seasons-panel { grid-template-columns: 1fr !important; }
          }
        `}</style>

        {/* Text */}
        <div>
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            {season.period}
          </span>
          <h3
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2rem, 3vw, 2.6rem)',
              fontWeight: 300,
              color: 'white',
              marginBottom: '12px',
              lineHeight: 1.1,
            }}
          >
            {season.name}
          </h3>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.85,
              maxWidth: '380px',
            }}
          >
            {season.description}
          </p>
        </div>

        {/* Season image */}
        <img
          src={season.image}
          alt={`${season.name} at Kot Kailash — ${season.period}`}
          style={{
            width: '100%',
            aspectRatio: '16/9',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
    </section>
  );
}
