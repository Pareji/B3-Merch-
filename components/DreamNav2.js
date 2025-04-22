"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function DreamNav2() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const toggleNav = () => setIsOpen((prev) => !prev);
  const handleSearch = (e) => setSearchQuery(e.target.value);


  

  return (
    <div>
      {/* Floating button */}
      <button
        onClick={toggleNav}
        className="fixed top-6 left-6 z-50 text-4xl text-white glow"
      >
        {isOpen ? "✕" : "• • •"}
      </button>

      {/* Fullscreen overlay nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xl flex flex-col items-center justify-start px-4 py-8"
        >
          <div className="w-full flex justify-center mt-15 mb-20 ml-8 px-4">
            <div className="flex items-center gap-25">
              <p className="font-glacial text-xl glow mr-20">
                You're looking gorgeous today!, Keep up the good vibe ^_^
              </p>
              {/* Search Bar */}
              <div className="search-bar flex items-center w-full max-w-lg bg-white/10 border border-white/20 rounded-xl px-4 py-1">
                <span className="text-white text-xl mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="bg-transparent font-schoolbell w-full text-white outline-none placeholder-white/70"
                />
              </div>
            </div>
          </div>


    


          {/* Icon Grid */}
          <div className="icon-grid w-full h-80vh max-w-6xl grid grid-cols-2 sm:grid-cols-4 gap-2xl bg-black/30 backdrop-blur-xl p-8 rounded-3xl shadow-2xl">
            {/* Icon Grid Items */}
             {/* Column 1 */}
             <div className="flex flex-col justify-center items-center gap-12 ">
              <div className="flex flex-col items-center ">
                <Image src="/icons/home.png" alt="home" width={84} height={84} />
              
              </div>
              <div className="flex flex-col items-center ">
                <Image src="/icons/collaborators.png" alt="collaborators" width={85} height={85} />
              
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center">
                <Image src="/icons/shop.png" alt="shop" width={85} height={85} />
              
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icons/donate.png" alt="donate" width={85} height={85} />
            
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center">
                <Image src="/icons/cart.png" alt="cart" width={85} height={85} />
                
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icons/join.png" alt="join" width={85} height={85} />
              
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center">
                <Image src="/icons/profile.png" alt="profile" width={85} height={85} />
              
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icons/about.png" alt="about" width={85} height={85} />
            
              </div>
            </div>
              
          </div>
          
          <div className="w-full flex justify-center mb-12 ml-10 px-4">


                 {/* NAVIGATIONS Text on Side */}
           <div   className="nav-heading fixed left-2 top-1/2 -translate-y-1/2 rotate-[-90deg] text-neoneon text-10xl mr-5 tracking-wide"
          style={{
            transform: 'rotate(-90deg)',
            transformOrigin: 'center',
            writingMode: 'vertical-rl',
          }}
          > NAVIGATIONS...
          </div>

          </div>


          {/* NAVIGATIONS Text on Side */}
<div
  className="nav-heading fixed left-2 top-1/2 -translate-y-1/2 rotate-[-90deg] text-neoneon text-10xl mr-5 tracking-wide"
  style={{
    transform: 'rotate(-90deg)',
    transformOrigin: 'center',
    writingMode: 'vertical-rl',
  }}
>
  NAVIGATIONS...
</div>
         





           
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
