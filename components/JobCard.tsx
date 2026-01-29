
import React from 'react';
import { MapPin, Clock, Home, ChevronRight, GraduationCap } from 'lucide-react';
import { JobListing } from '../types';

interface Props {
  job: JobListing;
  onApply: (title: string) => void;
}

const JobCard: React.FC<Props> = ({ job, onApply }) => {
  return (
    <div className="group relative bg-white border border-slate-200 p-8 rounded-3xl transition-all duration-500 hover:border-health-300 hover:shadow-2xl hover:shadow-health-600/5 hover:-translate-y-1">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-health-50 text-health-700 border border-health-100">
              {job.type}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Veröffentlicht: {job.postedAt}
            </span>
          </div>
          
          <h3 className="text-2xl font-display font-bold text-slate-900 mb-2 group-hover:text-health-600 transition-colors">
            {job.title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 mb-6 font-medium">
            <div className="flex items-center gap-2">
              <Home size={18} className="text-health-500" />
              {job.company}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-health-500" />
              {job.location}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {job.tags.map(tag => (
              <span key={tag} className="flex items-center gap-1.5 text-xs px-4 py-1.5 bg-slate-50 text-slate-600 rounded-full border border-slate-100 font-semibold group-hover:bg-health-50 group-hover:text-health-700 group-hover:border-health-100 transition-all">
                <GraduationCap size={12} className="text-slate-400 group-hover:text-health-500" />
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <button 
            onClick={() => onApply(job.title)}
            className="w-full md:w-auto px-8 py-4 bg-slate-900 text-white font-bold text-sm tracking-wide rounded-2xl hover:bg-health-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200 hover:shadow-health-600/20"
          >
            Details ansehen
            <ChevronRight size={18} />
          </button>
          <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            Kostenlos bewerben
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
