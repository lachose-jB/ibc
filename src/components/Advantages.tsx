import React from 'react';
import { Network, Users, BookOpen, Globe, TrendingUp, Shield } from 'lucide-react';

const advantagesData = [
  {
    icon: <Network size={36} />,
    title: 'Réseautage et Link',
    description: 'Établir des contacts directs avec les collectivités territoriales et les investisseurs.',
    color: 'primary',
  },
  {
    icon: <Users size={36} />,
    title: 'Accès à un réseau professionnel',
    description: 'Rencontrer des acteurs clés des secteurs public et privé.',
    color: 'secondary',
  },
  {
    icon: <BookOpen size={36} />,
    title: 'Ateliers sur les opportunités',
    description: 'Participer à des sessions dédiées aux opportunités d\'investissement dans les communes du Sénégal.',
    color: 'accent',
  },
  {
    icon: <Globe size={36} />,
    title: 'B2C & B2B',
    description: 'Connexions entre collectivités territoriales, entreprises et investisseurs privés et publics.',
    color: 'primary',
  },
  {
    icon: <TrendingUp size={36} />,
    title: 'Projets de développement',
    description: 'Découvrir des projets concrets et à fort potentiel dans les territoires sénégalais.',
    color: 'secondary',
  },
  {
    icon: <Shield size={36} />,
    title: 'Cadre institutionnel',
    description: 'Bénéficier d\'un environnement sécurisé pour les discussions et les partenariats.',
    color: 'accent',
  },
];

const Advantages = () => {
  return (
    <section id="advantages" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Avantages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantagesData.map((advantage, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 text-${advantage.color} bg-${advantage.color}/10`}>
                {advantage.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;