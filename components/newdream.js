import React from "react";

export default function newdream() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-start gap-4 p-4 overflow-y-auto backdrop-blur-xl bg-black/40">
      {/* Container Wrap */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Navigation Heading */}
        <div className="flex flex-col items-center md:items-start md:w-1/5">
          <p className="text-white text-3xl font-extrabold rotate-0 md:-rotate-90 tracking-widest text-center md:text-left">
            NAVIGATIONS...
          </p>
          <button className="mt-4 text-pink-400 text-4xl">×</button>
        </div>

        {/* Greeting + Search */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
          <p className="text-pink-400 text-lg md:text-xl text-center md:text-left">
            You're looking gorgeous today!<br />Keep up the good vibe ^_^
          </p>
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-lg">🔍</span>
          </div>
        </div>
      </div>

      {/* Icon Grid */}
      <div className="w-full max-w-5xl mt-6 p-6 rounded-3xl bg-black/50 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {[
          { label: "Home", icon: "/icons/home.png" },
          { label: "Shop", icon: "/icons/shop.png" },
          { label: "Cart", icon: "/icons/cart.png" },
          { label: "Profile", icon: "/icons/profile.png" },
          { label: "Collaborators", icon: "/icons/collaborators.png" },
          { label: "Donate", icon: "/icons/donate.png" },
          { label: "Join", icon: "/icons/join.png" },
          { label: "About", icon: "/icons/about.png" },
        ].map(({ label, icon }) => (
          <div key={label} className="flex flex-col items-center text-white">
            <img src={icon} alt={label} className="w-10 h-10 md:w-14 md:h-14 mb-2" />
            <span className="text-sm md:text-base text-center">{label}</span>
          </div>
        ))}
      </div>
    </div>
   );
}
