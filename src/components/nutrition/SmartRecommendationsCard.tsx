import React from 'react';
import { Brain, Droplets, Dumbbell, Pills } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const SmartRecommendationsCard: React.FC = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-qblue animate-pulse" />
          Smart Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          className="w-full bg-gradient-to-r from-qblue/10 to-qpink/10 hover:from-qblue/20 hover:to-qpink/20"
          onClick={() => toast.info("Analyzing your preferences for meal suggestions...")}
        >
          <Brain className="w-4 h-4 mr-2" /> Get AI Suggestions
        </Button>
        <div className="grid grid-cols-1 gap-2">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => toast.info("Calculating optimal supplement intake...")}
          >
            <Pills className="w-4 h-4 mr-2" /> Supplement Plan
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => toast.info("Setting up hydration reminders...")}
          >
            <Droplets className="w-4 h-4 mr-2" /> Hydration Schedule
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => toast.info("Syncing with your workout plan...")}
          >
            <Dumbbell className="w-4 h-4 mr-2" /> Exercise Integration
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};