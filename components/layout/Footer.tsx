import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink)',
        padding: '72px 64px 44px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* 4-column grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '52px',
          marginBottom: '52px',
        }}
        className="ft-grid"
      >
        {/* Column 1 — Brand */}
        <div>
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.38em',
              color: 'white',
              display: 'block',
              marginBottom: '14px',
            }}
          >
            KOT KAILASH · KUMAON
          </span>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '0.82rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.52)',
              lineHeight: 1.78,
              maxWidth: '220px',
            }}
          >
            &ldquo;The best travel leaves you quieter than it found you.&rdquo;
            <br />
            A heritage ridge sanctuary at 7,800 feet.
          </p>
          <address
            style={{
              marginTop: '20px',
              fontStyle: 'normal',
              fontFamily: 'var(--sans)',
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.44)',
              lineHeight: 2,
            }}
          >
            Village Kunja Gunth · Shaukiyathal
            <br />
            District Almora — 263623
            <br />
            Uttarakhand, India
          </address>
        </div>

        {/* Column 2 — The Property */}
        <div>
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '10px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              display: 'block',
              marginBottom: '17px',
            }}
          >
            The Property
          </span>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
            {[
              { href: '/#stay', label: 'Rooms & Suites' },
              { href: '/#experiences', label: 'Experiences' },
              { href: '/#tehni', label: 'Tehni — The Kitchen' },
              { href: '/about', label: 'The Library' },
              { href: '/#sacred', label: 'Sacred Arc' },
              { href: '/experience', label: 'Seasons' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="ft-link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Plan Your Stay */}
        <div>
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '10px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              display: 'block',
              marginBottom: '17px',
            }}
          >
            Plan Your Stay
          </span>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
            {[
              { href: '/stay', label: 'Rooms & Suites' },
              { href: '/how-to-reach', label: 'How to Reach' },
              { href: '/retreats', label: 'Retreats & Offsites' },
              { href: '/journal', label: 'Journal' },
              { href: '/about', label: 'Our Story' },
              { href: 'https://www.kotkailash.com/cancellation-refunds/', label: 'Cancellations', external: true },
            ].map((l) => (
              <li key={l.label}>
                {'external' in l ? (
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ft-link"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link href={l.href} className="ft-link">
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Trade & Press */}
        <div>
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '10px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              display: 'block',
              marginBottom: '17px',
            }}
          >
            Trade &amp; Press
          </span>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
            {[
              { href: 'mailto:info@kotkailash.com', label: 'Agency Rates (20–25% off)' },
              { href: 'mailto:info@kotkailash.com', label: 'FAM Stays' },
              { href: 'mailto:info@kotkailash.com', label: 'Press Enquiries' },
              { href: 'mailto:info@kotkailash.com', label: 'Retreats & Buyout' },
              {
                href: 'https://www.tripadvisor.in/Hotel_Review-g679053-d25168310',
                label: 'TripAdvisor',
                external: true,
              },
            ].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={'external' in l ? '_blank' : undefined}
                  rel={'external' in l ? 'noopener noreferrer' : undefined}
                  className="ft-link"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="ft-bottom"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '30px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '10px',
            letterSpacing: '0.08em',
            color: 'rgba(255,255,255,0.38)',
            lineHeight: 1.9,
          }}
        >
          GST: 05ABAFK1520C1Z7 &nbsp;·&nbsp; FSSAI: 22622002000027
          <br />
          &copy; 2025–26 Kot Kailash Ventures LLP. All rights reserved.
        </div>

        <div style={{ display: 'flex', gap: '18px' }}>
          {[
            { href: 'https://instagram.com/kot.kailash', label: 'Instagram' },
            { href: 'https://www.tripadvisor.in/Hotel_Review-g679053-d25168310', label: 'TripAdvisor' },
            { href: 'https://g.page/r/Cb3YvvO1nV6fEB0/review', label: 'Google' },
          ].map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ft-soc-link"
            >
              {s.label}
            </a>
          ))}
        </div>

        <span
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '10px',
            letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.32)',
            textTransform: 'uppercase',
          }}
        >
          A Unit of Kot Kailash Ventures LLP
        </span>
      </div>
    </footer>
  );
}
