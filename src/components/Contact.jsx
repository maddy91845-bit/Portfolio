import React from 'react'
import SectionHeading from './SectionHeading.jsx'
import { contact } from '../data/portfolio.js'

export default function Contact() {
  const rows = [
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { label: 'GitHub', value: contact.github, href: contact.githubUrl },
    { label: 'LinkedIn', value: contact.linkedin, href: contact.linkedinUrl },
    { label: 'Location', value: contact.location, href: undefined },
  ]

  return (
    <section id="contact" className="relative scroll-mt-24 py-20 sm:py-24" aria-label="Contact">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="05 — Say hello" title={contact.heading} subtitle={contact.text} />

        <div className="reveal glass mx-auto mt-12 max-w-2xl p-7 sm:p-8">
          <h3 className="font-display text-lg font-bold text-white">Where to find me</h3>
          <ul className="mt-6 space-y-4">
            {rows.map((row) => (
              <li key={row.label} className="flex items-center justify-between gap-4 border-b border-white/[0.07] pb-4 last:border-0 last:pb-0">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">{row.label}</span>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.href.startsWith('http') ? '_blank' : undefined}
                    rel={row.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="truncate text-sm font-medium text-sky-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 rounded"
                  >
                    {row.value}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-slate-200">{row.value}</span>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-slate-400">
            Prefer email? I usually reply within a day or two. Tell me about your idea, role, or the hard
            problem you&apos;re working on.
          </div>
        </div>
      </div>
    </section>
  )
}
