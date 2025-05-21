"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
        className="fixed top-22 right-15 z-50 text-5xl text-white glow"
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
            {/* Header area with greeting and search - reduced gap */}
            <div className="w-full flex flex-wrap justify-between items-center mt-8 mb-6 px-35 gap-0">
              {/* Greeting text with yellow glow */}
              <div className="font-glacial text-2xl text-yellow-300 glow leading-relaxed">
                You're looking gorgeous today!<br />
                Keep up the good vibe ^_^
              </div>
              
              {/* Search Bar */}
              <div className="search-bar flex items-center w-full max-w-md bg-white/10 border border-white/20 rounded-xl px-4 py-2 ml-4">
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

            {/* Main navigation grid */}
            <div className="icon-grid w-full max-w-6xl grid grid-cols-2 sm:grid-cols-4 gap-y-16 gap-x-12 bg-black/30 backdrop-blur-xl p-12 rounded-3xl shadow-2xl">
              {/* First Row */}
              <Link href="/" className="flex flex-col items-center">
                <Image src="/icons/home.png" alt="Home" width={120} height={120} />
              </Link>
              
              <Link href="/shop" className="flex flex-col items-center">
                <Image src="/icons/shop.png" alt="Shop" width={85} height={85} />
              </Link>
              
              <Link href="/cart" className="flex flex-col items-center">
                <Image src="/icons/cart.png" alt="Cart" width={85} height={85} />
              </Link>
              
              <Link href="/profile" className="flex flex-col items-center">
                <Image src="/icons/profile.png" alt="Profile" width={85} height={85} />
              </Link>
              
              {/* Second Row */}
              <Link href="/collaborators" className="flex flex-col items-center">
                <Image src="/icons/collaborators.png" alt="Collaborators" width={120} height={120} />
              </Link>
              
              <Link href="/donate" className="flex flex-col items-center">
                <Image src="/icons/donate.png" alt="Donate" width={85} height={85} />
              </Link>
              
              <Link href="/join" className="flex flex-col items-center">
                <Image src="/icons/join.png" alt="Join" width={85} height={85} />
              </Link>
              
              <Link href="/about" className="flex flex-col items-center">
                <Image src="/icons/about.png" alt="About" width={85} height={85} />
              </Link>
            </div>

            {/* NAVIGATIONS text on side */}
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