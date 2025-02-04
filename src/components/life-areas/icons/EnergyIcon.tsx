import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface EnergyIconProps {
  Icon: LucideIcon;
  color: string;
}

const EnergyIcon = ({ Icon, color }: EnergyIconProps) => {
  return (
    <motion.div 
      className="relative"
      whileHover={{ 
        rotate: 360,
        transition: { 
          duration: 1, 
          ease: "easeInOut",
          repeat: 0,
          repeatType: "loop",
          repeatDelay: 0,
          stiffness: 0,
          damping: 0,
          restDelta: 0.001,
          restSpeed: 0.001,
          bounce: 0
        }
      }}
    >
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
    </motion.div>
  );
};

export default EnergyIcon;