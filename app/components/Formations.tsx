"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { GraduationCap, Calendar, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const formations = [
  {
    title: "Tecnicatura en Software",
    institution: "ITSC",
    period: "2024 - 2026",
    logo: "/imagenes/itsc.png",
    description: "Formación integral en desarrollo de software, abarcando desde fundamentos de programación hasta arquitectura de sistemas.",
    imagen: '/imagenes/desarrollo_software.jpg',
    link: 'https://www.institutotecnicocordoba.com/'
  },
  {
    title: "Desarrollo Frontend",
    institution: "Alura Latam",
    period: "2024",
    logo: "/imagenes/alura.png",
    description: "Especialización en desarrollo frontend con enfoque en React, JavaScript moderno y buenas prácticas de UI/UX.",
    imagen: '/imagenes/desarollo_frontend.jpg',
    link: 'https://app.aluracursos.com/program/certificate/d7f68372-dfd8-4309-888d-33ec40914082?lang'
  },
  {
    title: "Full Stack Development",
    institution: "TWP Foundation",
    period: "2026",
    logo: "/imagenes/twp.jpg",
    description: " Programa intensivo de desarrollo con mentoría de Santex.",
    imagen: '/imagenes/desarrollo_fullstack.jpg',
    link: 'https://technologywithpurpose.org/en/'
  },
];

const FormationsSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <section id="formaciones" className="relative z-[40] w-full min-h-screen py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-20 bg-[#352230] text-[#F2E3C6] overflow-hidden flex flex-col justify-center">

      <div className="w-full max-w-9xl mx-auto flex flex-col gap-6 md:gap-10 relative z-10 pt-10">

        {/* HUGE TITLE */}
        <h2 ref={titleRef} className="text-[12vw] sm:text-[10vw] lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-none m-0 p-0 text-[#F2E3C6] drop-shadow-sm">
          FORMACIÓN
        </h2>

        {/* Tags */}
        <div className="flex mt-2">
          <div className="bg-[#463041] rounded-lg p-1.5 flex gap-1">
            <span className="px-5 py-2 rounded-md bg-[#352230]/50 shadow-sm text-sm font-semibold cursor-default text-[#F2E3C6]">Educación</span>
            <span className="px-5 py-2 rounded-md bg-transparent hover:bg-white/10 transition-colors text-sm font-medium cursor-pointer text-[#F2E3C6]/70">Académico</span>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mt-2">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-tight text-[#F2E3C6] tracking-tight">
            Un recorrido estructurado que transforma el aprendizaje en habilidades técnicas sólidas, desde la teoría hasta la implementación.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6 mb-8 md:mb-12">
          <button className="bg-[#F2E3C6] text-[#352230] px-6 md:px-8 py-3 rounded-md font-bold hover:bg-white transition-colors shadow-lg shadow-black/10">
            Saber Más
          </button>
          <button className="bg-[#1f131c] text-[#F2E3C6] border border-[#F2E3C6]/20 px-6 md:px-8 py-3 rounded-md font-bold hover:bg-[#F2E3C6]/10 transition-colors shadow-lg shadow-black/10">
            Contactar
          </button>
        </div>

        {/* Grid Cards */}
        <div className=" gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#F2E3C6]/10">
          {formations.map((f, i) => (
            <a
              key={i}
              className="rounded-xl formation-card group relative bg-[#0a0a0a] p-8 md:p-10 min-h-[420px] flex flex-col justify-between overflow-hidden border-b border-r border-[#F2E3C6]/10 hover:bg-[#111] transition-colors duration-500 cursor-pointer"
              href={f.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={f.imagen} alt={f.title} className="w-full h-full object-cover absolute top-0 left-0 opacity-20 hover:opacity-60 transition-opacity duration-500" />
              {/* 1. Header de la Card: Estilo Documental/Técnico */}
              <div className="flex justify-between items-start gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-black uppercase tracking-widest text-[#F2E3C6]/40 font-mono">
                    {f.institution}
                  </p>
                </div>

                {/* Badge minimalista sin bordes redondeados exagerados */}
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest border border-[#F2E3C6]/20 text-[#F2E3C6] px-2.5 py-1 rounded-sm bg-transparent">
                  {f.period}
                </span>
              </div>

              {/* 2. Cuerpo de la Card: Tipografía masiva y destructurada */}
              <div className="mt-12 flex flex-col justify-end h-full">
                {/* El título es el rey absoluto. Tracking super apretado (tighter) */}
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter leading-[0.95] text-[#F2E3C6] mb-6 group-hover:text-white transition-colors duration-300 uppercase break-words">
                  {f.title}
                </h3>

                {/* Separador fino puramente suizo */}
                <div className="w-12 h-[2px] bg-[#F2E3C6]/20 my-4 group-hover:w-full transition-all duration-500 ease-in-out" />

                {/* Descripción limpia */}
                <p className="text-xs md:text-sm text-[#F2E3C6]/60 leading-relaxed font-normal tracking-wide max-w-[90%]">
                  {f.description}
                </p>
              </div>

              {/* 3. El Logo de la institución: Micro-dosificado en la esquina inferior */}
              <div className="absolute bottom-6 right-6 opacity-20 group-hover:opacity-60 transition-all duration-500 grayscale filter invert contract-125">
                <div className="w-8 h-8 relative">
                  <Image
                    src={f.logo}
                    alt={f.institution}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Sutil línea de acento interactiva en el fondo (Opcional, muy fina) */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[#F2E3C6] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FormationsSection;
