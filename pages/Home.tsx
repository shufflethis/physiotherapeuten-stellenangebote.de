// HR-UPDATER: v1.0

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import JobCard from '../components/JobCard';
import ApplicationModal from '../components/ApplicationModal';
import ContentSection from '../components/ContentSection';
import Footer from '../components/Footer';
import CityJobLinks from '../components/geo/CityJobLinks';
import FAQSection from '../components/FAQSection';
import { JobListing } from '../types';
import { searchSection, employerSection, applicantSection, aboutSection } from '../data/content';
import { Search, MapPin, Filter, Stethoscope } from 'lucide-react';

// Mock Data for Physiotherapy Jobs
const SAMPLE_JOBS: JobListing[] = [
  {
    id: '1',
    title: 'Haustechniker/in (m/w/d) für Bestandsimmobilien mit großer Dienstwohnung',
    company: 'Neuerburg GrundstücksgemeinschaftSofort-Bewerbung',
    location: 'Köln',
    type: 'Vollzeit',
    tags: [],
    postedAt: '2026-03-15'
  },
  {
    id: '2',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Potsdam',
    type: 'Vollzeit',
    tags: [],
    postedAt: '2026-03-15'
  },
  {
    id: '3',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    tags: [],
    postedAt: '2026-03-15'
  },
  {
    id: '4',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Hannover',
    type: 'Vollzeit',
    tags: [],
    postedAt: '2026-03-15'
  },
  {
    id: '5',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Isernhagen',
    type: 'Vollzeit',
    tags: [],
    postedAt: '2026-03-15'
  },
  {
    id: '6',
    title: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    company: 'Medisca GmbH',
    location: 'Kabelsketal',
    type: 'Vollzeit',
    tags: [],
    postedAt: '2026-03-15'
  },
  {
    id: '7',
    title: 'Physiotherapeut/in (m/w/d) (Physiotherapeut/in)',
    company: 'PK Vogtland-Klinik GmbH&Co.KG',
    location: 'Bad Elster',
    type: 'Vollzeit',
    tags: ['Physiotherapeut/in'],
    postedAt: '2026-03-13'
  },
  {
    id: '8',
    title: 'Physiotherapeut',
    company: 'Sigrid Wilke-Ndiaye Krankengymnastik',
    location: 'Hannover',
    type: 'Vollzeit',
    tags: ['Physiotherapeut/in'],
    postedAt: '2026-03-13'
  },
  {
    id: '9',
    title: 'Physiotherapeut (m/w/d)',
    company: 'Praxis für Physio- und Ergotherapie',
    location: 'Diepholz',
    type: 'Vollzeit',
    tags: ['Physiotherapeut/in'],
    postedAt: '2026-03-13'
  },
  {
    id: '10',
    title: 'Physiotherapeut/in',
    company: 'Heilbad Sauerbrunn Betriebs gesellschaft mbH',
    location: 'Bad Sauerbrunn',
    type: 'Vollzeit',
    tags: ['Physiotherapeut/in'],
    postedAt: '2026-03-13'
  },
  {
    id: '11',
    title: 'Physiotherapeut/in (w/m/d)',
    company: 'Hannelore Baumgarten-August Physiotherapeutin',
    location: 'Oldenburg (Oldb)',
    type: 'Vollzeit',
    tags: ['Physiotherapeut/in'],
    postedAt: '2026-03-13'
  },
  {
    id: '12',
    title: 'Physiotherapeut/in (m/w/d)',
    company: 'Güntner & Hanrieder GbR',
    location: 'Abensberg, Hallertau',
    type: 'Vollzeit',
    tags: ['Physiotherapeut/in'],
    postedAt: '2026-03-13'
  },
  {
    id: '13',
    title: 'Physiotherapeut (m/w/d)',
    company: 'NOVOTERGUM',
    location: 'Wuppertal',
    type: 'Vollzeit',
    tags: ['Physiotherapeut/in'],
    postedAt: '2026-03-13'
  },
  {
    id: '14',
    title: 'Physiotherapeut (m/w/d)',
    company: 'NOVOTERGUM',
    location: 'Dortmund',
    type: 'Vollzeit',
    tags: ['Physiotherapeut/in'],
    postedAt: '2026-03-13'
  },
  {
    id: '15',
    title: 'Physiotherapeut (m/w/d)',
    company: 'NOVOTERGUM',
    location: 'Offenbach am Main',
    type: 'Vollzeit',
    tags: ['Physiotherapeut/in'],
    postedAt: '2026-03-13'
  },
  {
    id: '16',
    title: 'Physiotherapeut (w/m/d)',
    company: 'Heilpädagogische Hilfe Osnabrück e.V.',
    location: 'Osnabrück',
    type: 'Vollzeit',
    tags: ['Physiotherapeut/in'],
    postedAt: '2026-03-13'
  },
  {
    id: '17',
    title: 'Physiotherapeut (m/w/d)',
    company: 'L. Schneider & K. Ressel GbR',
    location: 'Gladbeck',
    type: 'Vollzeit',
    tags: ['Physiotherapeut/in'],
    postedAt: '2026-03-13'
  },
  {
    id: '18',
    title: 'Physiotherapeuten (m/w/d)',
    company: 'Fachklinikum Mainschleife GmbH',
    location: 'Volkach',
    type: 'Vollzeit',
    tags: ['Physiotherapeut/in'],
    postedAt: '2026-03-13'
  },
  {
    id: '19',
    title: 'Physiotherapeut (m/w/d)',
    company: 'Verein für Menschen m. Körper- und Mehrfachbehinderung e. V.',
    location: 'Würzburg',
    type: 'Vollzeit',
    tags: ['Physiotherapeut/in'],
    postedAt: '2026-03-13'
  },
  {
    id: '20',
    title: 'Physiotherapeut (m/w/d)',
    company: 'ZAR Leipzig GmbH',
    location: 'Leipzig',
    type: 'Vollzeit',
    tags: ['Physiotherapeut/in'],
    postedAt: '2026-03-13'
  },
  {
    id: '21',
    title: 'Physiotherapeut*innen (m/w/d)',
    company: 'Justizvollzugsanstalt Plötzensee',
    location: 'Berlin',
    type: 'Vollzeit',
    tags: ['Physiotherapeut/in'],
    postedAt: '2026-03-13'
  },
  {
    id: '22',
    title: 'Physiotherapeut m/w/d',
    company: 'Limes Schlossklinik Mecklenburgische Schweiz',
    location: 'Teterow',
    type: 'Vollzeit',
    tags: ['Physiotherapeut/in'],
    postedAt: '2026-03-13'
  },
  {
    id: '23',
    title: 'Physiotherapeut (m/w/d)',
    company: 'Klinikum der Landeshauptstadt Stuttgart gKAöR',
    location: 'Stuttgart',
    type: 'Vollzeit',
    tags: ['Physiotherapeut/in'],
    postedAt: '2026-03-13'
  },
  {
    id: '24',
    title: 'Physiotherapeut m/w/d',
    company: 'Städtisches Klinikum  Görlitz gGmbH',
    location: 'Görlitz, Neiße',
    type: 'Vollzeit',
    tags: ['Physiotherapeut/in'],
    postedAt: '2026-03-13'
  },
  {
    id: '25',
    title: 'Physiotherapeut m/w/d',
    company: 'Ortenau Klinikum',
    location: 'Achern, Baden',
    type: 'Vollzeit',
    tags: ['Physiotherapeut/in'],
    postedAt: '2026-03-13'
  }
];

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>('');

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-health-200 selection:text-health-900">
      <Navbar />
      
      <main>
        <Hero />

        {/* Search & Filter Bar */}
        <div id="jobs" className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-y border-slate-200 py-6 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 w-full relative group">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-health-500 transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Jobtitel, Fachrichtung oder Klinik..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-14 pr-6 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-health-400 focus:outline-none focus:ring-4 focus:ring-health-500/10 transition-all text-lg font-medium"
                />
              </div>
              <div className="w-full lg:w-1/4 relative group">
                <MapPin className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-health-500 transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Ort oder PLZ" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-14 pr-6 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-health-400 focus:outline-none focus:ring-4 focus:ring-health-500/10 transition-all text-lg font-medium"
                />
              </div>
              <button className="w-full lg:w-auto bg-health-600 hover:bg-health-700 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg shadow-health-600/20 active:scale-95 flex items-center justify-center gap-2 text-lg">
                <Filter size={20} /> Suchen
              </button>
            </div>
          </div>
        </div>

        {/* Job Listings Section */}
        <section className="py-24 bg-slate-50 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-health-600 mb-2 font-bold uppercase tracking-widest text-xs">
                  <Stethoscope size={16} />
                  Top Vakanzen
                </div>
                <h2 className="text-4xl font-display font-extrabold text-slate-900">Aktuelle Therapieberufe</h2>
              </div>
              <div className="flex items-center gap-2 bg-white p-1 rounded-full border border-slate-200 shadow-sm">
                <button className="px-6 py-2 rounded-full bg-health-600 text-white font-bold text-sm">Neueste</button>
                <button className="px-6 py-2 rounded-full text-slate-500 font-bold text-sm hover:text-health-600">Umkreis</button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              {SAMPLE_JOBS.map(job => (
                <JobCard key={job.id} job={job} onApply={handleApply} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="inline-flex items-center gap-2 text-slate-600 hover:text-health-600 font-bold transition-all px-8 py-3 rounded-full border border-slate-200 hover:border-health-300 bg-white shadow-sm">
                Alle {SAMPLE_JOBS.length * 10}+ Stellenangebote entdecken
              </button>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="bg-white">
          <ContentSection id="search-info" content={searchSection} />
          <div className="h-px bg-slate-100 max-w-7xl mx-auto"></div>
          
          <ContentSection id="employer" content={employerSection} className="bg-slate-50/50" />
          <div className="h-px bg-slate-100 max-w-7xl mx-auto"></div>

          <ContentSection id="career" content={applicantSection} />
          <div className="h-px bg-slate-100 max-w-7xl mx-auto"></div>
          
          <ContentSection id="about" content={aboutSection} className="bg-slate-50/50" />
        </div>

        {/* Geo SEO: City Job Links */}
        <CityJobLinks />

        {/* Career Info & FAQ */}
        <FAQSection />

      </main>

      <Footer />

      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        jobTitle={selectedJob} 
      />
    </div>
  );
};

export default Home;
