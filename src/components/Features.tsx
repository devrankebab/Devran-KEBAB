import React from 'react';
import { ShieldCheck, Zap, Heart, ChefHat } from 'lucide-react';

const Features: React.FC = () => {
  const points = [
    { icon: <ShieldCheck size={40} />, title: "100% Veau", desc: "Viande de veau d'origine bouchère, sélectionnée pour sa tendreté." },
    { icon: <ChefHat size={40} />, title: "Fait Maison", desc: "Recettes traditionnelles et pain préparé chaque jour." },
    { icon: <Zap size={40} />, title: "Service Rapide", desc: "Votre commande prête en moins de 10 minutes sur place." },
    { icon: <Heart size={40} />, title: "Générosité", desc: "Des portions copieuses pour satisfaire toutes les faims." }
  ];

  return (
    <section id="features" className="py-32 bg-brand-black text-white rounded-[4rem] mx-4 my-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red opacity-20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {points.map((point, i) => (
            <div key={i} className="flex flex-col items-start text-left gap-6 group hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 bg-brand-red text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand-red/40 rotate-3 group-hover:rotate-0 transition-transform">
                {point.icon}
              </div>
              <div>
                <h3 className="text-4xl font-display mb-4 tracking-tight">{point.title}</h3>
                <p className="text-gray-400 font-bold text-sm leading-relaxed uppercase tracking-widest">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
