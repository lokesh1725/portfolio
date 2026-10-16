import {
  ArrowRight,
  Boxes,
  CalendarClock,
  CheckCircle2,
  Github,
  ExternalLink,
  Lightbulb,
  Target,
} from 'lucide-react'
import Reveal from '../ui/Reveal.jsx'
import Badge from '../ui/Badge.jsx'
import { featuredProject as project } from '../../data/featuredProject.js'

function FlowStep({ step, index, total }) {
  return (
    <li className="flex flex-1 items-stretch">
      <div className="w-full rounded-xl border border-slate-200 bg-white p-4">
        <p className="text-xs font-semibold text-brand-600">{String(index + 1).padStart(2, '0')}</p>
        <p className="mt-1 font-medium text-slate-900">{step.title}</p>
        <p className="mt-1 text-xs leading-relaxed text-slate-600">{step.description}</p>
      </div>
      {index < total - 1 && (
        <span className="mx-1 hidden items-center text-slate-300 lg:flex" aria-hidden="true">
          <ArrowRight size={18} />
        </span>
      )}
    </li>
  )
}

export default function FeaturedProject() {
  return (
    <section id="medsy" className="section scroll-mt-20">
      <div className="container-page">
        <Reveal className="mb-8">
          <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
            {project.subtitle}
          </p>
          <h2 className="text-2xl font-semibold sm:text-3xl">{project.name}</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">{project.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Boxes size={18} aria-hidden="true" />
              </span>
              <h3 className="text-base font-semibold text-slate-900">Project overview</h3>
            </div>
            <p className="mt-4 leading-relaxed text-slate-600">{project.overview}</p>
            <p className="mt-4 text-sm text-slate-500">
              Company: <span className="font-medium text-slate-700">{project.company}</span>
            </p>
          </Reveal>

          <Reveal delay={80} className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Target size={18} aria-hidden="true" />
              </span>
              <h3 className="text-base font-semibold text-slate-900">Problem statement</h3>
            </div>
            <p className="mt-4 leading-relaxed text-slate-600">{project.problem}</p>
          </Reveal>
        </div>

        <Reveal className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <Lightbulb size={18} aria-hidden="true" />
            </span>
            <h3 className="text-base font-semibold text-slate-900">My contributions</h3>
          </div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {project.contributions.map((item) => (
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
        </Reveal>

        <Reveal className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <Boxes size={18} aria-hidden="true" />
            </span>
            <h3 className="text-base font-semibold text-slate-900">Simplified architecture</h3>
          </div>

          <ol className="mt-5 flex flex-col gap-2 lg:flex-row lg:items-stretch">
            {project.architecture.map((step, index) => (
              <FlowStep
                key={step.title}
                step={step}
                index={index}
                total={project.architecture.length}
              />
            ))}
          </ol>

          <div className="mt-6 flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-brand-700 ring-1 ring-slate-200">
              <CalendarClock size={16} aria-hidden="true" />
            </span>
            <p className="text-sm font-medium text-slate-700">Scheduled refresh flow</p>
          </div>
          <ol className="mt-4 flex flex-col gap-2 lg:flex-row lg:items-stretch">
            {project.scheduledFlow.map((step, index) => (
              <FlowStep
                key={step.title}
                step={step}
                index={index}
                total={project.scheduledFlow.length}
              />
            ))}
          </ol>
        </Reveal>

        {project.screenshots.some((shot) => shot.src) && (
          <Reveal className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-base font-semibold text-slate-900">Screenshots</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {project.screenshots
                .filter((shot) => shot.src)
                .map((shot) => (
                  <figure
                    key={shot.caption}
                    className="overflow-hidden rounded-xl border border-slate-200"
                  >
                    <img
                      src={shot.src}
                      alt={shot.caption}
                      loading="lazy"
                      className="aspect-video w-full object-cover"
                    />
                    <figcaption className="border-t border-slate-200 px-4 py-3 text-xs text-slate-500">
                      {shot.caption}
                    </figcaption>
                  </figure>
                ))}
            </div>
          </Reveal>
        )}

        {(project.links.github || project.links.demo) && (
          <Reveal className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex flex-wrap items-center gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-800"
                >
                  <Github size={16} aria-hidden="true" />
                  View code
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-800"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Live demo
                </a>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
