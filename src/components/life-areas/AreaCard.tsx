import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import HealthcareIcon from "./icons/HealthcareIcon";
import BankingIcon from "./icons/BankingIcon";
import EducationIcon from "./icons/EducationIcon";
import SecurityIcon from "./icons/SecurityIcon";
import EnergyIcon from "./icons/EnergyIcon";

interface AreaCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  onClick: () => void;
}

const AreaCard = ({ title, description, icon: Icon, color, onClick }: AreaCardProps) => {
  const getIconAnimation = (title: string) => {
    switch (title) {
      case "Social Connection":
        return {
          x: [0, -20, 0],
          scale: [1, 1.2, 1],
          transition: {
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatType: "mirror" as const
          }
        };
      case "Transportation":
        return {
          x: [0, 100],
          scale: [1, 0.8],
          transition: {
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror" as const,
            repeatDelay: 0.5
          }
        };
      case "Communication":
        return {
          scale: [1, 1.2, 1],
          opacity: [1, 0.5, 1],
          transition: {
            duration: 1.5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatType: "mirror" as const
          }
        };
      case "Health & Nutrition":
        return {
          y: [0, -8, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1],
          transition: {
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatType: "mirror" as const
          }
        };
      case "Education":
        return {
          rotate: [-5, 5],
          y: [0, -5],
          transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror" as const
          }
        };
      case "Security":
        return {
          scale: [1, 1.1, 1],
          transition: {
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror" as const
          }
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
      className="glass-card p-8 hover:scale-105 transition-transform duration-300 relative group cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-qblue/10 to-qpink/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
      <motion.div 
        className={`${color} mb-6 relative`}
        whileHover={getIconAnimation(title)}
      >
        {title === "Healthcare" ? (
          <HealthcareIcon Icon={Icon} color={color} />
        ) : title === "Banking & Finance" ? (
          <BankingIcon Icon={Icon} />
        ) : title === "Education" ? (
          <EducationIcon Icon={Icon} color={color} />
        ) : title === "Security" ? (
          <SecurityIcon Icon={Icon} color={color} />
        ) : title === "Energy" ? (
          <EnergyIcon Icon={Icon} color={color} />
        ) : (
          <Icon className="w-12 h-12" />
        )}
      </motion.div>
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>
      <p className="text-gray-400">
        {description}
      </p>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.div>
  );
};

export default AreaCard;