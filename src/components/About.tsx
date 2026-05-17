import chef from "@/assets/about-chef.jpg";
import interior from "@/assets/interior.jpg";

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-5 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
            <img
              src={chef}
              alt="Chef plating signature dish at Bajwi Hotel"
              loading="lazy"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden md:block absolute -bottom-10 -right-6 w-2/3 aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-gold/20">
            <img
              src={interior}
              alt="Bajwi Hotel restaurant interior"
              loading="lazy"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -top-6 -left-6 glass rounded-2xl px-5 py-4 shadow-glow">
            <div className="font-display text-3xl text-gradient-gold">25+</div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Years of Legacy</div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-soft">Our Story</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-tight">
            Where the <span className="text-gradient-gold italic">dhaba</span> meets fine dining.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            For over two decades, Bajwi Hotel has been the heart of the highway —
            a place where travellers, families and food-lovers gather around
            generous plates of slow-cooked biryani, tandoor classics and the
            warmth of true Punjabi hospitality.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Today, we honour that legacy with a modern, hygienic, family-friendly
            space — and the same recipes our chefs have perfected for generations.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <Counter value="2.4K+" label="Happy Guests / mo" />
            <Counter value="50+" label="Signature Dishes" />
            <Counter value="4.9★" label="Google Rating" />
          </div>

          <ul className="mt-10 space-y-3 text-sm">
            {[
              "Hand-picked ingredients, ground daily.",
              "Traditional clay tandoor & copper handi cooking.",
              "Spotless kitchen — hygiene-first kitchen practices.",
              "Family hall, outdoor seating & private parties.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-gold shrink-0" />
                <span className="text-foreground/85">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Counter({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass rounded-2xl p-4 text-center hover-lift">
      <div className="font-display text-2xl text-gradient-gold">{value}</div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
    </div>
  );
}
