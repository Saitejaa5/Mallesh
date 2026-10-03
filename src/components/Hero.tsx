import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, MapPin, Phone, Star } from "lucide-react";
import { business } from "../data/business";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function HeroPhoto() {
  return (
    <div className="relative" aria-hidden="false">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-graphite">
        <div className="absolute inset-0 bg-blueprint-fine opacity-40 pointer-events-none" />
        <img
          src="/images/gallery/storefront.png"
          alt="Sri Sai Manikanta Car Care storefront on Nizampet Main Road — car washing, car decors and wheel alignment bays"
          className="relative w-full h-auto object-cover"
          width={1792}
          height={894}
          loading="eager"
        />
        {/* top labels */}
        <div className="absolute left-5 top-5 rounded-full bg-charcoal/85 backdrop-blur px-4 py-1.5 font-mono text-[10px] tracking-[0.25em] text-silver border border-line/60">
          BAY — 01 / HYD
        </div>
        <div className="absolute right-5 top-5 rounded-full bg-ember px-4 py-1.5 font-mono text-[10px] tracking-[0.25em] text-white">
          ● MULTI-BRAND SERVICE
        </div>
        {/* bottom spec strip */}
        <div className="relative flex items-center justify-between border-t border-line bg-charcoal/85 backdrop-blur px-5 py-3 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-muted">
          <span>WASHING • DECORS • ALIGNMENT</span>
          <span className="text-offwhite">EST. BACHUPALLY</span>
        </div>
      </div>

      {/* floating labels */}
      <motion.div
        animate={useReducedMotion() ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-3 sm:-left-6 top-16 rounded-2xl border border-line bg-charcoal/90 px-4 py-3 shadow-xl backdrop-blur"
      >
        <p className="font-mono text-[10px] tracking-[0.22em] text-ember">GOOGLE RATING</p>
        <p className="mt-1 flex items-center gap-1.5 font-display text-xl font-bold text-offwhite">
          4.6 <Star className="h-4 w-4 fill-ember text-ember" /> <span className="text-sm font-medium text-muted">/ 5</span>
        </p>
      </motion.div>
      <motion.div
        animate={useReducedMotion() ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute -right-2 sm:-right-5 bottom-14 rounded-2xl border border-line bg-charcoal/90 px-4 py-3 shadow-xl backdrop-blur"
      >
        <p className="font-mono text-[10px] tracking-[0.22em] text-muted">OPEN UNTIL</p>
        <p className="mt-1 font-display text-xl font-bold text-offwhite">9:00 <span className="text-ember">PM</span></p>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-[68px]">
      <div className="absolute inset-0 bg-blueprint opacity-60" aria-hidden="true" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-ember/10 blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 top-0 h-full w-[45%] bg-gradient-to-l from-graphite/60 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-20 pb-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-graphite/80 px-4 py-1.5 font-mono text-[10px] sm:text-[11px] tracking-[0.24em] text-silver"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
              AUTOMOTIVE CARE • BACHUPALLY, HYDERABAD
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-[2.6rem] sm:text-6xl lg:text-[4.4rem] font-bold leading-[0.98] tracking-tight"
            >
              YOUR CAR.
              <br />
              <span className="text-ember">OUR CRAFT.</span>
              <br />
              <span className="text-stroke">EVERY DETAIL</span>
              <br />
              MATTERS.
            </motion.h1>

            <motion.p variants={item} className="mt-6 max-w-xl text-[15px] sm:text-lg leading-relaxed text-muted">
              Reliable car care, quality workmanship, and attention to every
              detail. Experience professional automotive service at{" "}
              <span className="text-offwhite font-medium">Sri Sai Manikanta Car Care</span>.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#gallery"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-offwhite px-7 py-3.5 text-sm font-semibold text-charcoal transition-all hover:bg-ember hover:text-white hover:-translate-y-0.5"
              >
                Explore Our Garage
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-graphite/60 px-7 py-3.5 text-sm font-semibold text-offwhite transition-all hover:border-ember hover:text-ember"
              >
                <Phone className="h-4 w-4" />
                Call Us Now
              </a>
            </motion.div>

            <motion.dl
              variants={item}
              className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-line border-y border-line"
            >
              {[
                { k: "4.6 ★", v: "Google Rating" },
                { k: "9", v: "Customer Reviews" },
                { k: "HYD", v: "Bachupally" },
              ].map((s) => (
                <div key={s.v} className="px-4 py-4 first:pl-0">
                  <dt className="sr-only">{s.v}</dt>
                  <dd className="font-display text-xl sm:text-2xl font-bold text-offwhite">{s.k}</dd>
                  <dd className="mt-1 font-mono text-[10px] tracking-[0.18em] uppercase text-muted">{s.v}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroPhoto />
          </motion.div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-line/70 pt-6">
          <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-muted">
            <MapPin className="h-4 w-4 text-ember" /> NIZAMPET MAIN ROAD — 500090
          </p>
          <a href="#about" className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-muted hover:text-offwhite" aria-label="Scroll to about section">
            SCROLL
            <span className="grid h-9 w-6 place-items-start justify-center rounded-full border border-line p-1.5">
              <span className="h-2 w-1 rounded-full bg-ember animate-scroll-dot" />
            </span>
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* marquee strip */}
      <div className="relative border-y border-line bg-graphite/80 py-3 overflow-hidden" aria-hidden="true">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-mono text-[11px] tracking-[0.3em] text-muted">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-10">
              {["CAR WASHING", "CAR DECORS", "WHEEL ALIGNMENT", "DENTING & PAINTING", "BATTERIES & ELECTRICAL", "MULTI-BRAND SERVICE", "BACHUPALLY •"].map((t) => (
                <span key={t + i}> {t} <span className="text-ember"> ✦ </span></span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
