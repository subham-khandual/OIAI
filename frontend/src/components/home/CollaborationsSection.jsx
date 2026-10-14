export default function CollaborationsSection() {
  const primaryCollaborators = [
    {
      name: 'Microsoft Copilot',
      image: '/images/partner-copilot.svg',
      fallbackImage: '/images/partner-copilot.png',
      tag: 'AI Assistant & Automation',
      glow: 'from-blue-500/10 to-indigo-500/10',
    },
    {
      name: 'Google Colab',
      image: '/images/partner-colab.svg',
      fallbackImage: '/images/partner-colab.png',
      tag: 'Cloud GPU & Jupyter Lab',
      glow: 'from-amber-500/10 to-orange-500/10',
    },
    {
      name: 'GitHub Copilot',
      image: '/images/partner-gh-copilot.svg',
      fallbackImage: '/images/partner-gh-copilot.png',
      tag: 'AI Code Intelligence',
      glow: 'from-sky-500/10 to-blue-500/10',
    },
    {
      name: 'Google Gemini',
      image: '/images/partner-gemini.svg',
      fallbackImage: '/images/partner-gemini.png',
      tag: 'Multimodal AI Model',
      glow: 'from-purple-500/10 to-pink-500/10',
    },
    {
      name: 'DeepSeek',
      image: '/images/partner-deepseek.svg',
      fallbackImage: '/images/partner-deepseek.png',
      tag: 'MoE Reasoning Architecture',
      glow: 'from-blue-600/10 to-cyan-500/10',
    },
  ]

  const modelHighlights = [
    {
      name: 'GitHub & MS Copilot',
      role: 'Autonomous Code & Enterprise Agent Workflows',
      icon: '⚡',
    },
    {
      name: 'Google Colab & Cloud GPUs',
      role: 'Hands-on Jupyter Notebooks & Tensor Workloads',
      icon: '🔬',
    },
    {
      name: 'Google Gemini 1.5 & Flash',
      role: 'Multimodal Vision, Audio & 1M+ Context Windows',
      icon: '✨',
    },
    {
      name: 'DeepSeek V3 & R1 Reasoning',
      role: 'Open Frontier MoE & Mathematical Problem Solving',
      icon: '🐋',
    },
  ]

  return (
    <section id="ecosystem-partners" className="py-16 sm:py-20 bg-[#F7F5EF] border-b border-[#E5E0D8] select-none overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1938] tracking-tight">
            Our Collaborators &amp; Partners
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Directly integrating industry-leading AI copilots, cloud compute stacks, and frontier intelligence into every student project.
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        
        {/* Feature Grid: AI Ecosystem Image & Tooling Integration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: AI Robotic Hand & Frontier Models Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden border-2 border-blue-400 bg-white shadow-xl max-w-md w-full group">
              <img
                src="/images/ai-ecosystem-models.jpg"
                alt="AI Frontier Models Ecosystem in hand - ChatGPT, Grok 3, Gemini, Claude, DeepSeek, Nvidia, Meta AI"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1938]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-blue-600 text-white shadow-sm inline-block mb-1">
                  Complete Model Universe
                </span>
                <p className="text-xs font-semibold text-slate-200 leading-snug">
                  Integrated with ChatGPT, Claude, Grok, Gemini, DeepSeek &amp; NVIDIA
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Practical Tooling & Platform Integration */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E0D8] shadow-md space-y-4">
              <h3 className="text-lg font-bold text-[#0B1938]">
                Frontier AI Tools &amp; Environments You Master:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {modelHighlights.map((m) => (
                  <div
                    key={m.name}
                    className="p-3.5 rounded-2xl border border-[#E5E0D8] bg-[#FAF8F5] hover:border-blue-500 hover:bg-white transition-all space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base">{m.icon}</span>
                      <span className="text-xs font-bold text-slate-800">{m.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                      {m.role}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-[#E5E0D8] flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2 font-medium">
                <span>⚡ GPU Cloud: NVIDIA TensorRT &amp; H100 Labs</span>
                <span>🎓 Production Ready Code Commits &amp; CI/CD</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Prominent Scrolling Collaborator Logos (Large, Crisp & Eye-Catchy) */}
      <div className="relative overflow-hidden py-3">
        {/* Lateral gradient edge fades for seamless infinite looping */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-[#F7F5EF] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-[#F7F5EF] to-transparent z-10 pointer-events-none" />

        {/* Marquee flowing Left-to-Right (.animate-marquee-reverse) */}
        <div className="animate-marquee-reverse flex items-center gap-6 sm:gap-8 py-2">
          {[...primaryCollaborators, ...primaryCollaborators, ...primaryCollaborators].map((item, idx) => (
            <div
              key={`collab-ltr-${item.name}-${idx}`}
              className="h-32 sm:h-36 min-w-[270px] sm:min-w-[310px] px-8 sm:px-10 py-5 rounded-2xl sm:rounded-3xl bg-white border-2 border-[#E5E0D8] hover:border-blue-500 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col items-center justify-center shrink-0 group relative overflow-hidden"
            >
              {/* Subtle ambient card glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              {/* Large, high-impact brand logo */}
              <div className="h-14 sm:h-16 flex items-center justify-center relative z-10 w-full px-2">
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => {
                    if (item.fallbackImage && e.currentTarget.src !== item.fallbackImage) {
                      e.currentTarget.src = item.fallbackImage
                    }
                  }}
                  className="h-full w-auto max-w-[220px] sm:max-w-[250px] object-contain transition-transform duration-300 group-hover:scale-108"
                />
              </div>

              {/* Distinctive pill badge */}
              <span className="relative z-10 text-[11px] sm:text-xs text-slate-600 font-semibold tracking-wide mt-2 px-3.5 py-1 rounded-full bg-slate-100/90 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors border border-slate-200/60 group-hover:border-blue-200">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
