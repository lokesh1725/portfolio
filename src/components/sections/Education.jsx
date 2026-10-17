import { Award, GraduationCap, Landmark, Users } from 'lucide-react'
import Section from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import { achievements, education } from '../../data/education.js'
import { certifications } from '../../data/certifications.js'

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & Achievements"
      title="Academic background"
    >
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          {education.map((item, index) => (
            <Reveal
              key={item.degree}
              delay={index * 60}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                <GraduationCap size={18} aria-hidden="true" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {item.degree}
                  </h3>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.institution}</p>
                <p className="mt-2 text-sm font-medium text-brand-700 dark:text-brand-400">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}

          {achievements.map((item) => (
            <Reveal
              key={item.title}
              delay={180}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                <Users size={18} aria-hidden="true" />
              </span>
              <div>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={120}
          className="h-fit rounded-2xl border border-slate-200 bg-slate-50/60 p-6 dark:border-slate-800 dark:bg-slate-900/60"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
              <Award size={18} aria-hidden="true" />
            </span>
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              Certifications
            </h3>
          </div>
          <ul className="mt-4 space-y-3">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
              >
                <Landmark
                  size={16}
                  className="mt-0.5 shrink-0 text-slate-400"
                  aria-hidden="true"
                />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
