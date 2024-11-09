import React from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const mockData = {
  weekly: [
    { day: "Mon", calories: 2100, protein: 150, sleep: 7.5 },
    { day: "Tue", calories: 2300, protein: 160, sleep: 8 },
    { day: "Wed", calories: 2000, protein: 140, sleep: 6.5 },
    { day: "Thu", calories: 2200, protein: 155, sleep: 7 },
    { day: "Fri", calories: 2400, protein: 165, sleep: 8.5 },
    { day: "Sat", calories: 2150, protein: 145, sleep: 9 },
    { day: "Sun", calories: 2250, protein: 158, sleep: 8 },
  ],
  monthly: Array.from({ length: 30 }, (_, i) => ({
    date: `${i + 1}`,
    wellness: Math.random() * 100,
    hydration: 60 + Math.random() * 40,
  })),
};

export const HealthTrajectoryCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6 bg-gradient-to-br from-qdark to-black border-qblue/20">
          <h3 className="text-lg font-semibold text-qblue mb-4">Weekly Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={mockData.weekly}>
              <defs>
                <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00f0ff" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorProtein" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff00a0" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#ff00a0" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a1b2e" />
              <XAxis dataKey="day" stroke="#4a4b5c" />
              <YAxis stroke="#4a4b5c" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0a0b1c",
                  border: "1px solid #00f0ff",
                }}
              />
              <Area
                type="monotone"
                dataKey="calories"
                stroke="#00f0ff"
                fillOpacity={1}
                fill="url(#colorCalories)"
              />
              <Area
                type="monotone"
                dataKey="protein"
                stroke="#ff00a0"
                fillOpacity={1}
                fill="url(#colorProtein)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="p-6 bg-gradient-to-br from-qdark to-black border-qpink/20">
          <h3 className="text-lg font-semibold text-qpink mb-4">Monthly Wellness Score</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockData.monthly}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a1b2e" />
              <XAxis dataKey="date" stroke="#4a4b5c" />
              <YAxis stroke="#4a4b5c" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0a0b1c",
                  border: "1px solid #ff00a0",
                }}
              />
              <Line
                type="monotone"
                dataKey="wellness"
                stroke="#00f0ff"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="hydration"
                stroke="#ff00a0"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="md:col-span-2"
      >
        <Card className="p-6 bg-gradient-to-br from-qdark to-black border-qblue/20">
          <h3 className="text-lg font-semibold text-gradient-to-r from-qblue to-qpink mb-4">
            Sleep Quality Tracking
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={mockData.weekly}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a1b2e" />
              <XAxis dataKey="day" stroke="#4a4b5c" />
              <YAxis stroke="#4a4b5c" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0a0b1c",
                  border: "1px solid #00f0ff",
                }}
              />
              <Bar
                dataKey="sleep"
                fill="#00f0ff"
                radius={[4, 4, 0, 0]}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </motion.div>
    </div>
  );
};