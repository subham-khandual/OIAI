import { useState } from 'react'

export default function MethodologySection({ onEnquire }) {
  const [activeStage, setActiveStage] = useState(2) // Default to Stage 03 to match user reference

  const stages = [
    {
      num: '01',
      action: 'LEARN',
      subtitle: 'Core Fundamentals',
      title: 'Master Fundamentals',
      desc: 'Build rock-solid intuition in Python, linear algebra, neural architecture basics, and foundational LLM mechanics.',
      pills: ['Core Python 3.12', 'NumPy & Pandas', 'Math & Statistics', 'Transformers Intro', 'Git Workflows'],
      features: ['Conceptual Clarity', 'Math for AI Mastery', 'Self-Paced Quizzes'],
      photo: '/images/methodology-photo-1.jpg',
      iconType: 'grad',
      iconBg: 'bg-[#EBF3FE]',
      iconBorder: 'border-[#D6E6FE]',
      icon: 'book',
    },
    {
      num: '02',
      action: 'PRACTICE',
      subtitle: 'Hands-on Skills',
      title: 'Practice with AI Tools',
      desc: 'Hands-on daily drills with LangChain, PyTorch, Hugging Face, Cursor IDE, OpenAI APIs, and vector databases.',
      pills: ['LangChain Drills', 'PyTorch Tensors', 'Cursor AI Setup', 'Hugging Face Hub', 'ChromaDB & FAISS'],
      features: ['Daily Coding Labs', 'Instant Feedback', 'Modern Dev Stacks'],
      photo: '/images/methodology-photo-2.jpg',
      iconType: 'tools',
      iconBg: 'bg-[#E8FAF0]',
      iconBorder: 'border-[#CCF3DE]',
      icon: 'chart',
    },
    {
      num: '03',
      action: 'BUILD',
      subtitle: 'Mini Projects',
      title: 'Build Mini Projects',
      desc: 'Develop end-to-end intelligent applications from scratch: RAG copilots, classifiers, and autonomous scrapers.',
      pills: ['RAG Pipeline', 'FastAPI Services', 'Vector Embeddings', 'Docker', 'GitHub Deployment'],
      features: ['Real Project Experience', 'Mentor Guidance', 'Portfolio Showcase'],
      photo: '/images/methodology-photo-3.jpg',
      iconType: 'box',
      iconBg: 'bg-[#FFF3E8]',
      iconBorder: 'border-[#FEE1CA]',
      icon: 'box',
    },
    {
      num: '04',
      action: 'APPLY',
      subtitle: 'Real-World Use',
      title: 'Apply in Real-World',
      desc: 'Work on industry-style use cases, production datasets, and deploy working applications.',
      pills: ['Enterprise Datasets', 'CI/CD Pipelines', 'Clean Architecture', 'Edge Deployments', 'Unit & E2E Testing'],
      features: ['Industry Datasets', 'Senior Code Reviews', 'Production Reliability'],
      photo: '/images/methodology-photo-4.jpg',
      iconType: 'doc',
      iconBg: 'bg-[#F5EDFD]',
      iconBorder: 'border-[#EAD5FB]',
      icon: 'doc',
    },
    {
      num: '05',
      action: 'INTERN',
      subtitle: 'Industry Experience',
      title: 'Industry Internship',
      desc: 'Gain real-world experience, collaborate on live projects, and work with expert mentors.',
      pills: ['Sprint Standups', 'Client Commits', 'Codebase Merges', 'Agile Workflows', 'Mentor Pair-Programming'],
      features: ['Guaranteed Stipend Track', 'Real Production PRs', 'Client Experience'],
      photo: '/images/methodology-photo-5.jpg',
      iconType: 'users',
      iconBg: 'bg-[#FDF0F4]',
      iconBorder: 'border-[#FBCFE0]',
      icon: 'users',
    },
    {
      num: '06',
      action: 'CERTIFY',
      subtitle: 'Skill Validation',
      title: 'Certification',
      desc: 'Earn verified certificates, complete capstone projects, and get your skills industry validated.',
      pills: ['Capstone Defense', 'Verified Credential', 'Public Portfolio', 'Skill Assessment', 'GitHub Repository'],
      features: ['Industry Validated', 'Shareable Digital Badge', 'Capstone Showcase'],
      photo: '/images/methodology-photo-6.jpg',
      iconType: 'medal',
      iconBg: 'bg-[#FEF8E7]',
      iconBorder: 'border-[#FDE8B5]',
      icon: 'award',
    },
    {
      num: '07',
      action: 'CAREER READY',
      subtitle: 'Placement Support',
      title: 'Career Ready',
      desc: 'Build a standout portfolio, get placement support, and connect with top companies hiring AI talent.',
      pills: ['System Design Mocks', 'DSA & LeetCode AI', 'Resume Optimization', 'Partner Referrals', 'Salary Negotiation'],
      features: ['1-on-1 Mock Interviews', 'Direct Hiring Partners', 'Offer Negotiation'],
      photo: '/images/methodology-photo-7.jpg',
      iconType: 'briefcase',
      iconBg: 'bg-[#F3EFFE]',
      iconBorder: 'border-[#DDD3FB]',
      icon: 'briefcase',
    },
  ]

  const active = stages[activeStage]

  // Render icons for timeline and pills
  const renderStageIcon = (type, isSelected) => {
    const colorClass = isSelected ? 'text-white' : 'text-slate-600'
    switch (type) {
      case 'book':
        return (
          <svg className={`w-4 h-4 ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
        )
      case 'chart':
        return (
          <svg className={`w-4 h-4 ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="20" x2="18" y2="10"/>
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
        )
      case 'box':
        return (
          <svg className={`w-4 h-4 ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
        )
      case 'doc':
        return (
          <svg className={`w-4 h-4 ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        )
      case 'users':
        return (
          <svg className={`w-4 h-4 ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        )
      case 'award':
        return (
          <svg className={`w-4 h-4 ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="7"/>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
          </svg>
        )
      case 'briefcase':
        return (
          <svg className={`w-4 h-4 ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
        )
      default:
        return null
    }
  }

  const renderStageCardIcon = (type) => {
    switch (type) {
      case 'grad':
        return (
          <svg className="w-4 h-4 text-[#1D68FE]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
          </svg>
        )
      case 'tools':
        return (
          <svg className="w-4 h-4 text-[#0D9488]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        )
      case 'box':
        return (
          <svg className="w-4 h-4 text-[#EA580C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
        )
      case 'doc':
        return (
          <svg className="w-4 h-4 text-[#9333EA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
        )
      case 'users':
        return (
          <svg className="w-4 h-4 text-[#E11D48]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
        )
      case 'medal':
        return (
          <svg className="w-4 h-4 text-[#D97706]" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="8" r="6"/>
            <path d="M15.5 13.5L18 22l-6-3-6 3 2.5-8.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        )
      case 'briefcase':
        return (
          <svg className="w-4 h-4 text-[#7C3AED]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
        )
      default:
        return null
    }
  }

  const renderTechPillIcon = (name) => {
    if (name.includes('RAG') || name.includes('Python')) {
      return (
        <span className="font-mono text-blue-600 font-bold text-xs">&lt;/&gt;</span>
      )
    }
    if (name.includes('FastAPI') || name.includes('Drill') || name.includes('Tensors')) {
      return (
        <svg className="w-3.5 h-3.5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    }
    if (name.includes('Vector') || name.includes('Embeddings') || name.includes('SQL')) {
      return (
        <svg className="w-3.5 h-3.5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      )
    }
    if (name.includes('Docker') || name.includes('Deploy') || name.includes('Pipeline')) {
      return (
        <svg className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.9 6.2h2.2v2.2h-2.2zm-2.8 0h2.2v2.2h-2.2zm-2.9 0h2.2v2.2H8.2zm-2.8 0h2.2v2.2H5.4zm8.5 2.9h2.2v2.2h-2.2zm-2.8 0h2.2v2.2h-2.2zm-2.9 0h2.2v2.2H8.2zm-2.8 0h2.2v2.2H5.4zm-2.8 0h2.2v2.2H2.6zM22 11.4c-.6-.4-1.6-.5-2.4-.2-.3-.6-.8-1-1.4-1.2l-.7-.2-.4.6c-.5.8-.6 1.8-.3 2.7-.4.2-1 .4-1.7.4H2c-.4 2.2.4 4.5 2.2 6.1 1.8 1.6 4.3 2.4 6.8 2.4 6.7 0 11.5-4.4 12.3-9.5.4 0 .8-.1 1.2-.4.4-.3.6-.8.6-1.3-.8-.3-2.1.2-3.1.6z"/>
        </svg>
      )
    }
    return (
      <svg className="w-3.5 h-3.5 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    )
  }

  return (
    <section id="methodology" className="py-20 sm:py-24 bg-[#F7F5EF] border-b border-[#E5E0D8] relative overflow-hidden select-none">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1938] tracking-tight">
            AI Learning <span className="text-blue-600">Methodology</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A structured, outcome-driven progression engineered to take you from foundational basics to commercial production and verified career offers.
          </p>
        </div>

        {/* 1. Horizontal Progression Timeline Navigation Bar */}
        <div className="bg-white rounded-3xl border border-[#E5E0D8] shadow-sm p-3 sm:p-4 mb-8 overflow-x-auto relative">
          
          {/* Timeline Stages Flex Row */}
          <div className="flex items-center justify-between min-w-[860px] relative z-10">
            {stages.map((stage, idx) => {
              const isSelected = activeStage === idx
              return (
                <button
                  key={stage.num}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  style={{ outline: 'none' }}
                  className={`flex items-center gap-2.5 transition-all cursor-pointer rounded-2xl ${
                    isSelected
                      ? 'bg-blue-600 text-white px-4 py-2.5 shadow-md shadow-blue-500/25 ring-2 ring-blue-500/20'
                      : 'px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  <span className={`text-xs font-black px-1.5 py-0.5 rounded-md ${
                    isSelected ? 'bg-blue-700/80 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {stage.num}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {renderStageIcon(stage.icon, isSelected)}
                    <div className="text-left">
                      <div className={`text-[11px] font-black uppercase tracking-wider leading-none ${
                        isSelected ? 'text-white' : 'text-slate-900'
                      }`}>
                        {stage.action}
                      </div>
                      <div className={`text-[10px] leading-tight font-medium ${
                        isSelected ? 'text-blue-100' : 'text-slate-500'
                      }`}>
                        {stage.subtitle}
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Connected timeline progress line underneath */}
          <div className="mt-3 mx-4 relative hidden sm:block">
            <div className="h-1 bg-slate-200 rounded-full w-full" />
            <div
              className="h-1 bg-blue-600 rounded-full absolute top-0 left-0 transition-all duration-300"
              style={{ width: `${((activeStage + 0.5) / stages.length) * 100}%` }}
            />
            {/* Little active dot */}
            <div
              className="w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow-sm absolute -top-1 transition-all duration-300 -translate-x-1.5"
              style={{ left: `${((activeStage + 0.5) / stages.length) * 100}%` }}
            />
          </div>

        </div>

        {/* 2. Featured Stage Spotlight Card (Matches User Reference Image) */}
        <div className="bg-white rounded-[28px] border border-[#E5E0D8] shadow-xl overflow-hidden relative p-6 sm:p-8 lg:p-10 mb-8 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Stage Details & Actions */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* Badge & Title */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-300 text-xs font-bold shadow-2xs">
                  <span>STAGE {active.num} – {active.action}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-[#0B1938] tracking-tight leading-tight">
                  {active.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
                  {active.desc}
                </p>
              </div>

              {/* Skills / Tech Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {active.pills.map((pill) => (
                  <div
                    key={pill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] text-xs font-bold text-slate-700 shadow-2xs"
                  >
                    {renderTechPillIcon(pill)}
                    <span>{pill}</span>
                  </div>
                ))}
              </div>

              {/* 3 Value Pillars */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 text-xs text-slate-700 font-bold">
                {active.features.map((feature, i) => (
                  <div key={feature} className="flex items-center gap-2">
                    {i === 0 && (
                      <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">
                        📁
                      </div>
                    )}
                    {i === 1 && (
                      <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xs">
                        👥
                      </div>
                    )}
                    {i === 2 && (
                      <div className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-xs">
                        🛡️
                      </div>
                    )}
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onEnquire?.(`Explore Stage ${active.num}: ${active.title}`)}
                  className="py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-extrabold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Explore Stage {active.num} Modules</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>

                <button
                  type="button"
                  onClick={() => onEnquire?.(`View Projects for Stage ${active.num}`)}
                  className="py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-bold text-slate-700 bg-[#FAF8F5] hover:bg-white border border-[#E5E0D8] shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-4 h-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  <span>View Sample Projects</span>
                </button>
              </div>

            </div>

            {/* Right Column: High-Res Interactive Laptop Workspace Visual */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-[#E5E0D8] shadow-xl bg-slate-900 group">
                <img
                  src="/images/methodology-laptop-clean.jpg"
                  alt="AI development environment on laptop with checklist"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>

          </div>
        </div>

        {/* 3. Bottom 7 Stage Cards Grid (Exact match to uploaded mockup) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-3.5">
          {stages.map((stage, idx) => {
            const isSelected = activeStage === idx
            return (
              <div
                key={stage.num}
                onClick={() => setActiveStage(idx)}
                className={`group rounded-2xl bg-white text-left transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden border ${
                  isSelected
                    ? 'border-2 border-blue-600 shadow-xl ring-4 ring-blue-500/15 scale-[1.02]'
                    : 'border-[#E5E0D8] hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                {/* Upper Photo Banner with top rounded corners & baked/floating 01 badge */}
                <div className="relative w-full aspect-[16/10.5] overflow-hidden bg-slate-100">
                  <img
                    src={stage.photo}
                    alt={stage.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Content Body */}
                <div className="p-3 sm:p-3.5 pt-2.5 flex flex-col justify-between flex-1">
                  <div>
                    {/* Pastel icon container matching exact colors */}
                    <div className={`w-8 h-8 rounded-xl ${stage.iconBg} border ${stage.iconBorder} flex items-center justify-center mb-2.5 shadow-2xs`}>
                      {renderStageCardIcon(stage.iconType)}
                    </div>

                    {/* Stage Title */}
                    <h4 className="text-[13px] sm:text-[14px] font-black text-[#0B1938] leading-snug mb-1.5">
                      {stage.title}
                    </h4>

                    {/* Stage Description */}
                    <p className="text-[11px] text-slate-600 leading-relaxed font-normal mb-3">
                      {stage.desc}
                    </p>
                  </div>

                  {/* View Details Link */}
                  <div className="pt-2">
                    <span className="text-[11px] sm:text-xs font-bold text-blue-600 group-hover:text-blue-700 flex items-center gap-1 transition-colors">
                      View Details <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
