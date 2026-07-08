import React from 'react';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Map Image Section */}
          <div className="lg:col-span-7">
            <div className="relative aspect-square md:aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-brand-gray group">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity" 
                alt="Map Lons-le-Saunier"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-brand-red text-white px-6 py-2 rounded-xl shadow-xl font-display text-lg tracking-widest border-2 border-white badge-float">
                    Devran Kebab
                  </div>
                  <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center text-white shadow-2xl ring-[12px] ring-brand-red/20">
                    <MapPin size={32} />
                  </div>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=20+Rue+Georges+Trouillot+39000+Lons-le-Saunier" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 btn-primary px-10 py-5 text-xl tracking-widest shadow-2xl active:scale-95"
              >
                Y ALLER MAINTENANT
              </a>
            </div>
          </div>

          {/* Info Details Section */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-5xl md:text-7xl font-display leading-none mb-6">Nous <span className="text-brand-red">Trouver</span></h2>
              <p className="text-gray-500 font-bold text-lg leading-relaxed uppercase tracking-widest text-xs">
                20 Rue Georges Trouillot, 39000 Lons-le-Saunier
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-brand-gray p-10 rounded-[2.5rem] flex items-start gap-6 border-l-[12px] border-brand-red">
                <div className="w-full">
                  <h3 className="text-3xl font-display mb-6 tracking-tight">Horaires</h3>
                  <div className="space-y-4">
                    {/* LISTE DES HORAIRES CORRIGÉE AVEC LIGNE D'ÉTÉ */}
                    <div className="flex flex-col pb-3 border-b border-gray-200">
                      <div className="flex justify-between items-center text-sm font-black uppercase tracking-[0.1em]">
                        <span className="text-gray-400">Mardi - Samedi</span>
                        <span className="text-brand-black">11:30 - 14:00 / 18:00 - 22:00</span>
                      </div>
                      <div className="flex justify-between items-center text-xs font-black uppercase tracking-[0.1em] mt-1.5 text-brand-red">
                        <span>Horaires d'été</span>
                        <span>Le soir : 19:00 - 22:00</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm font-black uppercase tracking-[0.1em]">
                      <span className="text-gray-400">Dimanche - Lundi</span>
                      <span className="text-brand-black">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="tel:0384860875" className="btn-primary py-6 text-xl">
                  BUREAU
                </a>
                <a href="tel:0610915963" className="btn-secondary py-6 text-xl">
                  MOBILE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
