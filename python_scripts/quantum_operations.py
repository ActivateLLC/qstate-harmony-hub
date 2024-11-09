import sys
import json
from dwave.system import DWaveSampler, EmbeddingComposite
import dimod

def solve_quantum_problem(num_reads=1000):
    try:
        # Define a simple QUBO problem
        Q = {(0, 0): -1, (1, 1): -1, (0, 1): 2}
        
        # Initialize the D-Wave sampler
        sampler = EmbeddingComposite(DWaveSampler())
        
        # Solve the problem
        response = sampler.sample_qubo(Q, num_reads=num_reads)
        
        # Get the best solution
        best_solution = response.first.sample
        energy = response.first.energy
        
        # Prepare the result
        result = {
            "solution": dict(best_solution),
            "energy": energy,
            "success": True
        }
        
    except Exception as e:
        result = {
            "success": False,
            "error": str(e)
        }
    
    # Print the result as JSON for Node.js to parse
    print(json.dumps(result))

if __name__ == "__main__":
    # Get number of reads from command line arguments if provided
    num_reads = int(sys.argv[1]) if len(sys.argv) > 1 else 1000
    solve_quantum_problem(num_reads)