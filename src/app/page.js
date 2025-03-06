import Header from "./components/Header";
import WelcomeSection from "./components/WelcomeSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BrandsSection from "./components/BrandsSection";
import AdvantagesSection from "./components/AdvantagesSection";
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Schema from "./components/Schema";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Schema />
      <Header />
      <main className="flex flex-col items-center" itemScope itemType="https://schema.org/WebPage">
        <div className="w-full">
          <WelcomeSection />
        </div>
        <div className="w-full">
          <ServicesSection />
        </div>
        <div className="w-full">
          <AboutSection />
        </div>
        <div className="w-full">
          <TestimonialsSection />
        </div>
        <div className="w-full">
          <BrandsSection />
        </div>
        <div className="w-full">
          <AdvantagesSection />
        </div>
        <div className="w-full">
          <FAQSection />
        </div>
        <div className="w-full">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
