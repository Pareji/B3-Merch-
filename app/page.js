import { HeroSection } from './Herosection';
import ProductSection from '../components/another';

export const metadata = {
  title: "b³ Merch",
  description: "Wear your dream...",
};

export default function HomePage() {
  // Sample product data for the "Just dropped..." section
  const newArrivals = [
    {
      title: "King of Pirates",
      creator: "Creator's name",
      price: "799",
      oldPrice: "999",
      imageSrc: "/images/tshirt-pirate.png" // Update with your actual image path
    },
    {
      title: "King of Pirates",
      creator: "Creator's name",
      price: "799",
      oldPrice: "999",
      imageSrc: "/images/tshirt-pirate.png"
    },
    {
      title: "King of Pirates",
      creator: "Creator's name",
      price: "799",
      oldPrice: "999",
      imageSrc: "/images/tshirt-pirate.png"
    },
    {
      title: "King of Pirates",
      creator: "Creator's name",
      price: "799",
      oldPrice: "999",
      imageSrc: "/images/tshirt-pirate.png"
    }
  ];


  return (
    <main className="bg-main relative w-full overflow-hidden"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            <div className="bg-image-fixed" />
                <HeroSection />
                
                {/* Product section without extra height constraints */}
                <ProductSection products={newArrivals} />
    </main>
  );
}