import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/globals.css';

export default function DreamNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed top-5 left-5 z-50 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? (
          <div className="text-glacial text-xl tracking-widest glow">...</div>
        ) : (
          <div className="text-glacial text-3xl glow">×</div>
        )}
      </div>

      {/* Fullscreen Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 backdrop-blur-md bg-black/40 flex flex-col items-center justify-start pt-20 px-8">
          {/* Top Row */}
          <div className="w-full flex justify-between items-center mb-12 px-4">
            <p className="text-glacial text-lg glow">You're looking gorgeous today!<br />Keep up the good vibe ^_^</p>
            <div className="relative w-[300px] max-w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 pl-10 rounded-xl border border-white/40 bg-white/10 text-white placeholder-white focus:outline-none"
              />
              <span className="absolute left-3 top-2.5 text-white">🔍</span>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <NavItem href="/" src="/icons/home.png" alt="Home" />
            <NavItem href="/shop" src="/icons/shop.png" alt="Shop" />
            <NavItem href="/cart" src="/icons/cart.png" alt="Cart" />
            <NavItem href="/profile" src="/icons/profile.png" alt="Profile" />
            <NavItem href="/collaborators" src="/icons/collaborators.png" alt="Collaborators" />
            <NavItem href="/donate" src="/icons/donate.png" alt="Donate" />
            <NavItem href="/join" src="/icons/join.png" alt="Join" />
            <NavItem href="/about" src="/icons/about.png" alt="About" />
          </div>

          {/* NAVIGATIONS Text on Side */}
          <div className="fixed left-2 top-1/2 -translate-y-1/2 rotate-[-90deg] text-neoneon text-3xl tracking-wide">
            NAVIGATIONS
          </div>
        </div>
      )}
    </>
  );
}

function NavItem({ href, src, alt }) {
  return (
    <Link href={href}>
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        className="hover:scale-105 transition-transform duration-300"
        priority
      />
    </Link>
  );
}
