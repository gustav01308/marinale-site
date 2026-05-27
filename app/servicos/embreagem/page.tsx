import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicoPage from '@/components/ServicoPage';
import { generateMetadata as buildMetadata } from '@/lib/seo';
import { getServicoBySlug } from '@/lib/servicos';

const SLUG = 'embreagem';

export const metadata: Metadata = buildMetadata({
  title: 'Troca de Embreagem em Florianópolis | Mecânica Marinale',
  description:
    'Troca e regulagem de embreagem em Florianópolis. Kit completo (disco, platô e rolamento) com peças de qualidade e garantia de serviço.',
  path: `/servicos/${SLUG}`,
});

export default function Page() {
  const servico = getServicoBySlug(SLUG);
  if (!servico) notFound();
  return <ServicoPage servico={servico} />;
}
