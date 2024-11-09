import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed top-6 left-6 z-50 w-16 h-16 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-qblue to-qpink opacity-20 rounded-full animate-pulse" />
      <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-spin-slow" />
      <div className="absolute inset-2 border border-qblue/30 rounded-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 relative">
          {/* Inner geometric patterns */}
          <div className="absolute inset-0 rotate-45">
            <div className="absolute inset-2 border border-qpink/40" />
          </div>
          <div className="absolute inset-0 -rotate-45">
            <div className="absolute inset-2 border border-qblue/40" />
          </div>
          {/* Center emblem */}
          <div className="absolute inset-3 bg-gradient-to-br from-qblue/20 to-qpink/20 rounded-full backdrop-blur-sm" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink">
              Q
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Logo;