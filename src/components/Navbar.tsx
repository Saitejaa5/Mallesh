import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { business, navLinks } from "../data/business";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-charcoal/90 backdrop-blur-md border-b border-line shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Primary"
        >
          <Logo />

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative font-mono text-[12px] tracking-[0.18em] uppercase text-silver/90 hover:text-offwhite transition-colors"
                >
                  {l.label}
                  <span
                    className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-left scale-x-0 bg-ember transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={business.phoneHref}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(230,106,53,0.35)] transition-all hover:bg-ember-deep hover:shadow-[0_8px_28px_rgba(230,106,53,0.5)] hover:-translate-y-px active:translate-y-0"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </a>
            <button
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-line bg-graphite text-offwhite"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden bg-charcoal/95 backdrop-blur-md pt-[68px]"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
              className="px-6 py-8 space-y-2"
            >
              {navLinks.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, x: -18 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-line/70 py-4 font-display text-2xl font-bold text-offwhite hover:text-ember transition-colors"
                  >
                    {l.label}
                    <span className="font-mono text-xs text-muted">→</span>
                  </a>
                </motion.li>
              ))}
              <li className="pt-6">
                <a
                  href={business.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full bg-ember px-5 py-4 text-base font-semibold text-white"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {business.phoneDisplay}
                </a>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
