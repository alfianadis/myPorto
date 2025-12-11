// src/App.jsx
import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Landing from "./components/Landing.jsx";

const navItems = [
  { id: "landing", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const skills = [
  "Flutter & Dart",
  "Clean Architecture",
  "RESTful API Integration",
  "Firebase & Push Notification",
  "UI/UX Design (Figma)",
  "Git & CI/CD",
];

export default function App() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ===========================
  // GSAP + ScrollTrigger global
  // ===========================
  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    if (!gsap || !ScrollTrigger) {
      console.warn("GSAP / ScrollTrigger belum tersedia di window.");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // bersihin animasi lama (HMR vite)
    ScrollTrigger.getAll().forEach((st) => st.kill());
    gsap.killTweensOf("*");

    // 1) Landing: animasi on-load biasa (tanpa scrollTrigger)
    const landingEl = document.getElementById("landing");
    if (landingEl) {
      gsap.from(landingEl, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      });
    }

    // 2) Section lain: animasi ketika discroll
    const ids = ["about", "skills", "projects", "contact"];

    ids.forEach((id, index) => {
      const el = document.getElementById(id);
      if (!el) return;

      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: index * 0.05,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar navItems={navItems} onNavClick={handleScrollTo} />

      <main className="sm:pt-12 pb-10">
        <Landing /> {/* pastikan ada <section id="landing"> di dalamnya */}
        <About /> {/* pastikan root-nya <section id="about"> */}
        <Skills skills={skills} /> {/* ⬅️ penting: kirim skills */}
        <ProjectsSection /> {/* root: <section id="projects"> */}
        <Contact /> {/* root: <section id="contact"> */}
        <Footer />
      </main>
    </div>
  );
}
