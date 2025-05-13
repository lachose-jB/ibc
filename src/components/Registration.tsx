import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const pricingPlans = [
  {
    name: 'Reservation Stand',
    price: '180',
    currency: '€',
    features: [
      'Accès à toutes les conférences',
      'Déjeuner networking',
      'Documentation complète',
      'Liste des participants',
    ],
    recommended: false,
  },
  {
    name: 'inscription visiteure',
    price: 'Gratuite',
    currency: '',
    features: [
      'Accès à toutes les conférences',
    ],
    recommended: false,
  },
];

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const sanitizeText = (text: string) =>
  text.replace(/[<>\/\\{}[\];'"`$]/g, '').trim();

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    position: '',
    plan: 'Reservation Stand',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    if (['firstName', 'lastName', 'organization', 'position'].includes(name)) {
      sanitizedValue = sanitizeText(value);
    }

    if (name === 'email') {
      sanitizedValue = value.trim();
    }

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      alert("Veuillez entrer un email valide.");
      return;
    }

    // TODO: Ajouter d'autres validations si besoin

    emailjs.send(
      'service_30i3lmr',
      'template_hvb0pms',
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        organization: formData.organization,
        position: formData.position,
        plan: formData.plan,
      },
      'MwgGhub-9ylALpwej'
    )
    .then(() => {
      alert('Inscription envoyée avec succès !');
    
      if (formData.plan === 'Reservation Stand') {
        window.location.href = 'https://pay.sumup.com/b2c/XORWZ6UZ6B';
      } else {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          organization: '',
          position: '',
          plan: 'Reservation Stand',
        });console.log('formData:', formData);
console.log('pricingPlans:', pricingPlans);
console.log('emailjs response:', emailjs.send(
  'service_30i3lmr',
  'template_hvb0pms',
  {
    first_name: formData.firstName,
    last_name: formData.lastName,
    email: formData.email,
    organization: formData.organization,
    position: formData.position,
    plan: formData.plan,
  },
  'MwgGhub-9ylALpwej'
));
      }
    })
  };
  return (
    <section id="registration" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Réservation</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Formulaire */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Inscrivez-vous à l'événement</h3>
  
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
  
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                  Organisation / Collectivité
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
  
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                  Fonction
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
  
              <div>
                <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">
                  Type de pass
                </label>
                <select
                  id="plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {pricingPlans.map((plan) => (
                    <option key={plan.name} value={plan.name}>
                      {plan.name} ({plan.price}{plan.currency})
                    </option>
                  ))}
                </select>
              </div>
  
              <button type="submit" className="w-full btn btn-primary mt-6">
                S'inscrire
              </button>
  
              <p className="text-sm text-gray-500 text-center mt-4">
                En vous inscrivant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
              </p>
            </form>
          </div>
  
          {/* Formules */}
          <div className="space-y-6 max-w-4xl mx-auto mb-10 w-100 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-center">Reservation</h3>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden transition-all ${
                    plan.recommended
                      ? 'border-2 border-primary shadow-lg scale-105 z-10'
                      : 'border border-gray-200 shadow-md'
                  }`}
                >
                  {plan.recommended && (
                    <div className="bg-primary py-1 text-white text-center text-sm font-medium">
                      Recommandé
                    </div>
                  )}
  
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-4">{plan.name}</h4>
                    <div className="flex items-baseline mb-6">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-xl ml-1">{plan.currency}</span>
                    </div>
  
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="text-primary mt-0.5 mr-2 flex-shrink-0" size={18} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
  
                   
                  </div>
                </div>
              ))}
            </div>
  
            <p className="text-center text-gray-600 mt-4">
              Vous avez besoin d'une formule personnalisée ?{' '}
              <a href="#contact" className="text-primary font-medium">
                Contactez-nous
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
  
};

export default Registration;
