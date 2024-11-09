import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface WorkCareerIconProps {
  Icon: LucideIcon;
  color: string;
}

const WorkCareerIcon = ({ Icon, color }: WorkCareerIconProps) => {
  // Small floating elements to represent career growth
  const floatingElements = [
    { delay: 0, x: -20, y: -20 },
    { delay: 0.5, x: 20, y: -15 },
    { delay: 1, x: 15, y: 20 },
  ];

  return (
    <motion.div
      className="relative w-12 h-12 flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Main briefcase icon */}
      <Icon className="w-12 h-12 relative z-10" />

      {/* Floating career elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute w-2 h-2 ${color} opacity-70`}
          style={{
            borderRadius: "50%",
          }}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: element.x,
            y: element.y,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Success indicator */}
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  );
};

export default WorkCareerIcon;