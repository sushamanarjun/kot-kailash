'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const HOTEL_SPIDER_URL =
  'https://reservations.hotel-spider.com/032644b5fbfafed6';

const navLinks = [
  { href: '/#stay', label: 'Stay' },
  { href: '/#experiences', label: 'Experiences' },
  { href: '/#tehni', label: 'Dine' },
  { href: '/#sacred', label: 'Sacred Arc' },
  { href: '/#story', label: 'Our Story' },
  { href: '/#reserve', label: 'Reserve' },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        id="nav"
        className={solid ? 'nav-solid' : ''}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: solid ? '18px 64px' : '32px 64px',
          transition: 'padding 0.5s, background 0.5s, box-shadow 0.5s',
          background: solid ? 'rgba(250,247,242,0.97)' : 'transparent',
          backdropFilter: solid ? 'blur(16px)' : 'none',
          boxShadow: solid ? '0 1px 0 var(--fog)' : 'none',
        }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--caps)',
            fontSize: '11px',
            letterSpacing: '0.4em',
            color: solid ? 'var(--ink)' : 'rgba(255,255,255,0.9)',
            textDecoration: 'none',
            transition: 'color 0.4s, text-shadow 0.4s',
            textShadow: solid ? '0 1px 8px rgba(0,0,0,0)' : '0 1px 8px rgba(0,0,0,0.55)',
          }}
        >
          KOT KAILASH · KUMAON
        </Link>

        {/* Desktop Nav Links — absolutely centred */}
        <ul
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '38px',
            listStyle: 'none',
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="nav-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Book button */}
          <a
            href={HOTEL_SPIDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-book-btn"
          >
            Reserve your stay
          </a>

          {/* Hamburger (hidden on desktop via CSS) */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
          >
            <span style={{ background: solid ? 'var(--ink)' : 'rgba(255,255,255,0.8)' }} />
            <span style={{ background: solid ? 'var(--ink)' : 'rgba(255,255,255,0.8)' }} />
            <span style={{ background: solid ? 'var(--ink)' : 'rgba(255,255,255,0.8)' }} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen drawer */}
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            background: 'var(--forest-deep)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '24px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--caps)',
                fontSize: '11px',
                letterSpacing: '0.4em',
                color: 'white',
              }}
            >
              KOT KAILASH
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '28px',
                lineHeight: 1,
                cursor: 'pointer',
                padding: '4px',
                transition: 'color 0.3s',
              }}
            >
              ×
            </button>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '24px', flex: 1 }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.6rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  transition: 'color 0.3s',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div style={{ padding: '24px 24px 40px' }}>
            <a
              href={HOTEL_SPIDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                textAlign: 'center',
                fontFamily: 'var(--sans)',
                fontSize: '9px',
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                background: 'var(--gold)',
                color: 'var(--ink)',
                padding: '16px',
                textDecoration: 'none',
                transition: 'background 0.3s',
              }}
            >
              Reserve your stay
            </a>
          </div>
        </div>
      )}
    </>
  );
}
