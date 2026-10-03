import { motion } from "framer-motion";
import { Eye, HeartHandshake, MapPin, MessagesSquare } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const points = [
  {
    icon: Eye,
    no: "01",
    title: "Attention to Vehicle Care",
    text: "Every vehicle gets a careful look — nothing rushed, nothing overlooked.",
  },
  {
    icon: HeartHandshake,
    no: "02",
    title: "Customer-Focused Service",
    text: "Straightforward dealing centred on what you and your car actually need.",
  },
  {
    icon: MapPin,
    no: "03",
    title: "Convenient Bachupally Location",
    text: "Easy to reach on Nizampet Main Road, with directions one tap away.",
  },
  {
    icon: MessagesSquare,
    no: "04",
    title: "Direct Communication",
    text: "Talk to the team directly by phone or WhatsApp — clear and quick.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative border-t border-line bg-graphite/40 py-20 sm:py-28 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        aria-hidden="true"
      >
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1200 600">
          <g fill="none" stroke="#2B3136" strokeWidth="1.5">
            <circle cx="1050" cy="120" r="180" />
            <circle cx="1050" cy="120" r="120" strokeDasharray="8 10" />
            <path d="M-40 480 H500" stroke="#E66A35" strokeDasharray="16 14" opacity="0.6" />
          </g>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why choose us"
          align="center"
          title={
            <>
              CARE YOU CAN SEE.
              <br />
              SERVICE YOU CAN <span className="text-ember">TRUST.</span>
            </>
          }
          description="Simple reasons customers stop by — editable anytime to match confirmed strengths."
        />
        <div className="mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <motion.div
              key={p.no}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.09 }}
              className="group relative rounded-3xl border border-line bg-charcoal p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-ember/50"
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-line bg-graphite text-silver transition-all duration-300 group-hover:border-ember group-hover:text-ember group-hover:scale-105">
                <p.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-5 font-mono text-[11px] tracking-[0.28em] text-ember">— {p.no} —</p>
              <h3 className="mt-2 font-display text-lg font-bold text-offwhite">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </motion.div>
          ))}
        </div>
        <AnimatedSection className="mt-8 text-center">
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted">
            NO INFLATED CLAIMS — ONLY WHAT THE OWNER CONFIRMS.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
