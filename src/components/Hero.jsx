import React from "react";

export default function Hero({ onScrollTo }) {
  return (
    <section
      id="hero"
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1.5fr),minmax(0,1fr)] md:items-center w-full">
        {/* Left content */}
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-sky-300">
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

          <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300">
            Sejak 2024 fokus sebagai Flutter mobile developer. Berpengalaman
            membangun aplikasi HR, edukasi, hingga membership dengan user real
            dan download ratusan ribu di Play Store & App Store. Menjaga
            keseimbangan antara desain elegan, performa, dan maintainability.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onScrollTo("projects")}
              className="rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:scale-[1.02] hover:brightness-110">
              View Projects
            </button>
            <button
              onClick={() => onScrollTo("about")}
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
              &quot;Fast, rapi, dan fokus ke detail. Mulai dari desain sampai
              implementasi, gue pastikan aplikasi terasa profesional dan nyaman
              dipakai user harian.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
