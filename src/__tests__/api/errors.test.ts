import { describe, it, expect } from 'vitest';
import { ApiRequestError, isApiError, handleApiError } from '../../api/errors';

describe('API Error Utilities', () => {
  describe('ApiRequestError', () => {
    it('creates error with correct properties', () => {
      const error = new ApiRequestError('Failed to fetch', 'FETCH_ERROR');
      
      expect(error.message).toBe('Failed to fetch');
      expect(error.code).toBe('FETCH_ERROR');
      expect(error.name).toBe('ApiRequestError');
    });
  });

  describe('isApiError', () => {
    it('correctly identifies API errors', () => {
      const apiError = {
        code: 'TEST_ERROR',
        message: 'Test error'
      };
      
      expect(isApiError(apiError)).toBe(true);
      expect(isApiError(new Error('Test'))).toBe(false);
      expect(isApiError(null)).toBe(false);
    });
  });

  describe('handleApiError', () => {
    it('returns original error if it is an API error', () => {
      const apiError = {
        code: 'TEST_ERROR',
        message: 'Test error'
      };
      
      expect(handleApiError(apiError)).toEqual(apiError);
    });

    it('wraps non-API errors appropriately', () => {
      const error = new Error('Test error');
      const handled = handleApiError(error);
      
      expect(handled.code).toBe('UNKNOWN_ERROR');
      expect(handled.message).toBe('Test error');
    });
  });
});