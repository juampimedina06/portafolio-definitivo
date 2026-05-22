"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLenis } from "./SmoothScroll";

const SCROLL_DURATION = 1.8;
const SCROLL_EASING = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

function scrollToHash() {
  const lenis = getLenis();
  const hash = window.location.hash;
  if (!hash || hash === "#") return false;

  const el = document.getElementById(hash.slice(1));
  if (el && lenis) {
    lenis.scrollTo(el, { duration: SCROLL_DURATION, easing: SCROLL_EASING });
    return true;
  }
  return false;
}

function scrollToTop() {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(0, { duration: SCROLL_DURATION, easing: SCROLL_EASING });
  } else {
    window.scrollTo(0, 0);
  }
}

export default function ScrollToTop() {
  const pathname = usePathname();

  // Cambio de ruta (ej: /proyectos/[slug] → / )
  useEffect(() => {
    if (!scrollToHash()) {
      scrollToTop();
    }
  }, [pathname]);

  // Hashchange nativo (ej: clicks en Footer con <a href="#seccion">)
  useEffect(() => {
    const onHashChange = () => {
      scrollToHash();
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
