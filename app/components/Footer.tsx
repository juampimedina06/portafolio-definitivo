"use client";

import Iridescence from '@/components/ui/ReactBits/Iridescence.css/Iridescence'
import { ArrowUpRight } from 'lucide-react';
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="sticky top-0 z-[20] w-full h-screen flex flex-col justify-between py-6 md:py-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-[#140d0a] overflow-hidden shadow-2xl shadow-black/50">
      {/* Iridescence Background */}
      <div className="absolute inset-0 z-0">
        <Iridescence mouseReact amplitude={0.05} speed={0.8} />
      </div>

      {/* Dark overlay & gray Glow */}
      <div className="absolute inset-0 z-[1] bg-black/60" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gray-900/10 rounded-full blur-[150px] pointer-events-none z-[1]" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col justify-between w-full h-full gap-4 md:gap-8 mt-2 md:mt-4">

        {/* Top Section: CTA + NAV */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">

          {/* Left Column: Logos & Call to Action */}
          <div className="lg:col-span-7 flex flex-col gap-4 md:gap-6">

            {/* Headline */}
            <h3 className="text-lg md:text-2xl lg:text-4xl font-black uppercase tracking-tight text-white leading-tight max-w-xl">
              ¿Querés saber más o te interesa que trabajemos juntos? Empecemos a hablar.
            </h3>

            {/* CTA Button */}
            <a
              href="mailto:jpmedinagomez1@gmail.com"
              className="inline-block bg-white text-black font-black uppercase text-[8px] md:text-[10px] tracking-[0.2em] px-6 py-2.5 md:px-8 md:py-4 rounded-full hover:bg-gray-500 hover:text-white transition-all duration-500 transform hover:scale-105 w-fit shadow-lg shadow-black/30"
            >
              Contactame
            </a>
          </div>

          {/* Right Column: Nav Columns & Blog Card */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-6 md:gap-12 justify-between w-full">

            {/* Nav Columns */}
            <div className="flex gap-10 md:gap-16">
              {/* Column 1: Navegación */}
              <div className="flex flex-col gap-2.5 md:gap-4">
                <span className="text-white/40 text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold">Navegación</span>
                <nav className="flex flex-col gap-1.5 md:gap-2.5">
                  <a href="#inicio" className="text-white/80 hover:text-gray-500 text-[10px] md:text-xs font-semibold tracking-wide transition-colors duration-300">Inicio</a>
                  <a href="#sobre-mi" className="text-white/80 hover:text-gray-500 text-[10px] md:text-xs font-semibold tracking-wide transition-colors duration-300">Sobre Mí</a>
                  <a href="#proyectos" className="text-white/80 hover:text-gray-500 text-[10px] md:text-xs font-semibold tracking-wide transition-colors duration-300">Proyectos</a>
                  <a href="#experiencia" className="text-white/80 hover:text-gray-500 text-[10px] md:text-xs font-semibold tracking-wide transition-colors duration-300">Experiencia</a>
                  <a href="#skills" className="text-white/80 hover:text-gray-500 text-[10px] md:text-xs font-semibold tracking-wide transition-colors duration-300">Skills</a>
                  <a href="#formaciones" className="text-white/80 hover:text-gray-500 text-[10px] md:text-xs font-semibold tracking-wide transition-colors duration-300">Formaciones</a>
                  <a href="#contacto" className="text-white/80 hover:text-gray-500 text-[10px] md:text-xs font-semibold tracking-wide transition-colors duration-300">Contacto</a>
                </nav>
              </div>

              {/* Column 2: Info & Socials */}
              <div className="flex flex-col gap-2.5 md:gap-4">
                <span className="text-white/40 text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold">Redes</span>
                <nav className="flex flex-col gap-1.5 md:gap-2.5">
                  <a href="https://www.linkedin.com/in/juan-pablo-medina-199b3b2b4/" target="_blank" className="group/link flex items-center gap-2 text-white/80 hover:text-gray-500 text-[10px] md:text-xs font-semibold tracking-wide transition-colors duration-300">LinkedIn
                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                  <a href="https://github.com/juampimedina06" target="_blank" className="group/link flex items-center gap-2 text-white/80 hover:text-gray-500 text-[10px] md:text-xs font-semibold tracking-wide transition-colors duration-300">GitHub
                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                  <a href="mailto:jpmedinagomez1@gmail.com" className="group/link flex items-center gap-2 text-white/80 hover:text-gray-500 text-[10px] md:text-xs font-semibold tracking-wide transition-colors duration-300">Email
                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                  <a href="/CV_JuanPablo_Medina_new.pdf" target="_blank" className="group/link flex items-center gap-2 text-white/80 hover:text-gray-500 text-[10px] md:text-xs font-semibold tracking-wide transition-colors duration-300">Descargar CV
                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </nav>
              </div>
            </div>

            {/* Mini Blog / Info Card */}
            <div className="hidden sm:flex flex-col gap-2.5 max-w-[220px] md:max-w-[260px] p-3 md:p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-gray-500/30 hover:bg-white/[0.08] transition-all duration-500 group cursor-default">
              <div className="w-full h-20 md:h-24 bg-gradient-to-br from-gray-800/20 to-black rounded-lg overflow-hidden border border-white/5 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-500/10 via-transparent to-transparent" />
              </div>
              <div className="space-y-1">
                <h4 className="text-white text-[10px] md:text-xs font-bold leading-snug group-hover:text-gray-400 transition-colors duration-300">
                  Desarrollo orientado a Performance y UX
                </h4>
                <p className="text-[9px] md:text-[10px] text-white/50 leading-relaxed">
                  Notas sobre optimización, Core Web Vitals y cómo construir interfaces modernas y rápidas en Next.js.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Section: Giant typography & credits */}
        <div className="mt-auto pt-4 md:pt-8 flex flex-col gap-3 md:gap-6 w-full border-t border-white/5">
          {/* Gigantic Text */}
          <div className="w-full overflow-hidden select-none">
            <h2 className="text-[13vw] font-black uppercase tracking-tighter text-white/95 leading-none text-center relative flex items-center justify-center">
              JUAN P. MEDINA
            </h2>
          </div>

          {/* Credits Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-white/40 text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold">
            <div>
              <span>Este sitio web fue diseñado y desarrollado con amor y cafe.</span>
            </div>
            <div>
              <span>Copyright © {currentYear} Juan Pablo Medina. The Guide to your Hero™</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer