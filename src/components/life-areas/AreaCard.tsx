import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

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
            repeat: Infinity
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
            repeatType: "mirror"
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
            repeatType: "mirror"
          }
        };
      default:
        return { 
          rotate: 180, 
          transition: { 
            duration: 0.8, 
            ease: "easeInOut" 
          } 
        };
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
        {title === "Housing" ? (
          <div className="relative">
            <Icon className="w-12 h-12 animate-glow" />
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 10, y: 5 }}
              whileHover={{ 
                opacity: 1, 
                scale: 0.8,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              className="absolute -right-4 top-0"
            >
              <Icon className="w-8 h-8 animate-glow" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: -10, y: 8 }}
              whileHover={{ 
                opacity: 1, 
                scale: 0.6,
                transition: {
                  duration: 0.3,
                  delay: 0.15,
                  ease: "easeOut"
                }
              }}
              className="absolute -left-4 bottom-0"
            >
              <Icon className="w-6 h-6 animate-glow" />
            </motion.div>
          </div>
        ) : (
          <Icon className="w-12 h-12 animate-glow" />
        )}
        <div className="absolute -inset-2 bg-gradient-to-r from-qblue to-qpink opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity" />
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