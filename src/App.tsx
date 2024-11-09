import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/sonner";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HealthNutritionOverview from "./pages/HealthNutritionOverview";
import { supabase } from "./integrations/supabase/client";

const queryClient = new QueryClient();

function App() {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route 
              path="/health-nutrition" 
              element={
                <RequireAuth>
                  <HealthNutritionOverview />
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

// Auth protection component
function RequireAuth({ children }: { children: React.ReactNode }) {
  const session = useSession();
  
  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default App;