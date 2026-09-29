import React from 'react'
import { contact, profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10" aria-label="Footer">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-5 text-center sm:px-8">
        <p className="font-display text-sm font-bold tracking-[0.22em] text-white">
          {profile.name}
          <span className="gradient-text">.</span>
        </p>
        <p className="text-sm text-slate-400">Building, learning, and creating one project at a time.</p>
        <ul className="flex items-center gap-2">
          {[
            { label: 'GitHub', href: contact.githubUrl },
            { label: 'LinkedIn', href: contact.linkedinUrl },
            { label: 'Email', href: `mailto:${contact.email}` },
          ].map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-slate-300 transition hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="font-mono text-xs text-slate-500">© 2026 {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
