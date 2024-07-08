import type { MetadataRoute } from 'next';
import DOMAIN_URL from '@/lib/constants/domain';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: DOMAIN_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${DOMAIN_URL}/intro`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${DOMAIN_URL}/search`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
