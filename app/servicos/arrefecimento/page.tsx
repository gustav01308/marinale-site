import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicoPage from '@/components/ServicoPage';
import { generateMetadata as buildMetadata } from '@/lib/seo';
import { getServicoBySlug } from '@/lib/servicos';

const SLUG = 'arrefecimento';

export const metadata: Metadata = buildMetadata({
  title: 'Sistema de Arrefecimento em Florianópolis | Mecânica Marinale',
  description:
    'Manutenção completa do sistema de arrefecimento: radiador, mangueiras, termostato e fluido. Evite superaquecimento e danos graves ao motor.',
  path: `/servicos/${SLUG}`,
});

export default function Page() {
  const servico = getServicoBySlug(SLUG);
  if (!servico) notFound();
  return <ServicoPage servico={servico} />;
}
