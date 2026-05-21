"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlareHover from "../../../components/ui/ReactBits/GlareHover/GlareHover";

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  delay?: number;
  accentColor?: "cyan" | "white";
}

const Card = ({
  children,
  className = "",
  hoverable = true,
  delay = 0,
  accentColor = "cyan",
}: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        },
      );

      if (hoverable) {
        const handleMouseEnter = () => {
          gsap.to(card, {
            y: -4,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(card.querySelector(".card-glow"), {
            opacity: 1,
            duration: 0.3,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(card.querySelector(".card-glow"), {
            opacity: 0,
            duration: 0.4,
          });
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          card.removeEventListener("mouseenter", handleMouseEnter);
          card.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, card);

    return () => ctx.revert();
  }, [hoverable, delay]);

  const glowColor = accentColor === "cyan" ? "#22D3EE" : "#ffffff";

  return (
    <div ref={cardRef} className={`relative ${className}`}>
      <div
        className="card-glow absolute -inset-1 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top, ${glowColor}15, transparent 70%)`,
        }}
      />
      <GlareHover
        background="transparent"
        borderRadius="16px"
        borderColor="transparent"
        glareColor={glowColor}
        glareOpacity={0.15}
        glareAngle={-45}
        glareSize={150}
        transitionDuration={600}
        className="relative bg-black border border-white/10 rounded-2xl overflow-hidden"
      >
        <div className="relative z-10">{children}</div>
      </GlareHover>
    </div>
  );
};

export default Card;
