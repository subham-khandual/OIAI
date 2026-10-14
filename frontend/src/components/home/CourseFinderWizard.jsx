import { useState } from 'react'

export default function CourseFinderWizard({ onEnquire }) {
  const [level, setLevel] = useState('College')
  const [goal, setGoal] = useState('Job')
  const [time, setTime] = useState('3-6 months')

  const levelOptions = [
    { id: 'School', label: 'School (+2 Student)', icon: 'school' },
    { id: 'College', label: 'College Student (B.Tech / BCA / MCA / B.Sc)', icon: 'college' },
    { id: 'Graduate', label: 'Recent Graduate (Job Seeker)', icon: 'graduate' },
    { id: 'Working Professional', label: 'Working Professional (Non-Tech)', icon: 'laptop' },
    { id: 'Developer', label: 'Software Developer / Engineer', icon: 'code' },
    { id: 'Entrepreneur', label: 'Entrepreneur / Business Owner', icon: 'business' },
  ]

  const goalOptions = [
    { id: 'Job', label: 'Land First AI Job', icon: 'target' },
    { id: 'Career switch', label: 'Career Switch into AI Industry', icon: 'switch' },
    { id: 'Freelancing', label: 'Freelancing & AI Consulting', icon: 'users' },
    { id: 'Business automation', label: 'Business Process & Workflow Automation', icon: 'gear' },
    { id: 'Research', label: 'Advanced AI Research & Academia', icon: 'book' },
    { id: 'Upskilling', label: 'Upskill for Promotion in Current Role', icon: 'growth' },
  ]

  const timeOptions = [
    { id: '1-2 months', title: '1 – 2 Months', sub: '(Fast Track / Weekend)' },
    { id: '3-6 months', title: '3 – 6 Months', sub: '(Intensive Diploma + Internship)' },
    { id: '6-12 months', title: '6 – 12 Months', sub: '(Comprehensive Master Track)' },
  ]

  const getRecommendation = () => {
    if (goal === 'Business automation' || level === 'Entrepreneur') {
      return {
        title: 'AI Automation & Workflow',
        accent: 'Engineering Track',
        subtitle: 'Master agentic process automation, LLM tool-calling, and commercial autonomous pipelines.',
        duration: '3 Months (Weekend / Hybrid)',
        mode: 'Hybrid Studio / Live Online',
        nextBatch: 'Starting Nov 15, 2026',
        skills: [
          { name: 'n8n & Zapier AI', icon: 'link' },
          { name: 'CrewAI & Agentforce', icon: 'robot' },
          { name: 'OpenAI API & RAG', icon: 'chip' },
          { name: 'Enterprise Workflows', icon: 'database' },
        ],
      }
    }

    if (level === 'Developer' || goal === 'Career switch') {
      return {
        title: 'Generative AI & Autonomous AI Agents',
        accent: 'Master Track',
        subtitle: 'Build in-demand AI skills and work on real projects with expert mentorship.',
        duration: '6 Months (Intensive + Capstone)',
        mode: 'Offline Studio / Hybrid Cohort',
        nextBatch: 'Starting Nov 10, 2026',
        skills: [
          { name: 'LLM Fine-tuning', icon: 'chip' },
          { name: 'LangChain & RAG Pipelines', icon: 'link' },
          { name: 'Vector Databases & PyTorch', icon: 'database' },
          { name: 'Autonomous AI Agents', icon: 'robot' },
        ],
      }
    }

    if (level === 'Working Professional' || goal === 'Upskilling') {
      return {
        title: 'Executive AI for Leaders &',
        accent: 'Working Professionals',
        subtitle: 'Supercharge executive productivity with enterprise LLMs, agents, and predictive decision systems.',
        duration: '3 / 6 Months (Weekend Evenings)',
        mode: 'Live Virtual + Studio Access',
        nextBatch: 'Starting Nov 20, 2026',
        skills: [
          { name: 'Claude 3.5 & ChatGPT Ops', icon: 'robot' },
          { name: 'Predictive Analytics', icon: 'database' },
          { name: 'Automated Reporting', icon: 'link' },
          { name: 'AI Strategic Leadership', icon: 'chip' },
        ],
      }
    }

    if (level === 'School' || (level === 'College' && time === '1-2 months')) {
      return {
        title: 'AI Foundations & Python',
        accent: 'Programming Bootcamp',
        subtitle: 'Solidify your core computer science, math, and neural network fundamentals from scratch.',
        duration: '2 Months (Fast Track)',
        mode: 'Classroom & Hands-on GPU Labs',
        nextBatch: 'Starting Nov 05, 2026',
        skills: [
          { name: 'Core Python for AI', icon: 'code' },
          { name: 'NumPy & Pandas Data Viz', icon: 'database' },
          { name: 'Neural Networks Intro', icon: 'chip' },
          { name: 'Prompt Engineering & Bots', icon: 'robot' },
        ],
      }
    }

    return {
      title: 'Full-Stack Machine Learning &',
      accent: 'Data Science Diploma',
      subtitle: 'From exploratory data analysis to deep neural networks and production cloud deployment.',
      duration: '6 Months (Comprehensive + Internship)',
      mode: 'In-Person Studio / Live Hybrid',
      nextBatch: 'Starting Nov 17, 2026',
      skills: [
        { name: 'Python & Scikit-Learn', icon: 'code' },
        { name: 'Deep Learning & PyTorch', icon: 'chip' },
        { name: 'NLP & Computer Vision', icon: 'database' },
        { name: 'Azure AI Cloud Pipelines', icon: 'link' },
      ],
    }
  }

  const rec = getRecommendation()

  // Helper icon renderer
  const renderOptionIcon = (type) => {
    switch (type) {
      case 'school':
        return (
          <svg className="w-4 h-4 shrink-0 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        )
      case 'college':
        return (
          <svg className="w-4 h-4 shrink-0 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
        )
      case 'graduate':
        return (
          <svg className="w-4 h-4 shrink-0 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
        )
      case 'laptop':
        return (
          <svg className="w-4 h-4 shrink-0 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="12" rx="2"/>
            <path d="M2 20h20"/>
          </svg>
        )
      case 'code':
        return (
          <svg className="w-4 h-4 shrink-0 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
        )
      case 'business':
        return (
          <svg className="w-4 h-4 shrink-0 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="20" x2="18" y2="10"/>
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
        )
      case 'target':
        return (
          <svg className="w-4 h-4 shrink-0 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="6"/>
            <circle cx="12" cy="12" r="2"/>
          </svg>
        )
      case 'switch':
        return (
          <svg className="w-4 h-4 shrink-0 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 3h5v5"/>
            <path d="M4 20L21 3"/>
            <path d="M21 16v5h-5"/>
            <path d="M15 15l6 6"/>
            <path d="M4 4l5 5"/>
          </svg>
        )
      case 'users':
        return (
          <svg className="w-4 h-4 shrink-0 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        )
      case 'gear':
        return (
          <svg className="w-4 h-4 shrink-0 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        )
      case 'book':
        return (
          <svg className="w-4 h-4 shrink-0 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
        )
      case 'growth':
        return (
          <svg className="w-4 h-4 shrink-0 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
            <polyline points="17 6 23 6 23 12"/>
          </svg>
        )
      default:
        return null
    }
  }

  const renderSkillIcon = (icon) => {
    switch (icon) {
      case 'chip':
        return (
          <svg className="w-4 h-4 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <rect x="9" y="9" width="6" height="6"/>
            <line x1="9" y1="1" x2="9" y2="4"/>
            <line x1="15" y1="1" x2="15" y2="4"/>
            <line x1="9" y1="20" x2="9" y2="23"/>
            <line x1="15" y1="20" x2="15" y2="23"/>
            <line x1="20" y1="9" x2="23" y2="9"/>
            <line x1="20" y1="15" x2="23" y2="15"/>
            <line x1="1" y1="9" x2="4" y2="9"/>
            <line x1="1" y1="15" x2="4" y2="15"/>
          </svg>
        )
      case 'link':
        return (
          <svg className="w-4 h-4 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
        )
      case 'database':
        return (
          <svg className="w-4 h-4 text-purple-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          </svg>
        )
      case 'robot':
        return (
          <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="10" rx="2"/>
            <circle cx="12" cy="5" r="2"/>
            <path d="M12 7v4"/>
            <line x1="8" y1="16" x2="8" y2="16"/>
            <line x1="16" y1="16" x2="16" y2="16"/>
          </svg>
        )
      default:
        return (
          <svg className="w-4 h-4 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
        )
    }
  }

  return (
    <section id="course-finder" className="py-20 sm:py-24 bg-[#F7F5EF] border-b border-[#E5E0D8] relative overflow-hidden select-none">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1938] tracking-tight">
            Find Your Perfect <span className="text-blue-600">AI Learning Path</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Answer 3 quick questions and get a personalized learning plan with course duration, skills to learn, and placement outcomes.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 xl:gap-8">
          
          {/* Left Column: Interactive Questionnaire Card */}
          <div className="w-full lg:w-[48%] xl:w-[46%] bg-white rounded-[28px] border border-[#E5E0D8] p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
            
            <div className="relative space-y-6">
              
              {/* Step 1 */}
              <div className="relative z-10 flex items-start gap-3.5">
                {/* Connecting line to Step 2 */}
                <div
                  className="absolute left-3.5 -translate-x-1/2 top-7 -bottom-6 w-0.5 pointer-events-none z-0"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(to bottom, #93c5fd 0px, #93c5fd 6px, transparent 6px, transparent 12px)'
                  }}
                />
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 ring-4 ring-white relative z-10">
                  1
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mb-3">
                    <h3 className="text-sm sm:text-base font-extrabold text-[#0B1938]">
                      What is your current level?
                    </h3>
                    <p className="text-xs text-slate-500">
                      Help us understand your background
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {levelOptions.map((opt) => {
                      const isSelected = level === opt.id
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setLevel(opt.id)}
                          style={{ outline: 'none' }}
                          className={`p-3 rounded-2xl text-left text-xs font-bold border transition-all cursor-pointer relative flex items-center justify-between gap-2 ${
                            isSelected
                              ? 'bg-blue-100 border-2 border-blue-600 text-blue-900 shadow-sm'
                              : 'bg-[#FAF8F5] text-slate-700 border-[#E5E0D8] hover:border-blue-400 hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            {renderOptionIcon(opt.icon)}
                            <span className="truncate">{opt.label}</span>
                          </div>
                          {isSelected && (
                            <div className="w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] font-black flex items-center justify-center shrink-0">
                              ✓
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex items-start gap-3.5">
                {/* Connecting line to Step 3 */}
                <div
                  className="absolute left-3.5 -translate-x-1/2 top-7 -bottom-6 w-0.5 pointer-events-none z-0"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(to bottom, #93c5fd 0px, #93c5fd 6px, transparent 6px, transparent 12px)'
                  }}
                />
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 ring-4 ring-white relative z-10">
                  2
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mb-3">
                    <h3 className="text-sm sm:text-base font-extrabold text-[#0B1938]">
                      What do you want to achieve?
                    </h3>
                    <p className="text-xs text-slate-500">
                      Choose your main goal
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {goalOptions.map((opt) => {
                      const isSelected = goal === opt.id
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setGoal(opt.id)}
                          style={{ outline: 'none' }}
                          className={`p-3 rounded-2xl text-left text-xs font-bold border transition-all cursor-pointer relative flex items-center justify-between gap-2 ${
                            isSelected
                              ? 'bg-blue-100 border-2 border-blue-600 text-blue-900 shadow-sm'
                              : 'bg-[#FAF8F5] text-slate-700 border-[#E5E0D8] hover:border-blue-400 hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            {renderOptionIcon(opt.icon)}
                            <span className="truncate">{opt.label}</span>
                          </div>
                          {isSelected && (
                            <div className="w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] font-black flex items-center justify-center shrink-0">
                              ✓
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 ring-4 ring-white relative z-10">
                  3
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mb-3">
                    <h3 className="text-sm sm:text-base font-extrabold text-[#0B1938]">
                      How much time can you invest?
                    </h3>
                    <p className="text-xs text-slate-500">
                      Select your preferred learning timeline
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {timeOptions.map((opt) => {
                      const isSelected = time === opt.id
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setTime(opt.id)}
                          style={{ outline: 'none' }}
                          className={`p-3 rounded-2xl text-center text-xs font-bold border transition-all cursor-pointer relative flex flex-col items-center justify-center gap-1 ${
                            isSelected
                              ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25'
                              : 'bg-[#FAF8F5] text-slate-700 border-[#E5E0D8] hover:border-blue-400 hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 justify-center">
                            <svg className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-500'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10"/>
                              <polyline points="12 6 12 12 16 14"/>
                            </svg>
                            <span>{opt.title}</span>
                          </div>
                          <span className={`text-[10px] ${isSelected ? 'text-blue-100' : 'text-slate-500'} font-normal`}>
                            {opt.sub}
                          </span>
                          {isSelected && (
                            <div className="absolute top-2 right-2 w-3.5 h-3.5 rounded-full bg-white text-blue-600 text-[8px] font-black flex items-center justify-center">
                              ✓
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Full-Width CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() =>
                  onEnquire?.(`Course Finder Match: ${rec.title} ${rec.accent} for ${level} seeking ${goal}`)
                }
                className="w-full py-4 px-6 rounded-2xl text-sm font-extrabold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Get My Personalized AI Learning Roadmap</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

          </div>

          {/* Right Column: Dynamic Recommendation Showcase with Clean Side Visual */}
          <div className="w-full lg:w-[52%] xl:w-[54%] bg-[#0B1528] rounded-[28px] overflow-hidden shadow-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between min-h-[580px]">
            
            {/* Top Main Section: 2 Columns (Details on Left, Clean Student Photo on Right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch flex-1">
              
              {/* Details Left Column */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-5">
                
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                    RECOMMENDED PROGRAM
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight">
                    {rec.title} <span className="text-cyan-400">{rec.accent}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                    {rec.subtitle}
                  </p>
                </div>

                {/* Clean Info Card (No blur overlays) */}
                <div className="bg-white/[0.06] rounded-2xl p-4 border border-white/10 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div className="flex items-center gap-2 text-slate-300">
                      <svg className="w-4 h-4 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <span>Duration</span>
                    </div>
                    <span className="font-bold text-white">{rec.duration}</span>
                  </div>

                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div className="flex items-center gap-2 text-slate-300">
                      <svg className="w-4 h-4 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                      <span>Learning Mode</span>
                    </div>
                    <span className="font-bold text-cyan-300">{rec.mode}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-300">
                      <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                      <span>Next Cohort</span>
                    </div>
                    <span className="font-bold text-emerald-400">{rec.nextBatch}</span>
                  </div>
                </div>

                {/* What You Will Gain Section */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase block">
                    WHAT YOU WILL GAIN
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {rec.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 bg-white/[0.05] px-2.5 py-1.5 rounded-xl border border-white/5 text-slate-200"
                      >
                        {renderSkillIcon(skill.icon)}
                        <span className="font-medium text-[11px] truncate">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Student Visual Right Column (Completely crisp, zero overlapping text or blur) */}
              <div className="md:col-span-5 flex flex-col justify-between space-y-3">
                
                {/* Personalized for You Badge */}
                <div className="flex items-center justify-end gap-1.5 self-end">
                  <svg className="w-6 h-6 text-white/70 -rotate-12 translate-y-0.5" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 26 C15 12, 26 12, 34 18" />
                    <path d="M28 18 L34 18 L33 12" />
                  </svg>
                  <div className="bg-white px-3 py-1.5 rounded-2xl shadow-md border border-slate-100 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 font-bold text-[11px] border border-amber-300">
                      👩‍🎓
                    </div>
                    <div className="text-left">
                      <div className="text-[11px] font-black text-slate-900 leading-tight">
                        Personalized for You
                      </div>
                      <div className="text-[9px] font-medium text-slate-500 leading-tight">
                        Based on your answers
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clean Photo of Student with Laptop and AI Books */}
                <div className="relative flex-1 w-full min-h-[290px] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-[#0B1528]">
                  <img
                    src="/images/course-student-clean-hires.jpg?v=2"
                    alt="Student with AI books and laptop"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

              </div>

            </div>

            {/* Bottom Value Badges & Social Proof */}
            <div className="pt-5 mt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-slate-300 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  <span>Free Career Counseling</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                  <span>Custom Syllabus</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <span>Scholarship Eligibility Check</span>
                </div>
              </div>

              {/* Placed Learners Social Proof Pill */}
              <div className="inline-flex items-center gap-2 bg-white/95 rounded-full px-3 py-1 text-slate-900 shadow-md">
                <div className="flex -space-x-1.5">
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center border border-white">
                    O
                  </div>
                  <div className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[9px] font-bold flex items-center justify-center border border-white">
                    I
                  </div>
                  <div className="w-5 h-5 rounded-full bg-cyan-600 text-white text-[9px] font-bold flex items-center justify-center border border-white">
                    A
                  </div>
                </div>
                <span className="text-[10px] font-black text-slate-800">
                  1,000+ learners placed
                </span>
                <span className="text-[9px] text-slate-500 hidden sm:inline">in top tech companies</span>
                <span className="text-emerald-600 font-bold text-xs">↗</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
