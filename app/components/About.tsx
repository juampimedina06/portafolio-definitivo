"use client";

import React, { useRef } from "react";
import imagenJuanPabloMedina from "@/public/imagenes/traje_foto.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRefs = useRef<(HTMLElement | null)[]>([]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      tl.from(imageRef.current, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        duration: 1.5,
        ease: "power4.inOut",
      }).from(
        textRefs.current,
        {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=1",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="sobre-mi"
      className="relative w-full py-24 md:py-32 px-4 md:px-12  mt-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">
        {/* Left Column - Imposing Image */}
        <div className="md:col-span-5 md:border-r border-white/20 px-4 md:px-12 flex flex-col justify-center">
          <div className="w-full aspect-[3/4] overflow-hidden relative group">
            <img
              ref={imageRef}
              src={imagenJuanPabloMedina.src}
              alt="Juan Pablo Medina"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            />
          </div>
        </div>

        {/* Right Column - Editorial Typography */}
        <div className="md:col-span-7 flex flex-col justify-center px-4 md:px-12 mt-8 md:mt-0">
          <div>
            <span
              ref={(el) => {
                textRefs.current[0] = el;
              }}
              className="text-white text-[10px] tracking-[0.3em] uppercase font-bold block mb-8"
            >
              [ 00 ] Perfil
            </span>
            <h2
              ref={(el) => {
                textRefs.current[1] = el;
              }}
              className="text-6xl md:text-7xl lg:text-[7vw] font-black uppercase tracking-tighter text-white leading-none mb-4"
            >
              Frontend
              <br />
              <span className="text-white/30 text-5xl md:text-6xl lg:text-[5vw] italic">
                Engineer
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-24 border-t border-white/20 pt-8">
              <div
                ref={(el) => {
                  textRefs.current[2] = el;
                }}
              >
                <p className="text-white/80 font-mono text-xs uppercase tracking-widest leading-loose">
                  Desarrollador Full Stack con fuerte orientación al Front-End.
                  Enfoque en performance, arquitectura limpia y experiencia de
                  usuario.
                </p>
              </div>
              <div
                ref={(el) => {
                  textRefs.current[3] = el;
                }}
                className="flex flex-col justify-between"
              >
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  Especializado en la creación de aplicaciones con sistemas multi-rol, autenticación, dashboards y CRMs.
                  Experiencia en proyectos colaborativos bajo metodología Scrum con Jira, y en entornos remotos con equipos internacionales.
                  Busco primer rol full-time donde pueda aportar desde el primer día.
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href="#contacto"
                    className="text-white font-bold uppercase text-[10px] tracking-widest hover:text-white/50 transition-colors inline-flex items-center justify-between border-b border-white pb-2 w-full"
                  >
                    <span>Contactame</span>
                    <span>→</span>
                  </a>
                  <a
                    href="/CV_JuanPablo_Medina_new.pdf"
                    className="text-white/50 font-bold uppercase text-[10px] tracking-widest hover:text-white transition-colors inline-flex items-center justify-between border-b border-white/20 pb-2 w-full"
                  >
                    <span>Descargar CV</span>
                    <span>↓</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
