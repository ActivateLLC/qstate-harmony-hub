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