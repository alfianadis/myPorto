import React, { useMemo, useState } from "react";
import MagicBento from "./magic_bento.jsx";

const PROJECTS = [
  {
    id: "hrplus",
    title: "HR+ (HRIS & Attendance)",
    subtitle: "Absensi, lembur, cuti, reimbursement, approval flow.",
    tag: "Mobile App",
    status: "Live",
    year: "2024—Now",
    highlights: [
      "Approval flow multi-level + audit trail",
      "Dynamic form & attachment upload",
      "Offline-friendly UX untuk field users",
    ],
    stack: ["Flutter", "Dart", "REST API", "Firebase", "Clean Architecture"],
    metrics: ["Complex business flow", "Daily active users", "Multi-module"],
    color: "from-sky-500/20 via-cyan-400/10 to-emerald-400/10",
  },
  {
    id: "edusaas",
    title: "Edu-SaaS (School Platform)",
    subtitle: "Checklist harian, log kehadiran, form dinamis (GLS/7KAIH).",
    tag: "Mobile + Web",
    status: "Live",
    year: "2024",
    highlights: [
      "Dynamic JSON schema → UI generator",
      "Pagination + date range filtering",
      "Role-based access & reporting",
    ],
    stack: ["Flutter", "React", "REST API", "MongoDB", "NestJS"],
    metrics: ["Form-heavy", "Realtime-ish reporting", "Multi role"],
    color: "from-violet-500/20 via-indigo-400/10 to-sky-400/10",
  },
  {
    id: "mybnetfit",
    title: "MyBnetfit (ISP Membership & Billing)",
    subtitle: "Invoice, e-faktur, loyalty, payment & QRIS flow.",
    tag: "Mobile App",
    status: "Live",
    year: "2024",
    highlights: [
      "Billing lifecycle + invoice detail",
      "QRIS generation + status checking",
      "UI modular & maintainable",
    ],
    stack: ["Flutter", "REST API", "Payment", "Provider", "UX polish"],
    metrics: ["Payment flow", "Customer portal", "Stable release"],
    color: "from-emerald-500/20 via-sky-400/10 to-indigo-400/10",
  },
  {
    id: "launcher",
    title: "Launcher / Intranet Apps",
    subtitle: "Internal dashboards: Redash, Intranet tools, MOI Cafe.",
    tag: "Internal Tools",
    status: "In Use",
    year: "2024—Now",
    highlights: [
      "Shortcut launcher UX (fast access)",
      "Auth & token handling",
      "Scalable menu system",
    ],
    stack: ["Flutter", "REST API", "SSO-ish", "UI System"],
    metrics: ["Internal adoption", "Speed & simplicity", "Extensible"],
    color: "from-slate-500/15 via-sky-500/10 to-emerald-500/10",
  },
  {
    id: "bachuss",
    title: "Bachuss (Membership & Reservation)",
    subtitle: "Brand membership, reservation flow, loyalty & tiering.",
    tag: "Product",
    status: "Prototype",
    year: "2025",
    highlights: [
      "Brand-driven UI (black / gold / red)",
      "Reservation time-slots + area",
      "Login/register + tab navigation",
    ],
    stack: ["Flutter", "UI/UX", "State Mgmt"],
    metrics: ["Premium branding", "Membership concept", "Rapid iteration"],
    color: "from-yellow-500/15 via-rose-500/10 to-slate-500/10",
  },
];

const FILTERS = [
  "All",
  "Mobile App",
  "Mobile + Web",
  "Internal Tools",
  "Product",
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const matchFilter =
        activeFilter === "All" ? true : p.tag === activeFilter;
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.stack.join(" ").toLowerCase().includes(q);
      return matchFilter && matchQuery;
    });
  }, [activeFilter, query]);

  const activeProject = useMemo(
    () => PROJECTS.find((p) => p.id === openId),
    [openId]
  );

  return (
    <section
      id="projects"
      className="mx-auto mt-24 max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 px-3 py-1 text-[11px] font-medium text-sky-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Projects Showcase
          </p>

          <h2 className="mt-4 text-balance text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">
            Real projects. Complex flows.{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Production-ready delivery.
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300">
            Beberapa project yang gue handle end-to-end: requirement → UI/UX →
            integrasi API → release. Fokus: clean code, UI modern, dan flow
            bisnis yang rapi.
          </p>
        </div>

        {/* Search */}
        <div className="w-full sm:w-[320px]">
          <div className="group flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/40 px-3 py-2 shadow-xl backdrop-blur-xl focus-within:border-sky-500/50">
            <span className="text-slate-400">⌕</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari: Flutter, Firebase, Billing..."
              className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 outline-none"
            />
            {query ? (
              <button
                onClick={() => setQuery("")}
                className="rounded-lg px-2 py-1 text-xs text-slate-400 hover:text-slate-200"
                aria-label="Clear">
                ✕
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const active = f === activeFilter;
          return (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={[
                "rounded-full px-3 py-1 text-[11px] transition",
                active
                  ? "border border-sky-500/40 bg-sky-500/10 text-sky-200"
                  : "border border-slate-800 bg-slate-900/30 text-slate-300 hover:border-slate-700 hover:bg-slate-900/60",
              ].join(" ")}>
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2">
        {filtered.map((p) => (
          <ProjectCard key={p.id} p={p} onOpen={() => setOpenId(p.id)} />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 text-center">
          <p className="text-sm text-slate-300">
            Tidak ada project yang cocok.
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Coba ganti filter atau kata kunci.
          </p>
        </div>
      )}

      {/* Modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setOpenId(null)} />
      )}
    </section>
  );
}

function ProjectCard({ p, onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="text-left"
      aria-label={`Open project ${p.title}`}>
      <div className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900/40 p-5 shadow-2xl backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-sky-500/30">
        {/* glow */}
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.color}`}
        />
        <div className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-slate-700 bg-slate-950/40 px-2.5 py-1 text-[11px] text-slate-300">
                {p.tag}
              </span>
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                {p.status}
              </span>
            </div>
            <span className="text-[11px] text-slate-400">{p.year}</span>
          </div>

          {/* Title */}
          <div className="mt-4">
            {/* Optional: MagicBento accent */}
            <div className="mb-3">
              <MagicBento />
            </div>

            <h3 className="text-lg font-semibold tracking-tight text-slate-100">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {p.subtitle}
            </p>
          </div>

          {/* Stack chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            {p.stack.slice(0, 4).map((s) => (
              <span
                key={s}
                className="rounded-full border border-slate-800 bg-slate-950/30 px-2.5 py-1 text-[11px] text-slate-300">
                {s}
              </span>
            ))}
            {p.stack.length > 4 && (
              <span className="rounded-full border border-slate-800 bg-slate-950/30 px-2.5 py-1 text-[11px] text-slate-400">
                +{p.stack.length - 4}
              </span>
            )}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">
              Click to view details
            </span>
            <span className="text-sm text-sky-300">→</span>
          </div>
        </div>
      </div>
    </button>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
      {/* backdrop */}
      <button
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-label="Close modal backdrop"
      />

      <div className="relative w-full max-w-2xl overflow-hidden rounded-[28px] border border-slate-800 bg-slate-950/70 shadow-2xl backdrop-blur-xl">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
        />
        <div className="relative p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-slate-700 bg-slate-950/40 px-2.5 py-1 text-[11px] text-slate-200">
                  {project.tag}
                </span>
                <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                  {project.status}
                </span>
                <span className="text-[11px] text-slate-300">
                  {project.year}
                </span>
              </div>
              <h3 className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight text-slate-100">
                {project.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="rounded-xl border border-slate-700 bg-slate-900/50 px-3 py-2 text-xs text-slate-200 hover:border-slate-500">
              Close
            </button>
          </div>

          {/* Highlights */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <p className="text-xs font-semibold text-slate-100">Highlights</p>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-300">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-300" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <p className="text-xs font-semibold text-slate-100">Stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-slate-800 bg-slate-950/30 px-2.5 py-1 text-[11px] text-slate-200">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-slate-600/60 to-transparent" />

              <p className="mt-4 text-xs font-semibold text-slate-100">Notes</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-full bg-slate-900/60 px-3 py-1 text-[11px] text-slate-300">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className="rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 hover:brightness-110">
              Request Demo
            </button>
            <button className="rounded-2xl border border-slate-700 bg-slate-950/20 px-5 py-2 text-sm font-medium text-slate-200 hover:border-sky-400/60 hover:text-sky-200">
              View Case Study
            </button>
            <span className="ml-auto text-[11px] text-slate-400">
              (bisa kamu sambung ke link GitHub / Play Store / portfolio detail)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
