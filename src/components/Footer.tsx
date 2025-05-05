import React from 'react';
import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">IBC & INVEST</h3>
            <p className="mb-6 text-gray-400">
              Tables rondes et opportunités d'investissement entre collectivités 
              territoriales sénégalaises et françaises.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-primary flex-shrink-0" size={20} />
                <span>3 rue du docteur lancereaux 75008 Paris</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-primary flex-shrink-0" size={20} />
                <span> +33 7 58 63 47 16 / +33 7 52 72 32 66</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-primary flex-shrink-0" size={20} />
                <a href="mailto:ibcsica@gmail.com" className="hover:text-primary transition-colors">
                  ibcsica@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Globe className="mr-3 text-primary flex-shrink-0" size={20} />
                <a href="https://www.ibcsica.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  www.ibcsica.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="mb-4 text-gray-400">
              Inscrivez-vous pour recevoir des informations sur nos événements à venir.
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-2 bg-white/10 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              <button type="submit" className="btn btn-primary w-full">
                S'inscrire
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#home" className="hover:text-primary transition-colors">Accueil</a>
            <a href="#about" className="hover:text-primary transition-colors">À propos</a>
            <a href="#program" className="hover:text-primary transition-colors">Programme</a>
            <a href="#registration" className="hover:text-primary transition-colors">Réservation</a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} IBC & INVEST. Tous droits réservés.
          </p>
          <div className="flex justify-center mt-2">
            <img 
              src="https://images.pexels.com/photos/5560179/pexels-photo-5560179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Partenaires" 
              className="h-10 grayscale opacity-50"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;