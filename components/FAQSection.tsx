// HR-UPDATER: v1.0
import React, { useState } from 'react';
import { ChevronDown, HelpCircle, GraduationCap } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Wie finde ich Physiotherapeut-Stellenangebote in meiner Nähe?',
    answer: 'Nutzen Sie unsere Suchfunktion oben auf der Seite. Geben Sie einfach Ihren Wunschort oder Ihre Postleitzahl ein, und wir zeigen Ihnen alle aktuellen Physiotherapeuten-Stellenangebote in Ihrer Region an. Sie können auch nach Umkreis filtern.'
  },
  {
    question: 'Ist die Nutzung von physiotherapeuten-stellenangebote.de kostenlos?',
    answer: 'Ja, für Bewerber ist die Nutzung unserer Plattform komplett kostenlos. Sie können unbegrenzt nach Stellenangeboten suchen, sich über Arbeitgeber informieren und sich direkt auf offene Positionen bewerben.'
  },
  {
    question: 'Welche Qualifikationen brauche ich als Physiotherapeut/in?',
    answer: 'Für die Arbeit als Physiotherapeut/in benötigen Sie eine abgeschlossene dreijährige Ausbildung an einer staatlich anerkannten Berufsfachschule oder ein Studium der Physiotherapie (Bachelor/Master). Zusätzliche Qualifikationen wie Manuelle Therapie, Bobath, Vojta oder Lymphdrainage verbessern Ihre Chancen auf dem Arbeitsmarkt erheblich.'
  },
  {
    question: 'Was verdient ein Physiotherapeut in Deutschland?',
    answer: 'Das Einstiegsgehalt liegt bei ca. 2.300-2.800 EUR brutto monatlich. Mit Berufserfahrung und Zusatzqualifikationen steigt das Gehalt auf 3.000-4.000 EUR. In leitenden Positionen oder spezialisierten Kliniken sind auch höhere Gehälter möglich. Regionale Unterschiede spielen ebenfalls eine Rolle.'
  },
  {
    question: 'Welche Weiterbildungsmöglichkeiten gibt es für Physiotherapeuten?',
    answer: 'Es gibt zahlreiche Weiterbildungen: Manuelle Therapie, Sportphysiotherapie, Neurologische Rehabilitation (Bobath, Vojta), Lymphdrainage, Osteopathie, Gerätegestützte Krankengymnastik (KGG) und viele mehr. Auch ein berufsbegleitendes Studium der Physiotherapie oder Therapiewissenschaften ist möglich.'
  },
  {
    question: 'Kann ich mich als Physiotherapeut/in selbstständig machen?',
    answer: 'Ja, nach der Ausbildung und idealerweise einigen Jahren Berufserfahrung können Sie eine eigene Praxis eröffnen. Sie benötigen eine Kassenzulassung, geeignete Räumlichkeiten und die Erfüllung der Hygienevorschriften. Eine gute Geschäftsplanung und kaufmännische Grundkenntnisse sind ebenfalls wichtig.'
  },
  {
    question: 'Wie bewerbe ich mich über physiotherapeuten-stellenangebote.de?',
    answer: 'Klicken Sie einfach auf "Jetzt bewerben" bei der gewünschten Stelle. Sie können Ihre Bewerbungsunterlagen direkt über unser Portal einreichen. Wir empfehlen ein aussagekräftiges Anschreiben, Ihren Lebenslauf sowie relevante Zeugnisse und Zertifikate beizufügen.'
  },
  {
    question: 'Gibt es auch Teilzeit-Stellen für Physiotherapeuten?',
    answer: 'Ja, viele Arbeitgeber bieten flexible Arbeitszeitmodelle an, darunter Teilzeit, Minijobs und auch Freelance-Tätigkeiten. Nutzen Sie unsere Filterfunktion, um gezielt nach Teilzeit-Physiotherapeut-Stellenangeboten zu suchen.'
  },
];

const CAREER_INFO = [
  {
    title: 'Ausbildung',
    description: 'Die Ausbildung zum/zur Physiotherapeut/in dauert drei Jahre und findet an staatlich anerkannten Berufsfachschulen statt. Seit 2019 ist die Ausbildung in vielen Bundesländern schulgeldbefreit. Alternativ bieten Hochschulen Bachelor-Studiengänge in Physiotherapie an.',
  },
  {
    title: 'Berufsaussichten',
    description: 'Die Nachfrage nach Physiotherapeuten steigt stetig durch die demografische Entwicklung und das wachsende Gesundheitsbewusstsein. Der Fachkräftemangel sorgt für exzellente Jobchancen und zunehmend bessere Arbeitsbedingungen.',
  },
  {
    title: 'Spezialisierungen',
    description: 'Beliebte Spezialisierungen sind Sportphysiotherapie, Manuelle Therapie, Neurologie (Bobath/Vojta), Pädiatrie, Geriatrie und Atemtherapie. Jede Spezialisierung eröffnet neue Karrierewege und Verdienstmöglichkeiten.',
  },
  {
    title: 'Arbeitsumfelder',
    description: 'Physiotherapeuten arbeiten in Krankenhäusern, Rehakliniken, Privatpraxen, Sporteinrichtungen, Wellnesshotels, Seniorenheimen und zunehmend auch im Bereich Telerehabilitation und betriebliche Gesundheitsförderung.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50">
      {/* Career Info Section */}
      <section className="py-16 md:py-24" id="karriere-info">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-health-600 mb-2 font-bold uppercase tracking-widest text-xs">
              <GraduationCap size={16} />
              Karriere-Ratgeber
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 mb-4">
              Karriere als Physiotherapeut/in
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Alles Wichtige rund um Ausbildung, Gehalt, Spezialisierungen und Berufsaussichten in der Physiotherapie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {CAREER_INFO.map((item, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-health-600 mb-2 font-bold uppercase tracking-widest text-xs">
              <HelpCircle size={16} />
              Häufige Fragen
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 mb-4">
              FAQ - Häufig gestellte Fragen
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Antworten auf die wichtigsten Fragen rund um Physiotherapeut-Stellenangebote und den Beruf.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-slate-100 transition-colors"
                >
                  <span className="text-base md:text-lg font-bold text-slate-900 pr-4">{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180 text-health-600' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FAQ Schema for SEO */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }) }} />
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
