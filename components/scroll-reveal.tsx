"use client";
import { useEffect } from "react";

export function ScrollRevealProvider() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });

    document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
