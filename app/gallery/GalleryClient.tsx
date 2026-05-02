'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Reserve from '@/components/sections/Reserve';
import RevealWrapper from '@/components/ui/RevealWrapper';

type Category =
  | 'All'
  | 'Seasons'
  | 'Family Suite'
  | 'Kumaon Vann'
  | 'Kumaoni Suite'
  | 'Kutir Suite'
  | 'Tehni'
  | 'Experiences'
  | 'Wildlife';

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

const CATEGORIES: Category[] = [
  'All', 'Seasons', 'Family Suite', 'Kumaon Vann',
  'Kumaoni Suite', 'Kutir Suite', 'Tehni', 'Experiences', 'Wildlife',
];

const IMAGES: GalleryImage[] = [
  // ── Seasons (14) — IDs 1–4 rendered with priority ──────────────
  {
    id: 1, category: 'Seasons', aspect: 'landscape',
    caption: 'Golden hour on the ridge', note: 'Late afternoon · Kunja Gunth',
    gradient: 'linear-gradient(160deg, #1a1008 0%, #2e1c08 55%, #3c2810 100%)',
    accentColor: 'rgba(155,98,42,0.28)',
    src: '/images/gallery/seasons/golden-hour-kot-kailash.jpeg',
  },
  {
    id: 2, category: 'Seasons', aspect: 'landscape',
    caption: 'The property from the trail above', note: 'Shaukiyathal · 7,800 ft',
    gradient: 'linear-gradient(160deg, #0e1a0c 0%, #182812 55%, #243618 100%)',
    accentColor: 'rgba(46,80,38,0.3)',
    src: '/images/gallery/seasons/kot-kailash-property-almora.JPG',
  },
  {
    id: 3, category: 'Seasons', aspect: 'landscape',
    caption: 'Three houses, one ridge', note: 'Summer',
    gradient: 'linear-gradient(160deg, #0c1a0a 0%, #142210 55%, #1e3016 100%)',
    accentColor: 'rgba(46,80,38,0.26)',
    src: '/images/gallery/seasons/kot-kailash-heritage-retreat.webp',
  },
  {
    id: 4, category: 'Seasons', aspect: 'landscape',
    caption: 'Sunset from the east terrace', note: '7,800 ft · Himalayan range',
    gradient: 'linear-gradient(160deg, #1c1008 0%, #2e1c0a 55%, #3e2810 100%)',
    accentColor: 'rgba(155,58,42,0.3)',
    src: '/images/gallery/seasons/sunset-kot-kailash-himalayas.webp',
  },
  {
    id: 5, category: 'Seasons', aspect: 'landscape',
    caption: 'Evening light over the main house', note: 'March 2023',
    gradient: 'linear-gradient(160deg, #141008 0%, #20180c 55%, #2c2214 100%)',
    accentColor: 'rgba(139,107,61,0.18)',
    src: '/images/gallery/seasons/evening-light-kot-kailash-march-2023.webp',
  },
  {
    id: 6, category: 'Seasons', aspect: 'portrait',
    caption: 'The courtyard after dark', note: 'Night · firelight',
    gradient: 'linear-gradient(160deg, #080608 0%, #100e10 55%, #181418 100%)',
    accentColor: 'rgba(139,107,61,0.22)',
    src: '/images/gallery/seasons/courtyard-night-kot-kailash.webp',
  },
  {
    id: 7, category: 'Seasons', aspect: 'landscape',
    caption: 'Winter snow on the ridge', note: 'January · first snowfall',
    gradient: 'linear-gradient(160deg, #101418 0%, #181c22 55%, #202630 100%)',
    accentColor: 'rgba(139,107,61,0.1)',
    src: '/images/gallery/seasons/snow-kot-kailash-ridge-winter.jpg',
  },
  {
    id: 8, category: 'Seasons', aspect: 'landscape',
    caption: 'Snowfall, January 2026', note: 'First snow of the season',
    gradient: 'linear-gradient(160deg, #0e1218 0%, #161a22 55%, #1e222e 100%)',
    accentColor: 'rgba(139,107,61,0.08)',
    src: '/images/gallery/seasons/snowfall-2026-kot-kailash.jpeg',
  },
  {
    id: 9, category: 'Seasons', aspect: 'landscape',
    caption: 'Buransh in bloom', note: 'Rhododendron season · spring',
    gradient: 'linear-gradient(160deg, #1a0808 0%, #2a1010 55%, #381818 100%)',
    accentColor: 'rgba(155,42,42,0.28)',
    src: '/images/season-buransh.png',
  },
  {
    id: 10, category: 'Seasons', aspect: 'landscape',
    caption: 'Winter clarity on the ridge', note: 'Deep blue sky · Kumaon',
    gradient: 'linear-gradient(160deg, #080e18 0%, #101828 55%, #182234 100%)',
    accentColor: 'rgba(42,80,139,0.2)',
    src: '/images/season-clarity.png',
  },
  {
    id: 11, category: 'Seasons', aspect: 'landscape',
    caption: 'Deep winter on the property', note: 'Snowbound · December',
    gradient: 'linear-gradient(160deg, #0c1018 0%, #141820 55%, #1c2028 100%)',
    accentColor: 'rgba(139,107,61,0.1)',
    src: '/images/season-deep-winter.jpeg',
  },
  {
    id: 12, category: 'Seasons', aspect: 'landscape',
    caption: 'Harvest season at Shaukiyathal', note: 'October · golden fields',
    gradient: 'linear-gradient(160deg, #1c1408 0%, #2c200e 55%, #3a2c14 100%)',
    accentColor: 'rgba(155,120,42,0.3)',
    src: '/images/season-harvest.JPG',
  },
  {
    id: 13, category: 'Seasons', aspect: 'landscape',
    caption: 'The monsoon arrives', note: 'July · mist on the ridge',
    gradient: 'linear-gradient(160deg, #0a1010 0%, #121818 55%, #1a2222 100%)',
    accentColor: 'rgba(46,80,80,0.3)',
    src: '/images/season-monsoon.jpeg',
  },
  {
    id: 14, category: 'Seasons', aspect: 'landscape',
    caption: 'Winter on the ridge', note: 'First frost · Kumaon winter',
    gradient: 'linear-gradient(160deg, #101418 0%, #181e22 55%, #202830 100%)',
    accentColor: 'rgba(139,107,61,0.1)',
    src: '/images/season-winter.jpeg',
  },

  // ── Family Suite (11) ──────────────────────────────────────────
  {
    id: 15, category: 'Family Suite', aspect: 'landscape',
    caption: 'Family Suite — the main house', note: 'Upper floor · open views',
    gradient: 'linear-gradient(160deg, #141210 0%, #201c18 55%, #2a2620 100%)',
    accentColor: 'rgba(139,107,61,0.18)',
    src: '/images/gallery/family-suite/family-suite-main.jpg',
  },
  {
    id: 16, category: 'Family Suite', aspect: 'portrait',
    caption: 'The bed, Family Suite', note: 'Handloom textiles · Kumaon',
    gradient: 'linear-gradient(160deg, #181208 0%, #261c0e 55%, #322614 100%)',
    accentColor: 'rgba(139,107,61,0.22)',
    src: '/images/gallery/family-suite/family-suite-the-bed.jpg',
  },
  {
    id: 17, category: 'Family Suite', aspect: 'landscape',
    caption: 'Family Suite — panoramic balcony', note: 'Himalayan range · east-facing',
    gradient: 'linear-gradient(160deg, #0c1408 0%, #14200e 55%, #1c2c16 100%)',
    accentColor: 'rgba(46,80,38,0.28)',
    src: '/images/gallery/family-suite/family-suite-panoramic-balcony.jpg',
  },
  {
    id: 18, category: 'Family Suite', aspect: 'landscape',
    caption: 'Evenings at the Family Suite', note: 'Amber light · dusk',
    gradient: 'linear-gradient(160deg, #181008 0%, #261a0c 55%, #342412 100%)',
    accentColor: 'rgba(155,98,42,0.3)',
    src: '/images/gallery/family-suite/family-suite-evening-light.jpg',
  },
  {
    id: 19, category: 'Family Suite', aspect: 'portrait',
    caption: 'Family Suite interior', note: 'Natural wood finish',
    gradient: 'linear-gradient(160deg, #161008 0%, #22180e 55%, #2e2016 100%)',
    accentColor: 'rgba(139,107,61,0.2)',
    src: '/images/gallery/family-suite/family-suite-interior-1.jpg',
  },
  {
    id: 20, category: 'Family Suite', aspect: 'portrait',
    caption: 'Family Suite — sitting room', note: 'Morning light',
    gradient: 'linear-gradient(160deg, #181410 0%, #241e18 55%, #302820 100%)',
    accentColor: 'rgba(139,107,61,0.18)',
    src: '/images/gallery/family-suite/family-suite-interior-2.jpg',
  },
  {
    id: 21, category: 'Family Suite', aspect: 'portrait',
    caption: 'Family Suite — a closer look', note: 'Details',
    gradient: 'linear-gradient(160deg, #161210 0%, #201c18 55%, #2c2622 100%)',
    accentColor: 'rgba(139,107,61,0.16)',
    src: '/images/gallery/family-suite/family-suite-interior-3.jpg',
  },
  {
    id: 22, category: 'Family Suite', aspect: 'landscape',
    caption: 'Family Suite — courtyard aspect', note: 'Morning · quiet hour',
    gradient: 'linear-gradient(160deg, #12100c 0%, #1c1810 55%, #262214 100%)',
    accentColor: 'rgba(139,107,61,0.2)',
    src: '/images/gallery/family-suite/family-suite-courtyard-morning.jpeg',
  },
  {
    id: 23, category: 'Family Suite', aspect: 'landscape',
    caption: 'Family Suite overview', note: 'The full space',
    gradient: 'linear-gradient(160deg, #141010 0%, #1e1818 55%, #282222 100%)',
    accentColor: 'rgba(139,107,61,0.16)',
    src: '/images/gallery/family-suite/family-suite-overview-1.jpeg',
  },
  {
    id: 24, category: 'Family Suite', aspect: 'landscape',
    caption: 'Family Suite — second perspective', note: 'Natural light',
    gradient: 'linear-gradient(160deg, #141210 0%, #1e1c18 55%, #28261e 100%)',
    accentColor: 'rgba(139,107,61,0.16)',
    src: '/images/gallery/family-suite/family-suite-overview-2.jpg',
  },
  {
    id: 25, category: 'Family Suite', aspect: 'landscape',
    caption: 'Family Suite — third perspective', note: 'Open space',
    gradient: 'linear-gradient(160deg, #141210 0%, #201c18 55%, #2c2620 100%)',
    accentColor: 'rgba(139,107,61,0.16)',
    src: '/images/gallery/family-suite/family-suite-overview-3.jpeg',
  },

  // ── Kumaon Vann (12) ───────────────────────────────────────────
  {
    id: 26, category: 'Kumaon Vann', aspect: 'landscape',
    caption: 'Kumaon Vann — the forest cottage', note: 'Private · secluded',
    gradient: 'linear-gradient(160deg, #0a1208 0%, #12180e 55%, #1c2416 100%)',
    accentColor: 'rgba(46,80,38,0.34)',
    src: '/images/gallery/kumaon-vann/kumaon-vann-main.jpeg',
  },
  {
    id: 27, category: 'Kumaon Vann', aspect: 'portrait',
    caption: 'The bed, Kumaon Vann', note: 'Forest light · morning',
    gradient: 'linear-gradient(160deg, #181208 0%, #261c0e 55%, #322614 100%)',
    accentColor: 'rgba(139,107,61,0.22)',
    src: '/images/gallery/kumaon-vann/kumaon-vann-the-bed.jpeg',
  },
  {
    id: 28, category: 'Kumaon Vann', aspect: 'portrait',
    caption: 'Bed detail, Kumaon Vann', note: 'Handwoven textiles',
    gradient: 'linear-gradient(160deg, #181410 0%, #241e18 55%, #302820 100%)',
    accentColor: 'rgba(139,107,61,0.2)',
    src: '/images/gallery/kumaon-vann/kumaon-vann-bed-detail.jpeg',
  },
  {
    id: 29, category: 'Kumaon Vann', aspect: 'landscape',
    caption: 'Golden hour at Kumaon Vann', note: 'Late afternoon light',
    gradient: 'linear-gradient(160deg, #1a1008 0%, #2c1c0c 55%, #3a2810 100%)',
    accentColor: 'rgba(155,98,42,0.3)',
    src: '/images/gallery/kumaon-vann/kumaon-vann-golden-hour.jpeg',
  },
  {
    id: 30, category: 'Kumaon Vann', aspect: 'portrait',
    caption: 'Kumaon Vann bathroom', note: 'Stone and slate',
    gradient: 'linear-gradient(160deg, #181210 0%, #241c18 55%, #302620 100%)',
    accentColor: 'rgba(139,107,61,0.16)',
    src: '/images/gallery/kumaon-vann/kumaon-vann-bathroom-1.jpeg',
  },
  {
    id: 31, category: 'Kumaon Vann', aspect: 'portrait',
    caption: 'Kumaon Vann — ensuite', note: 'Natural materials',
    gradient: 'linear-gradient(160deg, #181212 0%, #241c1c 55%, #302626 100%)',
    accentColor: 'rgba(139,107,61,0.14)',
    src: '/images/gallery/kumaon-vann/kumaon-vann-bath-tub.JPG',
  },
  {
    id: 32, category: 'Kumaon Vann', aspect: 'landscape',
    caption: 'Kumaon Vann courtyard', note: 'The private garden',
    gradient: 'linear-gradient(160deg, #0c1208 0%, #161c0e 55%, #202816 100%)',
    accentColor: 'rgba(46,80,38,0.32)',
    src: '/images/gallery/kumaon-vann/kumaon-vann-courtyard.jpeg',
  },
  {
    id: 33, category: 'Kumaon Vann', aspect: 'landscape',
    caption: 'Kumaon Vann — interior spaces', note: 'Warm stone walls',
    gradient: 'linear-gradient(160deg, #141210 0%, #201c18 55%, #2c2620 100%)',
    accentColor: 'rgba(139,107,61,0.18)',
    src: '/images/gallery/kumaon-vann/kumaon-vann-interior-1.jpeg',
  },
  {
    id: 34, category: 'Kumaon Vann', aspect: 'landscape',
    caption: 'Kumaon Vann — living space', note: 'Afternoon light',
    gradient: 'linear-gradient(160deg, #161210 0%, #221c18 55%, #2e2620 100%)',
    accentColor: 'rgba(139,107,61,0.18)',
    src: '/images/gallery/kumaon-vann/kumaon-vann-interior-2.jpeg',
  },
  {
    id: 35, category: 'Kumaon Vann', aspect: 'landscape',
    caption: 'Kumaon Vann — third view', note: 'Details',
    gradient: 'linear-gradient(160deg, #141010 0%, #201818 55%, #2c2222 100%)',
    accentColor: 'rgba(139,107,61,0.16)',
    src: '/images/gallery/kumaon-vann/kumaon-vann-interior-3.jpeg',
  },
  {
    id: 36, category: 'Kumaon Vann', aspect: 'landscape',
    caption: 'The view from Kumaon Vann', note: 'Himalayan ridge · open sky',
    gradient: 'linear-gradient(160deg, #0e1a0c 0%, #182812 55%, #243618 100%)',
    accentColor: 'rgba(46,80,38,0.3)',
    src: '/images/gallery/kumaon-vann/kumaon-vann-view.jpeg',
  },
  {
    id: 37, category: 'Kumaon Vann', aspect: 'portrait',
    caption: 'Wood fire burner, Kumaon Vann', note: 'Winter warmth · evenings',
    gradient: 'linear-gradient(160deg, #180e06 0%, #261808 55%, #34220e 100%)',
    accentColor: 'rgba(155,78,28,0.36)',
    src: '/images/gallery/kumaon-vann/kumaon-vann-wood-fire-burner.jpeg',
  },

  // ── Kumaoni Suite (9) ──────────────────────────────────────────
  {
    id: 38, category: 'Kumaoni Suite', aspect: 'landscape',
    caption: 'Kumaoni Suite — the main room', note: 'Heritage proportions',
    gradient: 'linear-gradient(160deg, #141210 0%, #201c18 55%, #2a2620 100%)',
    accentColor: 'rgba(139,107,61,0.18)',
    src: '/images/gallery/kumaoni-suite/kumaoni-suite-main.jpg',
  },
  {
    id: 39, category: 'Kumaoni Suite', aspect: 'portrait',
    caption: 'Kumaoni Suite — interior', note: 'Warm wood tones',
    gradient: 'linear-gradient(160deg, #161008 0%, #221a0e 55%, #2e2416 100%)',
    accentColor: 'rgba(139,107,61,0.22)',
    src: '/images/gallery/kumaoni-suite/kumaoni-suite-interior-1.jpg',
  },
  {
    id: 40, category: 'Kumaoni Suite', aspect: 'portrait',
    caption: 'Kumaoni Suite — a second look', note: 'Natural light',
    gradient: 'linear-gradient(160deg, #161210 0%, #221c18 55%, #2e2620 100%)',
    accentColor: 'rgba(139,107,61,0.18)',
    src: '/images/gallery/kumaoni-suite/kumaoni-suite-interior-2.jpeg',
  },
  {
    id: 41, category: 'Kumaoni Suite', aspect: 'portrait',
    caption: 'Kumaoni Suite bathroom', note: 'Stone finish · morning',
    gradient: 'linear-gradient(160deg, #181210 0%, #241c18 55%, #302620 100%)',
    accentColor: 'rgba(139,107,61,0.16)',
    src: '/images/gallery/kumaoni-suite/kumaoni-suite-bathroom.jpg',
  },
  {
    id: 42, category: 'Kumaoni Suite', aspect: 'landscape',
    caption: 'Kumaoni Suite in snowfall', note: 'January snow · Shaukiyathal',
    gradient: 'linear-gradient(160deg, #0e1218 0%, #161a22 55%, #1e222e 100%)',
    accentColor: 'rgba(139,107,61,0.08)',
    src: '/images/gallery/kumaoni-suite/kumaoni-suite-snowfall.jpeg',
  },
  {
    id: 43, category: 'Kumaoni Suite', aspect: 'landscape',
    caption: 'Golden hour at Kumaoni Suite', note: 'Afternoon amber',
    gradient: 'linear-gradient(160deg, #1a1008 0%, #2c1c0c 55%, #3c2810 100%)',
    accentColor: 'rgba(155,98,42,0.3)',
    src: '/images/gallery/kumaoni-suite/kumaoni-suite-golden-hour.jpeg',
  },
  {
    id: 44, category: 'Kumaoni Suite', aspect: 'landscape',
    caption: 'Kumaoni Suite — overview', note: 'The full space',
    gradient: 'linear-gradient(160deg, #141010 0%, #1e1818 55%, #282222 100%)',
    accentColor: 'rgba(139,107,61,0.16)',
    src: '/images/gallery/kumaoni-suite/kumaoni-suite-overview-1.jpg',
  },
  {
    id: 45, category: 'Kumaoni Suite', aspect: 'landscape',
    caption: 'Kumaoni Suite — second overview', note: 'Wide view',
    gradient: 'linear-gradient(160deg, #141210 0%, #1e1c18 55%, #28261e 100%)',
    accentColor: 'rgba(139,107,61,0.16)',
    src: '/images/gallery/kumaoni-suite/kumaoni-suite-overview-2.jpg',
  },
  {
    id: 46, category: 'Kumaoni Suite', aspect: 'portrait',
    caption: 'Kumaoni Suite — peg detail', note: 'Handcrafted joinery',
    gradient: 'linear-gradient(160deg, #181410 0%, #261e18 55%, #342820 100%)',
    accentColor: 'rgba(139,107,61,0.2)',
    src: '/images/gallery/kumaoni-suite/kumaoni-suite-peg-detail.jpg',
  },

  // ── Kutir Suite (11) ───────────────────────────────────────────
  {
    id: 47, category: 'Kutir Suite', aspect: 'landscape',
    caption: 'Kutir Suite — exterior', note: 'Stone and timber · the cottage',
    gradient: 'linear-gradient(160deg, #0c1208 0%, #14180e 55%, #1c2416 100%)',
    accentColor: 'rgba(46,80,38,0.3)',
    src: '/images/gallery/kutir-suite/kutir-suite-exterior.jpg',
  },
  {
    id: 48, category: 'Kutir Suite', aspect: 'landscape',
    caption: 'Kutir Suite — exterior, second view', note: 'The approach',
    gradient: 'linear-gradient(160deg, #0e1408 0%, #161e0e 55%, #1e2c16 100%)',
    accentColor: 'rgba(46,80,38,0.28)',
    src: '/images/gallery/kutir-suite/kutir-suite-exterior-2.jpeg',
  },
  {
    id: 49, category: 'Kutir Suite', aspect: 'landscape',
    caption: 'Kutir Suite — living room', note: 'Curated interiors',
    gradient: 'linear-gradient(160deg, #161210 0%, #221c18 55%, #2e2620 100%)',
    accentColor: 'rgba(139,107,61,0.2)',
    src: '/images/gallery/kutir-suite/kutir-suite-living-room.jpg',
  },
  {
    id: 50, category: 'Kutir Suite', aspect: 'landscape',
    caption: 'Kutir Suite — living room detail', note: 'Morning light',
    gradient: 'linear-gradient(160deg, #181410 0%, #241e18 55%, #302820 100%)',
    accentColor: 'rgba(139,107,61,0.18)',
    src: '/images/gallery/kutir-suite/kutir-suite-living-room-2.jpeg',
  },
  {
    id: 51, category: 'Kutir Suite', aspect: 'portrait',
    caption: 'The bed, Kutir Suite', note: 'Handloom cover · quiet morning',
    gradient: 'linear-gradient(160deg, #181208 0%, #261c0e 55%, #322614 100%)',
    accentColor: 'rgba(139,107,61,0.22)',
    src: '/images/gallery/kutir-suite/kutir-suite-the-bed.jpg',
  },
  {
    id: 52, category: 'Kutir Suite', aspect: 'portrait',
    caption: 'Kutir Suite — bedroom', note: 'Stone walls · warm light',
    gradient: 'linear-gradient(160deg, #161010 0%, #221a18 55%, #2e2422 100%)',
    accentColor: 'rgba(139,107,61,0.2)',
    src: '/images/gallery/kutir-suite/kutir-suite-bedroom-2.jpeg',
  },
  {
    id: 53, category: 'Kutir Suite', aspect: 'landscape',
    caption: 'Kutir Suite — bedroom and machan', note: 'The loft level',
    gradient: 'linear-gradient(160deg, #141010 0%, #201818 55%, #2c2222 100%)',
    accentColor: 'rgba(139,107,61,0.18)',
    src: '/images/gallery/kutir-suite/kutir-suite-bedroom-machan.jpg',
  },
  {
    id: 54, category: 'Kutir Suite', aspect: 'landscape',
    caption: 'Kutir Suite — private dining', note: 'In-suite dining · Tehni',
    gradient: 'linear-gradient(160deg, #1c1208 0%, #2c1e10 55%, #3a2a16 100%)',
    accentColor: 'rgba(139,107,61,0.28)',
    src: '/images/gallery/kutir-suite/kutir-suite-private-dining.jpg',
  },
  {
    id: 55, category: 'Kutir Suite', aspect: 'portrait',
    caption: 'Kutir Suite — shower ensuite', note: 'Natural stone',
    gradient: 'linear-gradient(160deg, #181210 0%, #241c18 55%, #302620 100%)',
    accentColor: 'rgba(139,107,61,0.14)',
    src: '/images/gallery/kutir-suite/kutir-suite-shower-ensuite.jpg',
  },
  {
    id: 56, category: 'Kutir Suite', aspect: 'portrait',
    caption: 'Kutir Suite — ensuite detail', note: 'Handcrafted tile',
    gradient: 'linear-gradient(160deg, #181212 0%, #241c1c 55%, #302626 100%)',
    accentColor: 'rgba(139,107,61,0.14)',
    src: '/images/gallery/kutir-suite/kutir-suite-shower-ensuite-1.jpg',
  },
  {
    id: 57, category: 'Kutir Suite', aspect: 'portrait',
    caption: 'Kutir Suite — ensuite, second view', note: 'Morning light',
    gradient: 'linear-gradient(160deg, #161010 0%, #221a18 55%, #2e2422 100%)',
    accentColor: 'rgba(139,107,61,0.14)',
    src: '/images/gallery/kutir-suite/kutir-suite-shower-ensuite-2.jpg',
  },

  // ── Tehni (15) ────────────────────────────────────────────────
  {
    id: 58, category: 'Tehni', aspect: 'landscape',
    caption: 'Grind to perfection — Tehni', note: 'The masala stone · Kot Kailash',
    gradient: 'linear-gradient(160deg, #1a1208 0%, #2c1e10 55%, #3a2a14 100%)',
    accentColor: 'rgba(139,107,61,0.3)',
    src: '/images/gallery/tehni/tehni-grind-to-perfection.jpg',
  },
  {
    id: 59, category: 'Tehni', aspect: 'square',
    caption: 'Kumaoni thali, served fresh', note: 'Lunch service · Tehni',
    gradient: 'linear-gradient(160deg, #1e1408 0%, #2e1e0c 55%, #3a2810 100%)',
    accentColor: 'rgba(139,107,61,0.28)',
    src: '/images/gallery/tehni/tehni-kumaoni-thali.jpg',
  },
  {
    id: 60, category: 'Tehni', aspect: 'square',
    caption: 'Home made bread — Tehni', note: 'Wood-fired mandua rotis',
    gradient: 'linear-gradient(160deg, #1c1208 0%, #2a1c0e 55%, #362414 100%)',
    accentColor: 'rgba(139,107,61,0.3)',
    src: '/images/gallery/tehni/tehni-home-made-bread.jpg',
  },
  {
    id: 61, category: 'Tehni', aspect: 'square',
    caption: 'Afternoon tea at Tehni', note: 'Ridge tea · every afternoon',
    gradient: 'linear-gradient(160deg, #1a1008 0%, #281a0e 55%, #362414 100%)',
    accentColor: 'rgba(139,107,61,0.26)',
    src: '/images/gallery/tehni/tehni-afternoon-tea.jpg',
  },
  {
    id: 62, category: 'Tehni', aspect: 'landscape',
    caption: 'Dinner at Tehni', note: 'Evening service · candlelight',
    gradient: 'linear-gradient(160deg, #181008 0%, #24180c 55%, #302210 100%)',
    accentColor: 'rgba(139,107,61,0.24)',
    src: '/images/gallery/tehni/tehni-dinner.jpg',
  },
  {
    id: 63, category: 'Tehni', aspect: 'square',
    caption: 'Spices from the Kumaon market', note: 'Local sourced · Tehni pantry',
    gradient: 'linear-gradient(160deg, #1e1008 0%, #2e1c0c 55%, #3c2810 100%)',
    accentColor: 'rgba(155,78,28,0.3)',
    src: '/images/gallery/tehni/tehni-spices.jpg',
  },
  {
    id: 64, category: 'Tehni', aspect: 'landscape',
    caption: 'Indian breakfast — Tehni', note: 'Morning spread · Kot Kailash',
    gradient: 'linear-gradient(160deg, #1a1408 0%, #2a2010 55%, #382c16 100%)',
    accentColor: 'rgba(139,107,61,0.28)',
    src: '/images/gallery/tehni/tehni-indian-breakfast.jpg',
  },
  {
    id: 65, category: 'Tehni', aspect: 'landscape',
    caption: 'Indian breakfast — second service', note: 'Fresh from the fire',
    gradient: 'linear-gradient(160deg, #1c1408 0%, #2c2010 55%, #3a2c14 100%)',
    accentColor: 'rgba(139,107,61,0.26)',
    src: '/images/gallery/tehni/tehni-indian-breakfast-2.jpg',
  },
  {
    id: 66, category: 'Tehni', aspect: 'landscape',
    caption: 'Outdoor breakfast at Kot Kailash', note: 'Al fresco · ridge view',
    gradient: 'linear-gradient(160deg, #0c1408 0%, #141e0e 55%, #1c2a14 100%)',
    accentColor: 'rgba(46,80,38,0.32)',
    src: '/images/gallery/tehni/tehni-outdoor-breakfast.jpg',
  },
  {
    id: 67, category: 'Tehni', aspect: 'square',
    caption: 'Local produce — Kumaon farms', note: 'Seasonal · zero-distance',
    gradient: 'linear-gradient(160deg, #0e1408 0%, #161e0e 55%, #1e2c16 100%)',
    accentColor: 'rgba(46,80,38,0.3)',
    src: '/images/gallery/tehni/tehni-local-produce-1.jpg',
  },
  {
    id: 68, category: 'Tehni', aspect: 'square',
    caption: 'Local produce — second harvest', note: 'Root vegetables · Kumaon',
    gradient: 'linear-gradient(160deg, #0c1208 0%, #141c0e 55%, #1c2a14 100%)',
    accentColor: 'rgba(46,80,38,0.28)',
    src: '/images/gallery/tehni/tehni-local-produce-2.jpg',
  },
  {
    id: 69, category: 'Tehni', aspect: 'landscape',
    caption: "Mother's love — Tehni", note: 'Hand-cooked · with care',
    gradient: 'linear-gradient(160deg, #1c1208 0%, #2a1c0e 55%, #382614 100%)',
    accentColor: 'rgba(139,107,61,0.28)',
    src: '/images/gallery/tehni/tehni-mothers-love.jpg',
  },
  {
    id: 70, category: 'Tehni', aspect: 'landscape',
    caption: 'Lunch at Tehni', note: 'Midday service',
    gradient: 'linear-gradient(160deg, #181408 0%, #261e0e 55%, #342814 100%)',
    accentColor: 'rgba(139,107,61,0.24)',
    src: '/images/gallery/tehni/tehni-lunch.jpg',
  },
  {
    id: 71, category: 'Tehni', aspect: 'landscape',
    caption: 'Dining scene — Tehni', note: 'The communal table',
    gradient: 'linear-gradient(160deg, #141008 0%, #1e180e 55%, #2a2214 100%)',
    accentColor: 'rgba(139,107,61,0.22)',
    src: '/images/gallery/tehni/tehni-dining-scene-1.jpg',
  },
  {
    id: 72, category: 'Tehni', aspect: 'landscape',
    caption: 'Dining scene — Tehni, evening', note: 'Warm light · conversation',
    gradient: 'linear-gradient(160deg, #161008 0%, #201a0e 55%, #2c2414 100%)',
    accentColor: 'rgba(139,107,61,0.22)',
    src: '/images/gallery/tehni/tehni-dining-scene-2.jpg',
  },

  // ── Experiences (8) ───────────────────────────────────────────
  {
    id: 73, category: 'Experiences', aspect: 'landscape',
    caption: 'Picnic in the forest', note: 'Shaded grove · Tehni kitchen',
    gradient: 'linear-gradient(160deg, #0c1a08 0%, #142210 55%, #1e3016 100%)',
    accentColor: 'rgba(46,80,38,0.32)',
    src: '/images/gallery/experience/picnic-in-the-forest.jpg',
  },
  {
    id: 74, category: 'Experiences', aspect: 'landscape',
    caption: 'Private experiences for two', note: 'Curated · intimate',
    gradient: 'linear-gradient(160deg, #141008 0%, #201a0c 55%, #2c2414 100%)',
    accentColor: 'rgba(139,107,61,0.24)',
    src: '/images/gallery/experience/private-experiences-couple.jpg',
  },
  {
    id: 75, category: 'Experiences', aspect: 'landscape',
    caption: 'Outdoor cooking — open fire', note: 'Forest kitchen · Kot Kailash',
    gradient: 'linear-gradient(160deg, #180e06 0%, #261808 55%, #34220e 100%)',
    accentColor: 'rgba(155,78,28,0.36)',
    src: '/images/gallery/experience/outdoor-cooking-experience.jpg',
  },
  {
    id: 76, category: 'Experiences', aspect: 'landscape',
    caption: 'Culinary class — Tehni kitchen', note: 'Learn · cook · eat',
    gradient: 'linear-gradient(160deg, #1a1208 0%, #2a1e10 55%, #382a16 100%)',
    accentColor: 'rgba(139,107,61,0.28)',
    src: '/images/gallery/experience/culinary-class-kot-kailash.jpg',
  },
  {
    id: 77, category: 'Experiences', aspect: 'landscape',
    caption: 'Yoga at Kot Kailash', note: 'Morning practice · ridge view',
    gradient: 'linear-gradient(160deg, #0e1a0c 0%, #162410 55%, #1e3016 100%)',
    accentColor: 'rgba(46,80,38,0.3)',
    src: '/images/gallery/experience/yoga-at-kot-kailash.jpg',
  },
  {
    id: 78, category: 'Experiences', aspect: 'landscape',
    caption: 'Chholiya dance of Kumaon', note: 'Traditional performance · celebrations',
    gradient: 'linear-gradient(160deg, #1a1008 0%, #2c1c0c 55%, #3c2810 100%)',
    accentColor: 'rgba(155,98,42,0.3)',
    src: '/images/gallery/experience/chholiya-dance-kumaon.jpeg',
  },
  {
    id: 79, category: 'Experiences', aspect: 'landscape',
    caption: 'Cricket at Kot Kailash', note: 'The ridge ground · afternoons',
    gradient: 'linear-gradient(160deg, #0c1808 0%, #14220e 55%, #1c2e16 100%)',
    accentColor: 'rgba(46,80,38,0.28)',
    src: '/images/gallery/experience/cricket-at-kot-kailash.jpg',
  },
  {
    id: 80, category: 'Experiences', aspect: 'landscape',
    caption: 'Wanderlust — the ridge trails', note: 'No signboards · just walk',
    gradient: 'linear-gradient(160deg, #0e1a0c 0%, #182812 55%, #243618 100%)',
    accentColor: 'rgba(46,80,38,0.32)',
    src: '/images/gallery/experience/wanderlust-kot-kailash.jpg',
  },

  // ── Wildlife (7) ──────────────────────────────────────────────
  {
    id: 81, category: 'Wildlife', aspect: 'portrait',
    caption: 'Black-headed Jay', note: 'Garrulus lanceolatus · resident',
    gradient: 'linear-gradient(160deg, #081018 0%, #101820 55%, #182028 100%)',
    accentColor: 'rgba(42,80,139,0.24)',
    src: '/images/gallery/wildlife/black-headed-jay.jpg',
  },
  {
    id: 82, category: 'Wildlife', aspect: 'portrait',
    caption: 'Ferruginous Flycatcher', note: 'Muscicapa ferruginea · passage migrant',
    gradient: 'linear-gradient(160deg, #181008 0%, #261a0e 55%, #342414 100%)',
    accentColor: 'rgba(155,98,42,0.3)',
    src: '/images/gallery/wildlife/ferruginous-flycatcher.jpeg',
  },
  {
    id: 83, category: 'Wildlife', aspect: 'portrait',
    caption: 'Himalayan Bulbul', note: 'Pycnonotus leucogenys · common on ridge',
    gradient: 'linear-gradient(160deg, #0c1008 0%, #14180e 55%, #1c2214 100%)',
    accentColor: 'rgba(46,80,38,0.28)',
    src: '/images/gallery/wildlife/himalayan-bulbul.jpg',
  },
  {
    id: 84, category: 'Wildlife', aspect: 'portrait',
    caption: 'Himalayan Woodpecker', note: 'Dendrocopos himalayensis · deciduous forest',
    gradient: 'linear-gradient(160deg, #0e1208 0%, #161c0e 55%, #1e2616 100%)',
    accentColor: 'rgba(46,80,38,0.3)',
    src: '/images/gallery/wildlife/himalayan-woodpecker.png',
  },
  {
    id: 85, category: 'Wildlife', aspect: 'landscape',
    caption: 'Jageshwar Temple complex', note: '124 temples · 9th century · 10 km',
    gradient: 'linear-gradient(160deg, #101418 0%, #181c24 55%, #20262e 100%)',
    accentColor: 'rgba(139,107,61,0.12)',
    src: '/images/gallery/wildlife/jageshwar-temple.jpeg',
  },
  {
    id: 86, category: 'Wildlife', aspect: 'portrait',
    caption: 'Stripe-breasted Woodpecker', note: 'Dendrocopos atratus · forest canopy',
    gradient: 'linear-gradient(160deg, #0e1208 0%, #161c0e 55%, #1e2a16 100%)',
    accentColor: 'rgba(46,80,38,0.28)',
    src: '/images/gallery/wildlife/stripe-breasted-woodpecker.png',
  },
  {
    id: 87, category: 'Wildlife', aspect: 'portrait',
    caption: 'White-throated Laughingthrush', note: 'Pterorhinus albogularis · garrulous flocks',
    gradient: 'linear-gradient(160deg, #100e08 0%, #181610 55%, #221e18 100%)',
    accentColor: 'rgba(139,107,61,0.2)',
    src: '/images/gallery/wildlife/white-throated-laughingthrush.jpg',
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
  const [showTop, setShowTop] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const filtered = activeCategory === 'All'
    ? IMAGES
    : IMAGES.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setImageLoading(true);
    setLightboxIndex(index);
  };
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevImage = useCallback(() => {
    setImageLoading(true);
    setLightboxIndex(prev => prev === null ? null : (prev - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  const nextImage = useCallback(() => {
    setImageLoading(true);
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
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
          padding: 40px 80px 24px;
        }
        .gl-lb-content {
          max-width: 1400px; width: 100%;
          animation: galleryLbIn 0.3s ease both;
          display: flex; flex-direction: column;
        }
        .gl-lb-img {
          width: 100%; height: 82vh;
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
        .gl-spinner {
          width: 32px; height: 32px;
          border: 2px solid rgba(255,255,255,0.1);
          border-top-color: var(--gold);
          border-radius: 50%;
          animation: glSpin 0.8s linear infinite;
        }
        @keyframes glSpin { to { transform: rotate(360deg); } }

        /* ─── Scroll-to-top ──────────────────────────────────── */
        @keyframes glTopIn {
          from { opacity: 0; transform: translateY(12px) scale(0.88); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @keyframes glTopOut {
          from { opacity: 1; transform: translateY(0)    scale(1); }
          to   { opacity: 0; transform: translateY(12px) scale(0.88); }
        }
        .gl-top-btn {
          position: fixed;
          bottom: 36px;
          left: 36px;
          z-index: 200;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--ink);
          border: 1px solid rgba(139,107,61,0.35);
          color: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 24px rgba(0,0,0,0.28);
          transition: background 0.22s ease, border-color 0.22s ease, color 0.22s ease, transform 0.22s ease;
          touch-action: manipulation;
        }
        .gl-top-btn:hover {
          background: rgba(139,107,61,0.12);
          border-color: var(--gold);
          transform: translateY(-3px);
        }
        .gl-top-btn:focus-visible {
          outline: 2px solid var(--gold);
          outline-offset: 3px;
        }
        .gl-top-btn--visible { animation: glTopIn  0.32s cubic-bezier(0.34,1.56,0.64,1) both; }
        .gl-top-btn--hidden  { animation: glTopOut 0.22s ease both; pointer-events: none; }
        @media (prefers-reduced-motion: reduce) {
          .gl-top-btn--visible, .gl-top-btn--hidden { animation: none !important; }
          .gl-top-btn--hidden { opacity: 0; pointer-events: none; }
        }
        @media (max-width: 640px) {
          .gl-top-btn { bottom: 24px; left: 20px; width: 44px; height: 44px; }
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
            Gallery
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
            <line x1="0.5" y1="0" x2="0.5" y2="44" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
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
                      {...(i < 4 ? { priority: true } : { loading: 'lazy' as const })}
                      quality={85}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
            }}>— Pushkar Singh Negi, Co Founder</span>
          </div>
        </RevealWrapper>
      </section>

      <Reserve />

      {/* ─── Scroll-to-top ────────────────────────────────────── */}
      <button
        className={`gl-top-btn ${showTop ? 'gl-top-btn--visible' : 'gl-top-btn--hidden'}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true">
          <path d="M7 12V2M2 7l5-5 5 5" />
        </svg>
      </button>

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
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>

          {filtered.length > 1 && (
            <>
              <button className="gl-lb-nav gl-lb-prev" onClick={prevImage} aria-label="Previous photograph">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 2L4 7l5 5" />
                </svg>
              </button>
              <button className="gl-lb-nav gl-lb-next" onClick={nextImage} aria-label="Next photograph">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 2l5 5-5 5" />
                </svg>
              </button>
            </>
          )}

          <div className="gl-lb-content">
            {/* Image */}
            <div className="gl-lb-img" style={{ background: activeImg.gradient }}>
              {imageLoading && (
                <div style={{
                  position: 'absolute', inset: 0, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  zIndex: 1,
                }}>
                  <div className="gl-spinner" />
                </div>
              )}
              <Image
                key={activeImg.src}
                src={activeImg.src}
                alt={activeImg.caption}
                fill
                quality={90}
                sizes="(max-width: 680px) 100vw, 1400px"
                style={{ objectFit: 'contain', opacity: imageLoading ? 0 : 1, transition: 'opacity 0.3s ease' }}
                onLoad={() => setImageLoading(false)}
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
