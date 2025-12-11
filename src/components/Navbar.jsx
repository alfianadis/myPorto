import React from "react";

export default function Navbar({ navItems, onNavClick }) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <button
            onClick={() => onNavClick("hero")}
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
                onClick={() => onNavClick(item.id)}
                className="rounded-full px-3 py-1 transition hover:bg-slate-800 hover:text-sky-300">
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => onNavClick("contact")}
            className="hidden sm:inline-flex items-center rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-400 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:brightness-110">
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </header>
  );
}
