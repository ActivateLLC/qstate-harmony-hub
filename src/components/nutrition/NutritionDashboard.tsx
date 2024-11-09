import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Brain, Moon, Zap } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@supabase/auth-helpers-react";
import { WelcomeSection } from "./WelcomeSection";
import { DietaryTrendCard } from "./DietaryTrendCard";
import { NutritionPreferencesCard } from "./NutritionPreferencesCard";
import { QuickActionsCard } from "./QuickActionsCard";
import { HealthTrajectoryCharts } from "./HealthTrajectoryCharts";
import { MealPlanningCard } from "./MealPlanningCard";
import { ProgressTrackingCard } from "./ProgressTrackingCard";
import { SmartRecommendationsCard } from "./SmartRecommendationsCard";
import type { DietaryTrend, WellnessGoal } from "./types";

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
  const session = useSession();
  const queryClient = useQueryClient();
  const [currentGoalIndex, setCurrentGoalIndex] = useState(0);

  // Fetch nutrition preferences
  const { data: preferences, isLoading } = useQuery({
    queryKey: ['nutritionPreferences', session?.user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('nutrition_preferences')
        .select('*')
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!session?.user?.id,
  });

  // Update preferences mutation
  const updatePreferences = useMutation({
    mutationFn: async (newPreferences: any) => {
      const { error } = await supabase
        .from('nutrition_preferences')
        .upsert({
          user_id: session?.user?.id,
          ...newPreferences,
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['nutritionPreferences'] });
      toast.success('Preferences updated successfully!');
    },
    onError: (error) => {
      toast.error('Failed to update preferences');
      console.error('Error updating preferences:', error);
    },
  });

  // Set up real-time subscription
  useEffect(() => {
    if (!session?.user?.id) return;

    const subscription = supabase
      .channel('nutrition_preferences_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'nutrition_preferences',
          filter: `user_id=eq.${session.user.id}`,
        },
        (payload) => {
          queryClient.invalidateQueries({ queryKey: ['nutritionPreferences'] });
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [session?.user?.id, queryClient]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGoalIndex((prev) => (prev + 1) % wellnessGoals.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePreferencesUpdate = async (newPreferences: any) => {
    updatePreferences.mutate(newPreferences);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-qblue"></div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-8 relative">
      <div className="fixed inset-0 bg-qdark overflow-hidden pointer-events-none">
        <div className="absolute w-1/2 h-1/2 bg-qblue/5 rounded-full blur-[100px] animate-float top-0 left-0" />
        <div className="absolute w-1/2 h-1/2 bg-qpink/5 rounded-full blur-[100px] animate-float delay-1000 bottom-0 right-0" />
      </div>

      <WelcomeSection
        currentGoalIndex={currentGoalIndex}
        wellnessGoals={wellnessGoals}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
      >
        <motion.div variants={cardVariants} className="hover:scale-[1.02] transition-transform">
          <DietaryTrendCard
            selectedTrend={preferences?.dietary_trend || ''}
            setSelectedTrend={(trend) => handlePreferencesUpdate({ dietary_trend: trend })}
            staticDietaryTrends={staticDietaryTrends}
          />
        </motion.div>

        <motion.div variants={cardVariants} className="hover:scale-[1.02] transition-transform">
          <NutritionPreferencesCard
            proteinPreference={[preferences?.protein_level || 50]}
            setProteinPreference={(value) => handlePreferencesUpdate({ protein_level: value[0] })}
            vitaminPreference={[preferences?.vitamin_level || 50]}
            setVitaminPreference={(value) => handlePreferencesUpdate({ vitamin_level: value[0] })}
            mineralPreference={[preferences?.mineral_level || 50]}
            setMineralPreference={(value) => handlePreferencesUpdate({ mineral_level: value[0] })}
            superfoodPreference={[preferences?.superfood_level || 50]}
            setSuperfoodPreference={(value) => handlePreferencesUpdate({ superfood_level: value[0] })}
          />
        </motion.div>

        <motion.div variants={cardVariants} className="hover:scale-[1.02] transition-transform">
          <MealPlanningCard />
        </motion.div>

        <motion.div variants={cardVariants} className="hover:scale-[1.02] transition-transform">
          <ProgressTrackingCard />
        </motion.div>

        <motion.div variants={cardVariants} className="hover:scale-[1.02] transition-transform">
          <SmartRecommendationsCard />
        </motion.div>

        <motion.div variants={cardVariants} className="hover:scale-[1.02] transition-transform">
          <QuickActionsCard />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <HealthTrajectoryCharts />
      </motion.div>
    </div>
  );
};

export default NutritionDashboard;