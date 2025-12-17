import React, { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduce) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    if (!gsap || !ScrollTrigger || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(sectionRef);

      // default state (biar kerasa animasinya)
      gsap.set(q("[data-anim='title']"), { y: 16, opacity: 0 });
      gsap.set(q("[data-anim='text']"), { y: 18, opacity: 0 });
      gsap.set(q("[data-anim='card']"), { y: 22, opacity: 0, scale: 0.98 });
      gsap.set(q("[data-anim='chip']"), { y: 10, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(q("[data-anim='title']"), {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      })
        .to(
          q("[data-anim='text']"),
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .to(
          q("[data-anim='chip']"),
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .to(
          q("[data-anim='card']"),
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.35"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const chips = [
    "Flutter",
    "Clean Architecture",
    "REST API",
    "Firebase",
    "UI/UX (Figma)",
    "CI/CD",
  ];

  const points = [
    "Diskusi kebutuhan dengan bahasa yang santai tapi jelas.",
    'Bikin struktur yang scalable, bukan cuma "asal jadi".',
    "Update progres rutin & transparan.",
    "Dokumentasi seperlunya biar gampang di-maintain tim lain.",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative mx-auto mt-24 max-w-6xl px-4 sm:px-6 lg:px-8 py-24">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      {/* header */}
      <div className="flex items-end justify-between gap-6">
        <div>
          <p
            data-anim="title"
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 text-[11px] font-medium text-sky-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            About
          </p>

          <h2
            data-anim="title"
            className="mt-4 text-balance text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">
            Developer yang fokus ke{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              clean code
            </span>{" "}
            dan hasil yang siap dipakai user beneran.
          </h2>
        </div>

        {/* small stats */}
        <div className="hidden md:flex gap-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 px-4 py-3">
            <p className="text-[11px] text-slate-400">Experience</p>
            <p className="text-sm font-semibold text-slate-100">Since 2024</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 px-4 py-3">
            <p className="text-[11px] text-slate-400">Focus</p>
            <p className="text-sm font-semibold text-slate-100">Mobile Apps</p>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1.25fr),minmax(0,1fr)] md:items-start">
        {/* left */}
        <div className="space-y-4">
          <p
            data-anim="text"
            className="text-sm sm:text-base leading-relaxed text-slate-300">
            Gue terbiasa handle project dari tahap requirement, desain, hingga
            publishing ke store. Fokus ke komunikasi yang jelas, estimasi
            realistis, dan kualitas delivery yang konsisten.
          </p>
          <p
            data-anim="text"
            className="text-sm sm:text-base leading-relaxed text-slate-300">
            Pengalaman di beberapa domain: HRIS, pendidikan, dan membership.
            Terbiasa integrasi dengan API internal perusahaan, third party, dan
            layanan cloud seperti Firebase.
          </p>

          {/* chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span
                key={c}
                data-anim="chip"
                className="rounded-full border border-slate-800 bg-slate-900/40 px-3 py-1 text-[11px] text-slate-300
                           transition hover:border-sky-500/40 hover:bg-slate-900/70 hover:text-sky-200">
                {c}
              </span>
            ))}
          </div>

          {/* subtle callout */}
          <div
            data-anim="text"
            className="mt-6 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/70 to-slate-900/30 p-4 text-xs sm:text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Style kerja:</span>{" "}
            cepat, rapi, dan fokus ke detail. Jadi hasilnya bukan cuma keren,
            tapi juga maintainable.
          </div>
        </div>

        {/* right card */}
        <div
          data-anim="card"
          className="group rounded-[2rem] border border-slate-800 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-xl
                     transition hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-900/75">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 via-cyan-400 to-emerald-400 text-sm font-bold text-slate-950">
              ✓
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-100">
                Cara kerja & pendekatan
              </p>
              <p className="text-[11px] text-slate-400">
                Sistematis, jelas, & scalable
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-3 text-xs sm:text-sm text-slate-300">
            {points.map((p) => (
              <div
                key={p}
                className="flex gap-3 rounded-xl border border-transparent p-2
                           transition group-hover:border-slate-800/80 group-hover:bg-slate-950/20">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400/90" />
                <p className="leading-relaxed">{p}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          <div className="mt-5 grid grid-cols-2 gap-3 text-[11px]">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/20 p-3">
              <p className="text-slate-400">Komunikasi</p>
              <p className="mt-1 font-semibold text-slate-100">Jelas & rutin</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/20 p-3">
              <p className="text-slate-400">Output</p>
              <p className="mt-1 font-semibold text-slate-100">
                Pro & maintainable
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
