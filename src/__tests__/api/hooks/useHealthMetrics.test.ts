import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useHealthMetrics } from '../../../api/hooks/useHealthMetrics';
import { api } from '../../../api/client';

vi.mock('../../../api/client', () => ({
  api: {
    getHealthMetrics: vi.fn()
  }
}));

describe('useHealthMetrics', () => {
  const mockUserId = 'test-user-id';
  const mockHealthData = [
    {
      userId: mockUserId,
      weight: 70,
      sleepHours: 7,
      stressLevel: 3,
      date: '2024-03-10'
    }
  ];

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('fetches and returns health metrics', async () => {
    const mockResponse = {
      data: mockHealthData,
      error: null,
      loading: false
    };

    vi.mocked(api.getHealthMetrics).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useHealthMetrics(mockUserId));

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toEqual(mockHealthData);
    expect(result.current.error).toBeNull();
    expect(api.getHealthMetrics).toHaveBeenCalledWith(mockUserId);
  });

  it('handles errors appropriately', async () => {
    const mockError = 'Failed to fetch health metrics';
    vi.mocked(api.getHealthMetrics).mockRejectedValue(new Error(mockError));

    const { result } = renderHook(() => useHealthMetrics(mockUserId));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toBeNull();
    expect(result.current.error).toBe(mockError);
  });
});