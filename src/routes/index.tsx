import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Programs } from "@/components/site/Programs";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Stats } from "@/components/site/Stats";
import { CtaSection } from "@/components/site/CtaSection";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PRIMEVA — Professional Virtual Assistant Academy" },
      { name: "description", content: "Industry-ready training, mentorship and placement support to launch your remote career as a professional virtual assistant in 90 days." },
      { property: "og:title", content: "PRIMEVA — Professional Virtual Assistant Academy" },
      { property: "og:description", content: "Launch your career as a professional virtual assistant. Six specialist tracks. 94% placement rate." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Programs />
        <WhyUs />
        <Testimonials />
        <Stats />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
