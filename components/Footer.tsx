
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="bg-health-500 p-2 rounded-xl shadow-lg shadow-health-500/10">
                <Activity className="h-7 w-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-white tracking-tight leading-none">
                  PhysioJobs
                </span>
                <span className="font-sans text-[10px] text-health-400 tracking-[0.1em] font-semibold uppercase">
                  Stellenangebote.de
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Spezialisierte Plattform für Fachkräfte in der Physiotherapie und Rehabilitation. Wir bringen Bewegung in Deine Karriere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-health-600 hover:text-white transition-all shadow-sm">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-health-600 hover:text-white transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-health-600 hover:text-white transition-all shadow-sm">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest text-xs mb-8">Kontakt</h4>
            <ul className="space-y-5 text-slate-400 text-sm font-medium">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex-shrink-0 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-health-400" />
                </div>
                <span>Schliemannstraße 23<br />10437 Berlin<br />Deutschland</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex-shrink-0 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-health-400" />
                </div>
                <span>+49 30 959 988 700</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex-shrink-0 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-health-400" />
                </div>
                <a href="mailto:hallo@physiotherapeuten-stellenangebote.de" className="hover:text-health-400 transition-colors">
                  hallo@physiojobs.de
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest text-xs mb-8">Service</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href="#jobs" className="hover:text-health-400 transition-colors">Aktuelle Jobs</a></li>
              <li><a href="#employer" className="hover:text-health-400 transition-colors">Für Arbeitgeber</a></li>
              <li><a href="#career" className="hover:text-health-400 transition-colors">Karriere-Ratgeber</a></li>
              <li><a href="#" className="hover:text-health-400 transition-colors">Fortbildungsverzeichnis</a></li>
              <li><a href="#" className="hover:text-health-400 transition-colors">Gehaltscheck</a></li>
            </ul>
          </div>

          {/* Newsletter / Legal */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest text-xs mb-8">Rechtliches</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium mb-8">
              <li><Link to="/impressum" className="hover:text-health-400 transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-health-400 transition-colors">Datenschutz</Link>
            <Link to="/kontakt" className="hover:text-blue-400 transition-colors">Kontakt</Link>
            <Link to="/autor/thomas-sander" className="hover:text-blue-400 transition-colors">Autor</Link></li>
              <li><a href="#" className="hover:text-health-400 transition-colors">AGB</a></li>
            </ul>
            <div className="p-5 bg-slate-800/50 rounded-2xl border border-slate-700/50">
               <p className="text-xs text-slate-500 font-bold mb-3 uppercase tracking-widest">Wusstest du?</p>
               <p className="text-xs leading-relaxed text-slate-400">Physiotherapie verbessert nicht nur die Mobilität, sondern auch die psychische Gesundheit. Wir unterstützen die Community.</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-10 text-center flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] flex items-center gap-2">
            © 2024 PhysioJobs. Made with <Heart size={10} className="text-red-500 fill-red-500" /> for the community.
          </p>
          <div className="flex items-center gap-6 text-[10px] uppercase font-bold tracking-widest text-slate-500">
            <span>Barrierefrei</span>
            <span>GDPR Konform</span>
            <span>ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
