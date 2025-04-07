import { createBrowserRouter, Outlet, Navigate, useLocation } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard-layout";
import { ProtectedRoute } from "@/components/protected-route";
import LandingPage from "@/pages";
import { Login } from "@/pages/painel/login";
import { Dashboard } from "@/pages/dashboard";
import { Orders } from "@/pages/dashboard/orders";
import { Users } from "@/pages/dashboard/users";
import { Analytics } from "@/pages/dashboard/analytics";
import { Settings } from "@/pages/dashboard/settings";
import { useAuth } from "@/hooks/use-auth";

import Header from "./components/header";
import Logo from "./components/Logo";
import { NotFound } from "./pages/404";

export function AppLayout() {
  const { user } = useAuth();
  const location = useLocation();
  
  if (!user && location.pathname !== '/painel/login') {
    return <Navigate to="/painel/login" replace />;
  }

  return (
    <div className="flex min-h-screen flex-col antialiased ">
      <Header />
      <div className="px-8 py-4 h-full w-full">
        <Outlet />
      </div>
    </div>
  );
}

export function AuthLayout() {
  const { user } = useAuth();
  const location = useLocation();
  
  if (user && location.pathname === '/painel/login') {
    return <Navigate to="/painel/dashboard" replace />;
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
    path: "/painel",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/painel/orders", element: <Orders /> },
      { path: "/painel/dashboard", element: <Dashboard /> },
    ],
  },
  {
    path: "/painel",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [{ path: "/painel/login", element: <Login /> }],
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
  {
    path: "/dashboard/users",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <Users />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/analytics",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <Analytics />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/settings",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <Settings />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
]);
