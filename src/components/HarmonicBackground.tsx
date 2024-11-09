import { motion } from "framer-motion";

const HarmonicBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Peaceful gradient waves */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,160,0.08)_0%,transparent_50%)]"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Harmonious floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Peaceful pulse rings */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-qpink/10"
            animate={{
              scale: [1, 2],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 1.3,
            }}
            style={{
              width: '200px',
              height: '200px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HarmonicBackground;