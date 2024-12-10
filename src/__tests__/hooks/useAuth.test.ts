import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { useAuth } from '../../hooks/useAuth'

describe('useAuth Hook', () => {
  it('handles sign in correctly', async () => {
    const { result } = renderHook(() => useAuth())
    
    await act(async () => {
      await result.current.signIn('test@example.com', 'password')
    })
    
    expect(result.current.user).toBeTruthy()
    expect(result.current.isAuthenticated).toBe(true)
  })
})