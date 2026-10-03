import AnimatedSection from "./AnimatedSection";

interface Props {
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: Props) {
  const centered = align === "center";
  return (
    <AnimatedSection
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`flex items-center gap-3 font-mono text-[11px] sm:text-xs tracking-[0.28em] uppercase text-ember ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="inline-block h-px w-8 bg-ember" aria-hidden="true" />
        {label}
        {centered && (
          <span className="inline-block h-px w-8 bg-ember" aria-hidden="true" />
        )}
      </p>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-bold leading-[1.05] tracking-tight text-offwhite">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-muted max-w-xl">
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
