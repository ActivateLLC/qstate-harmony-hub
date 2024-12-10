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

export interface UserProfile {
  id: string;
  email: string;
  name?: string;
  preferences?: Record<string, any>;
  createdAt: string;
}