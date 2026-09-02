import { HeroSection } from "../../components/organisms/HeroSection/HeroSection.jsx";
import { AboutSummary } from "../../components/organisms/AboutSummary/AboutSummary.jsx";
import { FeaturedProjects } from "../../components/organisms/FeaturedProjects/FeaturedProjects.jsx";
import { CtaSection } from "../../components/organisms/CtaSection/CtaSection.jsx";

export function HomePage() {
  return (
    <div className="-mx-6 md:-mx-8 -my-16 md:-my-24">
      <HeroSection />
      <AboutSummary />
      <FeaturedProjects />
      <CtaSection />
    </div>
  );
}
