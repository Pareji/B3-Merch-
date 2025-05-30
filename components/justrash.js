// components/ProductSection.js
"use client";

import { useState, useEffect } from "react";

// Product Card Component
export function ProductCard({
  title,
  creator,
  price,
  oldPrice,
  imageSrc,
  onAddToCart,
  onBuyNow,
}) {
  return (
    <div className=" relative rounded-3xl overflow-hidden bg-black/10 backdrop-blur-md border border-white p-1 md:p-4 flex gap-1">
      <div className="flex-shrink-0 w-3/5">
        <img
          src={imageSrc}
          alt={title}
          className="h-40 w-auto object-contain"
        />
      </div>

      <div className="flex-shrink-0 flex flex-col justify-between  w-2/5">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white truncate">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-white/80 truncate">{creator}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-gray-400 line-through text-xs sm:text-sm">
              ₹{oldPrice}
            </span>
            <span className="text-green-400 font-bold text-sm sm:text-base">
              ₹{price}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-2 ">
          <button
            onClick={onAddToCart}
            className="bg-transparent border border-white/30 text-white py-1 px-4 text-xs sm:text-sm rounded-full hover:bg-white/10 transition-all"
          >
            Add to cart
          </button>
          <button
            onClick={onBuyNow}
            className="bg-transparent border border-white/30 text-green-400 py-1 px-4 text-xs sm:text-sm rounded-full hover:bg-green-500/10 transition-all"
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
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
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

  {
    /* ye main function hai ig ye bavkground se related hai */
  }
  return (
    <section className=" border-2 border-blue-500  relative w-full py-4 px-4 md:py-20 md:px-10 overflow-hidden flex flex-row justify-center gap-1 md:gap-3">
      <div className="w-1/5 z-10">
        {/* NEW ARRIVAL Vertical Text */}
        <div
          className="rotate-180 text-white/80 tracking-widest text-xl md:text-6xl lg:text-7xl flex items-center justify-center font-bold w-full"
          style={{ writingMode: "vertical-rl" }}
        >
          NEW ARRIVAL...
        </div>
      </div>
      <div className="flex flex-col gap-6 justify-content-start w-3/5 md:w-4/5">
        {/* Just dropped header */}
        <div className="relative z-10 flex items-center ">
          <span className="text-red-500 mr-2">✗</span>
          <h2 className="text-sm md:text-4xl font-schoolbell text-yellow-300">
            Just dropped...
          </h2>
      </div>

        {/* Products Grid with limited visibility */}
        <div className="relative z-10 grid grid-cols-1 rounded-3xl  bg-black/40 md:grid-cols-2 font-glacial gap-4 p-6 md:py-8 md:px-15 ">
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
        </div>
      </div>
      <div>
        {/* Page indicator dots */}
        {totalPages > 1 && (
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-10">
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
        )}
      </div>
    </section>
  );
}