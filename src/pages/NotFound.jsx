import { Link } from 'react-router-dom'
import Page from '../components/layout/Page'

export default function NotFound() {
  return (
    <Page title="Page not found — OIAI" description="The page you were looking for does not exist.">
      <section className="wrap flex min-h-[60vh] flex-col items-center justify-center gap-5 py-24 text-center">
        <span className="rounded-full bg-lime px-4 py-1.5 font-display text-sm font-semibold text-ink">Error 404</span>
        <h1 className="font-display text-5xl font-extrabold text-ink md:text-6xl">
          This page <span className="text-brand">isn't here</span>
        </h1>
        <p className="max-w-md text-gray-soft">The link may be old, or the address mistyped. Try one of these instead.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-red">Back to home</Link>
          <Link to="/programmes" className="btn btn-outline">Explore programmes</Link>
        </div>
      </section>
    </Page>
  )
}
