import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-hero-pattern no-repeat bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="w-full min-h-screen flex items-center justify-center relative z-10 text-white text-center px-6">
        <div className="w-full max-w-screen-2xl animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="block">IBC & INVEST</span>
            <span className="block mt-4 text-secondary">LINK SÉNÉGAL</span>
          </h1>

          <h2 className="text-3xl md:text-4xl mb-16 leading-relaxed">
            Tables rondes et opportunités d'investissement entre <br />
            collectivités territoriales sénégalaises et françaises
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-20">
            <div className="flex items-center space-x-3">
              <Calendar className="text-secondary" size={32} />
              <span className="text-2xl">31 MAI 2025</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-accent" size={32} />
              <span className="text-2xl">PARIS - DAKAR</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#registration" className="btn btn-secondary text-xl px-6 py-4">
              Réservation et inscription
            </a>
            <a href="#program" className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm text-xl px-6 py-4">
              Voir le programme
            </a>
          </div>
        </div>
      </div>
      
      {/* Flag-colored divider */}
      <div className="absolute bottom-0 left-0 right-0 flex h-3">
        <div className="flex-1 bg-primary"></div>
        <div className="flex-1 bg-secondary"></div>
        <div className="flex-1 bg-accent"></div>
      </div>
    </section>
  );
};

export default Hero;