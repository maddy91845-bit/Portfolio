import React from 'react'
import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/portfolio.js'

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-20 sm:py-24" aria-label="Selected projects">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="04 — Proof of work"
          title="SELECTED PROJECTS"
          subtitle="A collection of things I've built, explored, and learned from."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
