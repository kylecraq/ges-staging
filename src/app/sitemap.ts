import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export const STATIC_PATHS = [
  '/',
  '/privacy'
];

const VERCEL_HOST = process.env.NEXT_PUBLIC_VERCEL_URL;
const BASE_URL = VERCEL_HOST ? `https://${VERCEL_HOST}` : 'https://ges.app';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const locale of routing.locales) {
    for (const path of STATIC_PATHS) {
      const urlPath = path === '/' ? `/${locale}` : `/${locale}${path}`;

      sitemapEntries.push({
        url: `${BASE_URL}${urlPath}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: path === '/' ? 1.0 : 0.8,
      });
    }
  }

  return sitemapEntries;
}