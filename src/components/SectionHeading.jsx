import React from 'react'

export default function SectionHeading({ kicker, title, subtitle, align = 'center' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'
  return (
    <div className={`reveal flex max-w-2xl flex-col gap-3 ${alignCls}`}>
      <span className="section-kicker">{kicker}</span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {subtitle && <p className="text-[15px] leading-relaxed text-slate-400">{subtitle}</p>}
    </div>
  )
}
