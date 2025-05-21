// components/ProductCard.js
'use client';

export default function ProductCard({ title, creator, price, oldPrice, imageSrc, onAddToCart, onBuyNow }) {
  const handleAddToCart = () => {
    if (onAddToCart) onAddToCart(); 
  };

  const handleBuyNow = () => {
    if (onBuyNow) onBuyNow();
  };

  return (
   <div className="aspect-[5/4] w-[clamp(250px,30vw,300px)] rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 p-4 flex gap-4">

      <div className="flex-shrink-0">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-32 h-auto object-contain"
        />
      </div>
      
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-white/80">{creator}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-gray-400 line-through text-sm">₹{oldPrice}</span>
            <span className="text-green-400 font-bold">₹{price}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 mt-2">
          <button 
            onClick={handleAddToCart}
            className="bg-transparent border border-white/30 text-white py-1 px-4 rounded-full  hover:bg-white/10 transition-all"
          >
            Add to cart
          </button>
          <button 
            onClick={handleBuyNow}
            className="bg-transparent border border-white/30 text-green-400 py-1 px-4 rounded-full  hover:bg-green-500/10 transition-all"
          >
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  );
}

