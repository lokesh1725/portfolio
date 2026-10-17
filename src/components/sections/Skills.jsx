import { Code2, Database, LayoutGrid, Server, Wrench } from 'lucide-react'
import Section from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Badge from '../ui/Badge.jsx'
import { skillGroups } from '../../data/skills.js'

const icons = {
  layout: LayoutGrid,
  server: Server,
  code: Code2,
  database: Database,
  wrench: Wrench,
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical Skills"
      title="Technologies I work with"
      description="Grouped by area rather than proficiency ratings — every item below has been used in coursework, projects or internship work."
      className="bg-slate-50/60 dark:bg-slate-900/60"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = icons[group.icon] ?? Code2
          return (
            <Reveal
              key={group.title}
              delay={index * 60}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow duration-200 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-none dark:hover:ring-1 dark:hover:ring-slate-800"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {group.title}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
