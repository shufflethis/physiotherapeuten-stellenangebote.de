// HR-UPDATER: v1.0
import React from 'react';
import { MapPin } from 'lucide-react';

interface CityData {
  name: string;
  slug: string;
  jobCount: number;
}

const GERMAN_CITIES: CityData[] = [
  { name: 'Berlin', slug: 'berlin', jobCount: 85 },
  { name: 'Hamburg', slug: 'hamburg', jobCount: 62 },
  { name: 'München', slug: 'muenchen', jobCount: 78 },
  { name: 'Köln', slug: 'koeln', jobCount: 45 },
  { name: 'Frankfurt am Main', slug: 'frankfurt-am-main', jobCount: 52 },
  { name: 'Stuttgart', slug: 'stuttgart', jobCount: 48 },
  { name: 'Düsseldorf', slug: 'duesseldorf', jobCount: 38 },
  { name: 'Leipzig', slug: 'leipzig', jobCount: 32 },
  { name: 'Dortmund', slug: 'dortmund', jobCount: 28 },
  { name: 'Essen', slug: 'essen', jobCount: 25 },
  { name: 'Bremen', slug: 'bremen', jobCount: 22 },
  { name: 'Dresden', slug: 'dresden', jobCount: 30 },
  { name: 'Hannover', slug: 'hannover', jobCount: 35 },
  { name: 'Nürnberg', slug: 'nuernberg', jobCount: 28 },
  { name: 'Duisburg', slug: 'duisburg', jobCount: 18 },
  { name: 'Bochum', slug: 'bochum', jobCount: 15 },
  { name: 'Wuppertal', slug: 'wuppertal', jobCount: 14 },
  { name: 'Bonn', slug: 'bonn', jobCount: 20 },
  { name: 'Münster', slug: 'muenster', jobCount: 22 },
  { name: 'Mannheim', slug: 'mannheim', jobCount: 19 },
  { name: 'Augsburg', slug: 'augsburg', jobCount: 17 },
  { name: 'Wiesbaden', slug: 'wiesbaden', jobCount: 16 },
  { name: 'Freiburg', slug: 'freiburg', jobCount: 21 },
  { name: 'Regensburg', slug: 'regensburg', jobCount: 14 },
  { name: 'Würzburg', slug: 'wuerzburg', jobCount: 12 },
  { name: 'Kiel', slug: 'kiel', jobCount: 18 },
  { name: 'Lübeck', slug: 'luebeck', jobCount: 11 },
  { name: 'Rostock', slug: 'rostock', jobCount: 13 },
  { name: 'Potsdam', slug: 'potsdam', jobCount: 10 },
  { name: 'Wolfsburg', slug: 'wolfsburg', jobCount: 9 },
];

const CityJobLinks: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="staedte">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-health-600 mb-2 font-bold uppercase tracking-widest text-xs">
            <MapPin size={16} />
            Regionale Stellenangebote
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 mb-4">
            Physiotherapeut Jobs nach Stadt
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Finden Sie Physiotherapeuten-Stellenangebote in Ihrer Region. Wir listen aktuelle Vakanzen in allen deutschen Großstädten.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {GERMAN_CITIES.map((city) => (
            <a
              key={city.slug}
              href={`#jobs-${city.slug}`}
              className="group flex flex-col items-center p-4 bg-slate-50 hover:bg-health-50 border border-slate-200 hover:border-health-300 rounded-xl transition-all text-center"
            >
              <span className="text-sm font-bold text-slate-800 group-hover:text-health-700 transition-colors">
                {city.name}
              </span>
              <span className="text-xs text-slate-400 mt-1">
                {city.jobCount}+ Stellen
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Physiotherapeut Stellenangebote in ganz Deutschland, Österreich und der Schweiz. Täglich aktualisiert.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CityJobLinks;
