import { PredictionContextProvider } from "./contexts/PredictionContext";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Overview from "./components/Overview";
import InventoryManagement from "./components/InventoryManagement";
import SpoilagePrediction from "./components/SpoilagePrediction";
import AlertsNotifications from "./components/AlertsNotifications";
import RecommendationsActions from "./components/RecommendationsActions";
import DataAnalytics from "./components/DataAnalytics";
import UserManagement from "./components/UserManagement";
import MachineLearningInsights from "./components/MachineLearningInsights";
import SmartDevices from "./components/SmartDevices";
import HelpSupport from "./components/HelpSupport";
import { AuthProvider } from "./AuthContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./protectedRoute";

// Main App Component
function App() {
  return (
    <AuthProvider>
 
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
            <Route path="overview" element={<Overview />} />
            <Route path="inventory" element={<InventoryManagement />} />
            <Route path="spoilage" element={<SpoilagePrediction />} />
            <Route path="alerts" element={<AlertsNotifications />} />
            <Route
              path="recommendations"
              element={<RecommendationsActions />}
            />
            <Route path="analytics" element={<DataAnalytics />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="ml-insights" element={<MachineLearningInsights />} />
            <Route path="devices" element={<SmartDevices />} />
            <Route path="help" element={<HelpSupport />} />
          </Route>
        </Routes>
    </AuthProvider>
  );
}

// App Wrapper Component with Context Provider
export default function AppWrapper() {
  return (
    <PredictionContextProvider>
      <App />
    </PredictionContextProvider>
  );
}
