"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-title", {
        yPercent: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
      
      gsap.from(".contact-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 90%",
        }
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="contacto" className="relative lg:sticky lg:top-0 z-60 w-full min-h-screen flex flex-col justify-center py-16 md:py-24 px-4 md:px-12 bg-[#140d0a] overflow-hidden border-t border-white/5">
      {/* Brown Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-800/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="flex flex-col items-center justify-center text-center relative z-10 w-full">
        <div className="overflow-hidden w-full px-4">
          <h2 className="contact-title text-[15vw] md:text-[12vw] font-black uppercase tracking-tighter text-white leading-none hover:text-amber-500 transition-all duration-500 cursor-default">
            HABLEMOS
          </h2>
        </div>
        <div className="contact-grid w-full mt-12 grid grid-cols-1 md:grid-cols-3 border-t border-b border-white/10 relative z-10">
          <a href="mailto:jpmedinagomez1@gmail.com" className="contact-item border-b md:border-b-0 md:border-r border-white/10 p-12 flex flex-col items-center justify-center group hover:bg-amber-950/10 transition-colors duration-500">
            <span className="text-white/50 group-hover:text-amber-500/60 text-[10px] uppercase tracking-widest mb-4 transition-colors duration-300">Email</span>
            <span className="text-white group-hover:text-amber-400 font-bold text-xl md:text-3xl uppercase tracking-tight transition-colors duration-300">Enviar Mail</span>
          </a>
          <a href="https://www.linkedin.com/in/juan-pablo-medina-199b3b2b4/" target="_blank" className="contact-item border-b md:border-b-0 md:border-r border-white/10 p-12 flex flex-col items-center justify-center group hover:bg-amber-950/10 transition-colors duration-500">
            <span className="text-white/50 group-hover:text-amber-500/60 text-[10px] uppercase tracking-widest mb-4 transition-colors duration-300">Red</span>
            <span className="text-white group-hover:text-amber-400 font-bold text-xl md:text-3xl uppercase tracking-tight transition-colors duration-300">LinkedIn</span>
          </a>
          <a href="https://github.com/juampimedina06" target="_blank" className="contact-item p-12 flex flex-col items-center justify-center group hover:bg-amber-950/10 transition-colors duration-500">
            <span className="text-white/50 group-hover:text-amber-500/60 text-[10px] uppercase tracking-widest mb-4 transition-colors duration-300">Código</span>
            <span className="text-white group-hover:text-amber-400 font-bold text-xl md:text-3xl uppercase tracking-tight transition-colors duration-300">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
