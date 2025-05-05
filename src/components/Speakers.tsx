import React from 'react';

import image1 from "../assets/img/invite/1.webp";
import image2 from '../assets/img/invite/2.webp';
import image3 from '../assets/img/invite/3.webp';
import image4 from '../assets/img/invite/4.webp';
import image5 from '../assets/img/invite/5.webp';
import image6 from '../assets/img/invite/6.webp';
import image7 from '../assets/img/invite/7.webp';
import image8 from '../assets/img/invite/8.webp';
import image9 from '../assets/img/invite/9.webp';
import image10 from '../assets/img/invite/10.webp';
import image11 from '../assets/img/invite/11.webp';
import image12 from '../assets/img/invite/12.webp';
import image13 from '../assets/img/invite/13.webp';
import image14 from '../assets/img/invite/14.webp';
import image15 from '../assets/img/invite/15.webp';
import image16 from '../assets/img/invite/16.webp';
import image17 from '../assets/img/invite/17.webp';
import image18 from '../assets/img/invite/18.webp';

const speakersData = [
  {
    name: 'Mr Ibrahima BADJI',
    role: 'Collectivité Sénégalaise',
    titre: 'Président IBC & Invest',
    image: image1,
  },
  {
    name: 'Mr Narcisse BANDJIM',
    role: 'Collectivité Sénégalaise',
    titre: 'Président BN2smart',
    image: image2,
  },
  {
    name: 'Mr Freddy ZANGA',
    role: 'Collectivité Sénégalaise',
    titre: 'Président de la CICP',
    image: image3,
  },
  {
    name: 'Mr Amadou SYLLA',
    role: 'Collectivité Sénégalaise',
    titre: 'Président Sos Casamance',
    image: image4,
  },
  {
    name: 'Mr Geoffroy Boulard',
    role: 'Collectivité Française',
    titre: 'Maire du 17ème arrondissement de Paris', 
    image: image5,
  },
  {
    name: 'Mme Rachida DATI',
    role: 'Collectivité Française',
    titre: 'Maire du 7ème arrondissement de Paris',
    image: image6,
  },
  {
    name: "Mr Jérémy REDLER",
    role: 'Collectivité Française',
    titre: 'Maire du 16ème arrondissement de Paris',
    image: image7,
  },
  {
    name: 'Mme Jeanne d’HAUTESERRE',
    role: 'Collectivité Française',
    titre: 'Maire du 8ème arrondissement de Paris',
    image: image8,
  },
  {
    name: 'Mr Abdou KARIM SY',
    role: 'Collectivité Sénégalaise',
    titre: 'Maire de Koki',
    image: image9,
  },
  {
    name: 'Mr Issa SALL',
    role: 'Collectivité Sénégalaise',
    titre: 'Maire de la commune de Mbour',
    image: image10,
  },
  {
    name: 'Mr Mamadou FAYE',
    role: 'Collectivité Sénégalaise',
    titre: 'Président IBC & Invest Italie',
    image: image11,
  },
  {
    name: 'Mr Moustapha LO',
    role: 'Collectivité Sénégalaise',
    titre: 'Président IBC & Invest Sénégal',
    image: image12,
  },
  {
    name: 'Mme Jackie LOTETEKA',
    role: 'Collectivité Sénégalaise',
    titre: "Avocate d'affaires au barreau de Paris", 
    image: image13,
  },
  {
    name: 'Mme Fati DIOP',
    role: 'Collectivité Sénégalaise',
    titre: 'Président IBC & Invest Maroc',
    image: image14,
  },
  {
    name: "Mme Safietou KANDE",
    role: 'Collectivité Sénégalaise',
    titre: 'Président IBC & Invest Chine',
    image: image15,
  },
  {
    name: 'Mr Amadou Cheikhou DIAME',
    role: 'Collectivité Sénégalaise',
    titre: 'Président IBC & Invest Allemagne',
    image: image16,
  },
  {
    name: 'Mr Khadim SOUGOU',
    role: 'Collectivité Sénégalaise',
    titre: 'Président IBC & Invest Amerique',
    image: image17,
  },
  {
    name: 'Mr El Maestro DJ AL',
    role: 'Collectivité Sénégalaise',
    titre: 'Ambassadeur IBC & Invest',
    image: image18,
  },
];

const Speakers = () => {
  return (
    <section id="speakers" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Collectivités Participantes</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {speakersData.map((speaker, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-xl">{speaker.name}</h3>
                  <p className="text-sm opacity-90">{speaker.role}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  {speaker.titre || 'Titre non spécifié'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;