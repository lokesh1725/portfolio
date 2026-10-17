import { ExternalLink, FolderGit2, Github } from 'lucide-react'
import Section from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Badge from '../ui/Badge.jsx'
import { projects } from '../../data/projects.js'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Other Projects"
      title="Additional work"
      description="Smaller builds and academic projects that helped strengthen my fundamentals."
      className="bg-slate-50/60 dark:bg-slate-900/60"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, index) => {
          const hasGithub = Boolean(project.links.github)
          const hasDemo = Boolean(project.links.demo)
          return (
            <Reveal
              key={project.name}
              delay={index * 60}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-shadow duration-200 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-none dark:hover:ring-1 dark:hover:ring-slate-800"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                  <FolderGit2 size={18} aria-hidden="true" />
                </span>
                <h3 className="pt-2 text-base font-semibold text-slate-900 dark:text-slate-100">
                  {project.name}
                </h3>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              {(hasGithub || hasDemo) && (
                <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
                  {hasGithub && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-800 dark:text-brand-400 dark:hover:text-brand-300"
                    >
                      <Github size={16} aria-hidden="true" />
                      GitHub
                    </a>
                  )}
                  {hasDemo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-800 dark:text-brand-400 dark:hover:text-brand-300"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      Live demo
                    </a>
                  )}
                </div>
              )}
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
