import React from 'react';
import { motion } from "framer-motion";
import { ShoppingCart, Salad } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const QuickActionsCard: React.FC = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="w-6 h-6 text-qblue" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          className="w-full p-3 rounded-lg bg-qblue/10 hover:bg-qblue/20 transition-colors flex items-center gap-2 group"
        >
          <Salad className="w-5 h-5 group-hover:text-qblue transition-colors" />
          Generate Meal Plan
          <div className="absolute inset-0 bg-gradient-to-r from-qblue/0 via-qblue/10 to-qblue/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          className="w-full p-3 rounded-lg bg-qpink/10 hover:bg-qpink/20 transition-colors flex items-center gap-2 group"
        >
          <ShoppingCart className="w-5 h-5 group-hover:text-qpink transition-colors" />
          Order Supplements
          <div className="absolute inset-0 bg-gradient-to-r from-qpink/0 via-qpink/10 to-qpink/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
        </motion.button>
      </CardContent>
    </Card>
  );
};