
import localFont from "next/font/local";
import "./globals.css";



// const neoneon = localFont({
//   src: [
//     {
//       path: "public/fonts/Neoneon.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "public/fonts/Neoneon.ttf",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   variable: "--font-neoneon", // Creates a CSS variable for Tailwind
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
