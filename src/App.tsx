
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Layouts
import AdminLayout from "./components/layout/AdminLayout";
import UserLayout from "./components/layout/UserLayout";

// Auth Pages
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/login/ForgotPassword";
import ResetPassword from "./pages/login/ResetPassword";
import BlockedAccess from "./pages/BlockedAccess";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";

// User Pages
import UserDashboard from "./pages/user/Dashboard";

// Not Found
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/esqueci-senha" element={<ForgotPassword />} />
            <Route path="/redefinir-senha/:token" element={<ResetPassword />} />
            <Route path="/acesso-bloqueado" element={<BlockedAccess />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="usuarios" element={<div className="p-4">Listagem de Usuários</div>} />
              <Route path="clientes" element={<div className="p-4">Listagem de Clientes</div>} />
              <Route path="planos" element={<div className="p-4">Gestão de Planos</div>} />
              <Route path="servicos" element={<div className="p-4">Gestão de Serviços</div>} />
              <Route path="whatsapp" element={<div className="p-4">Gestão de WhatsApp</div>} />
              <Route path="disparos" element={<div className="p-4">Disparos em Massa</div>} />
              <Route path="configuracoes" element={<div className="p-4">Configurações</div>} />
            </Route>
            
            {/* User Routes */}
            <Route path="/" element={<UserLayout />}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<UserDashboard />} />
              <Route path="clientes" element={<div className="p-4">Meus Clientes</div>} />
              <Route path="planos" element={<div className="p-4">Meus Planos</div>} />
              <Route path="servicos" element={<div className="p-4">Serviços Disponíveis</div>} />
              <Route path="whatsapp" element={<div className="p-4">Minha Conexão WhatsApp</div>} />
              <Route path="disparos" element={<div className="p-4">Meus Disparos</div>} />
            </Route>
            
            {/* Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
