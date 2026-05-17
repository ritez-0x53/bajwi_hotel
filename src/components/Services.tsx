import { Utensils, Truck, Users, Cake, ChefHat, Trees, Car, Zap } from "lucide-react";

const services = [
  { icon: Utensils, title: "Dine-In", desc: "Elegant indoor seating with warm ambient lighting." },
  { icon: Truck, title: "Home Delivery", desc: "Hot and fresh, delivered to your door." },
  { icon: Users, title: "Family Hall", desc: "Spacious private hall for family gatherings." },
  { icon: Cake, title: "Birthday Parties", desc: "Tailor-made celebrations with custom menus." },
  { icon: ChefHat, title: "Catering", desc: "Full-service catering for weddings & events." },
  { icon: Trees, title: "Outdoor Seating", desc: "Open-air dining under the stars." },
  { icon: Car, title: "Ample Parking", desc: "Secure, spacious parking for all guests." },
  { icon: Zap, title: "Fast Service", desc: "Hot food in 15 minutes — promise." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-soft">What We Offer</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            More than a meal. <span className="italic text-gradient-gold">An experience.</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group glass rounded-3xl p-6 hover-lift fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="h-12 w-12 rounded-2xl gradient-gold text-primary-foreground grid place-items-center shadow-glow group-hover:scale-110 transition-transform">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
