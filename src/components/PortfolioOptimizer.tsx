import React from 'react';
import { Check } from 'lucide-react';

const features = [
  "Quantum-Enhanced Portfolio Optimization",
  "Real-Time Market Analysis",
  "AI-Driven Risk Assessment",
  "Automated Trading Strategies",
  "Quantum Random Number Generation",
  "Advanced Portfolio Rebalancing",
  "Multi-Asset Class Support",
  "Quantum Machine Learning Models",
  "Secure Quantum Encryption",
  "High-Frequency Trading Capabilities",
  "Custom Strategy Development",
  "24/7 Quantum Computing Support"
];

const PortfolioOptimizer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-2 bg-black/20 p-4 rounded-lg backdrop-blur-sm">
          <Check className="h-5 w-5 text-qblue" />
          <span className="text-gray-200">{feature}</span>
        </div>
      ))}
    </div>
  );
};

export default PortfolioOptimizer;