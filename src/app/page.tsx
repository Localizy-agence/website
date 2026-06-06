import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Reviews from "@/components/sections/Reviews";
import Services from "@/components/sections/Services";
import Realisations from "@/components/sections/Realisations";
import Pourquoi from "@/components/sections/Pourquoi";
import Stats from "@/components/sections/Stats";
import LinkedIn from "@/components/sections/LinkedIn";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div
      className="max-w-[1280px] mx-auto"
      style={{ padding: "16px 28px 80px" }}
    >
      <Header />
      <Hero />
      <Reviews />
      <Services />
      <Realisations />
      <Pourquoi />
      <Stats />
      <LinkedIn />
      <FinalCTA />
      <Footer />
    </div>
  );
}
