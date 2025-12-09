import React, { useEffect, useRef } from "react";

const navItems = [
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

const projects = [
  {
    title: "HR+ Attendance & HRIS",
    desc: "Absensi, lembur, cuti, dan approval workflow untuk perusahaan.",
  },
  {
    title: "Edu-SaaS School App",
    desc: "Platform sekolah: 7KAIH, GLS, absensi, dan form dinamis.",
  },
  {
    title: "MyBnetfit Membership",
    desc: "Membership ISP dengan billing, invoice, e-faktur, dan loyalty points.",
  },
];

export default function App() {
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);
  sectionsRef.current = [];

  const addSectionRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    if (!gsap) return;

    // Hero fade-in
    if (heroRef.current) {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.1,
        ease: "power3.out",
      });
    }

    // Sections reveal
    if (ScrollTrigger) {
      sectionsRef.current.forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        });
      });
    }
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-24 top-[-180px] h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute inset-x-0 top-72 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />
      </div>

      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-5">
          <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 backdrop-blur-xl">
            {/* Brand */}
            <button
              onClick={() => handleScrollTo("hero")}
              className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 via-cyan-400 to-emerald-400 text-sm font-semibold">
                AS
              </div>
              <div className="hidden sm:block text-left leading-tight">
                <p className="text-sm font-semibold tracking-wide">
                  Alfian Septianto
                </p>
                <p className="text-[11px] text-slate-400">
                  Mobile Developer · Flutter
                </p>
              </div>
            </button>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className="rounded-full px-3 py-1 transition hover:bg-slate-800 hover:text-sky-300">
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <button
              onClick={() => handleScrollTo("contact")}
              className="hidden sm:inline-flex items-center rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-400 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:brightness-110">
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="pt-28 pb-20 sm:pt-32">
        {/* HERO */}
        <section
          id="hero"
          ref={heroRef}
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-[minmax(0,1.5fr),minmax(0,1fr)] md:items-center">
            {/* Left content */}
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-sky-300">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Open for freelance & remote project
              </p>

              <h1 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                Crafting{" "}
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  modern mobile apps
                </span>{" "}
                with clean code & professional UI.
              </h1>

              <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300">
                Sejak 2024 fokus sebagai Flutter mobile developer. Berpengalaman
                membangun aplikasi HR, edukasi, hingga membership dengan user
                real dan download ratusan ribu di Play Store & App Store.
                Menjaga keseimbangan antara desain elegan, performa, dan
                maintainability.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleScrollTo("projects")}
                  className="rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:scale-[1.02] hover:brightness-110">
                  View Projects
                </button>
                <button
                  onClick={() => handleScrollTo("about")}
                  className="rounded-2xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-sky-400 hover:text-sky-300">
                  About Me
                </button>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-[11px] text-slate-400">
                <span className="rounded-full border border-slate-700/80 px-3 py-1">
                  #FlutterDeveloper
                </span>
                <span className="rounded-full border border-slate-700/80 px-3 py-1">
                  #CleanArchitecture
                </span>
                <span className="rounded-full border border-slate-700/80 px-3 py-1">
                  #ModernUIUX
                </span>
              </div>
            </div>

            {/* Right card / profile */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-sky-500/20 via-slate-900 to-emerald-500/10 blur-2xl" />
              <div className="rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 to-emerald-400 text-base font-semibold">
                    AS
                  </div>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold">Alfian Septianto</p>
                    <p className="text-xs text-slate-400">
                      Mobile Developer · Flutter
                    </p>
                  </div>
                  <span className="ml-auto rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                    BNSP Certified
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4 text-xs text-slate-300">
                  <div>
                    <p className="text-slate-400">Main Stack</p>
                    <p className="mt-1 font-medium">Flutter, Dart</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Backend Friendly</p>
                    <p className="mt-1 font-medium">REST API, Firebase</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Experience</p>
                    <p className="mt-1 font-medium">Since 2024</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Design Tools</p>
                    <p className="mt-1 font-medium">Figma, Photoshop</p>
                  </div>
                </div>

                <div className="mt-5 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

                <p className="mt-4 text-xs leading-relaxed text-slate-300">
                  &quot;Fast, rapi, dan fokus ke detail. Mulai dari desain
                  sampai implementasi, gue pastikan aplikasi terasa profesional
                  dan nyaman dipakai user harian.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          ref={addSectionRef}
          className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] md:items-start">
            <div>
              <h2 className="text-lg font-semibold text-sky-300">About</h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                Gue terbiasa handle project dari tahap requirement, desain,
                hingga publishing ke store. Fokus ke komunikasi yang jelas,
                estimasi realistis, dan kualitas delivery yang konsisten.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                Pengalaman di beberapa domain: HRIS, pendidikan, dan membership.
                Terbiasa integrasi dengan API internal perusahaan, third party,
                dan layanan cloud seperti Firebase.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 text-sm shadow-xl">
              <h3 className="text-sm font-semibold text-slate-100">
                Cara kerja & pendekatan
              </h3>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-300">
                <li>
                  • Diskusi kebutuhan dengan bahasa yang santai tapi jelas.
                </li>
                <li>
                  • Bikin struktur yang scalable, bukan cuma &quot;asal
                  jadi&quot;.
                </li>
                <li>• Update progres rutin dan transparan.</li>
                <li>
                  • Dokumentasi seperlunya agar mudah di-maintain tim lain.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          ref={addSectionRef}
          className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-sky-300">Skills</h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                Kombinasi teknikal & desain untuk hasil aplikasi yang enak
                dipakai.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="group rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm font-medium text-slate-100 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-400 hover:bg-slate-900">
                <p>{skill}</p>
                <p className="mt-1 text-xs text-slate-400 group-hover:text-sky-300">
                  Intermediate – Advanced
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          ref={addSectionRef}
          className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-sky-300">
                Selected Projects
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                Beberapa aplikasi yang sudah berjalan di environment production.
              </p>
            </div>
            <p className="text-[11px] text-slate-500">
              Demo lengkap bisa dibagikan saat diskusi.
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg transition hover:-translate-y-1 hover:border-sky-400/80 hover:bg-slate-900">
                <h3 className="text-sm font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {project.desc}
                </p>
                <button className="mt-4 w-max text-[11px] font-semibold text-sky-300 underline-offset-2 hover:underline">
                  Discuss this project
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          ref={addSectionRef}
          className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] md:items-center">
            <div>
              <h2 className="text-lg font-semibold text-sky-300">
                Contact · Let&apos;s build something
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300">
                Punya ide aplikasi baru, perlu revamp app lama, atau mau diskusi
                kemungkinan kolaborasi? Silakan hubungi lewat email atau
                WhatsApp.
              </p>

              <div className="mt-5 space-y-3 text-sm">
                <a
                  href="mailto:youremail@example.com"
                  className="flex items-center gap-3 text-slate-200 hover:text-sky-300">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sm">
                    ✉️
                  </span>
                  <span>youremail@example.com</span>
                </a>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-slate-200 hover:text-emerald-300">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-sm">
                    💬
                  </span>
                  <span>WhatsApp · +62 812-3456-7890</span>
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 text-sm shadow-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Quick note
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                Ceritakan secara singkat scope project, platform yang
                diinginkan, dan estimasi timeline. Gue akan balas dengan ide
                solusi dan pendekatan teknis yang paling masuk akal.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 border-t border-slate-800/80">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-[11px] text-slate-500 sm:flex-row sm:px-6 lg:px-8">
            <p>
              © {new Date().getFullYear()} Alfian Septianto. All rights
              reserved.
            </p>
            <p>Built with React · Tailwind CDN · GSAP</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
