import { Link } from 'react-router-dom'

export default function HeroSection({ onEnquire }) {
  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden bg-[#070D1E] border-b border-slate-800">
      {/* 20-Second Looped Background Video - Fully visible without white tint */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        src="/images/background.mp4"
      />

      {/* Subtle cinematic gradient localized to the left text area */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#070D1E]/90 via-[#070D1E]/50 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#070D1E]/60 to-transparent pointer-events-none" />

      {/* Main Container: Aligned directly to the left edge */}
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="max-w-xl lg:max-w-2xl space-y-6 text-left">
          
          {/* Main Headline in left corner */}
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-black tracking-tight leading-[1.05] drop-shadow-md">
            <span className="text-white">AI expertise.</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 inline-block">
              Real-world
            </span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 inline-block">
              impact.
            </span>
          </h1>

          {/* Subheading about OIAI */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed max-w-xl drop-shadow-sm">
            Odisha’s premier training institute for practical Artificial Intelligence, Generative AI &amp; Machine Learning. Turn theory into commercial applications with 1-on-1 industry mentors in Bhubaneswar.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            {/* Primary Solid Blue Button */}
            <Link
              to="/programmes"
              className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore AI Programs</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform font-bold">↗</span>
            </Link>

            {/* Secondary Clean Outlined Button */}
            <Link
              to="/apply"
              className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-black/40 hover:bg-black/60 border border-white/30 backdrop-blur-md shadow-xs transition flex items-center gap-2 group cursor-pointer"
            >
              <span>Start Your Application</span>
              <span className="group-hover:translate-x-1 transition-transform font-bold text-blue-400">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
