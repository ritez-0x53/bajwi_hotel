// Restaurant configuration. Update these once and they apply everywhere.
export const RESTAURANT = {
  name: "Bajwi Hotel",
  tagline: "Authentic Taste. Premium Experience.",
  // Update with the real WhatsApp number including country code (no +, no spaces)
  whatsappNumber: "919876543210",
  phoneDisplay: "+91 98765 43210",
  address: "Main Highway Road, Near City Center",
  city: "Your City",
  hours: "11:00 AM – 11:30 PM • Open All Days",
  rating: 4.9,
  reviewsCount: 2400,
  mapEmbed:
    "https://www.google.com/maps?q=restaurant&output=embed",
  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
} as const;

export const currency = (n: number) =>
  `₹${n.toLocaleString("en-IN")}`;
