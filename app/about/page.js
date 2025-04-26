'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DreamNav2 from '@/components/DreamNav2';



export default function B3MerchLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-main bg-cover bg-center">
      

      < DreamNav2  />
      

      
      {/* Main Content */}
      <div className="flex flex-col items-center text-center text-white px-5">
        {/* First Box */}
        <div className="flex w-full max-w-4xl items-center mb-5">
          <motion.div className="w-1/5" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <img src="/images/logo.png" alt="B3 Logo" className="w-full" />
          </motion.div>
          <motion.h1 className="w-4/5 text- 10xl drop-shadow-lg" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
            MERCH
          </motion.h1>
        </div>
        
        {/* Second Box */}
        <motion.p className="text-xl font-schoolbell mb-10 drop-shadow-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Wear your dream...
        </motion.p>
        
        {/* Third Box */}
      </div>
    </div>
  );
}
