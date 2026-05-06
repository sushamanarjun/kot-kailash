import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import RevealWrapper from '@/components/ui/RevealWrapper';

export const metadata: Metadata = buildMetadata({
  title: 'Cancellations & Refunds | Kot Kailash — Heritage Retreat, Kumaon',
  description:
    'Cancellation and refund policy for Kot Kailash — blackout period terms, mid-stay changes, refund timelines, and late cancellation conditions.',
  path: '/cancellations',
});

const quickRef = [
  { number: '90', unit: 'days', label: 'Blackout period cutoff', sub: 'Free cancellation before this window' },
  { number: '15', unit: 'days', label: 'Standard cancellation window', sub: 'Cancel before this for a refund' },
  { number: '15', unit: 'working days', label: 'Refund processing time', sub: 'After receipt of bank details' },
];

const policies = [
  {
    numeral: 'I',
    eyebrow: 'Blackout Period',
    heading: 'Cancellation during 20 Dec – 5 Jan',
    body: 'No cancellation charge if the reservation is cancelled more than 90 days before the date of arrival. For cancellations received within 90 days of arrival, the full cost of the stay — or 100% of the deposit held — will be charged.',
    alert: {
      label: 'Important',
      text: 'Within 90 days of arrival during the blackout period, the full stay is charged with no exceptions.',
    },
    notes: null,
  },
  {
    numeral: 'II',
    eyebrow: 'Mid-Stay',
    heading: 'Shortening a stay after check-in',
    body: 'Should you choose to shorten your reservation after check-in, you will be charged for the full duration for which the reservation was originally made. This applies regardless of the reason for early departure.',
    alert: null,
    notes: null,
  },
  {
    numeral: 'III',
    eyebrow: 'Refunds',
    heading: 'Refund policy outside the blackout period',
    body: 'For reservations cancelled more than 15 days before the date of arrival, refunds will be processed within 15 working days from the date we receive your bank account details. This policy does not apply during the blackout period (20 Dec – 5 Jan).',
    alert: null,
    notes: [
      'Any credit card transaction or processing fee will be deducted from the refund amount.',
      'Refunds are processed in Indian Rupees (INR) only.',
    ],
  },
  {
    numeral: 'IV',
    eyebrow: 'Late Cancellations',
    heading: 'Cancellations within 15 days & no-shows',
    body: 'No refund will be issued for cancellations received within 15 days of the arrival date, or for guests who do not arrive on the date of check-in. This applies in all circumstances without exception.',
    alert: {
      label: 'No Refund',
      text: 'Late cancellations and no-shows are fully non-refundable in all circumstances.',
    },
    notes: null,
  },
];

export default function CancellationsPage() {
  return (
    <>
      <style>{`
        @keyframes canUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .can-hero-el { animation: none !important; opacity: 1 !important; }
        }

        /* ── Hero ── */
        .can-hero {
          background: var(--ink);
          padding: 160px 64px 100px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .can-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(138,90,56,0.12) 0%, transparent 65%);
          pointer-events: none;
        }
        @media (max-width: 768px) {
          .can-hero { padding: 130px 24px 72px; }
        }

        /* ── Quick ref strip ── */
        .can-strip {
          background: var(--cream);
          border-top: 1px solid rgba(24,20,15,0.08);
          border-bottom: 1px solid rgba(24,20,15,0.08);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .can-strip-cell {
          padding: 44px 40px;
          border-left: 1px solid rgba(24,20,15,0.08);
          text-align: center;
        }
        .can-strip-cell:first-child { border-left: none; }
        @media (max-width: 860px) {
          .can-strip { grid-template-columns: 1fr; }
          .can-strip-cell { border-left: none; border-top: 1px solid rgba(24,20,15,0.08); padding: 32px 24px; }
          .can-strip-cell:first-child { border-top: none; }
        }

        /* ── Policy blocks ── */
        .can-policies {
          background: var(--parchment);
          padding: 100px 64px 120px;
        }
        .can-policies-inner {
          max-width: 900px;
          margin: 0 auto;
        }
        .can-policy-row {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 0 52px;
          padding: 72px 0;
          border-bottom: 1px solid rgba(24,20,15,0.09);
        }
        .can-policy-row:first-child { padding-top: 0; }
        .can-policy-row:last-child { border-bottom: none; }
        @media (max-width: 768px) {
          .can-policies { padding: 64px 24px 96px; }
          .can-policy-row {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 52px 0;
          }
        }

        /* ── Alert block ── */
        .can-alert {
          margin-top: 28px;
          background: var(--ink);
          padding: 24px 28px;
          display: flex;
          gap: 18px;
          align-items: flex-start;
        }
        @media (max-width: 480px) {
          .can-alert { flex-direction: column; gap: 10px; }
        }

        /* ── CTA section ── */
        .can-cta {
          background: var(--forest-deep);
          padding: 96px 64px;
          text-align: center;
        }
        @media (max-width: 768px) {
          .can-cta { padding: 72px 24px; }
        }
      `}</style>

      <h1 className="sr-only">Cancellations &amp; Refunds — Kot Kailash Heritage Retreat</h1>

      {/* ─── §1  Hero ──────────────────────────────────────────── */}
      <section className="can-hero">
        <div className="grain" />

        <div
          className="can-hero-el"
          style={{ animation: 'canUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.1s both', position: 'relative', zIndex: 2 }}
        >
          <div
            className="eyebrow"
            style={{ color: 'var(--gold)', justifyContent: 'center', marginBottom: '24px' }}
          >
            Guest Policies
          </div>
          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2.8rem, 5vw, 4.4rem)',
              fontWeight: 300,
              lineHeight: 1.08,
              color: 'white',
              letterSpacing: '-0.01em',
              marginBottom: '28px',
            }}
          >
            Cancellations
            <br />
            <em style={{ color: 'var(--gold)' }}>&amp; Refunds</em>
          </h2>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.05rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.48)',
              lineHeight: 1.82,
              maxWidth: '500px',
              margin: '0 auto 40px',
            }}
          >
            We plan carefully around every reservation. These terms protect the small team
            and the rhythm of the ridge — please read before you book.
          </p>
          <Link
            href="/reserve"
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '10px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.38)',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
          >
            ← Back to Reserve
          </Link>
        </div>
      </section>

      {/* ─── §2  Quick Reference Strip ─────────────────────────── */}
      <div className="can-strip" role="list" aria-label="Key policy numbers at a glance">
        {quickRef.map((item, i) => (
          <RevealWrapper key={i} delay={i as 0 | 1 | 2}>
            <div className="can-strip-cell" role="listitem">
              <div
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(2.6rem, 4vw, 3.8rem)',
                  fontWeight: 300,
                  color: 'var(--ink)',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}
              >
                {item.number}
                <span
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '11px',
                    letterSpacing: '0.16em',
                    color: 'var(--gold)',
                    marginLeft: '8px',
                    textTransform: 'uppercase',
                    verticalAlign: 'middle',
                  }}
                >
                  {item.unit}
                </span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  marginTop: '10px',
                  marginBottom: '6px',
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '0.82rem',
                  fontStyle: 'italic',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.6,
                }}
              >
                {item.sub}
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>

      {/* ─── §3  Policy Blocks ─────────────────────────────────── */}
      <section className="can-policies">
        <div className="can-policies-inner">
          {policies.map((p, i) => (
            <RevealWrapper key={p.numeral} delay={0}>
              <article className="can-policy-row">

                {/* Left — large numeral */}
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 'clamp(3.5rem, 6vw, 5rem)',
                      fontWeight: 300,
                      color: 'rgba(138,90,56,0.18)',
                      lineHeight: 1,
                      marginBottom: '8px',
                    }}
                    aria-hidden="true"
                  >
                    {p.numeral}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '9px',
                      letterSpacing: '0.28em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                    }}
                  >
                    {p.eyebrow}
                  </div>
                </div>

                {/* Right — content */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                      fontWeight: 300,
                      lineHeight: 1.22,
                      color: 'var(--ink)',
                      marginBottom: '20px',
                      letterSpacing: '-0.005em',
                    }}
                  >
                    {p.heading}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '1rem',
                      color: 'var(--ink-soft)',
                      lineHeight: 1.9,
                      fontWeight: 300,
                    }}
                  >
                    {p.body}
                  </p>

                  {/* Dark alert block for critical rules */}
                  {p.alert && (
                    <div className="can-alert">
                      <span
                        style={{
                          fontFamily: 'var(--sans)',
                          fontSize: '9px',
                          letterSpacing: '0.26em',
                          textTransform: 'uppercase',
                          color: 'var(--gold)',
                          whiteSpace: 'nowrap',
                          paddingTop: '2px',
                          flexShrink: 0,
                        }}
                      >
                        {p.alert.label}
                      </span>
                      <p
                        style={{
                          fontFamily: 'var(--serif)',
                          fontSize: '0.95rem',
                          fontStyle: 'italic',
                          color: 'rgba(255,255,255,0.72)',
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {p.alert.text}
                      </p>
                    </div>
                  )}

                  {/* Additional notes */}
                  {p.notes && (
                    <ul
                      style={{
                        listStyle: 'none',
                        marginTop: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        borderLeft: '2px solid rgba(138,90,56,0.25)',
                        paddingLeft: '20px',
                      }}
                    >
                      {p.notes.map((note, ni) => (
                        <li
                          key={ni}
                          style={{
                            fontFamily: 'var(--serif)',
                            fontSize: '0.88rem',
                            fontStyle: 'italic',
                            color: 'var(--ink-soft)',
                            lineHeight: 1.75,
                          }}
                        >
                          {note}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* ─── §4  Contact CTA ───────────────────────────────────── */}
      <section className="can-cta">
        <RevealWrapper>
          <div style={{ position: 'relative' }}>
            <div className="grain" />
            <div
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '10px',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '20px',
              }}
            >
              Have questions?
            </div>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 300,
                color: 'white',
                lineHeight: 1.2,
                marginBottom: '16px',
              }}
            >
              We&rsquo;re happy to clarify anything
              <br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>before you book.</em>
            </h2>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '0.95rem',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.46)',
                marginBottom: '36px',
                lineHeight: 1.7,
              }}
            >
              Write to us about your reservation, dates, or any policy question.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="mailto:info@kotkailash.com?subject=Cancellation%20Enquiry"
                className="btn-gold"
              >
                Email the Team
              </a>
              <Link href="/reserve" className="btn-outline">
                View Rates &amp; Reserve
              </Link>
            </div>
          </div>
        </RevealWrapper>
      </section>
    </>
  );
}
