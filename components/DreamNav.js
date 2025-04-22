'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DreamNav() {
  const [open, setOpen] = useState(true);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:p-8"
        >
          <div className="relative flex w-full max-w-6xl flex-col items-center justify-center rounded-3xl bg-black/50 p-4 sm:p-8 backdrop-blur-lg">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-white sm:right-8 sm:top-8"
            >
              <span className="text-3xl sm:text-4xl">×</span>
            </button>

            {/* Big Container */}
            <div className="flex w-full flex-col gap-8">
              {/* Top Section - Greeting Text + Search Bar */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-start sm:justify-between">
                {/* Greeting Text */}
                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-center text-lg font-medium text-pink-300 sm:text-left sm:text-2xl"
                >
                  You're looking gorgeous today!<br />Keep up the good vibe ^_^
                </motion.h2>

                {/* Search Bar */}
                <div className="relative w-full max-w-md">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded-full border border-white/30 bg-transparent px-6 py-2 text-white placeholder-white/70 backdrop-blur-md"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white">🔍</span>
                </div>
              </div>

              {/* Bottom Section - Icon Grid + NAVIGATIONS */}
              <div className="flex flex-col items-center gap-6">
                {/* Icon Grid */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-4"
                >
                  {[
                    { label: 'Home', icon: '/icons/home.png' },
                    { label: 'Shop', icon: '/icons/shop.png' },
                    { label: 'Cart', icon: '/icons/cart.png' },
                    { label: 'Profile', icon: '/icons/profile.png' },
                    { label: 'Collaborators', icon: '/icons/collaborators.png' },
                    { label: 'Donate', icon: '/icons/donate.png' },
                    { label: 'Join', icon: '/icons/join.png' },
                    { label: 'About', icon: '/icons/about.png' },
                  ].map(({ label, icon }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center justify-center gap-2 text-white"
                    >
                      <Image
                        src={icon}
                        alt={label}
                        width={50}
                        height={50}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                  ))}
                </motion.div>

                {/* NAVIGATIONS Text */}
                <div className="text-center text-2xl font-extrabold tracking-widest text-white">
                  NAVIGATIONS...
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
