import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import LifeAreas from '../../components/LifeAreas'

describe('LifeAreas Component', () => {
  it('renders all life areas', () => {
    render(<LifeAreas />)
    
    expect(screen.getByText('Health & Fitness')).toBeInTheDocument()
    expect(screen.getByText('Career & Work')).toBeInTheDocument()
    expect(screen.getByText('Relationships')).toBeInTheDocument()
  })

  it('handles area selection correctly', () => {
    const mockOnSelect = vi.fn()
    render(<LifeAreas onAreaSelect={mockOnSelect} />)
    
    const healthArea = screen.getByText('Health & Fitness')
    fireEvent.click(healthArea)
    
    expect(mockOnSelect).toHaveBeenCalledWith('health')
  })
})