import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { CheckCircle, AlertCircle } from 'lucide-react';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwhGlA5GMf_H85oEOBZc9tfQ-WZAnY6VuKIysiCPh0BNj_EvKqJ8l0gZwTuJ1Utjvs1/exec';

export const Booking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // VALIDAÇÃO
      if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
        throw new Error('Preencha todos os campos');
      }

      // CONSTRÓI A URL
      const params = new URLSearchParams({
        nome: formData.name,
        telefone: formData.phone,
        servico: formData.service,
        data: formData.date,
        horario: formData.time,
        _: Date.now().toString()
      });

      const url = `${APPS_SCRIPT_URL}?${params.toString()}`;
      
      console.log('📤 Enviando:', url);

      // 🟢 APENAS 1 MÉTODO - Image (mais confiável e envia 1 vez)
      const img = new Image();
      img.src = url;
      
      // Pequeno delay para garantir o envio
      setTimeout(() => {
        console.log('✅ Enviado com sucesso!');
        
        // LIMPA O FORMULÁRIO E MOSTRA SUCESSO
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', service: '', date: '', time: '' });
        setIsLoading(false);
        
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 500);

    } catch (err) {
      console.error('❌ Erro:', err);
      setError(err instanceof Error ? err.message : 'Erro ao enviar');
      setIsLoading(false);
    }
  };

  // FUNÇÃO PARA TESTAR (OPCIONAL)
  const testarDireto = () => {
    const testUrl = `${APPS_SCRIPT_URL}?nome=TESTE&telefone=1199999999&servico=TESTE&data=2024-01-20&horario=14:00&_=${Date.now()}`;
    window.open(testUrl, '_blank');
  };

  return (
    <div className="bg-app-card border border-app-border p-6 rounded-[2rem] shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-serif text-app-text">Agendar Horário</h3>
        
        <button 
          type="button"
          onClick={testarDireto}
          className="text-xs text-app-muted hover:text-app-accent underline"
        >
          Testar API
        </button>
      </div>
      
      {isSubmitted ? (
        <div className="text-center py-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <p className="text-lg text-app-text mb-2">Agendamento confirmado!</p>
          <p className="text-sm text-app-muted">
            Em breve entraremos em contato via WhatsApp
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {error && (
            <div className="bg-red-900/20 border border-red-500 rounded-xl p-3 flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}
          
          <div>
            <label className="block text-sm text-app-muted mb-1">
              Nome completo <span className="text-red-400">*</span>
            </label>
            <input 
              required
              type="text" 
              placeholder="Digite seu nome"
              className="w-full bg-app-bg border border-app-border rounded-xl py-3 px-4 focus:outline-none focus:border-app-accent"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              disabled={isLoading}
            />
          </div>
          
          <div>
            <label className="block text-sm text-app-muted mb-1">
              WhatsApp <span className="text-red-400">*</span>
            </label>
            <input 
              required
              type="tel" 
              placeholder="(11) 99999-9999"
              className="w-full bg-app-bg border border-app-border rounded-xl py-3 px-4 focus:outline-none focus:border-app-accent"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              disabled={isLoading}
            />
          </div>
          
          <div>
            <label className="block text-sm text-app-muted mb-1">
              Serviço desejado <span className="text-red-400">*</span>
            </label>
            <select 
              required
              className="w-full bg-app-bg border border-app-border rounded-xl py-3 px-4 focus:outline-none focus:border-app-accent"
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
              disabled={isLoading}
            >
              <option value="" disabled>Selecione um serviço</option>
              {SERVICES.map(s => (
                <option key={s.id} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-app-muted mb-1">
                Data <span className="text-red-400">*</span>
              </label>
              <input 
                required
                type="date" 
                className="w-full bg-app-bg border border-app-border rounded-xl py-3 px-4 focus:outline-none focus:border-app-accent"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                min={new Date().toISOString().split('T')[0]}
                disabled={isLoading}
              />
            </div>
            <div>
              <label className="block text-sm text-app-muted mb-1">
                Horário <span className="text-red-400">*</span>
              </label>
              <input 
                required
                type="time" 
                className="w-full bg-app-bg border border-app-border rounded-xl py-3 px-4 focus:outline-none focus:border-app-accent"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                disabled={isLoading}
              />
            </div>
          </div>
          
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-app-accent text-white rounded-xl disabled:opacity-50 hover:bg-opacity-90 transition-all font-medium"
          >
            {isLoading ? 'Enviando...' : 'Confirmar Reserva'}
          </button>

          <p className="text-xs text-app-muted text-center mt-4">
            Ao agendar, você concorda com nossa política de privacidade.
          </p>
        </form>
      )}
    </div>
  );
};