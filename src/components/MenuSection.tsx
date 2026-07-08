import React from 'react';
import { MENU, SAUCES } from '../data';
import { Coffee, Utensils } from 'lucide-react';

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

        {/* GRILLE DES CATÉGORIES ENTIÈREMENT CORRIGÉE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mb-24">
          {MENU.map((category, idx) => (
            <div key={idx} className="flex flex-col">
              {/* TITRE DE LA CATÉGORIE EN BLOC SOLIDE */}
              <div className="mb-8 border-b-8 border-brand-red pb-2 min-h-[50px] flex items-end">
                <h3 className="text-3xl font-display leading-none text-brand-black uppercase">
                  {category.title}
                </h3>
              </div>
              
              {/* ALIGNEMENT INDÉSTRUCTIBLE DES LIGNES */}
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div key={item.id} className="flex flex-col pb-3 border-b border-gray-100/70 group">
                    <div className="flex justify-between items-end gap-3 w-full">
                      {/* Nom du plat */}
                      <h4 className="text-xl font-display text-brand-black group-hover:text-brand-red transition-colors leading-tight">
                        {item.name}
                      </h4>
                      
                      {/* Ligne pointillée invisible ou élégante pour l'alignement */}
                      <div className="flex-1 border-b border-dashed border-gray-200 mb-1 min-w-[10px]"></div>
                      
                      {/* Prix bloqué pile à droite */}
                      {item.price && (
                        <span className="font-display text-xl text-brand-red font-bold whitespace-nowrap pl-1">
                          {item.price}
                        </span>
                      )}
                    </div>
                    
                    {/* Description calée proprement dessous sans aucun impact sur le prix */}
                    {item.description && (
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-normal mt-1 max-w-[90%]">
                        {item.description}
                        {item.name && item.name.toUpperCase().trim() === "ASSIETTE PATRON" && (
                          <>
                            <br />
                            <span className="text-gray-500 font-medium normal-case tracking-normal block mt-1">
                              Salade, tomates, oignons, frites, kebab, 2 steaks avec fromage, 1 merguez
                            </span>
                          </>
                        )}
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
            {SAUCES.map((sauce, i) => (
              <span key={i} className={`px-4 py-2 rounded-full text-sm font-bold ${sauce.includes('maison') ? 'bg-brand-red text-white' : 'bg-brand-gray text-gray-500'}`}>
                {sauce}
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
