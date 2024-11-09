import { motion } from "framer-motion";
import PortfolioOptimizer from "@/components/PortfolioOptimizer";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const Index = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0">
        {/* Gradient Overlays */}
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-qdark to-transparent" />
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.1)_0%,transparent_50%)]" />
        
        {/* SVG Background Animation */}
        <BackgroundAnimation />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-20 pb-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink mb-4 glow-text">
            Quantum Portfolio
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-400 max-w-2xl mx-auto">
            Harness the power of quantum computing to optimize your investment portfolio
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <PortfolioOptimizer />
        </motion.div>
      </div>
    </div>
  );
};

export default Index;