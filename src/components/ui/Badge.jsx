export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 ${className}`.trim()}
    >
      {children}
    </span>
  )
}
