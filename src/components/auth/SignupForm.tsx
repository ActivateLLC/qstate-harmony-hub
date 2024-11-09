import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock, Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });

      if (error) throw error;

      if (data) {
        // Create a profile record
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: data.user?.id,
              name: formData.fullName,
            }
          ]);

        if (profileError) throw profileError;

        // Create initial nutrition preferences
        const { error: nutritionError } = await supabase
          .from('nutrition_preferences')
          .insert([
            {
              user_id: data.user?.id,
            }
          ]);

        if (nutritionError) throw nutritionError;

        toast.success("Account created successfully!");
        // The AuthStateHandler in App.tsx will handle the redirection
      }
    } catch (error: any) {
      toast.error(error.message || "An error occurred during signup");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
          <input 
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 pl-12 text-white focus:outline-none focus:border-qpink focus:ring-1 focus:ring-qpink/50 placeholder:text-white/30 transition-all"
            placeholder="Full Name"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 pl-12 text-white focus:outline-none focus:border-qpink focus:ring-1 focus:ring-qpink/50 placeholder:text-white/30 transition-all"
            placeholder="Email Address"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
          <input 
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 pl-12 text-white focus:outline-none focus:border-qpink focus:ring-1 focus:ring-qpink/50 placeholder:text-white/30 transition-all"
            placeholder="Password"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="relative">
          <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
          <input 
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 pl-12 text-white focus:outline-none focus:border-qpink focus:ring-1 focus:ring-qpink/50 placeholder:text-white/30 transition-all"
            placeholder="Confirm Password"
            required
          />
        </div>
      </div>

      <button 
        type="submit"
        disabled={isLoading}
        className="w-full glass-card py-4 text-white relative overflow-hidden group text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-qpink/20 to-qblue/20 group-hover:translate-x-full transition-transform duration-300" />
        <div className="relative z-10 animate-glow">
          {isLoading ? "Creating Account..." : "CREATE ACCOUNT"}
        </div>
      </button>
    </form>
  );
};