
export interface User {
  id: string;
  email: string;
  name: string;
  role: "superadmin" | "user";
  status: "active" | "inactive" | "blocked";
  companyName?: string;
  phone?: string;
  document?: string;
  address?: string;
  plan?: string;
  expirationDate?: string;
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string, rememberMe: boolean) => Promise<void>;
  logout: () => void;
  requestPasswordReset: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
}

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface ResetPasswordFormData {
  email: string;
}
