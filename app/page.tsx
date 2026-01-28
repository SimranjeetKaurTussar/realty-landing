import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Listings } from "@/components/sections/Listings";
import { Highlights } from "@/components/sections/Highlights";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadAndContact } from "@/components/sections/LeadAndContact";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
  return (
    <main className="text-slate-900">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Listings />
      <Highlights />
      <Process />
      <Testimonials />
      <LeadAndContact />
      <Footer />
    </main>
  );
}
