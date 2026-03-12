
import React from 'react';
// Added 'Heart' to the imported icons from lucide-react
import { ArrowRight, Sparkles, CheckCircle, Heart } from 'lucide-react';
import { introText } from '../data/content';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-health-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 md:pt-24 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-health-600 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-widest">Deutschlands Spezialportal für Therapie</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-slate-900 leading-tight mb-6 md:mb-8">
              Bewegung ist <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-health-600 to-active-blue">Deine Leidenschaft.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-xl font-medium leading-relaxed mb-8 md:mb-10">
              Finde Deinen Traumjob in der Physiotherapie. Verbinde Deine Karriere mit der Zukunft der Rehabilitation auf unserem kostenlosen Portal.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <a href="#jobs" className="px-10 py-4 bg-health-600 hover:bg-health-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-health-600/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Jobs finden <ArrowRight size={22} />
              </a>
              <a href="#employer" className="px-10 py-4 bg-white border border-slate-200 hover:border-health-400 text-slate-700 rounded-2xl font-bold text-lg shadow-sm transition-all flex items-center justify-center">
                Für Arbeitgeber
              </a>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-500 font-medium">
                <CheckCircle className="text-health-500 w-5 h-5" />
                <span>Über 1.200 aktuelle Stellenanzeigen</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 font-medium">
                <CheckCircle className="text-health-500 w-5 h-5" />
                <span>Spezialisierte Filter (Bobath, MT, Lymph, etc.)</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000" 
                alt="Therapeut bei der Arbeit" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-health-950/40 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-health-100 flex items-center justify-center">
                    <Heart className="text-health-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold">Heilung fördern</p>
                    <p className="text-slate-500 text-sm">Arbeiten mit Herz und Verstand</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-health-200/50 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
