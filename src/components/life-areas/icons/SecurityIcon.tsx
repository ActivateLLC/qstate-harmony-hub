import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SecurityIconProps {
  Icon: LucideIcon;
  color: string;
}

const SecurityIcon = ({ Icon, color }: SecurityIconProps) => {
  return (
    <div className="relative">
      <Icon className="w-12 h-12" />
      {/* Shield pulse effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className={`w-full h-full ${color} opacity-20 rounded-lg`} />
      </motion.div>
      
      {/* Security scan lines */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute w-full h-1 bg-gradient-to-r from-transparent via-qblue to-transparent"
          animate={{
            y: ["0%", "400%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Protective dots */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1.5 h-1.5 rounded-full bg-qpink"
          initial={{ 
            x: 0,
            y: 0,
            opacity: 0 
          }}
          animate={{
            x: [0, Math.cos(index * Math.PI * 2 / 3) * 20],
            y: [0, Math.sin(index * Math.PI * 2 / 3) * 20],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default SecurityIcon;