import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-center gap-6 shadow-lg">
      <Link href="/" className="hover:text-yellow-400 transition-colors duration-300">Home</Link>
      <Link href="/about" className="hover:text-yellow-400 transition-colors duration-300">About</Link>
      <Link href="/contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</Link>
    </nav>
  );
}
