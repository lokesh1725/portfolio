import { Briefcase, MapPin } from 'lucide-react'
import Section from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import { experience } from '../../data/experience.js'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Professional Experience"
      title="Where I have worked"
    >
      <ol className="relative space-y-8 border-l border-slate-200 pl-6 sm:pl-8">
        {experience.map((job, index) => (
          <li key={`${job.company}-${job.role}`} className="relative">
            <span
              className="absolute top-1.5 -left-[calc(1.5rem+5px)] inline-flex h-3 w-3 items-center justify-center rounded-full border-2 border-brand-600 bg-white sm:-left-[calc(2rem+5px)]"
              aria-hidden="true"
            />
            <Reveal delay={index * 60}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{job.role}</h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase size={15} className="text-brand-600" aria-hidden="true" />
                        {job.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={15} className="text-slate-400" aria-hidden="true" />
                        {job.location}
                      </span>
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {job.period}
                  </span>
                </div>

                <p className="mt-4 text-sm text-slate-600">{job.summary}</p>

                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
