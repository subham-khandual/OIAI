import { useEffect, useRef, useState } from 'react'

const reduceMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/** Number that counts up from 0 the first time it scrolls into view. */
export default function CountUp({ to, suffix = '', group = true, as: Tag = 'span', ...props }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    const run = () => {
      if (reduceMotion()) return setValue(to)
      const t0 = performance.now()
      const step = (now) => {
        const p = Math.min((now - t0) / 1200, 1)
        setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }
    if (!('IntersectionObserver' in window)) {
      setValue(to)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run()
          io.disconnect()
        }
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to])

  return (
    <Tag ref={ref} {...props}>
      {group ? value.toLocaleString('en-IN') : value}
      {suffix}
    </Tag>
  )
}
