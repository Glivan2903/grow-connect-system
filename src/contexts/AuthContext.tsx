
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextType, User } from "@/types/auth";
import { useToast } from "@/hooks/use-toast";

// Mock users for demo purposes
const mockUsers: User[] = [
  {
    id: "1",
    email: "admin@example.com",
    name: "Admin User",
    role: "superadmin",
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    email: "user@example.com",
    name: "Regular User",
    role: "user",
    status: "active",
    companyName: "Example Company",
    phone: "+55 11 98765-4321",
    document: "12.345.678/0001-90",
    address: "Av. Paulista, 1000, São Paulo - SP",
    plan: "Premium",
    expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date().toISOString(),
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, rememberMe: boolean) => {
    setIsLoading(true);
    
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const foundUser = mockUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
      
      if (!foundUser || password !== "password") {
        throw new Error("Credenciais inválidas");
      }
      
      if (foundUser.status === "blocked") {
        throw new Error("Sua conta está bloqueada. Entre em contato com o suporte.");
      }
      
      if (foundUser.status === "inactive") {
        throw new Error("Sua conta está inativa. Entre em contato com o suporte.");
      }
      
      setUser(foundUser);
      
      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify(foundUser));
      }
      
      toast({
        title: "Login bem-sucedido",
        description: `Bem-vindo(a), ${foundUser.name}!`,
      });
      
      // Redirect based on role
      if (foundUser.role === "superadmin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }
      
    } catch (error: any) {
      toast({
        title: "Erro de autenticação",
        description: error.message || "Falha na tentativa de login",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso",
    });
  };

  const requestPasswordReset = async (email: string) => {
    setIsLoading(true);
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const foundUser = mockUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
      
      if (!foundUser) {
        throw new Error("Email não encontrado");
      }
      
      toast({
        title: "Email enviado",
        description: "Se o email existir em nosso sistema, você receberá as instruções para redefinir sua senha.",
      });
      
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Falha ao solicitar redefinição de senha",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (token: string, newPassword: string) => {
    setIsLoading(true);
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Senha redefinida",
        description: "Sua senha foi atualizada com sucesso",
      });
      
      navigate("/login");
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Falha ao redefinir a senha",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
        requestPasswordReset,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
