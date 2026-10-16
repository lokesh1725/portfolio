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
        <Reveal className="space-y-4 leading-relaxed text-slate-600">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
            <h3 className="text-sm font-semibold tracking-wide text-slate-900 uppercase">
              What I bring
            </h3>
            <ul className="mt-4 space-y-3">
              {profile.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-brand-600"
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
