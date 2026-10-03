import { ArrowUp, Phone } from "lucide-react";
import { business, navLinks } from "../data/business";
import Logo from "./Logo";

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-line bg-[#0B0D0E]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 font-display text-lg text-silver italic">“{business.tagline}”</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {business.category} on Nizampet Main Road, Bachupally — rated{" "}
              {business.rating} on Google. {business.closingLabel}.
            </p>
            <a
              href={business.phoneHref}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-graphite px-5 py-2.5 text-sm font-semibold text-offwhite hover:border-ember hover:text-ember transition-all"
            >
              <Phone className="h-4 w-4" /> {business.phoneDisplay}
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[11px] tracking-[0.28em] text-muted">QUICK LINKS</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-silver hover:text-ember transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[11px] tracking-[0.28em] text-muted">GARAGE</p>
            <address className="mt-4 text-sm not-italic leading-relaxed text-silver">
              Sri Sai Manikanta Car Care
              <br />
              Nizampet Main Road, Bachupally,
              <br />
              Hyderabad, Telangana – 500090
            </address>
            <p className="mt-3 font-mono text-[11px] tracking-[0.18em] text-muted">
              {business.plusCode.toUpperCase()} · UNTIL {business.closingTime.toUpperCase()}
            </p>
            <button
              onClick={toTop}
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-white hover:bg-ember-deep transition-all"
              aria-label="Back to top"
            >
              Back to top
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-line pt-6">
          <p className="text-xs text-muted">
            © 2026 Sri Sai Manikanta Car Care. All Rights Reserved.
          </p>
          <p className="font-mono text-[10px] tracking-[0.24em] text-muted">
            BACHUPALLY — HYDERABAD — <span className="text-ember">4.6 ★ RATED</span>
          </p>
        </div>
      </div>

      {/* Mobile fixed call bar */}
      <div className="sticky bottom-0 z-40 border-t border-line bg-charcoal/95 backdrop-blur px-4 py-3 sm:hidden">
        <a
          href={business.phoneHref}
          className="flex items-center justify-center gap-2 rounded-full bg-ember py-3 text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4" /> Call {business.phoneDisplay}
        </a>
      </div>
    </footer>
  );
}
