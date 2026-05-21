"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface SkillItem {
  name: string;
  brandColor: string;
  svg: React.ReactNode;
}

const skillsData: SkillItem[] = [
  {
    name: "React",
    brandColor: "#61DAFB",
    svg: (
      <svg className="w-full h-full transition-all duration-300 fill-none stroke-white/40 group-hover:stroke-[var(--brand-color)]" viewBox="0 0 100 100" strokeWidth="4">
        <circle cx="50" cy="50" r="8" className="fill-white/40 group-hover:fill-[var(--brand-color)] transition-all duration-300" />
        <ellipse cx="50" cy="50" rx="38" ry="14" />
        <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(120 50 50)" />
      </svg>
    )
  },
  {
    name: "Next.js",
    brandColor: "#ffffff",
    svg: (
      <svg className="w-full h-full transition-all duration-300 fill-white/40 group-hover:fill-white" viewBox="0 0 128 128">
        <path fillRule="evenodd" clipRule="evenodd" d="M64 0C28.65 0 0 28.65 0 64c0 35.35 28.65 64 64 64 35.35 0 64-28.65 64-64C128 28.65 99.35 0 64 0zm32.8 91.5L59.7 48.6V90h-8.2V38h8.2l33.3 46V38h8.2v53.5h-4.2z" />
      </svg>
    )
  },
  {
    name: "Angular",
    brandColor: "#DD0031",
    svg: (
      <svg className="w-full h-full transition-all duration-300 fill-white/40 group-hover:fill-[var(--brand-color)]" viewBox="0 0 250 250">
        <polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" />
        <path d="M125,52.1 L66.8,182.6 L87.5,182.6 L99.1,151.7 L150.9,151.7 L162.5,182.6 L183.2,182.6 L125,52.1 Z M142,129.4 L108,129.4 L125,89 L142,129.4 Z" className="fill-[#111] group-hover:fill-white transition-all duration-300" />
      </svg>
    )
  },
  {
    name: "TypeScript",
    brandColor: "#3178C6",
    svg: (
      <svg className="w-full h-full transition-all duration-300 fill-white/40 group-hover:fill-[var(--brand-color)]" viewBox="0 0 128 128">
        <path d="M1.5 0h125c.8 0 1.5.7 1.5 1.5v125c0 .8-.7 1.5-1.5 1.5H1.5c-.8 0-1.5-.7-1.5-1.5V1.5C0 .7.7 0 1.5 0zm113.6 89.3c-1.3-2.5-3.3-4.5-6.1-5.9-2.7-1.4-6-2.1-9.9-2.1-3.1 0-5.8.5-8.1 1.4-2.3.9-4.2 2.2-5.6 3.9-1.4 1.7-2.4 3.7-3 5.9-.6 2.2-.9 4.6-.9 7.1 0 2.8.3 5.3 1 7.5.7 2.2 1.8 4.1 3.2 5.7 1.5 1.6 3.4 2.8 5.8 3.6 2.4.8 5.2 1.2 8.5 1.2 4.3 0 8.1-.9 11.2-2.7 3.1-1.8 5.3-4.5 6.6-8l-8-4.7c-.8 1.8-2 3.2-3.7 4.1-1.7.9-3.9 1.4-6.5 1.4-2.1 0-3.9-.3-5.3-1-1.4-.7-2.6-1.7-3.4-2.9-.9-1.3-1.4-2.8-1.7-4.5-.3-1.8-.4-3.6-.4-5.6 0-2.3.2-4.3.7-6.2.5-1.8 1.3-3.4 2.4-4.7 1.1-1.3 2.6-2.2 4.3-2.9 1.8-.7 3.9-1 6.2-1 2.3 0 4.3.4 6 1.1 1.7.7 3 1.8 4 3.2l7.7-5.1zm-48.4-1.7H55.4V117h9.3V87.6zm-17.7-10.4H17v10.4h14.5V117h9.3V87.6h14.5V77.2z" />
      </svg>
    )
  },
  {
    name: "Node.js",
    brandColor: "#339933",
    svg: (
      <svg className="w-full h-full transition-all duration-300 fill-white/40 group-hover:fill-[var(--brand-color)]" viewBox="0 0 128 128">
        <path d="M117.8 31.8c-.8-1.4-2.1-2.4-3.6-3L83 10.4c-3-1.7-6.7-1.7-9.7 0L42.1 28.8c-1.5.6-2.8 1.6-3.6 3l-1.3 2.2c-.8 1.4-.8 3.1 0 4.5l1.3 2.2c.8 1.4 2.1 2.4 3.6 3l31.2 18.4c3 1.7 6.7 1.7 9.7 0l31.2-18.4c1.5-.6 2.8-1.6 3.6-3l1.3-2.2c.8-1.4.8-3.1 0-4.5l-1.3-2.2zM80.6 42c0 1.4-.7 2.7-2 3.4L47.4 63.8c-1.3.7-2.8.7-4.1 0l-31.2-18.4c-1.3-.7-2-2.1-2-3.4V7.2c0-1.4.7-2.7 2-3.4 1.3-.7 2.8-.7 4.1 0l31.2 18.4c1.3.7 2 2.1 2 3.4V42c0 1.4-.7 2.7-2 3.4L16.2 63.8c-1.3.7-2.8.7-4.1 0l-1.3-.7c-1.3-.7-2-2.1-2-3.4V25.2c0-1.4.7-2.7 2-3.4 1.3-.7 2.8-.7 4.1 0l11.4 6.7c1.3.7 2 2.1 2 3.4V42c0 1.4-.7 2.7-2 3.4l-11.4 6.7c-1.3.7-2.8.7-4.1 0l-1.3-.7V25.2c0-1.4.7-2.7 2-3.4l1.3-.7c1.3-.7 2.8-.7 4.1 0l31.2 18.4c1.3.7 2 2.1 2 3.4V73.4c0 1.4-.7 2.7-2 3.4l-31.2 18.4c-1.3.7-2.8.7-4.1 0l-1.3-.7c-1.3-.7-2-2.1-2-3.4V56.6c0-1.4.7-2.7 2-3.4l1.3-.7c1.3-.7 2.8-.7 4.1 0l11.4 6.7c1.3.7 2 2.1 2 3.4v13.5c0 1.4-.7 2.7-2 3.4l-11.4 6.7c-1.3.7-2.8.7-4.1 0l-1.3-.7V56.6c0-1.4.7-2.7 2-3.4l31.2-18.4c1.3-.7 2.8-.7 4.1 0l31.2 18.4c1.3.7 2 2.1 2 3.4V92c0 1.4-.7 2.7-2 3.4L47.4 113.8c-1.3.7-2.8.7-4.1 0L12.1 95.4c-1.3-.7-2-2.1-2-3.4V78.6c0-1.4.7-2.7 2-3.4l1.3-.7c1.3-.7 2.8-.7 4.1 0l11.4 6.7c1.3.7 2 2.1 2 3.4v6.7c0 1.4-.7 2.7-2 3.4l-11.4 6.7c-1.3.7-2.8.7-4.1 0l-1.3-.7V78.6c0-1.4.7-2.7 2-3.4l31.2-18.4c1.3-.7 2.8-.7 4.1 0l31.2 18.4c1.3.7 2 2.1 2 3.4V92c0 1.4-.7 2.7-2 3.4l-1.3.7c-1.3.7-2.8.7-4.1 0L42.1 77.8c-1.3-.7-2-2.1-2-3.4V42c0-1.4.7-2.7 2-3.4l31.2-18.4c1.3-.7 2.8-.7 4.1 0l31.2 18.4c1.3.7 2 2.1 2 3.4V42z" />
      </svg>
    )
  },
  {
    name: "Express",
    brandColor: "#ffffff",
    svg: (
      <svg className="w-full h-full transition-all duration-300 fill-white/40 group-hover:fill-white" viewBox="0 0 128 128">
        <path d="M12.1 53c1.7-3.4 3.9-6.3 6.6-8.7S24.5 40 28 38.8s7.3-1.8 11.5-1.8c5.4 0 10.2 1 14.3 3.1s7.5 5 10.2 8.7c2.7 3.7 4.6 8 5.7 13.1c1.1 5 1.7 10.4 1.7 16.1v4H12.1v2.1c0 4.1.3 7.8 1 11.2s1.8 6.4 3.3 9 3.4 4.8 5.9 6.4c2.5 1.6 5.6 2.4 9.4 2.4 3.7 0 6.9-.7 9.5-2.2s4.8-3.4 6.5-5.9 2.9-5.3 3.6-8.5l9.7 2.9c-1.1 5-3 9.4-5.6 13.4s-6 7.2-10 9.8c-4.1 2.6-8.9 4.5-14.4 5.6-5.5 1.1-11.6 1.7-18.3 1.7-5.9 0-11.3-.9-16.1-2.7S18 107.5 14 104.2s-7.1-7.7-9.3-13.1c-2.2-5.4-3.2-11.9-3.2-19.4 0-5.5.8-10.7 2.5-15.7S8.7 56.4 12.1 53zm15.7 7.7c-2 2-3.6 4.6-4.6 7.7s-1.6 6.7-1.7 10.9h38.3c-.2-4.3-.8-8-1.9-11.1s-2.7-5.7-4.8-7.7c-2-2.1-4.6-3.6-7.7-4.6-3.1-1-6.7-1.5-10.7-1.5-2.6 0-5.2.4-7.8 1.2s-4.8 2.1-7.1 3.7-4.1 3.7-5.8 6.1c-1.7 2.4-3.1 5-4 7.7zM78.6 63.8l-15.6-25H74l9.5 16.4L93 38.8h11.2l-15.7 25 16.7 27.2H94l-10.4-18.4-10.4 18.4H62L78.6 63.8z" />
      </svg>
    )
  },
  {
    name: "PostgreSQL",
    brandColor: "#4169E1",
    svg: (
      <svg className="w-full h-full transition-all duration-300 fill-white/40 group-hover:fill-[var(--brand-color)]" viewBox="0 0 128 128">
        <path d="M127.3 56.6c.1-1.3-.2-2.6-.9-3.7-.8-1.2-2-2.1-3.4-2.5-4-1.1-8.1-1.6-12.2-1.7-2.9 0-5.7-.3-8.6-.7-2.8-.5-5.6-1.3-8.2-2.5-3.8-1.7-7-4.3-9.5-7.6-3-4-5-8.7-5.9-13.7l-.4-2.1c-.5-2.5-.9-5.1-1.1-7.6-.2-2.4-.6-4.8-1.2-7.1-.6-2.3-1.6-4.5-3.1-6.4S79.6 1.4 77 1c-3.1-.5-6.2-.7-9.3-.5-4.4.2-8.7.9-12.9 2-4.1 1.1-8 2.7-11.7 4.8C35 12.2 27.5 20.4 22.8 30.1c-2.4 5-4.2 10.3-5.3 15.8-1 5.2-1.6 10.5-1.7 15.8 0 .8.1 1.7.3 2.5.2.8.6 1.5 1.1 2.1 1.1 1.2 2.6 2 4.3 2.1 2 .1 4.1.2 6.1.3h.8c1.3.1 2.6.4 3.7 1.1 1 1 1.7 2.2 2 3.6.4 2.1.8 4.2 1.3 6.3 1 4.1 2.6 8 4.8 11.6 2.3 3.6 5.1 6.8 8.4 9.4 3.4 2.6 7.2 4.7 11.3 6 4.3 1.4 8.7 2.2 13.3 2.4l2.1.1h2.1c2.4 0 4.8-.2 7.1-.6 2.3-.4 4.5-1.2 6.4-2.4 1.9-1.2 3.5-2.8 4.5-4.8 1-2 1.4-4.2 1.2-6.5-.2-2.4-.6-4.8-1.2-7.1s-1.6-4.5-3.1-6.4c-1.5-1.9-3.4-3.5-5.6-4.5-2.7-1.3-5.6-2.1-8.6-2.5-3.3-.4-6.6-.5-9.9-.4-.8 0-1.7-.1-2.5-.3s-1.5-.6-2.1-1.1c-1.2-1.1-2-2.6-2.1-4.3-.1-1.5-.1-3.1.1-4.6.2-2 .8-3.9 1.8-5.6s2.3-3.1 3.9-4.2c3.2-2.2 6.9-3.7 10.7-4.4 3.9-.7 7.9-1 11.9-.8 3.5.2 7 .7 10.4 1.5l1 .3c3.6 1.1 6.9 2.8 9.9 5.1s5.4 5.1 7.1 8.4c1.7 3.3 2.7 6.9 3 10.6.3 3.6-.1 7.3-1.1 10.8l-.3 1c-1.1 3.6-2.8 6.9-5.1 9.9s-5.1 5.4-8.4 7.1c-3.3 1.7-6.9 2.7-10.6 3-2.9.3-5.7.9-8.5 1.9-2.6 1-4.9 2.5-6.8 4.5-2.3 2.3-4 5.1-5.1 8.2s-1.6 6.3-1.5 9.5c0 1.3.3 2.6.9 3.7.8 1.2 2 2.1 3.4 2.5 4 1.1 8.1 1.6 12.2 1.7.8 0 1.7.1 2.5.3.8.2 1.5.6 2.1 1.1 1.2 1.1 2 2.6 2.1 4.3.1 2 .2 4.1.3 6.1.1 1.7.8 3.3 2 4.5s2.8 1.9 4.5 2c4.1.1 8.2-.1 12.2-.7 3.9-.5 7.7-1.6 11.2-3.3 6.9-3.3 12.6-8.5 16.5-15.1 3.9-6.6 5.8-14.1 5.5-21.7-.1-3.6-.6-7.2-1.5-10.7z" />
      </svg>
    )
  },
  {
    name: "Supabase",
    brandColor: "#3ECF8E",
    svg: (
      <svg className="w-full h-full transition-all duration-300 fill-white/40 group-hover:fill-[var(--brand-color)]" viewBox="0 0 128 128">
        <path d="M67.1 0c-2.4 0-4.6 1.4-5.6 3.6L44.9 42.1h32.2c2.8 0 5.1 2.3 5.1 5.1 0 1.2-.4 2.3-1.2 3.2L35.6 102.2c-2.2 2.5-1.9 6.3.6 8.5 1.1 1 2.6 1.5 4.1 1.5 2.4 0 4.6-1.4 5.6-3.6l16.6-38.5H30.3c-2.8 0-5.1-2.3-5.1-5.1 0-1.2.4-2.3 1.2-3.2l45.4-51.8c2.2-2.5 1.9-6.3-.6-8.5-1.1-1-2.6-1.5-4.1-1.5z" />
      </svg>
    )
  },
  {
    name: "TailwindCSS",
    brandColor: "#38BDF8",
    svg: (
      <svg className="w-full h-full transition-all duration-300 fill-white/40 group-hover:fill-[var(--brand-color)]" viewBox="0 0 24 24">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    )
  },
  {
    name: "GSAP",
    brandColor: "#88CE02",
    svg: (
      <svg className="w-full h-full transition-all duration-300 fill-white/40 group-hover:fill-[var(--brand-color)]" viewBox="0 0 100 100">
        <path d="M50 15c-19.3 0-35 15.7-35 35s15.7 35 35 35 35-15.7 35-35-15.7-35-35-35zm-5 47.5c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5 12.5 5.6 12.5 12.5-5.6 12.5-12.5 12.5z" />
        <circle cx="50" cy="50" r="6" className="fill-[#111] group-hover:fill-white transition-all duration-300" />
        <path d="M72 47.5h-5.5c-.3-3.6-1.7-6.9-4-9.5l3.9-3.9 5.6 5.6v7.8z" />
      </svg>
    )
  },
  {
    name: "Figma",
    brandColor: "#F24E1E",
    svg: (
      <svg className="w-full h-full transition-all duration-300 fill-white/40 group-hover:fill-[var(--brand-color)]" viewBox="0 0 128 128">
        <path d="M38 102c0-14.4 11.6-26 26-26h26v26c0 14.4-11.6 26-26 26S38 116.4 38 102z" />
        <path d="M38 50c0-14.4 11.6-26 26-26h26v52H64c-14.4 0-26-11.6-26-26z" />
        <path d="M38 50c0 14.4 11.6 26 26 26h26V24H64c-14.4 0-26 11.6-26 26z" />
        <path d="M90 50c0 14.4-11.6 26-26 26s-26-11.6-26-26 11.6-26 26-26 26 11.6 26 26z" />
        <path d="M90 102c0-14.4-11.6-26-26-26H38v52h26c14.4 0 26-11.6 26-26z" />
      </svg>
    )
  },
  {
    name: "Git",
    brandColor: "#F05032",
    svg: (
      <svg className="w-full h-full transition-all duration-300 fill-white/40 group-hover:fill-[var(--brand-color)]" viewBox="0 0 128 128">
        <path d="M125.7 59.7L68.3 2.3c-3-3-8-3-11 0L46.4 13.2l12 12c3.4-1.2 7.4-.5 10.2 2.3 2.8 2.8 3.5 6.8 2.4 10.2l12 12c3.4-1.1 7.4-.4 10.2 2.4 3.9 3.9 3.9 10.2 0 14.1-3.9 3.9-10.2 3.9-14.1 0-2.9-2.9-3.5-7-2.3-10.3L64.8 54v25c1.2.6 2.3 1.5 3 2.7 2.4 3.4 1.7 8.1-1.7 10.5-3.4 2.4-8.1 1.7-10.5-1.7-2.4-3.4-1.7-8.1 1.7-10.5 1.1-.8 2.4-1.1 3.7-1.1V54c-1.3 0-2.6-.3-3.7-1.1L45.4 65c1.1 3.4.4 7.5-2.4 10.3-3.9 3.9-10.2 3.9-14.1 0-3.9-3.9-3.9-10.2 0-14.1 2.8-2.8 6.8-3.5 10.2-2.3L51 46.8l-12-12c-3.4 1.2-7.5.5-10.3-2.3-3.9-3.9-3.9-10.2 0-14.1 3.9-3.9 10.2-3.9 14.1 0 2.9 2.9 3.5 7 2.3 10.3l12 12V43c-1.2-.6-2.3-1.5-3-2.7-2.4-3.4-1.7-8.1 1.7-10.5 3.4-2.4 8.1-1.7 10.5 1.7 2.4 3.4 1.7 8.1-1.7 10.5-1.2.8-2.4 1.1-3.7 1.1v.2z" />
      </svg>
    )
  }
];

const Skills = () => {

  return (
    <section id="skills" className="sticky top-0 z-[50] w-full h-screen flex flex-col justify-center py-20 px-4 sm:px-8 md:px-16 lg:px-20 bg-[#000] overflow-hidden shadow-2xl shadow-black/50">

      <div className="w-full  mx-auto flex flex-col items-start mb-12 relative z-10">
        <h2 className="text-white text-6xl md:text-8xl font-bold">Skills</h2>
      </div>

      <div className="w-full mx-auto relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="skill-card group relative overflow-hidden aspect-square bg-[var(--brand-color)] hover:bg-[#111111] flex flex-col items-start justify-start p-5 transition-all duration-500 rounded-xl border border-white/5 hover:border-[var(--brand-color)]/50"
              style={{ "--brand-color": skill.brandColor } as React.CSSProperties}
            >
              <div className="relative z-10 flex flex-col items-start gap-2">
                <span className="text-base md:text-lg font-bold tracking-wider text-black/70 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>

              {/* Icono gigante estilo watermark en la esquina (invertido a negro por defecto para contraste) */}
              <div className="absolute -bottom-8 -right-8 w-36 h-36 md:w-44 md:h-44 opacity-50 invert group-hover:invert-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-110 group-hover:-rotate-12 flex items-center justify-center pointer-events-none drop-shadow-2xl">
                {skill.svg}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
