import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface HealthcareIconProps {
  Icon: LucideIcon;
  color: string;
}

const HealthcareIcon = ({ Icon, color }: HealthcareIconProps) => {
  return (
    <div className="relative">
      <Icon className="w-12 h-12" />
      <motion.div
        initial={false}
        whileHover={{
          opacity: [0, 1, 0],
          scale: [0.8, 1.2, 1.5],
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }
        }}
        className="absolute inset-0 border-4 border-qblue rounded-full"
      />
      <motion.div
        initial={false}
        whileHover={{
          opacity: [0, 0.5, 0],
          scale: [1, 1.5, 2],
          transition: {
            duration: 2,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "loop",
          }
        }}
        className="absolute inset-0 border-2 border-qpink rounded-full"
      />
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={`pulse-${index}`}
          initial={false}
          whileHover={{
            opacity: [0, 0.3, 0],
            y: [-5, -15],
            x: [index * 5 - 5, index * 10 - 10],
            transition: {
              duration: 1.5,
              delay: index * 0.3,
              repeat: Infinity,
              repeatType: "loop",
            }
          }}
          className="absolute -top-1 left-1/2"
        >
          <div className={`w-1 h-1 rounded-full ${index % 2 === 0 ? 'bg-qblue' : 'bg-qpink'}`} />
        </motion.div>
      ))}
    </div>
  );
};

export default HealthcareIcon;