import RevealWrapper from '@/components/ui/RevealWrapper';
import { sacredSites } from '@/lib/content/sacredSites';

export default function SacredArc() {
  const row1 = sacredSites.slice(0, 3);
  const row2 = sacredSites.slice(3);

  return (
    <section
      id="sacred"
      style={{
        background: 'var(--stone)',
        padding: '120px 64px',
      }}
    >
      <RevealWrapper>
        <div style={{ maxWidth: '580px', marginBottom: '64px' }}>
          <div className="eyebrow">V · The Sacred Arc</div>
          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2.4rem, 3.6vw, 3.4rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              marginBottom: '14px',
              color: 'var(--ink)',
            }}
          >
            Five sacred sites
            <br />
            within 80 kilometres.
          </h2>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1rem',
              fontStyle: 'italic',
              color: 'var(--ink-soft)',
              lineHeight: 1.84,
            }}
          >
            Kumaon is one of the densest concentrations of ancient temple
            architecture in the Himalayas. The sites within reach of the
            property span 1,200 years of Kumaoni religious history.
          </p>
        </div>
      </RevealWrapper>

      {/* Grid Row 1 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
          marginBottom: '2px',
        }}
        className="sacred-grid"
      >
        {row1.map((site, i) => (
          <RevealWrapper key={site.numeral} delay={(i as 0 | 1 | 2)}>
            <SacredCard site={site} />
          </RevealWrapper>
        ))}
      </div>

      {/* Grid Row 2 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2px',
        }}
        className="sacred-grid-2"
      >
        {row2.map((site, i) => (
          <RevealWrapper key={site.numeral} delay={(i as 0 | 1)}>
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
        background: 'var(--parchment)',
        padding: '34px 32px',
        border: '1px solid var(--fog)',
        position: 'relative',
        transition: 'border-color 0.4s',
      }}
      className="sacred-card"
    >
      <style>{`
        .sacred-card:hover { border-color: var(--gold) !important; }
      `}</style>
      {/* Distance badge */}
      <span
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          fontFamily: 'var(--sans)',
          fontSize: '7.5px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          opacity: 0.58,
        }}
        aria-label={`Distance: ${site.distance}`}
      >
        {site.distance}
      </span>

      <span
        style={{
          fontFamily: 'var(--caps)',
          fontSize: '1.9rem',
          color: 'rgba(197,153,90,0.08)',
          display: 'block',
          lineHeight: 1,
          marginBottom: '11px',
        }}
        aria-hidden="true"
      >
        {site.numeral}
      </span>
      <h3
        style={{
          fontFamily: 'var(--serif)',
          fontSize: '1.12rem',
          fontWeight: 500,
          color: 'var(--ink)',
          marginBottom: '7px',
        }}
      >
        {site.name}
      </h3>
      <p
        style={{
          fontFamily: 'var(--serif)',
          fontSize: '0.82rem',
          fontStyle: 'italic',
          color: '#6a5e52',
          lineHeight: 1.72,
        }}
      >
        {site.description}
      </p>
    </article>
  );
}
