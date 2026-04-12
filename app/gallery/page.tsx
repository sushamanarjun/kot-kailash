import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = buildMetadata({
  title: 'Gallery | Kot Kailash Heritage Retreat, Kumaon',
  description:
    'Photographs of Kot Kailash — the ridge, the rooms, the forest, and the light at 7,800 feet. Shaukiyathal, Almora, Uttarakhand.',
  path: '/gallery',
  keywords: [
    'Kot Kailash photos',
    'Kumaon heritage retreat images',
    'Shaukiyathal ridge photographs',
    'Almora forest retreat gallery',
    'Himalayan views Uttarakhand',
  ],
});

export default function GalleryPage() {
  return <GalleryClient />;
}
