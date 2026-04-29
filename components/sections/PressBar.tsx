import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';

export default function PressBar() {
  return (
    <section
      style={{
        background: 'var(--parchment)',
        padding: '64px 64px',
        textAlign: 'center',
      }}
    >
      <style>{`
        @media (max-width: 680px) {
          .pressbar-cta { flex-direction: column !important; align-items: center !important; }
          .pressbar-section { padding: 52px 28px !important; }
        }
      `}</style>

      <RevealWrapper>
        {/* Eyebrow */}
        <div
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '10px',
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            opacity: 0.8,
            marginBottom: '18px',
          }}
        >
          As Seen In
        </div>

        {/* Gold rule */}
        <div
          style={{
            width: '48px',
            height: '1px',
            background: 'var(--gold)',
            opacity: 0.45,
            margin: '0 auto 24px',
          }}
        />

        {/* Publication name */}
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.8rem, 3.2vw, 3rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--ink)',
            lineHeight: 1.1,
            letterSpacing: '0.02em',
            marginBottom: '12px',
          }}
        >
          Cond&eacute; Nast Traveller
        </p>

        {/* Descriptor */}
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '0.92rem',
            fontStyle: 'italic',
            color: 'var(--ink-soft)',
            lineHeight: 1.7,
            marginBottom: '32px',
          }}
        >
          &ldquo;The ridge that made us stop.&rdquo;
        </p>

        {/* CTAs */}
        <div
          className="pressbar-cta"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '28px',
          }}
        >
          <a
            href="https://www.cntraveller.in/story/kot-kailash-almora-uttarakhand-homestay/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              background: 'transparent',
              color: 'var(--ink)',
              padding: '14px 32px',
              textDecoration: 'none',
              border: '1px solid rgba(30,22,16,0.22)',
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: '44px',
              transition: 'border-color 0.3s, color 0.3s',
            }}
          >
            Read the story →
          </a>
          <Link
            href="/press"
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(138,90,56,0.35)',
              paddingBottom: '2px',
              transition: 'color 0.3s, border-color 0.3s',
            }}
          >
            All press →
          </Link>
        </div>
      </RevealWrapper>
    </section>
  );
}
