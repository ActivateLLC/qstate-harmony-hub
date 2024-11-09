import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Dna, Gauge, ShoppingCart, Salad, Sparkles, 
  Heart, Brain, Moon, Zap, CircuitBoard 
} from "lucide-react";

// Temporary static data until the database is set up
const staticDietaryTrends = [
  {
    id: "1",
    name: "Ketogenic",
    description: "High-fat, low-carb diet that aims to put your body in ketosis"
  },
  {
    id: "2",
    name: "Mediterranean",
    description: "Plant-based diet rich in healthy fats, whole grains, and lean proteins"
  },
  {
    id: "3",
    name: "Plant-Based",
    description: "Diet focused on foods derived from plant sources"
  },
  {
    id: "4",
    name: "Paleo",
    description: "Diet based on foods similar to what might have been eaten during the Paleolithic era"
  }
];

const wellnessGoals = [
  { icon: Heart, text: "Improve immunity", color: "text-qpink" },
  { icon: Brain, text: "Enhance focus", color: "text-qblue" },
  { icon: Moon, text: "Optimize sleep", color: "text-qpink" },
  { icon: Zap, text: "Boost energy", color: "text-qblue" }
];

const NutritionDashboard = () => {
  const [selectedTrend, setSelectedTrend] = useState<string>("");
  const [proteinPreference, setProteinPreference] = useState([50]);
  const [vitaminPreference, setVitaminPreference] = useState([50]);
  const [mineralPreference, setMineralPreference] = useState([50]);
  const [superfoodPreference, setSuperfoodPreference] = useState([50]);
  const [currentGoalIndex, setCurrentGoalIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGoalIndex((prev) => (prev + 1) % wellnessGoals.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full space-y-8">
      {/* Enhanced Hero Section with Welcome Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-qblue/10 to-qpink/10 blur-xl" />
        <div className="relative glass-card p-8 space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink animate-glow">
                Welcome to Quantum Wellness
              </h1>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentGoalIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center gap-2"
                >
                  {React.createElement(wellnessGoals[currentGoalIndex].icon, {
                    className: `w-6 h-6 ${wellnessGoals[currentGoalIndex].color}`
                  })}
                  <p className="text-lg text-gray-300">
                    {wellnessGoals[currentGoalIndex].text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative w-24 h-24"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-qblue to-qpink rounded-full blur-xl opacity-50" />
              <CircuitBoard className="w-full h-full text-white opacity-50" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dietary Trend Selector with Enhanced Visuals */}
        <Card className="glass-card overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Dna className="w-6 h-6 text-qblue animate-pulse" />
              <span>Dietary Trend</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedTrend} onValueChange={setSelectedTrend}>
              <SelectTrigger>
                <SelectValue placeholder="Select your dietary preference" />
              </SelectTrigger>
              <SelectContent>
                {staticDietaryTrends.map((trend) => (
                  <SelectItem key={trend.id} value={trend.id}>
                    {trend.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Nutrition Preferences with Animated Indicators */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="w-6 h-6 text-qpink animate-spin-slow" />
              Nutrition Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-qblue" />
                Protein Level
              </label>
              <Slider
                value={proteinPreference}
                onValueChange={setProteinPreference}
                max={100}
                step={1}
                className="[&>.relative>::before]:bg-qblue"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-qpink" />
                Vitamin Intake
              </label>
              <Slider
                value={vitaminPreference}
                onValueChange={setVitaminPreference}
                max={100}
                step={1}
                className="[&>.relative>::before]:bg-qpink"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-qblue" />
                Mineral Balance
              </label>
              <Slider
                value={mineralPreference}
                onValueChange={setMineralPreference}
                max={100}
                step={1}
                className="[&>.relative>::before]:bg-qblue"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-qpink" />
                Superfood Focus
              </label>
              <Slider
                value={superfoodPreference}
                onValueChange={setSuperfoodPreference}
                max={100}
                step={1}
                className="[&>.relative>::before]:bg-qpink"
              />
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions with Hover Effects */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-qblue" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full p-3 rounded-lg bg-qblue/10 hover:bg-qblue/20 transition-colors flex items-center gap-2 group"
            >
              <Salad className="w-5 h-5 group-hover:text-qblue transition-colors" />
              Generate Meal Plan
              <div className="absolute inset-0 bg-gradient-to-r from-qblue/0 via-qblue/10 to-qblue/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full p-3 rounded-lg bg-qpink/10 hover:bg-qpink/20 transition-colors flex items-center gap-2 group"
            >
              <ShoppingCart className="w-5 h-5 group-hover:text-qpink transition-colors" />
              Order Supplements
              <div className="absolute inset-0 bg-gradient-to-r from-qpink/0 via-qpink/10 to-qpink/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
            </motion.button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NutritionDashboard;