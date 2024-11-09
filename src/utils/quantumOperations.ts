import { runPythonScript } from './pythonRunner';

interface QuantumResult {
  success: boolean;
  solution?: Record<string, number>;
  energy?: number;
  error?: string;
}

export const solveQuantumProblem = async (numReads: number = 1000): Promise<QuantumResult> => {
  try {
    const results = await runPythonScript('quantum_operations.py', [numReads.toString()]);
    // The Python script prints JSON output that we can parse
    const result = JSON.parse(results[0]);
    return result;
  } catch (error) {
    console.error('Error running quantum operation:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};