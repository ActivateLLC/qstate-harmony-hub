import { runPythonScript } from './pythonRunner';

export interface PortfolioResult {
  success: boolean;
  allocation?: Record<string, number>;
  expected_return?: number;
  risk_level?: number;
  energy?: number;
  error?: string;
}

export const optimizePortfolio = async (
  numAssets: number = 5,
  numReads: number = 1000
): Promise<PortfolioResult> => {
  try {
    const results = await runPythonScript('portfolio_optimization.py', [
      numAssets.toString(),
      numReads.toString()
    ]);
    return JSON.parse(results[0]);
  } catch (error) {
    console.error('Error running portfolio optimization:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};