import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Product = {
  index: string;
  name: string;
  desc: string;
  items: string[];
  image: string;
  alt: string;
};

const products: Product[] = [
  {
    index: "01",
    name: "Gas Regulators",
    desc: "Precision regulators for calibration gases, portable testing and field calibration of detection equipment.",
    items: [
      "Calibration Gas Regulator C-10",
      "Phosphine Calibration Mixtures",
      "Portable Calibration Mixtures",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1024&q=80",
    alt: "Calibration gas regulator with pressure gauges",
  },
  {
    index: "02",
    name: "Industrial Gases",
    desc: "High purity gases and custom liquid mixtures supplied in cylinders, ready for laboratory and plant use.",
    items: ["High Purity Gases", "Gas & Liquid Mixtures", "Hydrogen Chloride (HCL)"],
    image:
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1024&q=80",
    alt: "High purity industrial gas cylinders",
  },
  {
    index: "03",
    name: "Gas Mixtures",
    desc: "Certified calibration gas mixtures and analyser standards prepared to your specification with full traceability.",
    items: [
      "Calibration Gas Mixtures",
      "Portable Hydrogen Purity Analyzer",
      "Custom Multi-component Blends",
    ],
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1024&q=80",
    alt: "Specialty calibration gas mixtures",
  },
  {
    index: "04",
    name: "Industrial Regulators",
    desc: "Heavy-duty Monel and high-pressure regulators built for corrosive service and demanding industrial duty cycles.",
    items: [
      "Single Stage Monel for HCL / CL",
      "High Pressure Piston Regulator",
      "Corrosive Service Regulators",
    ],
    image:
      "https://images.unsplash.com/photo-1581093198175-9988ff8bc4d4?auto=format&fit=crop&w=1024&q=80",
    alt: "Monel industrial gas regulator",
  },
  {
    index: "05",
    name: "Gas Sampling Systems",
    desc: "Stainless steel sample bombs and liquefied gas sampling systems for accurate, contamination-free sampling.",
    items: ["Gas Sampling System", "Gas Sample Bombs", "Liquefied Gas Sampling"],
    image:
      "https://images.unsplash.com/photo-1581094314112-9c3af3077708?auto=format&fit=crop&w=1024&q=80",
    alt: "Stainless steel gas sampling bomb",
  },
  {
    index: "06",
    name: "Gas Manifolds",
    desc: "Two-cylinder and high-pressure manifold systems delivering continuous, regulated gas supply across the plant.",
    items: [
      "Two Cylinder Gas Manifolds",
      "High Pressure Manifold Systems",
      "Tapping Point Assemblies",
    ],
    image:
      "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&w=1024&q=80",
    alt: "Industrial gas manifold system",
  },
  {
    index: "07",
    name: "Control Panels",
    desc: "Auto changeover gas panels that switch banks seamlessly so critical processes never lose supply.",
    items: ["Auto Changeover Panels", "Wall-mount Control Panels", "Custom Engineered Panels"],
    image:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1024&q=80",
    alt: "Auto changeover gas control panel",
  },
  {
    index: "08",
    name: "Closed Loop Gas Sampling System",
    desc: "Sealed, leak-tight sampling loops for accurate, emission-free collection of liquefied and high-purity gases.",
    items: [
      "Closed Loop Sample Bombs",
      "Double Valve Sampling Cylinders",
      "Panel-mounted Sampling Skids",
    ],
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1024&q=80",
    alt: "Closed loop gas sampling system with stainless sample bomb",
  },
];

const upcoming = [
  {
    name: "Ethylene Ripening Chamber",
    desc: "Precision ethylene dosing for uniform colour development.",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1024&q=80",
  },
  {
    name: "Mango Ripening Chamber",
    desc: "Temperature and humidity controlled chambers for mango cargo.",
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1024&q=80",
  },
  {
    name: "Banana Ripening Chamber",
    desc: "Multi-rack chambers calibrated for banana ripening cycles.",
    image:
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1024&q=80",
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-bone border-y hairline">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
              (02) Catalogue
            </span>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1]">
              Built for the
              <br />
              <em className="italic text-cobalt">work that matters.</em>
            </h2>
            <p className="mt-6 text-text-muted max-w-lg">
              A complete range of gas safety and supply equipment, manufactured and serviced
              in-house.
            </p>
          </motion.div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-cobalt transition-colors"
          >
            Request full catalogue <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group"
              itemScope
              itemType="https://schema.org/Product"
              itemProp="itemListElement"
            >
              <meta itemProp="brand" content="Adhul Marketo India Pvt. Ltd." />
              <meta itemProp="category" content="Industrial Gas Safety & Engineering" />

              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-white border hairline">
                <img
                  src={p.image}
                  alt={`${p.alt} - Manufactured in-house by Adhul Marketo India`}
                  title={`${p.name} Specialty Equipment`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  referrerPolicy="no-referrer"
                  itemProp="image"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur text-navy text-[10px] font-medium tracking-[0.18em] uppercase px-2.5 py-1 rounded-sm">
                    {p.index} / {String(products.length).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="font-display text-2xl text-navy leading-tight" itemProp="name">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed" itemProp="description">
                  {p.desc}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {p.items.map((it) => (
                    <li key={it} className="text-[13px] text-text-dark/80 flex items-start gap-2">
                      <span className="text-cobalt mt-1.5 size-1 rounded-full bg-cobalt shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-navy text-sm font-medium border-b border-navy/30 pb-0.5 hover:border-cobalt hover:text-cobalt transition-colors"
                >
                  Enquire
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 lg:mt-32 pt-16 border-t hairline">
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <div className="max-w-xl">
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
                Coming soon
              </span>
              <h3 className="mt-5 font-display text-3xl sm:text-4xl text-navy leading-[1.05]">
                Upcoming <em className="italic text-cobalt">products.</em>
              </h3>
              <p className="mt-4 text-text-muted text-sm max-w-md">
                A new line of ripening chambers, engineered for India's cold-chain and produce
                distribution. Available for pre-order shortly.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-cobalt">
              <span className="size-1.5 rounded-full bg-cobalt animate-pulse" />
              In development
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {upcoming.map((u, i) => (
              <motion.div
                key={u.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative border hairline rounded-md overflow-hidden bg-white"
                itemScope
                itemType="https://schema.org/Product"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={u.image}
                    alt={`${u.name} Ripening Chamber Installation`}
                    title={`Adhul Marketo ${u.name}`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    referrerPolicy="no-referrer"
                    itemProp="image"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-navy text-white text-[10px] font-medium tracking-[0.18em] uppercase px-2.5 py-1 rounded-sm">
                      Upcoming
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-display text-lg text-navy leading-tight" itemProp="name">
                    {u.name}
                  </h4>
                  <p
                    className="mt-1.5 text-xs text-text-muted leading-relaxed"
                    itemProp="description"
                  >
                    {u.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
