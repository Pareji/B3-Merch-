'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DreamNav2 from '@/components/DreamNav2';



export default function B3MerchLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-main bg-cover bg-center">
      < DreamNav2  />
     
    </div>
  );
}
