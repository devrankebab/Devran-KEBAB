import React from 'react';
import { Instagram } from 'lucide-react';
// Importation de ton logo pour harmoniser le bas du site
import logoHeader from '../logo-header.jpeg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0b0b] text-gray-400 py-16 border-t border-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* SECTION GAUCHE : LOGO ET DESCRIPTION */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img 
              src={logoHeader} 
              alt="Devran Kebab" 
              className="h-14 w-auto object-contain rounded-md shadow-sm" 
            />
            <span className="text-2xl font-black tracking-wider text-white uppercase font-serif">Devran</span>
          </div>
          <p className="text-[11px] font-bold tracking-widest text-gray-500 uppercase leading-relaxed max-w-sm">
            L'excellence du kebab traditionnel à Lons-le-Saunier. 100% veau mariné, 100% passion artisanale.
          </p>
          <div className="flex gap-3">
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-gray-900/50 hover:bg-brand-red border border-gray-800/80 hover:border-brand-red flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* SECTION MILIEU : INFOS PRATIQUES */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-black uppercase text-sm tracking-wider pb-2 border-b-2 border-brand-red w-fit">
            Infos Pratiques
          </h3>
          <div className="flex flex-col gap-4 text-xs font-bold tracking-wide uppercase text-gray-400">
            <div className="flex items-start gap-3">
              <span className="text-brand-red mt-0.5">📍</span>
              <p className="leading-relaxed text-gray-500">20 Rue Georges Trouillot, 39000 Lons-le-Saunier</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-brand-red">📞</span>
              <a href="tel:0384860875" className="hover:text-white transition-colors text-gray-500">03 84 86 08 75</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-brand-red">🕒</span>
              <p className="text-gray-500">Mar - Sam: 11h30 - 14h / 18h - 22h</p>
            </div>
          </div>
        </div>

        {/* SECTION DROITE : CITATION */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-black uppercase text-sm tracking-wider pb-2 border-b-2 border-brand-red w-fit">
            Fait pour durer
          </h3>
          <div className="bg-gray-900/30 border border-gray-900 p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-red"></div>
            <p className="text-gray-400 italic text-xs leading-relaxed font-medium">
              "Notre priorité est la qualité sans compromis. Venez découvrir le vrai goût du veau mariné maison, préparé avec respect pour la tradition."
            </p>
          </div>
        </div>

      </div>

      {/* LIGNE TOUT EN BAS AVEC LE 2026 ENLEVÉ */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-900/60 text-center">
        <p className="text-[9px] font-black tracking-[0.2em] text-gray-600 uppercase">
          © DEVRAN KEBAB LONS-LE-SAUNIER • ARTISAN KEBABIER
        </p>
      </div>
    </footer>
  );
};

export default Footer;
