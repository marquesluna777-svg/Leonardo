export interface Service {
  id: string;
  name: string;
  category: 'Cabelo' | 'Unhas';
  description: string;
}

export const SERVICES: Service[] = [
  { id: 'progressiva', name: 'Progressiva', category: 'Cabelo', description: 'Alisamento capilar duradouro e brilho intenso.' },
  { id: 'botox', name: 'Botox Capilar', category: 'Cabelo', description: 'Reposição de massa e redução de frizz.' },
  { id: 'corte', name: 'Corte', category: 'Cabelo', description: 'Cortes modernos e clássicos para renovar seu visual.' },
  { id: 'escova', name: 'Escova', category: 'Cabelo', description: 'Modelagem perfeita para qualquer ocasião.' },
  { id: 'hidratacao-finalizacao', name: 'Hidratação + Finalização', category: 'Cabelo', description: 'Tratamento profundo com acabamento impecável.' },
  { id: 'cronograma-capilar', name: 'Cronograma Capilar', category: 'Cabelo', description: 'Plano de tratamento personalizado (Hidratação, Nutrição, Reconstrução).' },
  { id: 'recuperacao-fios', name: 'Tratamento Intenso de Recuperação', category: 'Cabelo', description: 'Resgate total da saúde dos fios danificados.' },
  { id: 'reversao-capilar', name: 'Reversão Capilar', category: 'Cabelo', description: 'Tratamento especializado para reverter danos químicos.' },
  { id: 'coloracao', name: 'Coloração', category: 'Cabelo', description: 'Cores vibrantes e cobertura perfeita de brancos.' },
  { id: 'cacheados', name: 'Hidratação e Finalização de Cacheados', category: 'Cabelo', description: 'Definição e hidratação específica para curvaturas.' },
  { id: 'hene', name: 'Aplicação de Henê', category: 'Cabelo', description: 'Aplicação profissional para fios pretos e lisos.' },
  { id: 'pe-mao', name: 'Pé e Mão Simples', category: 'Unhas', description: 'Cuidado completo para suas unhas com esmaltação impecável.' },
];
