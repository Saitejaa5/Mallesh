import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { business } from "../data/business";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const actions = [
  {
    icon: Phone,
    label: "Call Now",
    value: business.phoneDisplay,
    href: business.phoneHref,
    primary: true,
  },
  {
    icon: Navigation,
    label: "Get Directions",
    value: "Nizampet Main Rd",
    href: business.directionsHref,
    primary: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: business.whatsappHref,
    primary: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 border-t border-line bg-graphite/40 py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Location & contact"
          title={
            <>
              VISIT OUR <span className="text-ember">GARAGE.</span>
            </>
          }
          description="Looking for reliable car care in Bachupally? Get in touch or find your way to our workshop."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Info card */}
          <AnimatedSection className="rounded-3xl border border-line bg-charcoal p-6 sm:p-8">
            <p className="font-mono text-[11px] tracking-[0.28em] text-ember">
              SRI SAI MANIKANTA CAR CARE
            </p>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-ember" aria-hidden="true" />
                <span className="text-silver leading-relaxed">
                  Nizampet Main Road, Bachupally,
                  <br />
                  Hyderabad, Telangana – 500090
                  <span className="mt-1 block font-mono text-[11px] tracking-[0.14em] text-muted">
                    PLUS CODE: {business.plusCode}
                  </span>
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-ember" aria-hidden="true" />
                <span>
                  <a href={business.phoneHref} className="text-offwhite font-semibold hover:text-ember transition-colors">
                    {business.phoneDisplay}
                  </a>
                  <a href={business.secondaryPhoneHref} className="block text-silver hover:text-ember transition-colors">
                    {business.secondaryPhoneDisplay}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0 text-ember" aria-hidden="true" />
                <span className="text-silver">
                  {business.closingLabel}
                  <span className="block text-xs text-muted">Closing time {business.closingTime} — opening hours not listed.</span>
                </span>
              </li>
            </ul>

            <div className="mt-7 grid gap-3">
              {actions.map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  {...(a.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className={`flex items-center justify-between rounded-2xl border px-5 py-4 transition-all hover:-translate-y-px ${
                    a.primary
                      ? "border-ember bg-ember text-white hover:bg-ember-deep shadow-[0_8px_24px_rgba(230,106,53,0.35)]"
                      : "border-line bg-graphite text-offwhite hover:border-ember/60 hover:text-ember"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <a.icon className="h-5 w-5" aria-hidden="true" />
                    <span>
                      <span className="block font-mono text-[10px] tracking-[0.22em] uppercase opacity-80">{a.label}</span>
                      <span className="block text-sm font-semibold">{a.value}</span>
                    </span>
                  </span>
                  <span aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Map */}
          <AnimatedSection delay={0.1} className="flex flex-col">
            <div className="relative flex-1 overflow-hidden rounded-3xl border border-line bg-charcoal p-2 min-h-[340px]">
              <iframe
                title="Map — Sri Sai Manikanta Car Care, Bachupally Hyderabad"
                src={business.embedHref}
                className="h-full min-h-[330px] w-full rounded-2xl border-0 grayscale-[35%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <span className="absolute left-5 top-5 rounded-full bg-charcoal/90 border border-line px-4 py-1.5 font-mono text-[10px] tracking-[0.22em] text-silver backdrop-blur">
                ● BACHUPALLY — HYD 500090
              </span>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 rounded-2xl border border-line bg-charcoal px-5 py-4">
              <p className="text-[13px] text-muted leading-relaxed">
                {business.addressLines[0]} {business.addressLines[1]} · Until {business.closingTime}
              </p>
              <a
                href={business.directionsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-offwhite px-6 py-2.5 text-sm font-semibold text-charcoal hover:bg-ember hover:text-white transition-all"
              >
                <Navigation className="h-4 w-4" /> Directions
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
