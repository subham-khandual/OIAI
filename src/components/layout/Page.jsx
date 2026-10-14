import { useEffect, useRef } from 'react'
import useReveal from '../../hooks/useReveal'

/** Wraps every page: sets <title> + meta description, runs reveal-on-scroll, renders <main>. */
export default function Page({ title, description, children }) {
  const ref = useRef(null)
  useReveal(ref)

  useEffect(() => {
    document.title = title
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description
  }, [title, description])

  return (
    <main id="top" ref={ref} className="page-enter">
      {children}
    </main>
  )
}
