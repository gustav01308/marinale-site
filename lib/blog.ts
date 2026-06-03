// Fonte simples de posts do blog. Em produção, substituir por CMS (MDX, Sanity, etc.).

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
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
      'Aprenda a identificar os sinais de que o escapamento precisa de troca antes que vire um problema maior e mais caro.',
    date: '2026-04-12',
    author: 'Equipe Marinale',
    cover: '/blog/escapamento.jpg',
    category: 'Escapamentos',
    readingMinutes: 4,
    content: `O escapamento é um dos componentes mais expostos do veículo. Fica em contato direto com gases quentes, umidade e variações de temperatura o tempo todo — e por isso sofre desgaste natural com o uso.

O problema é que muitos motoristas só percebem que algo está errado quando o barulho já está alto ou o carro já perdeu desempenho. Nesse ponto, o estrago costuma ser maior e o conserto, mais caro.

## Sinais de que está na hora de trocar

- Ruído forte, estalos ou barulho de "pum" ao acelerar
- Fumaça preta saindo pelo escapamento
- Vibrações no assoalho ou no pedal do acelerador
- Perda de potência ou aumento no consumo de combustível
- Cheiro forte de gás ou combustível dentro do carro

Se você percebeu algum desses sintomas, não espere piorar. O escapamento com vazamento pode deixar gases tóxicos entrarem na cabine e, em casos mais graves, danificar o catalisador — uma peça bem mais cara de substituir.

## Por que não adiar a troca

Além do risco à saúde, um escapamento com problema aumenta o consumo de combustível e pode reprovar o veículo na vistoria do DETRAN. A troca no momento certo sai muito mais barato do que remediar os danos causados pela demora.

Na Mecânica Marinale, temos estoque próprio de escapamentos para as principais marcas nacionais. O diagnóstico é rápido e, na maioria dos casos, o serviço é concluído no mesmo dia.`,
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
    content: `O catalisador é uma peça obrigatória em todos os veículos fabricados no Brasil desde 1997. Ele fica instalado no sistema de escapamento e tem a função de transformar os gases poluentes gerados pelo motor em substâncias menos nocivas ao meio ambiente.

Quando o catalisador está funcionando bem, você não percebe a presença dele. Mas quando começa a falhar, os sinais aparecem e não devem ser ignorados.

## Sinais de que o catalisador pode estar com problema

- Luz de injeção ou luz de verificação do motor acesa no painel
- Aumento no consumo de combustível sem explicação aparente
- Perda de potência, especialmente em subidas ou ao ultrapassar
- Cheiro de enxofre (semelhante a ovo podre) vindo do escapamento
- Reprovação na inspeção veicular por excesso de emissões

## O que acelera o desgaste do catalisador

O catalisador tem vida útil longa quando o veículo é bem mantido. O que mais danifica a peça são velas defeituosas, bicos injetores sujos e o uso de combustível de baixa qualidade. Esses problemas fazem o motor queimar combustível de forma incompleta, sobrecarregando o catalisador com resíduos que ele não consegue processar.

## Cuidados que prolongam a vida útil

Manter a injeção eletrônica em dia, trocar as velas nos prazos certos e usar combustível de qualidade são os cuidados mais eficientes para preservar o catalisador.

Na Mecânica Marinale, fazemos o diagnóstico completo do sistema de escapamento e injeção antes de indicar a troca. Só recomendamos a substituição quando realmente necessário.`,
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
    readingMinutes: 4,
    content: `Revisão preventiva é uma das manutenções mais ignoradas pelos motoristas brasileiros — e uma das mais importantes. A lógica é simples: identificar problemas pequenos antes que virem problemas grandes e caros.

Um freio desgastado identificado na revisão custa muito menos do que um disco danificado por desgaste tardio. Uma correia dentada trocada no prazo evita uma quebra que pode destruir o motor.

## O que verificamos na revisão preventiva

- Freios: pastilhas, discos, fluido e cabos
- Suspensão: amortecedores, buchas, bandejas e terminais
- Motor: óleo, filtros, correias e mangueiras
- Sistema de arrefecimento: fluido, radiador e termostato
- Injeção eletrônica: scanner para leitura de falhas
- Elétrica: bateria, alternador e iluminação
- Pneus: pressão, desgaste e alinhamento

## Com que frequência fazer

A maioria dos fabricantes recomenda revisão a cada 10.000 km ou uma vez por ano, o que vier primeiro. Veículos mais antigos ou que rodam muito podem precisar de intervalos menores.

## Outros benefícios que pouca gente considera

Um carro bem revisado consome menos combustível, polui menos e vale mais na hora da venda. Para quem usa o carro no trabalho, a revisão em dia também evita imprevistos que atrapalham a rotina.

Na Mecânica Marinale, a revisão começa com uma escuta atenta do que você percebeu no carro. Depois fazemos o diagnóstico completo, enviamos fotos e vídeos do que encontramos e só executamos o serviço após sua aprovação.`,
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
