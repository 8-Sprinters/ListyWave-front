import DOMAIN_URL from '@/lib/constants/domain';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${DOMAIN_URL}/sitemap.xml`,
  };
}
