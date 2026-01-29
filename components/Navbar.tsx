
import React, { useState, useEffect } from 'react';
import { Menu, X, Activity, Heart, Users, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Jobs finden', icon: Search, href: '#jobs' },
    { name: 'Für Arbeitgeber', icon: Users, href: '#employer' },
    { name: 'Karriere', icon: Activity, href: '#career' },
    { name: 'Über uns', icon: Heart, href: '#about' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-health-500 p-2 rounded-xl shadow-lg shadow-health-500/20">
              <Activity className="h-7 w-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-slate-800 tracking-tight leading-none">
                Physio<span className="text-health-600">Jobs</span>
              </span>
              <span className="font-sans text-[10px] text-slate-500 tracking-[0.1em] font-semibold uppercase">
                Stellenangebote.de
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-sm font-semibold text-slate-600 hover:text-health-600 transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-health-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-slate-800 hover:bg-health-700 text-white px-6 py-2.5 rounded-full shadow-md shadow-slate-200 transition-all duration-300 text-sm font-bold">
              Anmelden
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-health-600 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 rounded-xl text-base font-medium text-slate-700 hover:text-health-600 hover:bg-health-50 transition-colors flex items-center space-x-4"
              >
                <link.icon size={20} className="text-health-500" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
