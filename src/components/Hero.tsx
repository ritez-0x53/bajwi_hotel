import { Star, Clock, Truck, Award } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { RESTAURANT } from "@/lib/config";
import { whatsappQuickUrl } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden grain">
      <img
        src={hero}
        alt="Bajwi Hotel signature dishes"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      <div className="relative container mx-auto px-5 pt-36 pb-20 min-h-[100svh] flex flex-col justify-center">
        <div className="max-w-2xl fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.25em] text-gold-soft">
            <Award className="h-3.5 w-3.5 text-gold" />
            No.1 Hotel in the Area
          </div>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
            Authentic Taste.
            <br />
            <span className="text-gradient-gold italic">Premium</span> Experience.
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Where the soul of a traditional Indian dhaba meets the elegance of
            fine dining. Crafted by master chefs, served with timeless hospitality.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full gradient-gold text-primary-foreground font-semibold hover-lift shadow-glow"
            >
              Order Now
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass hover-lift font-medium"
            >
              View Menu
            </a>
            <a
              href={whatsappQuickUrl("Hello, I would like to reserve a table.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-gold/40 hover:bg-gold/10 hover-lift font-medium"
            >
              Reserve Table
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
            <Stat icon={<Star className="h-4 w-4" />} label="Rating" value={`${RESTAURANT.rating} ★`} />
            <Stat icon={<Truck className="h-4 w-4" />} label="Delivery" value="Available" />
            <Stat icon={<Clock className="h-4 w-4" />} label="Open" value="Daily" />
            <Stat icon={<Award className="h-4 w-4" />} label="Years" value="25+" />
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground/70 hidden sm:flex flex-col items-center gap-2">
        Scroll
        <span className="block h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="glass rounded-2xl px-4 py-3">
      <div className="flex items-center gap-2 text-gold">{icon}<span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span></div>
      <div className="mt-1 font-display text-lg">{value}</div>
    </div>
  );
}
