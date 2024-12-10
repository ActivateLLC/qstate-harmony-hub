export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  statusCode?: number;
}

export interface ApiError {
  code: string;
  message: string;
  details?: unknown;
}

export interface HealthMetrics {
  userId: string;
  weight: number;
  sleepHours: number;
  stressLevel: number;
  date: string;
  lastUpdated?: string;
  source?: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name?: string;
  preferences?: Record<string, any>;
  createdAt: string;
}

export type ApiStatus = 'idle' | 'loading' | 'success' | 'error';