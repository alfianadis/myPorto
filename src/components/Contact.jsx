import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto mt-24 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] md:items-center">
        <div>
          <h2 className="text-lg font-semibold text-sky-300">
            Contact · Let&apos;s build something
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Punya ide aplikasi baru, perlu revamp app lama, atau mau diskusi
            kemungkinan kolaborasi? Silakan hubungi lewat email atau WhatsApp.
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
            Ceritakan secara singkat scope project, platform yang diinginkan,
            dan estimasi timeline. Gue akan balas dengan ide solusi dan
            pendekatan teknis yang paling masuk akal.
          </p>
        </div>
      </div>
    </section>
  );
}
