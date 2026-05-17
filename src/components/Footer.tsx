import { MessageCircle } from "lucide-react";
import { RESTAURANT } from "@/lib/config";
import { whatsappQuickUrl } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 border-t border-border/40">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full gradient-gold grid place-items-center font-display text-primary-foreground text-xl font-bold shadow-glow">B</div>
              <div>
                <div className="font-display text-2xl">{RESTAURANT.name}</div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-gold-soft">{RESTAURANT.tagline}</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-md">
              The No.1 hotel in the area — a premium dhaba experience that
              blends generations of recipes with modern hospitality.
            </p>
            <a
              href={whatsappQuickUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-gold text-primary-foreground font-semibold hover-lift shadow-glow"
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-soft">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["#about", "About"],
                ["#menu", "Menu"],
                ["#services", "Services"],
                ["#gallery", "Gallery"],
                ["#contact", "Contact"],
              ].map(([h, l]) => (
                <li key={h}><a href={h} className="text-muted-foreground hover:text-gold transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-soft">Visit</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>{RESTAURANT.address}</li>
              <li>{RESTAURANT.city}</li>
              <li>{RESTAURANT.phoneDisplay}</li>
              <li>{RESTAURANT.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} {RESTAURANT.name}. Crafted with care.</div>
          <div>Authentic Taste. Premium Experience.</div>
        </div>
      </div>
    </footer>
  );
}
