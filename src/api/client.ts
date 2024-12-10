import { createClient } from '@supabase/supabase-js'
import { HealthMetrics, ApiResponse } from './types'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

export class ApiClient {
  async getHealthMetrics(userId: string): Promise<ApiResponse<HealthMetrics[]>> {
    try {
      const { data, error } = await supabase
        .from('health_metrics')
        .select('*')
        .eq('user_id', userId)
        .order('date', { ascending: false })

      if (error) throw error

      return {
        data,
        error: null,
        loading: false
      }
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'An error occurred',
        loading: false
      }
    }
  }

  async updateHealthMetrics(metrics: Omit<HealthMetrics, 'date'>): Promise<ApiResponse<HealthMetrics>> {
    try {
      const { data, error } = await supabase
        .from('health_metrics')
        .insert([{ ...metrics, date: new Date().toISOString() }])
        .select()
        .single()

      if (error) throw error

      return {
        data,
        error: null,
        loading: false
      }
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'An error occurred',
        loading: false
      }
    }
  }
}

export const api = new ApiClient()