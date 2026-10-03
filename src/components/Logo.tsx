export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="Sri Sai Manikanta Car Care — home">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-graphite border border-line overflow-hidden">
        <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
          <path
            d="M10 40 L17 28 L30 28 L35 22 L47 22 L54 40 Z"
            fill="none"
            stroke="#F4F2ED"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle cx="21" cy="42" r="5" fill="none" stroke="#E66A35" strokeWidth="3" />
          <circle cx="45" cy="42" r="5" fill="none" stroke="#E66A35" strokeWidth="3" />
          <path d="M6 50 H58" stroke="#E66A35" strokeWidth="2.5" strokeDasharray="6 5" />
        </svg>
        <span className="absolute inset-x-0 bottom-0 h-[2px] bg-ember scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
      </span>
      <span className="leading-none">
        <span className={`block font-display font-bold tracking-wide text-offwhite ${compact ? "text-[13px]" : "text-sm sm:text-[15px]"}`}>
          SRI SAI MANIKANTA
        </span>
        <span className="mt-1 block font-mono text-[10px] tracking-[0.34em] text-ember">
          CAR CARE
        </span>
      </span>
    </a>
  );
}
