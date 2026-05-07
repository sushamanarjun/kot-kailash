import type { Metadata } from 'next';
import Image from 'next/image';
import { buildMetadata } from '@/lib/seo';
import RevealWrapper from '@/components/ui/RevealWrapper';

export const metadata: Metadata = buildMetadata({
  title: 'Kumaon Journeys — Retreat & Cultural Programme | Kot Kailash Kumaon',
  description:
    'Kumaon Journeys is the retreat and cultural programme of Kot Kailash Kumaon. Each edition is built in collaboration with practitioners of genuine standing. Full property. No theatre.',
  path: '/journeys',
});

const programmeDetails = [
  { number: '4', label: 'Nights', detail: 'Full immersion' },
  { number: '5', label: 'Days', detail: 'Ridge to valley' },
  { number: '8', label: 'Keys · Full Property', detail: 'Exclusive use' },
  { number: '7,800', label: 'Feet', detail: 'Shaukiyathal ridge' },
];

export default function JourneysPage() {
  return (
    <>
      <style>{`
        @keyframes jrn-scroll-cue {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50%       { transform: translateY(8px); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .jrn-scroll-cue { animation: none !important; opacity: 0.5 !important; }
        }
        .jrn-cta-link { transition: opacity 0.3s ease; }
        .jrn-cta-link:hover { opacity: 0.65; }
        .jrn-cta-link svg { transition: transform 0.3s ease; }
        .jrn-cta-link:hover svg { transform: translateX(5px); }
        @media (max-width: 960px) {
          .jrn-hero-content    { padding: 0 28px 60px !important; grid-template-columns: 1fr !important; }
          .jrn-hero-tagline    { font-size: clamp(2rem, 7.5vw, 2.8rem) !important; }
          .jrn-stats-panel     { display: none !important; }
          .jrn-programme-grid  { grid-template-columns: 1fr !important; }
          .jrn-programme-image { min-height: 420px !important; order: -1 !important; }
          .jrn-programme-text  { padding: 64px 28px !important; }
          .jrn-trishul-grid    { grid-template-columns: 1fr !important; }
          .jrn-trishul-image   { min-height: 420px !important; order: -1 !important; }
          .jrn-trishul-text    { padding: 64px 28px !important; }
        }
      `}</style>

      <h1 className="sr-only">Kumaon Journeys — Retreat &amp; Cultural Programme at Kot Kailash Kumaon</h1>

      {/* ── §1 Hero ── */}
      <section style={{ minHeight: '100dvh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>

        <div aria-hidden="true" style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/images/journey-hero.jpg"
            alt="The Shaukiyathal ridge — Kot Kailash Kumaon, 7,800 ft"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
        </div>

        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,5,0.97) 0%, rgba(10,8,5,0.6) 45%, rgba(10,8,5,0.15) 100%)' }} />

        <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--serif)', fontSize: 'clamp(10rem, 26vw, 24rem)', fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.025)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap' }}>
          Journeys
        </div>

        <div className="jrn-hero-content" style={{ position: 'relative', zIndex: 1, padding: '0 64px 88px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-end', gap: '64px' }}>
          <div style={{ maxWidth: '640px' }}>
            <span style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(197,153,90,0.95)', display: 'block', marginBottom: '20px', textShadow: '0 1px 10px rgba(0,0,0,0.7)' }}>
              Kumaon Journeys &nbsp;·&nbsp; Kot Kailash Kumaon
            </span>

            <h2 className="jrn-hero-tagline" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.2rem, 4.2vw, 4rem)', fontWeight: 300, fontStyle: 'italic', color: 'white', lineHeight: 1.12, marginBottom: '24px' }}>
              Some things on this ridge
              <br />
              <em style={{ fontStyle: 'normal', color: 'rgba(210,175,120,0.92)' }}>cannot be booked.</em>
              <br />
              They can only
              <br />
              <em style={{ fontStyle: 'normal', color: 'rgba(210,175,120,0.92)' }}>be received.</em>
            </h2>

            <p style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.58)', lineHeight: 1.88, maxWidth: '520px', marginBottom: '36px' }}>
              Kumaon Journeys is the retreat and cultural programme of Kot Kailash Kumaon.
              Each edition is named for the ridge at the season it runs. Built in
              collaboration with practitioners of genuine standing. No theatre.
            </p>

            <div className="jrn-ctas" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a
                href="mailto:info@kotkailash.com?subject=Kumaon%20Journeys%20—%20Register%20Interest%20(Trishul)"
                className="jrn-cta-link"
                style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(197,153,90,0.95)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                Register Interest — Trishul
                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 5h16M12 1l6 4-6 4" />
                </svg>
              </a>
              <span aria-hidden="true" style={{ width: '1px', height: '13px', background: 'rgba(255,255,255,0.18)', flexShrink: 0 }} />
              <a
                href="mailto:info@kotkailash.com?subject=Kumaon%20Journeys%20—%20Bring%20My%20Vision"
                className="jrn-cta-link"
                style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                Bring Your Vision Here
                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 5h16M12 1l6 4-6 4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats panel — integrated into hero right column */}
          <div className="jrn-stats-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingBottom: '4px' }}>
            {programmeDetails.map((item, i) => (
              <div
                key={item.label}
                style={{
                  padding: '16px 0',
                  borderBottom: i < programmeDetails.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  textAlign: 'right',
                  width: '100%',
                }}
              >
                <span aria-hidden="true" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 2vw, 2.2rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.92)', lineHeight: 1, display: 'block' }}>
                  {item.number}
                </span>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(197,153,90,0.85)', display: 'block', margin: '5px 0 3px' }}>
                  {item.label}
                </span>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '0.75rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.32)', lineHeight: 1.4 }}>
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── §2 The Programme ── */}
      <section style={{ background: 'var(--parchment)', display: 'grid', gridTemplateColumns: '1fr 40%' }} className="jrn-programme-grid">

        <RevealWrapper>
          <div className="jrn-programme-text" style={{ padding: '100px 72px 100px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '32px' }}>
              I &nbsp;·&nbsp; The Programme
            </span>

            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 2.6vw, 2.6rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.22, marginBottom: '36px' }}>
              Not a wellness offering.
              <br />Not a scheduled activity.
              <br />A platform.
            </h2>

            <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'var(--ink-soft)', lineHeight: 1.92, fontStyle: 'italic' }}>
              <p>
                Each edition takes its name from the ridge at the season it runs.
                The archive of editions becomes a record of this ridge across its seasons —
                a body of work, not a catalogue of retreats.
              </p>
              <p style={{ marginTop: '20px' }}>
                Kumaon Journeys began with a question: what happens when world-class
                practitioners of ancient and endangered disciplines are brought to one of
                the most acoustically and spiritually resonant landscapes in the Himalayas,
                and a small number of people are given five days to be present for it?
              </p>
              <p style={{ marginTop: '20px' }}>
                The answer was Burānsh — Edition One, April 2026. The guests came from
                Mumbai, Delhi, and Kolkata. They arrived uncertain of what to expect. The
                musicians performed live. The forest held the sound. They left changed.
                The departure, by every account, was emotional.
              </p>
              <p style={{ marginTop: '20px' }}>
                That is the standard every edition is held to.
              </p>
            </div>

            <div style={{ marginTop: '44px', paddingTop: '28px', borderTop: '1px solid rgba(26,22,18,0.09)' }}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.5, marginBottom: '10px' }}>
                No theatre.
              </p>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(139,107,61,0.55)' }}>
                Kot Kailash Kumaon
              </span>
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={1}>
          <div className="jrn-programme-image" style={{ position: 'relative', minHeight: '680px', overflow: 'hidden', background: 'var(--forest-deep)' }}>
            <Image
              src="/images/experiences/buransh-april-2026.jpg"
              alt="Burānsh — Edition One, April 2026, Kumaon Journeys"
              fill
              loading="lazy"
              style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
              sizes="(max-width: 960px) 100vw, 40vw"
            />
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,5,0.72) 0%, rgba(10,8,5,0.18) 45%, transparent 100%)' }} />
            <span style={{ position: 'absolute', bottom: '28px', left: '28px', fontFamily: 'var(--serif)', fontSize: '0.82rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', letterSpacing: '0.04em' }}>
              Bur&#257;nsh, April 2026
            </span>
          </div>
        </RevealWrapper>

      </section>

      {/* ── §3a Edition Two — Trishul intro + image ── */}
      <section style={{ background: 'var(--ink)', display: 'grid', gridTemplateColumns: '1fr 40%' }} className="jrn-trishul-grid">

        {/* Left: intro content only */}
        <RevealWrapper>
          <div className="jrn-trishul-text" style={{ padding: '100px 72px 100px 64px' }}>

            {/* Eyebrow */}
            <span style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(197,153,90,0.9)', display: 'block', marginBottom: '20px' }}>
              II &nbsp;·&nbsp; Kumaon Journeys &nbsp;·&nbsp; Edition Two &nbsp;·&nbsp; Current
            </span>

            {/* Edition name */}
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.8rem, 5vw, 5rem)', fontWeight: 300, fontStyle: 'italic', color: 'white', lineHeight: 1.05, marginBottom: '16px' }}>
              Trishul
            </h2>

            {/* Phonetic / meaning */}
            <p style={{ fontFamily: 'var(--serif)', fontSize: '0.9rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.38)', lineHeight: 1.6, marginBottom: '12px' }}>
              tri-shool &nbsp;·&nbsp; Shiva&rsquo;s trident &nbsp;·&nbsp; Named for the peak on the October horizon
            </p>

            {/* Date details */}
            <p style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(197,153,90,0.65)', marginBottom: '44px' }}>
              October 2026 &nbsp;·&nbsp; 4 nights, 5 days &nbsp;·&nbsp; Full property &nbsp;·&nbsp; Dates to be confirmed
            </p>

            {/* Poetry */}
            <div style={{ marginBottom: '44px', paddingLeft: '20px', borderLeft: '2px solid rgba(197,153,90,0.3)' }}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.82)', lineHeight: 1.65 }}>
                The peak appears
                <br />when the monsoon clears.
              </p>
            </div>

            {/* Intro paragraphs */}
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.92, fontStyle: 'italic' }}>
              <p>
                The rhododendron is gone. The harvest is in. The monsoon has cleared. In October,
                the Trishul peak — one of the summits of the Nanda Devi massif, visible from the
                bed of Kumaon Vann on a clear morning — comes back into full sharpness on the horizon.
              </p>
              <p style={{ marginTop: '20px' }}>
                The second edition of Kumaon Journeys returns to the discipline that began on this
                ridge in April: Nada Yoga and Dhrupad, the yoga of sound and the oldest surviving
                form of Hindustani classical music. Live performance. Five days. The full property.
                The October silence, which is different from the April silence in ways that must be
                experienced to be understood.
              </p>
            </div>

          </div>
        </RevealWrapper>

        {/* Right: fixed-height image */}
        <RevealWrapper delay={1}>
          <div className="jrn-trishul-image" style={{ position: 'relative', minHeight: '680px', overflow: 'hidden', background: 'var(--forest-deep)' }}>
            <Image
              src="/images/experiences/trishul.jpg"
              alt="Trishul peak on the October horizon from Shaukiyathal ridge"
              fill
              loading="lazy"
              style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
              sizes="(max-width: 960px) 100vw, 40vw"
            />
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,5,0.72) 0%, rgba(10,8,5,0.18) 45%, transparent 100%)' }} />
            <span style={{ position: 'absolute', bottom: '28px', left: '28px', fontFamily: 'var(--serif)', fontSize: '0.82rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', letterSpacing: '0.04em' }}>
              Trishul
            </span>
          </div>
        </RevealWrapper>

      </section>

      {/* ── §3b Trishul — sub-sections ── */}
      <section style={{ background: 'var(--ink)', padding: '0 64px 100px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          {/* The Practice */}
          <RevealWrapper>
            <div style={{ paddingTop: '80px', paddingBottom: '0' }}>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(197,153,90,0.8)', display: 'block', marginBottom: '16px' }}>
                The Practice
              </span>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.3rem, 2vw, 1.8rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.88)', lineHeight: 1.25, marginBottom: '20px' }}>
                Nada Yoga and Dhrupad.
                <br />Two expressions of one truth.
              </h3>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.9, fontStyle: 'italic' }}>
                <p>
                  Nada Yoga is the understanding that vibration is not merely heard but felt — that
                  the body is an instrument, and sustained attentiveness to sound is itself a form of
                  practice. Dhrupad is the oldest surviving form of Hindustani classical music: a
                  tradition of such rigorous discipline and philosophical depth that it is, in much of
                  the world, disappearing.
                </p>
                <p style={{ marginTop: '16px' }}>
                  Together they form the core of every Kumaon Journeys edition in this series — a
                  serious encounter with a living tradition, in a landscape that has held sacred sound
                  for two and a half thousand years.
                </p>
              </div>
            </div>
          </RevealWrapper>

          {/* The Practitioners */}
          <RevealWrapper delay={1}>
            <div style={{ marginTop: '56px', paddingTop: '48px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(197,153,90,0.8)', display: 'block', marginBottom: '16px' }}>
                The Practitioners
              </span>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.3rem, 2vw, 1.8rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.88)', lineHeight: 1.25, marginBottom: '20px' }}>
                People who arrived here
                <br />first as guests.
              </h3>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.9, fontStyle: 'italic' }}>
                <p>
                  Rashi Pant and Pulkit Sharma — the principals of Cchitvan — hold PhDs in Dhrupad
                  and have devoted their practice to ensuring this tradition survives. Krishna, Rashi&rsquo;s
                  husband, brings a rigorous yoga practice that deepens the sound work. Their musicians
                  perform live. This is not recorded sound in a wellness space. It is Dhrupad, performed
                  at 7,800 feet, in the silence that only this altitude produces.
                </p>
                <p style={{ marginTop: '16px' }}>
                  On the property, Pushkar Singh Negi and Balam — both yoga practitioners — hold the
                  experience from the inside. Pushkar leads dawn bird watching walks on the ridge between
                  sessions. The practice does not end when the circle closes.
                </p>
              </div>
            </div>
          </RevealWrapper>

          {/* The Invitation */}
          <RevealWrapper delay={2}>
            <div style={{ marginTop: '56px', paddingTop: '48px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(197,153,90,0.8)', display: 'block', marginBottom: '16px' }}>
                The Invitation
              </span>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.92, fontStyle: 'italic', marginBottom: '32px' }}>
                Trishul is being planned for October 2026. Exact dates will be confirmed shortly.
                We conduct a brief conversation before extending an invitation — to ensure the group
                is right for the experience, and the experience right for the group.
              </p>
              <a
                href="mailto:info@kotkailash.com?subject=Kumaon%20Journeys%20—%20Register%20Interest%20(Trishul)"
                className="jrn-cta-link"
                style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(197,153,90,0.95)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                Register Your Interest
                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 5h16M12 1l6 4-6 4" />
                </svg>
              </a>
            </div>
          </RevealWrapper>

        </div>
      </section>

      {/* ── §4 The Archive ── */}
      <section style={{ background: 'var(--parchment)', padding: '100px 64px', textAlign: 'center' }}>
        <style>{`
          @media (max-width: 700px) { .archive-img-grid { grid-template-columns: 1fr !important; } }
        `}</style>

        {/* Section header */}
        <RevealWrapper>
          <div style={{ maxWidth: '920px', margin: '0 auto 64px' }}>
            <span style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '24px' }}>
              III &nbsp;·&nbsp; The Archive
            </span>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 3.2vw, 3rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.15, marginBottom: '24px' }}>
              Every edition. Every season.
              <br />
              <em style={{ fontStyle: 'normal', color: 'var(--ink-soft)' }}>The ridge, recorded.</em>
            </h2>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--ink-soft)', lineHeight: 1.9 }}>
              Kumaon Journeys is a living archive. Each edition adds to the record of what has been
              brought to this ridge, and by whom, and in what season. The archive does not diminish.
              It deepens.
            </p>
          </div>
        </RevealWrapper>

        {/* ── Edition 01: Burānsh ── */}
        <RevealWrapper>
          <div style={{ marginBottom: '72px' }}>

            {/* Edition header — stacked, centered */}
            <div style={{ marginBottom: '36px' }}>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '3rem', fontWeight: 300, color: 'rgba(139,107,61,0.1)', display: 'block', lineHeight: 1, marginBottom: '12px' }} aria-hidden="true">01</span>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 2.6vw, 2.4rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.1, marginBottom: '12px' }}>
                Bur&#257;nsh
              </h3>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>
                Edition One &nbsp;·&nbsp; April 2–6, 2026
              </p>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
                In collaboration with Cchitvan &nbsp;·&nbsp; Nada Yoga &amp; Dhrupad
              </p>
            </div>

            {/* Hairline */}
            <div style={{ width: '40px', height: '1px', background: 'rgba(139,107,61,0.25)', margin: '0 auto 36px' }} />

            {/* Description — centered wide column */}
            <div style={{ maxWidth: '920px', margin: '0 auto 40px', fontFamily: 'var(--serif)', fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--ink-soft)', lineHeight: 1.95, textAlign: 'left', columns: '2', columnGap: '56px' }}>
              <p>
                Named for the rhododendron — bur&#257;nsh — that blooms across the Shaukiyathal ridge
                each April. The same flower that lives in the O of the Kot Kailash logo. The same forest
                that surrounded the property for five days in Edition One.
              </p>
              <p style={{ marginTop: '16px' }}>
                Rashi Pant and Pulkit Sharma of Cchitvan — PhD Dhrupad scholars — led the Nada Yoga
                and Dhrupad sessions. Krishna guided the yoga practice. Their musicians performed live
                each evening. Pushkar and Balam held the mornings.
              </p>
              <p style={{ marginTop: '16px' }}>
                The guests arrived uncertain of what to expect. They left changed. The departure was
                emotional for everyone — guests, practitioners, and the team who had held the five days
                together. Bur&#257;nsh ran during the bloom. Edition One is complete. What it began is not.
              </p>
            </div>

            {/* 3-image grid — constrained, centered */}
            <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3px' }} className="archive-img-grid">
              {[
                '/images/experiences/ONE.jpg',
                '/images/experiences/TWO.jpg',
                '/images/experiences/THREE.JPG',
              ].map((src, i) => (
                <div key={i} style={{ position: 'relative', aspectRatio: '2/3', overflow: 'hidden', background: 'var(--fog)' }}>
                  <Image
                    src={src}
                    alt={`Burānsh Edition One — April 2026, image ${i + 1}`}
                    fill
                    loading="lazy"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                  <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,5,0.6) 0%, transparent 50%)' }} />
                  <div style={{ position: 'absolute', bottom: '16px', left: '16px', textAlign: 'left' }}>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: '0.82rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.82)', display: 'block', lineHeight: 1.3 }}>
                      Bur&#257;nsh
                    </span>
                    <span style={{ fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                      April 2026
                    </span>
                  </div>
                </div>
              ))}
            </div>
            </div>{/* end image wrapper */}

          </div>
        </RevealWrapper>

        {/* ── Divider ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '72px 0' }}>
          <div style={{ height: '1px', flex: 1, background: 'rgba(26,22,18,0.08)' }} />
          <span style={{ fontFamily: 'var(--serif)', fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--ink-soft)', whiteSpace: 'nowrap', letterSpacing: '0.04em' }}>Planned Future Edition</span>
          <div style={{ height: '1px', flex: 1, background: 'rgba(26,22,18,0.08)' }} />
        </div>

        {/* ── Virām ── */}
        <RevealWrapper>
          <div style={{ maxWidth: '920px', margin: '0 auto' }}>

            {/* Edition header — stacked, centered */}
            <div style={{ marginBottom: '36px' }}>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 2.6vw, 2.4rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.1, marginBottom: '12px' }}>
                Vir&#257;m
              </h3>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>
                A future edition &nbsp;·&nbsp; In collaboration with Aikyam Retreats
              </p>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
                Transformative Coaching &amp; Wellness &nbsp;·&nbsp; Dates to be announced
              </p>
            </div>

            {/* Hairline */}
            <div style={{ width: '40px', height: '1px', background: 'rgba(139,107,61,0.25)', margin: '0 auto 36px' }} />

            <div style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--ink-soft)', lineHeight: 1.95, textAlign: 'left', columns: '2', columnGap: '56px' }}>
              <p>
                Vir&#257;m is the Sanskrit word for pause — not as escape, but as a conscious return to
                breath, to truth, to centre. A retreat conceived in collaboration with Guramrita Oberoi
                of Aikyam Retreats: an ICF-certified coach and transformational facilitator with over
                twenty years of practice, whose work with C-suite and corporate leadership has taken her
                across India and internationally.
              </p>
              <p style={{ marginTop: '20px' }}>
                Guramrita came to Kot Kailash as a guest — long before any retreat was discussed. She
                stayed on the ridge. Felt what it does. The conversation about Vir&#257;m came only after.
                That sequence matters. It is the only sequence we trust.
              </p>
              <p style={{ marginTop: '20px' }}>
                Vir&#257;m will return to the ridge. The season and the dates will be announced when they
                are ready.
              </p>
            </div>

          </div>
        </RevealWrapper>

      </section>

      {/* ── Manifesto Banner ── */}
      <section style={{ background: 'var(--forest-deep)', padding: '120px 64px', textAlign: 'center' }}>
        <RevealWrapper>
          <div style={{ maxWidth: '660px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.82)', lineHeight: 2, marginBottom: '32px' }}>
              Every collaboration in Kumaon Journeys has begun the same way.
            </p>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.58)', lineHeight: 1.95, marginBottom: '32px' }}>
              Rashi and Krishna came on their honeymoon. Pushkar heard her sing. Months later,
              Bur&#257;nsh existed. Guramrita came as a guest. She stayed. She felt what the ridge
              does. Vir&#257;m followed.
            </p>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontStyle: 'italic', color: 'rgba(197,153,90,0.88)', lineHeight: 1.95 }}>
              This is not a policy. It is simply what has happened, every time. The ridge is the
              first conversation. Everything else comes after.
            </p>
          </div>
        </RevealWrapper>
      </section>

      {/* ── §IV For Practitioners & Curators ── */}
      <section style={{ background: 'var(--parchment)', padding: '100px 64px' }}>
        <RevealWrapper>
          <div style={{ maxWidth: '920px', margin: '0 auto' }}>

            {/* Header — centered */}
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '24px' }}>
                IV &nbsp;·&nbsp; For Practitioners &amp; Curators
              </span>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 3.2vw, 3rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.15, marginBottom: '24px' }}>
                This ridge is available
                <br />
                <em style={{ fontStyle: 'normal', color: 'var(--ink-soft)' }}>to the right practice.</em>
              </h2>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--ink-soft)', lineHeight: 1.9, maxWidth: '680px', margin: '0 auto' }}>
                We are not looking for practitioners. We are recognising them when they arrive.
              </p>
            </div>

            {/* Body */}
            <div style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--ink-soft)', lineHeight: 1.9 }}>
              <p>
                If you are a practitioner, curator, or organisation whose work is rooted in genuine
                discipline — whether in sound, movement, contemplative tradition, transformative coaching,
                ecological knowledge, or classical art — and you believe this ridge is the right place
                for it, we would like to hear from you.
              </p>
              <p style={{ marginTop: '20px' }}>
                We offer the property, the kitchen, the landscape, and the hospitality. We ask for your
                practice, your integrity, and your willingness to let the ridge do some of the work.
              </p>
            </div>

            {/* Criteria list */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '36px 0 40px' }}>
              {[
                'A practice that is rooted, not assembled.',
                'A collaborator who has arrived on this ridge before they approached us — as a guest, a visitor, or someone who simply knew what this place was.',
                'Work that would be at home in the same sentence as Jageshwar Dham.',
                'The honesty to say when something is not ready.',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', fontFamily: 'var(--serif)', fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.75, padding: '12px 0', borderBottom: '1px solid rgba(26,22,18,0.07)' }}>
                  <span style={{ color: 'var(--gold)', flexShrink: 0, fontStyle: 'normal', fontFamily: 'var(--sans)', fontSize: '0.75rem', marginTop: '3px' }}>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Closing statement */}
            <div style={{ borderLeft: '2px solid rgba(139,107,61,0.28)', paddingLeft: '20px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--ink-soft)', lineHeight: 1.85, marginBottom: '10px' }}>
                We do not offer this as a platform.
                <br />We offer it as a partnership.
              </p>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(139,107,61,0.5)' }}>
                Kot Kailash Kumaon
              </span>
            </div>

            <p style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--ink-soft)', lineHeight: 1.9, marginBottom: '40px' }}>
              The conversation begins with a discovery call. There is no form, no submission, no pitch
              deck required. A brief introduction and a sense of what you do and why you believe it
              belongs here is enough.
            </p>

            <a
              href="mailto:info@kotkailash.com?subject=Kumaon%20Journeys%20—%20Practitioner%20Inquiry"
              className="btn-gold"
            >
              Begin the Conversation
            </a>

          </div>
        </RevealWrapper>
      </section>

      {/* ── §V The Co-Founders ── */}
      <section style={{ background: 'var(--ink)', padding: '100px 64px' }}>

        {/* Header */}
        <RevealWrapper>
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 80px' }}>
            <span style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(197,153,90,0.9)', display: 'block', marginBottom: '24px' }}>
              V &nbsp;·&nbsp; The Co-Founders
            </span>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 3.2vw, 3rem)', fontWeight: 300, fontStyle: 'italic', color: 'white', lineHeight: 1.15, marginBottom: '24px' }}>
              Built by two people
              <br />
              <em style={{ fontStyle: 'normal', color: 'rgba(210,175,120,0.9)' }}>who chose the mountain.</em>
            </h2>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9 }}>
              Kot Kailash Kumaon was co-founded by Pushkar Singh Negi and Sayed Aziz — two hospitality
              professionals who decided, independently and then together, to build something of their
              own. Something with no theatre.
            </p>
          </div>
        </RevealWrapper>

        {/* Co-founders grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px' }} className="founders-grid">
          <style>{`@media (max-width: 900px) { .founders-grid { grid-template-columns: 1fr !important; } }`}</style>

          {/* Pushkar */}
          <RevealWrapper>
            <div style={{ padding: '52px 48px', background: 'rgba(255,255,255,0.02)', borderTop: '2px solid rgba(197,153,90,0.28)' }}>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(197,153,90,0.8)', marginBottom: '20px' }}>
                Pushkar Singh Negi &nbsp;·&nbsp; Co-Founder
              </p>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.3rem, 2vw, 1.8rem)', fontWeight: 300, fontStyle: 'italic', color: 'white', lineHeight: 1.25, marginBottom: '10px' }}>
                The ridge is home.
                <br />Not a setting.
              </h3>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '36px' }}>
                On the property, every day.
              </p>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.58)', lineHeight: 1.9 }}>
                <p>
                  Pushkar was born here. He grew up in the five-house village of Kailash Kot, surrounded
                  by the oak forests that still stand above the property. He knows every family in Kunja
                  Gunth, every trail through the forest, every window that catches the first light on
                  Nanda Devi.
                </p>
                <p style={{ marginTop: '16px' }}>
                  When Rashi sang on the ridge during her honeymoon and a conversation began, it was
                  Pushkar who heard what it could become. Kumaon Journeys did not come from a strategy.
                  It came from someone paying attention to what the place was already asking for.
                </p>
                <p style={{ marginTop: '16px' }}>
                  When guests write after they leave — not to praise the room, but to say they miss the
                  conversation — it is him they are missing.
                </p>
              </div>
            </div>
          </RevealWrapper>

          {/* Sayed */}
          <RevealWrapper delay={1}>
            <div style={{ padding: '52px 48px', background: 'rgba(255,255,255,0.02)', borderTop: '2px solid rgba(197,153,90,0.28)' }}>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(197,153,90,0.8)', marginBottom: '20px' }}>
                Sayed Aziz &nbsp;·&nbsp; Co-Founder
              </p>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.3rem, 2vw, 1.8rem)', fontWeight: 300, fontStyle: 'italic', color: 'white', lineHeight: 1.25, marginBottom: '10px' }}>
                The world found it.
                <br />Because he showed it the way.
              </h3>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '36px' }}>
                Strategic direction, from London.
              </p>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.58)', lineHeight: 1.9 }}>
                <p>
                  Sayed has spent his career at the highest levels of Indian and international luxury
                  hospitality. He knows, from the inside, what it takes for a place to earn the trust
                  of guests who have seen everything and settled for nothing.
                </p>
                <p style={{ marginTop: '16px' }}>
                  Guramrita — who would later conceive Vir&#257;m with Kot Kailash — came to the property
                  as a guest first, long before any retreat was discussed. She and Sayed have known each
                  other since school. The conversation about bringing her work to this ridge only became
                  possible because she had already felt what the ridge does. That is the only kind of
                  conversation Sayed trusts.
                </p>
                <p style={{ marginTop: '16px' }}>
                  He oversees Kot Kailash&rsquo;s strategic direction, international positioning, and every
                  decision about what the brand is — and what it refuses to be.
                </p>
              </div>
            </div>
          </RevealWrapper>

        </div>
      </section>

      {/* ── Co-Founders closing statement ── */}
      <section style={{ background: 'var(--ink)', padding: '72px 64px 100px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <RevealWrapper>
          <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
              Pushkar is on the ridge every morning.
            </p>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
              Sayed is the reason the world will find it.
            </p>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', fontStyle: 'italic', color: 'rgba(197,153,90,0.85)', lineHeight: 1.7 }}>
              Together, they are Kot Kailash Kumaon.
            </p>
          </div>
        </RevealWrapper>
      </section>

      {/* ── Reserve Your Stay ── */}
      <section style={{ background: 'var(--forest-deep)', padding: '100px 64px', textAlign: 'center' }}>
        <RevealWrapper>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(197,153,90,0.9)', display: 'block', marginBottom: '24px' }}>
              Reserve Your Stay
            </span>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 3.2vw, 3rem)', fontWeight: 300, fontStyle: 'italic', color: 'white', lineHeight: 1.15, marginBottom: '24px' }}>
              The same ridge.
              <br />
              <em style={{ fontStyle: 'normal', color: 'rgba(210,175,120,0.9)' }}>Available year-round.</em>
            </h2>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.58)', lineHeight: 1.9, marginBottom: '16px' }}>
              Kumaon Journeys runs on the same ridge, in the same rooms, served by the same kitchen
              as a regular stay at Kot Kailash. If a retreat edition is not running during your dates,
              the property is available for individual bookings year-round.
            </p>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '0.9rem', fontStyle: 'italic', color: 'rgba(197,153,90,0.75)', lineHeight: 1.7, marginBottom: '40px' }}>
              Direct bookings always receive the best available rate.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '36px' }}>
              <a href="/reserve" className="btn-gold">Check Availability</a>
              <a href="mailto:info@kotkailash.com" className="btn-outline">Write to Us</a>
            </div>
            <a
              href="tel:+919650264905"
              style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', display: 'block' }}
            >
              +91 96502 64905
            </a>
          </div>
        </RevealWrapper>
      </section>
    </>
  );
}
