import { motion } from "framer-motion";

import relianceLogo from "../../assets/clients/reliance.png";
import gailLogo from "../../assets/clients/gail.png";
import iocLogo from "../../assets/clients/ioc.png";
import hpclLogo from "../../assets/clients/hpcl.png";
import bpclLogo from "../../assets/clients/bpcl.png";
import ltLogo from "../../assets/clients/lt.png";
import ntpcLogo from "../../assets/clients/ntpc.png";

const clients = [
  { name: "Indian Oil", logo: iocLogo },
  { name: "HPCL", logo: hpclLogo },
  { name: "BPCL", logo: bpclLogo },
  { name: "Reliance Industries", logo: relianceLogo },
  { name: "Larsen & Toubro", logo: ltLogo },
  { name: "NTPC", logo: ntpcLogo },
  { name: "GAIL", logo: gailLogo },
];

export function Clients() {
  return (
    <section id="clients" className="py-20 lg:py-24 bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
              (07) Partners
            </span>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl text-navy leading-[1.05]">
              Trusted by India's
              <br />
              <em className="italic text-cobalt">core industries.</em>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 lg:col-start-7 text-text-muted text-base lg:text-lg max-w-xl"
          >
            For more than two decades, our equipment has supported safety and supply at refineries,
            power plants, research labs and EPC majors across India.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 sm:gap-6">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center justify-center p-4 sm:p-5 bg-white rounded-xl border border-hairline/60 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md hover:border-hairline transition-all duration-300 ease-out h-24"
              title={c.name}
            >
              <img
                src={c.logo}
                alt={c.name}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full h-auto w-auto object-contain transition-transform duration-300 hover:scale-[1.04]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
