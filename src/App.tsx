import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { StatsStrip } from "./components/StatsStrip";
import { FreeTrust } from "./components/FreeTrust";
import { FeatureGrid } from "./components/FeatureGrid";
import { HowItWorks } from "./components/HowItWorks";
import { DesignReviewShowcase } from "./components/DesignReviewShowcase";
import { CalculatorsSection } from "./components/CalculatorsSection";
import { DiagramGuidesSection } from "./components/DiagramGuidesSection";
import { UseCases } from "./components/UseCases";
import { SystemsSection } from "./components/SystemsSection";
import { SimulatorSection } from "./components/SimulatorSection";
import { FaqSection } from "./components/FaqSection";
import { CtaBanner } from "./components/CtaBanner";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsStrip />
        <FreeTrust />
        <FeatureGrid />
        <HowItWorks />
        <DesignReviewShowcase />
        <CalculatorsSection />
        <DiagramGuidesSection />
        <UseCases />
        <SystemsSection />
        <SimulatorSection />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}