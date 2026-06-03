import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateMetadata as buildMetadata, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Escapamentos e Catalisadores em Florianópolis | Mecânica Marinale',
  description:
    'Especialistas em escapamentos e catalisadores em Florianópolis há mais de 35 anos. Grande estoque de peças nacionais, instalação com garantia e atendimento no mesmo dia.',
  path: '/escapamentos-catalisadores',
});

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Escapamentos e Catalisadores',
  serviceType: 'Reparo, troca e venda de escapamentos e catalisadores',
  description:
    'Serviços especializados em escapamentos e catalisadores para consumidores em Florianópolis.',
  url: `${SITE_URL}/escapamentos-catalisadores`,
  provider: {
    '@type': 'AutoRepair',
    name: 'Mecânica Marinale',
    url: SITE_URL,
  },
  areaServed: { '@type': 'City', name: 'Florianópolis' },
};

export default function EscapamentosCatalisadoresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: 'Início', href: '/' },
          { label: 'Escapamentos e Catalisadores', href: '/escapamentos-catalisadores' },
        ]}
      />

      {/* Hero da página */}
      <section className="section bg-marinale-azul text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="badge-amarelo">Especialidade da casa há 35+ anos</span>
          <h1 className="mt-4 text-white">
            Escapamentos e catalisadores em Florianópolis
          </h1>
          <p className="mt-5 font-corpo text-lg text-white/80">
            Grande estoque de peças nacionais, instalação com garantia e equipe especializada para resolver o seu problema no mesmo dia.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton buttonLocation="escapamentos-hero" size="lg">
              Solicitar orçamento
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Serviços ao consumidor */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="mb-10 max-w-2xl">
            <span className="badge-amarelo">O que oferecemos</span>
            <h2 className="mt-4">Soluções para o seu veículo</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: '🔧',
                titulo: 'Estoque Próprio de Peças',
                texto:
                  'Temos estoque próprio de escapamentos e catalisadores. Sem esperar pedido — resolvemos seu problema na hora.',
              },
              {
                icon: '🔄',
                titulo: 'Troca de escapamento',
                texto:
                  'Amplo estoque de escapamentos para todas as marcas e modelos — nacionais e importados. Instalação no mesmo dia.',
              },
              {
                icon: '♻️',
                titulo: 'Catalisadores',
                texto:
                  'Catalisadores originais e alternativos de qualidade. Diagnóstico rápido para saber se é necessária a troca.',
              },
              {
                icon: '🔍',
                titulo: 'Diagnóstico de ruído',
                texto:
                  'Identificamos a origem do ruído e indicamos a solução mais econômica — sem empurrar serviço desnecessário.',
              },
            ].map((item) => (
              <div key={item.titulo} className="flex gap-5 rounded-xl bg-marinale-cinza p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-marinale-amarelo text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl">{item.titulo}</h3>
                  <p className="mt-2 font-corpo text-sm text-gray-600">{item.texto}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <CTAButton buttonLocation="escapamentos-servicos-cta" size="lg">
              Agendar serviço
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
