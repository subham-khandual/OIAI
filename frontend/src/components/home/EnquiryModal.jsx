import { useState } from 'react'

export default function EnquiryModal({ isOpen, onClose, defaultProgram = '' }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    program: defaultProgram || 'MERN + GenAI Full Stack',
    mode: 'Hybrid - Bhubaneswar',
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0B1938] to-[#122A5E] text-white p-5 flex items-start justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5A1F] bg-white/10 px-2 py-0.5 rounded-full">
              Admissions 2026
            </span>
            <h3 className="text-lg font-bold mt-1 text-white">Instant Course Enquiry</h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Talk to an academic counsellor &amp; receive the complete curriculum PDF.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm transition"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mx-auto">
              ✓
            </div>
            <h4 className="text-base font-bold text-slate-900">Enquiry Submitted!</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Thank you, <span className="font-semibold text-slate-900">{form.name}</span>. An admissions mentor from our Bhubaneswar center will connect with you via WhatsApp/call shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-3.5 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Swagatika Mohanty"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#FF5A1F] transition text-slate-900"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Phone / WhatsApp</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#FF5A1F] transition text-slate-900"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#FF5A1F] transition text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Program of Interest</label>
              <select
                value={form.program}
                onChange={(e) => setForm({ ...form, program: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#FF5A1F] transition text-slate-900 bg-white"
              >
                <option value="AI for Developers (12M)">AI for Developers (12M Full-Stack)</option>
                <option value="MERN + GenAI Full Stack">MERN + GenAI Full Stack</option>
                <option value="Generative AI & LLM Systems">Generative AI &amp; LLM Systems</option>
                <option value="Python + Machine Learning">Python + Machine Learning</option>
                <option value="Prompt Engineering & Agents">Prompt Engineering &amp; Agents</option>
                <option value="B.Tech CSE (AI & ML) - 4 Yrs">B.Tech CSE (AI &amp; ML) - 4 Years</option>
                <option value="M.Tech Artificial Intelligence">M.Tech Artificial Intelligence</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Learning Mode</label>
              <div className="grid grid-cols-2 gap-2">
                {['Hybrid - Bhubaneswar', 'Live Online + Labs'].map((mode) => (
                  <button
                    type="button"
                    key={mode}
                    onClick={() => setForm({ ...form, mode })}
                    className={`py-1.5 px-2 rounded-lg border text-center transition ${
                      form.mode === mode
                        ? 'border-[#FF5A1F] bg-orange-50 text-[#FF5A1F] font-bold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-full btn-orange text-xs font-bold uppercase tracking-wider mt-4"
            >
              Submit &amp; Download Brochure →
            </button>
            <p className="text-[10px] text-center text-slate-400">
              🔒 Zero spam. We reply within working hours from our Bhubaneswar office.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
