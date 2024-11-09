import { User } from "lucide-react";

export const SocialButtons = () => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-qdark text-white/50">Or sign up with</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <button className="glass-card p-3 hover:scale-105 transition-transform relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-qpink/10 to-qblue/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <img src="/google.svg" alt="Google" className="w-6 h-6 mx-auto relative z-10" />
        </button>
        <button className="glass-card p-3 hover:scale-105 transition-transform relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-qpink/10 to-qblue/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <User className="w-6 h-6 mx-auto text-white relative z-10" />
        </button>
        <button className="glass-card p-3 hover:scale-105 transition-transform relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-qpink/10 to-qblue/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <User className="w-6 h-6 mx-auto text-white relative z-10" />
        </button>
      </div>
    </div>
  );
};