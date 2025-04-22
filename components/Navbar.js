'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="relative z-50">
      {/* Toggle Button */}
      <button
        className="fixed top-10 left-8 z-50 flex flex-row items-center justify-center  group gap-0.9"
        onClick={() => setNavOpen(!navOpen)}
      >
        {navOpen ? (
          <div className="text-white text-4xl">×</div>
        ) : (
          <>
            <span className="w-1 h-1 bg-white rounded-full group-hover:scale-125 transition"></span>
            <span className="w-1 h-1 bg-white rounded-full group-hover:scale-125 transition"></span>
            <span className="w-1 h-1 bg-white rounded-full group-hover:scale-125 transition"></span>
          </>
        )}
      </button>

      {/* Fullscreen Nav */}
      {navOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-lg bg-cover bg-center flex flex-col items-center justify-center p-6">
        

          {/* Neon Vertical Text */}
          <div className="absolute left-60 z-50 top-1/2 -translate-y-1/2 rotate-[90deg] origin-left pl-8">
            <h1
              className="absolute left-0 top-1/2 -translate-y-1/2 rotate-180 origin-left text-xs text-white tracking-widest whitespace-nowrap overflow-hidden max-h-screen"
              style={{ fontFamily: 'Neoneon' }}
            >
              NAVIGATIONS...
            </h1>
          </div>

          {/* Greeting + Search */}
          <div className="flex flex-col items-center mb-12 space-y-4 text-center">
            <h2 className="text-yellow-300 text-xl font-schoolbell drop-shadow-[0_0_10px_rgba(255,255,0,0.8)">
              You're looking gorgeous today! <br />
              Keep up the good vibe ^_^
            </h2>
            <div className="relative w-[60vw] max-w-md">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 rounded-full border border-white text-white bg-white/10 backdrop-blur-lg focus:outline-none placeholder-white"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white">🔍</div>
            </div>
          </div>

          {/* Icon Grid */}
          <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-4 gap-6 bg-black/30 backdrop-blur-xl p-8 rounded-3xl shadow-2xl">
            {/* Column 1 */}
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-center scale-125">
                <Image src="/icons/home.png" alt="home" width={64} height={64} />
              
              </div>
              <div className="flex flex-col items-center scale-125">
                <Image src="/icons/collaborators.png" alt="collaborators" width={64} height={70} />
              
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center">
                <Image src="/icons/shop.png" alt="shop" width={48} height={48} />
              
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icons/donate.png" alt="donate" width={48} height={48} />
            
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center">
                <Image src="/icons/cart.png" alt="cart" width={48} height={48} />
                
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icons/join.png" alt="join" width={48} height={48} />
              
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center">
                <Image src="/icons/profile.png" alt="profile" width={48} height={48} />
              
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icons/about.png" alt="about" width={48} height={48} />
            
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
