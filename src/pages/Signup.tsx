import { motion } from "framer-motion";
import { ArrowLeft, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { SignupForm } from "@/components/auth/SignupForm";
import { SocialButtons } from "@/components/auth/SocialButtons";

const Signup = () => {
  return (
    <div className="min-h-screen bg-qdark flex items-center justify-center p-4 relative overflow-hidden">
      {/* Enhanced grid background with glowing lines */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-qpink/5 to-transparent animate-pulse" />
      </div>

      {/* Floating light effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-20 bg-gradient-to-b from-qpink to-transparent animate-moveY"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.5,
            }}
          />
        ))}
      </div>

      <Link 
        to="/login" 
        className="fixed top-8 left-8 glass-card p-3 hover:scale-105 transition-transform group z-50"
      >
        <ArrowLeft className="w-6 h-6 text-white group-hover:text-qpink transition-colors" />
      </Link>

      {/* Main signup card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card w-full max-w-md p-8 space-y-8 relative"
      >
        {/* Enhanced glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-qpink/20 to-qblue/20 blur-xl opacity-50" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />
        <div className="absolute inset-0 border border-white/10 rounded-xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-qpink/10 to-qblue/10 animate-pulse rounded-xl" />
        
        <div className="relative z-10 space-y-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-qpink/20 to-qblue/20 rounded-full animate-spin" />
              <UserPlus className="w-10 h-10 text-qpink relative z-10 group-hover:scale-110 transition-transform" />
            </div>
            <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-qpink to-qblue bg-clip-text text-transparent animate-glow">
              SIGN UP
            </h1>
          </div>

          <SignupForm />
          <SocialButtons />

          <p className="text-center text-white/50 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-qpink hover:text-qblue transition-colors">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;