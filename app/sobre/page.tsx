import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateMetadata as buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Sobre a Mecânica Marinale em Florianópolis | Mecânica Marinale',
  description:
    'Conheça a Mecânica Marinale: mais de 35 anos atendendo motoristas em Florianópolis com honestidade, técnica e especialidade em escapamentos.',
  path: '/sobre',
});

export default function SobrePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Início', href: '/' }, { label: 'Sobre', href: '/sobre' }]} />
      <section className="section">
        <div className="container mx-auto max-w-3xl">
          <span className="badge-amarelo">Nossa história</span>
          <h1 className="mt-4">Sobre a Mecânica Marinale</h1>
          <div className="prose-marinale mt-6">
            <p>
              Há mais de 35 anos, a Mecânica Marinale atende motoristas em
              Florianópolis com a mesma filosofia: atendimento honesto, mão de
              obra qualificada e respeito ao bolso do cliente.
            </p>
            <p>
              Localizada na Trindade, próxima à UFSC, atendemos veículos de
              todas as marcas. Nossa principal especialidade são os escapamentos
              e catalisadores, mas oferecemos toda a gama de serviços de
              mecânica geral, freios, suspensão, motor e injeção eletrônica.
            </p>
            <h2>Nosso compromisso</h2>
            <p>
              Acreditamos que confiança se constrói na transparência. Por isso
              oferecemos diagnóstico rápido, mostramos o problema e
              explicamos a solução antes de qualquer serviço.
            </p>
            <ul>
              <li>Diagnóstico rápido</li>
              <li>Orçamento sem compromisso</li>
              <li>Peças com garantia</li>
              <li>Mão de obra especializada</li>
            </ul>
          </div>

          <div className="mt-10">
            <CTAButton buttonLocation="sobre-cta" size="lg">
              Falar com a equipe
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
