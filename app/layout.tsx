import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Container from "@/components/Container";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
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
        className={`${plusJakartaSans.variable} antialiased font-sans`}
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
