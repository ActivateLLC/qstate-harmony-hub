export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

export interface HealthMetrics {
  userId: string;
  weight: number;
  sleepHours: number;
  stressLevel: number;
  date: string;
}