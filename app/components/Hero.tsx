"use client";

import HoverButton from "@/components/ui/HoverButtom";
import Carousel from "@/components/ui/ReactBits/Carousel/Carousel";
import Iridescence from "@/components/ui/ReactBits/Iridescence.css/Iridescence";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const techCardRef = useRef<HTMLDivElement>(null);
  const techItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Configuramos el estado inicial: clip-path ocultando todo desde la derecha
      gsap.set(wrapperRef.current, { clipPath: "inset(0 100% 0 0)" });

      tl.to(wrapperRef.current, {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.2,
        ease: "power3.inOut",
      })
        .from(
          techCardRef.current,
          {
            x: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          techItemsRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="w-full h-[90vh] sm:flex gap-4 mt-4 overflow-hidden "
    >
      <div className="relative w-full h-full ">
        <Iridescence mouseReact amplitude={0.1} speed={1} />

        <div
          ref={wrapperRef}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          {/* Espaciador invisible para mantener el layout estático original de los SVGs (que antes eran empujados por Iridescence) */}
          <div className="w-full h-full pointer-events-none"></div>
          <svg
            className="svg-corner corner-content-box-one relative left-170 bottom-7 rotate-270 pointer-events-auto"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="black"></path>
            </g>
            <defs>
              <clipPath id="clip0_310_2">
                <rect width="30" height="30" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <svg
            className="svg-corner corner-content-box-one relative bottom-78  rotate-270 pointer-events-auto"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="black"></path>
            </g>
            <defs>
              <clipPath id="clip0_310_2">
                <rect width="30" height="30" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>

          <div className="absolute bottom-0 left-0 bg-black rounded-tr-[30px] pointer-events-auto z-20">
            <div className="h-50 w-full sm:w-170 flex items-center">
              <h1 className="sm:text-5xl text-4xl text-[#E5E7EB] w-full flex-wrap">
                Full Stack Developer orientado a performance y UX
              </h1>
            </div>
            <div className="h-auto ">
              <HoverButton
                color="#E5E7EB"
                background="#000"
                border="#E5E7EB"
                link="#sobre-mi"
              >
                ↓
              </HoverButton>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full flex gap-4 flex-col z-10">
        <div className="h-auto">
          <Carousel
            autoplay={true}
            autoplayDelay={4500}
            round={true}
            loop={true}
          />
        </div>
        <div
          ref={techCardRef}
          className="flex-1 bg-gradient-to-br from-[#0a0a0a] to-[#111] border border-white/10 rounded-4xl p-8 flex flex-col justify-center gap-6 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#22D3EE] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500"></div>

          <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-50 text-white/50 relative z-10">
            Tecnologías Principales
          </span>
          <div className="space-y-4 relative z-10">
            <div
              ref={(el) => {
                techItemsRef.current[0] = el;
              }}
              className="flex items-baseline gap-2 group/item cursor-default"
            >
              <span className="text-4xl font-black uppercase text-white group-hover/item:text-[#22D3EE] transition-colors duration-300">
                React
              </span>
              <span className="text-sm font-bold opacity-30 text-white">
                / NEXT.JS
              </span>
            </div>
            <div
              ref={(el) => {
                techItemsRef.current[1] = el;
              }}
              className="flex items-baseline gap-2 group/item cursor-default"
            >
              <span className="text-4xl font-black uppercase text-white group-hover/item:text-[#22D3EE] transition-colors duration-300">
                Node.js
              </span>
              <span className="text-sm font-bold opacity-30 text-white">
                / TS
              </span>
            </div>
            <div
              ref={(el) => {
                techItemsRef.current[2] = el;
              }}
              className="flex items-baseline gap-2 group/item cursor-default"
            >
              <span className="text-4xl font-black uppercase text-white group-hover/item:text-[#22D3EE] transition-colors duration-300">
                PostgreSQL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
