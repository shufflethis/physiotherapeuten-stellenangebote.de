
import React from 'react';
import { SectionContent } from '../types';

interface Props {
  content: SectionContent;
  id: string;
  className?: string;
}

const ContentSection: React.FC<Props> = ({ content, id, className = "" }) => {
  return (
    <section id={id} className={`py-24 lg:py-32 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`flex flex-col lg:flex-row gap-20 items-center ${content.imageSide === 'left' ? 'lg:flex-row-reverse' : ''}`}>
          
          <div className={`flex-1 ${content.imageSide === 'none' ? 'lg:max-w-4xl lg:mx-auto lg:text-center' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-10 leading-tight">
              {content.title}
            </h2>
            
            <div className="space-y-8 text-slate-600 text-lg leading-relaxed font-medium">
              {content.paragraphs.map((paragraph, index) => (
                <p key={index} className="relative">
                  {index === 0 && content.imageSide !== 'none' && (
                    <span className="absolute -left-6 top-0 w-1 h-full bg-health-500/20 rounded-full"></span>
                  )}
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {content.imageSide !== 'none' && content.imageUrl && (
            <div className="flex-1 w-full">
              <div className="relative group">
                {/* Decorative backgrounds */}
                <div className="absolute -top-6 -right-6 w-full h-full bg-health-100 rounded-[2.5rem] -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
                <div className="absolute -bottom-6 -left-6 w-1/2 h-1/2 bg-blue-100 rounded-[2rem] -z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2 blur-2xl opacity-60"></div>
                
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] border-8 border-white">
                  <img 
                    src={content.imageUrl} 
                    alt={content.imageAlt} 
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
