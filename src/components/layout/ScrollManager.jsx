import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll to top on route change, or to the #hash target once it has rendered. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    let tries = 0
    let raf
    const seek = () => {
      const el = document.getElementById(hash.slice(1))
      if (el) el.scrollIntoView()
      else if (tries++ < 30) raf = requestAnimationFrame(seek)
    }
    seek()
    return () => cancelAnimationFrame(raf)
  }, [pathname, hash])

  return null
}
