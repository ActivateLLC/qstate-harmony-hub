import { LucideIcon, Film, Tv, Gamepad } from "lucide-react";
import { motion } from "framer-motion";

interface EntertainmentIconProps {
  Icon: LucideIcon;
  color: string;
}

const EntertainmentIcon = ({ Icon, color }: EntertainmentIconProps) => {
  const entertainmentIcons = [
    { icon: Film, delay: 0 },
    { icon: Tv, delay: 0.2 },
    { icon: Gamepad, delay: 0.4 },
  ];

  return (
    <div className="relative">
      <Icon className="w-12 h-12" />
      
      {/* Floating entertainment icons */}
      {entertainmentIcons.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
              x: [0, (index - 1) * 20],
              y: [-10, -20, -10],
            }}
            transition={{
              duration: 1.5,
              delay: item.delay,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute -top-2 left-1/2 transform -translate-x-1/2"
          >
            <IconComponent className={`w-6 h-6 ${color}`} />
          </motion.div>
        );
      })}

      {/* Glowing effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-qblue/20 to-qpink/20 rounded-full blur-sm" />
      </motion.div>
    </div>
  );
};

export default EntertainmentIcon;