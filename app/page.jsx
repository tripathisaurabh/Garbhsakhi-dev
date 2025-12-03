// app/page.js or pages/index.js
import GarbhSakhiHero from "@/components/GarbhSakhiHero";
import Features from "@/components/features";
import HowItWorks from '@/components/howitworks';
import Pricing from "@/components/pricing";
import Testimonials from '@/components/testimonials';
import WhyUs from "@/components/whyUs";
import Footer from '@/components/footer';


export default function Page() {
  return (
    <main className="space-y-3 md:space-y-0">

      <GarbhSakhiHero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <WhyUs />
      <Footer />
    </main>
  );
}