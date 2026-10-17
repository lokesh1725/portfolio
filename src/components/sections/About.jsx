import { CheckCircle2 } from 'lucide-react'
import Section from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import { profile } from '../../data/profile.js'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="A practical approach to software development"
    >
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <Reveal className="space-y-4 leading-relaxed text-slate-600 dark:text-slate-400">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 dark:border-slate-800 dark:bg-slate-900/60">
            <h3 className="text-sm font-semibold tracking-wide text-slate-900 uppercase dark:text-slate-100">
              What I bring
            </h3>
            <ul className="mt-4 space-y-3">
              {profile.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-brand-600 dark:text-brand-400"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
