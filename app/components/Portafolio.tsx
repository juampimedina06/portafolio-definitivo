"use client";

import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { projects } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

const Portafolio = () => {
  const containerRef = useRef<HTMLElement>(null);
  const router = useRouter();

  return (
    <section ref={containerRef} id="proyectos" className="relative w-full py-24 px-4 md:px-12  mt-16">
      {/* Intro Header */}
      <div className="mb-20">
        <span className="text-white text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">
          [ 01 ] Portfolio
        </span>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
          Proyectos Destacados
        </h2>
        <p className="text-white/50 text-sm leading-relaxed max-w-sm mt-4">
          Arquitectura limpia, rendimiento brutal. Una selección de aplicaciones diseñadas para escalar.
        </p>
      </div>

      {/* Normal flow projects container */}
      <div className="relative flex flex-col w-full mt-16 border-t border-white/10">
        {projects.map((project, index) => (
          <div
            key={project.slug}
            onClick={() => {
              router.push(`/proyectos/${project.slug}`, { scroll: true })
            }}
            className="w-full border-b border-white/10 py-16 md:py-24 cursor-pointer transition-colors hover:bg-white/[0.01]"
          >
            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

              {/* Left Side: Media Showcase (Video with elegant zoom on hover) */}
              <div className="lg:col-span-7 w-full">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#121214] border border-white/5 shadow-2xl group/media">
                  <Image
                    src={project.imagen}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover/media:scale-105"
                  />
                  {/* Subtle inner reflection mask */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
                </div>
              </div>

              {/* Right Side: Metadata and Info */}
              <div className="lg:col-span-5 flex flex-col justify-between min-h-full">
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white mb-6 leading-tight transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-white/50 text-sm md:text-lg mb-8 max-w-[80ch]  ">
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <div className="mt-8 border-t border-white/10 pt-4">
                      {/* Encabezado sutil estilo Suizo (opcional, pero le da el contexto analítico) */}
                      <p className="text-[10px] font-bold  tracking-[0.2em] text-white/40 mb-4 ">
                        Implementaciones Técnicas
                      </p>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                        {project.implementaciones.map((implementation, index) => (
                          <li
                            key={index}
                            className="group flex items-baseline gap-3 border-b border-white/[0.04] pb-2 font-mono text-xs text-white/70 hover:text-white transition-colors duration-200"
                          >
                            {/* Indicador numérico minimalista (ej. 01, 02) */}
                            <span className="text-[9px] font-bold tracking-wider text-white/30 group-hover:text-sky-400 transition-colors">
                              {(index + 1).toString().padStart(2, '0')}
                            </span>

                            {/* Texto principal chico y refinado */}
                            <span className="font-sans font-normal tracking-wide leading-tight">
                              {implementation}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Specs list (Premium and integrated touch) */}
                <div className="border-t border-white/10 pt-6 mt-4">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-xs mb-8">
                    <div>
                      <span className="text-white/30 text-[9px] uppercase tracking-wider block mb-1">Rol</span>
                      <span className="text-white/80 font-medium">{project.role}</span>
                    </div>
                    <div>
                      <span className="text-white/30 text-[9px] uppercase tracking-wider block mb-1">Año</span>
                      <span className="text-white/80 font-medium">{project.year}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-white/30 text-[9px] uppercase tracking-wider block mb-1">Stack</span>
                      <span className="text-white/80 font-medium">{project.tech}</span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <button
                      className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-all group font-mono text-[10px] uppercase tracking-wider"
                      onClick={() => router.push(`/proyectos/${project.slug}`)}
                    >
                      <span>Ver Proyecto Completo</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section >
  );
};

export default Portafolio;
