import {
  BatteryCharging,
  Car,
  Crosshair,
  Droplets,
  Hammer,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  no: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

/**
 * Service categories confirmed from the outlet's own signboards.
 * Edit freely in this file to rename or remove offerings.
 */
export const services: Service[] = [
  {
    id: "car-washing",
    no: "01",
    title: "Car Washing",
    description:
      "Dedicated washing bay to get your car clean, fresh and road-ready.",
    icon: Droplets,
  },
  {
    id: "car-decors",
    no: "02",
    title: "Car Decors & Accessories",
    description:
      "In-house car decor store for accessories that complete your vehicle.",
    icon: Sparkles,
  },
  {
    id: "wheel-alignment",
    no: "03",
    title: "Wheel Alignment",
    description:
      "Alignment bay for straighter tracking and even tyre wear.",
    icon: Crosshair,
  },
  {
    id: "batteries-electrical",
    no: "04",
    title: "Batteries, AC & Electrical",
    description:
      "Batteries, air-conditioning and electrical work under one roof.",
    icon: BatteryCharging,
  },
  {
    id: "repair-denting-painting",
    no: "05",
    title: "Repair, Denting & Painting",
    description:
      "Body repair, denting and painting work carried out at the workshop.",
    icon: Hammer,
  },
  {
    id: "multi-brand-service",
    no: "06",
    title: "Multi-Brand Car Service",
    description:
      "General service and maintenance for cars of all makes and models.",
    icon: Car,
  },
];
