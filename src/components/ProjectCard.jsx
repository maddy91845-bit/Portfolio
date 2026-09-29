import React, { useState } from 'react'

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const visibleFeatures = expanded ? project.features : project.features.slice(0, 4)
  const hasMore = project.features.length > 4

  return (
    <article
      className="reveal glass group relative flex flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-glow sm:p-7"
      style={{ '--reveal-delay': `${(index % 2) * 110}ms` }}
    >
      {/* top gradient hairline */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs tracking-[0.25em] text-slate-500">
          {String(index + 1).padStart(2, '0')}
        </span>
        <a
          href={project.demo}
          aria-label={`View ${project.title}`}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
        >
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <h3 className="mt-4 font-display text-xl font-bold leading-snug text-white transition-colors group-hover:text-sky-100">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`Technologies used in ${project.title}`}>
        {project.technologies.map((t) => (
          <li key={t} className="chip !py-0.5 !text-[11px] !text-slate-300">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-4 border-t border-white/[0.07] pt-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">Key features</p>
        <ul className="mt-2 space-y-1.5">
          {visibleFeatures.map((f) => (
            <li key={f} className="flex items-start gap-2 text-[13px] text-slate-300">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-sky-300" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mt-2 text-xs font-semibold text-sky-300 hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 rounded"
          >
            {expanded ? 'Show less −' : `+ ${project.features.length - 4} more`}
          </button>
        )}
      </div>

      <div className="mt-5 pt-1">
        <a
          href={project.demo}
          className="btn-primary w-full !px-4 !py-2.5 !text-[13px]"
        >
          View Project
        </a>
      </div>
    </article>
  )
}
