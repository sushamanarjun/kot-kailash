import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { sacredSites } from '@/lib/content/sacredSites';

interface SacredArcProps {
  compact?: boolean;
  standalone?: boolean;
}

export default function SacredArc({ compact = false, standalone = false }: SacredArcProps) {
  const row1 = sacredSites.slice(0, 3);
  const row2 = sacredSites.slice(3);

  return (
    <section
      id="sacred"
      style={{
        background: 'var(--parchment)',
        padding: '120px 64px',
      }}
    >
      {/* ── Section intro: split layout ── */}
      <RevealWrapper>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'end',
            marginBottom: '72px',
          }}
          className="sacred-intro-grid"
        >
          <style>{`
            @media (max-width: 1100px) {
              .sacred-intro-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
              .sacred-stat-block { display: none !important; }
            }
          `}</style>

          {/* Left: text */}
          <div>
            <div className="eyebrow">{standalone ? 'The Sacred Arc' : 'IV · The Sacred Arc'}</div>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(2.4rem, 3.6vw, 3.4rem)',
                fontWeight: 300,
                lineHeight: 1.15,
                marginBottom: '18px',
                color: 'var(--ink)',
              }}
            >
              Six sacred sites
              <br />
              within 80 kilometres.
            </h2>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1rem',
                fontStyle: 'italic',
                color: 'var(--ink-soft)',
                lineHeight: 1.88,
                maxWidth: '440px',
              }}
            >
              Kumaon holds one of the densest concentrations of ancient temple
              architecture in the Himalayas. The sites within reach of the
              property span over 2,500 years of Kumaoni religious history.
            </p>
          </div>

          {/* Right: atmospheric stat */}
          <div className="sacred-stat-block" style={{ textAlign: 'right' }}>
            <span
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(4rem, 7vw, 7rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'rgba(139,107,61,0.12)',
                lineHeight: 1,
                display: 'block',
              }}
              aria-hidden="true"
            >
              2,500
            </span>
            <span
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '11px',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                opacity: 0.7,
              }}
            >
              Years of temple history
            </span>
          </div>
        </div>
      </RevealWrapper>

      {/* ── All 6 sites in one grid so rows size together ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }}
        className="sacred-grid"
        role="list"
        aria-label="Sacred sites near Kot Kailash"
      >
        {sacredSites.map((site, i) => (
          <RevealWrapper key={site.numeral} delay={((i % 3) as 0 | 1 | 2)}>
            <SacredCard site={site} />
          </RevealWrapper>
        ))}
      </div>


    </section>
  );
}

function SacredCard({ site }: { site: (typeof sacredSites)[0] }) {
  return (
    <article
      style={{
        background: 'var(--cream)',
        padding: '36px 32px',
        border: '1px solid var(--fog)',
        position: 'relative',
        transition: 'border-color 0.35s ease, box-shadow 0.35s ease',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '300px',
      }}
      className="sacred-card"
      role="listitem"
    >
      <style>{`
        .sacred-card:hover {
          border-color: var(--gold) !important;
          box-shadow: 0 4px 24px rgba(139,107,61,0.06);
        }
        .sacred-card:hover .sacred-distance {
          opacity: 1 !important;
          color: var(--gold) !important;
        }
      `}</style>

      {/* Distance badge — full opacity for contrast compliance */}
      <span
        className="sacred-distance"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          fontFamily: 'var(--sans)',
          fontSize: '11px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--ink-soft)',
          opacity: 0.75,
          transition: 'color 0.35s ease, opacity 0.35s ease',
        }}
        aria-label={`Distance: ${site.distance}`}
      >
        {site.distance}
      </span>

      {/* Decorative numeral */}
      <span
        style={{
          fontFamily: 'var(--sans)',
          fontSize: '1.6rem',
          color: 'rgba(139,107,61,0.1)',
          display: 'block',
          lineHeight: 1,
          marginBottom: '14px',
          fontWeight: 300,
        }}
        aria-hidden="true"
      >
        {site.numeral}
      </span>

      {/* Site name */}
      <h3
        style={{
          fontFamily: 'var(--serif)',
          fontSize: '1.12rem',
          fontWeight: 400,
          color: 'var(--ink)',
          marginBottom: '10px',
          lineHeight: 1.25,
          paddingRight: '48px', /* avoid distance badge overlap */
        }}
      >
        {site.name}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--serif)',
          fontSize: '0.9rem',
          fontStyle: 'italic',
          color: 'var(--ink-soft)',
          lineHeight: 1.78,
          flex: 1,
        }}
      >
        {site.description}
      </p>
    </article>
  );
}
