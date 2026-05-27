import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTAButton from '@/components/CTAButton';
import { generateMetadata as buildMetadata, SITE_URL } from '@/lib/seo';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';

type Props = { params: { slug: string } };

// Geração estática de cada post de blog.
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return buildMetadata({
      title: 'Post não encontrado | Mecânica Marinale',
      description: 'O post que você procura não está disponível.',
      path: `/blog/${params.slug}`,
    });
  }
  return buildMetadata({
    title: `${post.title} | Mecânica Marinale`,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.date,
    authors: [post.author],
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Mecânica Marinale',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo-marinale.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
    image: `${SITE_URL}${post.cover}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: 'Início', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article className="section">
        <div className="container mx-auto max-w-3xl">
          <span className="font-titulo text-xs uppercase tracking-widest text-marinale-verde">
            {post.category}
          </span>
          <h1 className="mt-2">{post.title}</h1>
          <p className="mt-3 font-corpo text-sm text-gray-500">
            {new Date(post.date).toLocaleDateString('pt-BR')} · {post.readingMinutes} min de leitura
          </p>

          {/* Conteúdo do post — renderizador simples de markdown */}
          <div className="prose-marinale mt-8">
            {post.content.split('\n\n').map((block, idx) => {
              if (block.startsWith('## ')) {
                return <h2 key={idx}>{block.replace('## ', '')}</h2>;
              }
              if (block.startsWith('- ')) {
                const items = block.split('\n').map((l) => l.replace(/^- /, ''));
                return (
                  <ul key={idx}>
                    {items.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={idx}>{block}</p>;
            })}
          </div>

          {/* CTA no final do post */}
          <div className="mt-10 rounded-2xl bg-marinale-azul p-8 text-center text-white">
            <h3 className="text-white">Ficou com dúvida? Fale com a gente</h3>
            <p className="mt-2 font-corpo text-white/80">
              Diagnóstico rápido e atendimento pelo WhatsApp.
            </p>
            <div className="mt-6 flex justify-center">
              <CTAButton buttonLocation={`blog-${post.slug}`} size="lg">
                Falar no WhatsApp
              </CTAButton>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
