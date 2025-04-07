import { useState } from "react";
import { 
  Home, 
  UtensilsCrossedIcon, 
  Menu, 
  X, 
  LogOut, 
  Settings, 
  BarChart2, 
  Store, 
  Package, 
  Users, 
  Bell, 
  HelpCircle,
  ShoppingCart,
  FileText,
  CreditCard
} from "lucide-react";
import NavLink from "./nav-link";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./language-selector";
import { useAuth } from "@/hooks/use-auth";

function SidePanel() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { user, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="hidden md:flex flex-col h-screen w-72 border-r border-gray-800 fixed left-0 top-0 bg-gray-900">
        <div className="p-6 border-b border-gray-800 mb-6">
          <h1 className="text-2xl font-bold text-white font-extrabold">UmPedido</h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-10 overflow-y-auto">
          {/* Dashboard Section */}
          <div className=" flex flex-col">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">
              {t("header.dashboard")}
            </h2>
            <NavLink to="/app/dashboard" className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
              <div className="flex items-center gap-3">
                <Home className="h-5 w-5" />
                {t("header.home")}
              </div>
            </NavLink>

          </div>

          {/* Store Management Section */}
          <div className="flex flex-col">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">
              {t("header.storeManagement")}
            </h2>
            <NavLink to="/app/store" className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
              <div className="flex items-center gap-3">
                <Store className="h-5 w-5" />
                {t("header.myStore")}
              </div>
            </NavLink>
            <NavLink to="/app/products" className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5" />
                {t("header.products")}
              </div>
            </NavLink>
            <NavLink to="/app/orders" className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
              <div className="flex items-center gap-3">
                <ShoppingCart className="h-5 w-5" />
                {t("header.orders")}
              </div>
            </NavLink>
    
          </div>

          {/* Business Section */}
          <div className="flex flex-col">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">
              {t("header.business")}
            </h2>
            <NavLink to="/app/customers" className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5" />
                {t("header.customers")}
              </div>
            </NavLink>
            <NavLink to="/app/payments" className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5" />
                {t("header.payments")}
              </div>
            </NavLink>
            <NavLink to="/app/reports" className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5" />
                {t("header.reports")}
              </div>
            </NavLink>
          </div>

          {/* Support Section */}
          <div className="flex flex-col">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">
              {t("header.support")}
            </h2>
            <NavLink to="/app/notifications" className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5" />
                {t("header.notifications")}
              </div>
            </NavLink>
            <NavLink to="/app/help" className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
              <div className="flex items-center gap-3">
                <HelpCircle className="h-5 w-5" />
                {t("header.help")}
              </div>
            </NavLink>
            <NavLink to="/app/settings" className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
              <div className="flex items-center gap-3">
                <Settings className="h-5 w-5" />
                {t("header.settings")}
              </div>
            </NavLink>
          </div>
        </nav>

        <div className="border-t border-gray-800 p-6 space-y-8">
          <div className="flex flex-col space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-medium">
                {user?.name?.[0]?.toUpperCase()}
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-white">{user?.name}</span>
                <span className="text-sm text-gray-400">{user?.email}</span>
              </div>
            </div>
            {user?.store && (
              <div className="text-sm text-gray-400 bg-gray-800 rounded-md px-3 py-2">
                {user.store.name}
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            <Button 
              variant="ghost" 
              className="w-full justify-start bg-gray-800 text-white py-3 hover:bg-gray-700 hover:text-white/80" 
              onClick={logout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              {t("header.logout")}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button variant="ghost" onClick={toggleMenu} className="bg-gray-900 text-white hover:bg-gray-800">
          <Menu />
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed left-0 top-0 bottom-0 w-72 bg-gray-900 shadow-lg">
            <div className="p-6 flex justify-between items-center border-b border-gray-800">
              <h1 className="text-xl font-bold text-white">UmPedido</h1>
              <Button variant="ghost" onClick={toggleMenu} className="text-gray-400 hover:text-white">
                <X size={24} />
              </Button>
            </div>
            <nav className="px-4 py-4 space-y-10 overflow-y-auto h-[calc(100vh-200px)]">
              {/* Dashboard Section */}
              <div className="space-y-3">
                <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">
                  {t("header.dashboard")}
                </h2>
                <NavLink to="/app/dashboard" onClick={toggleMenu} className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
                  <div className="flex items-center gap-3">
                    <Home className="h-5 w-5" />
                    {t("header.home")}
                  </div>
                </NavLink>
                <NavLink to="/app/insights" onClick={toggleMenu} className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
                  <div className="flex items-center gap-3">
                    <BarChart2 className="h-5 w-5" />
                    {t("header.insights")}
                  </div>
                </NavLink>
              </div>

              {/* Store Management Section */}
              <div className="space-y-3">
                <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">
                  {t("header.storeManagement")}
                </h2>
                <NavLink to="/app/store" onClick={toggleMenu} className="text-gray-300 hover:bg-gray-800 hover:text-white py- px-3 rounded-md">
                  <div className="flex items-center gap-3">
                    <Store className="h-5 w-5" />
                    {t("header.myStore")}
                  </div>
                </NavLink>
                <NavLink to="/app/products" onClick={toggleMenu} className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
                  <div className="flex items-center gap-3">
                    <Package className="h-5 w-5" />
                    {t("header.products")}
                  </div>
                </NavLink>
                <NavLink to="/app/orders" onClick={toggleMenu} className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
                  <div className="flex items-center gap-3">
                    <ShoppingCart className="h-5 w-5" />
                    {t("header.orders")}
                  </div>
                </NavLink>
                <NavLink to="/app/menu" onClick={toggleMenu} className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
                  <div className="flex items-center gap-3">
                    <UtensilsCrossedIcon className="h-5 w-5" />
                    {t("header.menu")}
                  </div>
                </NavLink>
              </div>

              {/* Business Section */}
              <div className="space-y-3">
                <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">
                  {t("header.business")}
                </h2>
                <NavLink to="/app/customers" onClick={toggleMenu} className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5" />
                    {t("header.customers")}
                  </div>
                </NavLink>
                <NavLink to="/app/payments" onClick={toggleMenu} className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5" />
                    {t("header.payments")}
                  </div>
                </NavLink>
                <NavLink to="/app/reports" onClick={toggleMenu} className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5" />
                    {t("header.reports")}
                  </div>
                </NavLink>
              </div>

              {/* Support Section */}
              <div className="space-y-3">
                <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">
                  {t("header.support")}
                </h2>
                <NavLink to="/app/notifications" onClick={toggleMenu} className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
                  <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5" />
                    {t("header.notifications")}
                  </div>
                </NavLink>
                <NavLink to="/app/help" onClick={toggleMenu} className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5" />
                    {t("header.help")}
                  </div>
                </NavLink>
                <NavLink to="/app/settings" onClick={toggleMenu} className="text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-3 rounded-md">
                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5" />
                    {t("header.settings")}
                  </div>
                </NavLink>
              </div>
            </nav>
            <div className="border-t border-gray-800 px-4 py-6 space-y-8">
              <div className="flex flex-col space-y-5">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-medium">
                    {user?.name?.[0]?.toUpperCase()}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-white">{user?.name}</span>
                    <span className="text-sm text-gray-400">{user?.email}</span>
                  </div>
                </div>
                {user?.store && (
                  <div className="text-sm text-gray-400 bg-gray-800 rounded-md px-3 py-2">
                    {user.store.name}
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <LanguageSelector className="w-full bg-gray-800 text-white" />
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white py-3" 
                  onClick={() => {
                    logout();
                    toggleMenu();
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  {t("header.logout")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SidePanel;
