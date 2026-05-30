import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe2 } from "lucide-react";

interface TargetCountry {
  name: string;
  code: string;
  x: number;
  y: number;
  role: string;
  exports: string;
  standards: string;
  industry: string;
}

const highlightedCountries: TargetCountry[] = [
  {
    name: "Singapore",
    code: "SGP",
    x: 440,
    y: 220,
    role: "Marine Gas Safety & Refineries",
    exports: "Marine Calibration Gas & Regulators",
    standards: "NIST Traceable & MED Standards",
    industry: "Offshore Hubs, Ports & Vessels",
  },
  {
    name: "China",
    code: "CHN",
    x: 475,
    y: 155,
    role: "Petrochemical Industrial Metrology",
    exports: "Hydrocarbon Reference Blends",
    standards: "NABL & NIST Match Certified",
    industry: "Chemical Refineries & Testing Labs",
  },
  {
    name: "Bangladesh",
    code: "BGD",
    x: 410,
    y: 180,
    role: "Environmental Monitoring & Labs",
    exports: "Zero Air, High-Purity N2 & Regulators",
    standards: "ISO 17025 Blending Certification",
    industry: "Effluent Monitoring & Textiles",
  },
  {
    name: "Nigeria",
    code: "NGA",
    x: 180,
    y: 210,
    role: "Upstream Asset Safety & Fire Systems",
    exports: "Explosion-Proof Transmitters",
    standards: "ATEX & IECEx Enclosures",
    industry: "Onshore Gas Pipes & Facilities",
  },
  {
    name: "South Africa",
    code: "ZAF",
    x: 230,
    y: 300,
    role: "Heavy Mining & Metallurgy Safety",
    exports: "Stable Multi-component Gas Standards",
    standards: "PTB Germany & NPL Traceable",
    industry: "Deep-Shaft Mining & Synfuels",
  },
];

const HUB_MUMBAI = { name: "Mumbai Factory", x: 350, y: 185 };

export function GlobalPresence() {
  const [hoveredCountry, setHoveredCountry] = useState<TargetCountry | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<TargetCountry | null>(null);

  const activeCountry = hoveredCountry || selectedCountry;

  return (
    <section
      id="global"
      className="py-20 lg:py-24 bg-background relative overflow-hidden border-t border-border/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Descriptive Minimalist Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-cobalt flex items-center gap-1.5">
              <span className="relative flex size-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cobalt opacity-75"></span>
                <span className="relative inline-flex rounded-full size-1.5 bg-cobalt"></span>
              </span>
              Global Export Distribution
            </span>

            <h2 className="font-display text-3xl sm:text-4xl text-navy tracking-tight leading-[1.12]">
              Mumbai and beyond. Delivering engineered mixtures{" "}
              <em className="italic text-cobalt">globally.</em>
            </h2>

            <p className="text-sm text-text-muted leading-relaxed font-light">
              We manufacture and load high-purity cylinder mixtures and technical gas safety systems
              directly from our custom in-house facility in Mumbai, serving world-class
              installations across key hubs.
            </p>

            <p className="text-xs text-text-muted border-l-2 border-cobalt/25 pl-4 py-1 italic">
              Hover over or tap any node on our dynamic map to explore region-specific export
              standards and core target sectors.
            </p>
          </div>

          {/* Clean Custom Map Graphic Column */}
          <div className="lg:col-span-7 bg-surface/40 border border-border/15 p-6 sm:p-8 rounded-3xl relative flex flex-col items-center justify-center min-h-[360px] sm:min-h-[400px]">
            {/* Visual Vector Grid Backing */}
            <div className="absolute inset-x-8 inset-y-8 flex justify-between pointer-events-none opacity-40">
              <div className="w-[1px] h-full bg-border/25" />
              <div className="w-[1px] h-full bg-border/25" />
              <div className="w-[1px] h-full bg-border/25" />
            </div>
            <div className="absolute inset-x-8 inset-y-8 flex flex-col justify-between pointer-events-none opacity-40">
              <div className="h-[1px] w-full bg-border/25" />
              <div className="h-[1px] w-full bg-border/25" />
              <div className="h-[1px] w-full bg-border/25" />
            </div>

            {/* Absolute interactive relative coordinate wrapper */}
            <div className="relative w-full h-full" onClick={() => setSelectedCountry(null)}>
              <svg
                viewBox="0 0 650 380"
                className="w-full h-full relative z-10 select-none overflow-visible"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Delivery Paths starting from Mumbai */}
                {highlightedCountries.map((c) => (
                  <g key={`path-${c.code}`}>
                    {/* Subtle static line */}
                    <path
                      d={`M ${HUB_MUMBAI.x} ${HUB_MUMBAI.y} Q ${(HUB_MUMBAI.x + c.x) / 2} ${(HUB_MUMBAI.y + c.y) / 2 - 20} ${c.x} ${c.y}`}
                      fill="none"
                      stroke="var(--cobalt)"
                      strokeWidth="1.5"
                      strokeOpacity="0.12"
                    />
                    {/* Animated flow pulse dashes */}
                    <motion.path
                      d={`M ${HUB_MUMBAI.x} ${HUB_MUMBAI.y} Q ${(HUB_MUMBAI.x + c.x) / 2} ${(HUB_MUMBAI.y + c.y) / 2 - 20} ${c.x} ${c.y}`}
                      fill="none"
                      stroke="var(--cobalt)"
                      strokeWidth="1.5"
                      strokeDasharray="4 8"
                      strokeOpacity="0.75"
                      animate={{ strokeDashoffset: [-24, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </g>
                ))}

                {/* Central Mumbai Factory Pin */}
                <g transform={`translate(${HUB_MUMBAI.x}, ${HUB_MUMBAI.y})`}>
                  <circle
                    r="12"
                    className="fill-cobalt/10 stroke-cobalt/25 stroke-1 animate-pulse"
                  />
                  <circle r="6" className="fill-navy stroke-white stroke-2" />
                  <text
                    y="-14"
                    className="font-sans text-[10px] font-bold fill-navy"
                    textAnchor="middle"
                  >
                    {HUB_MUMBAI.name}
                  </text>
                </g>

                {/* Delivery Destinations */}
                {highlightedCountries.map((c) => {
                  const isActive = activeCountry?.code === c.code;
                  return (
                    <g
                      key={c.code}
                      transform={`translate(${c.x}, ${c.y})`}
                      className="cursor-pointer group"
                      onMouseEnter={() => setHoveredCountry(c)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCountry(selectedCountry?.code === c.code ? null : c);
                      }}
                    >
                      {/* Interactive broader hover node ring target */}
                      <circle r="22" className="fill-transparent stroke-none" />

                      {/* Pulse active ring represent active connection */}
                      <circle
                        r={isActive ? "11" : "7"}
                        className="fill-cobalt/15 stroke-none transition-all duration-300"
                      />

                      <circle
                        r={isActive ? "5" : "3.5"}
                        className="fill-cobalt stroke-white stroke-1 transition-all duration-300 group-hover:fill-cobalt"
                      />

                      <text
                        y={c.y > 220 ? "16" : "-10"}
                        textAnchor="middle"
                        className={`font-sans text-[9px] tracking-wide transition-all duration-300 font-semibold ${
                          isActive ? "fill-cobalt font-extrabold" : "fill-text-dark"
                        }`}
                      >
                        {c.name}
                      </text>
                    </g>
                  );
                })}

                {/* Extremely clean background map curves to suggest landmass */}
                <path
                  d="M 60 140 Q 110 130 150 170 T 130 290 T 70 330"
                  fill="none"
                  stroke="var(--navy)"
                  strokeOpacity="0.02"
                  strokeWidth="1"
                />
                <path
                  d="M 390 120 Q 430 100 490 120 T 550 170 T 510 270"
                  fill="none"
                  stroke="var(--navy)"
                  strokeOpacity="0.02"
                  strokeWidth="1"
                />
              </svg>

              {/* Absolutely Positioned Interactive Hover Toolkit / Tooltip */}
              <AnimatePresence>
                {activeCountry && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute z-30 pointer-events-none bg-background/95 backdrop-blur-md border border-border shadow-2xl p-4 rounded-2xl w-64 text-left"
                    style={{
                      left: `${(activeCountry.x / 650) * 100}%`,
                      top: `${(activeCountry.y / 380) * 100}%`,
                      transform: "translate(-50%, -100%)",
                      marginTop: "-18px",
                    }}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-display font-semibold text-navy text-sm">
                          {activeCountry.name}
                        </h4>
                        <span className="text-[9px] font-mono bg-cobalt/5 text-cobalt px-2 py-0.5 rounded border border-cobalt/10 font-bold">
                          {activeCountry.code}
                        </span>
                      </div>

                      <p className="text-[11px] font-medium text-cobalt leading-tight uppercase tracking-wider">
                        {activeCountry.role}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-border/30 text-[11px]">
                        <div>
                          <span className="font-semibold text-navy block">Exported Specialty</span>
                          <span className="text-text-muted">{activeCountry.exports}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-navy block">Target Sectors</span>
                          <span className="text-text-muted">{activeCountry.industry}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-navy block">Standards Cert</span>
                          <span className="text-text-dark font-mono bg-surface px-1.5 py-0.5 rounded text-[10px] inline-block mt-0.5 border border-border/10">
                            {activeCountry.standards}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Tooltip Arrow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-[6px] border-transparent border-t-background" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Map Tag Info */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur-sm border border-border/30 px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-wider text-text-muted flex items-center gap-1.5">
              <Globe2 className="size-3.5 text-cobalt" />
              Mumbai Plant Export Channels
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
