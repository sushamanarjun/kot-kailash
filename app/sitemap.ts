import type { MetadataRoute } from 'next';

const base = 'https://kotkailash.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    // Stay pages
    {
      url: `${base}/stay`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/stay/kumaoni-suites`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${base}/stay/kutir-suites`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${base}/stay/kumaon-vann`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${base}/stay/family-suite`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Core pages
    {
      url: `${base}/experience`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/tehni`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/retreats`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/journeys`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${base}/about`,
      lastModified: '2026-04-15',
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${base}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/how-to-reach`,
      lastModified: '2026-04-15',
      changeFrequency: 'yearly',
      priority: 0.75,
    },
    {
      url: `${base}/journal`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.65,
    },
    {
      url: `${base}/press`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${base}/faq`,
      lastModified: '2026-04-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/cancellations`,
      lastModified: '2026-04-15',
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${base}/founders`,
      lastModified: '2026-04-15',
      changeFrequency: 'yearly',
      priority: 0.65,
    },
    // Legacy
    {
      url: `${base}/reserve`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
