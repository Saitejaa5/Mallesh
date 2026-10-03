export interface Review {
  id: number;
  name: string;
  text: string;
  time: string;
  initial: string;
}

/**
 * Real customer feedback supplied by the business.
 * Original meaning preserved — do not rewrite or invent reviews.
 * Individual star ratings were not supplied, so none are fabricated.
 */
export const reviews: Review[] = [
  {
    id: 1,
    name: "Srinu Vasulu",
    text: "Good service 💯",
    time: "3 months ago",
    initial: "S",
  },
  {
    id: 2,
    name: "Raghav Chowdary",
    text: "They dont do properly work and price are more",
    time: "3 months ago",
    initial: "R",
  },
  {
    id: 3,
    name: "Adhikeshavareddy Kunta",
    text: "Servings was good and excellent",
    time: "2 months ago",
    initial: "A",
  },
];
