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
        
        {/* LOGO AGRANDI ET PARFAITEMENT MIS EN VALEUR */}
        <div className="flex items-center py-2">
          <img 
            src={logoHeader} 
            alt="Devran Kebab" 
            className="h-16 w-auto object-contain rounded-md shadow-sm" 
          />
        </div>

        {/* LIENS DE NAVIGATION */}
        <div className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-[0.2cm] text-gray-500">
          <button onClick={() => scrollTo('menu')} className="hover:text-brand-red transition-colors">Menu</button>
          <button onClick={() => scrollTo('features')} className="hover:text-brand-red transition-colors">Points Forts</button>
          <button onClick={() => scrollTo('location')} className="hover:text-brand-red transition-colors">Accès</button>
        </div>

        {/* BOUTON D'APPEL DIRECT */}
        <div className="flex items-center gap-3">
          <a href="tel:0384860875" className="hidden sm:flex items-center gap-2 btn-primary !py-2 !px-5 text-[10px] tracking-widest">
            <Phone size={14} />
            03 84 86 08 75
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
