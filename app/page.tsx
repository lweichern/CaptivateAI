import FAQ from "@/components/Home/sections/FAQ";
import Hero from "@/components/Home/sections/Hero";
import Questions from "@/components/Home/sections/Questions";
import SectionDivider from "@/components/SectionDivider";
import SectionDivider2 from "@/components/SectionDivider2";
import Pricing from "@/components/Home/sections/Pricing";

export default function Home() {
  return (
    <main className="font-primary">
      <Hero />
      <SectionDivider />
      <Questions />
      <SectionDivider />
      <Pricing />
      <SectionDivider />
      <FAQ />
    </main>
  );
}
