import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Factory, Compass } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-surface border-b border-border/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
              (01) In-House Manufacturing
            </span>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl text-navy leading-[1.1] tracking-tight">
              State-of-the-art mixtures,
              <br />
              <em className="italic text-cobalt">manufactured in-house.</em>
            </h2>
            <p className="mt-6 text-sm sm:text-base text-text-muted leading-relaxed font-light">
              Adhul Marketo India Pvt. Ltd. is an ISO 9001:2015 certified manufacturer of
              high-purity gases and analytical calibration solutions. Built upon rigorous metrology
              guidelines, we protect critical operations with true measurement fidelity.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 bg-navy text-white text-xs font-semibold px-6 py-3.5 rounded-full hover:bg-cobalt transition-all duration-300 shadow-sm"
              >
                <span>Read Our Technical Capabilities</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Core Pillars Column */}
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background p-6 rounded-2xl border border-border/10 shadow-[0_2px_12px_rgba(0,0,0,0.01)]"
            >
              <div className="size-10 rounded-xl bg-cobalt/5 flex items-center justify-center text-cobalt mb-4">
                <Factory className="size-5" />
              </div>
              <h3 className="font-display text-base font-semibold text-navy">Mumbai Plant</h3>
              <p className="mt-2 text-xs text-text-muted leading-relaxed">
                Full-scale research laboratory, passivation ovens, and dynamic blending lines
                operating in-house.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background p-6 rounded-2xl border border-border/10 shadow-[0_2px_12px_rgba(0,0,0,0.01)]"
            >
              <div className="size-10 rounded-xl bg-cobalt/5 flex items-center justify-center text-cobalt mb-4">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="font-display text-base font-semibold text-navy">
                Traceable Calibration
              </h3>
              <p className="mt-2 text-xs text-text-muted leading-relaxed">
                Prepared gravimetrically and validated using state-of-the-art chromatography
                traceable to NIST and NABL.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background p-6 rounded-2xl border border-border/10 shadow-[0_2px_12px_rgba(0,0,0,0.01)]"
            >
              <div className="size-10 rounded-xl bg-cobalt/5 flex items-center justify-center text-cobalt mb-4">
                <Compass className="size-5" />
              </div>
              <h3 className="font-display text-base font-semibold text-navy">Global Export</h3>
              <p className="mt-2 text-xs text-text-muted leading-relaxed">
                In-house engineering, customized packaging, and robust logistics delivering safe gas
                setups worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
