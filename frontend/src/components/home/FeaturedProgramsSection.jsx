import { useState } from 'react'

export default function FeaturedProgramsSection({ onEnquire }) {
  const [activeTab, setActiveTab] = useState('all')

  const programs = [
    {
      id: 'genai-agents',
      category: 'genai',
      name: 'Generative AI & AI Agents',
      badge: 'Flagship Program',
      duration: '3 / 6 Months',
      mode: 'Hybrid / Offline / Online',
      level: 'Intermediate to Advanced',
      technologies: ['LLMs', 'Prompt Engineering', 'RAG Pipelines', 'AI Agents', 'LangChain', 'OpenAI APIs', 'Vector DBs'],
      projects: 'Autonomous Research Assistant, Enterprise Doc QA System, Multi-Agent Customer Support',
      certification: 'OIAI Certified Generative AI Specialist',
      internship: 'Includes 3-Month Industry Internship',
      careerOutcomes: 'Generative AI Developer, AI Agent Architect, Prompt Specialist',
      nextBatch: 'Nov 10, 2026',
      seatsLeft: '6 seats left',
      image: '/images/domain-genai.jpg',
    },
    {
      id: 'ai-developer',
      category: 'developers',
      name: 'AI for Developers',
      badge: 'Bestseller',
      duration: '6 / 12 Months',
      mode: 'Offline at DLF Cyber City / Online',
      level: 'Intermediate',
      technologies: ['PyTorch', 'TensorFlow', 'Azure Machine Learning', 'MLOps', 'FastAPI', 'Docker', 'GitHub Copilot'],
      projects: 'Computer Vision Defect Detector, Real-time Fraud Detection Model, Full-Stack AI App',
      certification: 'OIAI Full-Stack AI Engineering Certificate',
      internship: 'Guaranteed Live Capstone Internship',
      careerOutcomes: 'AI Engineer, Machine Learning Engineer, MLOps Specialist',
      nextBatch: 'Nov 17, 2026',
      seatsLeft: '4 seats left',
      image: '/images/domain-ml.jpg',
    },
    {
      id: 'ai-professionals',
      category: 'professionals',
      name: 'AI for Working Professionals',
      badge: 'Executive',
      duration: '3 / 6 Months',
      mode: 'Weekend Live & Hybrid',
      level: 'All Backgrounds',
      technologies: ['ChatGPT', 'Claude AI', 'DeepSeek', 'Perplexity AI', 'Microsoft Copilot', 'Agentforce', 'AI Content Ops'],
      projects: 'Automated Financial Report Analyzer, HR Candidate Screening Agent, Sales Pipeline Bot',
      certification: 'OIAI Executive AI Productivity Credential',
      internship: 'Project-based practical capstone',
      careerOutcomes: 'AI Product Manager, Business Automation Lead, AI Consultant',
      nextBatch: 'Nov 24, 2026',
      seatsLeft: '8 seats left',
      image: '/images/domain-automation.jpg',
    },
    {
      id: 'ai-creatives',
      category: 'creatives',
      name: 'AI for Creatives & Designers',
      badge: 'Creative Tech',
      duration: '3 / 6 Months',
      mode: 'Online / Hands-on Studio',
      level: 'Beginner to Intermediate',
      technologies: ['Midjourney', 'Stable Diffusion', 'DALL-E 3', 'Leonardo.Ai', 'AI Video Generation', 'Prompt Craft'],
      projects: 'Branded Multi-Platform Ad Campaign, Hyper-realistic 3D Product Renders, Storyboard Pipeline',
      certification: 'OIAI Certified AI Creative Director',
      internship: 'Agency-partnered creative internship',
      careerOutcomes: 'Creative Technologist, AI Visual Designer, Multimedia Specialist',
      nextBatch: 'Dec 01, 2026',
      seatsLeft: '10 seats left',
      image: '/images/prog-female.jpg',
    },
    {
      id: 'ai-fundamentals',
      category: 'beginners',
      name: 'AI Fundamentals & Python',
      badge: 'Foundation',
      duration: '2 Months',
      mode: 'Classroom & Online',
      level: 'Absolute Beginner',
      technologies: ['Python for AI', 'NumPy', 'Pandas', 'Intro to ML', 'Prompt Basics', 'Git & GitHub'],
      projects: 'Data Analysis Dashboard, Smart Student Performance Predictor, Sentiment Bot',
      certification: 'OIAI Certificate of AI Foundations',
      internship: 'Eligible for Phase 2 Internships',
      careerOutcomes: 'Junior AI Programmer, Python Developer, Associate Data Analyst',
      nextBatch: 'Nov 05, 2026',
      seatsLeft: '5 seats left',
      image: '/images/domain-datascience.jpg',
    },
    {
      id: 'prompt-engineering',
      category: 'genai',
      name: 'Prompt Engineering & Context Architect',
      badge: 'Fast Track',
      duration: '240 Hours',
      mode: 'Self-Paced + Live Mentorship',
      level: 'Beginner to Advanced',
      technologies: ['Few-shot Prompting', 'Chain of Thought', 'ReAct Pattern', 'Context Distillation', 'System Instructions'],
      projects: 'Legal Document Extractor, Medical Text Summarizer, Autonomous SQL Agent',
      certification: 'OIAI Professional Prompt Architect Certificate',
      internship: 'Real-world prompt optimization projects',
      careerOutcomes: 'Prompt Engineer, Conversational AI Designer, LLM Evaluator',
      nextBatch: 'Rolling Admissions',
      seatsLeft: 'Open',
      image: '/images/prog-male.jpg',
    },
  ]

  const filteredPrograms = activeTab === 'all'
    ? programs
    : programs.filter((p) => p.category === activeTab)

  return (
    <section id="ai-programs" className="py-20 bg-[#EEF5FC] border-b border-[#D5E5F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-extrabold text-3xl sm:text-4xl text-[#0B1938] tracking-tight">
              Featured <span className="text-blue-600">AI Programs</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Targeted, high-intensity AI programs designed around production architectures, hands-on labs, and real deployment requirements.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Programs' },
              { id: 'genai', label: 'Generative AI' },
              { id: 'developers', label: 'Developers' },
              { id: 'professionals', label: 'Working Pros' },
              { id: 'beginners', label: 'Beginners' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                style={{ outline: 'none' }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-[#D5E5F5] hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-3xl border border-[#D5E5F5] hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group text-slate-900"
            >
              <div>
                {/* Image Header with Badges */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={prog.image}
                    alt={prog.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-blue-600 text-white shadow-sm">
                      {prog.badge}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-black/70 backdrop-blur-md text-white border border-white/20 shadow-sm">
                      {prog.duration}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-semibold text-cyan-200 block drop-shadow-sm">
                      {prog.mode}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#0B1938] group-hover:text-blue-600 transition leading-snug">
                    {prog.name}
                  </h3>

                  {/* Tech stack pill tags */}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Key Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F8FAFC] text-slate-700 border border-[#D5E5F5]"
                        >
                          {tech}
                        </span>
                      ))}
                      {prog.technologies.length > 5 && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#F8FAFC] text-slate-500 border border-[#D5E5F5]">
                          +{prog.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              </div>

              {/* Card Footer with CTAs */}
              <div className="p-6 pt-4 border-t border-[#D5E5F5] bg-white/70">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onEnquire?.(`Syllabus: ${prog.name}`)}
                    className="py-2.5 px-3 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-[#D5E5F5] transition text-center cursor-pointer shadow-2xs"
                  >
                    View Syllabus
                  </button>
                  <button
                    type="button"
                    onClick={() => onEnquire?.(`Enrollment: ${prog.name}`)}
                    className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition text-center cursor-pointer"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
