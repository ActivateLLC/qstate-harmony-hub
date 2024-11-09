import { motion } from "framer-motion";

const HeroSection = () => {
  return (
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
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-qblue/50 animate-float" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-qpink/50 animate-float delay-1000" />
        <div className="absolute top-1/2 left-3/4 w-2 h-2 rounded-full bg-qblue/50 animate-float delay-2000" />
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
    </section>
  );
};

export default HeroSection;