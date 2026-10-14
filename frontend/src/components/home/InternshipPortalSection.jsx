import { useState } from 'react'

export default function InternshipPortalSection({ onEnquire }) {
  const [selectedCategory, setSelectedCategory] = useState('Machine Learning')

  const categories = [
    {
      id: 'gen-ai',
      name: 'Generative AI',
      subtitle: 'LLMs, Prompt Engineering, AI Apps',
      duration: '3 – 6 Months',
      description: 'Build enterprise-grade LLM applications, multimodal copilot systems, and fine-tuned domain models with industry guidance.',
      eligibility: 'B.Tech / MCA / BCA / M.Sc or Coding Background',
      mentor: 'Senior GenAI Architects & Enterprise Mentors',
      skills: [
        { name: 'LangChain & RAG', icon: 'link' },
        { name: 'OpenAI & Claude APIs', icon: 'chip' },
        { name: 'Vector Databases', icon: 'database' },
        { name: 'Prompt Engineering', icon: 'code' },
        { name: 'FastAPI Deployment', icon: 'docker' },
      ],
      projects: [
        { name: 'Autonomous Enterprise Copilot', icon: 'chart', color: 'green' },
        { name: 'Multi-Document QA Engine', icon: 'shield', color: 'red' },
        { name: 'Multimodal Extraction Pipeline', icon: 'database', color: 'purple' },
      ],
    },
    {
      id: 'python-ai',
      name: 'Python for AI',
      subtitle: 'Python, Data Analysis, AI Libraries',
      duration: '2 – 3 Months',
      description: 'Master high-performance Python programming, data science toolchains, mathematical modeling, and production clean-code standards.',
      eligibility: 'Students, Graduates & Programming Beginners',
      mentor: 'Full-Stack Python Architects & Tech Leads',
      skills: [
        { name: 'Core Python 3.12', icon: 'code' },
        { name: 'NumPy & Pandas', icon: 'database' },
        { name: 'Data Visualization', icon: 'chart' },
        { name: 'REST API Microservices', icon: 'link' },
        { name: 'Git & CI/CD Pipelines', icon: 'gear' },
      ],
      projects: [
        { name: 'Automated Scraping Engine', icon: 'chart', color: 'green' },
        { name: 'Clean Data Pipeline', icon: 'shield', color: 'red' },
        { name: 'Microservices Backend', icon: 'database', color: 'purple' },
      ],
    },
    {
      id: 'machine-learning',
      name: 'Machine Learning',
      subtitle: 'Algorithms, Models, Real-world Projects',
      duration: '3 – 6 Months',
      description: 'Work on real-world ML projects, learn from industry mentors, and build a portfolio that gets you hired.',
      eligibility: 'Students with Math & Python basics',
      mentor: 'ML Research Fellows & Industry Experts',
      skills: [
        { name: 'Scikit-Learn', icon: 'code' },
        { name: 'PyTorch', icon: 'flame' },
        { name: 'Model Evaluation', icon: 'chart' },
        { name: 'Feature Engineering', icon: 'gear' },
        { name: 'Docker', icon: 'docker' },
      ],
      projects: [
        { name: 'Predictive Churn Classifier', icon: 'chart', color: 'green' },
        { name: 'Financial Fraud Detector', icon: 'shield', color: 'red' },
        { name: 'Recommender Systems', icon: 'database', color: 'purple' },
      ],
    },
    {
      id: 'data-science',
      name: 'Data Science',
      subtitle: 'Analytics, Visualization, Business Insight',
      duration: '3 – 6 Months',
      description: 'Turn complex raw enterprise data into clear actionable visual business intelligence and strategic predictive algorithms.',
      eligibility: 'Graduates, Analysts, B.Tech / B.Sc',
      mentor: 'Lead Data Scientists & Analytics Directors',
      skills: [
        { name: 'Advanced SQL', icon: 'database' },
        { name: 'Statistical Inference', icon: 'chart' },
        { name: 'Seaborn & Plotly', icon: 'code' },
        { name: 'Tableau & PowerBI', icon: 'gear' },
        { name: 'Hypothesis Testing', icon: 'link' },
      ],
      projects: [
        { name: 'Consumer Cohort Clustering', icon: 'chart', color: 'green' },
        { name: 'Revenue Forecasting Dashboard', icon: 'shield', color: 'red' },
        { name: 'Market Basket Optimizer', icon: 'database', color: 'purple' },
      ],
    },
    {
      id: 'ai-agents',
      name: 'AI Agents',
      subtitle: 'Autonomous Agents, Tool Use, RAG',
      duration: '3 – 6 Months',
      description: 'Architect multi-agent autonomous systems using CrewAI and LangGraph that solve commercial business tasks autonomously.',
      eligibility: 'Developers & Tech Graduates with Python skills',
      mentor: 'Agentic Workflow Specialists & Engineers',
      skills: [
        { name: 'CrewAI & LangGraph', icon: 'code' },
        { name: 'Autonomous Tool Use', icon: 'gear' },
        { name: 'Vector Memory RAG', icon: 'database' },
        { name: 'Webhook Routing', icon: 'link' },
        { name: 'Multi-Agent Telemetry', icon: 'docker' },
      ],
      projects: [
        { name: 'Autonomous PR Reviewer', icon: 'chart', color: 'green' },
        { name: 'Multi-Agent Market Analyst', icon: 'shield', color: 'red' },
        { name: 'Self-Healing Workflow Bot', icon: 'database', color: 'purple' },
      ],
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision',
      subtitle: 'Image Processing, Deep Learning',
      duration: '3 – 6 Months',
      description: 'Train cutting-edge convolutional and vision transformer models for real-time edge detection, tracking, and segmentation.',
      eligibility: 'B.Tech / MCA / Tech Background',
      mentor: 'Computer Vision Engineers & Researchers',
      skills: [
        { name: 'OpenCV & MediaPipe', icon: 'code' },
        { name: 'YOLOv11 Detection', icon: 'gear' },
        { name: 'PyTorch Vision', icon: 'flame' },
        { name: 'Image Segmentation', icon: 'chart' },
        { name: 'Edge AI Deployment', icon: 'docker' },
      ],
      projects: [
        { name: 'Industrial Defect Scanner', icon: 'chart', color: 'green' },
        { name: 'Crop Disease Diagnostic Bot', icon: 'shield', color: 'red' },
        { name: 'Real-Time Traffic Tracker', icon: 'database', color: 'purple' },
      ],
    },
  ]

  const active = categories.find((c) => c.name === selectedCategory) || categories[2]

  // Render Category Icon on Left
  const renderCategoryIcon = (id, isSelected) => {
    switch (id) {
      case 'gen-ai':
        return (
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
            isSelected ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
          }`}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
            </svg>
          </div>
        )
      case 'python-ai':
        return (
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
            isSelected ? 'bg-blue-600 text-white' : 'bg-amber-50 text-amber-600'
          }`}>
            <span className="text-base font-black">🐍</span>
          </div>
        )
      case 'machine-learning':
        return (
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
            isSelected ? 'bg-blue-600 text-white shadow-sm' : 'bg-blue-50 text-blue-600'
          }`}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
              <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
            </svg>
          </div>
        )
      case 'data-science':
        return (
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
            isSelected ? 'bg-blue-600 text-white' : 'bg-purple-50 text-purple-600'
          }`}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
          </div>
        )
      case 'ai-agents':
        return (
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
            isSelected ? 'bg-blue-600 text-white' : 'bg-indigo-50 text-indigo-600'
          }`}>
            <span className="text-base">🤖</span>
          </div>
        )
      case 'computer-vision':
        return (
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
            isSelected ? 'bg-blue-600 text-white' : 'bg-emerald-50 text-emerald-600'
          }`}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
        )
      default:
        return null
    }
  }

  // Render Skill Pill Icon
  const renderSkillIcon = (icon) => {
    switch (icon) {
      case 'code':
        return (
          <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        )
      case 'flame':
        return (
          <svg className="w-3.5 h-3.5 text-orange-600 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c-.6 2.5-2.5 4.3-4.5 6.2C5.3 10.3 4 12.8 4 15.5 4 20 7.6 23 12 23s8-3 8-7.5c0-3.3-1.8-6.1-4-8.2-1.3-1.2-2.5-2.7-3-4.8-.4-.4-.7-.6-1-.5z"/>
          </svg>
        )
      case 'chart':
        return (
          <svg className="w-3.5 h-3.5 text-indigo-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        )
      case 'gear':
        return (
          <svg className="w-3.5 h-3.5 text-slate-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        )
      case 'docker':
        return (
          <svg className="w-3.5 h-3.5 text-blue-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.9 6.2h2.2v2.2h-2.2zm-2.8 0h2.2v2.2h-2.2zm-2.9 0h2.2v2.2H8.2zm-2.8 0h2.2v2.2H5.4zm8.5 2.9h2.2v2.2h-2.2zm-2.8 0h2.2v2.2h-2.2zm-2.9 0h2.2v2.2H8.2zm-2.8 0h2.2v2.2H5.4zm-2.8 0h2.2v2.2H2.6zM22 11.4c-.6-.4-1.6-.5-2.4-.2-.3-.6-.8-1-1.4-1.2l-.7-.2-.4.6c-.5.8-.6 1.8-.3 2.7-.4.2-1 .4-1.7.4H2c-.4 2.2.4 4.5 2.2 6.1 1.8 1.6 4.3 2.4 6.8 2.4 6.7 0 11.5-4.4 12.3-9.5.4 0 .8-.1 1.2-.4.4-.3.6-.8.6-1.3-.8-.3-2.1.2-3.1.6z"/>
          </svg>
        )
      default:
        return null
    }
  }

  // Render Project Card Icon
  const renderProjectIcon = (icon, color) => {
    if (color === 'green') {
      return (
        <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        </div>
      )
    }
    if (color === 'red') {
      return (
        <div className="w-7 h-7 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
          </svg>
        </div>
      )
    }
    return (
      <div className="w-7 h-7 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      </div>
    )
  }

  return (
    <section id="internships" className="py-20 sm:py-24 bg-[#EEF5FC] border-b border-[#D5E5F5] relative overflow-hidden select-none">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1938] tracking-tight">
            AI Internship <span className="text-blue-600">Portal</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Bridge the gap between college theory and corporate expectations. Gain verifiable work experience, code reviews from practitioners, and placement recommendations.
          </p>
        </div>

        {/* 2-Column Composition: Left Domain Selector + Right Domain Details Showcase */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 xl:gap-8">
          
          {/* Left Column: Domain Selector List */}
          <div className="w-full lg:w-[35%] xl:w-[32%] shrink-0 space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2 px-1">
              SELECT INTERNSHIP DOMAIN
            </span>

            <div className="space-y-2.5">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.name
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.name)}
                    style={{ outline: 'none' }}
                    className={`w-full p-3 sm:p-3.5 rounded-2xl text-left transition-all duration-200 flex items-center justify-between cursor-pointer border ${
                      isSelected
                        ? 'border-2 border-blue-600 bg-white shadow-md ring-2 ring-blue-600/10'
                        : 'border-[#D5E5F5] bg-white hover:border-blue-400 hover:shadow-xs'
                    }`}
                  >
                    {/* Left: Icon + Text */}
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      {renderCategoryIcon(cat.id, isSelected)}
                      <div className="min-w-0">
                        <h4 className="text-sm font-extrabold text-[#0B1938] truncate leading-snug">
                          {cat.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 truncate leading-snug">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Right: Duration Badge + Arrow */}
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full transition-colors ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-[#EEF5FC] text-slate-700'
                      }`}>
                        {cat.duration}
                      </span>
                      <span className={`text-sm font-black transition-colors ${
                        isSelected ? 'text-blue-600 translate-x-0.5' : 'text-slate-400'
                      }`}>
                        ›
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Active Domain Details Card with Laptop Visual */}
          <div className="flex-1 min-w-0 bg-white rounded-[28px] border border-[#D5E5F5] shadow-xl overflow-hidden relative p-6 sm:p-8 lg:p-9 flex flex-col justify-between">
            
            {/* Desktop / Tablet Background Visual: Clean Framed Laptop Workspace */}
            <div className="hidden sm:block absolute right-0 top-0 bottom-0 sm:w-[50%] lg:w-[48%] xl:w-[46%] pointer-events-none overflow-hidden select-none">
              <img
                src="/images/internship-laptop-framed.jpg"
                alt="AI Machine Learning Workspace on Laptop"
                className="w-full h-full object-cover object-center"
              />
              {/* Soft lateral white gradient blend so left text is 100% crisp & unblocked */}
              <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
            </div>

            {/* Content Area (Takes ~56% width on desktop so it never overlaps the laptop) */}
            <div className="relative z-10 w-full sm:max-w-[58%] lg:max-w-[54%] space-y-5">
              
              {/* Mobile visual banner on small screens */}
              <div className="sm:hidden w-full h-44 rounded-2xl overflow-hidden mb-4 border border-[#D5E5F5] shadow-xs">
                <img
                  src="/images/internship-laptop-framed.jpg"
                  alt="AI Machine Learning Workspace on Laptop"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Domain Details Header + Duration Pill */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-1">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-blue-600 uppercase">
                    DOMAIN DETAILS
                  </span>
                  
                  {/* Duration Pill at Top Right */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-300 text-xs font-bold shadow-2xs">
                    <svg className="w-3.5 h-3.5 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>Duration: {active.duration}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#0B1938] tracking-tight leading-tight">
                  {active.name} Internship
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1.5">
                  {active.description}
                </p>
              </div>

              {/* 2 Highlight Boxes: Eligibility & Mentorship */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Eligibility */}
                <div className="bg-blue-100/60 rounded-2xl p-3 sm:p-3.5 border border-blue-200/90 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 block">
                      Eligibility
                    </span>
                    <p className="text-xs font-extrabold text-[#0B1938] leading-tight truncate">
                      {active.eligibility}
                    </p>
                  </div>
                </div>

                {/* Mentorship */}
                <div className="bg-purple-100/60 rounded-2xl p-3 sm:p-3.5 border border-purple-200/90 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-700 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-900 block">
                      Mentorship
                    </span>
                    <p className="text-xs font-extrabold text-[#0B1938] leading-tight truncate">
                      {active.mentor}
                    </p>
                  </div>
                </div>
              </div>

              {/* SKILLS REQUIRED & PRACTICED */}
              <div className="pt-1 space-y-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase block">
                  SKILLS REQUIRED &amp; PRACTICED
                </span>
                <div className="flex flex-wrap gap-2">
                  {active.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#D5E5F5] text-xs font-bold text-slate-700 shadow-2xs"
                    >
                      {renderSkillIcon(skill.icon)}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* LIVE CLIENT PROJECTS INCLUDED */}
              <div className="pt-1 space-y-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase block">
                  LIVE CLIENT PROJECTS INCLUDED
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {active.projects.map((proj) => (
                    <div
                      key={proj.name}
                      className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#D5E5F5] flex items-center gap-2.5"
                    >
                      {renderProjectIcon(proj.icon, proj.color)}
                      <span className="text-xs font-extrabold text-slate-800 leading-tight">
                        {proj.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onEnquire?.(`Apply for Internship: ${active.name}`)}
                  className="py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-extrabold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Apply for {active.name} Internship</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>

                <button
                  type="button"
                  onClick={() => onEnquire?.(`Download Internship Guide: ${active.name}`)}
                  className="py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-bold text-slate-700 bg-[#F8FAFC] hover:bg-white border border-[#D5E5F5] shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  <span>Download Internship Guide</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
