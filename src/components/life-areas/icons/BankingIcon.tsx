import { motion } from "framer-motion";
import { LucideIcon, Smartphone } from "lucide-react";

interface BankingIconProps {
  Icon: LucideIcon;
}

const BankingIcon = ({ Icon }: BankingIconProps) => {
  return (
    <div className="relative group">
      <Icon className="w-12 h-12" />
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="absolute -right-6 top-3"
      >
        <Smartphone className="w-8 h-8 text-qblue transition-colors duration-300 group-hover:text-qpink" />
      </motion.div>
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={`bitcoin-${index}`}
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
            y: [-10 * (index + 1), -30 * (index + 1)],
            x: [index * 10 - 10, index * 20 - 20],
          }}
          transition={{
            duration: 1.5,
            delay: index * 0.2,
            repeat: Infinity,
            repeatDelay: 0.5
          }}
          className="absolute -right-4 top-0 opacity-0 group-hover:animate-money"
        >
          <div className={`text-lg font-bold ${index % 2 === 0 ? 'text-qpink' : 'text-qblue'}`}>₿</div>
        </motion.div>
      ))}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={`cash-${index}`}
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
            y: [-5 * (index + 1), -25 * (index + 1)],
            x: [-index * 10 - 5, -index * 20 - 10],
          }}
          transition={{
            duration: 1.8,
            delay: index * 0.3,
            repeat: Infinity,
            repeatDelay: 0.5
          }}
          className="absolute -left-4 top-0 opacity-0 group-hover:animate-money"
        >
          <div className={`text-lg font-bold ${index % 2 === 0 ? 'text-qblue' : 'text-qpink'}`}>$</div>
        </motion.div>
      ))}
    </div>
  );
};

export default BankingIcon;