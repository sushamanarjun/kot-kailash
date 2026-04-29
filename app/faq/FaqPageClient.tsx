'use client';

import { useState, useEffect, useRef, useId } from 'react';
import Link from 'next/link';

// ─────────────────────────────────────────────────────────────────────────────
// Types & Data
// ─────────────────────────────────────────────────────────────────────────────

interface FaqItem {
  q: string;
  a?: string;
  type?: 'temples';
}

const TEMPLES = [
  { name: 'Vridh Jageshwar Temple',    detail: '2 kms · 5 mins'   },
  { name: 'Vimal Kot Devi Temple',     detail: '5 kms · 12 mins'  },
  { name: 'Jageshwar Temple Complex',  detail: '10 kms · 15 mins' },
  { name: 'Lakhudiyar Rock Art Caves', detail: '20 kms · 35 mins' },
  { name: 'Chitai Golu Devta Temple',  detail: '25 kms · 45 mins' },
  { name: 'Almora Zoo',                detail: '25 kms · 45 mins' },
  { name: 'Nanda Devi Temple, Almora', detail: '33 kms · 1 hour'  },
  { name: 'Katarmal Sun Temple',       detail: '50 kms · 2 hours' },
];

const categories: { numeral: string; label: string; sub: string; items: FaqItem[] }[] = [
  {
    numeral: 'I',
    label: 'The Property',
    sub: 'What we are, where we are',
    items: [
      {
        q: 'What is Kot Kailash?',
        a: 'Kot Kailash is a heritage retreat set at 7,800 feet in the Kumaon Himalayas — a restored estate of three structures, and centuries of mountain quiet. It is a place to slow down: to eat from the land, walk the ridge, and wake to unobstructed views of the Nanda Devi range.',
      },
      {
        q: 'Where is Kot Kailash?',
        a: 'We are situated in Shaukiyathal, in the Almora district of Uttarakhand — approximately 117 kms from Kathgodam railhead, 150 kms from Pantnagar Airport and 223 kms from Bareilly Airport. Detailed arrival guidance and transfer coordination are provided at the time of booking.',
      },
      {
        q: 'How many rooms do you have?',
        a: 'Kot Kailash has eight keys across three distinct structures: the Kumaoni Suites, the Kutir Suites with their machan lofts, a two-bedroom Family Suite, and Kumaon Vann — a standalone forest cottage with a freestanding bathtub looking out toward Nanda Devi.',
      },
      {
        q: 'What languages does the team speak?',
        a: 'Our team speaks Kumaoni, Hindi, and English.',
      },
    ],
  },
  {
    numeral: 'II',
    label: 'Your Room',
    sub: 'Comfort, housekeeping, and parking',
    items: [
      {
        q: 'Is housekeeping provided, and what bathroom amenities can guests expect?',
        a: 'Yes. Rooms are serviced daily, and the bathrooms are stocked with curated amenities. We also provide daily turndown service. If there is anything specific you require, our team is happy to arrange it in advance.',
      },
      {
        q: 'Is there internet access at the property?',
        a: 'We offer complimentary Wi-Fi throughout the property. We do, however, gently encourage guests to treat connectivity as optional — the ridge has a way of making the outside world feel quite distant.',
      },
      {
        q: 'Is car parking available?',
        a: 'Yes, complimentary parking is available on the estate.',
      },
      {
        q: "Can accommodation be arranged for guests' chauffeurs?",
        a: 'Yes. Driver accommodation can be arranged on a chargeable basis. Please inform us at the time of booking so that we may prepare accordingly.',
      },
    ],
  },
  {
    numeral: 'III',
    label: 'Dining',
    sub: 'From the kitchen at Tehni',
    items: [
      {
        q: 'Do you serve non-vegetarian food?',
        a: 'Yes. Our kitchen — rooted in the Tehni philosophy of zero-kilometre, harvest-led cooking — works with seasonal proteins sourced with care. We do not serve beef or pork. All non-vegetarian proteins served at Kot Kailash are halal.',
      },
    ],
  },
  {
    numeral: 'IV',
    label: 'Facilities',
    sub: 'Services on the estate',
    items: [
      {
        q: 'Is a doctor accessible if needed?',
        a: 'Yes. Medical consultation is available around the clock. The wellbeing of our guests is something we take seriously, and our team is equipped to assist in coordinating care promptly.',
      },
      {
        q: 'Are there electric vehicle charging points at the property?',
        a: 'Yes. We provide plug points suitable for charging both electric cars and electric bikes.',
      },
      {
        q: 'Where are the nearest fuel stations?',
        a: 'There are two petrol stations within easy reach: Garudabaanj at approximately 7 kilometres (20 minutes), and Barechhina at approximately 18 kilometres (30 minutes).',
      },
    ],
  },
  {
    numeral: 'V',
    label: 'Nearby',
    sub: 'The Kumaon beyond our gate',
    items: [
      {
        q: 'What conveniences are available nearby?',
        a: 'A small provisions shop sits just across the road from the property. For broader needs — an ATM, bank, pharmacy, cab services, bus connections, and a hospital — Panuwanaula is approximately 7 kilometres away, or about 20 minutes by road.',
      },
      {
        q: 'What temples and places of interest are in the area?',
        type: 'temples',
      },
    ],
  },
  {
    numeral: 'VI',
    label: 'Policies',
    sub: 'Pets, accessibility, and more',
    items: [
      {
        q: 'Is Kot Kailash pet-friendly?',
        a: 'Yes. Well-behaved pets are welcome at Kot Kailash. The property has its own resident dog, so guests travelling with animals should be comfortable in the company of other four-legged guests. A nominal housekeeping fee applies for guests arriving with pets. We ask that animals be kept on a lead in communal areas, and request that you inform us at the time of booking so that we may prepare your accommodation accordingly.',
      },
      {
        q: 'Is the property wheelchair accessible?',
        a: "We regret that the terrain and historic structure of Kot Kailash do not permit full wheelchair accessibility at this time. We are happy to discuss the specific requirements of any guest in advance to ensure the best possible experience within the property's constraints.",
      },
      {
        q: 'Are there age restrictions for guests?',
        a: 'The primary guest must be 18 years of age or older to check in. Guests under 18 are warmly welcome when accompanied by an adult guardian.',
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Highlights the first occurrence of `term` inside `text`. */
function Highlight({ text, term }: { text: string; term: string }) {
  if (!term) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(term.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="faq-mark">{text.slice(idx, idx + term.length)}</mark>
      {text.slice(idx + term.length)}
    </>
  );
}

/** Renders special answer types. */
function AnswerContent({ item, term = '' }: { item: FaqItem; term?: string }) {
  if (item.type === 'temples') {
    return (
      <>
        <p>
          The Kumaon foothills hold some of the most quietly extraordinary heritage in the
          Himalayan region. A few landmarks — and the driving time — close to the property:
        </p>
        <ul className="faq-temple-list" aria-label="Nearby temples and landmarks">
          {TEMPLES.map(t => (
            <li key={t.name} className="faq-temple-item">
              <span className="faq-temple-name">{t.name}</span>
              <span className="faq-temple-rule" aria-hidden="true" />
              <span className="faq-temple-detail">{t.detail}</span>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: '18px' }}>
          Our team is happy to assist with guided excursions or to suggest itineraries that
          combine temple visits with walks and local market stops.
        </p>
      </>
    );
  }
  if (!term || !item.a) return <>{item.a}</>;
  // Highlight matching text in answer
  const text = item.a;
  const lower = text.toLowerCase();
  const lowerTerm = term.toLowerCase();
  const idx = lower.indexOf(lowerTerm);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="faq-mark">{text.slice(idx, idx + term.length)}</mark>
      {text.slice(idx + term.length)}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SVG Icons
// ─────────────────────────────────────────────────────────────────────────────

const ChevronIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M4.5 2.5l4 4-4 4" />
  </svg>
);

const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <circle cx="6.5" cy="6.5" r="4.5" />
    <path d="M10 10l3 3" />
  </svg>
);

const ClearIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
    aria-hidden="true">
    <path d="M1 1l10 10M11 1L1 11" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function FaqPageClient() {
  const [openSet, setOpenSet]     = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState('I');
  const [search, setSearch]       = useState('');
  const sectionMap  = useRef<Map<string, HTMLElement>>(new Map());
  const navRef      = useRef<HTMLDivElement>(null);
  const searchRef   = useRef<HTMLInputElement>(null);
  const statusId    = useId();

  const totalAnswers = categories.reduce((acc, c) => acc + c.items.length, 0);
  const trimmed = search.trim().toLowerCase();

  // Flat search results — preserved original category info for context badge
  const searchResults = trimmed
    ? categories.flatMap(cat =>
        cat.items
          .map((item, i) => ({ item, catLabel: cat.label, catNumeral: cat.numeral, key: `${cat.numeral}-${i}` }))
          .filter(({ item }) =>
            item.q.toLowerCase().includes(trimmed) ||
            (item.a?.toLowerCase().includes(trimmed))
          )
      )
    : [];

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
    if (trimmed) { setSearch(''); return; }
    const el = sectionMap.current.get(numeral);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 142;
    window.scrollTo({ top, behavior: 'smooth' });
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
        @keyframes faqFadeSlide {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Reduced-motion overrides ── */
        @media (prefers-reduced-motion: reduce) {
          .faq-hero-content, .faq-search-result { animation: none !important; opacity: 1 !important; }
          .faq-icon       { transition: none !important; }
          .faq-ans-grid   { transition: none !important; }
          .faq-ans-inner  { transition: none !important; }
          .faq-item       { transition: none !important; }
          .faq-nav-btn    { transition: none !important; }
          .faq-search-inner { transition: none !important; }
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
          .faq-hero::before { right: -10vw; font-size: 55vw; }
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
        @media (max-width: 768px) { .faq-nav { padding: 0 20px; top: 70px; } }

        .faq-nav-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 16px;
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
        .faq-nav-count {
          font-family: var(--sans);
          font-size: 8px;
          letter-spacing: 0.05em;
          color: inherit;
          opacity: 0.42;
          background: rgba(24,20,15,0.06);
          padding: 1.5px 5px;
          border-radius: 20px;
          line-height: 1.5;
        }
        .faq-nav-btn.faq-nav-active .faq-nav-count {
          background: rgba(138,90,56,0.12);
          opacity: 0.7;
        }
        @media (max-width: 520px) {
          .faq-nav-text, .faq-nav-count { display: none; }
          .faq-nav-btn  { padding: 0 14px; }
          .faq-nav-roman { font-size: 0.88rem; font-style: normal; }
        }

        /* ═══════════════════════════════════════
           §3 · SEARCH
        ═══════════════════════════════════════ */
        .faq-search-wrap {
          margin-bottom: 52px;
        }
        .faq-search-inner {
          display: flex;
          align-items: center;
          gap: 13px;
          padding-bottom: 13px;
          border-bottom: 1px solid rgba(24,20,15,0.14);
          transition: border-color 0.28s ease;
        }
        .faq-search-inner:focus-within {
          border-bottom-color: var(--gold);
        }
        .faq-search-icon {
          color: rgba(24,20,15,0.28);
          flex-shrink: 0;
          transition: color 0.28s ease;
        }
        .faq-search-inner:focus-within .faq-search-icon {
          color: var(--gold);
        }
        .faq-search-input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          font-family: var(--serif);
          font-size: 1rem;
          font-style: italic;
          color: var(--ink);
          line-height: 1;
          min-width: 0;
        }
        .faq-search-input::placeholder {
          color: rgba(24,20,15,0.28);
          font-style: italic;
        }
        .faq-search-clear {
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(24,20,15,0.35);
          padding: 6px;
          line-height: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          touch-action: manipulation;
          border-radius: 50%;
          transition: color 0.2s ease, background 0.2s ease;
          min-width: 28px;
          min-height: 28px;
        }
        .faq-search-clear:hover {
          color: var(--ink);
          background: rgba(24,20,15,0.06);
        }
        .faq-search-clear:focus-visible {
          outline: 2px solid var(--gold);
          outline-offset: 2px;
        }
        .faq-search-status {
          font-family: var(--sans);
          font-size: 9.5px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(24,20,15,0.38);
          margin-top: 10px;
          display: block;
        }
        .faq-search-status strong {
          color: var(--gold);
          font-weight: 500;
        }

        /* ── Highlight mark ── */
        .faq-mark {
          background: rgba(139,107,61,0.18);
          color: var(--ink);
          border-radius: 2px;
          padding: 0 2px;
        }

        /* ── Search result cards ── */
        .faq-search-results {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .faq-search-result {
          animation: faqFadeSlide 0.28s cubic-bezier(0.22,1,0.36,1) both;
        }
        .faq-search-result:nth-child(2)  { animation-delay: 0.04s; }
        .faq-search-result:nth-child(3)  { animation-delay: 0.08s; }
        .faq-search-result:nth-child(4)  { animation-delay: 0.12s; }
        .faq-search-result:nth-child(5)  { animation-delay: 0.16s; }
        .faq-search-result:nth-child(n+6){ animation-delay: 0.20s; }
        .faq-cat-badge {
          font-family: var(--sans);
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          padding: 14px 18px 0;
          opacity: 0.75;
          display: block;
        }

        /* ── No results ── */
        .faq-empty {
          text-align: center;
          padding: 64px 24px;
          animation: faqFadeSlide 0.3s ease both;
        }
        .faq-empty-title {
          font-family: var(--serif);
          font-size: 1.15rem;
          font-style: italic;
          color: rgba(24,20,15,0.5);
          margin-bottom: 18px;
          line-height: 1.5;
        }
        .faq-empty-btn {
          font-family: var(--sans);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          background: none;
          border: none;
          border-bottom: 1px solid rgba(139,107,61,0.3);
          padding-bottom: 2px;
          cursor: pointer;
          touch-action: manipulation;
          transition: color 0.2s, border-color 0.2s;
        }
        .faq-empty-btn:hover { color: var(--rust); border-color: var(--rust); }

        /* ═══════════════════════════════════════
           §4 · FAQ BODY & CATEGORIES
        ═══════════════════════════════════════ */
        .faq-body {
          background: var(--parchment);
          padding: 80px 64px 128px;
        }
        .faq-inner { max-width: 900px; margin: 0 auto; }
        @media (max-width: 768px) { .faq-body { padding: 60px 24px 100px; } }

        /* Category section */
        .faq-cat {
          margin-bottom: 80px;
          scroll-margin-top: 148px;
        }
        .faq-cat:last-child { margin-bottom: 0; }
        @media (max-width: 768px) {
          .faq-cat { margin-bottom: 60px; scroll-margin-top: 136px; }
        }

        /* Category header */
        .faq-cat-hd {
          display: flex;
          align-items: flex-end;
          gap: 18px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(24,20,15,0.1);
          margin-bottom: 0;
        }
        .faq-cat-roman {
          font-family: var(--serif);
          font-size: clamp(3rem, 6.5vw, 5rem);
          font-weight: 300;
          color: rgba(138,90,56,0.22);
          line-height: 1;
          flex-shrink: 0;
        }
        .faq-cat-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-bottom: 5px;
          flex: 1;
        }
        .faq-cat-row1 {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .faq-cat-eyebrow {
          font-family: var(--sans);
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold);
          line-height: 1;
        }
        .faq-cat-count {
          font-family: var(--sans);
          font-size: 8.5px;
          letter-spacing: 0.1em;
          color: rgba(138,90,56,0.55);
          background: rgba(138,90,56,0.08);
          padding: 2px 8px;
          border-radius: 20px;
          line-height: 1.6;
        }
        .faq-cat-sub {
          font-family: var(--serif);
          font-size: 0.8rem;
          font-style: italic;
          color: rgba(24,20,15,0.45);
          line-height: 1;
        }

        /* ── Accordion item ── */
        .faq-item {
          border-bottom: 1px solid rgba(24,20,15,0.07);
          background-color: transparent;
          box-shadow: inset 3px 0 0 transparent;
          transition:
            background-color 0.3s ease,
            box-shadow 0.3s ease;
        }
        .faq-item.faq-open {
          background-color: rgba(138,90,56,0.04);
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
          gap: 18px;
          padding: 22px 8px 22px 18px;
          cursor: pointer;
          text-align: left;
          touch-action: manipulation;
          min-height: 56px;
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
          line-height: 1.5;
          transition: color 0.22s ease;
        }
        .faq-item:not(.faq-open) .faq-btn:hover .faq-q {
          color: rgba(138,90,56,0.75);
        }
        .faq-open .faq-q { color: var(--gold); }

        /* Chevron icon — rotates 90° on open */
        .faq-icon {
          color: rgba(24,20,15,0.3);
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 3px;
          transition:
            transform 0.32s cubic-bezier(0.34,1.56,0.64,1),
            color 0.22s ease;
          border-radius: 50%;
        }
        .faq-btn:hover .faq-icon { color: var(--gold); }
        .faq-open .faq-icon {
          transform: rotate(90deg);
          color: var(--gold);
        }

        /* Answer — smooth grid expansion */
        .faq-ans-grid {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.36s cubic-bezier(0.4,0,0.2,1);
        }
        .faq-open .faq-ans-grid,
        .faq-ans-grid--open {
          grid-template-rows: 1fr;
        }
        .faq-ans-clip {
          overflow: hidden;
          min-height: 0;
        }
        .faq-ans-inner {
          font-family: var(--serif);
          font-size: 0.95rem;
          color: var(--ink-soft);
          line-height: 1.92;
          padding: 4px 18px 28px 18px;
          max-width: 680px;
          opacity: 0;
          transform: translateY(-4px);
          transition:
            opacity 0.26s ease 0.1s,
            transform 0.26s ease 0.1s;
        }
        .faq-open .faq-ans-inner,
        .faq-ans-inner--open {
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

        /* ── Temple list ── */
        .faq-temple-list {
          list-style: none;
          margin: 18px 0 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .faq-temple-item {
          display: flex;
          align-items: baseline;
          gap: 10px;
        }
        .faq-temple-name {
          font-family: var(--serif);
          font-size: 0.88rem;
          color: var(--ink);
          white-space: nowrap;
        }
        .faq-temple-rule {
          flex: 1;
          height: 1px;
          background: rgba(24,20,15,0.1);
          margin-bottom: 3px;
          min-width: 14px;
        }
        .faq-temple-detail {
          font-family: var(--sans);
          font-size: 9.5px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold);
          white-space: nowrap;
        }
        @media (max-width: 480px) {
          .faq-temple-item { flex-wrap: wrap; gap: 3px; }
          .faq-temple-rule { display: none; }
          .faq-temple-detail { width: 100%; padding-left: 1px; opacity: 0.7; }
        }

        /* ═══════════════════════════════════════
           §5 · CTA
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

          <span className="faq-hero-stat">
            {totalAnswers} answers &nbsp;·&nbsp; {categories.length} topics
          </span>

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
      <nav className="faq-nav" ref={navRef} aria-label="Jump to FAQ category">
        {categories.map(cat => (
          <button
            key={cat.numeral}
            data-btn={cat.numeral}
            className={`faq-nav-btn${activeCategory === cat.numeral && !trimmed ? ' faq-nav-active' : ''}`}
            onClick={() => scrollToSection(cat.numeral)}
            aria-label={trimmed ? 'Clear search' : `Jump to ${cat.label}`}
          >
            <span className="faq-nav-roman">{cat.numeral}</span>
            <span className="faq-nav-text">{cat.label}</span>
            <span className="faq-nav-count">{cat.items.length}</span>
          </button>
        ))}
      </nav>

      {/* ═══════════════════════════════════════════
          §3 · FAQ BODY
      ═══════════════════════════════════════════ */}
      <section className="faq-body">
        <div className="faq-inner">

          {/* ── Search ── */}
          <div className="faq-search-wrap">
            <div className="faq-search-inner">
              <span className="faq-search-icon">
                <SearchIcon />
              </span>
              <input
                ref={searchRef}
                className="faq-search-input"
                type="search"
                placeholder="Search all questions…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Search FAQ questions"
                aria-controls={statusId}
                autoComplete="off"
                spellCheck={false}
              />
              {search && (
                <button
                  className="faq-search-clear"
                  onClick={() => { setSearch(''); searchRef.current?.focus(); }}
                  aria-label="Clear search"
                >
                  <ClearIcon />
                </button>
              )}
            </div>
            <div
              id={statusId}
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {trimmed && (
                <span className="faq-search-status">
                  {searchResults.length > 0
                    ? <><strong>{searchResults.length}</strong> question{searchResults.length !== 1 ? 's' : ''} found</>
                    : 'No questions found'}
                </span>
              )}
            </div>
          </div>

          {/* ── Search results (flat, all expanded) ── */}
          {trimmed ? (
            searchResults.length === 0 ? (
              <div className="faq-empty" role="region" aria-label="No search results">
                <p className="faq-empty-title">
                  No questions match &ldquo;{search}&rdquo;.
                </p>
                <button
                  className="faq-empty-btn"
                  onClick={() => { setSearch(''); searchRef.current?.focus(); }}
                >
                  Clear search and browse all topics →
                </button>
              </div>
            ) : (
              <div className="faq-search-results" role="list">
                {searchResults.map(({ item, catLabel, key }, idx) => (
                  <div
                    key={key}
                    className="faq-item faq-open faq-search-result"
                    role="listitem"
                    style={{ animationDelay: `${Math.min(idx * 0.04, 0.2)}s` }}
                  >
                    <span className="faq-cat-badge">{catLabel}</span>
                    <div className="faq-btn" style={{ cursor: 'default', pointerEvents: 'none' }}>
                      <span className="faq-q">
                        <Highlight text={item.q} term={trimmed} />
                      </span>
                    </div>
                    <div className="faq-ans-grid faq-ans-grid--open">
                      <div className="faq-ans-clip">
                        <div className="faq-ans-inner faq-ans-inner--open">
                          <AnswerContent item={item} term={trimmed} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            /* ── Normal categorized accordion ── */
            categories.map(cat => (
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
                    <div className="faq-cat-row1">
                      <span className="faq-cat-eyebrow">
                        {cat.numeral} &nbsp;·&nbsp; {cat.label}
                      </span>
                      <span className="faq-cat-count" aria-label={`${cat.items.length} questions`}>
                        {cat.items.length}
                      </span>
                    </div>
                    <span className="faq-cat-sub">{cat.sub}</span>
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
                          <span className="faq-icon">
                            <ChevronIcon />
                          </span>
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
            ))
          )}
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
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:stay@kotkailash.com?subject=FAQ%20Enquiry" className="btn-gold">
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
