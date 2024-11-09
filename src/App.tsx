import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider, useSession } from '@supabase/auth-helpers-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HealthNutritionOverview from "./pages/HealthNutritionOverview";
import HealthNutritionDescription from "./pages/HealthNutritionDescription";
import NutritionDashboard from "@/components/nutrition/NutritionDashboard";
import { supabase } from "./integrations/supabase/client";

const queryClient = new QueryClient();

function App() {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AuthStateHandler />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/health-nutrition-description" element={<HealthNutritionDescription />} />
            <Route 
              path="/health-nutrition" 
              element={
                <RequireAuth>
                  <HealthNutritionOverview />
                </RequireAuth>
              } 
            />
            <Route 
              path="/nutrition-dashboard" 
              element={
                <RequireAuth>
                  <NutritionDashboard />
                </RequireAuth>
              } 
            />
          </Routes>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </SessionContextProvider>
  );
}

// Auth state handler component
function AuthStateHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        navigate('/health-nutrition');
      } else if (event === 'SIGNED_OUT') {
        navigate('/login');
      }
    });
  }, [navigate]);

  return null;
}

// Auth protection component
function RequireAuth({ children }: { children: React.ReactNode }) {
  const session = useSession();
  
  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default App;