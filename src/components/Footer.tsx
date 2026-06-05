import React from 'react';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-24">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center font-display text-white text-2xl">D</div>
              <span className="font-display text-4xl tracking-tight">DEVRAN</span>
            </div>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs leading-relaxed mb-10 max-w-sm">
              L'excellence du kebab traditionnel à Lons-le-Saunier. 100% veau mariné, 100% passion artisanale.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/devran.kebab" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-red transition-all group">
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-2xl mb-10 border-b-4 border-brand-red inline-block">Infos Pratiques</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4 group">
                <MapPin className="text-brand-red shrink-0" size={24} />
                <span className="text-gray-400 font-bold uppercase tracking-widest text-[11px] group-hover:text-white transition-colors">20 Rue Georges Trouillot, 39000 Lons-le-Saunier</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone className="text-brand-red shrink-0" size={24} />
                <a href="tel:0384860875" className="text-gray-400 font-bold uppercase tracking-widest text-[11px] group-hover:text-white transition-colors">03 84 86 08 75</a>
              </li>
              <li className="flex items-start gap-4 group">
                <Clock className="text-brand-red shrink-0" size={24} />
                <div className="text-gray-400 font-bold uppercase tracking-widest text-[11px] group-hover:text-white transition-colors leading-tight">
                  <p>Mar - Sam: 11h30 - 14h / 18h - 22h</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-2xl mb-10 border-b-4 border-brand-red inline-block">Fait Pour Durer</h4>
            <div className="bg-white/5 p-8 rounded-3xl border-l-[10px] border-brand-red/50 italic text-gray-400 text-sm leading-relaxed font-bold">
              "Notre priorité est la qualité sans compromis. Venez découvrir le vrai goût du veau mariné maison, préparé avec respect pour la tradition."
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 text-center">
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} DEVRAN KEBAB LONS-LE-SAUNIER • ARTISAN KEBABIER
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
