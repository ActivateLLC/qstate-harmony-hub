import React, { useState, useEffect } from "react";
import { Heart, Brain, Moon, Zap } from "lucide-react";
import { WelcomeSection } from "./WelcomeSection";
import { DietaryTrendCard } from "./DietaryTrendCard";
import { NutritionPreferencesCard } from "./NutritionPreferencesCard";
import { QuickActionsCard } from "./QuickActionsCard";
import { HealthTrajectoryCharts } from "./HealthTrajectoryCharts";
import { MealPlanningCard } from "./MealPlanningCard";
import { ProgressTrackingCard } from "./ProgressTrackingCard";
import { SmartRecommendationsCard } from "./SmartRecommendationsCard";
import type { DietaryTrend, WellnessGoal } from "./types";

// Temporary static data until the database is set up
const staticDietaryTrends: DietaryTrend[] = [
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

const wellnessGoals: WellnessGoal[] = [
  { icon: Heart, text: "Improve immunity", color: "text-qpink" },
  { icon: Brain, text: "Enhance focus", color: "text-qblue" },
  { icon: Moon, text: "Optimize sleep", color: "text-qpink" },
  { icon: Zap, text: "Boost energy", color: "text-qblue" }
];

const NutritionDashboard: React.FC = () => {
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
      <WelcomeSection
        currentGoalIndex={currentGoalIndex}
        wellnessGoals={wellnessGoals}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DietaryTrendCard
          selectedTrend={selectedTrend}
          setSelectedTrend={setSelectedTrend}
          staticDietaryTrends={staticDietaryTrends}
        />

        <NutritionPreferencesCard
          proteinPreference={proteinPreference}
          setProteinPreference={setProteinPreference}
          vitaminPreference={vitaminPreference}
          setVitaminPreference={setVitaminPreference}
          mineralPreference={mineralPreference}
          setMineralPreference={setMineralPreference}
          superfoodPreference={superfoodPreference}
          setSuperfoodPreference={setSuperfoodPreference}
        />

        <MealPlanningCard />
        <ProgressTrackingCard />
        <SmartRecommendationsCard />
        <QuickActionsCard />
      </div>

      <HealthTrajectoryCharts />
    </div>
  );
};

export default NutritionDashboard;