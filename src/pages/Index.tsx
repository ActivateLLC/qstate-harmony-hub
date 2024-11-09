import { motion } from "framer-motion";
import { 
  Stethoscope, Wallet, Salad, GraduationCap, Home, Car, 
  Shield, MessageSquare, Zap, Tv, Briefcase, Users
} from "lucide-react";
import PortfolioOptimizer from "@/components/PortfolioOptimizer";
import Logo from "@/components/Logo";
import AuthButtons from "@/components/AuthButtons";
import HarmonicBackground from "@/components/HarmonicBackground";
import { LifeAreaCard } from "@/components/LifeAreaCard";

const lifeAreas = [
  { 
    title: "Healthcare", 
    icon: Stethoscope, 
    color: "text-qblue",
    description: "Revolutionary quantum-powered health monitoring that adapts to your unique wellness journey"
  },
  { 
    title: "Banking & Finance", 
    icon: Wallet, 
    color: "text-qpink",
    description: "Seamlessly integrated financial solutions that transform how you interact with wealth"
  },
  { 
    title: "Health & Nutrition", 
    icon: Salad, 
    color: "text-qblue",
    description: "Personalized nutrition intelligence that elevates your daily wellness experience"
  },
  { 
    title: "Education", 
    icon: GraduationCap, 
    color: "text-qpink",
    description: "Immersive learning experiences that unlock your full potential"
  },
  { 
    title: "Housing", 
    icon: Home, 
    color: "text-qblue",
    description: "Intelligent living spaces that respond intuitively to your lifestyle"
  },
  { 
    title: "Transportation", 
    icon: Car, 
    color: "text-qpink",
    description: "Effortless mobility solutions that redefine your journey experience"
  },
  { 
    title: "Security", 
    icon: Shield, 
    color: "text-qblue",
    description: "Advanced protection systems that seamlessly safeguard your digital life"
  },
  { 
    title: "Communication", 
    icon: MessageSquare, 
    color: "text-qpink",
    description: "Breakthrough connectivity that brings people closer in profound new ways"
  },
  { 
    title: "Energy", 
    icon: Zap, 
    color: "text-qblue",
    description: "Sustainable power solutions that harmoniously energize your world"
  },
  { 
    title: "Entertainment", 
    icon: Tv, 
    color: "text-qpink",
    description: "Extraordinary experiences that transport you to new realms of delight"
  },
  { 
    title: "Work & Career", 
    icon: Briefcase, 
    color: "text-qblue",
    description: "Innovative workspace solutions that elevate your professional journey"
  },
  { 
    title: "Social Connection", 
    icon: Users, 
    color: "text-qpink",
    description: "Meaningful interactions that create lasting bonds in remarkable ways"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-qdark">
      <Logo />
      <AuthButtons />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HarmonicBackground />
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-qblue via-white to-qpink animate-glow">
                Activate Qstate
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Enter the future of automated living. Experience the world's first quantum-powered state.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Optimizer Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <PortfolioOptimizer />
        </div>
      </section>

      {/* Life Areas Grid */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink animate-glow">
              Essential Systems
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {lifeAreas.map((area, index) => (
              <LifeAreaCard key={area.title} area={area} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
