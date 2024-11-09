import sys
import json
import numpy as np
from dwave.system import DWaveSampler, EmbeddingComposite
import dimod

def optimize_portfolio(num_assets=5, num_reads=1000):
    try:
        # Simulate some financial data
        # In a real application, this would come from market data
        returns = np.random.normal(0.1, 0.2, num_assets)  # Expected returns
        risk = np.random.uniform(0.1, 0.3, num_assets)    # Risk levels
        correlations = np.random.uniform(-0.2, 0.8, (num_assets, num_assets))
        
        # Create QUBO matrix for portfolio optimization
        Q = {}
        
        # Risk minimization terms
        for i in range(num_assets):
            Q[(i, i)] = risk[i]
            
        # Return maximization terms
        for i in range(num_assets):
            Q[(i, i)] -= returns[i]
            
        # Correlation terms
        for i in range(num_assets):
            for j in range(i+1, num_assets):
                Q[(i, j)] = correlations[i][j]
        
        # Initialize the D-Wave sampler
        sampler = EmbeddingComposite(DWaveSampler())
        
        # Solve the problem
        response = sampler.sample_qubo(Q, num_reads=num_reads)
        
        # Get the best solution
        best_solution = response.first.sample
        energy = response.first.energy
        
        # Calculate portfolio metrics
        portfolio_allocation = {f"Asset_{i}": round(float(v), 3) for i, v in best_solution.items()}
        expected_return = sum(returns[i] * v for i, v in best_solution.items())
        portfolio_risk = sum(risk[i] * v for i, v in best_solution.items())
        
        result = {
            "allocation": portfolio_allocation,
            "expected_return": round(float(expected_return), 4),
            "risk_level": round(float(portfolio_risk), 4),
            "energy": float(energy),
            "success": True
        }
        
    except Exception as e:
        result = {
            "success": False,
            "error": str(e)
        }
    
    print(json.dumps(result))

if __name__ == "__main__":
    num_assets = int(sys.argv[1]) if len(sys.argv) > 1 else 5
    num_reads = int(sys.argv[2]) if len(sys.argv) > 2 else 1000
    optimize_portfolio(num_assets, num_reads)