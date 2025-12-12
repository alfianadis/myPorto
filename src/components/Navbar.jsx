import React, { useState } from "react";

export default function Navbar({ navItems, onNavClick }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      {/* Glass Container */}
      <div className="relative w-full max-w-4xl rounded-full border border-slate-800/60 bg-slate-900/70 backdrop-blur-xl shadow-lg">
        <div className="flex items-center justify-between px-4 py-2">
          {/* Brand */}
          <button
            onClick={() => onNavClick("landing")}
            className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 via-cyan-400 to-emerald-400 text-xs font-bold text-slate-900">
              AS
            </div>
            <div className="hidden sm:block text-left leading-tight">
              <p className="text-sm font-semibold tracking-wide text-slate-100">
                Alfian Septianto
              </p>
              <p className="text-[11px] text-slate-400">
                Mobile Developer · Flutter
              </p>
            </div>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className="rounded-full px-4 py-1.5 text-slate-300 transition
                           hover:bg-white/10 hover:text-white">
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA (Desktop) */}
          <button
            onClick={() => onNavClick("contact")}
            className="hidden md:inline-flex rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-md hover:brightness-110">
            Let’s Talk
          </button>

          {/* Burger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10">
            <span className="sr-only">Menu</span>
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-5 bg-slate-200 transition ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-slate-200 transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-slate-200 transition ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-slate-800/60 bg-slate-900/95 backdrop-blur-xl shadow-xl md:hidden">
            <nav className="flex flex-col divide-y divide-slate-800">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavClick(item.id);
                    setOpen(false);
                  }}
                  className="px-5 py-3 text-left text-sm text-slate-300 hover:bg-white/5 hover:text-white">
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => {
                  onNavClick("contact");
                  setOpen(false);
                }}
                className="px-5 py-3 text-left text-sm font-semibold text-sky-400 hover:bg-white/5">
                Let’s Talk
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
