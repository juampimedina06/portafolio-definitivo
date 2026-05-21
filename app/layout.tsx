import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import Container from "@/components/Container";
import SmoothScroll from "@/components/ui/SmoothScroll";

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
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} antialiased font-sans bg-black`}
      >
        <SmoothScroll />
        <Container>
          <div className=''>
            <NavBar />
          </div>
          {children}
        </Container>
      </body>
    </html>
  );
}
