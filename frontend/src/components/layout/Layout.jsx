import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import BackToTop from './BackToTop'
import ScrollManager from './ScrollManager'

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <div className="page-bg" aria-hidden="true" />
      <Navbar />
      <Suspense fallback={<div className="min-h-[70vh]" />}>
        <Outlet />
      </Suspense>
      <Footer />
      <BackToTop />
    </>
  )
}
