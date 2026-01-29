
import React, { useState } from 'react';
import { X, Upload, Send, CheckCircle, Heart } from 'lucide-react';
import { ModalProps } from '../types';

const ApplicationModal: React.FC<ModalProps> = ({ isOpen, onClose, jobTitle }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all animate-fade-in-up">
        {/* Header */}
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/80">
          <div>
            <h3 className="text-2xl font-display font-extrabold text-slate-900 tracking-tight">
              Schnell-Bewerbung
            </h3>
            <p className="text-health-600 text-sm font-bold flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-health-500 animate-pulse"></span>
              {jobTitle || 'Initiativbewerbung'}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-900 transition-colors p-2 hover:bg-white rounded-xl shadow-sm border border-slate-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Vorname</label>
                  <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:bg-white focus:border-health-400 focus:ring-4 focus:ring-health-500/10 outline-none transition-all" placeholder="Max" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Nachname</label>
                  <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:bg-white focus:border-health-400 focus:ring-4 focus:ring-health-500/10 outline-none transition-all" placeholder="Mustermann" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">E-Mail Adresse</label>
                <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:bg-white focus:border-health-400 focus:ring-4 focus:ring-health-500/10 outline-none transition-all" placeholder="max@beispiel.de" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Warum möchten Sie Teil des Teams werden?</label>
                <textarea rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:bg-white focus:border-health-400 focus:ring-4 focus:ring-health-500/10 outline-none transition-all resize-none" placeholder="Erzählen Sie uns kurz von Ihrer Leidenschaft für die Physiotherapie..."></textarea>
              </div>

              <div className="border-2 border-dashed border-slate-200 rounded-3xl p-8 hover:border-health-300 transition-all group cursor-pointer bg-slate-50 text-center relative overflow-hidden">
                <Upload className="mx-auto h-12 w-12 text-slate-300 group-hover:text-health-500 transition-colors mb-4" />
                <p className="text-slate-700 font-bold mb-1">Lebenslauf & Zertifikate</p>
                <p className="text-xs text-slate-500">PDF bevorzugt, max. 15MB</p>
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                  <Heart size={12} className="text-health-400" />
                  Deine Daten sind bei uns sicher.
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-health-600 hover:bg-health-700 text-white font-bold py-4 px-10 rounded-2xl shadow-xl shadow-health-600/20 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95"
                >
                  {isSubmitting ? (
                    'Wird übertragen...'
                  ) : (
                    <>
                      Jetzt bewerben <Send size={20} />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <div className="w-24 h-24 bg-health-50 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-xl">
                <CheckCircle className="h-12 w-12 text-health-600" />
              </div>
              <h4 className="text-3xl font-display font-extrabold text-slate-900 mb-4">Fast geschafft!</h4>
              <p className="text-slate-600 max-w-sm mx-auto mb-10 font-medium leading-relaxed">
                Deine Bewerbung wurde erfolgreich an die Einrichtung übermittelt. Wir drücken Dir die Daumen für Deinen nächsten Karriereschritt!
              </p>
              <button 
                onClick={onClose}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-2xl shadow-lg transition-all"
              >
                Zurück zur Übersicht
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;
