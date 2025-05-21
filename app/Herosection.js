"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const HeroSection = ({ className }) => {
  // Client-side only rendering for hydration error prevention
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      className={`border-2 border-red-500  relative min-h-[600px] md:h-[760px] w-full overflow-hidden ${className}`}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Decorative Element - Full Hanger */}
      {isMounted && (
        <div className="absolute left-[20px] md:left-[76px] top-[76px] w-[100px] md:w-[150px] h-[300px] md:h-[600px] pointer-events-none select-none">
          <div className="relative w-full h-full animate-sway origin-top">
            {/* Full Hanger SVG */}
            <img
              src="/images/without_text.svg"
              alt="Merch Hanger"
              className="w-full h-full object-contain"
            />

            {/* Hanging Text inside the tag */}
            <div className="absolute left-[30px] md:left-[45px] top-[75%] md:top-[467px] w-[50px] md:w-[72px] h-[80px] md:h-[100px] transform -rotate-[12.246deg] hover:-rotate-[3deg] transition-transform duration-700 ease-in-out z-20 pointer-events-none animate-bounce-slow">
              <div className="flex flex-col w-full h-full items-center justify-center text-black font-glacial text-[12px] md:text-[22px] leading-[1.2] md:leading-[1.3] text-center drop-shadow-md hover:drop-shadow-[0_0_6px_rgba(0,0,0,0.6)] transition-all duration-300">
                <span>New</span>
                <span>Merch</span>
                <span>Drop!</span>
              </div>
            </div>
          </div>
        </div>
      )}



      {/* Main Content Container */}
      <div className="flex flex-col items-center justify-center h-full w-full pt-[100px] md:pt-0">
        {/* Logo and Text */}
        <div className="flex flex-col items-center mb-12">
          {/* Logo with B3 */}
          <div className="flex items-end justify-center mb-0 gap-5">
            <img 
              src="/images/logo.png" 
              alt="B3 Logo" 
              className="h-[120px] md:h-[180px] object-contain mb-2.5 md:mb-6.5 "
            />
            <h1 className="text-[60px] md:text-[120px] font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-100 ml-2 translate-y-2 md:translate-y-3 ">MERCH</h1>
          </div>
          
          {/* Tagline */}
          <p className="text-[28px] md:text-[52px] text-white font-schoolbell">Wear your dream...</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-30 mt-8">
          <Link href="/shop">
            <button className="w-[140px] sm:w-[180px] md:w-[240px] px-4 sm:px-8 py-2 sm:py-3 text-[16px] sm:text-[18px] md:text-[24px] font-glacial text-green-300 border-2 border-white rounded-full hover:bg-white/10 transition-all duration-300 shadow-[0_0_15px_rgba(134,239,172,0.4)] hover:shadow-[0_0_20px_rgba(134,239,172,0.6)]">
              Shop Now!
            </button>
          </Link>
          <Link href="/join">
            <button className="w-[140px] sm:w-[180px] md:w-[240px] px-4 sm:px-8 py-2 sm:py-3 text-[16px] sm:text-[18px] md:text-[24px] font-glacial text-purple-300 border-2 border-white rounded-full hover:bg-white/10 transition-all duration-300 shadow-[0_0_15px_rgba(216,180,254,0.4)] hover:shadow-[0_0_20px_rgba(216,180,254,0.6)]">
              Join Us!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};