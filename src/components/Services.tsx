import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { business } from "../data/business";
import { services } from "../data/services";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 border-t border-line bg-graphite/40 py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            label="What we do"
            title={
              <>
                COMPLETE CARE.
                <br />
                ONE <span className="text-ember">DESTINATION.</span>
              </>
            }
            description="Care categories confirmed from our outlet signboards — washing, decors, alignment, electricals, body work and multi-brand service."
          />
          <AnimatedSection delay={0.1}>
            <p className="font-mono text-[11px] tracking-[0.24em] text-muted">
              06 — WORKSHOP SERVICES / <span className="text-ember">ON THE BOARD</span>
            </p>
          </AnimatedSection>
        </div>

        <div className="mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-line bg-charcoal p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-ember/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
            >
              <span
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-ember transition-transform duration-400 group-hover:scale-x-100"
                aria-hidden="true"
              />
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-graphite text-silver transition-all duration-300 group-hover:border-ember/50 group-hover:text-ember group-hover:-rotate-6 group-hover:scale-105">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-muted group-hover:text-ember transition-colors">
                  /{s.no}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-offwhite">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{s.description}</p>
              <a
                href={business.phoneHref}
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.2em] uppercase text-silver hover:text-ember transition-colors"
                aria-label={`Ask about ${s.title} by phone`}
              >
                Ask about this <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              {/* ghost number */}
              <span className="pointer-events-none absolute -bottom-4 right-3 font-display text-[5rem] font-bold leading-none text-offwhite/[0.045] select-none" aria-hidden="true">
                {s.no}
              </span>
            </motion.article>
          ))}
        </div>

        <AnimatedSection className="mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 rounded-3xl border border-ember/30 bg-gradient-to-r from-ember/10 via-graphite to-graphite px-6 py-6 sm:px-8">
            <div>
              <p className="font-display text-xl sm:text-2xl font-bold text-offwhite">
                Need help with your vehicle?
              </p>
              <p className="mt-1 text-sm text-muted">
                Call us directly — no forms, no waiting. Open until {business.closingTime}.
              </p>
            </div>
            <a
              href={business.phoneHref}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ember px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(230,106,53,0.35)] hover:bg-ember-deep transition-all hover:-translate-y-px"
            >
              <Phone className="h-4 w-4" /> Talk to Our Team
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
