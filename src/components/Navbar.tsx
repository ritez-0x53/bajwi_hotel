import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShoppingBag, Menu as MenuIcon, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { RESTAURANT } from "@/lib/config";
import aronai from "@/assets/aronai-pattern.png";
import logo from "@/assets/logo.jpeg"; // Add this line to import the logo image

function AronaiEdge({ side }: { side: "left" | "right" }) {
  const fade =
    side === "left"
      ? "linear-gradient(to right, black 30%, transparent 100%)"
      : "linear-gradient(to left, black 30%, transparent 100%)";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute top-0 bottom-0 ${
        side === "left" ? "left-0" : "right-0"
      } w-24 sm:w-40 lg:w-56 bg-repeat-x opacity-80`}
      style={{
        backgroundImage: `url(${aronai})`,
        backgroundSize: "auto 100%",
        backgroundPosition: side === "left" ? "left center" : "right center",
        maskImage: fade,
        WebkitMaskImage: fade,
      }}
    />
  );
}

const links = [
  { href: "#home", label: "Home" },
  // { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { count, open } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <AronaiEdge side="left" />
      <AronaiEdge side="right" />
      <nav className="container mx-auto px-5 flex items-center justify-between relative">
       <Link to="/" className="flex items-center gap-3 group">
  {/* Logo Image */}
  <div className="relative">
    <img
      src={logo} // replace with your actual logo path
      alt="Bajwi Hotel Logo"
      className="h-12 w-12 rounded-full object-cover border border-gold-soft/40 shadow-glow transition-transform duration-300 group-hover:scale-105"
    />
    
    {/* Optional glow effect */}
    <div className="absolute inset-0 rounded-full bg-gold/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>

  {/* Brand Text */}
  <div className="leading-tight">
    <div className="font-display text-xl tracking-wide text-white group-hover:text-gold-soft transition-colors duration-300">
      {RESTAURANT.name}
    </div>

    <div className="text-[10px] uppercase tracking-[0.25em] text-gold-soft">
      Since 2008
    </div>
  </div>
</Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-foreground/80 hover:text-gold transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 hover:after:w-full after:bg-gold after:transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={open}
            className="relative h-11 px-4 rounded-full glass hover-lift flex items-center gap-2 text-sm"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4 text-gold" />
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 h-5 min-w-5 px-1 rounded-full gradient-gold text-primary-foreground text-[11px] font-bold grid place-items-center scale-in">
                {count}
              </span>
            )}
          </button>
          <button
            className="lg:hidden h-11 w-11 rounded-full glass grid place-items-center"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden mx-5 mt-3 glass rounded-2xl p-4 fade-up">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 rounded-lg hover:bg-secondary/60 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
