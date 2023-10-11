import Header from "@/components/Home/Header";
import FAQ from "@/components/Home/sections/FAQ";
import Hero from "@/components/Home/sections/Hero";
import Questions from "@/components/Home/sections/Questions";
import SectionDivider from "@/components/SectionDivider";
import SectionDivider2 from "@/components/SectionDivider2";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider />
      <Questions />
      <SectionDivider />
      <Header />
      <FAQ />
    </main>
  );
}
