import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-qdark flex items-center justify-center p-4">
      <Link 
        to="/" 
        className="fixed top-6 left-6 glass-card p-2 hover:scale-105 transition-transform"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card w-full max-w-md p-8 space-y-6"
      >
        <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-qblue to-qpink bg-clip-text text-transparent">
          Welcome Back
        </h1>

        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-white/70">Email</label>
            <input 
              type="email"
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-qblue"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-white/70">Password</label>
            <input 
              type="password"
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-qblue"
              placeholder="Enter your password"
            />
          </div>

          <button 
            type="submit"
            className="w-full glass-card py-3 text-white relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-qblue/20 to-qpink/20 group-hover:translate-x-full transition-transform duration-300" />
            Login
          </button>
        </form>

        <p className="text-center text-white/50 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-qblue hover:text-qpink transition-colors">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;