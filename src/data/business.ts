export const business = {
  name: "SRI SAI MANIKANTA",
  suffix: "CAR CARE",
  tagline: "Care for every journey.",
  category: "Automotive Repair & Car Care",
  phoneDisplay: "+91 99128 82191",
  phoneHref: "tel:+919912882191",
  // Second number shown on the outlet's own signboards.
  secondaryPhoneDisplay: "+91 99128 81191",
  secondaryPhoneHref: "tel:+919912881191",
  // WhatsApp: uses same business number; update if a dedicated WhatsApp number is confirmed.
  whatsappHref: "https://wa.me/919912882191?text=Hello%20Sri%20Sai%20Manikanta%20Car%20Care%2C%20I%20need%20help%20with%20my%20vehicle.",
  addressLines: ["Nizampet Main Road, Bachupally,", "Hyderabad, Telangana – 500090"],
  addressShort: "Bachupally, Hyderabad",
  plusCode: "G9J8+R4 Hyderabad, Telangana",
  closingTime: "9:00 PM",
  closingLabel: "Open until 9:00 PM",
  rating: 4.6,
  reviewCount: 9,
  mapsQuery: "Sri Sai Manikanta Car Care, Nizampet Main Road, Bachupally, Hyderabad, Telangana 500090",
  get directionsHref() {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(this.mapsQuery)}`;
  },
  get embedHref() {
    return `https://www.google.com/maps?q=${encodeURIComponent(this.mapsQuery)}&z=16&output=embed`;
  },
  // TODO(owner): replace with the official Google review link when available.
  googleReviewsHref: "https://www.google.com/maps/search/?api=1&query=Sri+Sai+Manikanta+Car+Care+Bachupally+Hyderabad",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;
