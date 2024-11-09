import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dna, Gauge, ShoppingCart, Salad } from "lucide-react";

interface DietaryTrend {
  id: string;
  name: string;
  description: string;
}

const NutritionDashboard = () => {
  const [selectedTrend, setSelectedTrend] = useState<string>("");
  const [proteinPreference, setProteinPreference] = useState([50]);
  const [vitaminPreference, setVitaminPreference] = useState([50]);
  const [mineralPreference, setMineralPreference] = useState([50]);
  const [superfoodPreference, setSuperfoodPreference] = useState([50]);

  const { data: dietaryTrends } = useQuery({
    queryKey: ['dietaryTrends'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('dietary_trends')
        .select('*');
      if (error) throw error;
      return data as DietaryTrend[];
    }
  });

  return (
    <div className="w-full space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink">
          Quantum Nutrition Intelligence
        </h1>
        <p className="text-gray-400">
          Your personalized quantum-powered nutrition assistant
        </p>
      </motion.div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dietary Trend Selector */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Dna className="w-6 h-6 text-qblue" />
              Dietary Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedTrend} onValueChange={setSelectedTrend}>
              <SelectTrigger>
                <SelectValue placeholder="Select your dietary preference" />
              </SelectTrigger>
              <SelectContent>
                {dietaryTrends?.map((trend) => (
                  <SelectItem key={trend.id} value={trend.id}>
                    {trend.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Nutrition Preferences */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="w-6 h-6 text-qpink" />
              Nutrition Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Protein Level</label>
              <Slider
                value={proteinPreference}
                onValueChange={setProteinPreference}
                max={100}
                step={1}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Vitamin Intake</label>
              <Slider
                value={vitaminPreference}
                onValueChange={setVitaminPreference}
                max={100}
                step={1}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Mineral Balance</label>
              <Slider
                value={mineralPreference}
                onValueChange={setMineralPreference}
                max={100}
                step={1}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Superfood Focus</label>
              <Slider
                value={superfoodPreference}
                onValueChange={setSuperfoodPreference}
                max={100}
                step={1}
              />
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-qblue" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="w-full p-3 rounded-lg bg-qblue/10 hover:bg-qblue/20 transition-colors flex items-center gap-2">
              <Salad className="w-5 h-5" />
              Generate Meal Plan
            </button>
            <button className="w-full p-3 rounded-lg bg-qpink/10 hover:bg-qpink/20 transition-colors flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Order Supplements
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NutritionDashboard;