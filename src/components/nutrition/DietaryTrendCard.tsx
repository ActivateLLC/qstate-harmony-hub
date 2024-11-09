import React from 'react';
import { Dna } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DietaryTrend } from "./types";

interface DietaryTrendCardProps {
  selectedTrend: string;
  setSelectedTrend: (value: string) => void;
  staticDietaryTrends: DietaryTrend[];
}

export const DietaryTrendCard: React.FC<DietaryTrendCardProps> = ({
  selectedTrend,
  setSelectedTrend,
  staticDietaryTrends,
}) => {
  return (
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
  );
};