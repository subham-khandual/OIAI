import { Link } from 'react-router-dom'
import { LinkedInIcon, YouTubeIcon, InstagramIcon } from '../ui/Icons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#071329] text-slate-300 pt-16 pb-10 border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Decorative Odisha temple skyline watermark on right side */}
      <div className="absolute right-0 bottom-12 w-96 h-48 pointer-events-none opacity-10 flex items-end justify-end pr-8">
        <svg className="w-full h-full text-white" viewBox="0 0 400 120" fill="currentColor">
          <path d="M40 120 L50 80 L60 120 M70 120 L85 50 L100 120 M110 120 L130 30 L140 20 L150 30 L170 120 M180 120 L210 10 L220 0 L230 10 L260 120 M270 120 L290 40 L310 120 M320 120 L335 70 L350 120" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top 5-Column Grid matching the mockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/oiai-emblem.png"
                alt="OIAI Logo"
                className="h-10 w-auto object-contain brightness-110 shrink-0"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  OIAI
                </span>
                <span className="text-[9px] font-bold tracking-wider text-slate-400 uppercase">
                  Odisha Institute of Artificial Intelligence
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Empowering learners, professionals and organizations with practical AI skills for a smarter Odisha and a better tomorrow.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.linkedin.com/company/odisha-ai-institute/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800/90 hover:bg-[#FF5A1F] text-slate-300 hover:text-white flex items-center justify-center transition text-xs"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/odishaaiinstitute/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800/90 hover:bg-[#FF5A1F] text-slate-300 hover:text-white flex items-center justify-center transition text-xs"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800/90 hover:bg-[#FF5A1F] text-slate-300 hover:text-white flex items-center justify-center transition text-xs"
                aria-label="YouTube"
              >
                <YouTubeIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800/90 hover:bg-[#FF5A1F] text-slate-300 hover:text-white flex items-center justify-center transition text-xs font-bold"
                aria-label="X (Twitter)"
              >
                𝕏
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800/90 hover:bg-[#FF5A1F] text-slate-300 hover:text-white flex items-center justify-center transition text-xs font-bold"
                aria-label="Facebook"
              >
                f
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/" className="hover:text-[#FF5A1F] transition">Home</Link></li>
              <li><Link to="/programmes" className="hover:text-[#FF5A1F] transition">All Programs</Link></li>
              <li><Link to="/admissions" className="hover:text-[#FF5A1F] transition">AI Careers</Link></li>
              <li><Link to="/apply" className="hover:text-[#FF5A1F] transition">Internships</Link></li>
              <li><Link to="/contact" className="hover:text-[#FF5A1F] transition">For Business</Link></li>
              <li><Link to="/event" className="hover:text-[#FF5A1F] transition">Resources</Link></li>
              <li><Link to="/about" className="hover:text-[#FF5A1F] transition">About</Link></li>
            </ul>
          </div>

          {/* Col 3: Programs (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Programs
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/programmes#genai" className="hover:text-[#FF5A1F] transition">Generative AI</Link></li>
              <li><Link to="/programmes#ml" className="hover:text-[#FF5A1F] transition">Machine Learning</Link></li>
              <li><Link to="/programmes#datascience" className="hover:text-[#FF5A1F] transition">Data Science</Link></li>
              <li><Link to="/programmes#agents" className="hover:text-[#FF5A1F] transition">AI Automation</Link></li>
              <li><Link to="/programmes#agents" className="hover:text-[#FF5A1F] transition">AI Agents</Link></li>
              <li><Link to="/programmes#python" className="hover:text-[#FF5A1F] transition">Python for AI</Link></li>
              <li><Link to="/programmes" className="text-[#FF5A1F] font-bold hover:underline transition">View All Programs</Link></li>
            </ul>
          </div>

          {/* Col 4: Resources (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/voices" className="hover:text-[#FF5A1F] transition">AI Blog</Link></li>
              <li><Link to="/voices" className="hover:text-[#FF5A1F] transition">AI News</Link></li>
              <li><Link to="/programmes" className="hover:text-[#FF5A1F] transition">Tutorials</Link></li>
              <li><Link to="/about" className="hover:text-[#FF5A1F] transition">Student Projects</Link></li>
              <li><Link to="/event" className="hover:text-[#FF5A1F] transition">Events</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact Us & Calligraphy (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-start gap-1.5 leading-snug">
                <span className="shrink-0 mt-0.5">📍</span>
                <span>DCB-907, 9th Floor, DLF Cyber City, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha</span>
              </p>
              <p className="flex items-center gap-1.5">
                <span>✉️</span>
                <span>sales@envistream.com / info@oiai.in</span>
              </p>
              <p className="flex items-center gap-1.5">
                <span>📞</span>
                <span>+91-7873489364</span>
              </p>
              <p className="flex items-center gap-1.5">
                <span>📞</span>
                <span>+91-9078419012</span>
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#FF5A1F] to-[#FF7A00] hover:from-[#E84D15] hover:to-[#FF5A1F] transition shadow-xs"
              >
                <span>Get in Touch</span>
                <span>→</span>
              </Link>
            </div>

            {/* Handwritten stamp */}
            <div className="pt-4">
              <span className="font-handwriting text-lg text-slate-300 block leading-tight">
                Building an AI-ready Odisha
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {currentYear} Odisha Institute of Artificial Intelligence (OIAI). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-300 transition">Privacy Policy</Link>
            <Link to="/about" className="hover:text-slate-300 transition">Terms of Service</Link>
            <Link to="/about" className="hover:text-slate-300 transition">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
