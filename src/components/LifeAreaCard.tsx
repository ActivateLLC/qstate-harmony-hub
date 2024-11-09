import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface LifeAreaCardProps {
  area: {
    title: string;
    icon: LucideIcon;
    color: string;
    description: string;
  };
  index: number;
}

export const LifeAreaCard = ({ area, index }: LifeAreaCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-8 hover:scale-105 transition-transform duration-300 relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-qblue/10 to-qpink/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
      <div className={`${area.color} mb-6 relative`}>
        <area.icon className="w-12 h-12 animate-glow" />
        <div className="absolute -inset-2 bg-gradient-to-r from-qblue to-qpink opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
      <p className="text-gray-400">
        {area.description}
      </p>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.div>
  );
};