import { motion } from "framer-motion";
import PortfolioOptimizer from "@/components/PortfolioOptimizer";
import Logo from "@/components/Logo";
import AuthButtons from "@/components/AuthButtons";
import LifeAreas from "@/components/LifeAreas";

const Index = () => {
  return (
    <div className="min-h-screen bg-qdark">
      <Logo />
      <AuthButtons />
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

      {/* Summary Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink">
                Magical. Revolutionary. Life-changing.
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Quantum computing meets everyday essentials. We've reimagined life's fundamentals through 
              the perfect fusion of quantum intelligence, secure blockchain, and adaptive AI. 
              Simple yet profound. Innovative yet familiar.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="p-6 glass-card backdrop-blur-xl">
                <h3 className="text-qblue font-semibold text-lg mb-2">Quantum Precision</h3>
                <p className="text-gray-300">Delivering life essentials with unprecedented accuracy</p>
              </div>
              <div className="p-6 glass-card backdrop-blur-xl">
                <h3 className="text-qpink font-semibold text-lg mb-2">Blockchain Trust</h3>
                <p className="text-gray-300">Unbreakable security for your digital existence</p>
              </div>
              <div className="p-6 glass-card backdrop-blur-xl">
                <h3 className="text-qblue font-semibold text-lg mb-2">AI Harmony</h3>
                <p className="text-gray-300">Adaptive intelligence that understands you</p>
              </div>
            </div>
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
      <LifeAreas />
    </div>
  );
};

export default Index;
