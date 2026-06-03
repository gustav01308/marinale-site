// Fonte simples de posts do blog. Em produção, substituir por CMS (MDX, Sanity, etc.).

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  author: string;
  cover: string;
  category: string;
  readingMinutes: number;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'quando-trocar-escapamento',
    title: 'Quando trocar o escapamento do carro?',
    description:
      'Aprenda a identificar os sinais de que o escapamento precisa de manutenção ou troca antes que vire um problema maior.',
    date: '2026-04-12',
    author: 'Equipe Marinale',
    cover: '/blog/escapamento.jpg',
    category: 'Escapamentos',
    readingMinutes: 4,
    content: `O escapamento é um dos componentes mais expostos do veículo e, por isso, sofre desgaste natural com o tempo. Identificar os sinais de problemas no escapamento garante segurança e evita gastos maiores.

## Sinais de que está na hora de trocar
- Ruído anormal e estalos altos
- Fumaça preta ou excesso de fuligem
- Vibrações no assoalho
- Perda de desempenho do motor
- Cheiro forte de combustível

## Por que não adiar
Um escapamento comprometido pode danificar o catalisador, aumentar o consumo de combustível e até gerar autuações ambientais.

Na Mecânica Marinale fazemos diagnóstico rápido e indicamos a melhor solução: troca de peças com qualidade e garantia.`,
  },
  {
    slug: 'catalisador-para-que-serve',
    title: 'Catalisador: para que serve e quando substituir',
    description:
      'Entenda o papel do catalisador no controle de emissões e os sintomas que indicam a necessidade de troca.',
    date: '2026-03-20',
    author: 'Equipe Marinale',
    cover: '/blog/catalisador.jpg',
    category: 'Catalisadores',
    readingMinutes: 5,
    content: `O catalisador é responsável por transformar gases tóxicos em substâncias menos nocivas. Sem ele, o carro emite poluentes muito acima do limite legal.

## Quando trocar
- Luz de injeção acesa no painel
- Aumento do consumo
- Perda de potência
- Cheiro de enxofre (ovo podre)
- Reprovação na inspeção veicular

## Cuidados que prolongam a vida útil
Manutenção da injeção eletrônica, velas em dia e combustível de qualidade fazem o catalisador durar muito mais.`,
  },
  {
    slug: 'revisao-preventiva-vale-a-pena',
    title: 'Revisão preventiva: por que vale a pena fazer',
    description:
      'A revisão periódica evita panes, mantém o valor de revenda e garante segurança no dia a dia.',
    date: '2026-02-08',
    author: 'Equipe Marinale',
    cover: '/blog/revisao.jpg',
    category: 'Revisão',
    readingMinutes: 3,
    content: `A revisão preventiva é o melhor investimento que um proprietário pode fazer. Ela identifica problemas antes que virem prejuízo e mantém o carro nas melhores condições.

## O que avaliamos
- Freios e suspensão
- Óleo e filtros
- Sistema de arrefecimento
- Bateria e elétrica
- Pneus e alinhamento

Agende sua revisão pelo WhatsApp e ganhe diagnóstico rápido.`,
  },
];

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
