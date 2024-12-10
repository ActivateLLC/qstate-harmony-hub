import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import PortfolioOptimizer from '../../components/PortfolioOptimizer';

describe('PortfolioOptimizer Component', () => {
  it('renders optimization form', () => {
    render(<PortfolioOptimizer />);
    
    expect(screen.getByText(/Portfolio Optimization/i)).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    const { getByRole } = render(<PortfolioOptimizer />);
    
    const submitButton = getByRole('button', { name: /optimize/i });
    await fireEvent.click(submitButton);
    
    // Add assertions based on your form submission logic
  });
});