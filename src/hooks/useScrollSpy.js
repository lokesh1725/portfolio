import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view so the navbar can highlight it.
 * `ids` is an array of section ids (without the leading '#').
 */
export default function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')
  const key = ids.join(',')

  useEffect(() => {
    const sectionIds = key ? key.split(',') : []
    if (!sectionIds.length || typeof IntersectionObserver === 'undefined') return

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null)

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return activeId
}
