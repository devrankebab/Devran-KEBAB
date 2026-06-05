import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
// Importation de ton image depuis le dossier src
import logoHeader from '../logo-header.jpeg';

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-24 flex justify-between items-center">
        
        {/* LOGO DEVRAN KEBAB */}
        <div className="flex items-center py-2">
          <img 
            src={logoHeader} 
            alt="Devran Kebab" 
            className="h-16 w-auto object-contain rounded-md shadow-sm" 
          />
        </div>

        {/* MENU EN MODE BULLS + TEXTE AGRANDI */}
        <div className="hidden md:flex gap-4 text-[14px] font-bold uppercase tracking-wider text-gray-700">
          <button 
            onClick={() => scrollTo('menu')} 
            className="px-5 py-2.5 border border-gray-200 rounded-full hover:border-brand-red hover:text-brand-red transition-all duration-250 bg-gray-50/50 hover:bg-white shadow-sm"
          >
            Menu
          </button>
          <button 
            onClick={() => scrollTo('features')} 
            className="px-5 py-2.5 border border-gray-200 rounded-full hover:border-brand-red hover:text-brand-red transition-all duration-250 bg-gray-50/50 hover:bg-white shadow-sm"
          >
            Points Forts
          </button>
          <button 
            onClick={() => scrollTo('location')} 
            className="px-5 py-2.5 border border-gray-200 rounded-full hover:border-brand-red hover:text-brand-red transition-all duration-250 bg-gray-50/50 hover:bg-white shadow-sm"
          >
            Accès
          </button>
        </div>

        {/* BOUTON D'APPEL DIRECT EN GRAND */}
        <div className="flex items-center gap-3">
          <a 
            href="tel:0384860875" 
            className="hidden sm:flex items-center gap-3 btn-primary !py-3 !px-6 text-[14px] font-extrabold tracking-wider rounded-full shadow-md transition-transform hover:scale-105"
          >
            <Phone size={16} className="animate-pulse" />
            03 84 86 08 75
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
