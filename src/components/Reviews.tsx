import { motion } from "framer-motion";
import { ArrowUpRight, Quote, Star } from "lucide-react";
import { business } from "../data/business";
import { reviews } from "../data/reviews";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Reviews() {
  return (
    <section id="reviews" className="relative scroll-mt-20 border-t border-line py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 items-start">
          <div className="lg:sticky lg:top-24">
            <SectionHeading
              label="Customer experiences"
              title={
                <>
                  WHAT CUSTOMERS
                  <br />
                  <span className="text-ember">SAY.</span>
                </>
              }
              description="Real Google feedback shown honestly — positives and criticism alike. Individual star ratings were not supplied, so none are invented."
            />
            <AnimatedSection delay={0.1} className="mt-8">
              <div className="rounded-3xl border border-line bg-graphite p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < 4 ? "fill-ember text-ember" : "fill-ember/40 text-ember/40"}`}
                      aria-hidden="true"
                    />
                  ))}
                  <span className="ml-1 font-mono text-xs text-muted">4.6 / 5</span>
                </div>
                <p className="mt-4 font-display text-5xl font-bold text-offwhite">
                  4.6<span className="text-xl text-muted"> / 5</span>
                </p>
                <p className="mt-2 text-sm text-muted">
                  Google rating · {business.reviewCount} reviews
                </p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-charcoal">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-ember"
                  />
                </div>
                <a
                  href={business.googleReviewsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-offwhite px-6 py-3.5 text-sm font-semibold text-charcoal hover:bg-ember hover:text-white transition-all"
                >
                  View All Google Reviews
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </AnimatedSection>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {reviews.map((r, i) => (
              <motion.blockquote
                key={r.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative rounded-3xl border border-line bg-graphite/70 p-6 sm:p-7 transition-colors hover:border-silver/30"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-line" aria-hidden="true" />
                <p className="text-[15px] sm:text-base leading-relaxed text-offwhite pr-10">
                  “{r.text}”
                </p>
                <footer className="mt-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ember/15 border border-ember/30 font-display text-lg font-bold text-ember" aria-hidden="true">
                    {r.initial}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-offwhite">{r.name}</span>
                    <span className="block font-mono text-[11px] tracking-[0.14em] text-muted">
                      GOOGLE REVIEW • {r.time.toUpperCase()}
                    </span>
                  </span>
                </footer>
              </motion.blockquote>
            ))}
            <AnimatedSection>
              <p className="rounded-2xl border border-dashed border-line px-5 py-4 text-[13px] text-muted leading-relaxed">
                Showing all {reviews.length} supplied excerpts. Add future
                reviews only from genuine Google feedback — never invent new ones.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
