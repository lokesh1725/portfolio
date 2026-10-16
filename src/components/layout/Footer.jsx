import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../../data/profile.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-semibold uppercase text-slate-900">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-600">{profile.role} · {profile.location}</p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-brand-700"
            aria-label="Email"
          >
            <Mail size={18} aria-hidden="true" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-brand-700"
            aria-label="GitHub"
          >
            <Github size={18} aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-brand-700"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <p className="container-page py-5 text-center text-xs text-slate-500">
          © {year} <span className="uppercase">{profile.name}</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
