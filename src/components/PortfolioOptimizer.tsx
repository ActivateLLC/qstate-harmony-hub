import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { optimizePortfolio } from "@/utils/portfolioOptimizer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { motion } from "framer-motion";

const PortfolioOptimizer = () => {
  const [numAssets, setNumAssets] = useState(5);
  const { toast } = useToast();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["portfolio", numAssets],
    queryFn: () => optimizePortfolio(numAssets),
    enabled: false,
  });

  const handleOptimize = () => {
    refetch();
    toast({
      title: "Optimization Started",
      description: "Quantum portfolio optimization in progress...",
    });
  };

  const chartData = data?.success ? [
    { name: "Return", value: data.expected_return },
    { name: "Risk", value: data.risk_level },
    { name: "Other", value: 1 - (data.expected_return + data.risk_level) },
  ] : [];

  const COLORS = ['#00f0ff', '#ff00a0', '#0a0b1c'];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <motion.h1 
        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink glow-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Portfolize Portfolio
      </motion.h1>

      <Card className="glass-card p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-qblue glow-text">Number of Assets</h2>
              <Slider
                value={[numAssets]}
                onValueChange={(value) => setNumAssets(value[0])}
                min={2}
                max={10}
                step={1}
                className="w-full"
              />
              <span className="text-sm text-qpink animate-pulse">
                {numAssets} assets selected
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="glass-card p-4">
                <div className="text-sm text-qblue">Return</div>
                <div className="text-2xl font-bold text-qblue glow-text">
                  {data?.success ? (data.expected_return * 100).toFixed(1) : '--'}%
                </div>
              </div>
              <div className="glass-card p-4">
                <div className="text-sm text-qpink">Risk</div>
                <div className="text-2xl font-bold text-qpink glow-text">
                  {data?.success ? (data.risk_level * 100).toFixed(1) : '--'}%
                </div>
              </div>
              <div className="glass-card p-4">
                <div className="text-sm text-white">Energy</div>
                <div className="text-2xl font-bold text-white glow-text">
                  {data?.success ? data.energy.toFixed(1) : '--'}
                </div>
              </div>
            </div>

            <Button
              onClick={handleOptimize}
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-qblue to-qpink hover:opacity-90 animate-pulse"
            >
              {isLoading ? "Optimizing..." : "Optimize Portfolio"}
            </Button>
          </div>

          <div className="relative h-[300px]">
            {data?.success && (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            )}
            <div className="absolute bottom-0 left-0 right-0 glass-card p-4 text-center">
              <span className="text-qblue glow-text">Subscribe to Unlock Full Analysis</span>
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-4 text-red-500 text-sm">
            Error: {error instanceof Error ? error.message : "Unknown error"}
          </div>
        )}
      </Card>
    </div>
  );
};

export default PortfolioOptimizer;