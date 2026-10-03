import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { business } from "../data/business";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <SectionHeading
              label="About the garage"
              title={
                <>
                  MORE THAN A WORKSHOP.
                  <br />
                  <span className="text-ember">A PLACE THAT CARES.</span>
                </>
              }
            />
            <AnimatedSection delay={0.1}>
              <p className="mt-6 text-muted leading-relaxed text-[15px] sm:text-base max-w-xl">
                At Sri Sai Manikanta Car Care, we believe every vehicle deserves
                attention and care. Located in Bachupally, Hyderabad, we serve
                customers looking for dependable automotive service and
                maintenance.
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-line bg-graphite p-5 max-w-xl">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-ember" />
                <div>
                  <p className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">Find us</p>
                  <p className="mt-1 text-sm text-offwhite leading-relaxed">
                    Nizampet Main Road, Bachupally,
                    <br />
                    Hyderabad, Telangana – 500090
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-semibold text-white hover:bg-ember-deep transition-all hover:-translate-y-px"
                >
                  <Phone className="h-4 w-4" /> {business.phoneDisplay}
                </a>
                <a
                  href="#services"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-offwhite hover:border-ember hover:text-ember transition-all"
                >
                  What we do
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </AnimatedSection>

            {/* Rating counter visual */}
            <AnimatedSection delay={0.15} className="mt-10">
              <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-graphite to-charcoal p-6 sm:p-8 max-w-xl">
                <div className="absolute inset-0 bg-blueprint-fine opacity-50" aria-hidden="true" />
                <div className="relative flex items-end justify-between gap-6">
                  <div>
                    <motion.p
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="font-display text-6xl sm:text-7xl font-bold tracking-tight text-offwhite"
                    >
                      4.6<span className="text-2xl text-muted"> / 5</span>
                    </motion.p>
                    <p className="mt-2 font-mono text-[11px] tracking-[0.28em] text-ember">
                      GOOGLE CUSTOMER RATING
                    </p>
                    <p className="mt-2 text-sm text-muted">Based on 9 Google reviews</p>
                  </div>
                  <div className="hidden sm:flex flex-col gap-1.5" aria-hidden="true">
                    {[100, 80, 64, 48, 32].map((h, i) => (
                      <motion.span
                        key={i}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                        className={`h-1.5 rounded-full origin-left ${i < 4 ? "bg-ember" : "bg-line"}`}
                        style={{ width: h }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Editorial photo */}
          <AnimatedSection delay={0.1} className="relative lg:sticky lg:top-24">
            <div className="absolute -top-4 -right-2 sm:right-6 z-10 rounded-full bg-ember px-4 py-2 font-mono text-[11px] tracking-[0.2em] text-white shadow-lg">
              FIG. 01 — THE GARAGE
            </div>
            <div className="relative rounded-3xl border border-line bg-graphite p-3 sm:p-4">
              <div className="overflow-hidden rounded-2xl bg-charcoal">
                <img
                  src="/images/gallery/service-bay.png"
                  alt="Service bay at Sri Sai Manikanta Car Care with cars undergoing inspection and repair"
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
                  width={1864}
                  height={856}
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between px-2 pt-3 pb-1 font-mono text-[10px] sm:text-[11px] tracking-[0.18em] text-muted">
                <span>INSIDE THE WORKSHOP</span>
                <span className="text-ember">● REAL OUTLET PHOTO</span>
              </div>
              <p className="px-2 pb-2 text-xs text-muted leading-relaxed">
                Our service bay in Bachupally — cars lined up for inspection
                and repair under the workshop shed.
              </p>
            </div>
            {/* annotation line */}
            <div className="mt-4 hidden sm:flex items-center gap-4 font-mono text-[11px] tracking-[0.2em] text-muted">
              <span className="h-px flex-1 bg-line" />
              BACHUPALLY — NIZAMPET MAIN ROAD
              <span className="h-px flex-1 bg-line" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
