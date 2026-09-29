import React from 'react'
import SectionHeading from './SectionHeading.jsx'
import { about } from '../data/portfolio.js'

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-24" aria-label="About me">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="01 — Who I am" title="About Me" align="left" />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: narrative */}
          <div className="reveal glass relative overflow-hidden p-7 sm:p-9">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-indigo-500/15 blur-3xl"
              aria-hidden="true"
            />
            <p className="font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
              {about.heading}
            </p>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-400">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {about.stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-2xl font-bold gradient-text sm:text-3xl">{s.value}</dd>
                  <dd className="mt-1 text-xs text-slate-400">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: quick facts card */}
          <aside
            className="reveal glass relative overflow-hidden p-7 sm:p-8"
            style={{ '--reveal-delay': '120ms' }}
            aria-label="Quick facts"
          >
            <div
              className="pointer-events-none absolute -left-16 bottom-0 h-52 w-52 rounded-full bg-sky-500/15 blur-3xl"
              aria-hidden="true"
            />
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-white">Quick Facts</h3>
              <span className="chip font-mono !text-[11px] text-sky-200">~/whoami</span>
            </div>
            <ul className="mt-6 space-y-5">
              {about.quickFacts.map((fact) => (
                <li key={fact.label} className="flex gap-4">
                  <span
                    className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-sky-400/15 to-fuchsia-400/15 text-sky-200"
                    aria-hidden="true"
                  >
                    ✦
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">{fact.label}</p>
                    <p className="mt-1 text-[15px] font-medium leading-snug text-slate-100">{fact.value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="shimmer-line mt-7 h-px w-full" aria-hidden="true" />
            <p className="mt-4 font-mono text-xs leading-relaxed text-slate-500">
              <span className="text-emerald-300">●</span> Currently exploring: system design, RAG pipelines &
              production backends.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
