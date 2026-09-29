import React from 'react'
import SectionHeading from './SectionHeading.jsx'
import { skillGroups } from '../data/portfolio.js'

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-20 sm:py-24" aria-label="Tech stack">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="03 — Toolbox"
          title="TOOLS I BUILD WITH"
          subtitle="A practical stack for backends, data, intelligent apps, and the web."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <article
              key={group.category}
              className="reveal glass group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/25 hover:shadow-glow"
              style={{ '--reveal-delay': `${(gi % 3) * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-bold text-white">{group.category}</h3>
                <span className="font-mono text-[11px] text-slate-500">
                  {String(gi + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="shimmer-line mt-4 h-px w-full opacity-60" aria-hidden="true" />
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="chip cursor-default transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-300/40 hover:bg-sky-400/10 hover:text-white hover:shadow-glow"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
