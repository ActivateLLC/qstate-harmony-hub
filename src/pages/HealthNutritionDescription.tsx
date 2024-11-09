import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Brain, HeartPulse, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedFeatureCard from "@/components/health-description/AnimatedFeatureCard";
import AnimatedDNA from "@/components/health-description/AnimatedDNA";

const HealthNutritionDescription = () => {
  const navigate = useNavigate();

  const features = {
    mealPlanning: [
      "Daily meal scheduler with smart suggestions",
      "Calorie and macro tracking with real-time insights",
      "AI-powered recipe suggestions based on preferences",
      "Automated shopping list generation",
    ],
    progressTracking: [
      "Comprehensive body measurements tracking",
      "Secure before/after photo storage",
      "Goal setting with milestone tracking",
      "Gamified achievement system with rewards",
    ],
    smartRecommendations: [
      "Personalized meal suggestions based on your preferences and goals",
      "Custom supplement recommendations for optimal nutrition",
      "Hydration reminders and exercise nutrition planning",
    ],
  };

  return (
    <div className="min-h-screen bg-qdark text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,160,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink animate-glow">
              Quantum Health & Nutrition
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of personalized wellness through quantum computing and AI-driven insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <AnimatedFeatureCard
            title="Meal Planning & Tracking"
            icon={Brain}
            items={features.mealPlanning}
            iconColor="text-qblue"
          />
          <AnimatedFeatureCard
            title="Progress Tracking"
            icon={HeartPulse}
            items={features.progressTracking}
            iconColor="text-qpink"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-8 mb-20"
        >
          <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Leaf className="w-6 h-6 text-qblue animate-float" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink">
              Smart Recommendations
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {features.smartRecommendations.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-gray-300">{feature}</p>
              </motion.div>
            ))}
          </div>
          <AnimatedDNA />
        </motion.div>

        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Nutrition?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us and experience the future of personalized nutrition planning.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <Button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-qblue to-qpink hover:opacity-90 text-white px-8 py-6 rounded-full text-lg font-bold group"
            >
              Get Started Now
              <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HealthNutritionDescription;