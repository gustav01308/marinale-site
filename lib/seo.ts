import type { Metadata } from 'next';

// URL base do site — usada para construir canonicals absolutas e Open Graph
export const SITE_URL = 'https://marinale.com.br';
export const SITE_NAME = 'Mecânica Marinale';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/imagens/og-image.jpg`;

export type PageSeo = {
  title: string;
  description: string;
  path: string; // ex: "/sobre" ou "/" para home
  ogImage?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};

// generateMetadata(page) centraliza a montagem de meta tags por página.
// Garante title, description, canonical absoluto, Open Graph e Twitter Card consistentes.
export function generateMetadata(page: PageSeo): Metadata {
  const url = `${SITE_URL}${page.path === '/' ? '' : page.path}`;
  const ogImage = page.ogImage ?? DEFAULT_OG_IMAGE;

  return {
    title: page.title,
    description: page.description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
      locale: 'pt_BR',
      type: page.type ?? 'website',
      ...(page.publishedTime ? { publishedTime: page.publishedTime } : {}),
      ...(page.modifiedTime ? { modifiedTime: page.modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}

// Dados estruturados reutilizáveis para schema markup.
export const BUSINESS_INFO = {
  name: SITE_NAME,
  phone: '+554832341583',
  phoneDisplay: '(48) 3234-1583',
  email: 'marinalesc@gmail.com',
  street: 'Rua Lauro Linhares, 1693',
  neighborhood: 'Trindade',
  city: 'Florianópolis',
  state: 'SC',
  zip: '88036-002',
  country: 'BR',
  hours: 'Mo-Fr 08:00-12:00,13:30-18:00',
  latitude: -27.5969,
  longitude: -48.5495,
} as const;
