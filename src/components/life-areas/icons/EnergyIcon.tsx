import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface EnergyIconProps {
  Icon: LucideIcon;
  color: string;
}

const EnergyIcon = ({ Icon, color }: EnergyIconProps) => {
  return (
    <div className="relative">
      <Icon className="w-12 h-12" />
      
      {/* Central energy pulse */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className={`w-full h-full ${color} opacity-30`} />
      </motion.div>

      {/* Energy particles */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          className={`absolute w-1 h-1 ${index % 2 === 0 ? 'bg-qblue' : 'bg-qpink'}`}
          initial={{ 
            x: 0,
            y: 0,
            scale: 0,
            opacity: 0 
          }}
          animate={{
            x: [0, Math.cos(index * Math.PI / 3) * 15],
            y: [0, Math.sin(index * Math.PI / 3) * 15],
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Lightning effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 0.8,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-qblue/30 to-qpink/30" />
      </motion.div>
    </div>
  );
};

export default EnergyIcon;