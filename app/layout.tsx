import type { Metadata, Viewport } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnimationProvider from '@/components/AnimationProvider';
import { GTM_ID, GA_MEASUREMENT_ID } from '@/lib/analytics';
import { BUSINESS_INFO, SITE_URL, SITE_NAME } from '@/lib/seo';

// Carregamento das fontes via next/font/google.
// Variáveis CSS --font-titulo e --font-corpo são consumidas pelo Tailwind.
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-titulo',
  display: 'swap',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-corpo',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0b0f3b',
  width: 'device-width',
  initialScale: 1,
};

// Metadata padrão do site — páginas individuais sobrescrevem via generateMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Oficina mecânica em Florianópolis`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Oficina mecânica em Florianópolis com mais de 35 anos de experiência. Especialistas em escapamentos, catalisadores, freios, suspensão e mecânica geral.',
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: true, email: true, address: true },
};

// LocalBusiness + AutoRepair — schema raiz, herdado em todas as páginas.
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'AutoRepair'],
  name: SITE_NAME,
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
  telephone: BUSINESS_INFO.phone,
  email: BUSINESS_INFO.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS_INFO.street,
    addressLocality: BUSINESS_INFO.city,
    addressRegion: BUSINESS_INFO.state,
    postalCode: BUSINESS_INFO.zip,
    addressCountry: BUSINESS_INFO.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS_INFO.latitude,
    longitude: BUSINESS_INFO.longitude,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '12:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '13:30',
      closes: '18:00',
    },
  ],
  areaServed: { '@type': 'City', name: 'Florianópolis' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${barlowCondensed.variable} ${barlow.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Schema raiz LocalBusiness + AutoRepair */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />

        {/* Google Tag Manager — substituir GTM-XXXXXXX pelo ID real */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>

        {/* GA4 — substituir G-XXXXXXXXXX pelo ID real */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
      </head>
      <body>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Header />
        {/* pt-20 compensa o header fixed branco (≈80px) para páginas internas.
            A home page usa -mt-20 no hero para cancelar esse offset e criar o efeito 100vh. */}
        <main id="conteudo" className="pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
        {/* Ativa animações de entrada na viewport para elementos com data-animate */}
        <AnimationProvider />
      </body>
    </html>
  );
}
