"use client";

import { useState } from "react";
import Image from "next/image";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "HypperCompany",
    period: "Nov 2025 — Ene 2026",
    description: "Desarrollo de componentes reutilizables a partir de diseños en Figma. Implementación de animaciones 3D con Three.js y gestión de estado con Context API. Trabajé 100% en remoto con equipo internacional.",
    certificate: "/imagenes/certificado_hyperReality.jpeg",
  },
  {
    role: "Full Stack Developer",
    company: "TWP Foundation / Santex",
    period: "Jul 2025 — Abril 2026",
    description: "Desarrollo de CircularLocal bajo metodología Scrum con Jira y mentoría de Santex. Frontend Angular 20 con signals. Backend Node.js/Express + Sequelize/MySQL dockerizado.",
    certificate: "/imagenes/certificado_xacademy.jpg",
  },
];

const ExperienceSection = () => {
  const [activeCert, setActiveCert] = useState<string | null>(null);

  return (
    <section id="experiencia" className="relative z-[60] w-full min-h-screen flex flex-col py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-20 bg-[#E84118] text-white">

      {/* Top Content */}
      <div className="flex-1 flex flex-col justify-start w-full mx-auto max-w-9xl pt-10 md:pt-16">

        <h2 className="text-[14vw] sm:text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter leading-none mb-6">
          EXPERIENCIA
        </h2>

        <div className="flex flex-wrap gap-2 mb-8">
          <span className="bg-white/20 px-4 py-1.5 rounded text-sm font-medium">Trayectoria</span>
          <span className="bg-black/10 px-4 py-1.5 rounded text-sm font-medium border border-transparent hover:bg-black/20 transition-colors">Desarrollo Profesional</span>
        </div>

        <div className="max-w-4xl mb-12">
          <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-snug text-white/95">
            Mi recorrido profesional y las certificaciones que avalan mis conocimientos técnicos. Desarrollador Frontend y Full Stack enfocado en crear soluciones robustas, escalables y con una gran experiencia de usuario.
          </p>
        </div>
      </div>

      {/* Bottom Images (Certificates) */}
      <div className="w-full mx-auto max-w-9xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col group cursor-pointer" onClick={() => setActiveCert(exp.certificate)}>
            <div className="relative aspect-[4/3] sm:aspect-video md:aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/20 mb-4 shadow-xl">
              <Image
                src={exp.certificate}
                alt={`Certificado de ${exp.company}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="px-1">
              <h3 className="text-2xl font-bold mb-1 group-hover:text-black/80 transition-colors">{exp.role}</h3>
              <p className="text-white/80 font-bold text-sm uppercase tracking-wider mb-3">
                {exp.company} <span className="mx-2 font-normal text-white/50">|</span> {exp.period}
              </p>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for certificates */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setActiveCert(null)}
        >
          <div className="relative w-full max-w-5xl aspect-[4/3] rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
            <Image
              src={activeCert}
              alt="Certificado Ampliado"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center transition-colors border border-white/20"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
