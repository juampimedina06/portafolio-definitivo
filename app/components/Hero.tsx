"use client";

import React, { useRef } from "react";
import { Inter } from "next/font/google";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import imagen_juan_pablo_medina_traje_sinfondo from "@/public/imagenes/traje_sinfondo.png";

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const monogram = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      // Reveal animations
      gsap.from(".hero-reveal", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5,
      });

      // Grid lines animation
      gsap.from(".hero-line-v", {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 2,
        ease: "expo.inOut",
        stagger: 0.1,
      });

      gsap.from(".hero-line-h", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 2,
        ease: "expo.inOut",
        stagger: 0.1,
      });

      // Monogram parallax
      gsap.to(monogram.current, {
        y: -50,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      id="inicio"
      ref={container}
      className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 min-h-screen border-b border-white/10 overflow-hidden relative bg-transparent"
    >
      {/* Dynamic Grid Background Elements */}
      <div className="hero-line-v absolute left-[8.333%] top-0 w-px h-full bg-white/5" />
      <div className="hero-line-v absolute left-[50%] top-0 w-px h-full bg-white/5" />
      <div className="hero-line-v absolute left-[91.666%] top-0 w-px h-full bg-white/5" />
      <div className="hero-line-h absolute top-[20%] left-0 w-full h-px bg-white/5" />
      <div className="hero-line-h absolute bottom-[20%] left-0 w-full h-px bg-white/5" />

      {/* Background Monogram */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          ref={monogram}
          className="text-[30vw] font-black leading-none tracking-tighter uppercase opacity-[0.04] select-none italic text-white"
        >
          GENIUS
        </span>
      </div>

      {/* Main Content Side */}
      <div className="col-span-1 md:col-span-7 md:col-start-2 p-8 md:p-0 flex flex-col justify-center relative z-10 text-white">
        <div className="overflow-hidden mb-8">
          <span className="hero-reveal inline-block bg-white text-black px-4 py-1 text-[10px] font-bold tracking-[0.3em] uppercase">
            Disponible para trabajar / 2026
          </span>
        </div>

        <div className="overflow-hidden">
          <h1 className="hero-reveal text-[12vw] md:text-[9vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
            Diseño <br />
            <span className="text-outline-thin text-white opacity-30">
              Basado en
            </span>{" "}
            <br />
            Código.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div className="overflow-hidden">
            <p className="hero-reveal text-xl opacity-60 leading-tight max-w-xs font-medium">
              Arquitecto de sistemas digitales con precisión matemática y
              claridad estética suiza.
            </p>
          </div>
          <div className="overflow-hidden flex flex-col justify-end">
            <div className="hero-reveal flex gap-4 items-center">
              <div className="h-px w-16 bg-white" />
              <span className="small-caps text-[10px] font-bold tracking-widest">
                Ingeniero de Sistemas Core
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Image Side (Aggressive Cut) */}
      <div className="hidden md:flex col-span-4 col-start-9 relative items-end justify-end p-12 overflow-hidden group">
        <div className="hero-reveal relative z-10 w-full transform translate-y-24 group-hover:translate-y-0 transition-transform duration-1000">
          <img
            src={imagen_juan_pablo_medina_traje_sinfondo.src}
            alt="Juan Pablo Medina"
            className="w-full h-auto grayscale filter contrast-125"
          />
          {/* Typographic Label Over Image */}
          <div className="absolute -left-12 top-1/2 -rotate-90 origin-center">
            <span className="text-8xl font-black opacity-10 text-white">
              MEDINA
            </span>
          </div>
        </div>

        {/* Abstract Background for Image */}
        <div className="absolute inset-0 bg-white/5 z-0" />
      </div>
    </section>
  );
};

export default Hero;
