"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function ScrollEffects() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      anchors: true
    });

    const animated = document.querySelectorAll<HTMLElement>(
      "[data-animate], main section h1, main section h2, main section h3, main section p, main section a, main section img, footer h2, footer p, footer li, footer form > *"
    );

    animated.forEach((element) => element.classList.add("fade-up"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    animated.forEach((element) => observer.observe(element));

    const updateHero = () => {
      const hero = document.querySelector<HTMLElement>(".hero-section");
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / Math.max(rect.height, 1), 0), 1);
      hero.style.setProperty("--hero-y", `${progress * 110}px`);
    };

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      updateHero();
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return null;
}
