export default function WhyChooseSection({ onEnquire }) {
  const pillars = [
    {
      num: '01',
      title: 'AI-First Curriculum',
      desc: 'Curriculum designed directly around current and emerging AI technologies - Generative AI, LLMs, AI Agents, LangChain, and PyTorch.',
      tag: 'Modern Stack',
      image: '/images/why-pillar-1.jpg',
      numColor: 'bg-blue-100 text-blue-700',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      num: '02',
      title: 'Hands-On Projects',
      desc: 'Students build production-ready applications and capstone projects rather than only studying theory, deploying live APIs to cloud environments.',
      tag: 'Real Code',
      image: '/images/why-pillar-2.jpg',
      numColor: 'bg-emerald-100 text-emerald-700',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      num: '03',
      title: 'Industry Mentorship',
      desc: 'Learn directly from experienced practitioners, senior AI researchers, and technical leads with weekly 1-on-1 feedback and code walkthroughs.',
      tag: '1-on-1 Guidance',
      image: '/images/why-pillar-3.jpg',
      numColor: 'bg-purple-100 text-purple-700',
      tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
    },
    {
      num: '04',
      title: 'Internship Opportunities',
      desc: 'Gain real workplace exposure through structured 2 to 6 months internships, working on client problems and commercial-grade datasets.',
      tag: 'Work Experience',
      image: '/images/why-pillar-4.jpg',
      numColor: 'bg-amber-100 text-amber-700',
      tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      num: '05',
      title: 'Career Preparation',
      desc: 'Comprehensive placement assistance including resume building, GitHub portfolio auditing, mock technical interviews, and hiring partner referrals.',
      tag: 'Job Ready',
      image: '/images/why-pillar-5.jpg',
      numColor: 'bg-rose-100 text-rose-700',
      tagColor: 'bg-rose-50 text-rose-700 border-rose-200',
    },
    {
      num: '06',
      title: 'Flexible Learning',
      desc: 'Seamless options: in-person classrooms at DLF Cyber City Bhubaneswar, interactive live online cohorts, hybrid weekend schedules, and hands-on bootcamps.',
      tag: 'Hybrid & Campus',
      image: '/images/why-pillar-6.jpg',
      numColor: 'bg-emerald-100 text-emerald-700',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
  ]

  return (
    <section id="why-choose" className="py-20 sm:py-24 bg-[#EEF5FC] border-b border-[#D5E5F5] relative overflow-hidden select-none">
      
      {/* Decorative Dot Matrix on Left & Right matching mockup */}
      <div className="absolute top-12 left-4 sm:left-8 w-24 grid grid-cols-6 gap-2 opacity-35 pointer-events-none hidden md:grid">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={`dot-l-${i}`} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        ))}
      </div>
      <div className="absolute top-12 right-4 sm:right-8 w-24 grid grid-cols-6 gap-2 opacity-35 pointer-events-none hidden md:grid">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={`dot-r-${i}`} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        ))}
      </div>

      {/* Subtle ambient gradient swooshes in corners */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching mockup */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          {/* Main Title: Why Choose OIAI? with swoosh underline */}
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1938] tracking-tight">
            Why Choose{' '}
            <span className="text-blue-600 relative inline-block">
              OIAI?
              <svg
                className="absolute -bottom-2 left-0 w-full h-3.5 text-blue-600 pointer-events-none"
                viewBox="0 0 100 14"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 10 C30 2, 70 2, 97 9"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed pt-1">
            We are not just a training center. OIAI is a comprehensive AI career acceleration platform designed to turn curious learners into enterprise-ready AI innovators.
          </p>
        </div>

        {/* 6 Cards Grid (2 rows x 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-7">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="bg-white rounded-[26px] border border-[#D5E5F5] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row items-stretch group relative"
            >
              
              {/* Left Column: Image Asset with rounded edge & soft wave footer */}
              <div className="w-full sm:w-[42%] md:w-[40%] shrink-0 h-48 sm:h-auto min-h-[190px] relative overflow-hidden bg-slate-100">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle soft blue curved accent at bottom-left corner */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/15 via-transparent to-transparent pointer-events-none" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl pointer-events-none" />
              </div>

              {/* Right Column: Content with Number, Tag, Title, Desc, Explore More */}
              <div className="p-4 sm:p-5 flex-1 min-w-0 flex flex-col justify-between space-y-2.5 relative">
                
                {/* Top Row: Number badge + Category Tag */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-2 py-0.5 rounded-lg text-xs font-black tracking-tight ${pillar.numColor}`}>
                    {pillar.num}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${pillar.tagColor}`}>
                    {pillar.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-[17px] font-black text-[#0B1938] leading-snug group-hover:text-blue-600 transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>

                {/* Bottom Action: Explore More + Blue Circle Arrow Button */}
                <div className="pt-1.5 flex items-center justify-start">
                  <button
                    type="button"
                    onClick={() => onEnquire?.(`Why Choose OIAI - ${pillar.title}`)}
                    className="inline-flex items-center gap-2 text-xs font-black text-blue-600 hover:text-blue-700 transition cursor-pointer select-none"
                  >
                    <span>Explore More</span>
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold shadow-xs group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>

                {/* Soft bottom-right swoosh curve decoration matching mockup */}
                <div className="absolute bottom-0 right-0 w-24 h-12 pointer-events-none opacity-40 overflow-hidden">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tl from-blue-300 to-transparent translate-x-8 translate-y-12" />
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
