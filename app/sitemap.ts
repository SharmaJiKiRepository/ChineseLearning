import { MetadataRoute } from 'next';
import { situations } from '@/data/situations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://learnmandarinfree.vercel.app';

  const routes = [
    '',
    '/dashboard',
    '/review',
    '/hsk',
    '/hsk/1',
    '/hsk/2',
    '/hsk/3',
    '/hsk/4',
    '/chat',
    '/situations',
    '/song'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const situationRoutes = situations.map((sit) => ({
    url: `${baseUrl}/situations/${sit.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...situationRoutes];
}
