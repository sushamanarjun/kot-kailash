import type { Metadata } from 'next';
import { buildMetadata, hotelJsonLd, localBusinessJsonLd } from '@/lib/seo';
import JsonLd from '@/components/ui/JsonLd';
import Hero from '@/components/sections/Hero';
import Manifesto from '@/components/sections/Manifesto';
import FullBleedImage from '@/components/sections/FullBleedImage';
import Rooms from '@/components/sections/Rooms';
import Journey from '@/components/sections/Journey';
import Experiences from '@/components/sections/Experiences';
import Tehni from '@/components/sections/Tehni';
import TwoUp from '@/components/sections/TwoUp';
import SacredArc from '@/components/sections/SacredArc';
import Seasons from '@/components/sections/Seasons';
import Library from '@/components/sections/Library';
import AltitudeNote from '@/components/sections/AltitudeNote';
import Founders from '@/components/sections/Founders';
import Testimonials from '@/components/sections/Testimonials';
import Sustainability from '@/components/sections/Sustainability';
import Reserve from '@/components/sections/Reserve';

export const metadata: Metadata = buildMetadata({
  title: 'Kot Kailash Kumaon — A Heritage Ridge Sanctuary at 7,800 Feet',
  description:
    "A century-old Kumaoni house on the Shaukiyathal ridge at 7,800 feet. Eight keys across three houses. Founded by veterans of India's finest hospitality. Almora, Uttarakhand.",
  path: '/',
  ogImage: '/og-default.jpg',
  keywords: [
    'heritage hotel Almora',
    'boutique hotel Kumaon',
    'Shaukiyathal',
    'luxury stay Uttarakhand',
    'Kot Kailash',
    'heritage property Almora',
    'Kumaoni house',
    'mountain retreat 7800 feet',
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={hotelJsonLd} />
      <JsonLd data={localBusinessJsonLd} />

      <Hero />
      <Manifesto />
      <FullBleedImage
        src="/images/ridge-fullbleed.jpg"
        alt="The Shaukiyathal ridge at dawn — Kot Kailash, Almora, Uttarakhand"
        caption="The Shaukiyathal Ridge · 7,800 Feet"
      />
      <Rooms />
      <Journey />
      <Experiences />
      <Tehni />
      <TwoUp />
      <SacredArc />
      <Seasons />
      <Library />
      <AltitudeNote />
      <Founders />
      <Testimonials />
      <Sustainability />
      <Reserve />
    </>
  );
}
