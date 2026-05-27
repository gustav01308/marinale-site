import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicoPage from '@/components/ServicoPage';
import { generateMetadata as buildMetadata } from '@/lib/seo';
import { getServicoBySlug } from '@/lib/servicos';

const SLUG = 'injecao-eletronica';

export const metadata: Metadata = buildMetadata({
  title: 'Injeção Eletrônica em Florianópolis | Mecânica Marinale',
  description:
    'Diagnóstico por scanner, limpeza de bicos e correção de falhas de injeção eletrônica em Florianópolis. Equipamentos modernos e técnicos especializados.',
  path: `/servicos/${SLUG}`,
});

export default function Page() {
  const servico = getServicoBySlug(SLUG);
  if (!servico) notFound();
  return <ServicoPage servico={servico} />;
}
