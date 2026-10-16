import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import { profile } from '../../data/profile.js'

const facts = [
  { label: 'Based in', value: profile.location, icon: MapPin },
  { label: 'Focus', value: 'Full-stack · React.js · REST APIs' },
  { label: 'Education', value: 'B.E. ECE, Jeppiaar Engineering College (2026)' },
  { label: 'Availability', value: profile.availability },
]

export default function Hero() {
  return (
    <section id="home" className="section scroll-mt-20 pt-14 sm:pt-20">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-14">
          <Reveal className="order-2 lg:order-1">
            <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                width={1000}
                height={1500}
                loading="eager"
                fetchPriority="high"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100} className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
              Open to entry-level software roles
            </span>

            <h1 className="mt-5 text-3xl font-semibold uppercase tracking-tight sm:text-4xl lg:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-brand-700 sm:text-xl">{profile.role}</p>

            <p className="mt-5 max-w-xl leading-relaxed text-slate-600">{profile.heroText}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#projects">
                View Projects
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
              <Button href={profile.resumeUrl} download variant="secondary">
                <Download size={16} aria-hidden="true" />
                Wanna see my resume
              </Button>
              <Button href="#contact" variant="secondary">
                <Mail size={16} aria-hidden="true" />
                Contact Me
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-700"
              >
                <Github size={18} aria-hidden="true" />
                GitHub
              </a>
              <span className="text-slate-300" aria-hidden="true">
                |
              </span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-700"
              >
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-12">
          <dl className="grid gap-6 rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => {
              const Icon = fact.icon
              return (
                <div key={fact.label}>
                  <dt className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 flex items-center gap-2 text-sm font-medium text-slate-800">
                    {Icon && <Icon size={16} className="text-brand-600" aria-hidden="true" />}
                    {fact.value}
                  </dd>
                </div>
              )
            })}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
