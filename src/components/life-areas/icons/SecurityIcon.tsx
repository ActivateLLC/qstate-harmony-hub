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
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ opacity: 0, scale: 1 }}
        animate={{
          opacity: [0, 0.2, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <div className={`w-full h-full ${color} opacity-30 rounded-full`} />
      </motion.div>
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={`lock-${index}`}
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            rotate: [0, 90 * index],
            x: [0, Math.cos(index * Math.PI / 2) * 20],
            y: [0, Math.sin(index * Math.PI / 2) * 20],
          }}
          transition={{
            duration: 1.5,
            delay: index * 0.2,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        >
          <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-qblue' : 'bg-qpink'} opacity-30`} />
        </motion.div>
      ))}
    </div>
  );
};

export default SecurityIcon;