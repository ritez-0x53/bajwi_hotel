import { useMemo, useState } from "react";
import { Plus, Search, Flame, Leaf, Drumstick } from "lucide-react";
import { CATEGORIES, MENU, type Category, type MenuItem } from "@/lib/menu";
import { useCart } from "@/lib/cart";
import { currency } from "@/lib/config";

export default function Menu() {
  const [active, setActive] = useState<Category | "All">("All");
  const [q, setQ] = useState("");
  const { add, open } = useCart();

  const items = useMemo(() => {
    return MENU.filter((m) => (active === "All" ? true : m.category === active))
      .filter((m) =>
        q.trim()
          ? (m.name + " " + m.description).toLowerCase().includes(q.toLowerCase())
          : true
      );
  }, [active, q]);

  const featured = MENU.filter((m) => m.featured).slice(0, 6);

  return (
    <section id="menu" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-soft">The Menu</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            Crafted with <span className="text-gradient-gold italic">passion</span>, served with pride.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From slow-cooked biryani to tandoor classics — every dish is a story.
          </p>
        </div>

        {/* Featured carousel */}
        <div className="mt-12">
          <div className="flex items-end justify-between mb-4">
            <h3 className="font-display text-xl">Today's Specials</h3>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Swipe →</span>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-5 px-5 pb-2 snap-x snap-mandatory">
            {featured.map((m) => (
              <FeaturedCard key={m.id} item={m} onAdd={() => { add(m); open(); }} />
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <Pill active={active === "All"} onClick={() => setActive("All")}>All</Pill>
            {CATEGORIES.map((c) => (
              <Pill key={c} active={active === c} onClick={() => setActive(c)}>{c}</Pill>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search dishes..."
              className="w-full glass rounded-full pl-10 pr-4 h-11 text-sm outline-none focus:border-gold transition"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((m, i) => (
            <MenuCard
              key={m.id}
              item={m}
              onAdd={() => { add(m); open(); }}
              delay={i * 40}
            />
          ))}
          {items.length === 0 && (
            <div className="col-span-full text-center text-muted-foreground py-16">
              No dishes match your search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 h-10 rounded-full text-sm transition-all border ${
        active
          ? "gradient-gold text-primary-foreground border-transparent shadow-glow"
          : "glass border-transparent hover:border-gold/40 text-foreground/80"
      }`}
    >
      {children}
    </button>
  );
}

function FeaturedCard({ item, onAdd }: { item: MenuItem; onAdd: () => void }) {
  return (
    <div className="snap-start shrink-0 w-[280px] sm:w-[320px] glass rounded-3xl overflow-hidden hover-lift">
      <div className="relative h-44">
        <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent" />
        {item.signature && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full gradient-gold text-primary-foreground text-[10px] font-bold uppercase tracking-wider">
            Signature
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="font-display text-lg leading-snug">{item.name}</h4>
            <div className="mt-1 text-gradient-gold font-semibold">{currency(item.price)}</div>
          </div>
          <button onClick={onAdd} className="h-10 w-10 rounded-full gradient-gold text-primary-foreground grid place-items-center hover-lift" aria-label={`Add ${item.name}`}>
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function MenuCard({ item, onAdd, delay }: { item: MenuItem; onAdd: () => void; delay: number }) {
  return (
    <article
      className="group relative glass rounded-3xl overflow-hidden hover-lift fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <VegBadge veg={item.veg} />
          {item.spice > 0 && <SpiceBadge level={item.spice} />}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-display text-lg leading-snug">{item.name}</h4>
          <div className="text-gradient-gold font-semibold whitespace-nowrap">{currency(item.price)}</div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{item.description}</p>
        <button
          onClick={onAdd}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 h-11 rounded-full glass border-gold/30 hover:gradient-gold hover:text-primary-foreground transition-all text-sm font-medium"
        >
          <Plus className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </article>
  );
}

function VegBadge({ veg }: { veg: boolean }) {
  return (
    <span
      className={`h-6 w-6 rounded-md grid place-items-center bg-background/80 backdrop-blur border ${
        veg ? "border-emerald-500/60 text-emerald-400" : "border-rose-500/60 text-rose-400"
      }`}
      title={veg ? "Vegetarian" : "Non-Vegetarian"}
    >
      {veg ? <Leaf className="h-3.5 w-3.5" /> : <Drumstick className="h-3.5 w-3.5" />}
    </span>
  );
}

function SpiceBadge({ level }: { level: number }) {
  return (
    <span className="px-2 h-6 rounded-md bg-background/80 backdrop-blur border border-ember/60 text-ember flex items-center gap-0.5" title={`Spice ${level}/3`}>
      {Array.from({ length: level }).map((_, i) => (
        <Flame key={i} className="h-3 w-3" />
      ))}
    </span>
  );
}
