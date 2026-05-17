import { createFileRoute } from "@tanstack/react-router";
import { CartProvider } from "@/lib/cart";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  component: Page,
});

function Page() {
  return (
    <CartProvider>
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Menu />
          <Services />
          <Gallery />
          <Reviews />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
        <WhatsAppButton />
      </div>
    </CartProvider>
  );
}
