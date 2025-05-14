import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import program1 from '../assets/img/programe/1.webp';
import program2 from '../assets/img/programe/2.webp';

const Program = () => {
  const programItems = [
    {
      time: '08:30 - 09:30',
      title: 'Accueil des invités, participants et autorités',
      location: 'Hall d\'entrée',
      description: 'Enregistrement, accueil café et réseautage initial',
    },
    {
      time: '09:30 - 10:00',
      title: 'Mot de bienvenue',
      location: 'Auditorium principal',
      description: 'Par le comité d\'organisation',
    },
    {
      time: '10:00 - 10:15',
      title: 'Discours d\'ouverture',
      location: 'Auditorium principal',
      description: 'Interventions d\'autorités sénégalaises et françaises',
    },
    {
      time: '10:45 - 12:25',
      title: 'Table ronde 1',
      location: 'Auditorium principal',
      description: 'Collectivités sénégalaises et françaises : économie sociale et solidaire, emploi, environnement, santé, éducation, agriculture et développement durable',
    },
    {
      time: '12:30 - 14:30',
      title: 'Pause déjeuner - Réseautage B2B',
      location: 'Espace détente & restauration',
      description: 'Rencontres informelles, prestations artistiques (Kora), stands partenaires',
    },
    {
      time: '14:30 - 15:10',
      title: 'Table ronde 2',
      location: 'Auditorium principal',
      description: 'Structures d\'accompagnement technique et financier : business plan, cybersécurité, IA, financement, JO 2026, investissement immobilier',
    },
    {
      time: '15:10 - 15:50',
      title: 'Table ronde 3',
      location: 'Auditorium principal',
      description: 'Diaspora : parcours migratoire, logement, tendances entrepreneuriales, obstacles, levée de fonds, arnaques immobilières',
    },
    {
      time: '15:50 - 16:30',
      title: 'Table ronde 4',
      location: 'Auditorium principal',
      description: 'Face aux partenaires et experts du Forum Link Sunugal',
    },
    {
      time: '16:30 - 17:30',
      title: 'Clôture et perspectives',
      location: 'Auditorium principal',
      description: 'Synthèse, recommandations, et prochaines étapes de collaboration',
    },
  ];

  return (
    <section id="program" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Programme</h2>
        <div className="section-divider-program">
          <img src={program2} alt="Line" className="w-full h-auto" />
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 transform md:translate-x-[-0.5px]"></div>

          <div className="space-y-8">
            {programItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } md:gap-8 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white transform -translate-x-2 md:-translate-x-2.5 translate-y-2"></div>

                {/* Time */}
                <div className={`md:w-1/2 ${
                  index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'
                } pl-8 md:pl-0`}>
                  <div className="inline-flex items-center mb-1 text-primary font-bold">
                    <Clock size={16} className="mr-1" />
                    <span>{item.time}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${
                  index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'
                }`}>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>

                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin size={16} className="mr-1" />
                      <span>{item.location}</span>
                    </div>

                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;