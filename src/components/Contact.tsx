import { MapPin, Phone, Clock, MessageCircle, Instagram, Facebook, Youtube } from "lucide-react";
import { RESTAURANT } from "@/lib/config";
import { whatsappQuickUrl } from "@/lib/whatsapp";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-soft">Visit Us</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            Find your <span className="italic text-gradient-gold">seat</span> at the table.
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 rounded-3xl overflow-hidden glass min-h-[400px]">
            <iframe
              title="Bajwi Hotel location"
              src={RESTAURANT.mapEmbed}
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="lg:col-span-2 space-y-4">
            <Info icon={<MapPin />} label="Address" value={`${RESTAURANT.address}, ${RESTAURANT.city}`} />
            <Info icon={<Phone />} label="Phone" value={RESTAURANT.phoneDisplay} />
            <Info icon={<Clock />} label="Hours" value={RESTAURANT.hours} />

            <a
              href={whatsappQuickUrl()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 h-14 rounded-2xl gradient-gold text-primary-foreground font-semibold hover-lift shadow-glow"
            >
              <MessageCircle className="h-5 w-5" />
              Chat with us on WhatsApp
            </a>

            <div className="flex gap-3 pt-2">
              <Social href={RESTAURANT.social.instagram} label="Instagram"><Instagram className="h-4 w-4" /></Social>
              <Social href={RESTAURANT.social.facebook} label="Facebook"><Facebook className="h-4 w-4" /></Social>
              <Social href={RESTAURANT.social.youtube} label="YouTube"><Youtube className="h-4 w-4" /></Social>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-5 flex items-start gap-4 hover-lift">
      <div className="h-11 w-11 shrink-0 rounded-xl gradient-gold text-primary-foreground grid place-items-center">
        {icon}
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
        <div className="mt-1 font-medium">{value}</div>
      </div>
    </div>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="h-11 w-11 rounded-full glass grid place-items-center hover-lift hover:text-gold transition"
    >
      {children}
    </a>
  );
}
