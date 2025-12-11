import React from "react";
import MagicBento from "./magic_bento.jsx";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto mt-24 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-sky-300">Projects</h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Beberapa real project dengan user aktif & proses bisnis kompleks.
          </p>
        </div>
      </div>

      <MagicBento />
    </section>
  );
}
