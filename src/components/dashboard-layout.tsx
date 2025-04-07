import { Sidebar } from "./sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col bg-white">
        <Sidebar />
      </div>
      <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
        {children}
      </main>
    </div>
  );
} 