import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Reserve from '@/components/sections/Reserve';
import RevealWrapper from '@/components/ui/RevealWrapper';

const HOTEL_SPIDER_URL = 'https://reservations.hotel-spider.com/032644b5fbfafed6';

export const metadata: Metadata = buildMetadata({
  title: 'Retreats & Offsites in Kumaon | Kot Kailash, Uttarakhand',
  description:
    'Private buyouts, yoga retreats, and corporate offsites at 7,800 ft. Eight keys, Himalayan air, hyperlocal dining at Tehni. Enquire for group rates at Kot Kailash.',
  path: '/retreats',
  keywords: [
    'corporate retreat Kumaon Uttarakhand',
    'wellness retreat Almora',
    'yoga retreat Himalaya',
    'property buyout Kumaon',
    'offsite Uttarakhand',
  ],
});

const offerings = [
  {
    numeral: 'I',
    title: 'Wellness & Yoga Retreats',
    description:
      'The altitude, the air, and the silence at Shaukiyathal make this an exceptional setting for structured retreat programmes. The ridge provides natural session spaces. Tehni builds menus around your requirements.',
    note: 'Minimum 4 nights · Full property available',
  },
  {
    numeral: 'II',
    title: 'Corporate Offsites',
    description:
      'Small leadership teams, strategy workshops, and creative residencies. The deliberate inaccessibility of the ridge — no city noise, no interrupted signal — has a measurable effect on the quality of attention in a room.',
    note: 'Full property buyout · Custom programming available',
  },
  {
    numeral: 'III',
    title: 'Full Property Buyout',
    description:
      'All eight keys across three houses. Ideal for intimate weddings, family reunions, and gatherings that deserve an entire ridge. Exclusive access. Custom menus. Your own pace.',
    note: 'All 8 keys · Staff on-site',
  },
  {
    numeral: 'IV',
    title: 'FAM Stays & Press',
    description:
      'We welcome travel writers, photographers, and travel trade professionals by invitation. We offer reduced rates for genuine editorial coverage and industry familiarisation.',
    note: '20–25% agency rate available',
  },
];

export default function RetreatsPage() {
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
          Wellness Retreats & Corporate Offsites in Kumaon, Uttarakhand
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
            Retreats &amp; Offsites
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
            The whole ridge.
            <br />
            <em style={{ fontStyle: 'normal', color: 'var(--gold-pale)' }}>
              Entirely yours.
            </em>
          </h2>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.8,
              maxWidth: '480px',
            }}
          >
            Private buyouts, yoga retreats, and corporate offsites at 7,800 ft.
            Eight keys. Himalayan air. Hyperlocal dining at Tehni.
          </p>
        </div>
      </section>

      {/* Offerings */}
      <section
        style={{
          background: 'var(--parchment)',
          padding: '100px 64px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3px',
          }}
          className="exp-grid"
        >
          {offerings.map((o, i) => (
            <RevealWrapper key={o.numeral} delay={(i % 4) as 0 | 1 | 2 | 3}>
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
                    color: 'rgba(139,107,61,0.12)',
                    display: 'block',
                    lineHeight: 1,
                    marginBottom: '16px',
                    fontWeight: 300,
                  }}
                  aria-hidden="true"
                >
                  {o.numeral}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '1.3rem',
                    fontWeight: 300,
                    color: 'var(--ink)',
                    marginBottom: '14px',
                  }}
                >
                  {o.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '0.9rem',
                    fontStyle: 'italic',
                    color: 'var(--ink-soft)',
                    lineHeight: 1.85,
                    marginBottom: '18px',
                  }}
                >
                  {o.description}
                </p>
                <span
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                  }}
                >
                  {o.note}
                </span>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* Enquiry CTA */}
      <section
        style={{
          background: 'var(--ink)',
          padding: '80px 64px',
          textAlign: 'center',
        }}
      >
        <RevealWrapper>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '20px',
            }}
          >
            Every retreat is custom-built
          </p>
          <h3
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'white',
              marginBottom: '28px',
              lineHeight: 1.2,
            }}
          >
            Tell us what you need.
            <br />
            We&rsquo;ll build around the ridge.
          </h3>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:info@kotkailash.com?subject=Retreat%20%2F%20Offsite%20Enquiry"
              className="btn-gold"
            >
              Enquire by Email
            </a>
            <a
              href={HOTEL_SPIDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Check Availability
            </a>
          </div>
        </RevealWrapper>
      </section>

      <Reserve />
    </>
  );
}
