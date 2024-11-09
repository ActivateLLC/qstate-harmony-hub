import { motion } from "framer-motion";
import { LucideIcon, Phone } from "lucide-react";

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
      default:
        return {}; // Return empty object instead of rotation animation
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
        {title === "Banking & Finance" ? (
          <div className="relative">
            <Icon className="w-12 h-12" />
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={`bitcoin-${index}`}
                initial={{ opacity: 0, scale: 0, y: 0 }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 1, 0.5],
                  y: [-10 * (index + 1), -30 * (index + 1)],
                  x: [index * 10 - 10, index * 20 - 20]
                }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="absolute -right-4 top-0"
              >
                <div className={`text-lg font-bold ${index % 2 === 0 ? 'text-qpink' : 'text-qblue'}`}>₿</div>
              </motion.div>
            ))}
            {[...Array(2)].map((_, index) => (
              <motion.div
                key={`phone-${index}`}
                initial={{ opacity: 0, scale: 0, y: 0 }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 1, 0.5],
                  y: [-10 * (index + 1), -25 * (index + 1)],
                  x: [index * 15 + 20, index * 25 + 30]
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.3,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="absolute left-0 top-0"
              >
                <Phone className={`w-6 h-6 ${index % 2 === 0 ? 'text-qblue' : 'text-qpink'}`} />
              </motion.div>
            ))}
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={`cash-${index}`}
                initial={{ opacity: 0, scale: 0, y: 0 }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 1, 0.5],
                  y: [-5 * (index + 1), -25 * (index + 1)],
                  x: [-index * 10 - 5, -index * 20 - 10]
                }}
                transition={{
                  duration: 1.8,
                  delay: index * 0.3,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="absolute -left-4 top-0"
              >
                <div className={`text-lg font-bold ${index % 2 === 0 ? 'text-qblue' : 'text-qpink'}`}>$</div>
              </motion.div>
            ))}
          </div>
        ) : (
          <Icon className="w-12 h-12" />
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