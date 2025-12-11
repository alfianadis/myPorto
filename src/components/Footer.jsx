import React from "react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-[11px] text-slate-500 sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} Alfian Septianto. All rights reserved.
        </p>
        <p>Built with React · Tailwind CDN · GSAP (soon)</p>
      </div>
    </footer>
  );
}
