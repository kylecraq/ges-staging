import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export const STATIC_PATHS = ['/', '/privacy'];

const isProduction = process.env.VERCEL_ENV === 'production';
const VERCEL_HOST = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;

const BASE_URL = isProduction && VERCEL_HOST
  ? `https://${VERCEL_HOST}`
  : 'https://www.goelectricstations.it';

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
        changeFrequency: path === '/' ? 'weekly' : 'monthly',
        priority: path === '/' ? 1.0 : 0.8,
      });
    }
  }

  sitemapEntries.push({
    url: BASE_URL,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.3,
  });

  return sitemapEntries;
}