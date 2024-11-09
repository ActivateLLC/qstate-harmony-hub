import PortfolioOptimizer from "@/components/PortfolioOptimizer";
import Logo from "@/components/Logo";
import AuthButtons from "@/components/AuthButtons";
import HeroSection from "@/components/HeroSection";
import LifeAreasGrid from "@/components/LifeAreasGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-qdark">
      <Logo />
      <AuthButtons />
      <HeroSection />
      <PortfolioOptimizer />
      <LifeAreasGrid />
    </div>
  );
};

export default Index;