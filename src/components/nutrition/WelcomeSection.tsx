import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { CircuitBoard } from "lucide-react";
import { WellnessGoal } from "./types";

interface WelcomeSectionProps {
  currentGoalIndex: number;
  wellnessGoals: WellnessGoal[];
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ currentGoalIndex, wellnessGoals }) => {
  return (
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
  );
};