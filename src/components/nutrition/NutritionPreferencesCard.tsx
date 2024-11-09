import React from 'react';
import { Gauge, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

interface NutritionPreferencesCardProps {
  proteinPreference: number[];
  setProteinPreference: (value: number[]) => void;
  vitaminPreference: number[];
  setVitaminPreference: (value: number[]) => void;
  mineralPreference: number[];
  setMineralPreference: (value: number[]) => void;
  superfoodPreference: number[];
  setSuperfoodPreference: (value: number[]) => void;
}

export const NutritionPreferencesCard: React.FC<NutritionPreferencesCardProps> = ({
  proteinPreference,
  setProteinPreference,
  vitaminPreference,
  setVitaminPreference,
  mineralPreference,
  setMineralPreference,
  superfoodPreference,
  setSuperfoodPreference,
}) => {
  return (
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
  );
};