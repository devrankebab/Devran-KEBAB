import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 bg-brand-white text-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <div className="inline-block px-3 py-1 bg-red-100 text-brand-red rounded-full text-xs font-black uppercase mb-6">
              Premium & Fait Maison
            </div>
            
            <h1 className="text-[60px] md:text-[120px] font-display mb-8 leading-[0.85] text-brand-black">
              VOTRE KEBAB<br />
              <span className="text-brand-red">PRÊT EN 10 MIN</span>
            </h1>
            
            <p className="text-xl text-gray-500 mb-10 max-w-lg font-medium leading-relaxed">
              Le vrai 100% veau à Lons-le-Saunier. Ingrédients frais, viande d'exception et passion artisanale.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <a href="tel:0384860875" className="btn-primary w-full sm:w-auto px-12 py-6 text-2xl flex items-center justify-center gap-3 active:scale-95 transition-all">
                Appeler
              </a>
              <div className="flex flex-col">
                <span className="text-lg font-black uppercase tracking-tighter">Lons-le-Saunier</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">20 Rue Georges Trouillot</span>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8">
              <div className="border-l-4 border-brand-red pl-4">
                <h4 className="font-display text-xl">100% Veau</h4>
                <p className="text-xs text-gray-400 uppercase font-black tracking-widest">Origine Bouchère</p>
              </div>
              <div className="border-l-4 border-brand-red pl-4">
                <h4 className="font-display text-xl">Fait Maison</h4>
                <p className="text-xs text-gray-400 uppercase font-black tracking-widest">Recette Tradition</p>
              </div>
              <div className="border-l-4 border-brand-red pl-4">
                <h4 className="font-display text-xl">Thé Offert</h4>
                <p className="text-xs text-gray-400 uppercase font-black tracking-widest">Accueil Turc</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block lg:col-span-4 relative"
          >
            <div className="absolute -top-10 -right-10 badge-float z-20 bg-white p-6 rounded-3xl shadow-2xl border border-gray-50 text-center">
              <div className="text-brand-red font-black text-4xl mb-1">4.8/5</div>
              <div className="text-yellow-400 flex justify-center gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star text-[10px]">★</i>)}
              </div>
              <div className="text-[10px] text-gray-400 font-black uppercase tracking-tighter">500+ Avis Google</div>
            </div>
            
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white rotate-2 bg-brand-gray relative aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=800&auto=format&fit=crop" 
                alt="Delicious Kebab" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* BANDEAU EN BAS CORRIGÉ AVEC LE TIRET COURT TEXTE */}
      <div className="absolute bottom-10 left-10 hidden lg:flex items-center gap-3 opacity-20 select-none">
        <span className="font-display text-4xl tracking-tighter">DEVRAN KEBAB</span>
        <span className="font-display text-2xl px-1 text-brand-black">-</span>
        <span className="font-display text-4xl tracking-tighter">ORIGINE FRANCE</span>
      </div>
    </section>
  );
};

export default Hero;
