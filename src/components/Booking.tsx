import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Calendar, Clock, User, Phone, CheckCircle } from 'lucide-react';

export const Booking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-app-card border border-app-border p-6 rounded-[2rem] shadow-xl transition-colors duration-300">
      <h3 className="text-lg font-serif text-app-text mb-6">Agendar Horário</h3>
      
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-sm text-app-muted">Solicitação enviada com sucesso!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            required
            type="text" 
            placeholder="Seu nome"
            className="w-full bg-app-bg border border-app-border rounded-xl py-3 px-4 text-sm text-app-text focus:border-app-accent outline-none transition-all placeholder:text-app-muted/50"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            required
            type="tel" 
            placeholder="WhatsApp"
            className="w-full bg-app-bg border border-app-border rounded-xl py-3 px-4 text-sm text-app-text focus:border-app-accent outline-none transition-all placeholder:text-app-muted/50"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <select 
            required
            className="w-full bg-app-bg border border-app-border rounded-xl py-3 px-4 text-sm text-app-text focus:border-app-accent outline-none transition-all appearance-none"
            value={formData.service}
            onChange={(e) => setFormData({...formData, service: e.target.value})}
          >
            <option value="" disabled>Serviço</option>
            {SERVICES.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
          <div className="grid grid-cols-2 gap-4">
            <input 
              required
              type="date" 
              className="w-full bg-app-bg border border-app-border rounded-xl py-3 px-4 text-sm text-app-text focus:border-app-accent outline-none transition-all"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
            <input 
              required
              type="time" 
              className="w-full bg-app-bg border border-app-border rounded-xl py-3 px-4 text-sm text-app-text focus:border-app-accent outline-none transition-all"
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
            />
          </div>
          <button 
            type="submit"
            className="w-full py-4 bg-app-accent text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:opacity-90 transition-all shadow-lg shadow-app-accent/20"
          >
            Confirmar Reserva
          </button>
        </form>
      )}
    </div>
  );
};
