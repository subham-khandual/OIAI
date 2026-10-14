import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/site'
import { useI18n } from '../../context/I18nContext'

export default function Navbar() {
  const { t, lang, setLang } = useI18n()
  const { pathname } = useLocation()
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <div className="navwrap">
      <header className={`nav${stuck ? ' stuck' : ''}`} id="nav">
        <Link className="brand" to="/" aria-label="OIAI home">
          <span className="brand-mark" aria-hidden="true">OIAI</span>
          <span className="brand-txt">
            <strong>Odisha Institute of<br />Artificial Intelligence</strong>
            <span>Bhubaneswar</span>
          </span>
        </Link>

        <nav className={`nav-links${open ? ' open' : ''}`} id="navLinks" aria-label="Primary">
          {navLinks.map(({ to, label, end, noI18n }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => (isActive ? 'on' : undefined)}>
              {noI18n ? label : t(label)}
            </NavLink>
          ))}
        </nav>

        <div className="nav-right">
          <div className="lang" role="group" aria-label="Language">
            <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
            <button type="button" aria-pressed={lang === 'or'} onClick={() => setLang('or')}>ଓଡ଼ିଆ</button>
          </div>
          <span className="price-pill">Fees from <b>₹1.8L</b></span>
          <Link to="/apply" className="btn btn-red btn-sm">{t('Apply Now')}</Link>
          <button
            type="button"
            className="burger"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="navLinks"
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  )
}
