// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Landing from "./components/Landing.jsx";

const navItems = [
  { id: "landing", label: "Home" }, // bisa tambahin ini
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar navItems={navItems} onNavClick={handleScrollTo} />

      <main className="sm:pt-12 pb-10">
        <Landing />
        <About />
        <Skills />
        <ProjectsSection />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
