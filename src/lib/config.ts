// Restaurant configuration. Update these once and they apply everywhere.
export const RESTAURANT = {
  name: "No.1 Bajwi Hotel",
  shortName: "Bajwi Hotel",
  tagline: "Authentic Taste. Premium Experience.",
  // Update with the real WhatsApp number including country code (no +, no spaces)
  whatsappNumber: "916900916043",
  phoneDisplay: "8474823866, 9365738626",
  address: "Kendukona, Rangia",
  city: "Rangia, Kamrup, Assam 781354",
  hours: "11:00 AM – 11:30 PM • Open All Days",
  rating: 4.9,
  reviewsCount: 2400,
  // Kendukona, Rangia, Assam
  mapEmbed:
    "https://www.google.com/maps?q=Kendukona+Rangia+Assam&output=embed",
  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
} as const;

export const DELIVERY_AREAS = ["SSB Camp", "Moranjana", "Kendukona"] as const;
export const BASE_DELIVERY_FEE = 30; // ₹ for first 2 km
export const BASE_DISTANCE_KM = 2;
export const EXTRA_PER_KM = 10; // ₹ per km beyond 2 km
export const FREE_DELIVERY_ABOVE = 500;


export const currency = (n: number) =>
  `₹${n.toLocaleString("en-IN")}`;
