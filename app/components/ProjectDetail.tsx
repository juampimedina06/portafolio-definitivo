"use client"

import { useRef, useEffect, useState } from "react"
import { ChevronLeft, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import type { Project } from "@/lib/projects"

gsap.registerPlugin(ScrollTrigger)

const extraCircularImages = [
  { src: "/imagenes/CircularLocal/circular_solicitudesRecibidas.jpg", alt: "Solicitudes recibidas" },
  { src: "/imagenes/CircularLocal/circular_solicitudesEnviadas.jpg", alt: "Solicitudes enviadas" },
  { src: "/imagenes/CircularLocal/circular_gestionUsuarios.jpg", alt: "Gestión de usuarios" },
  { src: "/imagenes/CircularLocal/circular_moderacion.jpg", alt: "Moderación" },
  { src: "/imagenes/CircularLocal/circular_metricas.jpg", alt: "Métricas" },
]

const extraQlientaImages = [
  { src: "/imagenes/Qlienta/perfil.jpg", alt: "Perfil de usuario" },
  { src: "/imagenes/Qlienta/admin_clienteActivoDetalle.jpg", alt: "Detalle de cliente activo" },
  { src: "/imagenes/Qlienta/admin_proyectoCliente.jpg", alt: "Proyecto del cliente desde admin" },
  { src: "/imagenes/Qlienta/admin_futuroClienteDetalle.jpg", alt: "Detalle de futuro cliente" },
  { src: "/imagenes/Qlienta/admin_editarFuturoCliente.jpg", alt: "Editar futuro cliente" },
  { src: "/imagenes/Qlienta/admin_altaCliente.jpg", alt: "Alta de cliente" },
]

export default function ProjectDetail({ project }: { project: Project }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroContent = heroRef.current?.querySelector(".hero-content")
      if (!heroContent) return
      gsap.fromTo(
        heroContent,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!contentRef.current) return

    const sections = contentRef.current.querySelectorAll<HTMLElement>("[data-animate]")

    const ctx = gsap.context(() => {
      sections.forEach((el) => {
        const text = el.querySelector<HTMLElement>("[data-animate-text]")
        const images = el.querySelectorAll<HTMLElement>("[data-animate-image]")

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })

        if (text) {
          tl.fromTo(text, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
        }

        if (images.length) {
          tl.fromTo(
            images,
            { opacity: 0, y: 30, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.15,
              ease: "power3.out",
            },
            "-=0.3"
          )
        }
      })
    }, contentRef)

    return () => ctx.revert()
  }, [])

  const extraImages =
    project.slug === "circularlocal" ? extraCircularImages :
    project.slug === "qlienta" ? extraQlientaImages :
    null

  return (
    <>
      {/* ───── HERO ───── */}
      <section
        ref={heroRef}
        className="relative w-full h-[60vh] md:h-[70vh] min-h-[400px] overflow-hidden"
      >
        {project.heroImage ? (
          <div className="absolute inset-0">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a1a]" />
        )}

        <div className="hero-content absolute bottom-0 left-0 right-0 p-6 md:p-16 pb-12 md:pb-20">
          <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/40 mb-4 block">
            {project.tag}
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white max-w-4xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* ───── CONTENIDO ───── */}
      <div ref={contentRef} className="w-full px-4 md:px-16 py-16 md:py-24 max-w-9xl mx-auto">
        {/* ← Volver */}
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-2 text-white/30 hover:text-white text-[11px] uppercase tracking-wider font-medium transition-colors mb-20 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Volver a proyectos
        </Link>

        {/* ───── SECCIONES INTERCALADAS ───── */}
        {project.sections.map((section) => (
          <SectionBlock
            key={section.number}
            section={section}
            onImageClick={(src) => setSelectedImage(src)}
          />
        ))}

        {/* ───── EXTRAS: imágenes de galería ───── */}
        {extraImages && (
          <div
            data-animate
            className="mb-20 md:mb-28"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/20 block mb-2">
              [ 04 ]
            </span>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-8">
              Más del proyecto
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {extraImages.map((img, i) => (
                <button
                  key={i}
                  data-animate-image
                  onClick={() => setSelectedImage(img.src)}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#121214] border border-white/5 transition-all duration-300 hover:ring-1 hover:ring-white/20 hover:scale-[1.02] focus:outline-none"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ───── STACK & CTA ───── */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mb-12">
            <div>
              <span className="text-white/30 text-[9px] uppercase tracking-wider block mb-2">Rol</span>
              <span className="text-white/80 font-medium text-sm">{project.role}</span>
            </div>
            <div>
              <span className="text-white/30 text-[9px] uppercase tracking-wider block mb-2">Año</span>
              <span className="text-white/80 font-medium text-sm">{project.year || "—"}</span>
            </div>
            <div>
              <span className="text-white/30 text-[9px] uppercase tracking-wider block mb-2">Stack</span>
              <span className="text-white/80 font-medium text-sm">{project.tech || "—"}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <Link
              href="/#proyectos"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Volver a proyectos
            </Link>

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-medium uppercase text-[11px] tracking-wider hover:text-white/80 transition-colors border-b border-white/20 hover:border-white pb-1 group"
              >
                Ver Código Fuente
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ───── LIGHTBOX ───── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 md:p-12 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-white text-sm uppercase tracking-wider transition-colors z-10"
          >
            Cerrar
          </button>
          <div className="relative w-full h-full max-w-5xl max-h-[85vh]">
            <Image src={selectedImage} alt="" fill className="object-contain" />
          </div>
        </div>
      )}
    </>
  )
}

/* ───── COMPONENTE DE SECCIÓN CON LAYOUT INTERCALADO ───── */

function SectionBlock({
  section,
  onImageClick,
}: {
  section: Project["sections"][number]
  onImageClick: (src: string) => void
}) {
  const isLeft = section.imagePosition === "left"

  return (
    <section data-animate className="mb-20 md:mb-32">
      <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/20 block mb-2">
        [ {section.number} ]
      </span>
      <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-8 md:mb-10">
        {section.title}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Imágenes */}
        {section.images.length > 0 && (
          <div
            className={`lg:col-span-7 ${isLeft ? "lg:order-1" : "lg:order-2"}`}
          >
            <div
              className={`grid gap-4 ${section.images.length === 1
                ? "grid-cols-1"
                : section.images.length === 2
                  ? "grid-cols-2"
                  : "grid-cols-2"
                }`}
            >
              {section.images.map((img, i) => (
                <button
                  key={i}
                  data-animate-image
                  onClick={() => onImageClick(img.src)}
                  className={`relative rounded-xl overflow-hidden bg-[#121214] border border-white/5 transition-all duration-300 hover:ring-1 hover:ring-white/20 hover:scale-[1.02] focus:outline-none ${section.images.length === 3 && i === 2
                    ? "col-span-2 aspect-[2/1]"
                    : "aspect-[4/3]"
                    }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Texto */}
        <div
          data-animate-text
          className={`${section.images.length > 0 ? "lg:col-span-5" : "lg:col-span-8 lg:col-start-3"} ${isLeft ? "lg:order-2" : "lg:order-1"}`}
        >
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            {section.text}
          </p>
        </div>
      </div>
    </section>
  )
}
