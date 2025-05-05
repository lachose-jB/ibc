import React from 'react';
import { Users, Building, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="section-title">À propos de l'événement</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bloc texte descriptif */}
          <div className="animate-slide-up">
            <p className="text-lg mb-6 leading-relaxed">
              L'IBC & INVEST LINK SÉNÉGAL est un événement qui se positionne comme une véritable opportunité pour tout type de projet destiné aux investisseurs, aux entreprises, ainsi qu'aux acteurs économiques, politiques et sociaux.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Cette rencontre vise à établir des partenariats durables entre les participants et à attirer des investisseurs intéressés par le développement local au Sénégal.
            </p>

            {/* Points forts */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Building className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Collaborations institutionnelles</h3>
                  <p>Création de partenariats entre collectivités françaises et sénégalaises.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Users className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Réseautage professionnel</h3>
                  <p>Échanges privilégiés entre décideurs territoriaux et investisseurs.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <TrendingUp className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Opportunités d'investissement</h3>
                  <p>Présentation de projets concrets de développement local.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bloc vidéo + date */}
          <div className="relative h-96 rounded-lg overflow-hidden animate-fade-in">
            <video 
              src="/assets/video/vid.mp4"  // Assure-toi que ce chemin est correct selon ta structure de projet.
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-2xl font-bold">31 MAI 2025</p>
              <p className="text-lg">Un événement unique de coopération internationale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
