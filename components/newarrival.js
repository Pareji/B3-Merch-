// components/ProductSection.js
'use client';

import { useState, useEffect } from 'react';

// Product Card Component
export function ProductCard({ title, creator, price, oldPrice, imageSrc, onAddToCart, onBuyNow }) {
  return (
    <div className="  max-w-[95vw] min-h-[20vh] rounded-3xl  backdrop-blur-md border-2 border-white/80 px-4 py-2 flex gap-1 mb-1">
      <div className="w-3/5 flex items-center justify-start">
        <img 
          src={imageSrc} 
          alt={title} 
          className="h-auto w-[30vw] shrink object-contain" 
        />
      </div>

      <div className="flex flex-col justify-center w-2/5 shrink gap-2">
        <div>
          <h3 className="text-[2.8vw] font-semibold text-white truncate">{title}</h3>
          <p className="text-[2.4vw] text-white/80 truncate">{creator}</p>
          <div className="flex flex-col mt-1">
            <span className="text-glow-red line-through text-[2.2vw]">₹{oldPrice}</span>
            <span className="text-glow-green font-semibold text-[2.6vw]">₹{price}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-1 shrink mt-1">
          <button 
            onClick={onAddToCart}
            className="bg-transparent border border-white/30 text-white p-1 text-[2.5vw] rounded-full hover:bg-white/10 transition-all"
          >
            Add to cart
          </button>
          <button 
            onClick={onBuyNow}
            className="bg-transparent border border-white/30 text-glow-green p-1 text-[2.5vw] rounded-full hover:bg-green-500/10 transition-all"
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
  
  // Get current page products
  const currentProducts = products.slice(
    currentPage * productsPerPage, 
    (currentPage + 1) * productsPerPage
  );
  
  // Handle page change
  const changePage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  {/* ye main function hai ig ye bavkground se related hai */}
  return (
    <section className=" border-2 border-red-500  relative p-6  flex flex-row  justify-center gap-4  max-h-30vh ">
      {/* NEW ARRIVAL Vertical Text */}
      <div className="flex items-baseline justify-center z-10">
        <div
          className="rotate-180 text-white/80 tracking-widest text-5xl grow md:text-5xl  font-bold"
          style={{ writingMode: "vertical-rl" }}
        >
          NEW ARRIVAL...
        </div>
      </div>





   
      
      {/* Just dropped and product grid */}
      <div className="flex flex-col justify-content-start object-contain w-4/5 gap-2 ">
        <div className=" h-[fit-content]">
          <div className="relative z-10 flex items-center">
            <span className="text-glow-yellow text-white font-glacial mr-2">✗</span>
            <h2 className="text-xl  font-glacial text-white text-glow-yellow">
              Just dropped...
            </h2>
          </div>
        </div>
      
        {/* Product Grid */}
        <div className="relative z-10 grid grid-cols-1 rounded-3xl  bg-black/40 md:grid-cols-2 font-glacial gap-2 p-3 ">
          {currentProducts.map((product, index) => (
            <ProductCard
            key={`${currentPage}-${index}`}
            title={product.title}
            creator={product.creator}
            price={product.price}
            oldPrice={product.oldPrice}
            imageSrc={product.imageSrc}
            onAddToCart={() => console.log(`Added ${product.title} to cart`)}
            onBuyNow={() => console.log(`Buying ${product.title} now`)}
            />
          ))}

            {totalPages > 0 && (
              <div className="mt-6 flex justify-center gap-3">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changePage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all  transform -translate-y-1/2 ${currentPage === index
                        ? "bg-green-400 shadow shadow-green-400/50 scale-110"
                        : "bg-gray-400 opacity-50"
                      }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            )}


          
        </div>

        {totalPages > 0 && (
          <div className="mt-6 flex justify-center gap-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => changePage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all  transform -translate-y-1/2 ${currentPage === index
                    ? "bg-green-400 shadow shadow-green-400/50 scale-110"
                    : "bg-gray-400 opacity-50"
                  }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}





      </div>
      </section>
  );
}




      
      


      {/* Just dropped header
      <div className="flex flex-col justify-content-start h-[fit-content]">
        <div className="relative z-10 flex items-center">
          <span className="text-red-500 mr-2">✗</span>
          <h2 className="text-sm md:text-4xl font-schoolbell text-yellow-300">
            Just dropped...
          </h2>
        </div>
      </div>

      {/* Products Grid with limited visibility 
      <div className="relative z-10 grid grid-cols-1 rounded-3xl  bg-black/40 md:grid-cols-2 font-glacial gap-4 p-6 md:py-8 md:px-15 w-3/5 md:w-4/5">
        {currentProducts.map((product, index) => (
          <ProductCard
            key={`${currentPage}-${index}`}
            title={product.title}
            creator={product.creator}
            price={product.price}
            oldPrice={product.oldPrice}
            imageSrc={product.imageSrc}
            onAddToCart={() => console.log(`Added ${product.title} to cart`)}
            onBuyNow={() => console.log(`Buying ${product.title} now`)}
          />
        ))}
      </div>  */}

      {/* Page indicator dots 
      {totalPages > 0 && (
        <div className="absolute right-6 top-[54%] transform -translate-y-1/2 flex flex-col gap-2 z-10">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => changePage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentPage === index
                  ? "bg-green-400 shadow-lg shadow-green-400/50"
                  : "bg-gray-400 opacity-50"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div> 
      )} */}
