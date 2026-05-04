import React from 'react';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

const StickyCall: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 left-6 right-6 z-50 md:hidden"
    >
      <a 
        href="tel:0384860875" 
        className="btn-primary w-full py-6 text-2xl shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all !rounded-2xl"
      >
        <Phone size={28} />
        APPELER
      </a>
    </motion.div>
  );
};

export default StickyCall;
