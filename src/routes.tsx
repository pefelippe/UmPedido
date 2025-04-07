import { createBrowserRouter, Outlet, Navigate, useLocation } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard-layout";
import { ProtectedRoute } from "@/components/protected-route";
import LandingPage from "@/pages";
import { Login } from "@/pages/app/login";
import Dashboard from "@/pages/app/dashboard";
import Orders from "@/pages/app/orders";
import Store from "@/pages/app/store";
import Products from "@/pages/app/products";
import Menu from "@/pages/app/menu";
import Customers from "@/pages/app/customers";
import Payments from "@/pages/app/payments";
import Reports from "@/pages/app/reports";
import Notifications from "@/pages/app/notifications";
import Help from "@/pages/app/help";
import Settings from "@/pages/app/settings";
import { useAuth } from "@/hooks/use-auth";

import SidePanel from "./components/header";
import Logo from "./components/Logo";
import { NotFound } from "./pages/404";

export function AppLayout() {
  const { user } = useAuth();
  const location = useLocation();
  
  if (!user && location.pathname !== '/app/login') {
    return <Navigate to="/app/login" replace />;
  }

  return (
    <div className="flex min-h-screen antialiased">
      <SidePanel />
      <main className="flex-1 md:ml-64">
        <div className="px-8 py-4 h-full w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export function AuthLayout() {
  const { user } = useAuth();
  const location = useLocation();
  
  if (user && location.pathname === '/app/login') {
    return <Navigate to="/app/dashboard" replace />;
  }

  return (
    <div className="relative h-full w-full flex flex-col md:flex-row bg-white">
      <div className="fixed h-20 py-6 px-4 sm:px-6 lg:px-8  text-white z-50">
        <Logo />
      </div>
      <div className="flex-1 h-full flex flex-col w-full mx-auto ">
        <Outlet />
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/app",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      // Dashboard Section
      { path: "/app/dashboard", element: <Dashboard /> },
      { path: "/app/insights", element: <Dashboard /> },
      
      // Store Management Section
      { path: "/app/store", element: <Store /> },
      { path: "/app/products", element: <Products /> },
      { path: "/app/orders", element: <Orders /> },
      { path: "/app/menu", element: <Menu /> },
      
      // Business Section
      { path: "/app/customers", element: <Customers /> },
      { path: "/app/payments", element: <Payments /> },
      { path: "/app/reports", element: <Reports /> },
      
      // Support Section
      { path: "/app/notifications", element: <Notifications /> },
      { path: "/app/help", element: <Help /> },
      { path: "/app/settings", element: <Settings /> },
    ],
  },
  {
    path: "/app",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [{ path: "/app/login", element: <Login /> }],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <Dashboard />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/orders",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <Orders />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
]);
