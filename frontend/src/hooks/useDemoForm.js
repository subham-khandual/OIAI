import { useEffect, useRef, useState } from 'react'

const EMAIL = /^\S+@\S+\.\S+$/
const MOBILE = /^[6-9]\d{9}$/

/**
 * Client-side form handling for the Apply and Contact pages.
 * DEMO ONLY: submission is faked with a timeout. Replace the setTimeout block
 * with a real request (e.g. fetch(import.meta.env.VITE_API_URL + '/applications')).
 */
export default function useDemoForm({ prefix = 'OIAI-2026' } = {}) {
  const [errors, setErrors] = useState([])
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)
  const [ref, setRef] = useState('')
  const [choice, setChoice] = useState('')
  const timer = useRef()

  useEffect(() => () => clearTimeout(timer.current), [])

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const bad = []
    for (const el of form.elements) {
      if (!el.name || !el.required) continue
      const v = el.value.trim()
      const invalid =
        !v ||
        (el.type === 'email' && !EMAIL.test(v)) ||
        (el.name === 'phone' && !MOBILE.test(v.replace(/\D/g, '')))
      if (invalid) bad.push(el.name)
    }
    setErrors(bad)
    if (bad.length) {
      form.elements[bad[0]].focus()
      return
    }

    setSending(true)
    const programme = form.elements.programme
    timer.current = setTimeout(() => {
      setRef(`${prefix}-${Math.floor(1000 + Math.random() * 9000)}`)
      if (programme) setChoice(programme.selectedOptions[0]?.text ?? '')
      setSending(false)
      setDone(true)
      requestAnimationFrame(() =>
        document.querySelector('.success')?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
      )
    }, 900)
  }

  const onInput = (e) => {
    const { name } = e.target
    if (name) setErrors((list) => list.filter((n) => n !== name))
  }

  return { errors, sending, done, ref, choice, onSubmit, onInput }
}
