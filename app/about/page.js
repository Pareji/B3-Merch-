"use client"; // ✅ Makes the entire page a Client Component
import Button from "../components/Button";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">About B³ Merch</h1>
      <h1 className="">Hello, Neoneon!</h1>
      

      <Button
        text="Go Home"
        onClick={() => alert("Going Home!")} // ✅ Works now
        className="mt-4"
      />
    </div>
  );
}
