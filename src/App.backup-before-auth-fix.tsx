import AuthDemo from "./auth/AuthDemo";
import MediaGalleryDemo from "./dashboard/MediaGalleryDemo";
import SeoAnalyticsDemo from "./dashboard/SeoAnalyticsDemo";
import PublishCenterDemo from "./dashboard/PublishCenterDemo";
import ProjectEditorDemo from "./dashboard/ProjectEditorDemo";
import ProjectDashboardDemo from "./dashboard/ProjectDashboardDemo";
import TemplateRegistryDemo from "./engine/renderer/TemplateRegistryDemo";
import LiveConfigEditorDemo from "./engine/renderer/LiveConfigEditorDemo";
import WebsiteEngineDemo from "./engine/renderer/WebsiteEngineDemo";
import WebsiteRenderer from "./engine/renderer/WebsiteRenderer";
import { restaurantConfig } from "./engine/data/restaurantConfig";
import MiniWebsiteBuilder from "./components/builder/MiniWebsiteBuilder";
import ThreeDepthScene from "./components/three/ThreeDepthScene";
import TemplateCommandGrid from "./components/premium/TemplateCommandGrid";
import ParallaxFeatureWall from "./components/premium/ParallaxFeatureWall";
import CinematicScrollStory from "./components/premium/CinematicScrollStory";
import PremiumPreviewSuite from "./components/premium/PremiumPreviewSuite";
import BuilderDashboardPreview from "./components/premium/BuilderDashboardPreview";
import { Aurora } from "./components/background/Aurora";
import { MouseGlow } from "./components/effects/MouseGlow";
import { Hero } from "./components/hero/Hero";
import Navbar from "./components/layout/Navbar";
import GradientOrbs from "./components/premium/effects/GradientOrbs";
import DeviceShowcase from "./components/premium/showcase/DeviceShowcase";
import InteractiveTemplateShowcase from "./components/premium/templates/InteractiveTemplateShowcase";
import ContactSection from "./components/sections/ContactSection";
import FAQSection from "./components/sections/FAQSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/sections/Footer";
import IndustriesGrid from "./components/sections/IndustriesGrid";
import LogoMarquee from "./components/sections/LogoMarquee";
import PricingSection from "./components/sections/PricingSection";
import ProcessSection from "./components/sections/ProcessSection";
import ServicesGrid from "./components/sections/ServicesGrid";
import TestimonialsSection from "./components/sections/TestimonialsSection";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050714] text-white">
      <GradientOrbs />
      <MouseGlow />
      <Aurora />
      <Navbar />
      <Hero />
      <LogoMarquee />
      <FeaturesSection />
      <DeviceShowcase />
      <PremiumPreviewSuite />
      <BuilderDashboardPreview />
      <CinematicScrollStory />
      <ParallaxFeatureWall />
      <TemplateCommandGrid />
      <ThreeDepthScene />
      <MiniWebsiteBuilder />
      <WebsiteRenderer config={restaurantConfig} />
      <WebsiteEngineDemo />
      <LiveConfigEditorDemo />
      <TemplateRegistryDemo />
      <ProjectDashboardDemo />
      <ProjectEditorDemo />
      <PublishCenterDemo />
      <SeoAnalyticsDemo />
      <MediaGalleryDemo />
      <AuthDemo />
      <ServicesGrid />
      <IndustriesGrid />
      <InteractiveTemplateShowcase />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}





















