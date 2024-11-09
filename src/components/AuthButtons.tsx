import { motion } from "framer-motion";
import { LogIn, UserPlus } from "lucide-react";

const AuthButtons = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-6 right-6 z-50 flex gap-4"
    >
      {/* Login Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="glass-card px-6 py-2 flex items-center gap-2 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-qblue/10 to-transparent group-hover:translate-x-full transition-transform duration-300" />
        <LogIn className="w-4 h-4 text-qblue" />
        <span className="text-white">Login</span>
      </motion.button>

      {/* Sign Up Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="glass-card px-6 py-2 flex items-center gap-2 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-qpink/10 to-transparent group-hover:translate-x-full transition-transform duration-300" />
        <UserPlus className="w-4 h-4 text-qpink" />
        <span className="text-white">Sign Up</span>
      </motion.button>
    </motion.div>
  );
};

export default AuthButtons;