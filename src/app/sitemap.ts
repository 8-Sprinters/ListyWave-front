import type { MetadataRoute } from 'next';
import DOMAIN_URL from '@/lib/constants/domain';
// import getTrendingLists from './_api/explore/getTrendingLists';
import { TrendingListType } from '@/lib/types/exploreType';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const result: TrendingListType[] = await fetch(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/lists/explore`).then((res) =>
    res.json()
  );

  const trendingLists: MetadataRoute.Sitemap = result.map((list) => ({
    url: `${DOMAIN_URL}/list/${list.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

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
    ...trendingLists,
  ];
}
