import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicoPage from '@/components/ServicoPage';
import { generateMetadata as buildMetadata } from '@/lib/seo';
import { getServicoBySlug } from '@/lib/servicos';

const SLUG = 'amortecedores';

export const metadata: Metadata = buildMetadata({
  title: 'Troca de Amortecedores em Florianópolis | Mecânica Marinale',
  description:
    'Diagnóstico e troca de amortecedores dianteiros e traseiros em Florianópolis. Mais segurança, conforto e estabilidade para o seu veículo.',
  path: `/servicos/${SLUG}`,
});

export default function Page() {
  const servico = getServicoBySlug(SLUG);
  if (!servico) notFound();
  return <ServicoPage servico={servico} />;
}
