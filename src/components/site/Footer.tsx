import { Linkedin, MessageCircle, ArrowUpRight } from "lucide-react";

const cols = [
  {
    h: "Catalogue",
    items: ["Calibration Gases", "Pressure Regulators", "Manifold Systems", "Gas Line Setup"],
  },
  {
    h: "Services",
    items: ["Detector Repair", "AMC", "Calibration", "Rental"],
  },
  {
    h: "Company",
    items: ["About", "Credentials", "Contact", "Careers"],
  },
];

export function Footer() {
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
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="font-display text-4xl lg:text-5xl leading-[1]">
              Adhul Marketo
              <br />
              <em className="italic text-cobalt opacity-90">India Pvt. Ltd.</em>
            </div>
            <p className="mt-6 text-sm text-white/60 max-w-sm leading-relaxed">
              An ISO 9001:2015 certified B2B house engineering gas safety solutions for India's most
              demanding operations.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/80">
              <p className="flex items-center gap-2">
                <span className="text-white/40 text-xs uppercase tracking-wider font-mono">
                  Sales & Support:
                </span>
                <a
                  href="mailto:info@adhul.com"
                  onClick={(e) => {
                    e.preventDefault();
                    openEmail("info@adhul.com");
                  }}
                  className="hover:text-cobalt transition-colors underline decoration-white/20"
                >
                  info@adhul.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-white/40 text-xs uppercase tracking-wider font-mono">
                  RFD & Enquiries:
                </span>
                <a
                  href="mailto:rfd@adhulmarketo.com"
                  onClick={(e) => {
                    e.preventDefault();
                    openEmail("rfd@adhulmarketo.com");
                  }}
                  className="hover:text-cobalt transition-colors underline decoration-white/20"
                >
                  rfd@adhulmarketo.com
                </a>
              </p>
              <p className="flex items-center gap-2 flex-wrap">
                <span className="text-white/40 text-xs uppercase tracking-wider font-mono">
                  Direct Enquiry:
                </span>
                <a
                  href="tel:+919152191121"
                  className="hover:text-cobalt transition-colors font-medium mr-2"
                >
                  +91 91521 91121
                </a>
                <a
                  href="https://wa.me/919152191121?text=Hello!%20I%20am%20interested%20in%20learning%20more%20about%20Adhul%20Marketo's%20products%20and%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-emerald-400 transition-colors bg-emerald-500/10 px-2 py-0.5 rounded text-xs font-semibold text-emerald-400 border border-emerald-500/20"
                >
                  <MessageCircle className="size-3 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="size-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-navy transition-colors"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="https://wa.me/919152191121?text=Hello!%20I%20am%20interested%20in%20learning%20more%20about%20Adhul%20Marketo's%20products%20and%20services."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="size-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-navy transition-colors"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {cols.map((c) => (
              <div key={c.h}>
                <h4 className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
                  {c.h}
                </h4>
                <ul className="mt-5 space-y-3">
                  {c.items.map((it) => (
                    <li key={it}>
                      <a
                        href="/#contact"
                        className="text-sm text-white/85 hover:text-cobalt transition-colors inline-flex items-center gap-1.5 group"
                      >
                        {it}
                        <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Adhul Marketo India Pvt. Ltd.</p>
          <p className="uppercase tracking-[0.2em]">Mumbai · India</p>
        </div>
      </div>
    </footer>
  );
}
