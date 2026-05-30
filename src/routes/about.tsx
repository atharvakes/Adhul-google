import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Settings,
  Target,
  Eye,
  CheckCircle2,
  Lock,
  Compass,
  Zap,
  Globe2,
  Flame,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      {
        title: "About Us | Adhul Marketo India Pvt. Ltd. Precision Gas Engineering",
      },
      {
        name: "description",
        content:
          "Learn about our state-of-the-art laboratory facility in Mumbai, gravimetric blending, NABL traceability, and our commitment to gas safety and precision carrier mixtures.",
      },
    ],
  }),
});

const values = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified Quality",
    desc: "Every process, from technical validation and cylinder raw material selection to automated filling and chromatographic validation, complies strictly with international quality standards.",
  },
  {
    icon: ShieldCheck,
    title: "NABL & NIST Traceabilities",
    desc: "Our high-precision calibration and reference mixtures are prepared gravimetrically, ensuring direct traceabilities to NIST and NPL national standards to validate your analytical analyzers.",
  },
  {
    icon: Settings,
    title: "Purity & Stability Guaranteed",
    desc: "Advanced internal cylinder passivation and heat treatment eliminate interior moisture and adsorption, assuring a long shelf life and stable parts-per-million (ppm) concentration of reactive gases.",
  },
];

const asterCharter = [
  {
    letter: "A",
    word: "Admired",
    description:
      "Becoming the most trusted gas engineering partner in the B2B landscape by strictly prioritizing safety and accuracy above numbers.",
  },
  {
    letter: "S",
    word: "Successful",
    description:
      "Measuring our victory purely by our clients' seamless compliance, plant safety performance, and zero hazardous leakage incidents.",
  },
  {
    letter: "T",
    word: "Transparent",
    description:
      "Full visibility in our blending accuracy, standard deviations, and certificates of analysis (CoAs) accompanying every single shipment.",
  },
  {
    letter: "E",
    word: "Ethical",
    description:
      "Upholding absolute professional integrity, safety protocols, and rigorous engineering compliance without exceptions.",
  },
  {
    letter: "R",
    word: "Robust",
    description:
      "Designing gas handling manifolds, safety systems, and cylinder handling setups engineered to withstand extreme industrial operations.",
  },
];

const capabilities = [
  {
    title: "Gravimetric Blending Facility",
    desc: "We perform specialty mixture preparation using hyper-sensitive analytical scales and high-purity raw gases, obtaining accuracies at ppm and ppb scales.",
  },
  {
    title: "Advanced Chromatographic QC",
    desc: "Our state-of-the-art laboratory in Mumbai houses advanced gas chromatographs containing FID, TCD, and DID detectors to verify standard composition.",
  },
  {
    title: "In-House Valve & Cylinder Prep",
    desc: "We wash, bake, vacuum-dry, and passivate all steel & aluminum cylinders internally to block active site adsorption of sour, toxic, and acid substances.",
  },
];

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-surface">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0E1E3F 1px, transparent 1px), linear-gradient(to bottom, #0E1E3F 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-cobalt block mb-4">
              Our Vision & Credo
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-navy leading-[1.05] tracking-tight">
              State-of-the-art mixtures,
              <br />
              customized to the <em className="italic text-cobalt">absolute standard.</em>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-text-dark/80 font-light max-w-2xl leading-relaxed">
              At Adhul Marketo India Pvt. Ltd., we manufacture high-accuracy specialty calibration
              standards, zero gases, and custom hydrocarbon gas blends for industrial monitoring,
              petrochemical operations, and safe laboratories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="py-20 lg:py-28 border-y hairline">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
                (01) The Company
              </span>
              <h2 className="mt-4 font-display text-4xl text-navy">Who We Are & What Drives Us</h2>
              <div className="mt-8 space-y-4 text-sm text-text-muted leading-relaxed">
                <p>
                  Established as a dedicated B2B enterprise in Mumbai, India, Adhul Marketo is
                  recognized as a meticulous engineering manufacturer of plant-level protection
                  systems and high-stability reference gases.
                </p>
                <p>
                  We are fueled by a single relentless mission: protecting assets and improving
                  measurement fidelity. By applying modern laboratory controls, high cylinder
                  preparation standards, and detailed testing procedures, we ensure zero discrepancy
                  on calibration day.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="border border-border/60 bg-surface/50 p-6 rounded-2xl">
                  <div className="size-10 rounded-full bg-navy/5 flex items-center justify-center text-navy mb-4">
                    <Target className="size-5" />
                  </div>
                  <h3 className="font-display text-2xl text-navy">Our Mission</h3>
                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    To deliver zero-deviating specialty gases and analytical calibration solutions
                    to refineries, plants, labs, and tech parks across the region safely,
                    accurately, and reliably.
                  </p>
                </div>
                <div className="border border-border/60 bg-surface/50 p-6 rounded-2xl">
                  <div className="size-10 rounded-full bg-navy/5 flex items-center justify-center text-navy mb-4">
                    <Eye className="size-5" />
                  </div>
                  <h3 className="font-display text-2xl text-navy">Our Vision</h3>
                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    To anchor ourselves as the premiere national standard reference and safety
                    expert for critical, flammable, and toxic gas setups across defense,
                    environmental monitoring, oil, and chemicals.
                  </p>
                </div>
              </div>

              {/* Pillars list */}
              <div className="pt-6 border-t hairline space-y-8">
                <h3 className="font-display text-3xl text-navy">Our core quality benchmarks</h3>
                <div className="space-y-6">
                  {values.map((v) => (
                    <div key={v.title} className="flex gap-4">
                      <div className="shrink-0 size-6 mt-1 flex items-center justify-center rounded-full bg-cobalt/10 text-cobalt">
                        <CheckCircle2 className="size-4" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-navy">{v.title}</h4>
                        <p className="mt-2 text-sm text-text-muted leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Process & Laboratory Standards */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
              (02) Technical Capabilities
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-navy">
              No shortcuts. Just advanced chemistry, NABL standards, and expert engineering.
            </h2>
            <p className="mt-4 text-sm text-text-muted">
              We employ manufacturing practices inspired by the world's leading metrology guidelines
              to create stable mixtures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((c, i) => (
              <div
                key={i}
                className="bg-background border border-border/50 p-8 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-cobalt mb-6">/ CAPABILITY 0{i + 1}</div>
                  <h3 className="font-display text-2xl text-navy mb-4">{c.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{c.desc}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-border/40 text-xs text-text-muted flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-green-500 blink-dot" />
                  Calibrated Standards
                </div>
              </div>
            ))}
          </div>

          {/* Technical specification banner */}
          <div className="mt-16 bg-navy text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="relative z-10 max-w-xl">
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/60">
                Guaranteed Longevity
              </span>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl text-white">
                Moisture control is the lock that preserves composition.
              </h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                Cylinder preparation is the defining factor in reactive gas shelf-life. Our special
                heat-evacuation cycle prevents decay of active molecules (such as SO₂, H₂S, NO, NO₂
                and reactive organics) against inner active metal sites.
              </p>
            </div>
            <div className="shrink-0 relative z-10 flex gap-4">
              <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-center">
                <div className="font-display text-3xl text-cobalt">100%</div>
                <div className="mt-1 text-[10px] text-white/50 uppercase tracking-widest">
                  GC Validated
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-center">
                <div className="font-display text-3xl text-white">CoA</div>
                <div className="mt-1 text-[10px] text-white/50 uppercase tracking-widest">
                  Per Cylinder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASTER Charter Section */}
      <section className="py-20 lg:py-28 border-t hairline bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
                (03) The ASTER framework
              </span>
              <h2 className="mt-4 font-display text-4xl text-navy leading-tight">
                Our internal charter of absolute service.
              </h2>
              <p className="mt-5 text-sm text-text-muted leading-relaxed">
                Long before our gas mixtures are validated by NABL or NIST equipment, they are
                measured through ASTER, the blueprint shaping our professional conduct.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-6">
              {asterCharter.map((ch, i) => (
                <div
                  key={ch.letter}
                  className="flex flex-col sm:flex-row gap-4 p-6 sm:p-8 rounded-2xl bg-surface border border-transparent hover:border-border/60 transition-all group"
                >
                  <div className="font-display text-5xl sm:text-6xl text-navy/40 group-hover:text-cobalt transition-colors shrink-0 leading-none sm:w-16">
                    {ch.letter}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy flex items-center gap-2">
                      {ch.word}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted leading-relaxed">{ch.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
