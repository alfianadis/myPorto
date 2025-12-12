import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto h-screen mt-24 max-w-6xl px-4 sm:px-6 py-24 lg:px-8">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] md:items-start">
        <div>
          <h2 className="text-lg font-semibold text-sky-300">About</h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
            Gue terbiasa handle project dari tahap requirement, desain, hingga
            publishing ke store. Fokus ke komunikasi yang jelas, estimasi
            realistis, dan kualitas delivery yang konsisten.
          </p>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
            Pengalaman di beberapa domain: HRIS, pendidikan, dan membership.
            Terbiasa integrasi dengan API internal perusahaan, third party, dan
            layanan cloud seperti Firebase.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 text-sm shadow-xl">
          <h3 className="text-sm font-semibold text-slate-100">
            Cara kerja & pendekatan
          </h3>
          <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-300">
            <li>• Diskusi kebutuhan dengan bahasa yang santai tapi jelas.</li>
            <li>
              • Bikin struktur yang scalable, bukan cuma &quot;asal jadi&quot;.
            </li>
            <li>• Update progres rutin dan transparan.</li>
            <li>• Dokumentasi seperlunya agar mudah di-maintain tim lain.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
