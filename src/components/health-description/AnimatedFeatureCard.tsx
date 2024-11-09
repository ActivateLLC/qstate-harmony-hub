import { motion } from "framer-motion";
import { Brain, LucideIcon } from "lucide-react";

interface AnimatedFeatureCardProps {
  title: string;
  description: string;
  delay: number;
}

const AnimatedFeatureCard = ({ title, description, delay }: AnimatedFeatureCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="glass-card p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold text-qblue flex items-center gap-2">
        <Brain className="w-6 h-6 animate-float" />
        {title}
      </h2>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default AnimatedFeatureCard;