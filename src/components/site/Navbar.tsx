import { Phone, Menu, X, ArrowUpRight, MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "@tanstack/react-router";

const links = [
  { href: "/#products", label: "Products" },
  { href: "/about", label: "About Us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [location.pathname, location.hash]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const hash = href.substring(2);
      if (window.location.pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${hash}`);
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-surface/85 backdrop-blur-md border-b hairline" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl text-navy leading-none">Adhul Marketo</span>
          <span className="hidden sm:inline text-[10px] font-medium uppercase tracking-[0.25em] text-text-muted">
            India
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) =>
            l.href === "/about" ? (
              <Link
                key={l.href}
                to="/about"
                className="text-sm font-medium text-text-dark/80 hover:text-navy transition-colors"
                activeProps={{ className: "text-cobalt font-semibold" }}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="text-sm font-medium text-text-dark/80 hover:text-navy transition-colors"
              >
                {l.label}
              </a>
            ),
          )}

          {/* Elegant Three dots menu for Clients and Contact */}
          <div className="relative">
            <button
              onClick={() => setMenuDropdownOpen((v) => !v)}
              className="p-1.5 rounded-full hover:bg-navy/5 text-text-dark/80 hover:text-navy transition-colors flex items-center justify-center cursor-pointer"
              aria-label="More navigation links"
              title="More Options"
            >
              <MoreHorizontal className="size-5" />
            </button>

            <AnimatePresence>
              {menuDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setMenuDropdownOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-border/40 py-2 z-50 text-left"
                  >
                    <a
                      href="/#clients"
                      onClick={(e) => {
                        setMenuDropdownOpen(false);
                        handleNavClick(e, "/#clients");
                      }}
                      className="block px-4 py-2.5 text-sm font-medium text-text-dark hover:bg-navy/5 hover:text-navy transition-colors"
                    >
                      Clients
                    </a>
                    <a
                      href="/#contact"
                      onClick={(e) => {
                        setMenuDropdownOpen(false);
                        handleNavClick(e, "/#contact");
                      }}
                      className="block px-4 py-2.5 text-sm font-medium text-text-dark hover:bg-navy/5 hover:text-navy transition-colors"
                    >
                      Contact Us
                    </a>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919152191121"
            title="Place Direct Call"
            className="flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-navy transition-colors bg-navy/5 px-3 py-1.5 rounded-full"
          >
            <Phone className="size-3.5 text-navy" />
            <span>+91 91521 91121</span>
          </a>

          <a
            href="https://wa.me/919152191121?text=Hello!%20I%20am%20interested%20in%20learning%20more%20about%20Adhul%20Marketo's%20products%20and%20services."
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100/50"
          >
            <svg
              className="size-3.5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.004 0C5.38 0 0 5.38 0 12c.001 2.109.551 4.167 1.597 5.98L.012 24l6.16-1.618a11.93 11.93 0 005.832 1.518c6.62 0 12-5.38 12-12s-5.38-12-11.996-12zm6.59 17.228c-.267.712-1.748 1.424-2.152 1.482-.36.053-.818.075-1.32-.083a15.82 15.82 0 01-3.585-3.17c-2.105-.91-3.388-2.61-3.585-3.17-.196-.558-.313-1.168-.116-1.488.163-.315.378-.248.513-.312.132-.064.293-.16.293-.208.079-.128.079-.738-.083-1.448-.267-.71-.215-.71-.613-.28-.183.197-.433.083-.615-.28-.403-.683-.822-.615-.99-.93-.16-.32-.16-.93.116-1.488a18.23 18.23 0 012.885-6.965c1.861-1.864 4.327-2.89 6.95-2.89.162 0 .43.25.613.28.215 0 .43.08.613.28a11.192 11.192 0 011.374 4.877c0 5.432-4.428 9.802-9.864 9.802a9.7 9.7 0 01-4.825-1.45L2.003 21.6l1.612-5.882c-.896-1.484-1.374-3.163-1.374-4.877.004-5.43 4.43-9.802 9.87-9.802 2.622 0 5.088 1.026 6.945 2.884 1.862 1.864 2.887 4.335 2.885 6.965-.004 5.43-4.428 9.799-9.864 9.799z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="group inline-flex items-center gap-1.5 bg-navy text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-cobalt transition-all"
          >
            Request a quote
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md text-navy"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-surface border-t hairline"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((l) =>
                l.href === "/about" ? (
                  <Link
                    key={l.href}
                    to="/about"
                    onClick={() => setOpen(false)}
                    className="py-2 text-text-dark font-medium border-b border-border/10"
                    activeProps={{ className: "text-cobalt font-semibold" }}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => {
                      setOpen(false);
                      handleNavClick(e, l.href);
                    }}
                    className="py-2 text-text-dark font-medium border-b border-border/10"
                  >
                    {l.label}
                  </a>
                ),
              )}

              {/* Expandable three-dots section on mobile */}
              <div className="border-b border-border/10 py-1">
                <button
                  onClick={() => setMenuDropdownOpen((v) => !v)}
                  className="w-full flex items-center justify-between py-2 text-text-dark font-medium text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <MoreHorizontal className="size-5 text-text-muted" />
                    <span>More Options</span>
                  </span>
                  <motion.span
                    animate={{ rotate: menuDropdownOpen ? 45 : 0 }}
                    className="text-text-muted font-mono leading-none text-xl"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {menuDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-6 flex flex-col gap-2 overflow-hidden"
                    >
                      <a
                        href="/#clients"
                        onClick={(e) => {
                          setOpen(false);
                          setMenuDropdownOpen(false);
                          handleNavClick(e, "/#clients");
                        }}
                        className="py-2 text-sm text-text-dark/80 font-medium"
                      >
                        Clients
                      </a>
                      <a
                        href="/#contact"
                        onClick={(e) => {
                          setOpen(false);
                          setMenuDropdownOpen(false);
                          handleNavClick(e, "/#contact");
                        }}
                        className="py-2 text-sm text-text-dark/80 font-medium"
                      >
                        Contact
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="/#contact"
                onClick={(e) => {
                  setOpen(false);
                  handleNavClick(e, "/#contact");
                }}
                className="bg-navy text-white text-center font-medium px-5 py-3 rounded-full mt-2"
              >
                Request a quote
              </a>

              {/* Direct call & WhatsApp in mobile menu */}
              <div className="grid grid-cols-2 gap-2 mt-2">
                <a
                  href="tel:+919152191121"
                  className="flex items-center justify-center gap-2 bg-navy/5 text-navy text-sm font-medium py-3 rounded-full hover:bg-navy/10 transition-colors"
                >
                  <Phone className="size-4" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/919152191121?text=Hello!%20I%20am%20interested%20in%20learning%20more%20about%20Adhul%20Marketo's%20products%20and%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 text-sm font-semibold py-3 rounded-full border border-emerald-100 hover:bg-emerald-100 transition-colors"
                >
                  <svg
                    className="size-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.004 0C5.38 0 0 5.38 0 12c.001 2.109.551 4.167 1.597 5.98L.012 24l6.16-1.618a11.93 11.93 0 005.832 1.518c6.62 0 12-5.38 12-12s-5.38-12-11.996-12zm6.59 17.228c-.267.712-1.748 1.424-2.152 1.482-.36.053-.818.075-1.32-.083a15.82 15.82 0 01-3.585-3.17c-2.105-.91-3.388-2.61-3.585-3.17-.196-.558-.313-1.168-.116-1.488.163-.315.378-.248.513-.312.132-.064.293-.16.293-.208.079-.128.079-.738-.083-1.448-.267-.71-.215-.71-.613-.28-.183.197-.433.083-.615-.28-.403-.683-.822-.615-.99-.93-.16-.32-.16-.93.116-1.488a18.23 18.23 0 012.885-6.965c1.861-1.864 4.327-2.89 6.95-2.89.162 0 .43.25.613.28.215 0 .43.08.613.28a11.192 11.192 0 011.374 4.877c0 5.432-4.428 9.802-9.864 9.802a9.7 9.7 0 01-4.825-1.45L2.003 21.6l1.612-5.882c-.896-1.484-1.374-3.163-1.374-4.877.004-5.43 4.43-9.802 9.87-9.802 2.622 0 5.088 1.026 6.945 2.884 1.862 1.864 2.887 4.335 2.885 6.965-.004 5.43-4.428 9.799-9.864 9.799z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
