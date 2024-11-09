import { motion } from "framer-motion";
import { ArrowLeft, User, Facebook, Apple } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-qdark flex items-center justify-center p-4 relative overflow-hidden">
      {/* Enhanced grid background with glowing lines */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-qblue/5 to-transparent animate-pulse" />
      </div>

      {/* Floating light effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-20 bg-gradient-to-b from-qblue to-transparent animate-moveY"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.5,
            }}
          />
        ))}
      </div>

      <Link 
        to="/" 
        className="fixed top-8 left-8 glass-card p-3 hover:scale-105 transition-transform group z-50"
      >
        <ArrowLeft className="w-6 h-6 text-white group-hover:text-qblue transition-colors" />
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card w-full max-w-md p-8 space-y-8 relative"
      >
        {/* Enhanced glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-qblue/20 to-qpink/20 blur-xl opacity-50" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />
        <div className="absolute inset-0 border border-white/10 rounded-xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-qblue/10 to-qpink/10 animate-pulse rounded-xl" />
        
        <div className="relative z-10 space-y-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-qblue/20 to-qpink/20 rounded-full animate-spin" />
              <User className="w-10 h-10 text-qblue relative z-10 group-hover:scale-110 transition-transform" />
            </div>
            <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-qblue to-qpink bg-clip-text text-transparent animate-glow">
              LOGIN
            </h1>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <input 
                type="email"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-qblue focus:ring-1 focus:ring-qblue/50 placeholder:text-white/30 transition-all"
                placeholder="USERNAME"
              />
            </div>

            <div className="space-y-2">
              <input 
                type="password"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-qblue focus:ring-1 focus:ring-qblue/50 placeholder:text-white/30 transition-all"
                placeholder="PASSWORD"
              />
            </div>

            <button 
              type="submit"
              className="w-full glass-card py-4 text-white relative overflow-hidden group text-lg font-semibold"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-qblue/20 to-qpink/20 group-hover:translate-x-full transition-transform duration-300" />
              <div className="relative z-10 animate-glow">LOGIN</div>
            </button>
          </form>

          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-qdark text-white/50">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button className="glass-card p-3 hover:scale-105 transition-transform relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-qblue/10 to-qpink/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src="/google.svg" alt="Google" className="w-6 h-6 mx-auto relative z-10" />
              </button>
              <button className="glass-card p-3 hover:scale-105 transition-transform relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-qblue/10 to-qpink/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Facebook className="w-6 h-6 mx-auto text-white relative z-10" />
              </button>
              <button className="glass-card p-3 hover:scale-105 transition-transform relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-qblue/10 to-qpink/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Apple className="w-6 h-6 mx-auto text-white relative z-10" />
              </button>
            </div>
          </div>

          <p className="text-center text-white/50 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-qblue hover:text-qpink transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;