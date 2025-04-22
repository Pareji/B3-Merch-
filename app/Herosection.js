"use client";

export const HeroSection = ({ className }) => {
  return (
    <section 
      className={`bg-main relative h-[760px] w-full overflow-hidden ${className}`}
    >




        <div className="min-h-screen flex flex-col justify-center items-center gap-3">
          {/* Logo + MERCH Row */}
          <div className="flex items-center justify-center gap-3 align-baseline">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-[300px] md:h-[360px] lg:h-[400px] drop-shadow-2xl"
            />
            <h1 className="text-white text-[100px] md:text-[140px] lg:text-[157px] leading-none font-bold drop-shadow-[4px_4px_0px_rgba(0,0,0,0.6)] animate-pulse">
              MERCH
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-white text-center font-schoolbell text-[32px] md:text-[40px] lg:text-[48px] leading-tight animate-fadeIn drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
            Wear your dream...
          </p>
        </div>





      

      
      {/* Left Decorative Element - Full Hanger */}
      <div className="absolute left-[76px] top-[76px] w-[150px] h-[600px] pointer-events-none select-none">
        <div className="relative w-full h-full animate-sway origin-top">
          {/* Full Hanger SVG */}
          <img
            src="/images/without_text.svg"
            alt="Merch Hanger"
            className="w-full h-full object-contain"
          />

          {/* Hanging Text inside the tag */}
          <div className="absolute left-[45px] top-[467px] w-[72px] h-[100px] transform -rotate-[12.246deg] hover:-rotate-[3deg] transition-transform duration-700 ease-in-out z-20 pointer-events-none animate-bounce-slow">
            <div className="flex flex-col w-full h-full items-center justify-center text-black font-glacial text-[22px] leading-[1.3] text-center drop-shadow-md hover:drop-shadow-[0_0_6px_rgba(0,0,0,0.6)] transition-all duration-300">
              <span>New</span>
              <span>Merch</span>
              <span>Drop!!</span>
            </div>
          </div>
        </div>
      </div>









    </section>
  );
};
