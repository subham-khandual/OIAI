export default function StudentSuccessSection({ onEnquire }) {
  const testimonials = [
    {
      name: 'Rahul Verma',
      role: 'Junior AI Developer',
      company: 'Tech Mahindra',
      package: '6.8 LPA',
      skill: 'Python & Machine Learning',
      quote: "OIAI's courses are well-structured and easy to follow. I learned Python with real-time projects and feel genuinely confident now.",
      rating: 5,
      avatar: '/images/prog-male.jpg',
    },
    {
      name: 'Sneha Iyer',
      role: 'AI Software Associate',
      company: 'Cognizant AI Labs',
      package: '8.2 LPA',
      skill: 'Generative AI & LangChain',
      quote: 'The live sessions and mentorship at OIAI helped me bridge the gap between theory and practice. Incredible hands-on mentorship!',
      rating: 5,
      avatar: '/images/prog-female.jpg',
    },
    {
      name: 'Arjun Mehta',
      role: 'Senior AI Engineer',
      company: 'FinTech Unicorn',
      package: '14.5 LPA',
      skill: 'PyTorch & MLOps Pipelines',
      quote: 'I enrolled in the AI & ML program, and the practical approach with production deployments gave me hands-on industry skills.',
      rating: 5,
      avatar: '/images/prog-male.jpg',
    },
    {
      name: 'Priya Nair',
      role: 'AI Automation Lead',
      company: 'Enterprise Solutions',
      package: '45% Salary Hike',
      skill: 'Agentforce & AI Copilots',
      quote: 'OIAI made learning flexible and interactive. The course material and trainers are excellent - I highly recommend it.',
      rating: 5,
      avatar: '/images/prog-female.jpg',
    },
    {
      name: 'Ankit Sharma',
      role: 'Full Stack AI Developer',
      company: 'Mindtree Tech',
      package: '7.2 LPA',
      skill: 'FastAPI, React & LLMs',
      quote: 'The best part about OIAI is the placement support. After completing the Full Stack AI track, I cracked my first IT job.',
      rating: 5,
      avatar: '/images/journey-students.jpg',
    },
    {
      name: 'Subhashree Jena',
      role: 'Associate Data Scientist',
      company: 'Mu Sigma Analytics',
      package: '9.0 LPA',
      skill: 'Applied Statistics & Python',
      quote: 'From statistical baseline to enterprise RAG architectures, the faculty at DLF Cyber City Bhubaneswar was with me at every stage.',
      rating: 5,
      avatar: '/images/prog-female.jpg',
    },
    {
      name: 'Debashis Panda',
      role: 'MLOps Systems Engineer',
      company: 'Cloud Scale Systems',
      package: '11.8 LPA',
      skill: 'Docker, K8s & Azure ML',
      quote: 'Deploying actual models into Docker and Kubernetes gave me an edge during senior technical architecture interviews.',
      rating: 5,
      avatar: '/images/prog-male.jpg',
    },
    {
      name: 'Swati Sahoo',
      role: 'AI Prompt & Workflow Lead',
      company: 'Digital Media Agency',
      package: '6.5 LPA',
      skill: 'Prompt Engineering & n8n',
      quote: 'As a non-coder, learning Generative AI and prompt frameworks unlocked a whole new career trajectory for me.',
      rating: 5,
      avatar: '/images/prog-female.jpg',
    },
    {
      name: 'Rohan Mohanty',
      role: 'Deep Learning Fellow',
      company: 'AgriTech AI Labs',
      package: '₹25,000/mo Stipend',
      skill: 'Computer Vision & YOLO',
      quote: 'Working on real agriculture vision models in Odisha gave me the portfolio required for premier research labs.',
      rating: 5,
      avatar: '/images/journey-students.jpg',
    },
    {
      name: 'Monika Das',
      role: 'AI Product Analyst',
      company: 'Enterprise SaaS Inc',
      package: '8.5 LPA',
      skill: 'AI Product Management',
      quote: 'The mentorship was 1-on-1 and genuinely focused on what high-growth product companies are hiring for today.',
      rating: 5,
      avatar: '/images/prog-female.jpg',
    },
    {
      name: 'Kunal Senapati',
      role: 'AI Backend Engineer',
      company: 'FinTech Platform',
      package: '7.5 LPA',
      skill: 'Python, PyTorch & REST APIs',
      quote: 'No generic PPTs. We wrote code, reviewed pull requests, and deployed on GPU clouds from week two.',
      rating: 5,
      avatar: '/images/prog-male.jpg',
    },
    {
      name: 'Alok Nayak',
      role: 'Autonomous Agent Architect',
      company: 'Global Cloud Partner',
      package: '13.0 LPA',
      skill: 'LangChain & Multi-Agent Swarms',
      quote: 'Building multi-agent swarms with LangChain and CrewAI placed me ahead of developers with 5+ years experience.',
      rating: 5,
      avatar: '/images/journey-students.jpg',
    },
  ]

  return (
    <section id="student-success" className="py-16 sm:py-24 bg-[#EEF5FC] border-b border-[#D5E5F5] relative overflow-hidden select-none">
      {/* Subtle blue ambient glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        
        {/* Section Header with User Requested Text */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-[11px] font-bold text-blue-900 uppercase tracking-wider">
            <span>Verified Alumni Outcomes</span>
            <span className="text-blue-500">•</span>
            <span>Real Career Transitions</span>
          </div>

          <h2 className="font-extrabold text-3xl sm:text-4xl text-[#0B1938] tracking-tight">
            Your One-Stop Destination For Career Ready Skills
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            OIAI supports your career journey with both critical skills and technical training.
          </p>
        </div>

      </div>

      {/* Single Line Animated Scrolling Marquee Track */}
      <div className="relative overflow-hidden">
        
        {/* Gradient edge fades for seamless infinite looping */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#EEF5FC] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#EEF5FC] to-transparent z-10 pointer-events-none" />

        {/* Single Continuous Scrolling Line */}
        <div className="overflow-hidden py-2">
          <div
            className="animate-marquee flex items-center gap-5 hover:[animation-play-state:paused]"
            style={{ animationDuration: '65s' }}
          >
            {[...testimonials, ...testimonials].map((s, idx) => (
              <div
                key={`testimonial-${s.name}-${idx}`}
                className="w-80 sm:w-96 p-5 sm:p-6 rounded-3xl bg-white border border-[#D5E5F5] hover:border-blue-400 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between shrink-0 group"
              >
                <div className="space-y-3">
                  {/* Top: Avatar, Name & Outcome */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl overflow-hidden border border-blue-200 shrink-0 shadow-2xs">
                      <img src={s.avatar} alt={s.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition truncate">
                        {s.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium truncate">
                        {s.role} • <strong className="text-slate-700">{s.company}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    {'★'.repeat(s.rating)}
                  </div>

                  {/* Student Quote */}
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{s.quote}"
                  </p>
                </div>

                {/* Bottom Tag & Salary / Package */}
                <div className="pt-3 border-t border-[#D5E5F5] mt-3 flex items-center justify-between text-[11px]">
                  <span className="text-slate-600 font-medium bg-[#F8FAFC] px-2 py-0.5 rounded border border-[#D5E5F5] truncate max-w-[170px]">
                    {s.skill}
                  </span>
                  <span className="font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded border border-emerald-300">
                    {s.package}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* CTA Button */}
      <div className="mt-12 text-center relative z-10">
        <button
          type="button"
          onClick={() => onEnquire?.('Alumni Career Guidance & Placement Assistance')}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition cursor-pointer"
        >
          <span>Connect With Alumni &amp; Placement Team</span>
          <span>→</span>
        </button>
      </div>
    </section>
  )
}
