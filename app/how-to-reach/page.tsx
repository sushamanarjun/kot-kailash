import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Journey from '@/components/sections/Journey';
import Reserve from '@/components/sections/Reserve';
import RevealWrapper from '@/components/ui/RevealWrapper';

export const metadata: Metadata = buildMetadata({
  title: 'How to Reach Kot Kailash | Jageshwar, Almora, Uttarakhand',
  description:
    'Directions to Kot Kailash at Shaukiyathal, Almora. 5 hours from Delhi by road. Nearest railhead: Kathgodam. Detailed route guide with GPS coordinates.',
  path: '/how-to-reach',
  keywords: [
    'how to reach Jageshwar Almora',
    'Kot Kailash directions',
    'Shaukiyathal route from Delhi',
    'Kathgodam to Almora',
    'Kumaon drive route Uttarakhand',
  ],
});

const routes = [
  {
    numeral: 'I',
    from: 'From Delhi',
    duration: '~6–7 hours',
    distance: '370 km',
    steps: [
      { label: 'Delhi → Haldwani', note: 'NH9 via Moradabad · 290 km · ~5 hrs' },
      { label: 'Haldwani → Almora', note: 'Via Bhowali · 80 km · ~2 hrs' },
      { label: 'Almora → Shaukiyathal', note: 'Via Jageshwar road · 36 km · ~1 hr' },
    ],
    note: 'Recommended departure: before 7am from Delhi to avoid Hapur traffic.',
  },
  {
    numeral: 'II',
    from: 'From Kathgodam (rail)',
    duration: '~3 hours',
    distance: '115 km',
    steps: [
      { label: 'Kathgodam station', note: 'Nearest railhead · well-connected to Delhi' },
      { label: 'Kathgodam → Almora', note: 'Via Bhowali · 77 km · ~2 hrs' },
      { label: 'Almora → Shaukiyathal', note: 'Via Jageshwar road · 36 km · ~1 hr' },
    ],
    note: 'Trains: Ranikhet Express (15014), Uttarakhand Sampark Kranti (15035). We can arrange a pickup from Kathgodam.',
  },
  {
    numeral: 'III',
    from: 'From Pantnagar Airport',
    duration: '~3.5 hours',
    distance: '130 km',
    steps: [
      { label: 'Pantnagar Airport', note: 'Nearest domestic airport · flights from Delhi' },
      { label: 'Pantnagar → Haldwani', note: '25 km · 30 mins' },
      { label: 'Haldwani → Shaukiyathal', note: 'Via Bhowali & Almora · 105 km · ~3 hrs' },
    ],
    note: 'IndiGo and Air India operate Delhi–Pantnagar. We can arrange transfers.',
  },
];

const faqs = [
  {
    q: 'What are the GPS coordinates?',
    a: 'Lat: 29.6372° N, Long: 79.8466° E. Search "Jageshwar Almora" on Google Maps, then follow the Shaukiyathal ridge road 2 km north of the temple complex.',
  },
  {
    q: 'Can I drive my own car?',
    a: 'Yes. The road is tarred up to the property. A standard sedan handles it easily. SUV/4WD not required, though preferred in winter.',
  },
  {
    q: 'Do you arrange pickups?',
    a: 'Yes. We arrange airport/station pickup from Kathgodam, Haldwani, or Pantnagar. Share your arrival details at info@kotkailash.com.',
  },
  {
    q: 'What is the road condition?',
    a: 'Good. NHAI and PWD maintain the Almora–Jageshwar corridor. The final 6 km on the ridge road is a single-lane forest track — scenic and manageable.',
  },
  {
    q: 'Is there mobile signal on the way?',
    a: 'Jio and BSNL have signal throughout. Airtel is patchy between Almora and Jageshwar. The property itself has Wi-Fi.',
  },
  {
    q: 'Best time to drive?',
    a: 'October–June is ideal. The route is passable year-round, though the mountain section can see brief closures in heavy snowfall (Jan–Feb). We inform guests in advance.',
  },
];

export default function HowToReachPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--forest-deep)',
          padding: '160px 64px 100px',
        }}
      >
        <h1 className="sr-only">
          How to Reach Kot Kailash — Directions from Delhi, Kathgodam, and Pantnagar
        </h1>
        <div style={{ maxWidth: '680px' }}>
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              display: 'block',
              marginBottom: '20px',
            }}
          >
            How to Reach
          </span>
          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            The ridge finds you.
            <br />
            <em style={{ fontStyle: 'normal', color: 'var(--gold-pale)' }}>
              If you know the way.
            </em>
          </h2>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.8,
              maxWidth: '500px',
            }}
          >
            Kot Kailash sits at Shaukiyathal, 2 km north of Jageshwar Dham,
            Almora district. Road access is good year-round.
          </p>
        </div>
      </section>

      {/* Route cards */}
      <section
        style={{
          background: 'var(--parchment)',
          padding: '100px 64px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3px',
          }}
          className="route-grid"
        >
          <style>{`
            @media (max-width: 1100px) { .route-grid { grid-template-columns: 1fr !important; } }
          `}</style>

          {routes.map((route, i) => (
            <RevealWrapper key={route.numeral} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div
                style={{
                  padding: '44px 40px',
                  background: 'var(--cream)',
                  border: '1px solid var(--fog)',
                  height: '100%',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '1.6rem',
                    color: 'rgba(139,107,61,0.1)',
                    display: 'block',
                    lineHeight: 1,
                    marginBottom: '16px',
                    fontWeight: 300,
                  }}
                  aria-hidden="true"
                >
                  {route.numeral}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '1.35rem',
                    fontWeight: 300,
                    color: 'var(--ink)',
                    marginBottom: '6px',
                  }}
                >
                  {route.from}
                </h3>
                <div
                  style={{
                    display: 'flex',
                    gap: '16px',
                    marginBottom: '28px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '11px',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                    }}
                  >
                    {route.duration}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '11px',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-soft)',
                    }}
                  >
                    {route.distance}
                  </span>
                </div>

                <div
                  style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
                >
                  {route.steps.map((step, j) => (
                    <div
                      key={j}
                      style={{
                        padding: '12px 0',
                        borderTop: '1px solid var(--fog)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '3px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--serif)',
                          fontSize: '0.9rem',
                          color: 'var(--ink)',
                          lineHeight: 1.3,
                        }}
                      >
                        {step.label}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--serif)',
                          fontSize: '0.8rem',
                          fontStyle: 'italic',
                          color: 'var(--ink-soft)',
                          lineHeight: 1.4,
                        }}
                      >
                        {step.note}
                      </span>
                    </div>
                  ))}
                </div>

                <p
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '0.85rem',
                    fontStyle: 'italic',
                    color: 'var(--gold)',
                    lineHeight: 1.6,
                    marginTop: '20px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--fog)',
                  }}
                >
                  {route.note}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* Map placeholder + coords */}
      <section
        style={{
          background: 'var(--ink)',
          padding: '80px 64px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
        className="map-grid"
      >
        <style>{`
          @media (max-width: 1100px) { .map-grid { grid-template-columns: 1fr !important; } }
        `}</style>

        <RevealWrapper>
          <div className="eyebrow" style={{ color: 'var(--gold)' }}>Find Us</div>
          <h3
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 300,
              color: 'white',
              lineHeight: 1.2,
              marginBottom: '20px',
            }}
          >
            Shaukiyathal,
            <br />
            <em style={{ fontStyle: 'normal', color: 'var(--gold-pale)' }}>
              Almora, Uttarakhand
            </em>
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { label: 'GPS', value: '29.6372° N, 79.8466° E' },
              { label: 'Nearest Town', value: 'Almora (36 km)' },
              { label: 'Nearest Temple', value: 'Jageshwar Dham (2 km)' },
              { label: 'Railhead', value: 'Kathgodam (115 km)' },
              { label: 'Airport', value: 'Pantnagar (130 km)' },
              { label: 'Altitude', value: '7,800 feet' },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  gap: '24px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.55)',
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.8)',
                    textAlign: 'right',
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '32px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://wa.me/919650264905?text=I%20need%20directions%20to%20Kot%20Kailash"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              WhatsApp Directions
            </a>
            <a
              href="mailto:info@kotkailash.com?subject=Transfer%20Arrangement"
              className="btn-outline"
            >
              Arrange Transfer
            </a>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={2}>
          {/* Map placeholder */}
          <div
            style={{
              width: '100%',
              aspectRatio: '4/3',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Grid lines */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            {/* Pin icon */}
            <svg
              width="32"
              height="40"
              viewBox="0 0 32 40"
              fill="none"
              style={{ position: 'relative', zIndex: 1 }}
            >
              <path
                d="M16 0C7.163 0 0 7.163 0 16c0 10 16 24 16 24S32 26 32 16C32 7.163 24.837 0 16 0Z"
                fill="var(--gold)"
                opacity="0.8"
              />
              <circle cx="16" cy="16" r="5" fill="white" opacity="0.9" />
            </svg>
            <span
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '11px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
                position: 'relative',
                zIndex: 1,
              }}
            >
              Shaukiyathal Ridge
            </span>
            <span
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '0.8rem',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.2)',
                position: 'relative',
                zIndex: 1,
              }}
            >
              29.6372° N, 79.8466° E
            </span>
          </div>
        </RevealWrapper>
      </section>

      {/* Journey — Getting to the ridge */}
      <Journey />

      {/* FAQ */}
      <section
        style={{
          background: 'var(--cream)',
          padding: '100px 64px',
        }}
      >
        <RevealWrapper>
          <div className="eyebrow">Frequently Asked</div>
          <h3
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2rem, 3vw, 2.8rem)',
              fontWeight: 300,
              color: 'var(--ink)',
              lineHeight: 1.15,
              marginBottom: '48px',
              maxWidth: '480px',
            }}
          >
            Questions about getting here.
          </h3>
        </RevealWrapper>

        <style>{`
            @media (max-width: 900px) { .faq-grid { grid-template-columns: 1fr !important; } }
            .faq-grid > * { display: flex; flex-direction: column; }
            .faq-grid > * > div { flex: 1; }
          `}</style>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3px',
          }}
          className="faq-grid"
        >

          {faqs.map((faq, i) => (
            <RevealWrapper key={i} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div
                style={{
                  padding: '32px',
                  background: 'var(--parchment)',
                  border: '1px solid var(--fog)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h4
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '1.05rem',
                    fontWeight: 300,
                    color: 'var(--ink)',
                    marginBottom: '12px',
                    lineHeight: 1.3,
                  }}
                >
                  {faq.q}
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '0.9rem',
                    fontStyle: 'italic',
                    color: 'var(--ink-soft)',
                    lineHeight: 1.8,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      <Reserve />
    </>
  );
}
