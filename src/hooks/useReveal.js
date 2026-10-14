import { useEffect } from 'react'

/** Adds `.in` to every `.rv` element inside `rootRef` as it scrolls into view. */
export default function useReveal(rootRef) {
  useEffect(() => {
    const els = rootRef.current ? [...rootRef.current.querySelectorAll('.rv')] : []
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (!entry.isIntersecting) return
          const el = entry.target
          setTimeout(() => el.classList.add('in'), i * 65)
          io.unobserve(el)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [rootRef])
}
