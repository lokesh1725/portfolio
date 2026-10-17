import Reveal from './Reveal.jsx'

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
  align = 'left',
}) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <section id={id} className={`section ${className}`}>
      <div className="container-page">
        {(eyebrow || title || description) && (
          <Reveal className={`mb-10 max-w-2xl ${alignment}`}>
            {eyebrow && (
              <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase dark:text-brand-400">
                {eyebrow}
              </p>
            )}
            {title && <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>}
            {description && (
              <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                {description}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
