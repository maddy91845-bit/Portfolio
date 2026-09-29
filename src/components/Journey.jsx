import React from 'react'
import SectionHeading from './SectionHeading.jsx'
import { journey } from '../data/portfolio.js'

export default function Journey() {
  return (
    <section id="journey" className="relative scroll-mt-24 py-20 sm:py-24" aria-label="My journey">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="02 — The story so far"
          title="MY JOURNEY"
          subtitle="From learning the fundamentals to building real-world systems."
        />

        <div className="timeline-rail relative mt-14 space-y-8 md:space-y-0" role="list">
          {journey.map((m, i) => {
            const left = i % 2 === 0
            return (
              <div
                key={m.year}
                role="listitem"
                className={`reveal relative pl-14 md:grid md:grid-cols-2 md:gap-14 md:pl-0 ${
                  i > 0 ? 'md:pt-10' : ''
                }`}
                style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}
              >
                {/* node dot (mobile) */}
                <span
                  className={`absolute left-[13px] top-2 flex h-[14px] w-[14px] items-center justify-center md:hidden`}
                  aria-hidden="true"
                >
                  <span
                    className={`h-3.5 w-3.5 rounded-full border-2 ${
                      m.highlight ? 'border-fuchsia-300 bg-fuchsia-400/40 shadow-glow' : 'border-sky-300 bg-sky-400/40'
                    }`}
                  />
                </span>

                {/* card side */}
                <div className={`${left ? 'md:col-start-1' : 'md:col-start-2'} ${left ? 'md:pr-2 md:text-right' : 'md:pl-2'}`}>
                  <article
                    className={`glass group relative overflow-hidden p-6 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-glow sm:p-7 ${
                      m.current ? 'border-sky-300/30 bg-gradient-to-br from-sky-400/[0.08] to-fuchsia-400/[0.08]' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-lg"
                        aria-hidden="true"
                      >
                        {m.icon}
                      </span>
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-xs font-semibold tracking-widest ${
                          m.highlight
                            ? 'bg-gradient-to-r from-sky-400/20 to-fuchsia-400/20 text-sky-100 border border-sky-300/30'
                            : 'border border-white/10 bg-white/[0.05] text-slate-300'
                        }`}
                      >
                        {m.year}
                      </span>
                      {m.current && (
                        <span className="chip !border-emerald-300/30 !bg-emerald-400/10 !text-emerald-200">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulseGlow" aria-hidden="true" />
                          Now
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-white">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{m.text}</p>
                  </article>
                </div>

                {/* center node (desktop) */}
                <span
                  className="absolute left-1/2 top-4 hidden -translate-x-1/2 md:flex"
                  aria-hidden="true"
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border bg-ink-950 text-sm shadow-card ${
                      m.highlight ? 'border-fuchsia-300/50 text-fuchsia-200 shadow-glow' : 'border-sky-300/40 text-sky-200'
                    }`}
                  >
                    {m.icon}
                  </span>
                </span>

                {/* empty opposite column keeps alternation */}
                <div className={`hidden md:block ${left ? 'col-start-2' : 'col-start-1 row-start-1'}`} aria-hidden="true" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
