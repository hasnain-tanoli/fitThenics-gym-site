import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from './components/layout/MainLayout';
import DashboardLayout from './components/layout/DashboardLayout';
import DashboardSkeleton from './components/ui/DashboardSkeleton';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Facilities = lazy(() => import('./pages/Facilities'));
const Trainers = lazy(() => import('./pages/Trainers'));
const Membership = lazy(() => import('./pages/Membership'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./features/auth/Login'));
const Register = lazy(() => import('./features/auth/Register'));
const Onboarding = lazy(() => import('./pages/Onboarding'));
const WorkoutCalendarPage = lazy(() => import('./pages/WorkoutCalendarPage'));
const WorkoutBuilderPage = lazy(() => import('./pages/WorkoutBuilderPage'));
const WorkoutDetailPage = lazy(() => import('./pages/WorkoutDetailPage'));
const WorkoutHistoryPage = lazy(() => import('./pages/WorkoutHistoryPage'));
const CalorieCalculatorPage = lazy(() => import('./pages/CalorieCalculatorPage'));
const MealPlanPage = lazy(() => import('./pages/MealPlanPage'));
const FoodDiaryPage = lazy(() => import('./pages/FoodDiaryPage'));
const MemberDashboard = lazy(() => import('./pages/MemberDashboard'));
const AdminPanel = lazy(() => import('./pages/AdminPanel'));
const ForumPage = lazy(() => import('./pages/ForumPage'));
const ThreadPage = lazy(() => import('./pages/ThreadPage'));
import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      // Public routes remain here
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/facilities", element: <Facilities /> },
      { path: "/trainers", element: <Trainers /> },
      { path: "/membership", element: <Membership /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    element: <PrivateRoute roles={['member', 'admin']} />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          // All member-only pages go here
          { path: "/member-dashboard", element: <MemberDashboard /> },
          { path: "/onboarding", element: <Onboarding /> },
          { path: "/workouts", element: <WorkoutCalendarPage /> },
          { path: "/workout-builder", element: <WorkoutBuilderPage /> },
          { path: "/workout/:id", element: <WorkoutDetailPage /> },
          { path: "/workout-history", element: <WorkoutHistoryPage /> },
          { path: "/calorie-calculator", element: <CalorieCalculatorPage /> },
          { path: "/meal-plan", element: <MealPlanPage /> },
          { path: "/food-diary", element: <FoodDiaryPage /> },
          { path: "/forum", element: <ForumPage /> },
          { path: "/forum/thread/:id", element: <ThreadPage /> },
          { path: "/admin-panel", element: <AdminPanel /> }, // This can stay here, protected by role
        ],
      },
    ],
  },
]);

function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={<DashboardSkeleton />}>
        <RouterProvider router={router} />
      </Suspense>
      <ToastContainer />
    </HelmetProvider>
  );
}

export default App;
