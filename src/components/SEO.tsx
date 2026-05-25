import { Helmet } from "react-helmet-async";
import { RESTAURANT } from "@/lib/config";

export default function SEO() {
  const title =
    "No.1 Bajwi Hotel — Best Restaurant & Dhaba in Kendukona, Rangia | Order Online";
  const description =
    "No.1 Bajwi Hotel — the best restaurant and dhaba in Kendukona, Rangia. Authentic biryani, tandoori, Chinese, thali & more. Order online on WhatsApp for pickup or home delivery. Family hall, dine-in & catering.";
  const url = "https://bajwihotel.com/";
  const image = `${url}og-image.jpg`;
  const keywords = [
    "Bajwi Hotel",
    "No 1 Bajwi Hotel",
    "best restaurant Rangia",
    "best hotel Rangia",
    "best dhaba Kendukona",
    "restaurant Kendukona",
    "restaurant near me Rangia",
    "biryani Rangia",
    "tandoori Rangia",
    "online food order Rangia",
    "food delivery Rangia",
    "food delivery Kendukona",
    "veg restaurant Rangia",
    "non veg restaurant Rangia",
    "family restaurant Rangia",
    "Kamrup restaurant",
    "Assam dhaba",
    "Rangia restaurant",
  ].join(", ");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: RESTAURANT.name,
    alternateName: "Bajwi Hotel",
    description,
    image,
    "@id": url,
    url,
    telephone: RESTAURANT.phoneDisplay,
    priceRange: "₹₹",
    servesCuisine: ["Indian", "Mughlai", "Chinese", "Tandoori", "Biryani", "Assamese"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kendukona",
      addressLocality: "Rangia",
      addressRegion: "Assam",
      postalCode: "781354",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.4541,
      longitude: 91.6196,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "23:30",
      },
    ],
    acceptsReservations: "True",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(RESTAURANT.rating),
      reviewCount: String(RESTAURANT.reviewsCount),
    },
    hasMenu: `${url}#menu`,
    sameAs: [
      RESTAURANT.social.instagram,
      RESTAURANT.social.facebook,
      RESTAURANT.social.youtube,
    ].filter((s) => s && s !== "#"),
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={RESTAURANT.name} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="geo.region" content="IN-AS" />
      <meta name="geo.placename" content="Kendukona, Rangia, Assam" />
      <meta name="geo.position" content="26.4541;91.6196" />
      <meta name="ICBM" content="26.4541, 91.6196" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="restaurant.restaurant" />
      <meta property="og:site_name" content={RESTAURANT.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Theme */}
      <meta name="theme-color" content="#0a0a0a" />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
