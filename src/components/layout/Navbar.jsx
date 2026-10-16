import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../../data/profile.js'
import useScrollSpy from '../../hooks/useScrollSpy.js'

const sectionIds = navLinks.map((link) => link.href.replace('#', ''))

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Main">
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base"
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeId === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'font-medium text-brand-700'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={profile.resumeUrl}
                download
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3.5 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
              >
                <Download size={16} aria-hidden="true" />
                Wanna see my resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
