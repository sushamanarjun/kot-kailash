'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

interface FaqItem {
  q: string;
  a?: string;
  type?: 'cancellation' | 'reservation';
}

const categories: { numeral: string; label: string; items: FaqItem[] }[] = [
  {
    numeral: 'I',
    label: 'The Property',
    items: [
      {
        q: 'What is Kot Kailash?',
        a: 'Kot Kailash is a heritage ridge property at 7,800 feet in the Kumaon Himalayas. Set across three heritage farmhouses with 8 guest rooms, the estate sits amid oak and rhododendron forest, terraced farms, and an ancient Shiva temple. It is a family-run retreat, not a hotel.',
      },
      {
        q: 'Where exactly is it located?',
        a: 'Village Kunja Gunth, Shaukiyathal, District Almora, Uttarakhand — approximately 2.5 hours by road from Kathgodam railway station. Full directions are on our How to Reach page.',
      },
      {
        q: 'How many rooms are there?',
        a: 'Eight keys across three heritage houses — Ghar, Baithak, and Kothi. Each house has its own character and views; rooms vary in size and outlook.',
      },
      {
        q: 'What kind of property is it?',
        a: 'Kot Kailash is a heritage farmstead converted into a guest retreat — a personal home, not a commercial hotel. At any given time only a small number of guests are on the property, which shapes the pace and the experience.',
      },
      {
        q: 'Is it suitable for families with children?',
        a: "Yes. The open grounds, forest trails, and nature-based experiences are well-suited to children. There are no dedicated kids' facilities, but the naturalist walks and farmstead activities are naturally engaging for young guests.",
      },
    ],
  },
  {
    numeral: 'II',
    label: 'Rooms & Stay',
    items: [
      {
        q: 'What is included in the stay?',
        a: 'All meals — breakfast, lunch, and dinner — are included, along with evening tea, evening bonfire, all listed Kot Kailash experiences, and gratuity. The rate is fully inclusive.',
      },
      {
        q: 'What are the check-in and check-out times?',
        a: 'Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out can sometimes be arranged subject to availability — please write to us in advance.',
      },
      {
        q: 'Is there a minimum stay?',
        a: 'Two nights is the minimum. We recommend three nights to properly absorb the altitude, the pace, and the experiences the property has to offer.',
      },
      {
        q: 'Can I extend my stay after arriving?',
        a: 'Yes, subject to availability. You are welcome to request an extension at check-in or by contacting the team during your stay. We will confirm as quickly as possible.',
      },
      {
        q: 'Is there heating in the rooms?',
        a: 'All rooms have heating arrangements for the winter months. Supplementary heaters are available on request during shoulder months when nights turn cold.',
      },
    ],
  },
  {
    numeral: 'III',
    label: 'Dining & Food',
    items: [
      {
        q: 'What does Tehni — The Kitchen serve?',
        a: 'Tehni serves Kumaoni home cooking — seasonal, local, and prepared fresh each day. There is no printed menu. The kitchen works around what is in season and the preferences guests share on arrival.',
      },
      {
        q: 'Can dietary requirements be accommodated?',
        a: 'Yes. Vegetarian, vegan, gluten-free, and Jain diets can all be accommodated. Please mention your requirements at the time of booking and again on arrival so the kitchen can plan accordingly.',
      },
      {
        q: 'Is alcohol served at the property?',
        a: 'Uttarakhand is a restricted state. No alcohol is served or permitted on the property.',
      },
    ],
  },
  {
    numeral: 'IV',
    label: 'Amenities & Facilities',
    items: [
      {
        q: 'Is there Wi-Fi at the property?',
        a: 'Basic connectivity is available in the common areas. Kot Kailash intentionally limits connectivity — the ridge is best experienced without a screen in hand. Guests looking for a digital detox will feel at home.',
      },
      {
        q: 'What is mobile network coverage like?',
        a: 'Coverage is patchy, as expected at altitude. BSNL has the most consistent signal in the area. Airtel and Jio work intermittently. Plan accordingly if you need to stay reachable.',
      },
      {
        q: 'Is there a doctor or medical facility nearby?',
        a: 'The nearest hospital is in Almora, approximately 40 km away. A comprehensive first-aid kit and emergency contacts are maintained at the property, and staff are trained in basic first aid.',
      },
      {
        q: 'Is there a swimming pool or gym?',
        a: 'No. The experience at Kot Kailash is centred on the forest, the ridge, the views, and slow living — not amenities. Guests looking for spa facilities or gym equipment will be better served elsewhere.',
      },
    ],
  },
  {
    numeral: 'V',
    label: 'Nearby & Travel',
    items: [
      {
        q: 'How do I reach Kot Kailash?',
        a: 'The nearest railhead is Kathgodam, served by the Corbett Express and other trains from Delhi. From Kathgodam it is approximately 2.5 hours by road via Almora. Private cabs and shared taxis are available from the station. Full route details are on our How to Reach page.',
      },
      {
        q: 'Is there an airport nearby?',
        a: 'Pantnagar Airport is the nearest, roughly 3 hours away, with limited connections. Most guests fly into Delhi and travel onward by train or road — the overnight Corbett Express from Delhi makes for a comfortable journey.',
      },
      {
        q: 'Do you arrange airport or station transfers?',
        a: 'Yes. We can arrange private cab transfers from Kathgodam or Haldwani on request. Transfer charges apply and should be confirmed when making your reservation.',
      },
      {
        q: 'What is the nearest town?',
        a: 'Shaukiyathal is a small village. Almora, approximately 40 km away, is the nearest town with ATMs, pharmacies, a hospital, and shops.',
      },
      {
        q: 'Are there ATMs near the property?',
        a: 'Almora has multiple ATMs. We recommend carrying adequate cash before leaving the main road, as UPI signal can be unreliable en route and at the property.',
      },
    ],
  },
  {
    numeral: 'VI',
    label: 'Policies & Other',
    items: [
      { q: 'What is the cancellation policy?', type: 'cancellation' },
      {
        q: 'Is smoking allowed?',
        a: 'Smoking is not permitted inside rooms or common areas. A designated outdoor space is available for guests who smoke.',
      },
      { q: 'Are pets allowed?', a: 'Pets are not permitted at Kot Kailash at this time.' },
      {
        q: 'Is the property accessible for guests with mobility limitations?',
        a: 'The property involves uneven terrain, stone steps, and hillside paths. It is not recommended for guests with significant mobility challenges. Please write to us if you have specific concerns and we will advise honestly.',
      },
      { q: 'How do I make a reservation?', type: 'reservation' },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Answer renderer (handles items with embedded links)
// ─────────────────────────────────────────────────────────────────────────────

function AnswerContent({ item }: { item: FaqItem }) {
  if (item.type === 'cancellation') {
    return (
      <>
        Cancellations are free if made more than 15 days before your arrival date. No refund is
        issued for cancellations within 15 days or for no-shows. The blackout period (20 Dec – 5 Jan)
        has stricter terms — no cancellation charge only if cancelled more than 90 days before
        arrival.{' '}
        <Link href="/cancellations" className="faq-inline-link">
          Read the full cancellation policy →
        </Link>
      </>
    );
  }
  if (item.type === 'reservation') {
    return (
      <>
        Reservations can be made via the{' '}
        <Link href="/reserve" className="faq-inline-link">
          Reserve page
        </Link>{' '}
        on this website, or by writing directly to{' '}
        <a href="mailto:stay@kotkailash.com" className="faq-inline-link">
          stay@kotkailash.com
        </a>
        . We respond to all enquiries personally.
      </>
    );
  }
  return <>{item.a}</>;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function FaqPageClient() {
  const [openSet, setOpenSet] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState('I');
  const sectionMap = useRef<Map<string, HTMLElement>>(new Map());
  const navRef = useRef<HTMLDivElement>(null);

  const toggle = (key: string) =>
    setOpenSet(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  // Track active section on scroll
  useEffect(() => {
    const update = () => {
      const offset = 160;
      let current = categories[0].numeral;
      sectionMap.current.forEach((el, numeral) => {
        if (el.getBoundingClientRect().top <= offset) current = numeral;
      });
      setActiveCategory(current);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  const scrollToSection = (numeral: string) => {
    const el = sectionMap.current.get(numeral);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 142;
    window.scrollTo({ top, behavior: 'smooth' });
    // Keep the active tab visible in the sticky nav
    const btn = navRef.current?.querySelector<HTMLElement>(`[data-btn="${numeral}"]`);
    btn?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  return (
    <>
      <style>{`
        /* ── Keyframes ── */
        @keyframes faqUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes faqFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── Reduced-motion overrides ── */
        @media (prefers-reduced-motion: reduce) {
          .faq-hero-content { animation: none !important; opacity: 1 !important; }
          .faq-icon         { transition: none !important; }
          .faq-ans-grid     { transition: none !important; }
          .faq-ans-inner    { transition: none !important; }
          .faq-item         { transition: none !important; }
          .faq-nav-btn      { transition: none !important; }
        }

        /* ═══════════════════════════════════════
           §1 · HERO
        ═══════════════════════════════════════ */
        .faq-hero {
          background: var(--ink);
          padding: 168px 64px 120px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        /* Large decorative watermark "?" */
        .faq-hero::before {
          content: '?';
          position: absolute;
          right: -2vw;
          top: 50%;
          transform: translateY(-50%);
          font-family: var(--serif);
          font-size: clamp(22rem, 42vw, 56rem);
          font-weight: 300;
          color: rgba(138,90,56,0.042);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          z-index: 1;
        }
        /* Radial gold glow from top */
        .faq-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 50% -10%, rgba(138,90,56,0.16) 0%, transparent 60%),
            radial-gradient(ellipse at 30% 100%, rgba(24,20,15,0.5) 0%, transparent 50%);
          pointer-events: none;
          z-index: 1;
        }
        .faq-hero-content {
          position: relative;
          z-index: 2;
          animation: faqUp 0.72s cubic-bezier(0.22,1,0.36,1) 0.08s both;
        }
        .faq-hero-stat {
          font-family: var(--sans);
          font-size: 9px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
          display: block;
          margin-bottom: 36px;
        }
        @media (max-width: 768px) {
          .faq-hero { padding: 136px 24px 88px; }
          .faq-hero::before { right: -10vw; font-size: 55vw; opacity: 0.8; }
        }

        /* ═══════════════════════════════════════
           §2 · STICKY CATEGORY NAV
        ═══════════════════════════════════════ */
        .faq-nav {
          position: sticky;
          top: 78px;
          z-index: 50;
          background: var(--cream);
          border-top: 1px solid rgba(24,20,15,0.06);
          border-bottom: 1px solid rgba(24,20,15,0.08);
          display: flex;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          padding: 0 52px;
          box-shadow: 0 2px 16px rgba(24,20,15,0.05);
        }
        .faq-nav::-webkit-scrollbar { display: none; }
        @media (max-width: 768px) {
          .faq-nav { padding: 0 20px; top: 70px; }
        }

        .faq-nav-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 0 18px;
          height: 52px;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          white-space: nowrap;
          color: rgba(24,20,15,0.38);
          transition: color 0.22s ease, border-color 0.22s ease;
          touch-action: manipulation;
          flex-shrink: 0;
        }
        .faq-nav-btn:hover { color: var(--ink); }
        .faq-nav-btn:focus-visible {
          outline: 2px solid var(--gold);
          outline-offset: -2px;
        }
        .faq-nav-btn.faq-nav-active {
          color: var(--gold);
          border-bottom-color: var(--gold);
        }
        .faq-nav-roman {
          font-family: var(--serif);
          font-size: 0.72rem;
          font-style: italic;
          color: inherit;
          line-height: 1;
        }
        .faq-nav-text {
          font-family: var(--sans);
          font-size: 9.5px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: inherit;
        }
        /* Mobile: hide text labels, keep Roman numerals only */
        @media (max-width: 520px) {
          .faq-nav-text { display: none; }
          .faq-nav-btn  { padding: 0 15px; }
          .faq-nav-roman { font-size: 0.88rem; font-style: normal; }
        }

        /* ═══════════════════════════════════════
           §3 · FAQ BODY
        ═══════════════════════════════════════ */
        .faq-body {
          background: var(--parchment);
          padding: 100px 64px 128px;
        }
        .faq-inner {
          max-width: 900px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .faq-body { padding: 68px 24px 100px; }
        }

        /* ── Category section ── */
        .faq-cat {
          margin-bottom: 84px;
          scroll-margin-top: 148px;
        }
        .faq-cat:last-child { margin-bottom: 0; }
        @media (max-width: 768px) {
          .faq-cat { margin-bottom: 64px; scroll-margin-top: 136px; }
        }

        /* Category header row */
        .faq-cat-hd {
          display: flex;
          align-items: flex-end;
          gap: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(24,20,15,0.11);
          margin-bottom: 0;
        }
        .faq-cat-roman {
          font-family: var(--serif);
          font-size: clamp(3.2rem, 6.5vw, 5.2rem);
          font-weight: 300;
          color: rgba(138,90,56,0.28);
          line-height: 1;
          flex-shrink: 0;
        }
        .faq-cat-info {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding-bottom: 6px;
        }
        .faq-cat-eyebrow {
          font-family: var(--sans);
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold);
          line-height: 1;
        }
        .faq-cat-sub {
          font-family: var(--serif);
          font-size: 0.8rem;
          font-style: italic;
          color: rgba(24,20,15,0.72);
          line-height: 1;
        }

        /* ── Accordion item ── */
        .faq-item {
          border-bottom: 1px solid rgba(24,20,15,0.08);
          background-color: transparent;
          box-shadow: inset 3px 0 0 transparent;
          transition:
            background-color 0.28s ease,
            box-shadow 0.28s ease;
        }
        .faq-item.faq-open {
          background-color: rgba(138,90,56,0.032);
          box-shadow: inset 3px 0 0 var(--gold);
        }

        /* Question button */
        .faq-btn {
          width: 100%;
          background: none;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          padding: 22px 6px 22px 18px;
          cursor: pointer;
          text-align: left;
          touch-action: manipulation;
          min-height: 44px;
        }
        .faq-btn:focus-visible {
          outline: 2px solid var(--gold);
          outline-offset: -2px;
        }
        .faq-q {
          font-family: var(--serif);
          font-size: 1.02rem;
          font-weight: 300;
          color: var(--ink);
          line-height: 1.46;
          transition: color 0.22s ease;
        }
        .faq-item:not(.faq-open) .faq-btn:hover .faq-q {
          color: rgba(138,90,56,0.72);
        }
        .faq-open .faq-q { color: var(--gold); }

        /* +/× icon — rotates 45° on open */
        .faq-icon {
          font-family: var(--sans);
          font-size: 1.3rem;
          line-height: 1;
          color: var(--gold);
          flex-shrink: 0;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 3px;
          transform-origin: center;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .faq-open .faq-icon {
          transform: rotate(45deg);
        }

        /* Answer — smooth grid expansion */
        .faq-ans-grid {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.34s cubic-bezier(0.4,0,0.2,1);
        }
        .faq-open .faq-ans-grid {
          grid-template-rows: 1fr;
        }
        .faq-ans-clip {
          overflow: hidden;
          min-height: 0;
        }
        .faq-ans-inner {
          font-family: var(--serif);
          font-size: 0.93rem;
          color: var(--ink-soft);
          line-height: 1.9;
          padding: 2px 18px 26px 18px;
          opacity: 0;
          transform: translateY(-5px);
          transition:
            opacity 0.24s ease 0.1s,
            transform 0.24s ease 0.1s;
        }
        .faq-open .faq-ans-inner {
          opacity: 1;
          transform: translateY(0);
        }

        /* Inline links inside answers */
        .faq-inline-link {
          color: var(--gold);
          text-decoration: none;
          border-bottom: 1px solid rgba(197,153,90,0.32);
          transition: border-color 0.2s;
        }
        .faq-inline-link:hover { border-bottom-color: var(--gold); }

        /* ═══════════════════════════════════════
           §4 · CTA
        ═══════════════════════════════════════ */
        .faq-cta {
          background: var(--forest-deep);
          padding: 100px 64px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 768px) { .faq-cta { padding: 76px 24px; } }
      `}</style>

      <h1 className="sr-only">
        Frequently Asked Questions — Kot Kailash Heritage Retreat, Kumaon
      </h1>

      {/* ═══════════════════════════════════════════
          §1 · HERO
      ═══════════════════════════════════════════ */}
      <section className="faq-hero">
        <div className="grain" />
        <div className="faq-hero-content">
          <div
            className="eyebrow"
            style={{ color: 'var(--gold)', justifyContent: 'center', marginBottom: '26px' }}
          >
            Guest Queries
          </div>

          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2.8rem, 5vw, 4.6rem)',
              fontWeight: 300,
              lineHeight: 1.06,
              color: 'white',
              letterSpacing: '-0.015em',
              marginBottom: '10px',
            }}
          >
            Frequently
            <br />
            <em style={{ color: 'var(--gold)' }}>Asked Questions</em>
          </h2>

          <span className="faq-hero-stat">27 answers &nbsp;·&nbsp; 6 topics</span>

          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.02rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.44)',
              lineHeight: 1.82,
              maxWidth: '480px',
              margin: '0 auto 44px',
            }}
          >
            Everything you need to know before you arrive on the ridge.
          </p>

          <Link
            href="/reserve"
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '10px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.32)',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
          >
            ← Back to Reserve
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          §2 · STICKY CATEGORY NAV
      ═══════════════════════════════════════════ */}
      <nav
        className="faq-nav"
        ref={navRef}
        aria-label="Jump to FAQ category"
      >
        {categories.map(cat => (
          <button
            key={cat.numeral}
            data-btn={cat.numeral}
            className={`faq-nav-btn${activeCategory === cat.numeral ? ' faq-nav-active' : ''}`}
            onClick={() => scrollToSection(cat.numeral)}
            aria-label={`Jump to ${cat.label}`}
          >
            <span className="faq-nav-roman">{cat.numeral}</span>
            <span className="faq-nav-text">{cat.label}</span>
          </button>
        ))}
      </nav>

      {/* ═══════════════════════════════════════════
          §3 · FAQ BODY
      ═══════════════════════════════════════════ */}
      <section className="faq-body">
        <div className="faq-inner">
          {categories.map(cat => (
            <div
              key={cat.numeral}
              className="faq-cat"
              ref={el => {
                if (el) sectionMap.current.set(cat.numeral, el);
                else sectionMap.current.delete(cat.numeral);
              }}
            >
              {/* Category header */}
              <div className="faq-cat-hd">
                <span className="faq-cat-roman" aria-hidden="true">
                  {cat.numeral}
                </span>
                <div className="faq-cat-info">
                  <span className="faq-cat-eyebrow">
                    {cat.numeral} &nbsp;·&nbsp; {cat.label}
                  </span>
                  <span className="faq-cat-sub">
                    {cat.items.length} answer{cat.items.length !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              {/* Accordion items */}
              <div role="list">
                {cat.items.map((item, i) => {
                  const key = `${cat.numeral}-${i}`;
                  const isOpen = openSet.has(key);
                  return (
                    <div
                      key={key}
                      className={`faq-item${isOpen ? ' faq-open' : ''}`}
                      role="listitem"
                    >
                      <button
                        className="faq-btn"
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                        aria-controls={`ans-${key}`}
                      >
                        <span className="faq-q">{item.q}</span>
                        <span className="faq-icon" aria-hidden="true">+</span>
                      </button>

                      <div
                        id={`ans-${key}`}
                        className="faq-ans-grid"
                        aria-hidden={!isOpen}
                      >
                        <div className="faq-ans-clip">
                          <div className="faq-ans-inner">
                            <AnswerContent item={item} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          §4 · CTA
      ═══════════════════════════════════════════ */}
      <section className="faq-cta">
        <div className="grain" />
        <div style={{ position: 'relative', zIndex: 1 }}>
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
            Still have questions?
          </div>
          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.65rem)',
              fontWeight: 300,
              color: 'white',
              lineHeight: 1.2,
              marginBottom: '16px',
            }}
          >
            We&rsquo;re happy to clarify anything
            <br />
            <em style={{ color: 'var(--gold)' }}>before you book.</em>
          </h2>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '0.95rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.42)',
              marginBottom: '38px',
              lineHeight: 1.72,
            }}
          >
            Write to us about your reservation, dates, or any question about the property.
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
              href="mailto:stay@kotkailash.com?subject=FAQ%20Enquiry"
              className="btn-gold"
            >
              Email the Team
            </a>
            <Link href="/reserve" className="btn-outline">
              View Rates &amp; Reserve
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
