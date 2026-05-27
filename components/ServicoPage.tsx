import Link from 'next/link';
import CTAButton from './CTAButton';
import Breadcrumbs from './Breadcrumbs';
import { SITE_URL } from '@/lib/seo';
import type { Servico } from '@/lib/servicos';

// Layout reutilizado por todas as páginas de serviço.
// Inclui schema.org Service e CTA padronizado.
type Props = { servico: Servico };

export default function ServicoPage({ servico }: Props) {
  const url = `${SITE_URL}/servicos/${servico.slug}`;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: servico.titulo,
    serviceType: servico.titulo,
    description: servico.descricao,
    url,
    provider: {
      '@type': 'AutoRepair',
      name: 'Mecânica Marinale',
      url: SITE_URL,
    },
    areaServed: { '@type': 'City', name: 'Florianópolis' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: 'Início', href: '/' },
          { label: 'Serviços', href: '/servicos' },
          { label: servico.titulo, href: `/servicos/${servico.slug}` },
        ]}
      />

      <section className="section">
        <div className="container mx-auto grid gap-10 lg:grid-cols-3">
          {/* Conteúdo principal */}
          <div className="lg:col-span-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-marinale-amarelo text-3xl">
              {servico.icone}
            </div>
            <h1 className="mt-4">{servico.titulo} em Florianópolis</h1>
            <p className="mt-3 font-corpo text-lg text-gray-700">{servico.resumo}</p>

            <div className="prose-marinale mt-8">
              <p>{servico.descricao}</p>

              <h2>O que está incluso</h2>
              <ul>
                {servico.beneficios.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <h2>Por que escolher a Marinale</h2>
              <p>
                São mais de 35 anos cuidando de carros em Florianópolis com
                atendimento honesto, peças de qualidade e mão de obra
                especializada. Venha fazer um diagnóstico rápido.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton buttonLocation={`servico-${servico.slug}`} size="lg">
                Agendar este serviço
              </CTAButton>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center rounded-lg border-2 border-marinale-azul px-6 py-3 font-titulo text-base font-bold uppercase tracking-wide text-marinale-azul transition-colors hover:bg-marinale-azul hover:text-white"
              >
                Ver outros serviços
              </Link>
            </div>
          </div>

          {/* Aside — informações de atendimento */}
          <aside className="rounded-xl bg-marinale-cinza p-6">
            <h3 className="text-xl">Atendimento</h3>
            <ul className="mt-3 space-y-2 font-corpo text-sm text-gray-700">
              <li>
                <strong>Horário:</strong><br />
                Seg a Sex: 8h às 12h e 13h30 às 18h
              </li>
              <li>
                <strong>Endereço:</strong><br />
                Rua Lauro Linhares, 1693 — Trindade<br />
                Florianópolis/SC
              </li>
              <li>
                <strong>Telefone:</strong><br />
                <a href="tel:+554832341583" className="text-marinale-azul hover:text-marinale-verde">
                  (48) 3234-1583
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <CTAButton
                buttonLocation={`servico-${servico.slug}-aside`}
                fullWidth
              >
                Falar agora
              </CTAButton>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
