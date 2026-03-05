import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Container from "@/components/Container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio de Juan Pablo Medina",
  description: "Portafolio de Juan Pablo Medina, desarrollador web y diseñador gráfico en proceso. Aquí encontrarás mis proyectos, habilidades y experiencia en el mundo del desarrollo web y diseño gráfico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Container>
          <NavBar />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
