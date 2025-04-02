import Link from "next/link";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  return (
    <div className="max-w-2xl mx-auto p-5 text-center">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

      <img src={product.image} alt={product.title} className="w-48 mx-auto my-4" />

      <p className="text-gray-300">{product.description}</p>
      <p className="font-bold text-lg mt-4">${product.price}</p>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-5">
        <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Home
        </Link>
        <Link href="/about" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
          Go to About Page
        </Link>
      </div>
    </div>
  );
}
