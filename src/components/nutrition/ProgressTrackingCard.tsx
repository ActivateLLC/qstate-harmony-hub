import React, { useState } from 'react';
import { Target, Camera, Ruler, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

export const ProgressTrackingCard: React.FC = () => {
  const [progress, setProgress] = useState(65);

  const handlePhotoUpload = () => {
    toast.success("Progress photo uploaded successfully!");
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="w-6 h-6 text-qpink animate-spin-slow" />
          Progress Tracking
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Current Goal Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handlePhotoUpload}
          >
            <Camera className="w-4 h-4 mr-2" /> Photo
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => toast.info("Opening measurements form...")}
          >
            <Ruler className="w-4 h-4 mr-2" /> Measure
          </Button>
        </div>
        <Button 
          className="w-full bg-qpink/10 hover:bg-qpink/20"
          onClick={() => toast.success("Achievement unlocked: Consistent Tracker!")}
        >
          <Trophy className="w-4 h-4 mr-2" /> View Achievements
        </Button>
      </CardContent>
    </Card>
  );
};