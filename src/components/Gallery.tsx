import { useState } from "react";
import { X } from "lucide-react";
import biryani from "@/assets/biryani.jpg";
import tandoori from "@/assets/tandoori.jpg";
import paneer from "@/assets/paneer.jpg";
import noodles from "@/assets/noodles.jpg";
import dessert from "@/assets/dessert.jpg";
import chai from "@/assets/chai.jpg";
import snacks from "@/assets/snacks.jpg";
import interior from "@/assets/interior.jpg";
import chef from "@/assets/about-chef.jpg";

const images = [
  { src: biryani, alt: "Biryani", h: "row-span-2" },
  { src: interior, alt: "Restaurant interior", h: "" },
  { src: tandoori, alt: "Tandoori", h: "" },
  { src: paneer, alt: "Paneer", h: "" },
  { src: chef, alt: "Chef plating", h: "row-span-2" },
  { src: dessert, alt: "Dessert", h: "" },
  { src: noodles, alt: "Noodles", h: "" },
  { src: snacks, alt: "Snacks", h: "" },
  { src: chai, alt: "Masala chai", h: "" },
];

export default function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-soft">Moments</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            A taste of our <span className="italic text-gradient-gold">world</span>.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {images.map((img) => (
            <button
              key={img.alt}
              onClick={() => setOpen(img.src)}
              className={`relative overflow-hidden rounded-2xl group ${img.h}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              <div className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.2em] text-gold-soft opacity-0 group-hover:opacity-100 transition">
                {img.alt}
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[80] bg-background/90 backdrop-blur-md grid place-items-center p-5 fade-up"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute top-5 right-5 h-11 w-11 rounded-full glass grid place-items-center"
            onClick={() => setOpen(null)}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img src={open} alt="" className="max-h-[85vh] max-w-full rounded-2xl shadow-card" />
        </div>
      )}
    </section>
  );
}
