import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface EducationIconProps {
  Icon: LucideIcon;
  color: string;
}

const EducationIcon = ({ Icon, color }: EducationIconProps) => {
  return (
    <div className="relative">
      <Icon className="w-12 h-12" />
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={`book-${index}`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-5, -15],
            x: [index * 5 - 5, index * 10 - 10],
            rotate: [-15, 15],
          }}
          transition={{
            duration: 2,
            delay: index * 0.3,
            repeat: Infinity,
            repeatType: "mirror"
          }}
          className="absolute -top-1 left-1/2"
        >
          <div className={`w-3 h-4 rounded-sm ${index % 2 === 0 ? 'bg-qblue' : 'bg-qpink'} opacity-30`} />
        </motion.div>
      ))}
    </div>
  );
};

export default EducationIcon;