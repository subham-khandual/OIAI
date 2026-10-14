import { useState } from 'react'

export default function CorporateCollegeSection({ onEnquire }) {
  const [activeTab, setActiveTab] = useState('corporate')

  const corporateServices = [
    { title: 'Generative AI & LLM Upskilling', desc: 'Custom enterprise cohorts for engineering and product teams on LangChain, RAG, and private model deployments.' },
    { title: 'Executive & Manager AI Strategy', desc: 'Non-technical decision-maker workshops on AI ROI, vendor selection, governance, and organizational transformation.' },
    { title: 'AI Productivity for Teams (HR, Finance, Marketing)', desc: 'Hands-on practical training with Copilot, ChatGPT Enterprise, Claude, and automation workflows.' },
    { title: 'Responsible AI, Security & Governance', desc: 'Data privacy compliance, prompt-injection defense, copyright, and ethical deployment standards.' },
  ]

  const collegeServices = [
    { title: 'Faculty Development Programs (FDP)', desc: 'Empowering computer science & engineering professors with current GenAI, ML, and MLOps curricula.' },
    { title: 'Semester-Integrated Student Bootcamps', desc: 'Hands-on training modules and credit-eligible electives conducted directly on campus or online.' },
    { title: 'Campus AI Clubs & State Hackathons', desc: 'Mentoring student AI societies, hosting annual hackathons with prize pools, and sponsorship.' },
    { title: 'Placement-Oriented AI Finishing School', desc: 'Last-mile technical interview preparation, GitHub capstones, and direct corporate recruitment pipelines.' },
  ]

  return (
    <section id="b2b-partnerships" className="py-16 sm:py-24 bg-[#F7F5EF] border-b border-[#E5E0D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="font-extrabold text-3xl sm:text-4xl text-[#0B1938] tracking-tight">
            Corporate Training &amp; College Partnerships
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Collaborating with leading enterprises and higher education universities across Odisha and India to build high-performance AI capabilities.
          </p>

          {/* Toggle Tabs */}
          <div className="inline-flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-[#E5E0D8] shadow-xs mt-4">
            <button
              type="button"
              onClick={() => setActiveTab('corporate')}
              style={{ outline: 'none' }}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'corporate'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🏢 For Corporates &amp; Enterprises
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('college')}
              style={{ outline: 'none' }}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'college'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🎓 For Colleges &amp; Universities
            </button>
          </div>
        </div>

        {/* Dynamic Service Grid */}
        {activeTab === 'corporate' ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E0D8] shadow-lg transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {corporateServices.map((srv) => (
                <div
                  key={srv.title}
                  className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E5E0D8] hover:border-blue-500 transition space-y-2 group"
                >
                  <span className="text-xl">💼</span>
                  <h4 className="text-base font-bold text-[#0B1938] group-hover:text-blue-600 transition">{srv.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{srv.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E5E0D8]">
              <div className="text-center sm:text-left">
                <h4 className="text-sm font-bold text-[#0B1938]">Customized Enterprise Upskilling Proposal</h4>
                <p className="text-xs text-slate-500">Delivered on-premise at your office or through secure private cloud environments.</p>
              </div>
              <button
                type="button"
                onClick={() => onEnquire?.('Corporate AI Training Proposal')}
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md transition cursor-pointer"
              >
                Request Corporate Training →
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E0D8] shadow-lg transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {collegeServices.map((srv) => (
                <div
                  key={srv.title}
                  className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E5E0D8] hover:border-blue-500 transition space-y-2 group"
                >
                  <span className="text-xl">🏛️</span>
                  <h4 className="text-base font-bold text-[#0B1938] group-hover:text-blue-600 transition">{srv.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{srv.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E5E0D8]">
              <div className="text-center sm:text-left">
                <h4 className="text-sm font-bold text-[#0B1938]">Institutional MoU &amp; Center of Excellence</h4>
                <p className="text-xs text-slate-500">Joint certification, lab infrastructure guidance, and university hackathons.</p>
              </div>
              <button
                type="button"
                onClick={() => onEnquire?.('College Institutional Partnership MoU')}
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md transition cursor-pointer"
              >
                Partner With OIAI →
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
