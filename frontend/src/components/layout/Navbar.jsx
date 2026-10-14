import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import OIAILogo from '../ui/OIAILogo'

export default function Navbar() {
  const { pathname } = useLocation()
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 15)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setActiveDropdown(null)
    setMobileExpanded(null)
  }, [pathname])

  // Navigation Items (AI Careers removed; clean dropdown options without square borders)
  const navItems = [
    { label: 'Home', to: '/', exact: true },
    {
      label: 'AI Programs',
      to: '/programmes',
      hasDropdown: true,
      isWide: true,
      items: [
        { label: 'AI Fundamentals', to: '/programmes#fundamentals' },
        { label: 'Generative AI', to: '/programmes#genai' },
        { label: 'Machine Learning', to: '/programmes#ml' },
        { label: 'Data Science', to: '/programmes#datascience' },
        { label: 'AI Agents', to: '/programmes#agents' },
        { label: 'Prompt Engineering', to: '/programmes#prompt' },
        { label: 'AI Automation', to: '/programmes#automation' },
        { label: 'Cloud AI', to: '/programmes#cloud' },
        { label: 'Computer Vision', to: '/programmes#cv' },
        { label: 'NLP', to: '/programmes#nlp' },
        { label: 'Python for AI', to: '/programmes#python' },
        { label: 'AI for Professionals', to: '/programmes#professionals' },
      ],
      footerLink: { label: 'View All AI Programs →', to: '/programmes' },
    },
    {
      label: 'Courses',
      to: '/programmes',
      hasDropdown: true,
      items: [
        { label: 'Beginner Programs', to: '/programmes#beginner' },
        { label: 'Professional Programs', to: '/programmes#professional' },
        { label: 'Advanced Programs', to: '/programmes#advanced' },
        { label: 'Certification Programs', to: '/programmes#certification' },
        { label: 'Online Courses', to: '/programmes#online' },
        { label: 'Offline Courses', to: '/programmes#offline' },
      ],
    },
    {
      label: 'Internships',
      to: '/apply',
      hasDropdown: true,
      items: [
        { label: 'AI Internship', to: '/apply#ai-internship' },
        { label: 'Python Internship', to: '/apply#python-internship' },
        { label: 'Data Science Internship', to: '/apply#ds-internship' },
        { label: 'GenAI Internship', to: '/apply#genai-internship' },
        { label: 'ML Internship', to: '/apply#ml-internship' },
        { label: 'Student Projects', to: '/apply#projects' },
      ],
    },
    {
      label: 'For Business',
      to: '/contact',
      hasDropdown: true,
      items: [
        { label: 'Corporate AI Training', to: '/contact#corporate' },
        { label: 'AI Workshops', to: '/event#workshops' },
        { label: 'AI Consulting', to: '/contact#consulting' },
        { label: 'AI Automation', to: '/contact#automation' },
        { label: 'College Workshops', to: '/contact#colleges' },
      ],
    },
    {
      label: 'Resources',
      to: '/voices',
      hasDropdown: true,
      items: [
        { label: 'AI Blog', to: '/voices#blog' },
        { label: 'AI News', to: '/voices#news' },
        { label: 'AI Tutorials', to: '/voices#tutorials' },
        { label: 'AI FAQs', to: '/about#faq' },
        { label: 'AI Career Guides', to: '/admissions#guides' },
        { label: 'Case Studies', to: '/about#casestudies' },
        { label: 'Downloads', to: '/programmes#downloads' },
      ],
    },
    { label: 'About OIAI', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <>
      {/* Solid crisp light bluish header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          stuck
            ? 'bg-[#EEF5FC] shadow-sm border-b border-[#D5E5F5]'
            : 'bg-[#EEF5FC] border-b border-[#D5E5F5]'
        }`}
      >
        {/* Subtle top tech accent line */}
        <div className="h-[2px] bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 w-full" />

        {/* Full-width container: Logo pinned strictly to the left corner */}
        <div className="w-full px-4 sm:px-6 lg:px-10 h-[76px] flex items-center justify-between gap-4">
          
          {/* Left Corner: OIAI Official Logo */}
          <Link
            to="/"
            className="shrink-0 flex items-center group focus:outline-none"
            aria-label="Odisha Institute of Artificial Intelligence - Home"
          >
            <OIAILogo imgClassName="h-10 sm:h-11" textColor="text-[#0B1938]" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden xl:flex items-center gap-4 2xl:gap-6 text-[15px] 2xl:text-[16px] font-semibold text-slate-800"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              if (item.hasDropdown) {
                const isOpen = activeDropdown === item.label
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {/* Borderless Dropdown Toggle */}
                    <button
                      type="button"
                      onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                      style={{ border: 'none', background: 'transparent', outline: 'none', boxShadow: 'none' }}
                      className={`p-0 m-0 border-0 bg-transparent outline-none shadow-none transition-colors duration-150 hover:text-blue-600 flex items-center gap-1.5 cursor-pointer select-none text-[15px] 2xl:text-[16px] ${
                        isOpen ? 'text-blue-600 font-bold' : 'text-slate-800 font-semibold'
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span className="tracking-normal">{item.label}</span>
                      {/* Subtle dropdown arrow indicator */}
                      <svg
                        className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-blue-600' : 'group-hover:text-blue-600'
                        }`}
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M2.5 4.5L6 8L9.5 4.5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {/* Natural Glassmorphic Dropdown Menu */}
                    {isOpen && (
                      <div
                        className={`absolute top-full left-0 bg-white/98 backdrop-blur-2xl border border-[#D5E5F5] rounded-2xl shadow-[0_16px_40px_rgba(11,25,56,0.12)] z-50 animate-fadeIn ${
                          item.isWide ? 'w-[560px] p-4' : 'w-64 p-2'
                        }`}
                      >
                        {item.isWide ? (
                          <div>
                            <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                              {item.items.map((sub) => (
                                <Link
                                  key={sub.label}
                                  to={sub.to}
                                  onClick={() => setActiveDropdown(null)}
                                  className="px-3 py-2 text-[14px] text-slate-700 hover:text-blue-600 hover:bg-blue-50/70 rounded-lg transition-colors font-medium flex items-center justify-between"
                                >
                                  <span>{sub.label}</span>
                                </Link>
                              ))}
                            </div>
                            {item.footerLink && (
                              <div className="mt-3 pt-2.5 border-t border-[#D5E5F5] flex items-center justify-between px-2">
                                <Link
                                  to={item.footerLink.to}
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-sm font-bold text-blue-600 hover:text-blue-700 transition"
                                >
                                  {item.footerLink.label}
                                </Link>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="flex flex-col gap-0.5">
                            {item.items.map((sub) => (
                              <Link
                                key={sub.label}
                                to={sub.to}
                                onClick={() => setActiveDropdown(null)}
                                className="px-3 py-2 text-[14px] text-slate-700 hover:text-blue-600 hover:bg-blue-50/70 rounded-lg transition-colors font-medium"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.exact}
                  style={{ border: 'none', background: 'transparent', outline: 'none' }}
                  className={({ isActive }) =>
                    `p-0 m-0 border-0 bg-transparent outline-none transition-colors duration-150 relative text-[15px] 2xl:text-[16px] ${
                      isActive
                        ? 'text-blue-600 font-bold'
                        : 'text-slate-800 font-semibold hover:text-blue-600'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="tracking-normal">{item.label}</span>
                      {isActive && (
                        <span className="absolute bottom-[-4px] left-0 right-0 h-[2.5px] bg-blue-600 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              )
            })}
          </nav>

          {/* Right Section: Persistent CTA "Enroll Now" */}
          <div className="flex items-center gap-3">
            {/* CTA Button: "Enroll Now" */}
            <Link
              to="/apply"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm sm:text-[15px] font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg shadow-blue-500/20 transition-all shrink-0 tracking-wide hover:-translate-y-0.5"
            >
              Enroll Now
            </Link>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              style={{ border: 'none', background: 'transparent' }}
              className="xl:hidden p-2 text-slate-700 hover:text-blue-600 transition"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <div className="xl:hidden bg-[#EEF5FC]/98 backdrop-blur-2xl border-b border-[#D5E5F5] px-5 py-4 shadow-xl max-h-[80vh] overflow-y-auto animate-fadeIn">
            <nav className="flex flex-col">
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  const isExpanded = mobileExpanded === item.label
                  return (
                    <div key={item.label} className="border-b border-[#D5E5F5] py-2.5">
                      <button
                        type="button"
                        style={{ border: 'none', background: 'transparent' }}
                        onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                        className="w-full flex items-center justify-between text-left py-1 text-[16px] font-semibold text-slate-800 hover:text-blue-600"
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-blue-600' : ''}`}
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M2.5 4.5L6 8L9.5 4.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {isExpanded && (
                        <div className="pl-3 pt-2 pb-1 flex flex-col gap-1.5">
                          {item.items.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.to}
                              onClick={() => setOpen(false)}
                              className="text-[14px] text-slate-700 hover:text-blue-600 py-1 block font-medium"
                            >
                              • {sub.label}
                            </Link>
                          ))}
                          {item.footerLink && (
                            <Link
                              to={item.footerLink.to}
                              onClick={() => setOpen(false)}
                              className="text-sm font-bold text-blue-600 hover:text-blue-700 py-1 mt-1 block"
                            >
                              {item.footerLink.label}
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <div key={item.label} className="border-b border-[#D5E5F5] py-2.5">
                    <NavLink
                      to={item.to}
                      end={item.exact}
                      style={{ border: 'none', background: 'transparent' }}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `text-[16px] font-semibold block py-1 ${
                          isActive ? 'text-blue-600 font-bold' : 'text-slate-800 hover:text-blue-600'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </div>
                )
              })}
            </nav>

            {/* Mobile Bottom CTA Button: Enroll Now */}
            <div className="mt-4 pt-2">
              <Link
                to="/apply"
                onClick={() => setOpen(false)}
                className="w-full text-center block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-[15px] py-3 px-4 rounded-lg shadow-sm transition"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
