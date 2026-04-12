import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Reserve from '@/components/sections/Reserve';
import AltitudeNote from '@/components/sections/AltitudeNote';

const HOTEL_SPIDER_URL = 'https://reservations.hotel-spider.com/032644b5fbfafed6';

export const metadata: Metadata = buildMetadata({
  title: 'Rates & Reservations · Kot Kailash Kumaon',
  description:
    'Reserve a stay at Kot Kailash Kumaon. Eight keys, fully inclusive. Direct booking through Hotel Spider. No booking fees. Contact us by phone, WhatsApp, or email.',
  path: '/reserve',
  keywords: [
    'Kot Kailash booking',
    'reserve Kot Kailash',
    'heritage hotel rates Almora',
    'boutique hotel booking Uttarakhand',
    'Kumaon retreat booking',
  ],
});

const rates = [
  {
    id: 'kumaon-vann',
    name: 'Kumaon Vann',
    type: 'Signature Forest Cottage · 1 Key',
    inclusions: 'All meals · Double occupancy · Private sit-out',
    note: 'Contact for current rates',
  },
  {
    id: 'family-suite',
    name: 'The Family Suite',
    type: 'Private Residence · 1 Key · Up to 5 guests',
    inclusions: 'All meals · Private sit-out · Wood fire',
    note: 'Contact for current rates',
  },
  {
    id: 'kutir-suites',
    name: 'Kutir Suites',
    type: 'The Annexe · 3 Keys',
    inclusions: 'All meals · Double occupancy · Valley balcony',
    note: 'Contact for current rates',
  },
  {
    id: 'kumaoni-suites',
    name: 'Kumaoni Suites',
    type: 'Original Main House · 3 Keys',
    inclusions: 'All meals · Double occupancy · Heritage structure',
    note: 'Contact for current rates',
  },
  {
    id: 'buyout',
    name: 'Full Property Buyout',
    type: 'All 8 Keys · Exclusive Use',
    inclusions: 'All meals · Exclusive use · Custom programming available',
    note: 'Enquire for availability and pricing',
  },
];

export default function ReservePage() {
  return (
    <>
      {/* Page Header */}
      <section
        style={{
          background: 'var(--ink)',
          padding: '160px 64px 80px',
          textAlign: 'center',
        }}
      >
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
          Rates & Reservations
        </span>
        <h1
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'white',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          Reserve your stay
          <br />
          <em style={{ fontStyle: 'normal', color: 'var(--gold-pale)' }}>
            on the ridge.
          </em>
        </h1>
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '1rem',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}
        >
          All stays are fully inclusive. Meals, experiences, and in-house
          activities. Direct booking carries no fees.
        </p>
        <div style={{ marginTop: '36px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={HOTEL_SPIDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ padding: '15px 44px', fontSize: '11px', letterSpacing: '0.26em' }}
          >
            Check Availability
          </a>
          <a
            href="https://wa.me/919650264905?text=I%20would%20like%20to%20enquire%20about%20rates%20at%20Kot%20Kailash"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            WhatsApp Enquiry
          </a>
        </div>
      </section>

      {/* Rates Table */}
      <section
        style={{
          background: 'var(--parchment)',
          padding: '80px 64px',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '32px',
            }}
          >
            Room types & inclusions
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {rates.map((rate) => (
              <div
                key={rate.id}
                style={{
                  background: 'var(--parchment)',
                  padding: '28px 32px',
                  border: '1px solid var(--fog)',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  alignItems: 'center',
                  gap: '24px',
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '11px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      display: 'block',
                      marginBottom: '4px',
                    }}
                  >
                    {rate.type}
                  </span>
                  <h2
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '1.2rem',
                      fontWeight: 400,
                      color: 'var(--ink)',
                      marginBottom: '6px',
                    }}
                  >
                    {rate.name}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '0.82rem',
                      fontStyle: 'italic',
                      color: 'var(--ink-soft)',
                    }}
                  >
                    {rate.inclusions}
                  </p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <span
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '0.88rem',
                      fontStyle: 'italic',
                      color: 'var(--clay)',
                    }}
                  >
                    {rate.note}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '0.88rem',
              fontStyle: 'italic',
              color: 'var(--ink-soft)',
              marginTop: '28px',
              lineHeight: 1.72,
            }}
          >
            Rates are per room per night in INR, including all meals (breakfast,
            lunch, and dinner), in-house experiences, and use of all common
            areas. Applicable taxes are additional. Seasonal rates apply;
            current pricing is available through the booking link or by
            contacting us directly.
          </p>
        </div>
      </section>

      <AltitudeNote />
      <Reserve />
    </>
  );
}
