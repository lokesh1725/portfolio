import { useState } from 'react'
import { Download, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import Section from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import { profile } from '../../data/profile.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Optional: set VITE_CONTACT_ENDPOINT (e.g. a Formspree/own API URL) to POST the form.
// When it is not configured, the form falls back to opening the user's email client
// instead of pretending the message was sent.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT

function validate(values) {
  const errors = {}
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.subject.trim()) {
    errors.subject = 'Please add a subject.'
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'Please write a message of at least 10 characters.'
  }
  return errors
}

function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const updateField = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields.' })
      return
    }

    const trimmed = {
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    }

    if (!ENDPOINT) {
      const subject = encodeURIComponent(trimmed.subject)
      const body = encodeURIComponent(
        `${trimmed.message}\n\n—\n${trimmed.name}\n${trimmed.email}`,
      )
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus({
        type: 'info',
        message:
          'Opening your email app with this message — nothing is sent automatically until you press Send there.',
      })
      return
    }

    try {
      setStatus({ type: 'loading', message: 'Sending…' })
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(trimmed),
      })
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`)
      setStatus({ type: 'success', message: 'Thanks! Your message has been sent.' })
      setValues({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending. Please email me directly instead.',
      })
    }
  }

  const fieldClass = (field) =>
    `w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 ${
      errors[field]
        ? 'border-red-300 focus:border-red-400 focus:ring-red-100 dark:border-red-800 dark:focus:border-red-500 dark:focus:ring-red-900/40'
        : 'border-slate-300 focus:border-brand-500 focus:ring-brand-100 dark:border-slate-600 dark:focus:ring-brand-900/40'
    }`

  const statusColors = {
    error: 'text-red-600 dark:text-red-400',
    success: 'text-green-700 dark:text-green-400',
    info: 'text-slate-600 dark:text-slate-400',
    loading: 'text-slate-600 dark:text-slate-400',
    idle: 'text-slate-600 dark:text-slate-400',
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={updateField}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={fieldClass('name')}
            placeholder="Your name"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-600 dark:text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={updateField}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={fieldClass('email')}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600 dark:text-red-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={updateField}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          className={fieldClass('subject')}
          placeholder="What is this about?"
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-xs text-red-600 dark:text-red-400">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={updateField}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${fieldClass('message')} resize-y`}
          placeholder="Write your message…"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-600 dark:text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60 dark:hover:bg-brand-500"
        >
          <Send size={16} aria-hidden="true" />
          {status.type === 'loading' ? 'Sending…' : 'Send message'}
        </button>
        {status.message && (
          <p role="status" className={`text-sm ${statusColors[status.type]}`}>
            {status.message}
          </p>
        )}
      </div>
    </form>
  )
}

function ContactItem({ icon: Icon, label, value, href, external }) {
  const content = (
    <>
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
        <Icon size={18} aria-hidden="true" />
      </span>
      <span>
        <span className="block text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
          {label}
        </span>
        <span className="mt-0.5 block break-words text-sm font-medium text-slate-800 dark:text-slate-200">
          {value}
        </span>
      </span>
    </>
  )

  if (!href) {
    return <div className="flex items-start gap-3">{content}</div>
  }

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex items-start gap-3 hover:opacity-90"
    >
      {content}
    </a>
  )
}

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk"
      description="I am open to entry-level Software Developer, Frontend, React and Full-Stack roles. The fastest way to reach me is email."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <Reveal className="space-y-6">
          <div className="space-y-5">
            <ContactItem
              icon={Mail}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactItem
              icon={Github}
              label="GitHub"
              value="github.com/lokesh1725"
              href={profile.github}
              external
            />
            <ContactItem
              icon={Linkedin}
              label="LinkedIn"
              value="linkedin.com/in/lokeshwaran-krishnasamy-b3b441259"
              href={profile.linkedin}
              external
            />
            <ContactItem icon={MapPin} label="Location" value={profile.location} />
          </div>

          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800"
          >
            <Download size={16} aria-hidden="true" />
            Wanna see my resume
          </a>
        </Reveal>

        <Reveal
          delay={120}
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 dark:border-slate-800 dark:bg-slate-900"
        >
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            Send a message
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Fill in the form and it will open your email app with the message ready to send.
          </p>
          <div className="mt-5">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
