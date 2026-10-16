const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700',
  secondary: 'border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50',
  ghost: 'text-slate-700 hover:bg-slate-100',
}

/**
 * Renders an anchor when `href` is provided, otherwise a button element.
 */
export default function Button({
  href,
  variant = 'primary',
  className = '',
  children,
  external = false,
  ...rest
}) {
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`.trim()

  if (href) {
    const externalProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}
    return (
      <a href={href} className={classes} {...externalProps} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
