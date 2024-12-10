import { useState, useEffect } from 'react';
import { api } from '../client';
import type { ApiResponse, HealthMetrics } from '../types';
import { handleApiError } from '../errors';

export function useHealthMetrics(userId: string) {
  const [response, setResponse] = useState<ApiResponse<HealthMetrics[]>>({
    data: null,
    error: null,
    loading: true
  });

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      try {
        const result = await api.getHealthMetrics(userId);
        if (mounted) {
          setResponse(result);
        }
      } catch (error) {
        if (mounted) {
          const apiError = handleApiError(error);
          setResponse({
            data: null,
            error: apiError.message,
            loading: false
          });
        }
      }
    }

    fetchData();

    return () => {
      mounted = false;
    };
  }, [userId]);

  return response;
}