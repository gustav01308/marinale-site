import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import ServicosCarousel from '@/components/ServicosCarousel';
import AvaliacoesCarousel from '@/components/AvaliacoesCarousel';
import { generateMetadata as buildMetadata, BUSINESS_INFO } from '@/lib/seo';
import { servicos } from '@/lib/servicos';
import { getAllPosts, type BlogPost } from '@/lib/blog';

export const metadata: Metadata = buildMetadata({
  title: 'Mecânica em Florianópolis | Mecânica Marinale',
  description:
    'Oficina mecânica em Florianópolis com mais de 35 anos. Diagnóstico rápido, atendimento honesto e peças com garantia. Agende pelo WhatsApp.',
  path: '/',
});

export default function HomePage() {
  const postsRecentes = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ───────── 1. HERO (100vh) ───────────────────────────────────────
          id="top" para o link "INÍCIO" do header rolar ao topo.
          -mt-20 cancela o pt-20 do <main> → hero começa no topo do viewport.
      ──────────────────────────────────────────────────────────────────── */}
      <section id="top" className="relative -mt-20 h-screen overflow-hidden">
        <Image
          src="/imagens/imagem-mecanico.jpg"
          alt="Mecânico trabalhando na Mecânica Marinale"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1a1f5e]/80" />

        <div className="relative z-10 flex h-full flex-col justify-center">
          <div className="container mx-auto pt-20">
            <div className="max-w-2xl">
              <span className="badge-amarelo">Mais de 35 anos em Florianópolis</span>

              <h1 className="mt-4 text-white">
                Mecânica de confiança para o seu carro
              </h1>
              <p className="mt-5 font-corpo text-lg leading-relaxed text-white/80">
                Diagnóstico rápido, atendimento honesto e peças com garantia.
                Oficina completa no coração de Florianópolis.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton buttonLocation="hero-home" size="lg">
                  CONVERSAR NO WHATSAPP
                </CTAButton>
                <Link
                  href="/servicos"
                  className="inline-flex items-center justify-center rounded border-2 border-white px-8 py-4 font-titulo text-lg font-bold uppercase tracking-wide text-white transition-all duration-150 hover:bg-white hover:text-marinale-azul hover:-translate-y-px"
                >
                  VER SERVIÇOS
                </Link>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ───────── 2. POR QUE ESCOLHER A MARINALE ────────────────────── */}
      <section className="section bg-white">
        <div className="container mx-auto grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-[420px] overflow-hidden rounded-xl shadow-md">
            <Image
              src="/imagens/imagem-mecanico.jpg"
              alt="Equipe da Mecânica Marinale"
              fill
              className="object-cover object-center"
            />
          </div>

          <div>
            <span className="badge-amarelo">Por que escolher a Marinale</span>
            <h2 className="mt-4">Transparência do diagnóstico até a entrega do carro</h2>
            <ul className="mt-6 space-y-4">
              {[
                'Mais de 35 anos atendendo em Florianópolis',
                'Diagnóstico rápido e peças de primeira linha',
                'Serviço com qualidade e garantia',
                'Honestidade e profissionalismo em cada atendimento',
                'Agendamento rápido pelo WhatsApp',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-corpo text-gray-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-marinale-amarelo text-xs font-bold text-marinale-azul">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CTAButton buttonLocation="home-diferenciais" size="lg">
                CONVERSAR NO WHATSAPP
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 4. NOSSOS SERVIÇOS (carrossel + CTA WhatsApp) ─────── */}
      <section className="section bg-marinale-cinza">
        <div className="container mx-auto">
          <div className="mb-10 max-w-2xl">
            <span className="badge-amarelo">O que fazemos</span>
            <h2 className="mt-4">Nossos serviços</h2>
            <p className="mt-3 font-corpo text-lg text-marinale-cinza-medio">
              Do óleo ao motor, cuidamos de tudo com a experiência de quem faz isso
              há mais de 35 anos.
            </p>
          </div>
          <ServicosCarousel items={servicos} />

          {/* CTA abaixo do carrossel */}
          <div className="mt-10 text-center">
            <p className="mb-4 font-corpo text-marinale-cinza-medio">
              Não encontrou o que procura? Fale conosco!
            </p>
            <CTAButton buttonLocation="servicos-home" size="lg">
              CONVERSAR NO WHATSAPP
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ───────── 5. AVALIAÇÕES DOS CLIENTES (fundo branco) ────────── */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <span className="badge-amarelo">Clientes satisfeitos</span>
            <h2 className="mt-4 text-[#1a1f5e]">O que dizem nossos clientes</h2>
            <div className="mt-4 flex items-center justify-center gap-3">
              <GoogleLogo />
              <span className="font-corpo text-sm text-gray-600">Avaliações Google</span>
              <div className="flex gap-0.5" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-marinale-amarelo" />
                ))}
              </div>
            </div>
          </div>
          <AvaliacoesCarousel />
        </div>
      </section>

      {/* ───────── 7. ÚLTIMAS DO BLOG ───────────────────────────────── */}
      <section className="section bg-marinale-cinza">
        <div className="container mx-auto">
          <div className="mb-10">
            <span className="badge-amarelo">Dicas e novidades</span>
            <h2 className="mt-4">Últimas do Blog</h2>
            <p className="mt-3 font-corpo text-lg text-marinale-cinza-medio">
              Conteúdo prático para cuidar melhor do seu carro.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {postsRecentes.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded border-2 border-marinale-azul px-8 py-3 font-titulo text-sm font-bold uppercase tracking-wide text-marinale-azul transition-colors hover:bg-marinale-azul hover:text-white"
            >
              VER TODOS OS ARTIGOS →
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── 8. MAPA + AGENDAMENTO (colunas de mesma altura) ───── */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">

            {/* Coluna esquerda: Google Maps embed — flex column para iframe preencher altura */}
            <div
              className="overflow-hidden rounded-2xl shadow-md"
              style={{ flex: '55 1 0%', minHeight: '420px', display: 'flex', flexDirection: 'column' }}
            >
              <iframe
                src="https://www.google.com/maps?q=Rua+Lauro+Linhares,+1693+-+Trindade,+Florian%C3%B3polis+-+SC&output=embed"
                width="100%"
                style={{ border: 0, flex: 1, display: 'block', minHeight: '420px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Mecânica Marinale"
                allowFullScreen
              />
            </div>

            {/* Coluna direita: card de localização + agendamento */}
            <div className="flex flex-col justify-center rounded-2xl bg-white p-10 shadow-md" style={{ flex: '45 1 0%' }}>
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-1 h-6 w-6 shrink-0 text-marinale-amarelo"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.43-4.797 3.43-8.127a8.25 8.25 0 00-16.5 0c0 3.33 1.487 6.048 3.43 8.127a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-xl">Como chegar até nós</h3>
                  <p className="mt-1 font-corpo text-gray-700">
                    {BUSINESS_INFO.street}<br />
                    Trindade, Florianópolis — SC
                  </p>
                  <p className="mt-1 font-corpo text-sm text-gray-500">
                    Ao lado da Farmácia Panvel
                  </p>
                  <p className="mt-2 font-corpo text-sm text-gray-600">
                    Seg a Sex: 8h às 12h e 13h30 às 18h
                  </p>
                  <p className="mt-1 font-corpo text-sm">
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="font-semibold text-marinale-azul hover:text-marinale-verde">
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <div>
                <h4 className="text-marinale-verde">Agende sua visita</h4>
                <p className="mt-1 font-corpo text-sm text-gray-600">
                  Segunda a sexta — 8h às 12h e 13h30 às 18h
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <CTAButton buttonLocation="mapa-cta" size="lg" fullWidth>
                    CONVERSAR NO WHATSAPP
                  </CTAButton>
                  <a
                    href="https://maps.google.com/?q=Rua+Lauro+Linhares+1693+Trindade+Florianopolis+SC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded border-2 border-marinale-azul px-8 py-4 font-titulo text-base font-bold uppercase tracking-wide text-marinale-azul transition-colors hover:bg-marinale-azul hover:text-white"
                  >
                    ABRIR NO GOOGLE MAPS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Componentes internos da home ── */

function BlogCard({ post }: { post: BlogPost }) {
  const dataFormatada = new Date(post.date + 'T12:00:00').toLocaleDateString('pt-BR');
  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="flex h-44 items-center justify-center bg-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12 text-gray-400" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="font-titulo text-xs uppercase tracking-widest text-marinale-verde">
          {post.category}
        </span>
        <h3 className="mt-2 text-xl leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:text-marinale-verde transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 font-corpo text-sm text-gray-600">
          {post.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-corpo text-xs text-gray-400">{dataFormatada}</span>
          <Link
            href={`/blog/${post.slug}`}
            className="font-titulo text-sm font-semibold uppercase text-marinale-azul hover:underline"
          >
            Ler mais →
          </Link>
        </div>
      </div>
    </article>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}
