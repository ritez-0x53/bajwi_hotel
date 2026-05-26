import { createFileRoute } from "@tanstack/react-router";
import { CartProvider } from "@/lib/cart";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";


export const Route = createFileRoute("/")({
  component: Page,
});

function Page() {
  return (
    <CartProvider>
      <SEO />
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <Menu />
          <Services />
          <Gallery />
          <Reviews />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
        
      </div>
    </CartProvider>
  );
}
