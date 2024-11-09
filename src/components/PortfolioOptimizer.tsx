import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { optimizePortfolio } from "@/utils/portfolioOptimizer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";

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

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink">
          Quantum Portfolio Optimizer
        </CardTitle>
        <CardDescription>
          Optimize your investment portfolio using quantum computing
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Number of Assets</label>
          <Slider
            value={[numAssets]}
            onValueChange={(value) => setNumAssets(value[0])}
            min={2}
            max={10}
            step={1}
            className="w-full"
          />
          <span className="text-sm text-muted-foreground">
            {numAssets} assets
          </span>
        </div>

        <Button
          onClick={handleOptimize}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-qblue to-qpink hover:opacity-90"
        >
          {isLoading ? "Optimizing..." : "Optimize Portfolio"}
        </Button>

        {error && (
          <div className="text-red-500 text-sm">
            Error: {error instanceof Error ? error.message : "Unknown error"}
          </div>
        )}

        {data?.success && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Expected Return</h4>
                <p className="text-2xl font-bold text-qblue">
                  {(data.expected_return! * 100).toFixed(2)}%
                </p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Risk Level</h4>
                <p className="text-2xl font-bold text-qpink">
                  {(data.risk_level! * 100).toFixed(2)}%
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Asset Allocation</h4>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(data.allocation!).map(([asset, weight]) => (
                  <div
                    key={asset}
                    className="flex justify-between items-center p-2 bg-muted rounded"
                  >
                    <span className="text-sm">{asset}</span>
                    <span className="font-medium">
                      {(weight * 100).toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PortfolioOptimizer;