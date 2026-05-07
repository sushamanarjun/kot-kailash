import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Journeys | Kot Kailash — Heritage Retreat, Kumaon',
  description: 'Journeys from Kot Kailash.',
  path: '/journeys',
});

export default function JourneysPage() {
  return (
    <section style={{
      minHeight: '100dvh',
      background: 'var(--ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <p style={{
        fontFamily: 'var(--serif)',
        fontSize: '1rem',
        fontStyle: 'italic',
        color: 'rgba(255,255,255,0.28)',
      }}>
        Coming soon.
      </p>
    </section>
  );
}
