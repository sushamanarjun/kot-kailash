'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Reserve from '@/components/sections/Reserve';
import RevealWrapper from '@/components/ui/RevealWrapper';

type Category = 'All' | 'The Ridge' | 'Rooms' | 'Tehni' | 'Forest' | 'Seasons';

interface GalleryImage {
  id: number;
  category: Exclude<Category, 'All'>;
  aspect: 'landscape' | 'portrait' | 'square';
  caption: string;
  note: string;
  gradient: string;
  accentColor: string;
  src: string;
}

const CATEGORIES: Category[] = ['All', 'The Ridge', 'Rooms', 'Tehni', 'Forest', 'Seasons'];

const IMAGES: GalleryImage[] = [
  {
    id: 1, category: 'The Ridge', aspect: 'landscape',
    caption: 'The Shaukiyathal Ridge at dawn', note: '6:04 AM · March',
    gradient: 'linear-gradient(160deg, #0d1810 0%, #1c2a18 55%, #2e3d2a 100%)',
    accentColor: 'rgba(139,107,61,0.22)',
    src: '/images/hero-ridge.jpeg',
  },
  {
    id: 2, category: 'Rooms', aspect: 'portrait',
    caption: 'Kumaon Vann — the forest cottage', note: 'Afternoon light',
    gradient: 'linear-gradient(160deg, #1a1410 0%, #2e2218 55%, #3d2e22 100%)',
    accentColor: 'rgba(139,107,61,0.16)',
    src: '/images/room-kumaon-vann.webp',
  },
  {
    id: 3, category: 'Forest', aspect: 'portrait',
    caption: 'Oak forest below the main house', note: 'Mid-October',
    gradient: 'linear-gradient(160deg, #0a1408 0%, #142010 55%, #1c2e18 100%)',
    accentColor: 'rgba(46,80,38,0.35)',
    src: '/images/ridge-twoUp.webp',
  },
  {
    id: 4, category: 'Tehni', aspect: 'square',
    caption: 'Mandua rotis, hand-pressed', note: 'Morning prep',
    gradient: 'linear-gradient(160deg, #1e1408 0%, #2e1e0c 55%, #3a2810 100%)',
    accentColor: 'rgba(139,107,61,0.28)',
    src: '/images/tehni-kitchen.webp',
  },
  {
    id: 5, category: 'Seasons', aspect: 'landscape',
    caption: 'Buransh bloom — late March', note: 'Rhododendron season',
    gradient: 'linear-gradient(160deg, #1a0c10 0%, #2e1018 55%, #3a1820 100%)',
    accentColor: 'rgba(155,58,42,0.22)',
    src: '/images/ridge-fullbleed.jpg',
  },
  {
    id: 6, category: 'Rooms', aspect: 'landscape',
    caption: 'Kutir Suite — Machan loft view', note: 'Blue hour',
    gradient: 'linear-gradient(160deg, #0c1018 0%, #141820 55%, #1c2430 100%)',
    accentColor: 'rgba(139,107,61,0.12)',
    src: '/images/room-kutir-suites.webp',
  },
  {
    id: 7, category: 'The Ridge', aspect: 'portrait',
    caption: 'Himalayan panorama at sunset', note: '5:48 PM · November',
    gradient: 'linear-gradient(160deg, #1a1008 0%, #28160a 55%, #3a1e0c 100%)',
    accentColor: 'rgba(155,58,42,0.32)',
    src: '/images/ridge-fullbleed.jpg',
  },
  {
    id: 8, category: 'Tehni', aspect: 'portrait',
    caption: 'Bhatt ke Dubke — the Kumaoni staple', note: 'Lunch service',
    gradient: 'linear-gradient(160deg, #181008 0%, #261808 55%, #342010 100%)',
    accentColor: 'rgba(139,107,61,0.22)',
    src: '/images/tehni-hero.webp',
  },
  {
    id: 9, category: 'Forest', aspect: 'landscape',
    caption: 'Rhododendron in the courtyard', note: 'Spring',
    gradient: 'linear-gradient(160deg, #0c1a0a 0%, #142210 55%, #1c2e18 100%)',
    accentColor: 'rgba(46,80,38,0.42)',
    src: '/images/ridge-twoUp.webp',
  },
  {
    id: 10, category: 'Seasons', aspect: 'landscape',
    caption: 'Snowline from the east terrace', note: 'January · 7,800 ft',
    gradient: 'linear-gradient(160deg, #101418 0%, #181c24 55%, #20242e 100%)',
    accentColor: 'rgba(139,107,61,0.1)',
    src: '/images/hero-ridge.jpeg',
  },
  {
    id: 11, category: 'Rooms', aspect: 'portrait',
    caption: 'Family Suite — the observatory', note: 'Night sky view',
    gradient: 'linear-gradient(160deg, #080c14 0%, #0c1020 55%, #10182c 100%)',
    accentColor: 'rgba(100,120,200,0.14)',
    src: '/images/room-family-suite.webp',
  },
  {
    id: 12, category: 'The Ridge', aspect: 'landscape',
    caption: 'Morning mist over the valley', note: 'Pre-dawn fog',
    gradient: 'linear-gradient(160deg, #101414 0%, #181e1e 55%, #202828 100%)',
    accentColor: 'rgba(139,107,61,0.09)',
    src: '/images/ridge-twoUp.webp',
  },
  {
    id: 13, category: 'Tehni', aspect: 'square',
    caption: 'Rhododendron sherbet', note: 'Seasonal, irreplaceable',
    gradient: 'linear-gradient(160deg, #1e0c10 0%, #2e1018 55%, #3c1620 100%)',
    accentColor: 'rgba(155,58,42,0.28)',
    src: '/images/tehni-village.webp',
  },
  {
    id: 14, category: 'Forest', aspect: 'portrait',
    caption: 'The trail into oak country', note: 'Below the ridge',
    gradient: 'linear-gradient(160deg, #0a1208 0%, #101c0c 55%, #182614 100%)',
    accentColor: 'rgba(46,80,38,0.38)',
    src: '/images/ridge-twoUp.webp',
  },
  {
    id: 15, category: 'Rooms', aspect: 'landscape',
    caption: 'The main house courtyard', note: 'Dusk',
    gradient: 'linear-gradient(160deg, #14100c 0%, #1c1610 55%, #282014 100%)',
    accentColor: 'rgba(139,107,61,0.18)',
    src: '/images/room-kumaoni-suites.webp',
  },
];

const ASPECT_RATIO: Record<GalleryImage['aspect'], string> = {
  landscape: '4/3',
  portrait: '3/4',
  square: '1/1',
};

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? IMAGES
    : IMAGES.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevImage = useCallback(() => {
    setLightboxIndex(prev => prev === null ? null : (prev - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex(prev => prev === null ? null : (prev + 1) % filtered.length);
  }, [filtered.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  const activeImg = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      <style>{`
        @keyframes galleryFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes galleryScrCue {
          0%, 100% { opacity: 0.35; transform: translateY(0); }
          50%       { opacity: 0.75; transform: translateY(7px); }
        }
        @keyframes galleryLbIn {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .gl-anim, .gl-scroll-cue { animation: none !important; opacity: 1 !important; }
          .gl-item-bg, .gl-caption { transition: none !important; }
          .gl-lb-content { animation: none !important; }
        }

        /* Filter buttons */
        .gl-filter {
          font-family: var(--sans);
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          padding: 10px 22px;
          border: 1px solid;
          background: transparent;
          cursor: pointer;
          transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
        }
        .gl-filter-active  { color: var(--gold); border-color: var(--gold); background: rgba(139,107,61,0.06); }
        .gl-filter-inactive { color: rgba(61,53,48,0.45); border-color: rgba(61,53,48,0.14); }
        .gl-filter-inactive:hover { color: var(--ink); border-color: rgba(61,53,48,0.32); background: rgba(61,53,48,0.04); }

        /* Grid item */
        .gl-item {
          break-inside: avoid;
          margin-bottom: 4px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          display: block;
        }
        .gl-item:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
        .gl-item-bg {
          width: 100%; height: 100%;
          position: absolute; inset: 0;
          transition: transform 0.55s ease;
        }
        .gl-item:hover .gl-item-bg { transform: scale(1.05); }
        .gl-caption {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(26,22,18,0.88) 0%, rgba(26,22,18,0.18) 55%, transparent 100%);
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 18px 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gl-item:hover .gl-caption { opacity: 1; }
        .gl-badge {
          position: absolute; top: 14px; left: 14px;
          font-family: var(--sans); font-size: 9px;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          transition: color 0.3s ease;
          pointer-events: none;
        }
        .gl-item:hover .gl-badge { color: rgba(255,255,255,0.55); }

        /* Columns grid */
        .gl-cols { columns: 3; column-gap: 4px; }
        @media (max-width: 1024px) { .gl-cols { columns: 2; } }
        @media (max-width: 640px)  { .gl-cols { columns: 1; } }

        /* Lightbox */
        .gl-lb-overlay {
          position: fixed; inset: 0;
          background: rgba(8,6,4,0.97);
          z-index: 900;
          display: flex; align-items: center; justify-content: center;
          padding: 64px 80px 32px;
        }
        .gl-lb-content {
          max-width: 860px; width: 100%;
          animation: galleryLbIn 0.3s ease both;
          display: flex; flex-direction: column;
        }
        .gl-lb-img {
          width: 100%; height: 62vh;
          position: relative; overflow: hidden; flex-shrink: 0;
        }
        .gl-lb-close, .gl-lb-nav {
          position: fixed;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.55);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
          z-index: 902;
        }
        .gl-lb-close { top: 20px; right: 20px; width: 44px; height: 44px; }
        .gl-lb-close:hover { background: rgba(255,255,255,0.12); color: white; }
        .gl-lb-nav  { top: 50%; transform: translateY(-50%); width: 48px; height: 48px; }
        .gl-lb-nav:hover { background: rgba(255,255,255,0.12); color: white; }
        .gl-lb-prev { left: 20px; }
        .gl-lb-next { right: 20px; }
        @media (max-width: 680px) {
          .gl-lb-overlay { padding: 52px 8px 24px; }
          .gl-lb-prev { left: 4px; }
          .gl-lb-next { right: 4px; }
          .gl-lb-img { height: 50vw; min-height: 220px; }
        }
      `}</style>

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: '100dvh',
          background: 'var(--ink)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '0 64px 80px',
        }}
      >
        {/* Ambient glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 65% 55% at 55% 45%, rgba(46,61,42,0.38) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Ghost section numeral */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '-2%',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(20rem, 30vw, 36rem)',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.022)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.04em',
        }}>V</div>

        <h1 className="sr-only">Gallery — Kot Kailash Heritage Retreat, Shaukiyathal, Kumaon</h1>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
          <div
            className="gl-anim"
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              animation: 'galleryFadeUp 0.8s ease both',
              animationDelay: '0.2s',
              opacity: 0,
            }}
          >
            <span style={{ width: '28px', height: '1px', background: 'var(--gold)', opacity: 0.45 }} />
            V · Gallery
          </div>

          <h2
            className="gl-anim"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(3rem, 5.5vw, 5.2rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'white',
              lineHeight: 1.08,
              marginBottom: '22px',
              animation: 'galleryFadeUp 0.8s ease both',
              animationDelay: '0.38s',
              opacity: 0,
            }}
          >
            Light changes here
            <br />
            <em style={{ fontStyle: 'normal', color: 'rgba(255,255,255,0.38)' }}>
              at a different pace.
            </em>
          </h2>

          <p
            className="gl-anim"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.48)',
              lineHeight: 1.8,
              maxWidth: '400px',
              animation: 'galleryFadeUp 0.8s ease both',
              animationDelay: '0.56s',
              opacity: 0,
            }}
          >
            The ridge, the rooms, the kitchen, and the forest — at 7,800 feet above the plains.
          </p>
        </div>

        {/* Scroll cue */}
        <div
          className="gl-scroll-cue"
          style={{
            position: 'absolute',
            bottom: '36px',
            right: '64px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            animation: 'galleryScrCue 2.6s ease-in-out infinite',
            animationDelay: '1.4s',
            opacity: 0,
          }}
        >
          <span style={{
            fontFamily: 'var(--sans)',
            fontSize: '9px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.28)',
          }}>Scroll</span>
          <svg width="1" height="44" viewBox="0 0 1 44">
            <line x1="0.5" y1="0" x2="0.5" y2="44" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
          </svg>
        </div>
      </section>

      {/* ─── Filter + Masonry Grid ────────────────────────────── */}
      <section style={{ background: 'var(--parchment)', padding: '72px 64px 80px' }}>

        {/* Category filters */}
        <div
          style={{
            display: 'flex',
            gap: '4px',
            flexWrap: 'wrap',
            marginBottom: '52px',
            justifyContent: 'center',
          }}
          role="tablist"
          aria-label="Filter gallery by category"
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`gl-filter ${activeCategory === cat ? 'gl-filter-active' : 'gl-filter-inactive'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="gl-cols" role="list">
          {filtered.map((img, i) => (
            <div key={`${img.id}-${activeCategory}`} className="gl-col-item" role="listitem" style={{ breakInside: 'avoid', marginBottom: '4px' }}>
              <RevealWrapper delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div
                  className="gl-item"
                  style={{ aspectRatio: ASPECT_RATIO[img.aspect] }}
                  onClick={() => openLightbox(i)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(i); } }}
                  aria-label={`View photograph: ${img.caption}`}
                >
                  {/* Image */}
                  <div className="gl-item-bg" style={{ background: img.gradient }}>
                    <Image
                      src={img.src}
                      alt={img.caption}
                      fill
                      loading="lazy"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  <span className="gl-badge">{img.category}</span>

                  {/* Hover caption */}
                  <div className="gl-caption">
                    <p style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '0.875rem',
                      fontStyle: 'italic',
                      color: 'rgba(255,255,255,0.9)',
                      lineHeight: 1.45,
                      marginBottom: '4px',
                    }}>{img.caption}</p>
                    <span style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '9px',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.42)',
                    }}>{img.note}</span>
                  </div>
                </div>
              </RevealWrapper>
            </div>
          ))}
        </div>

      </section>

      {/* ─── Pull quote ───────────────────────────────────────── */}
      <section style={{
        background: 'var(--forest-deep)',
        padding: '80px 64px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative quotation mark */}
        <div style={{
          position: 'absolute',
          top: '-30px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--serif)',
          fontSize: '20rem',
          lineHeight: 1,
          color: 'rgba(255,255,255,0.025)',
          userSelect: 'none',
          pointerEvents: 'none',
        }}>"</div>

        <RevealWrapper>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', gap: '20px', marginBottom: '28px',
            }}>
              <span style={{ width: '40px', height: '1px', background: 'var(--gold)', opacity: 0.38 }} />
              <span style={{
                fontFamily: 'var(--sans)', fontSize: '9px',
                letterSpacing: '0.32em', textTransform: 'uppercase',
                color: 'var(--gold)', opacity: 0.65,
              }}>On the light at 7,800 ft</span>
              <span style={{ width: '40px', height: '1px', background: 'var(--gold)', opacity: 0.38 }} />
            </div>
            <p style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1.45rem, 2.6vw, 2.2rem)',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.62)',
              maxWidth: '620px',
              margin: '0 auto 24px',
              lineHeight: 1.72,
            }}>
              &ldquo;At 7,800 feet, the light has a quality that the plains
              cannot manufacture. These photographs are proof.&rdquo;
            </p>
            <span style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
            }}>— Aishwarya Negi, Co-Founder</span>
          </div>
        </RevealWrapper>
      </section>

      {/* ─── CTA — light break before dark Reserve ────────────── */}
      <section style={{
        background: 'var(--parchment)',
        padding: '80px 64px',
        textAlign: 'center',
      }}>
        <RevealWrapper>
          <span style={{
            fontFamily: 'var(--sans)',
            fontSize: '11px',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '20px',
          }}>
            <span style={{ width: '22px', height: '1px', background: 'var(--gold)', opacity: 0.4 }} />
            Eight Keys · Rare Availability
            <span style={{ width: '22px', height: '1px', background: 'var(--gold)', opacity: 0.4 }} />
          </span>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--ink)',
            marginBottom: '14px',
            lineHeight: 1.15,
          }}>
            Come see it for yourself.
          </h2>
          <p style={{
            fontFamily: 'var(--serif)',
            fontSize: '0.95rem',
            fontStyle: 'italic',
            color: 'var(--ink-soft)',
            marginBottom: '32px',
            lineHeight: 1.75,
          }}>
            The photographs are placeholders for the actual experience.
          </p>
          <a
            href="https://reservations.hotel-spider.com/032644b5fbfafed6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ padding: '15px 52px', fontSize: '11px', letterSpacing: '0.26em' }}
          >
            Reserve a Room
          </a>
        </RevealWrapper>
      </section>

      <Reserve />

      {/* ─── Lightbox ─────────────────────────────────────────── */}
      {activeImg !== null && lightboxIndex !== null && (
        <div
          className="gl-lb-overlay"
          onClick={e => { if (e.target === e.currentTarget) closeLightbox(); }}
          role="dialog"
          aria-modal="true"
          aria-label={`Photograph: ${activeImg.caption}`}
        >
          <button className="gl-lb-close" onClick={closeLightbox} aria-label="Close lightbox">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 1l12 12M13 1L1 13"/>
            </svg>
          </button>

          {filtered.length > 1 && (
            <>
              <button className="gl-lb-nav gl-lb-prev" onClick={prevImage} aria-label="Previous photograph">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 2L4 7l5 5"/>
                </svg>
              </button>
              <button className="gl-lb-nav gl-lb-next" onClick={nextImage} aria-label="Next photograph">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 2l5 5-5 5"/>
                </svg>
              </button>
            </>
          )}

          <div className="gl-lb-content">
            {/* Image */}
            <div className="gl-lb-img" style={{ background: activeImg.gradient }}>
              <Image
                src={activeImg.src}
                alt={activeImg.caption}
                fill
                sizes="(max-width:680px) 100vw, 860px"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Caption row */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginTop: '16px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(255,255,255,0.07)',
            }}>
              <div>
                <p style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.72)',
                  marginBottom: '5px',
                  lineHeight: 1.4,
                }}>{activeImg.caption}</p>
                <span style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '9px',
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.32)',
                }}>{activeImg.note}</span>
              </div>
              <span style={{
                fontFamily: 'var(--sans)',
                fontSize: '10px',
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.22)',
                flexShrink: 0,
                marginLeft: '28px',
              }}>{lightboxIndex + 1} / {filtered.length}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
