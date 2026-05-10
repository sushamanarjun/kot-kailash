import type { Metadata } from 'next';
import Image from 'next/image';
import { buildMetadata } from '@/lib/seo';
import Reserve from '@/components/sections/Reserve';
import RevealWrapper from '@/components/ui/RevealWrapper';
import RoomCarousel from '@/components/ui/RoomCarousel';

export const metadata: Metadata = buildMetadata({
  title: 'Tehni | Kumaoni Dining Experience at Kot Kailash, Almora',
  description:
    'No fixed menu. Tehni cooks what the land offers — Bhatt ke Dubke, Pahari Mutton, Buransh sherbet. Every ingredient sourced from Kunja Gunth village, Almora.',
  path: '/tehni',
  ogImage: '/images/gallery/tehni/tehni-outdoor-breakfast.jpg',
  keywords: [
    'Kumaoni food dining experience Almora',
    'hyperlocal Kumaoni cuisine',
    'Tehni Kot Kailash',
    'Bhatt ke Dubke recipe',
    'Buransh sherbet Uttarakhand',
  ],
});


const provenanceFacts = [
  { number: '0 km', label: 'Distance to source', detail: 'Village of Kunja Gunth' },
  { number: 'Daily', label: 'Kitchen preparation', detail: 'No pre-made, no preserved' },
  { number: 'Seasonal', label: 'Menu philosophy', detail: 'The land decides' },
];

const notes = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    label: 'Halal & Considerate',
    body: 'All non-vegetarian proteins at Kot Kailash are Halal. We do not serve beef or pork. Dietary requirements and personal preferences are always accommodated — please share yours with our team.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    label: 'Vegetarian by Default',
    body: "Tehni's menu is rooted in Kumaoni vegetarian tradition. Every dish begins with the village garden. Non-vegetarian options are available on request and prepared with equal care.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: 'Zero Kilometre',
    body: "Everything Tehni cooks originates in Kunja Gunth, the village immediately below us. No supply chain. No distance between soil and table. Chandan tends the garden. The kitchen follows his lead.",
  },
];

export default function TehniPage() {
  return (
    <>
      <style>{`
        @keyframes tehni-scroll-cue {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50%       { transform: translateY(8px); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .tehni-scroll-cue { animation: none !important; opacity: 0.5 !important; }
        }
        @media (max-width: 680px) {
          .tehni-hero-content  { padding: 0 28px 60px !important; grid-template-columns: 1fr !important; }
          .tehni-hero-tagline  { font-size: clamp(2.8rem, 9vw, 3.6rem) !important; }
          .tehni-stats-strip   { flex-direction: column !important; }
          .tehni-stat-divider  { border-left: none !important; border-top: 1px solid rgba(255,255,255,0.06) !important; }
          .tehni-kitchen-grid  { grid-template-columns: 1fr !important; }
          .tehni-kitchen-image { height: 420px !important; }
          .tehni-kitchen-text  { padding: 56px 28px !important; min-height: auto !important; }
          .tehni-menu-outer    { padding: 32px 24px 40px !important; }
          .tehni-dish-grid     { grid-template-columns: 1fr !important; }
          .tehni-dish-col-divider { border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(139,107,61,0.1) !important; padding-top: 32px !important; }
          .tehni-notes-grid    { grid-template-columns: 1fr !important; }
          .tehni-provenance-grid { grid-template-columns: 1fr !important; }
          .tehni-provenance-text { padding: 60px 28px !important; }
          .tehni-provenance-image { height: 360px !important; }
          .tehni-cta-section   { padding: 64px 28px !important; }
        }
        @media (max-width: 960px) {
          .tehni-kitchen-grid  { grid-template-columns: 1fr !important; }
          .tehni-kitchen-image { height: 480px !important; }
          .tehni-kitchen-text  { min-height: auto !important; }
          .tehni-provenance-grid { grid-template-columns: 1fr !important; }
          .tehni-provenance-image { height: 400px !important; }
        }
      `}</style>

      <h1 className="sr-only">Tehni — Hyperlocal Kumaoni Dining at Kot Kailash, Almora</h1>

      {/* ── §1 Hero ── */}
      <section style={{ minHeight: '100dvh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>

        <div aria-hidden="true" style={{ position: 'absolute', inset: 0 }}>
          <Image src="/images/tehni-dine.webp" alt="Kumaoni kitchen and dining at Kot Kailash, Shaukiyathal" fill priority style={{ objectFit: 'cover' }} sizes="100vw" />
        </div>

        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,5,0.97) 0%, rgba(10,8,5,0.6) 45%, rgba(10,8,5,0.15) 100%)' }} />

        <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--serif)', fontSize: 'clamp(10rem, 26vw, 24rem)', fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.025)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap' }}>
          Tehni
        </div>

        <div className="tehni-hero-content" style={{ position: 'relative', zIndex: 1, padding: '0 64px 88px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-end', gap: '48px' }}>
          <div style={{ maxWidth: '680px' }}>
            <span style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.38em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '20px' }}>
              Tehni · The Table at Kot Kailash
            </span>
            <h2 className="tehni-hero-tagline" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3rem, 5.5vw, 5.2rem)', fontWeight: 300, fontStyle: 'italic', color: 'white', lineHeight: 1.05, marginBottom: '24px' }}>
              No fixed menus.
              <br />
              <em style={{ fontStyle: 'normal', color: 'var(--gold-pale)' }}>Only the rhythm</em>
              <br />
              of the harvest.
            </h2>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.58)', lineHeight: 1.88, maxWidth: '520px' }}>
              Tehni is the Kumaoni word for a branch — a branch of the same living tree that has fed this ridge for centuries. What Chandan picks from the kitchen garden of Kunja Gunth each morning, Tehni cooks by evening.
            </p>
          </div>

          <div className="tehni-scroll-cue" aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', animation: 'tehni-scroll-cue 2.4s ease-in-out infinite', paddingBottom: '4px' }}>
            <div style={{ width: '1px', height: '52px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.32))' }} />
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M1 1l6 6 6-6" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── §2 Provenance stats ── */}
      <section style={{ background: 'var(--ink)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="tehni-stats-strip" style={{ display: 'flex' }}>
          {provenanceFacts.map((fact, i) => (
            <div key={fact.label} className={i > 0 ? 'tehni-stat-divider' : ''} style={{ flex: 1, padding: '52px 48px', borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span aria-hidden="true" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', lineHeight: 1, display: 'block', marginBottom: '8px' }}>
                {fact.number}
              </span>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '4px' }}>
                {fact.label}
              </span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '0.88rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.38)', lineHeight: 1.5 }}>
                {fact.detail}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── §3 Kitchen story ── */}
      <section style={{ background: 'var(--cream)', display: 'grid', gridTemplateColumns: '55% 1fr' }} className="tehni-kitchen-grid">
        <div className="tehni-kitchen-image" style={{ position: 'relative', height: '640px', overflow: 'hidden', background: 'var(--forest-deep)' }}>
          <RoomCarousel 
            images={[
              { src: '/images/tehni-kitchen-interior-kot-kailash.JPG', alt: 'The Tehni — Kumaoni kitchen at Kot Kailash' },
              { src: '/images/gallery/tehni/tehni-afternoon-tea.jpg', alt: 'Tehni afternoon tea' },
              { src: '/images/gallery/tehni/tehni-grind-to-perfection.jpg', alt: 'Tehni grind to perfection' },
              { src: '/images/gallery/tehni/tehni-home-made-bread.jpg', alt: 'Tehni home made bread' },
              { src: '/images/gallery/tehni/tehni-outdoor-breakfast.jpg', alt: 'Tehni outdoor breakfast' },
              { src: '/images/gallery/tehni/tehni-local-produce-2.jpg', alt: 'Tehni local produce' },
            ]} 
            objectFit="cover" 
          />
        </div>

        <RevealWrapper delay={1}>
          <div className="tehni-kitchen-text" style={{ padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '640px' }}>
            <span style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '24px' }}>
              The Kitchen
            </span>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.7rem, 2.5vw, 2.4rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.22, marginBottom: '28px' }}>
              Everything on the plate
              <br />
              is within sight of the window.
            </h3>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'var(--ink-soft)', lineHeight: 1.9 }}>
              <p>
                There is no fixed menu. There is the village, the season, and whatever the land offers today. What appears below is a portrait of Tehni&rsquo;s table across the year — not a promise, but a reflection of what this kitchen knows how to do.
              </p>
              <p style={{ marginTop: '16px' }}>
                The mandua for the rotis comes from the terraced fields below. The bhatt is a Kumaoni staple most guests have never encountered before arriving here. When the rhododendron blooms in March, it reaches the glass.
              </p>
              <p style={{ marginTop: '16px' }}>
                There is no menu. There is a conversation with your host, and then a meal.
              </p>
            </div>
            {/* <div style={{ marginTop: '40px', paddingTop: '28px', borderTop: '1px solid rgba(26,22,18,0.09)' }}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', fontStyle: 'italic', color: 'rgba(61,53,48,0.52)', lineHeight: 1.7 }}>
                Served at the long table — family style, at the hour the light is right.
              </p>
            </div> */}
          </div>
        </RevealWrapper>
      </section>

      {/* ── §4 Guest Favourites ── */}
      <section style={{ background: 'var(--parchment)', padding: '100px 64px', textAlign: 'center' }}>
        <RevealWrapper>
          <span style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.38em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '40px' }}>
            Guest Favourites
          </span>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px 28px'
          }}>
            {['Ras Bhaat', 'Pahari Mutton', 'Aloo ke Gutke', 'Bhaang ki Chutni', 'Pahari Murgh', 'Pisi Loon'].map((dish, i, arr) => (
              <div key={dish} style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
                <span style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
                  fontStyle: 'italic',
                  color: 'var(--ink)',
                  lineHeight: 1.2
                }}>
                  {dish}
                </span>
                {i < arr.length - 1 && (
                  <span aria-hidden="true" style={{ color: 'var(--gold)', opacity: 0.5, fontSize: '1.2rem' }}>·</span>
                )}
              </div>
            ))}
          </div>
        </RevealWrapper>
      </section>

      {/* ── §5 Pull quote ── */}
      <section style={{ background: 'var(--forest-deep)', padding: '80px 64px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <span aria-hidden="true" style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--serif)', fontSize: 'clamp(8rem, 18vw, 16rem)', color: 'rgba(255,255,255,0.025)', lineHeight: 1, fontWeight: 300, userSelect: 'none', pointerEvents: 'none' }}>
          &ldquo;
        </span>
        <RevealWrapper>
          <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem, 2.6vw, 2.2rem)', fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.88)', lineHeight: 1.58, marginBottom: '32px' }}>
              The distance between the field and the plate here is measured in minutes, not days. That is not a claim we make — it is a condition of the altitude.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
              <div style={{ width: '32px', height: '1px', background: 'rgba(197,153,90,0.4)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Pushkar Singh Negi, Co Founder
              </span>
              <div style={{ width: '32px', height: '1px', background: 'rgba(197,153,90,0.4)' }} />
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* ── §6 Sundowners & Bonfires ── */}
      <section style={{ background: 'var(--ink)', padding: '80px 64px' }}>
        <RevealWrapper>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '20px' }}>
              Sundowners, Bonfires & Evening Snacks
            </span>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 300, fontStyle: 'italic', color: 'white', lineHeight: 1.2, marginBottom: '24px' }}>
              As the light leaves the Nanda Devi range.
            </h3>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontStyle: 'italic' }}>
              As the light leaves the Nanda Devi range and the valley deepens to indigo, Tehni brings the evening to the courtyard. Vegetarian and non-vegetarian snacks accompany your sundowner — pakoras, local seasonal preparations, small plates that complement the hour rather than compete with it. For evenings around the bonfire at Kumaon Vann or the courtyard fire, tell us what the evening calls for and we will arrange it.
            </p>
          </div>
        </RevealWrapper>
      </section>

      {/* ── §7 Three notes grid ── */}
      <section style={{ background: 'var(--parchment)', padding: '80px 64px' }}>
        <div className="tehni-notes-grid" style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(139,107,61,0.12)' }}>
          {notes.map((note) => (
            <RevealWrapper key={note.label}>
              <div style={{ background: 'var(--parchment)', padding: '44px 40px' }}>
                <div style={{ color: 'var(--gold)', marginBottom: '16px' }}>
                  {note.icon}
                </div>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '12px' }}>
                  {note.label}
                </span>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '0.92rem', fontStyle: 'italic', color: 'var(--ink-soft)', lineHeight: 1.85, margin: 0 }}>
                  {note.body}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* ── §8 Provenance ── */}
      <section style={{ background: 'var(--forest)', display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="tehni-provenance-grid">
        <RevealWrapper>
          <div className="tehni-provenance-text" style={{ padding: '100px 72px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '20px' }}>
              Provenance
            </span>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 3.2vw, 3rem)', fontWeight: 300, color: 'white', lineHeight: 1.18, marginBottom: '24px' }}>
              Sourced from
              <br />
              <em style={{ fontStyle: 'normal', color: 'var(--gold-pale)' }}>one village.</em>
            </h3>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.62)', lineHeight: 1.9, marginBottom: '44px' }}>
              Kunja Gunth — the village below the ridge — is the primary source of Tehni&rsquo;s ingredients. When something cannot be grown or sourced locally, we either don&rsquo;t serve it, or we explain why it had to come from further away.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              {[
                { label: 'Primary source', value: 'Kunja Gunth village' },
                { label: 'Secondary source', value: 'Almora district farms' },
                { label: 'Tertiary source', value: 'Explained when used' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', gap: '16px' }}>
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
                    {item.label}
                  </span>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', textAlign: 'right' }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={1}>
          <div className="tehni-provenance-image" style={{ position: 'relative', height: '100%', minHeight: '480px', overflow: 'hidden', background: 'var(--forest-deep)' }}>
            <Image src="/images/tehni-village-kumaon-almora.JPG" fill loading="lazy" style={{ objectFit: 'cover' }} alt="Kunja Gunth village below Kot Kailash ridge" sizes="(max-width: 960px) 100vw, 50vw" />
          </div>
        </RevealWrapper>
      </section>

      {/* ── §9 CTA ── */}
      {/* <section className="tehni-cta-section" style={{ background: 'var(--parchment)', padding: '80px 64px', textAlign: 'center' }}>
        <RevealWrapper>
          <span style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.38em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '20px' }}>
            No menu to order from
          </span>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '20px' }}>
            Tehni is included in every stay.
          </h3>
          <p style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--ink-soft)', lineHeight: 1.85, maxWidth: '400px', margin: '0 auto 32px' }}>
            The meal begins with a conversation.
          </p>
          <a href="https://wa.me/919650264905" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ display: 'inline-block' }}>
            Ask about your visit
          </a>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.1em', color: 'rgba(61,53,48,0.45)', marginTop: '20px' }}>
            Or write to{' '}
            <a href="mailto:info@kotkailash.com" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              info@kotkailash.com
            </a>
          </p>
        </RevealWrapper>
      </section> */}

      <Reserve />
    </>
  );
}
