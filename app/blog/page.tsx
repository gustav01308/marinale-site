import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateMetadata as buildMetadata } from '@/lib/seo';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = buildMetadata({
  title: 'Blog de Mecânica em Florianópolis | Mecânica Marinale',
  description:
    'Dicas e novidades sobre mecânica automotiva, escapamentos, catalisadores e revisão preventiva em Florianópolis. Conteúdos da equipe Marinale.',
  path: '/blog',
});

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <Breadcrumbs items={[{ label: 'Início', href: '/' }, { label: 'Blog', href: '/blog' }]} />
      <section className="section">
        <div className="container mx-auto">
          <span className="badge-amarelo">Dicas e novidades</span>
          <h1 className="mt-4">Blog</h1>
          <p className="mt-4 max-w-2xl font-corpo text-lg text-gray-700">
            Conteúdo prático para você cuidar melhor do seu carro.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="flex flex-col rounded-xl bg-marinale-cinza p-6">
                <span className="font-titulo text-xs uppercase tracking-widest text-marinale-verde">
                  {post.category}
                </span>
                <h2 className="mt-2 text-xl">
                  <Link href={`/blog/${post.slug}`} className="hover:text-marinale-verde">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 font-corpo text-sm text-gray-600">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center justify-between font-corpo text-xs text-gray-500">
                  <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                  <span>{post.readingMinutes} min de leitura</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
