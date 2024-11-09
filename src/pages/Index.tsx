import { motion } from "framer-motion";
import { 
  Stethoscope, Wallet, Salad, GraduationCap, Home, Car, 
  Shield, MessageSquare, Zap, Tv, Briefcase, Users
} from "lucide-react";
import PortfolioOptimizer from "@/components/PortfolioOptimizer";
import Logo from "@/components/Logo";

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
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Enhanced background effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-qblue/10 via-qdark to-qdark opacity-80" />
          <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-qdark to-transparent" />
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.1)_0%,transparent_50%)]" />
          
          {/* Enhanced Grid Pattern with Animation */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] animate-[pulse_4s_ease-in-out_infinite]" />
          
          {/* Animated Light Beams */}
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-qblue via-transparent to-transparent opacity-30 animate-pulse" />
          <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-qpink via-transparent to-transparent opacity-30 animate-pulse delay-300" />
          <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-qblue via-transparent to-transparent opacity-20 animate-pulse delay-500" />
          <div className="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-qpink via-transparent to-transparent opacity-20 animate-pulse delay-700" />
          
          {/* New Floating Particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-qblue/50 animate-float" />
          <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-qpink/50 animate-float delay-1000" />
          <div className="absolute top-1/2 left-3/4 w-2 h-2 rounded-full bg-qblue/50 animate-float delay-2000" />
          
          {/* New Circular Interface Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full border border-qblue/20 animate-[spin_10s_linear_infinite]" />
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full border border-qpink/20 animate-[spin_8s_linear_infinite_reverse]" />
          
          {/* New Scanning Lines */}
          <div className="absolute top-0 left-0 w-full h-screen bg-[linear-gradient(transparent_0%,rgba(0,240,255,0.05)_50%,transparent_100%)] animate-[moveY_3s_linear_infinite]" />
          
          {/* New Interface Lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-qblue/20 to-transparent animate-pulse" />
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-qpink/20 to-transparent animate-pulse delay-1000" />
        </div>
        
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

        {/* Enhanced Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-qblue to-transparent animate-pulse" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-qpink to-transparent opacity-20" />
        
        {/* Interface Circles */}
        <div className="absolute left-10 bottom-10 w-16 h-16 rounded-full border border-qblue/30 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-qblue/10 animate-ping" />
        </div>
        <div className="absolute right-10 top-10 w-16 h-16 rounded-full border border-qpink/30 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-qpink/10 animate-ping" />
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
        <div className="absolute inset-0">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,160,0.1)_0%,transparent_50%)]" />
        </div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink animate-glow">
              Essential Systems
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {lifeAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 hover:scale-105 transition-transform duration-300 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-qblue/10 to-qpink/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <div className={`${area.color} mb-6 relative`}>
                  <area.icon className="w-12 h-12 animate-glow" />
                  <div className="absolute -inset-2 bg-gradient-to-r from-qblue to-qpink opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-400">
                  {area.description}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;