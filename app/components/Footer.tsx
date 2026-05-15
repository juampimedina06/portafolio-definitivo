'use client'

import React, { useRef } from "react";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const container = useRef<HTMLDivElement>(null)

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/juampimedina06" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/juan-pablo-medina-199b3b2b4/",
    },
    { label: "Email", href: "mailto:jpmedinagomez1@gmail.com" },
  ];

  useGSAP(() => {
    gsap.from('.footer-reveal', {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: container.current,
        start: 'top 95%'
      }
    })
  }, { scope: container })

  return (
    <footer ref={container} className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 py-32 px-8 md:px-0 bg-transparent text-white border-t border-white/10 relative overflow-hidden">
      <div className="col-span-1 md:col-span-8 md:col-start-4 grid grid-cols-1 md:grid-cols-3 gap-24">
        {/* Branding */}
        <div className="footer-reveal flex flex-col gap-6">
          <a href="#inicio" className="group">
            <h3 className="text-2xl font-black uppercase tracking-swiss-wide group-hover:opacity-50 transition-opacity text-white">
              Juan P. Medina
            </h3>
          </a>
          <p className="text-base opacity-50 small-caps tracking-swiss-wide leading-relaxed font-medium text-white">
            Full Stack Developer / <br /> Swiss Design Enthusiast <br />
            Córdoba, Argentina.
          </p>
        </div>

        {/* Links */}
        <div className="footer-reveal flex flex-col gap-6">
          <span className="small-caps text-[10px] font-bold tracking-widest opacity-30 text-white">
            Navigation
          </span>
          <nav className="flex flex-col gap-3">
            {["Bio", "Work", "Selected", "Stack", "Inquiry"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-sm font-black uppercase tracking-swiss hover:translate-x-2 transition-transform w-fit text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Social */}
        <div className="footer-reveal flex flex-col gap-6">
          <span className="small-caps text-[10px] font-bold tracking-widest opacity-30 text-white">
            Connect
          </span>
          <nav className="flex flex-col gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                className="text-sm font-black uppercase tracking-swiss hover:translate-x-2 transition-transform w-fit text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="footer-reveal col-span-1 md:col-span-8 md:col-start-4 mt-48 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] font-bold opacity-30 small-caps tracking-widest text-white">
          © {currentYear} JPM. All Rights Reserved.
        </p>
        
        <div className="flex gap-12">
          <p className="text-[10px] font-bold opacity-30 small-caps tracking-widest text-white">
            Internationale Typographie
          </p>
          <p className="text-[10px] font-bold opacity-30 small-caps tracking-widest text-white">
            Built with ☕ and Next.js
          </p>
        </div>
      </div>

      {/* Decorative Large Text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-[0.02] select-none pointer-events-none">
        <span className="text-[25vw] font-black uppercase leading-none tracking-tighter text-white">FINISH</span>
      </div>
    </footer>
  );
};

export default Footer;
