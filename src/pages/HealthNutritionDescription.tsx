import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedDNA from "@/components/health-description/AnimatedDNA";
import AnimatedFeatureCard from "@/components/health-description/AnimatedFeatureCard";

const HealthNutritionDescription = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-qdark text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink">
              Quantum Health & Nutrition
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience personalized nutrition powered by quantum computing.
            Our AI analyzes millions of data points to optimize your wellness journey.
          </p>
        </motion.div>

        {/* DNA Animation */}
        <AnimatedDNA />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatedFeatureCard
            title="AI-Powered Meal Planning"
            description="Get personalized meal plans based on your preferences and nutritional needs."
            delay={0.2}
          />
          <AnimatedFeatureCard
            title="Supplement Optimization"
            description="Discover the perfect supplement stack for your unique biology."
            delay={0.4}
          />
          <AnimatedFeatureCard
            title="Real-time Tracking"
            description="Monitor your progress with advanced quantum-powered analytics."
            delay={0.6}
          />
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Button
            onClick={() => navigate("/health-nutrition")}
            className="bg-gradient-to-r from-qblue to-qpink hover:opacity-90 text-white px-8 py-6 rounded-lg text-lg group"
          >
            Access Your Dashboard
            <ArrowRight className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="mt-4 text-gray-400">
            Start your quantum-powered wellness journey today
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HealthNutritionDescription;