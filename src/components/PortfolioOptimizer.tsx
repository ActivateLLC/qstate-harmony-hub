import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { optimizePortfolio } from "@/utils/portfolioOptimizer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { motion } from "framer-motion";

const generateRandomTickers = (count: number) => {
  const tickers = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'META', 'TSLA', 'NVDA', 'AMD', 'INTC', 'IBM', 'NFLX', 'DIS', 'PYPL', 'V', 'MA'];
  return Array.from({ length: count }, () => tickers[Math.floor(Math.random() * tickers.length)]);
};

const PortfolioOptimizer = () => {
  const [numAssets, setNumAssets] = useState(5);
  const [recommendedTickers, setRecommendedTickers] = useState<string[]>([]);
  const { toast } = useToast();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["portfolio", numAssets],
    queryFn: () => optimizePortfolio(numAssets),
    enabled: false,
  });

  const handleOptimize = () => {
    setRecommendedTickers(generateRandomTickers(numAssets));
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

      <Card className="glass-card p-8 relative">
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

            {recommendedTickers.length > 0 && (
              <div className="relative mt-4">
                <div className="glass-card p-4 blur-sm">
                  <h3 className="text-lg font-semibold text-qblue mb-2">Recommended Tickers</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {recommendedTickers.map((ticker, index) => (
                      <div key={index} className="glass-card p-2 text-center text-qpink">
                        {ticker}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center glass-card bg-gradient-to-r from-qblue/20 to-qpink/20 border-t-2 border-qblue/50 backdrop-blur-xl">
                  <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink animate-pulse glow-text">
                    Unlock Pro Features & Broker Integration
                  </span>
                </div>
              </div>
            )}
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