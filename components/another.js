// components/ProductSection.js
'use client';

import { useState, useEffect, useRef } from 'react';

// Product Card Component
export function ProductCard({ title, creator, price, oldPrice, imageSrc, onAddToCart, onBuyNow }) {
  return (
    <div className="max-w-[95vw] md:max-w-full  min-h-[20vh] rounded-3xl backdrop-blur-md border-2 border-white/80 px-4 py-2 flex gap-1 mb-1 flex-shrink-0 mr-0.5 md:gap-4 ">
      <div className="w-3/5 flex items-center justify-start">
        <img 
          src={imageSrc} 
          alt={title} 
          className="h-auto w-[30vw] md:h-40 md:w-auto shrink object-contain" 
        />
      </div>

      <div className="flex flex-col justify-center w-2/5 shrink gap-2">
        <div>
          <h3 className="text-[2.8vw] md:text-xl- font-semibold text-white truncate">{title}</h3>
          <p className="text-[2.4vw]   md:text-xl text-white/80 truncate">{creator}</p>
          <div className="flex flex-col mt-1">
            <span className="text-glow-red line-through text-[2.2vw]  md:text-xl ">₹{oldPrice}</span>
            <span className="text-glow-green font-semibold text-[2.6vw]  md:text-sm">₹{price}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-1 md:gap-2 shrink mt-1">
          <button 
            onClick={onAddToCart}
            className="bg-transparent border border-white/30 text-white p-1 md:p-2 text-[2.5vw]  md:text-sm rounded-full hover:bg-white/10 transition-all"
          >
            Add to cart
          </button>
          <button 
            onClick={onBuyNow}
            className="bg-transparent border border-white/30 text-glow-green p-1 md:p-2 text-[2.5vw] md:text-sm  rounded-full hover:bg-green-500/10 transition-all"
          >
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Product Section Component
export default function ProductSection({ products = [] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(4);
  const scrollContainerRef = useRef(null);
  const isScrollingRef = useRef(false);
  
  // Update productsPerPage based on screen size
  useEffect(() => {
    const handleResize = () => {
      setProductsPerPage(window.innerWidth >= 768 ? 4 : 2);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);
  
  // Handle scroll to detect page changes
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current || isScrollingRef.current) return;
      
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const newPage = Math.round(scrollLeft / containerWidth);
      
      if (newPage !== currentPage && newPage >= 0 && newPage < totalPages) {
        setCurrentPage(newPage);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [currentPage, totalPages]);
  
  // Handle page indicator click
  const changePage = (pageIndex) => {
    if (!scrollContainerRef.current) return;
    
    isScrollingRef.current = true;
    const container = scrollContainerRef.current;
    const targetScrollLeft = pageIndex * container.clientWidth;
    
    container.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth'
    });
    
    setCurrentPage(pageIndex);
    
    // Reset scrolling flag after animation
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 500);
  };

  // Group products into pages
  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    const pageProducts = products.slice(i * productsPerPage, (i + 1) * productsPerPage);
    pages.push(pageProducts);
  }

  return (
    <section className="border-2 border-red-500 relative p-6 md:p-7 flex flex-row justify-center gap-4 md:gap-5 w-full md:my-3">
      {/* NEW ARRIVAL Vertical Text */}
      <div className="flex items-end justify-center z-10 pb-3  ">
        <div
          className="rotate-180 text-white/80 tracking-widest md:text-5xl  font-bold"
          style={{ writingMode: "vertical-rl",
            fontSize: 'clamp(2.8rem, 8vw, 4.3rem)'
           }}
        
        >
          NEW ARRIVAL...
        </div>
      </div>
      
      {/* Just dropped and product grid */}
      <div className="flex flex-col justify-content-start object-contain w-4/5 gap-2">
        <div className="h-[fit-content]">
          <div className="relative z-10 flex items-center">
            <span className="text-glow-yellow text-white font-glacial mr-2">✗</span>
            <h2 className="text-xl md:text-4xl font-glacial text-white text-glow-yellow">
              Just dropped...
            </h2>
          </div>
        </div>
      
        {/* Product Grid Container with Scroll */}
        <div className="relative">
          {/* Scrollable Product Grid */}
          <div 
            ref={scrollContainerRef}
            className="relative z-10 overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' }
            }}
          >
            <div className="flex gap-0" style={{ width: `${totalPages * 100}%` }}>
              {pages.map((pageProducts, pageIndex) => (
                <div 
                  key={pageIndex}
                  className="grid grid-cols-1 md:grid-cols-2 rounded-3xl bg-black/40 font-glacial gap-2 md:gap-4   p-3 pr-6 md:py-8 md:px-15 snap-start flex-shrink-0"
                  style={{ width: `${100 / totalPages}%` }}
                >
                  {pageProducts.map((product, index) => (
                    <ProductCard
                      key={`${pageIndex}-${index}`}
                      title={product.title}
                      creator={product.creator}
                      price={product.price}
                      oldPrice={product.oldPrice}
                      imageSrc={product.imageSrc}
                      onAddToCart={() => console.log(`Added ${product.title} to cart`)}
                      onBuyNow={() => console.log(`Buying ${product.title} now`)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Page Indicators */}
          {totalPages > 1 && (
            <div className="absolute right-1.5 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-20">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => changePage(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentPage === index
                      ? "bg-green-400 shadow shadow-green-400/50 scale-110"
                      : "bg-gray-400 opacity-50 hover:opacity-75"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}