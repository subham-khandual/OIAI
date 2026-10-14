import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

// Everything except the landing page is code-split.
const Programmes = lazy(() => import('./pages/Programmes'))
const Admissions = lazy(() => import('./pages/Admissions'))
const About = lazy(() => import('./pages/About'))
const Voices = lazy(() => import('./pages/Voices'))
const Event = lazy(() => import('./pages/Event'))
const Apply = lazy(() => import('./pages/Apply'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="programmes" element={<Programmes />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="about" element={<About />} />
        <Route path="voices" element={<Voices />} />
        <Route path="event" element={<Event />} />
        <Route path="apply" element={<Apply />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
