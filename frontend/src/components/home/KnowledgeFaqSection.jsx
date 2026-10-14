import { useState } from 'react'

export default function KnowledgeFaqSection({ onEnquire }) {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: 'What is the best AI institute in Bhubaneswar, Odisha?',
      a: 'Odisha Institute of Artificial Intelligence (OIAI), located at DLF Cyber City, Patia, Bhubaneswar, is regarded as the leading dedicated AI institute in the region. Unlike generic training centers, OIAI delivers an AI-first curriculum (Generative AI, AI Agents, Machine Learning, Cloud AI), live GPU lab access, verified industry internships, and direct placement support.',
    },
    {
      q: 'Which AI course is best for beginners and non-programmers?',
      a: 'For beginners and non-programmers, OIAI offers "AI Fundamentals & Python for AI" and "AI for Working Professionals". These programs start from baseline logic, no-code AI tools, prompt engineering, and core Python, allowing anyone from school students to business analysts to become proficient without prior software development experience.',
    },
    {
      q: 'What AI course should a B.Tech / BCA / MCA student choose in Odisha?',
      a: 'Engineering and computer applications students should choose the "Generative AI & Autonomous AI Agents Master Track" or "AI for Developers". These intensive tracks feature PyTorch, LangChain, RAG pipelines, MLOps, vector search, and a guaranteed 3 to 6-month live capstone internship required for competitive product-company campus placements.',
    },
    {
      q: 'Can working professionals transition to an AI career without quitting their job?',
      a: 'Yes. OIAI provides flexible weekend live cohorts and hybrid learning options. Working professionals can learn hands-on GenAI, AI automation workflows (n8n, Agentforce), and enterprise copilots while maintaining their current job, with recorded session backups and 1-on-1 mentor guidance.',
    },
    {
      q: 'What is an AI Agent and why is it crucial in 2026-27?',
      a: 'An AI Agent is an autonomous system powered by large language models that can reason, plan multi-step workflows, use external tools and APIs, and execute tasks without continuous human supervision. In 2026-27, organizations are shifting from basic chatbots to agentic architectures, creating exceptional demand for AI Agent Developers and Automation Specialists.',
    },
    {
      q: 'Does OIAI provide internship certificates and placement assistance?',
      a: 'Yes. Every master and professional program at OIAI includes a mandatory live client or research internship. Students receive an ISO & GeM recognized digital experience certificate with instant online verification codes, alongside resume auditing, mock technical coding rounds, and interview referrals to hiring partners.',
    },
    {
      q: 'How long does it take to become job-ready in Artificial Intelligence?',
      a: 'Depending on your starting baseline, becoming job-ready typically takes between 3 to 6 months of focused hands-on training (10-15 hours/week). OIAI ensures you build 4+ portfolio-grade GitHub projects and complete a live commercial internship within this timeframe.',
    },
    {
      q: 'Where is the OIAI physical campus located in Bhubaneswar?',
      a: 'OIAI operates its primary state-of-the-art AI training facility and GPU compute lab at DCB-907, 9th Floor, DLF Cyber City, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha. We welcome students, parents, and corporate partners for campus tours and counseling.',
    },
  ]

  const articles = [
    {
      title: 'The Rise of AI Agents in 2026: Why Bhubaneswar is Becoming an AI Hub',
      cat: 'AI Careers & Industry',
      readTime: '4 min read',
      date: 'Oct 2026',
    },
    {
      title: 'RAG vs Fine-Tuning: Which Enterprise Architecture Should Developers Learn?',
      cat: 'Technical Guide',
      readTime: '6 min read',
      date: 'Sep 2026',
    },
    {
      title: 'How Non-Coders Are Using Generative AI to Double Business Productivity',
      cat: 'Business Automation',
      readTime: '5 min read',
      date: 'Aug 2026',
    },
  ]

  return (
    <section id="knowledge-hub" className="py-16 sm:py-24 bg-[#EEF5FC] border-b border-[#D5E5F5] relative overflow-hidden">
      {/* Subtle blue ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="font-extrabold text-3xl sm:text-4xl text-[#0B1938] tracking-tight">
            AI Knowledge Hub &amp; Admissions FAQ
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Answers to key questions regarding AI career roadmaps, admissions, courses in Bhubaneswar, and industry certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: FAQ Accordion (8 Cols) */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={faq.q}
                  className="bg-white rounded-2xl border border-[#D5E5F5] hover:border-blue-400 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    style={{ border: 'none', background: 'transparent' }}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0B1938] hover:text-blue-600 transition cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs transition-transform ${
                      isOpen ? 'bg-blue-600 text-white rotate-180 font-black' : 'bg-blue-100 text-blue-900'
                    }`}>
                      ▼
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#D5E5F5] bg-[#F8FAFC]">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right Column: Knowledge Articles & Help Box (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Knowledge Hub Spotlight */}
            <div className="bg-white rounded-3xl p-6 border border-[#D5E5F5] space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  From Our AI Journal
                </span>
                <span className="text-xs font-bold text-slate-400">OIAI Blog</span>
              </div>

              <div className="space-y-4 divide-y divide-[#D5E5F5]">
                {articles.map((art) => (
                  <div key={art.title} className="pt-3 first:pt-0">
                    <span className="text-[10px] font-bold text-blue-600 uppercase block mb-1">
                      {art.cat} • {art.readTime}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 cursor-pointer transition leading-snug">
                      {art.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Consultation Box */}
            <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-3xl p-6 text-white text-center space-y-3 shadow-xl border border-slate-800">
              <span className="text-2xl block">💬</span>
              <h4 className="text-base font-bold text-white">
                Have a Specific Question?
              </h4>
              <p className="text-xs text-slate-300">
                Speak directly with an AI academic advisor in Bhubaneswar.
              </p>
              <button
                type="button"
                onClick={() => onEnquire?.('Counseling from FAQ Section')}
                className="w-full py-3 px-4 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition cursor-pointer"
              >
                Ask a Career Advisor →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
