import React, { useState } from 'react';
import { Calendar, Plus, List, Cookie } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const MealPlanningCard: React.FC = () => {
  const [showMealForm, setShowMealForm] = useState(false);

  const handleAddMeal = () => {
    toast.success("Meal added to your plan!");
    setShowMealForm(false);
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-6 h-6 text-qblue animate-pulse" />
          Meal Planning
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!showMealForm ? (
          <div className="space-y-3">
            <Button 
              onClick={() => setShowMealForm(true)}
              className="w-full bg-qblue/10 hover:bg-qblue/20 text-white"
            >
              <Plus className="w-4 h-4 mr-2" /> Add Meal
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => toast.info("Generating your shopping list...")}
            >
              <List className="w-4 h-4 mr-2" /> Generate Shopping List
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => toast.info("Finding recipes based on your preferences...")}
            >
              <Cookie className="w-4 h-4 mr-2" /> Recipe Suggestions
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            <Input placeholder="Meal name" />
            <Input type="time" />
            <div className="flex gap-2">
              <Button 
                onClick={handleAddMeal}
                className="flex-1 bg-qblue/10 hover:bg-qblue/20"
              >
                Save
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowMealForm(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};