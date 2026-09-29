import React, { useState } from 'react'
import { heroBadges, profile } from '../data/portfolio.js'

export default function Hero() {
  const [imgOk, setImgOk] = useState(true)

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20" aria-label="Intro">
      {/* grid backdrop + orbs */}
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-fuchsia-500/20 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left */}
        <div className="reveal is-visible flex flex-col items-start gap-5">
          <span className="chip border-sky-300/20 bg-sky-400/10 text-sky-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulseGlow" aria-hidden="true" />
            Hello, I&apos;m
          </span>

          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.firstName}
            <br />
            <span className="gradient-text">{profile.name.replace(profile.firstName, '').trim() || profile.name}</span>
          </h1>

          <p className="font-mono text-[13px] tracking-wide text-sky-200/90 sm:text-sm">{profile.roles}</p>

          <p className="max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-base">{profile.tagline}</p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a href="#projects" className="btn-primary">
              {profile.resumeLabel}
              <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="btn-ghost">
              Let&apos;s Connect
            </a>
          </div>

          {/* Floating tech badges */}
          <ul className="flex flex-wrap gap-2 pt-3" aria-label="Technologies I use">
            {heroBadges.map((tech, i) => (
              <li
                key={tech}
                className={`chip hover:border-sky-300/40 hover:bg-sky-400/10 transition-colors ${
                  i % 2 === 0 ? 'animate-float-slow' : ''
                }`}
                style={{ animationDelay: `${i * 0.35}s` }}
              >
                <span className="text-sky-300" aria-hidden="true">
                  ✦
                </span>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — portrait with orbit glow */}
        <div className="reveal is-visible relative mx-auto w-full max-w-[420px]" style={{ '--reveal-delay': '140ms' }}>
          <div className="relative aspect-square">
            {/* orbit rings */}
            <div className="absolute inset-0 animate-spinSlow rounded-full border border-dashed border-white/15" aria-hidden="true" />
            <div
              className="absolute inset-6 rounded-full border border-white/10"
              aria-hidden="true"
            />
            <div
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-sky-500/25 via-indigo-500/20 to-fuchsia-500/25 blur-2xl animate-pulseGlow"
              aria-hidden="true"
            />
            {/* orbit dots */}
            <span
              className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-300 shadow-glow"
              aria-hidden="true"
            />
            <span
              className="absolute bottom-8 -right-1 h-2.5 w-2.5 rounded-full bg-fuchsia-300 shadow-glow"
              aria-hidden="true"
            />

            <div className="glass absolute inset-3 overflow-hidden rounded-[2rem] shadow-card animate-float">
              {imgOk ? (
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  className="h-full w-full object-cover"
                  onError={() => setImgOk(false)}
                />
              ) : (
                <div
                  className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-8 text-center"
                  role="img"
                  aria-label={`Placeholder avatar for ${profile.name}`}
                >
                  <span className="font-display text-6xl font-bold gradient-text">
                    {profile.name
                      .split(' ')
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join('')}
                  </span>
                  <p className="font-mono text-xs text-slate-400">
                    Add your photo at
                    <br />
                    <span className="text-sky-300">/public/profile.jpg</span>
                  </p>
                </div>
              )}
              {/* bottom status bar */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl border border-white/10 bg-ink-950/70 px-4 py-2.5 backdrop-blur-lg">
                <span className="flex items-center gap-2 text-xs font-medium text-slate-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                  Open to work
                </span>
                <span className="font-mono text-[11px] text-slate-400">{profile.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="relative mx-auto mt-14 flex max-w-6xl justify-center px-5" aria-hidden="true">
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase">Scroll</span>
          <span className="h-8 w-px bg-gradient-to-b from-sky-300/70 to-transparent" />
        </div>
      </div>
    </section>
  )
}
