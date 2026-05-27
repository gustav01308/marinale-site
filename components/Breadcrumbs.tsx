import Link from 'next/link';
import { SITE_URL } from '@/lib/seo';

// Breadcrumbs com schema.org BreadcrumbList embutido para SEO.
export type Crumb = { label: string; href: string };

type Props = { items: Crumb[] };

export default function Breadcrumbs({ items }: Props) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      item: `${SITE_URL}${item.href === '/' ? '' : item.href}`,
    })),
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-gray-100 bg-marinale-cinza py-3 font-corpo text-sm text-gray-600"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="container mx-auto flex flex-wrap items-center gap-1">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
              {idx > 0 && <span className="text-gray-400">/</span>}
              {isLast ? (
                <span aria-current="page" className="font-semibold text-marinale-azul">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-marinale-verde">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
