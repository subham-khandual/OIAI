import { useState } from 'react'

export default function FindYourPathSection({ onEnquire }) {
  const roles = [
    {
      id: 'ai-eng',
      title: 'AI Engineer',
      badge: 'High Demand',
      cardImg: '/images/domain-ml.jpg',
      skills: ['Python', 'PyTorch', 'LLM Fine-tuning', 'Vector Databases', 'FastAPI'],
      desc: 'Build, deploy, and scale production artificial intelligence systems and machine learning pipelines.',
      avgSalary: '8 – 24 LPA',
      program: 'Generative AI & AI Agents Master Program',
      duration: '6 Months',
    },
    {
      id: 'ml-eng',
      title: 'Machine Learning Engineer',
      badge: 'Core Tech',
      cardImg: '/images/domain-ml.jpg',
      skills: ['Scikit-Learn', 'TensorFlow', 'MLOps', 'Feature Engineering', 'Docker'],
      desc: 'Train predictive models, design algorithms, and automate end-to-end machine learning lifecycles.',
      avgSalary: '7 – 20 LPA',
      program: 'Machine Learning & Deep Learning Professional',
      duration: '6 Months',
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      badge: 'Analytics',
      cardImg: '/images/domain-datascience.jpg',
      skills: ['Statistical Modeling', 'Python', 'SQL', 'Pandas', 'Predictive Analytics'],
      desc: 'Extract deep insights from multi-modal datasets and build analytical decision systems for enterprises.',
      avgSalary: '8 – 22 LPA',
      program: 'Applied Data Science & Machine Learning',
      duration: '6 Months',
    },
    {
      id: 'genai-dev',
      title: 'Generative AI Developer',
      badge: 'Trending 2026',
      cardImg: '/images/domain-genai.jpg',
      skills: ['LangChain', 'LlamaIndex', 'RAG Pipelines', 'OpenAI APIs', 'Prompt Ops'],
      desc: 'Create intelligent assistants, autonomous multi-agent systems, and generative enterprise solutions.',
      avgSalary: '9 – 26 LPA',
      program: 'Generative AI & Autonomous Agents',
      duration: '3 / 6 Months',
    },
    {
      id: 'automation-spec',
      title: 'AI Automation Specialist',
      badge: 'Enterprise',
      cardImg: '/images/domain-automation.jpg',
      skills: ['n8n', 'Zapier AI', 'CrewAI', 'Agentforce', 'API Integrations'],
      desc: 'Automate business operations, CRM pipelines, and repetitive human workflows using AI agents.',
      avgSalary: '6 – 18 LPA',
      program: 'AI Automation & Workflow Engineering',
      duration: '3 Months',
    },
    {
      id: 'prompt-eng',
      title: 'Prompt Engineer',
      badge: 'Fast Track',
      cardImg: '/images/domain-genai.jpg',
      skills: ['Advanced Prompting', 'Few-shot Learning', 'Evaluation', 'Context Windows'],
      desc: 'Master structured reasoning, few-shot prompting, and model orchestration for optimal outputs.',
      avgSalary: '6 – 15 LPA',
      program: 'Prompt Engineering & Workflow Automation',
      duration: '2 Months',
    },
    {
      id: 'data-analyst',
      title: 'Data Analyst',
      badge: 'Core Analytics',
      cardImg: '/images/domain-datascience.jpg',
      skills: ['Power BI', 'SQL Queries', 'Tableau', 'Excel Advanced', 'Python Viz'],
      desc: 'Transform raw institutional data into actionable executive dashboards and statistical reports.',
      avgSalary: '4.5 – 12 LPA',
      program: 'Data Analytics & Business Intelligence',
      duration: '3 Months',
    },
    {
      id: 'ai-pm',
      title: 'AI Product Manager',
      badge: 'Leadership',
      cardImg: '/images/journey-students.jpg',
      skills: ['AI Ethics', 'Product Strategy', 'LLM Evaluation', 'User Experience for AI'],
      desc: 'Lead AI product roadmaps from concept through design, risk management, and market release.',
      avgSalary: '14 – 35 LPA',
      program: 'AI for Product Leaders & Professionals',
      duration: '3 Months',
    },
    {
      id: 'ai-researcher',
      title: 'AI Researcher',
      badge: 'Deep Tech',
      cardImg: '/images/ai-students-hero.jpg',
      skills: ['Mathematics', 'Research Papers', 'PyTorch', 'Transformer Architecture'],
      desc: 'Investigate emerging neural architectures, reinforcement learning models, and computer vision frontiers.',
      avgSalary: '10 – 30 LPA',
      program: 'Advanced AI & Deep Learning Research Fellowship',
      duration: '12 Months',
    },
    {
      id: 'ai-entrepreneur',
      title: 'AI Entrepreneur',
      badge: 'Founders',
      cardImg: '/images/futurense-hero.png',
      skills: ['MVP Prototyping', 'AI SaaS Architecture', 'Go-to-Market', 'Cost Optimization'],
      desc: 'Build AI-native startups and automated agency solutions to solve high-value industry pain points.',
      avgSalary: 'Founder Equity',
      program: 'AI Startup & Micro-SaaS Accelerator',
      duration: '6 Months',
    },
  ]

  const [selectedRole, setSelectedRole] = useState(roles[0])

  return (
    <section id="ai-paths" className="py-20 sm:py-24 bg-[#F7F5EF] border-b border-[#E5E0D8] relative overflow-hidden select-none">
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1938] tracking-tight">
            What Do You Want to <span className="text-blue-600">Become?</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Select your desired AI career role to explore the recommended learning track, required tech stack, and salary expectations in Bhubaneswar and globally.
          </p>
        </div>

        {/* 2-Column Composition: Left Image + Shifted Right Cards & Spotlight */}
        <div className="flex flex-col lg:flex-row items-stretch gap-5 xl:gap-7">
          
          {/* Left Column: Dedicated Student Visual properly set on the left side */}
          <div className="w-full lg:w-[270px] xl:w-[300px] 2xl:w-[320px] shrink-0 flex flex-col">
            <div className="relative w-full h-full min-h-[360px] lg:min-h-full rounded-3xl overflow-hidden shadow-xl border border-[#E5E0D8] bg-[#0B1528] group flex flex-col justify-end">
              <img
                src="/images/student-side-visual.jpg"
                alt="Student learning AI with books and laptop at OIAI"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle dark gradient overlay at the base for crisp legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/95 via-[#0B1528]/35 to-transparent pointer-events-none" />
              
              <div className="relative z-10 p-5 space-y-1.5">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-2.5 py-0.5 rounded-full border border-blue-800/60 shadow-2xs">
                  OIAI Student Journey
                </span>
                <h4 className="text-white text-base font-extrabold leading-snug">
                  From Learner to AI Specialist
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Hands-on GPU labs, 1-on-1 industry mentorship &amp; live production pipelines.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Shifted to the right containing the 10 role cards and Spotlight Card */}
          <div className="flex-1 min-w-0 flex flex-col justify-between space-y-5">
            
            {/* 10 Role Cards Grid (2 rows of 5 cards with clean photos and zero overlapping text) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-2.5 sm:gap-3">
              {roles.map((role) => {
                const isSelected = selectedRole.id === role.id
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setSelectedRole(role)}
                    style={{ outline: 'none' }}
                    className={`h-[68px] sm:h-[72px] p-2.5 sm:p-3 rounded-2xl text-left transition-all duration-300 relative overflow-hidden flex items-center justify-between cursor-pointer border group ${
                      isSelected
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500 border-blue-400 ring-2 ring-blue-400/50 shadow-lg shadow-blue-500/30 scale-[1.02]'
                        : 'border-slate-800 bg-[#0B1528] hover:border-blue-400 hover:shadow-md'
                    }`}
                  >
                    {/* Background image on card - 100% clean, no baked-in text */}
                    <img
                      src={role.cardImg}
                      alt={role.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        isSelected ? 'opacity-25 mix-blend-overlay' : 'opacity-40'
                      }`}
                    />
                    
                    {/* Dark gradient overlay so typography is razor-sharp */}
                    <div
                      className={`absolute inset-0 ${
                        isSelected
                          ? 'bg-gradient-to-r from-blue-600/90 to-blue-500/90'
                          : 'bg-gradient-to-r from-[#0B1528]/95 via-[#0B1528]/85 to-[#0B1528]/70 group-hover:from-[#0B1528]/85'
                      }`}
                    />

                    {/* Left Text - The only text on the card, clean & unoverlapped */}
                    <div className="relative z-10 pr-2 overflow-hidden">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider block mb-0.5 truncate ${
                          isSelected ? 'text-blue-100' : 'text-slate-400'
                        }`}
                      >
                        {role.badge}
                      </span>
                      <h3
                        className="text-xs sm:text-[13px] font-extrabold tracking-tight truncate text-white"
                      >
                        {role.title}
                      </h3>
                    </div>

                    {/* Right Circular Arrow Button */}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-black shadow-sm relative z-10 transition-transform group-hover:translate-x-0.5 ${
                        isSelected
                          ? 'bg-white text-blue-600'
                          : 'bg-white text-slate-900'
                      }`}
                    >
                      →
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Detailed Role Spotlight Card (Matches User Mockup) */}
            <div className="bg-white rounded-3xl border border-[#E5E0D8] shadow-xl p-5 sm:p-7 xl:p-8 transition-all">
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-8 items-center">
                
                {/* Left Col: Role Details */}
                <div className="xl:col-span-7 space-y-3.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0B1938] tracking-tight">
                      {selectedRole.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                    {selectedRole.desc}
                  </p>

                  <div className="pt-1">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      ESSENTIAL SKILLS &amp; TOOLS YOU WILL MASTER
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedRole.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/80 shadow-2xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <span className="text-blue-600 font-bold">●</span>
                      Recommended Program: <strong className="text-[#0B1938] font-bold">{selectedRole.program}</strong>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="text-blue-600 font-bold">●</span>
                      Duration: <strong className="text-[#0B1938] font-bold">{selectedRole.duration}</strong>
                    </span>
                  </div>
                </div>

                {/* Right Col: Instant Action Card */}
                <div className="xl:col-span-5 bg-[#0B1938] rounded-2xl p-5 sm:p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between space-y-4">
                  {/* Subtle ambient lighting inside card */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="space-y-1 relative z-10">
                    <p className="text-[10px] font-mono font-bold tracking-widest text-cyan-300 uppercase">
                      READY TO START?
                    </p>
                    <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Start Your {selectedRole.title} Journey
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed pt-1">
                      Get personalized curriculum counseling, cohort schedule, and scholarship breakdown.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onEnquire?.(`Career Path: ${selectedRole.title}`)}
                    className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group cursor-pointer relative z-10"
                  >
                    <span>Find My AI Career Path</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
