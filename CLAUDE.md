# Mecânica Marinale — Site institucional

Projeto Next.js 14 (App Router) + Tailwind CSS + TypeScript para a Mecânica Marinale, oficina em Florianópolis com mais de 35 anos de experiência.

## Stack

- **Framework**: Next.js 14 com App Router
- **Linguagem**: TypeScript (strict, sem `any`)
- **Estilização**: Tailwind CSS 3.4
- **Fontes**: Google Fonts via `next/font/google`
  - **Títulos (h1–h4)**: Barlow Condensed — pesos 500/600/700/800
  - **Corpo**: Barlow — pesos 300/400/500/700
  - Expostas como variáveis CSS `--font-titulo` e `--font-corpo`
  - Mapeadas no Tailwind como `font-titulo` e `font-corpo`
- **Mobile-first** e totalmente responsivo

## Paleta

| Token              | Hex       | Uso                                  |
|--------------------|-----------|--------------------------------------|
| `marinale-azul`    | `#0b0f3b` | Cor principal (header, footer, h1+)  |
| `marinale-vermelho`| `#e63946` | CTAs, destaques, links               |
| `marinale-cinza`   | `#f1f3f5` | Fundo alternativo                    |

Definidas em [tailwind.config.ts](tailwind.config.ts).

## Estrutura

```
app/
  layout.tsx               -> layout raiz, fontes, GTM/GA4, schema LocalBusiness
  page.tsx                 -> home
  sobre/page.tsx
  servicos/page.tsx        -> listagem
  servicos/[slug]/page.tsx -> uma pasta para cada serviço
  escapamentos-catalisadores/page.tsx
  blog/page.tsx
  blog/[slug]/page.tsx
  contato/page.tsx
  sitemap.ts
  robots.ts
  not-found.tsx
components/
  Header.tsx
  Footer.tsx
  CTAButton.tsx            -> ÚNICO ponto de entrada de WhatsApp
  WhatsAppButton.tsx       -> botão flutuante global
  ServicoPage.tsx          -> layout reaproveitado por todas as páginas de serviço
  Breadcrumbs.tsx          -> com schema BreadcrumbList embutido
lib/
  seo.ts                   -> generateMetadata(page) centralizado
  analytics.ts             -> GTM/GA4, trackWhatsAppClick, trackPageView
  servicos.ts              -> catálogo de serviços
  blog.ts                  -> posts (placeholder — migrar para CMS futuramente)
```

## Regras invioláveis

### 1. Todo botão de WhatsApp DEVE usar `CTAButton` com `buttonLocation` preenchido

```tsx
<CTAButton buttonLocation="home-hero">Agendar</CTAButton>
```

Nunca crie um `<a href="wa.me/...">` solto. O `CTAButton` é o único componente que:
- Monta o link com UTM (`utm_source=site&utm_medium=whatsapp&utm_campaign=cta&utm_content=<buttonLocation>`)
- Dispara o evento `whatsapp_click` no GA4 com `page` e `button_location`

A única exceção é o `WhatsAppButton` flutuante (já encapsula a regra e usa `buttonLocation="floating"`).

### 2. Apenas Barlow Condensed e Barlow

Não introduza nenhuma outra fonte. Sempre use as classes `font-titulo` (Barlow Condensed) e `font-corpo` (Barlow). Headings (h1–h4) já recebem `font-titulo` automaticamente em `app/globals.css`.

### 3. Toda página precisa de metadata via `generateMetadata(page)`

Importe de `@/lib/seo` e gere a metadata no topo do arquivo de página. Isso garante title, description, canonical absoluta, Open Graph e Twitter Card consistentes.

```tsx
import { generateMetadata as buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Título da página | Mecânica Marinale',
  description: 'Descrição entre 150 e 160 caracteres.',
  path: '/rota-da-pagina',
});
```

## Como adicionar uma nova página de serviço

1. Adicione o serviço em [lib/servicos.ts](lib/servicos.ts), preenchendo `slug`, `titulo`, `resumo`, `descricao`, `beneficios` e `icone`.
2. Crie `app/servicos/<slug>/page.tsx` espelhando os arquivos existentes — basta apontar para o slug:

```tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicoPage from '@/components/ServicoPage';
import { generateMetadata as buildMetadata } from '@/lib/seo';
import { getServicoBySlug } from '@/lib/servicos';

const SLUG = 'meu-novo-servico';

export const metadata: Metadata = buildMetadata({
  title: 'Meu Serviço em Florianópolis | Mecânica Marinale',
  description: 'Descrição (150-160 caracteres) com a cidade e o benefício principal.',
  path: `/servicos/${SLUG}`,
});

export default function Page() {
  const servico = getServicoBySlug(SLUG);
  if (!servico) notFound();
  return <ServicoPage servico={servico} />;
}
```

3. O sitemap já se atualiza automaticamente — `app/sitemap.ts` lê de `lib/servicos.ts`.
4. Se quiser destacar no menu, adicione o link em `components/Header.tsx`.

## Como adicionar um novo post de blog

1. Adicione um objeto em `blogPosts` dentro de [lib/blog.ts](lib/blog.ts):

```ts
{
  slug: 'meu-novo-post',
  title: 'Título do post',
  description: 'Descrição para meta (150-160 caracteres).',
  date: '2026-05-25',          // ISO yyyy-mm-dd
  author: 'Equipe Marinale',
  cover: '/blog/imagem.jpg',   // colocar arquivo em /public/blog/
  category: 'Categoria',
  readingMinutes: 4,
  content: `Texto introdutório.

## Subtítulo
- Bullet 1
- Bullet 2

Parágrafo seguinte.`,
}
```

2. O renderer do post entende `## ` para `<h2>` e `- ` para `<li>` — separe blocos por linha em branco. Para algo mais rico, migre o blog para MDX.
3. A rota `/blog/<slug>` e o sitemap se atualizam automaticamente.

## Substituições obrigatórias antes do deploy

Procure e substitua estes placeholders por IDs reais:

| Placeholder       | Onde                       | O que é                          |
|-------------------|----------------------------|----------------------------------|
| `GTM-XXXXXXX`     | [lib/analytics.ts](lib/analytics.ts) — `GTM_ID` | ID do container do Google Tag Manager |
| `G-XXXXXXXXXX`    | [lib/analytics.ts](lib/analytics.ts) — `GA_MEASUREMENT_ID` | ID de medição do GA4 |

Ambos são consumidos pelo `app/layout.tsx`.

## Schema markup (JSON-LD)

- **Raiz (`app/layout.tsx`)**: `LocalBusiness` + `AutoRepair`
- **Páginas de serviço (`components/ServicoPage.tsx`)**: `Service` com `areaServed: Florianópolis`
- **Páginas internas (`components/Breadcrumbs.tsx`)**: `BreadcrumbList`
- **Posts do blog (`app/blog/[slug]/page.tsx`)**: `Article`

## Scripts

```bash
npm install
npm run dev     # desenvolvimento
npm run build   # build de produção (deve passar sem erros)
npm run start   # serve build
npm run lint    # ESLint Next
```

## Convenções

- TypeScript strict; sem `any`.
- Comentários em português, apenas onde o "porquê" não é óbvio pelo código.
- Mobile-first com classes responsivas Tailwind (`md:`, `lg:`).
- Imagens devem ir em `/public` (criar pastas `/public/blog`, `/public/servicos` conforme necessário).
- Mantenha CTAs com `buttonLocation` único e descritivo (ex: `home-hero`, `servicos-cta-final`, `blog-<slug>`).
