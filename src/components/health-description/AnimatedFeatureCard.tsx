import { motion } from "framer-motion";
import { LucideIcon, CheckCircle2 } from "lucide-react";

interface AnimatedFeatureCardProps {
  title: string;
  icon: LucideIcon;
  items: string[];
  iconColor: "text-qblue" | "text-qpink";
}

const AnimatedFeatureCard = ({ title, icon: Icon, items = [], iconColor }: AnimatedFeatureCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="glass-card p-8 space-y-6"
    >
      <h2 className={`text-2xl font-bold ${iconColor} flex items-center gap-2`}>
        <Icon className="w-6 h-6 animate-float" />
        {title}
      </h2>
      <ul className="space-y-4 text-gray-300">
        {items?.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`flex-shrink-0`}
            >
              <CheckCircle2 className={`w-5 h-5 ${iconColor} animate-pulse`} />
            </motion.div>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default AnimatedFeatureCard;