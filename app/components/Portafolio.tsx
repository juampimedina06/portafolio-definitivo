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
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#121214] border border-white/5 shadow-2xl group/media">
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
                  <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-bold text-white/40 mb-6">
                    <span>{project.tag}</span>
                    <span className="font-mono text-base text-white/20">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6 leading-tight transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 max-w-lg font-light">
                    {project.description}
                  </p>
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

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group/link text-white font-medium uppercase text-[11px] tracking-wider hover:text-white/80 transition-colors inline-flex items-center gap-1.5 w-max border-b border-white/20 hover:border-white pb-1.5"
                    >
                      Ver Código Fuente
                      <ArrowUpRight className="w-4 h-4 text-white/40 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                  )}
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
