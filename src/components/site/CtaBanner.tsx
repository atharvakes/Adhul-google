import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail } from "lucide-react";

export function CtaBanner() {
  const openEmail = (email: string) => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
    if (isMobile) {
      window.location.href = `mailto:${email}?subject=Enquiry%20to%20Adhul%20Marketo&body=Hello%20Adhul%20Marketo%20Team,%0A%0AI%20am%20interested%20in%20your%20products/services.%20Please%20provide%20more%20details.%0A%0AThank%20you.`;
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Enquiry%20to%20Adhul%20Marketo&body=Hello%20Adhul%20Marketo%20Team,%0A%0AI%20am%20interested%20in%20your%20products/services.%20Please%20provide%20more%20details.%0A%0AThank%20you.`,
        "_blank",
      );
    }
  };

  return (
    <section id="contact" className="relative bg-surface py-24 lg:py-32 overflow-hidden">
      {/* hairline grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0E1E3F 1px, transparent 1px), linear-gradient(to bottom, #0E1E3F 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
          (06) Get in touch
        </span>
        <h2 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl text-navy leading-[0.95]">
          Tell us what you
          <br />
          need to <em className="italic text-cobalt">measure, supply or service.</em>
        </h2>
        <p className="mt-8 text-text-muted max-w-xl mx-auto">
          Our team responds to every enquiry within one business day with a real engineer instead of
          an automated response.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6 max-w-4xl mx-auto">
          {/* Phone & WhatsApp Block */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a
              href="tel:+919152191121"
              title="Call directly"
              className="group inline-flex items-center justify-center gap-2.5 bg-navy text-white font-semibold px-8 py-4.5 rounded-full hover:bg-cobalt transition-all shadow-sm hover:shadow-md w-full sm:w-1/2 lg:w-auto text-base"
            >
              <Phone className="size-4.5 text-cobalt group-hover:text-white transition-colors" />
              <span>Call +91 91521 91121</span>
              <ArrowUpRight className="size-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white/60" />
            </a>

            <a
              href="https://wa.me/919152191121?text=Hello!%20I%20am%20interested%20in%20learning%20more%20about%20Adhul%20Marketo's%20products%20and%20services."
              target="_blank"
              rel="noopener noreferrer"
              title="Message on WhatsApp"
              className="group inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4.5 rounded-full transition-all shadow-sm hover:shadow-md w-full sm:w-1/2 lg:w-auto text-base"
            >
              <svg
                className="size-5 fill-current text-white/90 group-hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.004 0C5.38 0 0 5.38 0 12c.001 2.109.551 4.167 1.597 5.98L.012 24l6.16-1.618a11.93 11.93 0 005.832 1.518c6.62 0 12-5.38 12-12s-5.38-12-11.996-12zm6.59 17.228c-.267.712-1.748 1.424-2.152 1.482-.36.053-.818.075-1.32-.083a15.82 15.82 0 01-3.585-3.17c-2.105-.91-3.388-2.61-3.585-3.17-.196-.558-.313-1.168-.116-1.488.163-.315.378-.248.513-.312.132-.064.293-.16.293-.208.079-.128.079-.738-.083-1.448-.267-.71-.215-.71-.613-.28-.183.197-.433.083-.615-.28-.403-.683-.822-.615-.99-.93-.16-.32-.16-.93.116-1.488a18.23 18.23 0 012.885-6.965c1.861-1.864 4.327-2.89 6.95-2.89.162 0 .43.25.613.28.215 0 .43.08.613.28a11.192 11.192 0 011.374 4.877c0 5.432-4.428 9.802-9.864 9.802a9.7 9.7 0 01-4.825-1.45L2.003 21.6l1.612-5.882c-.896-1.484-1.374-3.163-1.374-4.877.004-5.43 4.43-9.802 9.87-9.802 2.622 0 5.088 1.026 6.945 2.884 1.862 1.864 2.887 4.335 2.885 6.965-.004 5.43-4.428 9.799-9.864 9.799z" />
              </svg>
              <span>WhatsApp Us</span>
              <ArrowUpRight className="size-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white/60" />
            </a>
          </div>

          {/* Email Block */}
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            <a
              href="mailto:info@adhul.com"
              onClick={(e) => {
                e.preventDefault();
                openEmail("info@adhul.com");
              }}
              className="group inline-flex items-center justify-center gap-2 border border-navy/20 bg-background/40 hover:bg-navy text-navy hover:text-white font-medium px-6 py-4 rounded-full transition-all w-full sm:w-1/2 lg:w-auto"
            >
              <Mail className="size-4 text-cobalt group-hover:text-white" />
              <span>info@adhul.com</span>
            </a>
            <a
              href="mailto:rfd@adhulmarketo.com"
              onClick={(e) => {
                e.preventDefault();
                openEmail("rfd@adhulmarketo.com");
              }}
              className="group inline-flex items-center justify-center gap-2 border border-navy/20 bg-background/40 hover:bg-navy text-navy hover:text-white font-medium px-6 py-4 rounded-full transition-all w-full sm:w-1/2 lg:w-auto"
            >
              <Mail className="size-4 text-cobalt group-hover:text-white" />
              <span>rfd@adhulmarketo.com</span>
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.2em] text-text-muted">
          <span>Mumbai, India</span>
          <span className="size-1 rounded-full bg-text-muted/40" />
          <span>Mon–Sat · 09:00–19:00</span>
          <span className="size-1 rounded-full bg-text-muted/40" />
          <span>ISO 9001:2015</span>
        </div>
      </motion.div>
    </section>
  );
}
