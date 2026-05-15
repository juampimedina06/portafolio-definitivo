"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagenJuanPabloMedina from "@/public/imagenes/traje.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Entrance animations
      gsap.from(".about-reveal", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      // Mask reveal for image
      gsap.from(".about-img-mask", {
        clipPath: "inset(100% 0 0 0)",
        duration: 2,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      // Parallax background text
      gsap.to(".about-bg-text", {
        x: -100,
        scrollTrigger: {
          trigger: container.current,
          scrub: 2,
          start: "top bottom",
          end: "bottom top",
        },
      });

      // Grid lines
      gsap.from(".about-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 2,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="sobre-mi"
      className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 py-64 px-8 md:px-0 bg-transparent text-white relative overflow-hidden"
    >
      {/* Background Decorative Text */}
      <div className="about-bg-text absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none opacity-[0.03]">
        <span className="text-[30vw] font-black uppercase tracking-tighter text-white">
          PERFORMANCE
        </span>
      </div>

      {/* Grid Lines */}
      <div className="about-line absolute top-0 left-0 w-full h-px bg-white/10" />
      <div className="about-line absolute bottom-0 left-0 w-full h-px bg-white/10" />

      {/* Profile Section (Right Aligned to Grid) */}
      <div className="col-span-1 md:col-span-5 md:col-start-2 relative z-10 flex flex-col gap-16">
        <div className="about-img-mask relative aspect-[3/4] bg-white/5 overflow-hidden border border-white/5 shadow-2xl">
          <img
            src={imagenJuanPabloMedina.src}
            alt="Juan Pablo Medina"
            className="w-full h-full object-cover grayscale contrast-125"
          />
          <div className="absolute bottom-8 left-8">
            <span className="text-white text-6xl font-black opacity-20">
              JPM
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="about-reveal small-caps text-xs font-bold tracking-widest opacity-30">
            La Filosofía
          </span>
          <p className="about-reveal text-2xl font-medium leading-tight opacity-80 text-white">
            La forma sigue a la función, pero el código sigue a la lógica.
            Construyo sistemas que no solo funcionan—perfeccionan con precisión
            quirúrgica.
          </p>
        </div>
      </div>

      {/* Bio Text (Left Aligned to Grid) */}
      <div className="col-span-1 md:col-span-5 md:col-start-8 flex flex-col gap-24 relative z-10 mt-32 md:mt-0 text-white">
        <div className="flex flex-col gap-8">
          <span className="about-reveal small-caps text-xs tracking-swiss-wide opacity-50 block">
            Bio / Resumen
          </span>
          <h2 className="about-reveal text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
            Obsesión <br />
            Por el <br />
            <span className="text-outline-thin text-white opacity-20">
              Detalle.
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-12 text-xl md:text-2xl opacity-70 max-w-xl leading-relaxed">
          <p className="about-reveal">
            Enfocado en la ingeniería Full Stack, he dedicado años a
            perfeccionar la intersección entre la robustez técnica y la claridad
            visual.
          </p>
          <div className="about-line w-24 h-px bg-white" />
          <p className="about-reveal">
            Creo en el estándar suizo: objetivo, basado en grillas e
            infinitamente escalable.
          </p>
        </div>

        <div className="flex flex-wrap gap-16 about-reveal pt-12 border-t border-white/5">
          <div className="flex flex-col gap-4">
            <span className="small-caps text-[10px] font-bold tracking-widest opacity-30">
              01 / Contacto
            </span>
            <a
              href="mailto:jpmedinagomez1@gmail.com"
              className="text-xl font-black uppercase tracking-swiss border-b-2 border-white hover:bg-white hover:text-black transition-all"
            >
              Correo Directo
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="small-caps text-[10px] font-bold tracking-widest opacity-30">
              02 / Currículum
            </span>
            <a
              href="/CV_JuanPablo_Medina.pdf"
              target="_blank"
              className="text-xl font-black uppercase tracking-swiss border-b-2 border-white hover:bg-white hover:text-black transition-all"
            >
              Ver CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
