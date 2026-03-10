import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { IPhoneFrame } from "@/components/IPhoneFrame";
import SplashScreen from "@/pages/SplashScreen";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import ProfilePage from "@/pages/ProfilePage";
import SurveyStartPage from "@/pages/SurveyStartPage";
import SurveyQuestionPage from "@/pages/SurveyQuestionPage";
import TasksPage from "@/pages/TasksPage";
import PerformancePage from "@/pages/PerformancePage";
import NotificationsPage from "@/pages/NotificationsPage";
import ShareSurveyPage from "@/pages/ShareSurveyPage";
import SettingsPage from "@/pages/SettingsPage";
import LeaveApplicationPage from "@/pages/LeaveApplicationPage";
import PhotoCapturePage from "@/pages/PhotoCapturePage";
import SupervisorPage from "@/pages/SupervisorPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function AppRoutes() {
  return (
    <IPhoneFrame>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="/survey/start" element={<ProtectedRoute><SurveyStartPage /></ProtectedRoute>} />
        <Route path="/survey/questions/:type" element={<ProtectedRoute><SurveyQuestionPage /></ProtectedRoute>} />
        <Route path="/survey/photo" element={<ProtectedRoute><PhotoCapturePage /></ProtectedRoute>} />
        <Route path="/tasks" element={<ProtectedRoute><TasksPage /></ProtectedRoute>} />
        <Route path="/performance" element={<ProtectedRoute><PerformancePage /></ProtectedRoute>} />
        <Route path="/notifications" element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} />
        <Route path="/share" element={<ProtectedRoute><ShareSurveyPage /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
        <Route path="/leave" element={<ProtectedRoute><LeaveApplicationPage /></ProtectedRoute>} />
        <Route path="/supervisor" element={<ProtectedRoute><SupervisorPage /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </IPhoneFrame>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
