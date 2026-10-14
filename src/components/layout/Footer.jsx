import { Link } from 'react-router-dom'
import { footerColumns, legalLinks } from '../../data/site'
import { socials } from '../../data/socials'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-card">
          <div className="foot-grid">
            <div className="foot-brand">
              <Link className="brand" to="/" style={{ color: 'var(--ink)' }}>
                <span className="brand-mark" aria-hidden="true">OIAI</span>
                <span className="brand-txt">
                  <strong>Odisha Institute of<br />Artificial Intelligence</strong>
                  <span style={{ color: 'var(--gray-2)' }}>Bhubaneswar</span>
                </span>
              </Link>
              <p>An Odisha institute teaching applied AI — degrees, research and industry training from campus in Bhubaneswar.</p>
              {/* DEMO: wire to a real mailing-list endpoint before launch */}
              <form className="subscribe" onSubmit={(e) => e.preventDefault()}>
                <label className="sr-only" htmlFor="sub" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
                  Email for admissions updates
                </label>
                <input id="sub" type="email" placeholder="Your email here" />
                <button className="btn btn-red btn-sm" type="submit">Join</button>
              </form>
              <div className="socials">
                {socials.map(({ label, href, icon }) => (
                  <a key={label} href={href} aria-label={label}>{icon}</a>
                ))}
              </div>
            </div>

            {footerColumns.map(({ title, links }) => (
              <div className="foot-col" key={title}>
                <h4>{title}</h4>
                <ul>
                  {links.map(({ to, label }) => (
                    <li key={label}><Link to={to}>{label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="ik" aria-hidden="true" />

          <div className="foot-bot">
            <p>© {new Date().getFullYear()} Odisha Institute of Artificial Intelligence. Bhubaneswar, Odisha, India.</p>
            <nav aria-label="Legal">
              {legalLinks.map((label) => (
                <a key={label} href="#">{label}</a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
