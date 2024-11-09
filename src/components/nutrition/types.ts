import { LucideIcon } from "lucide-react";

export interface DietaryTrend {
  id: string;
  name: string;
  description: string;
}

export interface WellnessGoal {
  icon: LucideIcon;
  text: string;
  color: string;
}