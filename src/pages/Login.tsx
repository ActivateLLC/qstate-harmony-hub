import { motion } from "framer-motion";
import { ArrowLeft, User, Facebook, Apple } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-qdark flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <Link 
        to="/" 
        className="fixed top-6 left-6 glass-card p-2 hover:scale-105 transition-transform"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card w-full max-w-md p-8 space-y-8 relative"
      >
        {/* Glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-qblue/20 to-qpink/20 blur-xl opacity-50" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />
        
        <div className="relative z-10 space-y-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center">
              <User className="w-10 h-10 text-qblue" />
            </div>
            <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-qblue to-qpink bg-clip-text text-transparent animate-glow">
              LOGIN
            </h1>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <input 
                type="email"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-qblue placeholder:text-white/30"
                placeholder="USERNAME"
              />
            </div>

            <div className="space-y-2">
              <input 
                type="password"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-qblue placeholder:text-white/30"
                placeholder="PASSWORD"
              />
            </div>

            <button 
              type="submit"
              className="w-full glass-card py-4 text-white relative overflow-hidden group text-lg font-semibold"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-qblue/20 to-qpink/20 group-hover:translate-x-full transition-transform duration-300" />
              LOGIN
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
              <button className="glass-card p-3 hover:scale-105 transition-transform">
                <img src="/google.svg" alt="Google" className="w-6 h-6 mx-auto" />
              </button>
              <button className="glass-card p-3 hover:scale-105 transition-transform">
                <Facebook className="w-6 h-6 mx-auto text-white" />
              </button>
              <button className="glass-card p-3 hover:scale-105 transition-transform">
                <Apple className="w-6 h-6 mx-auto text-white" />
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