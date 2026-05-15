import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Pablo Medina | Portfolio",
  description:
    "Full Stack Developer following Swiss International Style principles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased font-sans bg-black text-white relative`}
      >
        {/* Global Textured Background */}
        <div className="fixed inset-0 z-[-1] opacity-40 pointer-events-none">
          <img
            src="/imagenes/imagen_fondo.png"
            alt=""
            className="w-full h-full object-cover grayscale brightness-[0.3]"
          />
        </div>

        <NavBar />
        <main className="relative z-0 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
