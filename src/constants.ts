export interface Service {
  id: string;
  name: string;
  category: 'Cabelo' | 'Unhas';
  description: string;
  price: string;
}

export const SERVICES: Service[] = [
  { id: 'progressiva', name: 'Progressiva', category: 'Cabelo', description: 'Alisamento capilar duradouro e brilho intenso.', price: 'A partir de R$ 150,00' },
  { id: 'botox', name: 'Botox Capilar', category: 'Cabelo', description: 'Reposição de massa e redução de frizz.', price: 'R$ 120,00' },
  { id: 'corte', name: 'Corte', category: 'Cabelo', description: 'Cortes modernos e clássicos para renovar seu visual.', price: 'R$ 60,00' },
  { id: 'escova', name: 'Escova', category: 'Cabelo', description: 'Modelagem perfeita para qualquer ocasião.', price: 'R$ 45,00' },
  { id: 'hidratacao-finalizacao', name: 'Hidratação + Finalização', category: 'Cabelo', description: 'Tratamento profundo com acabamento impecável.', price: 'R$ 80,00' },
  { id: 'cronograma-capilar', name: 'Cronograma Capilar', category: 'Cabelo', description: 'Plano de tratamento personalizado (Hidratação, Nutrição, Reconstrução).', price: 'R$ 250,00 (4 sessões)' },
  { id: 'recuperacao-fios', name: 'Tratamento Intenso de Recuperação', category: 'Cabelo', description: 'Resgate total da saúde dos fios danificados.', price: 'R$ 130,00' },
  { id: 'reversao-capilar', name: 'Reversão Capilar', category: 'Cabelo', description: 'Tratamento especializado para reverter danos químicos.', price: 'R$ 180,00' },
  { id: 'coloracao', name: 'Coloração', category: 'Cabelo', description: 'Cores vibrantes e cobertura perfeita de brancos.', price: 'A partir de R$ 90,00' },
  { id: 'cacheados', name: 'Hidratação e Finalização de Cacheados', category: 'Cabelo', description: 'Definição e hidratação específica para curvaturas.', price: 'R$ 85,00' },
  { id: 'hene', name: 'Aplicação de Henê', category: 'Cabelo', description: 'Aplicação profissional para fios pretos e lisos.', price: 'R$ 70,00' },
  { id: 'pe-mao', name: 'Pé e Mão Simples', category: 'Unhas', description: 'Cuidado completo para suas unhas com esmaltação impecável.', price: 'R$ 55,00' },
];
