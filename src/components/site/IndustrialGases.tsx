import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

const gases = [
  "Sulphur Hexafluoride (SF₆)",
  "Helium",
  "Specialty Gas Mixtures",
  "High-Purity Gases",
  "Standard Reference Gases",
  "Argon",
  "Nitrogen",
  "Hydrogen",
];

export function IndustrialGases() {
  return (
    <section className="bg-navy text-white py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-12 xl:col-span-5"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/60">
              (04) Industrial Gases
            </span>
            <h3 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1]">
              And of course,
              <br />
              <em className="italic text-cobalt">the gases themselves.</em>
            </h3>
            <p className="mt-5 text-white/70 text-sm max-w-md leading-relaxed">
              High purity gases and customized cylinder mixtures manufactured in our state of the
              art in house facilities, delivered globally with full metrological certification.
              Click any gas to place an instant enquiry over the phone.
            </p>
          </motion.div>

          <div className="lg:col-span-12 xl:col-span-7 flex flex-wrap gap-4">
            {gases.map((g, i) => (
              <motion.a
                key={g}
                href="tel:+919152191121"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] text-white/90 text-sm px-6 py-3 hover:bg-white hover:text-navy hover:border-white transition-all duration-300 ease-out cursor-pointer"
              >
                <span>{g}</span>
                <PhoneCall className="size-3 text-cobalt group-hover:text-navy opacity-40 group-hover:opacity-100 transition-all group-hover:scale-110" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
