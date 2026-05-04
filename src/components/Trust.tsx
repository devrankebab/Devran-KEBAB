import React from 'react';
import { Star, Quote } from 'lucide-react';

const Trust: React.FC = () => {
  const reviews = [
    { name: "Marc A.", text: "Le meilleur kebab du Jura sans aucun doute. On sent que la viande est de qualité et le pain maison change tout.", stars: 5 },
    { name: "Julie P.", text: "Accueil au top et portions très généreuses. Mention spéciale pour la sauce blanche maison !", stars: 5 },
    { name: "Rachid B.", text: "Un vrai régal, propre et rapide. Le goût du veau est authentique.", stars: 4 }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <div className="text-brand-red font-black text-6xl font-display mb-2">4.8/5 ★</div>
            <h2 className="text-4xl md:text-6xl font-display leading-tight">Des centaines de clients <span className="text-brand-red">satisfaits</span></h2>
          </div>
          <div className="text-gray-400 font-black uppercase tracking-[0.2em] text-xs">Avis vérifiés Google</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-brand-gray p-10 rounded-[2.5rem] flex flex-col items-start gap-4 hover:border-brand-red border-2 border-transparent transition-all h-full relative group">
              <div className="flex gap-0.5 text-brand-red">
                {[...Array(review.stars)].map((_, j) => <Star key={j} fill="currentColor" size={12} />)}
              </div>
              <p className="text-gray-600 font-bold leading-relaxed flex-grow text-lg">"{review.text}"</p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 bg-brand-black rounded-full flex items-center justify-center text-white font-display text-sm">
                  {review.name.charAt(0)}
                </div>
                <span className="font-display text-xl">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
