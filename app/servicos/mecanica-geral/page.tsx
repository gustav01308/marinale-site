import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicoPage from '@/components/ServicoPage';
import { generateMetadata as buildMetadata } from '@/lib/seo';
import { getServicoBySlug } from '@/lib/servicos';

const SLUG = 'mecanica-geral';

export const metadata: Metadata = buildMetadata({
  title: 'Mecânica Geral em Florianópolis | Mecânica Marinale',
  description:
    'Diagnóstico, manutenção e reparos de mecânica geral em Florianópolis. Atendemos todas as marcas com 35+ anos de experiência. Agende pelo WhatsApp.',
  path: `/servicos/${SLUG}`,
});

export default function Page() {
  const servico = getServicoBySlug(SLUG);
  if (!servico) notFound();
  return <ServicoPage servico={servico} />;
}
