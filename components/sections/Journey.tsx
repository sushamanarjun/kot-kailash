import RevealWrapper from '@/components/ui/RevealWrapper';
import { transportStats, transferPolicy, journeyNarrative } from '@/lib/content/journey';

/* ── Transport SVG icons (Lucide-style, 20×20, stroke) ──────── */
const TrainIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="4" y="3" width="16" height="14" rx="2" />
    <path d="M4 10h16" />
    <path d="M9 3v7" />
    <path d="M15 3v7" />
    <circle cx="9" cy="14.5" r="1" />
    <circle cx="15" cy="14.5" r="1" />
    <path d="M8 20l-2 1" />
    <path d="M16 20l2 1" />
  </svg>
);

const PlaneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 2c-2-2-4-2-5.5-.5L10 5 1.8 6.2c-.5.1-.9.5-.7 1l3.1 5.5c.2.4.7.6 1.2.5L7 12l3 8.4c.2.5.8.7 1.3.4l4-.5c.5-.1.8-.6.5-1.1z" />
  </svg>
);

const CarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 17H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2l1.68-3.09A2 2 0 0 1 6.44 5h11.12a2 2 0 0 1 1.76 1.05L21 9a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
    <circle cx="7.5" cy="17" r="2.5" />
    <circle cx="16.5" cy="17" r="2.5" />
    <path d="M5 9h14" />
  </svg>
);

/* Map index to icon component (ignores the emoji in data) */
const TRANSPORT_ICONS = [TrainIcon, PlaneIcon, PlaneIcon, CarIcon];

export default function Journey() {
  return (
    <section
      id="journey"
      style={{
        background: 'var(--forest-deep)',
        padding: '100px 64px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start',
      }}
      className="journey-grid"
    >
      {/* ── Left: narrative copy ── */}
      <RevealWrapper>
        <div className="eyebrow" style={{ color: 'var(--gold)' }}>
          The Journey
        </div>
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.2rem, 3.4vw, 3.2rem)',
            fontWeight: 300,
            color: 'white',
            lineHeight: 1.18,
            marginBottom: '28px',
          }}
        >
          Getting to the{' '}
          <em style={{ color: 'var(--gold-pale)', fontStyle: 'italic' }}>
            ridge.
          </em>
        </h2>

        <div
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.62)',
            lineHeight: 1.92,
            fontStyle: 'italic',
          }}
        >
          <p>
            Shaukiyathal is 90 kms (56 miles) from Haldwani / Kathgodam
            Railway station and about 280 kms (174 miles) from New Delhi.
            The road climbs steadily after Almora town. There is no other
            way to arrive than slowly.
          </p>
          <p style={{ marginTop: '18px' }}>
            We consider the drive to be the beginning of the stay, not a
            preamble to it. Guests who arrive by our arranged transfer report
            the transition happens somewhere on the mountain road — the phone
            signal fades, the air changes.
          </p>
        </div>

        {/* Narrative pull quote */}
        <div
          style={{
            marginTop: '36px',
            borderLeft: '2px solid rgba(197,153,90,0.35)',
            paddingLeft: '20px',
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
              marginBottom: '8px',
            }}
          >
            {journeyNarrative.label}
          </span>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '0.9rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.78,
            }}
          >
            {journeyNarrative.text}
          </p>
        </div>
      </RevealWrapper>

      {/* ── Right: transport stat cards ── */}
      <div>
        <style>{`
          .jstat {
            transition: background 0.35s ease, border-left-color 0.35s ease;
          }
          .jstat:hover {
            background: rgba(139,107,61,0.06) !important;
            border-left-color: rgba(197,153,90,0.4) !important;
          }
          .jstat:hover .jstat-icon {
            color: var(--gold) !important;
          }
        `}</style>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {transportStats.map((stat, i) => {
            const Icon = TRANSPORT_ICONS[i] ?? TrainIcon;
            return (
              <RevealWrapper key={stat.time} delay={(i as 0 | 1 | 2)}>
                <div
                  className="jstat"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '18px',
                    padding: '22px 26px',
                    background: 'rgba(255,255,255,0.03)',
                    borderLeft: '2px solid rgba(197,153,90,0.1)',
                  }}
                >
                  {/* SVG transport icon — replaces emoji */}
                  <span
                    className="jstat-icon"
                    style={{
                      color: 'rgba(255,255,255,0.35)',
                      flexShrink: 0,
                      marginTop: '3px',
                      transition: 'color 0.35s ease',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    aria-hidden="true"
                  >
                    <Icon />
                  </span>

                  <div style={{ flex: 1 }}>
                    <span
                      style={{
                        fontFamily: 'var(--sans)',
                        fontSize: '11px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--gold)',
                        display: 'block',
                        marginBottom: '5px',
                      }}
                    >
                      {stat.time}
                    </span>
                    <p
                      style={{
                        fontFamily: 'var(--serif)',
                        fontSize: '1rem',
                        color: 'white',
                        marginBottom: '5px',
                        lineHeight: 1.25,
                      }}
                    >
                      {stat.route}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--serif)',
                        fontSize: '0.85rem',
                        fontStyle: 'italic',
                        color: 'rgba(255,255,255,0.6)',
                        lineHeight: 1.65,
                      }}
                    >
                      {stat.detail}
                    </p>
                  </div>
                </div>
              </RevealWrapper>
            );
          })}
        </div>

        {/* Transfer policy */}
        <RevealWrapper delay={3}>
          <div
            style={{
              marginTop: '3px',
              padding: '22px 24px',
              background: 'rgba(139,107,61,0.07)',
              border: '1px solid rgba(197,153,90,0.15)',
              borderLeft: '2px solid rgba(197,153,90,0.5)',
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
                marginBottom: '9px',
              }}
            >
              {transferPolicy.label}
            </span>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '0.88rem',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.78,
              }}
            >
              {transferPolicy.text}
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
