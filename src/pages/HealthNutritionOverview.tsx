import { motion } from "framer-motion";
import { Salad, Apple, Utensils, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HealthNutritionOverview = () => {
  return (
    <div className="min-h-screen bg-qdark text-white p-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink">
            Quantum Nutrition Intelligence
          </span>
        </h1>
        <p className="text-xl text-gray-300">
          Experience the future of personalized nutrition powered by quantum computing.
          Our advanced system analyzes millions of nutritional data points to create
          your perfect wellness journey.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
        <Card className="bg-qdark border-qblue/20 hover:border-qblue/40 transition-colors">
          <CardHeader>
            <Salad className="w-12 h-12 text-qblue mb-4" />
            <CardTitle>AI-Powered Meal Planning</CardTitle>
            <CardDescription className="text-gray-400">
              Quantum algorithms analyze your preferences and nutritional needs to create
              perfectly balanced meal plans.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-qdark border-qpink/20 hover:border-qpink/40 transition-colors">
          <CardHeader>
            <Apple className="w-12 h-12 text-qpink mb-4" />
            <CardTitle>Nutrient Optimization</CardTitle>
            <CardDescription className="text-gray-400">
              Access to a curated selection of the most nutrient-dense foods and
              supplements backed by scientific research.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-qdark border-qblue/20 hover:border-qblue/40 transition-colors">
          <CardHeader>
            <Utensils className="w-12 h-12 text-qblue mb-4" />
            <CardTitle>Dietary Trend Analysis</CardTitle>
            <CardDescription className="text-gray-400">
              Stay ahead with our quantum-powered analysis of emerging nutritional
              trends and their potential benefits for you.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-qdark border-qpink/20 hover:border-qpink/40 transition-colors">
          <CardHeader>
            <ShoppingCart className="w-12 h-12 text-qpink mb-4" />
            <CardTitle>Premium Delivery Service</CardTitle>
            <CardDescription className="text-gray-400">
              Weekly delivery of personalized nutrition packages including supplements,
              proteins, and superfoods.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Coming Soon Banner */}
      <div className="text-center">
        <p className="text-2xl font-semibold text-gray-400">
          Full Service Coming Soon
        </p>
        <p className="text-gray-500 mt-2">
          Join our waitlist to be the first to experience quantum-powered nutrition.
        </p>
      </div>
    </div>
  );
};

export default HealthNutritionOverview;