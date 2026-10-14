export default function OIAILogo({ className = '', imgClassName = 'h-10 sm:h-11', variant = 'horizontal', showText = true, textColor = 'text-[#0B1938]' }) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Crisp High-Resolution OIAI Emblem */}
      <img
        src="/images/oiai-emblem.png"
        alt="OIAI - Odisha Institute of Artificial Intelligence"
        className={`${imgClassName} w-auto object-contain shrink-0 drop-shadow-xs`}
      />
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className={`text-xl sm:text-2xl font-black tracking-tight ${textColor} antialiased`}>
              OIAI
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-600 uppercase antialiased">
            Odisha Institute of AI
          </span>
        </div>
      )}
    </div>
  )
}

