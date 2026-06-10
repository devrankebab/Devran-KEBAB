import React from 'react';
import { MENU, SAUCES } from '../data';
import { Coffee, Droplets, Utensils } from 'lucide-react';

const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-brand-gray font-sans">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* EN-TÊTE DE LA CARTE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <div className="inline-block px-3 py-1 bg-red-100 text-brand-red rounded-full text-[10px] font-black uppercase mb-4 tracking-widest">
              Fait Maison • 100% Veau
            </div>
            <h2 className="text-6xl md:text-8xl font-display leading-[0.85]">Notre <span className="text-brand-red">Carte</span></h2>
          </div>
          <div className="bg-brand-black text-white px-8 py-6 rounded-[2rem] font-display text-2xl flex items-center gap-4 rotate-2 hover:rotate-0 transition-transform">
            <Coffee size={32} className="text-brand-red" />
            <span>THÉ TURC OFFERT ☕</span>
          </div>
        </div>

        {/* GRILLE DES CATÉGORIES (SANDWICHS, MENUS, ASSIETTES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
          {MENU.map((category, idx) => (
            <div key={idx} className="space-y-10">
              <h3 className="text-4xl font-display leading-none border-b-8 border-brand-red inline-block mb-4">
                {category.title}
              </h3>
              
              {/* CORRECTION DE L'ALIGNEMENT DES LIGNES ICI */}
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div key={item.id} className="flex flex-col gap-1 min-h-[60px] justify-center border-b border-gray-100 pb-3 group">
                    <div className="flex justify-between items-baseline gap-4">
                      {/* Nom du plat */}
                      <h4 className="text-2xl font-display text-brand-black group-hover:text-brand-red transition-colors whitespace-nowrap">
                        {item.name}
                      </h4>
                      {/* Prix bloqué pile à droite sur la même ligne */}
                      {item.price && (
                        <span className="font-display text-xl text-brand-red whitespace-nowrap">
                          {item.price}
                        </span>
                      )}
                    </div>
                    {/* Description calée en dessous sans décaler le prix */}
                    {item.description && (
                      <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-normal max-w-[85%]">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* SECTION SAUCES */}
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col gap-6 max-w-2xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-50 flex items-center justify-center rounded-xl text-brand-red">
              <Utensils size={28} />
            </div>
            <h3 className="text-2xl font-display font-black">Nos Sauces</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {SAUCES.map((blue, i) => (
              <span key={i} className={`px-4 py-2 rounded-full text-sm font-bold ${blue.includes('maison') ? 'bg-brand-red text-white' : 'bg-brand-gray text-gray-500'}`}>
                {blue}
              </span>
            ))}
          </div>
        </div>

        {/* LIEN PIED DE PAGE */}
        <div className="mt-20 text-center">
          <p className="inline-block bg-brand-black text-white px-8 py-4 rounded-full font-bold shadow-lg">
            Commandez par téléphone au <a href="tel:0384860875" className="text-brand-red hover:underline">03 84 86 08 75</a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default MenuSection;
