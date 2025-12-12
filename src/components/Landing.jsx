import React from "react";
import LiquidEther from "./LiquidEther";

export default function Landing({ onScrollTo }) {
  return (
    <section id="landing" className="relative w-full h-screen bg-slate-950">
      {/* Background LiquidEther */}
      <div className="absolute inset-0 -z-0">
        <LiquidEther
          className="w-full h-full"
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Optional overlay biar lebih “premium” & readable */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.5fr),minmax(0,1fr)] md:items-center w-full">
          {/* Left */}
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-slate-900/70 px-3 py-1 text-[11px] font-medium text-sky-200 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Open for freelance & remote project
            </p>

            <h1 className="text-balance text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight tracking-tight text-slate-100">
              Crafting{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                modern mobile apps
              </span>{" "}
              with clean code & professional UI.
            </h1>

            <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-200/90">
              Sejak 2024 fokus sebagai Flutter mobile developer. Berpengalaman
              membangun aplikasi HR, edukasi, hingga membership dengan user real
              dan download ratusan ribu di Play Store & App Store.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onScrollTo?.("projects")}
                className="rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:scale-[1.02] hover:brightness-110">
                View Projects
              </button>
              <button
                onClick={() => onScrollTo?.("about")}
                className="rounded-2xl border border-slate-700 bg-slate-950/20 px-4 py-2 text-sm font-medium text-slate-100 hover:border-sky-400 hover:text-sky-300 backdrop-blur">
                About Me
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-[11px] text-slate-300/80">
              <span className="rounded-full border border-slate-700/80 bg-slate-950/10 px-3 py-1 backdrop-blur">
                #FlutterDeveloper
              </span>
              <span className="rounded-full border border-slate-700/80 bg-slate-950/10 px-3 py-1 backdrop-blur">
                #CleanArchitecture
              </span>
              <span className="rounded-full border border-slate-700/80 bg-slate-950/10 px-3 py-1 backdrop-blur">
                #ModernUIUX
              </span>
            </div>
          </div>

          {/* Right card */}
          <div className="relative">
            <div className="rounded-[2rem] border border-slate-700/70 bg-slate-900/70 p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 to-emerald-400 text-base font-semibold">
                  AS
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold">Alfian Septianto</p>
                  <p className="text-xs text-slate-300/70">
                    Mobile Developer · Flutter
                  </p>
                </div>
                <span className="ml-auto rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold text-emerald-200">
                  BNSP Certified
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4 text-xs text-slate-200/90">
                <div>
                  <p className="text-slate-300/60">Main Stack</p>
                  <p className="mt-1 font-medium">Flutter, Dart</p>
                </div>
                <div>
                  <p className="text-slate-300/60">Backend Friendly</p>
                  <p className="mt-1 font-medium">REST API, Firebase</p>
                </div>
                <div>
                  <p className="text-slate-300/60">Experience</p>
                  <p className="mt-1 font-medium">Since 2024</p>
                </div>
                <div>
                  <p className="text-slate-300/60">Design Tools</p>
                  <p className="mt-1 font-medium">Figma, Photoshop</p>
                </div>
              </div>

              <div className="mt-5 h-px bg-gradient-to-r from-transparent via-slate-600/70 to-transparent" />

              <p className="mt-4 text-xs leading-relaxed text-slate-200/80">
                &quot;Fast, rapi, dan fokus ke detail. Mulai dari desain sampai
                implementasi, gue pastikan aplikasi terasa profesional dan
                nyaman dipakai user harian.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
