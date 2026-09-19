import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import ForBusiness from "@/components/for-business";
import WhyChunitur from "@/components/why-chunitur";
import HowWeWork from "@/components/how-we-work";
import FinalCta from "@/components/final-cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <ForBusiness />
        <WhyChunitur />
        <HowWeWork />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}