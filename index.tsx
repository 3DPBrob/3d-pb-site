import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import DivisionSection from "@/components/DivisionSection";
import DodPortal from "@/components/DodPortal";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

import residentialImg from "@/assets/residential.jpg";
import commercialImg from "@/assets/commercial.jpg";
import marineImg from "@/assets/marine.jpg";
import defenseImg from "@/assets/defense.jpg";
import femaImg from "@/assets/fema.jpg";

type ActiveView = "hero" | "residential" | "commercial" | "marine" | "defense" | "fema" | "portal" | "contact";

const divisions = {
  residential: {
    title: "Residential Division",
    description:
      "3D-PB residential systems produce beautiful modern homes using advanced concrete printing technology. Using 7,300 PSI structural concrete, our homes are stronger than traditional block construction while dramatically reducing build time and labor costs. Curved walls, organic structures and unlimited design freedom allow the next generation of architectural housing.",
    image: residentialImg,
    stats: [
      { value: "7300 PSI", label: "Structural Concrete" },
      { value: "3-4", label: "Crew Size" },
      { value: "250+ MPH", label: "Storm Resistant" },
    ],
  },
  commercial: {
    title: "Commercial Division",
    description:
      "Our commercial printing systems allow rapid construction of offices, commercial buildings, infrastructure walls and industrial structures. Using the same 7,300 PSI structural mix, 3D-PB systems dramatically reduce construction timelines while enabling advanced architectural forms.",
    image: commercialImg,
  },
  marine: {
    title: "Marine Division",
    description:
      "The 3D-PB Marine division develops advanced reef and shoreline protection systems using DARPA-approved pH balanced marine concrete. These structures encourage marine life growth while also reducing coastal erosion and storm surge energy.",
    image: marineImg,
    stats: [
      { value: "DARPA", label: "Approved Technology" },
      { value: "Eco Safe", label: "Marine Friendly" },
    ],
  },
  defense: {
    title: "Defense / Infrastructure",
    description:
      "3D-PB develops hardened infrastructure systems for national security applications. Using 13,000 PSI military grade concrete, our systems can construct highly durable structures including border infrastructure, secure facilities and hardened installations.",
    image: defenseImg,
    stats: [
      { value: "13,000 PSI", label: "Military Grade Concrete" },
      { value: "Autonomous", label: "Drone Surveillance" },
    ],
  },
  fema: {
    title: "FEMA Rapid Deployment",
    description:
      "3D-PB rapid construction systems allow disaster response teams to deploy durable housing and infrastructure rapidly following major disasters. Both 7300 PSI and 13,000 PSI concrete mixes are available depending on structural requirements.",
    image: femaImg,
  },
};

const Index = () => {
  const [activeView, setActiveView] = useState<ActiveView>("hero");

  const handleNavigate = (section: string) => {
    setActiveView(section as ActiveView);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader onNavigate={handleNavigate} onHome={() => setActiveView("hero")} />

      {activeView === "hero" && (
        <HeroSection onExplore={() => handleNavigate("residential")} />
      )}

      {activeView !== "hero" && activeView !== "portal" && divisions[activeView] && (
        <DivisionSection {...divisions[activeView]} />
      )}

      {activeView === "portal" && <DodPortal />}
      {activeView === "contact" && <ContactSection />}

      <SiteFooter />
    </div>
  );
};

export default Index;
