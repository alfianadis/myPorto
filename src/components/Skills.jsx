import React from "react";

export default function Skills({ skills = [] }) {
  return (
    <section
      id="skills"
      className="mx-auto mt-24 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-sky-300">Skills</h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Kombinasi teknikal & desain untuk hasil aplikasi yang enak dipakai.
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
  );
}
