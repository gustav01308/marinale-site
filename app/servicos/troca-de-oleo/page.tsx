import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicoPage from '@/components/ServicoPage';
import { generateMetadata as buildMetadata } from '@/lib/seo';
import { getServicoBySlug } from '@/lib/servicos';

const SLUG = 'troca-de-oleo';

export const metadata: Metadata = buildMetadata({
  title: 'Troca de Óleo em Florianópolis | Mecânica Marinale',
  description:
    'Troca de óleo e filtros com óleos sintéticos e minerais em Florianópolis. Atendimento rápido, peças de qualidade e verificação gratuita de fluidos.',
  path: `/servicos/${SLUG}`,
});

export default function Page() {
  const servico = getServicoBySlug(SLUG);
  if (!servico) notFound();
  return <ServicoPage servico={servico} />;
}
