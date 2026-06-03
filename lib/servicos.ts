// Catálogo central de serviços — consumido por listagem, home, carrossel e schema.
export type Servico = {
  slug: string;
  titulo: string;
  resumo: string;
  descricao: string;
  beneficios: string[];
  icone: string;
};

const beneficios = [
  'Diagnóstico rápido',
  'Mão de obra especializada',
  'Serviço com qualidade e garantia',
  'Atendimento honesto e transparente',
  'Orçamento detalhado antes de executar',
];

export const servicos: Servico[] = [
  {
    slug: 'mecanica-geral',
    titulo: 'Mecânica Geral',
    resumo: 'Diagnóstico completo e reparos em todas as marcas de veículos leves.',
    descricao:
      'Atendemos qualquer marca ou modelo com diagnóstico preciso, peças de qualidade e mão de obra experiente. São mais de 35 anos cuidando de carros em Florianópolis.',
    beneficios,
    icone: '🔧',
  },
  {
    slug: 'revisao-preventiva',
    titulo: 'Revisão Preventiva',
    resumo: 'Mantenha o carro sempre em dia e evite gastos maiores no futuro.',
    descricao:
      'A revisão periódica é o melhor investimento para a saúde do seu veículo. Inspecionamos itens críticos e indicamos apenas o que realmente precisa.',
    beneficios,
    icone: '🛠️',
  },
  {
    slug: 'freios-suspensao',
    titulo: 'Freios e Suspensão',
    resumo: 'Reparo e troca de freios, amortecedores, molas, buchas e bandejas.',
    descricao:
      'Seu carro precisa parar bem e absorver o solo com segurança. Cuidamos do sistema de freios e da suspensão com peças de qualidade e geometria precisa.',
    beneficios,
    icone: '🛞',
  },
  {
    slug: 'motor',
    titulo: 'Motor e Retífica',
    resumo: 'Retífica, reparos e manutenção completa de motores.',
    descricao:
      'Do simples reparo à retífica completa, oferecemos serviços de motor com garantia e equipamentos modernos para diagnóstico preciso.',
    beneficios,
    icone: '⚙️',
  },
  {
    slug: 'injecao-eletronica',
    titulo: 'Injeção Eletrônica',
    resumo: 'Diagnóstico por scanner, limpeza de bicos e correção de falhas.',
    descricao:
      'Equipamentos atualizados para identificar erros, falhas intermitentes e problemas de injeção em qualquer veículo nacional ou importado.',
    beneficios,
    icone: '💡',
  },
  {
    slug: 'escapamentos',
    titulo: 'Escapamentos',
    resumo: 'Especialistas há mais de 35 anos em escapamentos para todas as marcas.',
    descricao:
      'Solda, reparo, troca e adaptação de escapamentos com peças nacionais e importadas. Atendimento para particulares com qualidade e garantia.',
    beneficios,
    icone: '🚗',
  },
  {
    slug: 'troca-de-oleo',
    titulo: 'Troca de Óleo',
    resumo: 'Troca de óleo e filtros com produtos de qualidade para todas as marcas.',
    descricao:
      'A troca de óleo é a manutenção mais importante do motor. Utilizamos óleos sintéticos e minerais de qualidade, de acordo com a recomendação do fabricante do seu veículo.',
    beneficios,
    icone: '🛢️',
  },
  {
    slug: 'troca-de-filtros',
    titulo: 'Troca de Filtros',
    resumo:
      'Troca de filtros de ar, combustível, óleo e cabine — mais desempenho e proteção para o seu motor.',
    descricao:
      'Os filtros são responsáveis por proteger o motor e garantir o conforto dos passageiros. A troca regular é essencial para o bom funcionamento do veículo. Fazemos a troca de todos os tipos: Filtro de Ar (impede poeira e partículas no motor), Filtro de Combustível (protege a injeção retendo impurezas), Filtro de Óleo (retém resíduos metálicos protegendo as peças internas) e Filtro de Cabine (filtra o ar interno do veículo, eliminando fungos e bactérias com higienização bactericida).',
    beneficios,
    icone: '🌬️',
  },
  {
    slug: 'correia-dentada',
    titulo: 'Troca de Correia Dentada',
    resumo:
      'Substituição preventiva da correia dentada e tensores para evitar danos sérios ao motor.',
    descricao:
      'A correia dentada sincroniza o movimento das válvulas com o pistão do motor. Quando ela rompe ou desgasta, o motor pode sofrer danos irreversíveis e caros. Realizamos a substituição preventiva da correia, tensores e bomba d\'água conforme o manual do fabricante, garantindo a integridade do motor.',
    beneficios,
    icone: '⛓️',
  },
  {
    slug: 'arrefecimento',
    titulo: 'Sistema de Arrefecimento',
    resumo: 'Manutenção do radiador, mangueiras, termostato e fluido de arrefecimento.',
    descricao:
      'O sistema de arrefecimento mantém o motor na temperatura ideal de funcionamento. Superaquecimento pode causar danos graves em poucos minutos. Realizamos inspeção completa do radiador, mangueiras, termostato, reservatório e fluido, identificando vazamentos e prevenindo falhas antes que comprometam o motor.',
    beneficios,
    icone: '🌡️',
  },
  {
    slug: 'amortecedores',
    titulo: 'Amortecedores',
    resumo:
      'Diagnóstico e troca de amortecedores para mais segurança e conforto na direção.',
    descricao:
      'Amortecedores desgastados comprometem a estabilidade do veículo, aumentam a distância de frenagem e causam desgaste irregular nos pneus. Fazemos o diagnóstico completo do sistema de suspensão e trocamos os amortecedores com peças de qualidade e garantia de serviço.',
    beneficios,
    icone: '🔩',
  },
  {
    slug: 'embreagem',
    titulo: 'Embreagem',
    resumo: 'Troca e regulagem de embreagem para veículos com câmbio manual.',
    descricao:
      'Disco, platô e rolamento de embreagem — substituímos todo o conjunto com peças de qualidade e garantia, devolvendo o conforto e desempenho ao seu carro.',
    beneficios,
    icone: '🔗',
  },
];

export function getServicoBySlug(slug: string): Servico | undefined {
  return servicos.find((s) => s.slug === slug);
}
