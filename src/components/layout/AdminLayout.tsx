
import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import {
  BarChart3,
  Users,
  Package,
  Store,
  MessageSquare,
  Megaphone,
  Bell,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const AdminLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logout bem-sucedido",
      description: "Você saiu do sistema com sucesso",
    });
  };

  const navigationItems = [
    { 
      name: "Dashboard", 
      path: "/admin/dashboard", 
      icon: <BarChart3 className="h-5 w-5" /> 
    },
    { 
      name: "Usuários", 
      path: "/admin/usuarios", 
      icon: <Users className="h-5 w-5" /> 
    },
    { 
      name: "Clientes", 
      path: "/admin/clientes", 
      icon: <User className="h-5 w-5" /> 
    },
    { 
      name: "Planos", 
      path: "/admin/planos", 
      icon: <Package className="h-5 w-5" /> 
    },
    { 
      name: "Serviços", 
      path: "/admin/servicos", 
      icon: <Store className="h-5 w-5" /> 
    },
    { 
      name: "WhatsApp", 
      path: "/admin/whatsapp", 
      icon: <MessageSquare className="h-5 w-5" /> 
    },
    { 
      name: "Disparo em Massa", 
      path: "/admin/disparos", 
      icon: <Megaphone className="h-5 w-5" /> 
    },
    { 
      name: "Configurações", 
      path: "/admin/configuracoes", 
      icon: <Settings className="h-5 w-5" /> 
    },
  ];

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "SU";

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for desktop */}
      <aside
        className={cn(
          "bg-sidebar text-sidebar-foreground hidden md:flex flex-col z-30 transition-all duration-300 ease-in-out",
          sidebarCollapsed ? "w-16" : "w-64"
        )}
      >
        <div className="flex items-center justify-between p-4 h-16">
          <h1 className={cn("text-xl font-bold transition-opacity", sidebarCollapsed ? "opacity-0 w-0" : "opacity-100")}>
            SysAdmin
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-sidebar-foreground"
          >
            {sidebarCollapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </Button>
        </div>

        <Separator className="bg-sidebar-border" />

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-2 space-y-1">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center px-2 py-2 rounded-md",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50",
                    sidebarCollapsed ? "justify-center" : ""
                  )
                }
              >
                <span className="flex items-center">
                  {item.icon}
                  <span
                    className={cn(
                      "ml-3 transition-opacity",
                      sidebarCollapsed ? "hidden" : "block"
                    )}
                  >
                    {item.name}
                  </span>
                </span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 bg-sidebar text-sidebar-foreground w-64 z-50 md:hidden transition-transform transform",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 h-16">
          <h1 className="text-xl font-bold">SysAdmin</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="text-sidebar-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>

        <Separator className="bg-sidebar-border" />

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-2 space-y-1">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center px-2 py-2 rounded-md",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                  )
                }
                onClick={closeMobileMenu}
              >
                <span className="flex items-center">
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top navigation bar */}
        <header className="bg-white shadow-sm z-20">
          <div className="flex items-center justify-between px-4 h-16">
            <div className="flex items-center md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="mr-2"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex-1 md:ml-4"></div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium hidden md:inline-block">
                      {user?.name || "Admin"}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Meu Perfil</DropdownMenuItem>
                  <DropdownMenuItem>Configurações</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-500">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
