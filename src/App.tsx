import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './constants';
import { LandingPage } from './pages/Landing';
import { LoginPage, RegisterPage } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
import { CandidatesPage } from './pages/Candidates';
import { SupervisorPWA } from './pages/Supervisor';
import { CorrectionPage } from './pages/Correction';
import { DeliberationPage } from './pages/Deliberation';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path={ROUTES.HOME} element={<LandingPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        
        {/* Protected Routes (Mocked Auth) */}
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.CANDIDATES} element={<CandidatesPage />} />
        <Route path={ROUTES.SUPERVISOR} element={<SupervisorPWA />} />
        <Route path={ROUTES.CORRECTION} element={<CorrectionPage />} />
        <Route path={ROUTES.DELIBERATION} element={<DeliberationPage />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
    </Router>
  );
}
