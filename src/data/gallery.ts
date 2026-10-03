export type GalleryCategory = "Exterior" | "Workshop" | "Facilities";
export type GalleryOrientation = "landscape" | "portrait" | "square";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: GalleryCategory;
  orientation: GalleryOrientation;
  /** Controls the editorial grid footprint. Tune per image if needed. */
  span?: "wide" | "tall" | "standard";
  width?: number;
  height?: number;
}

/**
 * HOW TO ADD MORE OUTLET PHOTOS
 * 1. Drop photos into `public/images/gallery/` (e.g. outlet-04.jpg).
 * 2. Add an entry below pointing at `/images/gallery/<filename>`.
 * 3. Set honest alt text, category and orientation.
 * 4. No code changes needed — filters, grid + lightbox adapt automatically.
 */
export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery/storefront.png",
    alt: "Storefront of Sri Sai Manikanta Car Care — car washing, car decors and wheel alignment bays",
    category: "Exterior",
    orientation: "landscape",
    span: "wide",
    width: 1792,
    height: 894,
  },
  {
    id: 2,
    src: "/images/gallery/service-bay.png",
    alt: "Service bay with cars undergoing inspection and repair work",
    category: "Workshop",
    orientation: "landscape",
    span: "wide",
    width: 1864,
    height: 856,
  },
  {
    id: 3,
    src: "/images/gallery/roadside-board.png",
    alt: "Roadside signboard of Sri Sai Manikanta Multi Brand Car Service",
    category: "Exterior",
    orientation: "portrait",
    span: "tall",
    width: 615,
    height: 1225,
  },
];

export const galleryFilters = ["All", "Exterior", "Workshop", "Facilities"] as const;
export type GalleryFilter = (typeof galleryFilters)[number];
