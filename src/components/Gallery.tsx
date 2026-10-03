import { useCallback, useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "lucide-react";
import {
  galleryFilters,
  galleryImages,
  type GalleryFilter,
} from "../data/gallery";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

interface Props {
  onOpen: (indexWithinFiltered: number) => void;
  activeFilter: GalleryFilter;
  setFilter: (f: GalleryFilter) => void;
}

export function useGalleryFilter() {
  const [filter, setFilter] = useState<GalleryFilter>("All");
  const available = useMemo(() => {
    const cats = new Set(galleryImages.map((g) => g.category));
    return galleryFilters.filter((f) => f === "All" || cats.has(f as never));
  }, []);
  const filtered = useMemo(
    () =>
      filter === "All"
        ? galleryImages
        : galleryImages.filter((g) => g.category === filter),
    [filter]
  );
  return { filter, setFilter, filtered, available };
}

function spanClass(span?: string) {
  if (span === "wide") return "sm:col-span-2";
  if (span === "tall") return "sm:row-span-2";
  return "";
}

export function GalleryGrid({ onOpen, activeFilter, setFilter }: Props) {
  const available = useMemo(() => {
    const cats = new Set(galleryImages.map((g) => g.category));
    return galleryFilters.filter((f) => f === "All" || cats.has(f as never));
  }, []);
  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? galleryImages
        : galleryImages.filter((g) => g.category === activeFilter),
    [activeFilter]
  );
  const reduce = useReducedMotion();

  return (
    <>
      <AnimatedSection delay={0.05} className="mt-8 flex flex-wrap gap-2">
        {available.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={activeFilter === f}
            className={`rounded-full px-5 py-2.5 font-mono text-[11px] tracking-[0.18em] uppercase transition-all border ${
              activeFilter === f
                ? "bg-ember border-ember text-white shadow-[0_6px_20px_rgba(230,106,53,0.4)]"
                : "border-line bg-graphite text-muted hover:text-offwhite hover:border-silver/40"
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto hidden sm:block font-mono text-[11px] tracking-[0.2em] text-muted self-center">
          {filtered.length} / {galleryImages.length} FRAMES
        </span>
      </AnimatedSection>

      <motion.div layout className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 [grid-auto-flow:dense]">
        <AnimatePresence mode="popLayout">
          {filtered.map((img, i) => (
            <motion.figure
              layout={!reduce}
              key={img.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-line bg-graphite cursor-zoom-in ${spanClass(img.span)}`}
              onClick={() => onOpen(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onOpen(i);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Open photo: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={img.width ?? (img.orientation === "portrait" ? 800 : 1200)}
                height={img.height}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-charcoal/95 via-charcoal/50 to-transparent p-4 pt-10 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100">
                <span className="min-w-0">
                  <span className="block truncate text-[13px] font-medium text-offwhite">{img.alt.split("—")[0]}</span>
                  <span className="mt-0.5 block font-mono text-[10px] tracking-[0.2em] text-ember uppercase">
                    {img.category} • {img.orientation}
                  </span>
                </span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ember text-white">
                  <Expand className="h-4 w-4" />
                </span>
              </figcaption>
              <span className="absolute left-3 top-3 rounded-full bg-charcoal/80 backdrop-blur px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-silver border border-line/60">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="mt-6 rounded-2xl border border-dashed border-line bg-graphite/50 px-5 py-4 text-[13px] leading-relaxed text-muted">
        <span className="text-ember font-mono text-[11px] tracking-[0.2em]">REAL OUTLET PHOTOS — </span>
        Photographs of our actual garage. To add more, drop images into{" "}
        <code className="text-silver">public/images/gallery/</code> and list them in{" "}
        <code className="text-silver">src/data/gallery.ts</code> — the grid,
        filters and lightbox adapt automatically.
      </p>
    </>
  );
}

interface LightboxProps {
  images: typeof galleryImages;
  index: number | null;
  onClose: () => void;
  onNav: (next: number) => void;
}

export function GalleryLightbox({ images, index, onClose, onNav }: LightboxProps) {
  const reduce = useReducedMotion();
  const [touchX, setTouchX] = useState<number | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onNav((index + dir + images.length) % images.length);
    },
    [index, images.length, onNav]
  );

  useEffect(() => {
    if (index === null) return;
    document.body.classList.add("lightbox-scroll-lock");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("lightbox-scroll-lock");
      window.removeEventListener("keydown", onKey);
    };
  }, [index, go, onClose]);

  return (
    <AnimatePresence>
      {index !== null && images[index] && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/95 backdrop-blur-md p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo viewer — ${images[index].alt}`}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close viewer"
            className="absolute right-4 top-4 sm:right-6 sm:top-6 grid h-11 w-11 place-items-center rounded-full border border-line bg-graphite text-offwhite hover:border-ember hover:text-ember transition-colors z-10"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            aria-label="Previous photo"
            className="absolute left-2 sm:left-6 z-10 grid h-11 w-11 place-items-center rounded-full border border-line bg-graphite/90 text-offwhite hover:border-ember hover:text-ember transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); go(1); }}
            aria-label="Next photo"
            className="absolute right-2 sm:right-6 z-10 grid h-11 w-11 place-items-center rounded-full border border-line bg-graphite/90 text-offwhite hover:border-ember hover:text-ember transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <motion.figure
            key={images[index].id}
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[86vh] max-w-5xl w-auto"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX === null) return;
              const dx = e.changedTouches[0].clientX - touchX;
              if (dx > 50) go(-1);
              else if (dx < -50) go(1);
              setTouchX(null);
            }}
          >
            <img
              src={images[index].src}
              alt={images[index].alt}
              className="max-h-[72vh] w-auto max-w-full mx-auto rounded-2xl border border-line object-contain shadow-2xl"
              draggable={false}
            />
            <figcaption className="mt-4 flex items-center justify-between gap-4 text-sm">
              <span className="min-w-0 truncate text-silver">{images[index].alt}</span>
              <span className="shrink-0 font-mono text-xs tracking-[0.2em] text-muted">
                {index + 1} / {images.length}
              </span>
            </figcaption>
            <div className="mt-2 flex justify-center gap-1.5" aria-hidden="true">
              {images.map((im, i) => (
                <span key={im.id} className={`h-1 rounded-full transition-all ${i === index ? "w-8 bg-ember" : "w-3 bg-line"}`} />
              ))}
            </div>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Gallery() {
  const { filter, setFilter, filtered } = useGalleryFilter();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative scroll-mt-20 py-20 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Inside our garage"
          title={
            <>
              TAKE A <span className="text-ember">CLOSER LOOK.</span>
            </>
          }
          description="Explore our workspace and get a glimpse of Sri Sai Manikanta Car Care."
        />
        <GalleryGrid
          onOpen={setLightboxIndex}
          activeFilter={filter}
          setFilter={setFilter}
        />
      </div>
      <GalleryLightbox
        images={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNav={setLightboxIndex}
      />
    </section>
  );
}
