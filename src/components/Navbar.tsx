import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const navLinks = [
    { name: language === 'fr' ? 'Accueil' : 'Home', href: '#home' },
    { name: language === 'fr' ? 'À propos' : 'About', href: '#about' },
    { name: language === 'fr' ? 'Programme' : 'Program', href: '#program' },
    { name: language === 'fr' ? 'Intervenants' : 'Speakers', href: '#speakers' },
    { name: language === 'fr' ? 'Avantages' : 'Benefits', href: '#advantages' },
    { name: language === 'fr' ? 'Réservation' : 'Registration', href: '#registration' },
    { name: language === 'fr' ? 'Contact' : 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${ scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          <img src="../src/assets/img/logo/logo_ibc.jpg" alt="Logo" className="h-20 w-25 ml-4" />
            IBC & INVEST
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium hover:text-primary transition-colors ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className={`flex items-center space-x-1 ${
              scrolled ? 'text-gray-800' : 'text-white'
            } hover:text-primary transition-colors`}
          >
            <Globe size={18} />
            <span>{language.toUpperCase()}</span>
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <a href="#home" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          <img src="../src/assets/img/logo/logobn2.png" alt="Logo" className="h-20 w-22 ml-1" />
            BN2smart
          </span>
        </a>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="container flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="font-medium text-gray-800 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            <button onClick={toggleLanguage} className="flex items-center space-x-1 text-gray-800 hover:text-primary transition-colors">
              <Globe size={18} />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;