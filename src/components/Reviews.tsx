import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Rohan Mehta",
    initials: "RM",
    text: "The biryani is hands down the best in the area. Premium ambience and fast service. Felt like a fine-dining restaurant at dhaba prices.",
    rating: 5,
  },
  {
    name: "Simran Kaur",
    initials: "SK",
    text: "Family loved every dish. The paneer butter masala is divine and the gulab jamun melted in our mouths. Will be back next weekend!",
    rating: 5,
  },
  {
    name: "Ankit Sharma",
    initials: "AS",
    text: "Ordered on WhatsApp — confirmed in seconds, food arrived hot and packed beautifully. This place is going places.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    initials: "PV",
    text: "Beautiful interiors, warm staff, and the tandoori chicken is unreal. Best choice for family dinners and birthday celebrations.",
    rating: 5,
  },
];

export default function Reviews() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  const r = reviews[i];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-soft">Loved by Locals</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            Stories from our <span className="italic text-gradient-gold">guests</span>.
          </h2>
        </div>

        <div className="mt-14 max-w-3xl mx-auto">
          <div className="glass rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-ember/10 blur-3xl" />

            <div className="flex justify-center gap-1 text-gold relative">
              {Array.from({ length: r.rating }).map((_, k) => (
                <Star key={k} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <blockquote className="mt-6 font-display text-xl sm:text-2xl leading-relaxed relative">
              “{r.text}”
            </blockquote>
            <div className="mt-8 flex flex-col items-center gap-3 relative">
              <div className="h-14 w-14 rounded-full gradient-gold text-primary-foreground grid place-items-center font-display text-lg">
                {r.initials}
              </div>
              <div>
                <div className="font-medium">{r.name}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
                  Verified Google Review
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setI((p) => (p - 1 + reviews.length) % reviews.length)}
              className="h-11 w-11 rounded-full glass grid place-items-center hover-lift"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === k ? "w-8 gradient-gold" : "w-2 bg-border"
                  }`}
                  aria-label={`Go to review ${k + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((p) => (p + 1) % reviews.length)}
              className="h-11 w-11 rounded-full glass grid place-items-center hover-lift"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
