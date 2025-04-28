
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Users, TrendingUp, BarChart3, DollarSign, Package, AlertTriangle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock data for charts
  const monthlyRevenueData = [
    { name: "Jan", valor: 12500 },
    { name: "Fev", valor: 14800 },
    { name: "Mar", valor: 13100 },
    { name: "Abr", valor: 15400 },
    { name: "Mai", valor: 16200 },
    { name: "Jun", valor: 19700 },
    { name: "Jul", valor: 20300 },
    { name: "Ago", valor: 22100 },
    { name: "Set", valor: 24500 },
    { name: "Out", valor: 25700 },
    { name: "Nov", valor: 27200 },
    { name: "Dez", valor: 29300 },
  ];

  const userGrowthData = [
    { name: "Jan", ativos: 45, inativos: 5 },
    { name: "Fev", ativos: 52, inativos: 7 },
    { name: "Mar", ativos: 61, inativos: 8 },
    { name: "Abr", ativos: 67, inativos: 10 },
    { name: "Mai", ativos: 72, inativos: 11 },
    { name: "Jun", ativos: 85, inativos: 12 },
    { name: "Jul", ativos: 91, inativos: 14 },
    { name: "Ago", ativos: 99, inativos: 15 },
    { name: "Set", ativos: 110, inativos: 17 },
    { name: "Out", ativos: 123, inativos: 18 },
    { name: "Nov", ativos: 131, inativos: 19 },
    { name: "Dez", ativos: 142, inativos: 20 },
  ];

  const popularPlans = [
    { name: "Premium", count: 78 },
    { name: "Básico", count: 45 },
    { name: "Avançado", count: 58 },
    { name: "Enterprise", count: 25 },
  ];

  const popularServices = [
    { name: "WebMarketing", count: 120 },
    { name: "SocialMedia", count: 92 },
    { name: "SEO", count: 85 },
    { name: "Email Marketing", count: 67 },
  ];

  // Mock data for users approaching expiration
  const usersApproachingExpiration = [
    {
      id: "1",
      name: "Empresa XYZ",
      plan: "Premium",
      expirationDate: "2025-05-10",
      daysRemaining: 12,
    },
    {
      id: "2",
      name: "Consultoria ABC",
      plan: "Enterprise",
      expirationDate: "2025-05-08",
      daysRemaining: 10,
    },
    {
      id: "3",
      name: "Lojas UVW",
      plan: "Avançado",
      expirationDate: "2025-05-05",
      daysRemaining: 7,
    },
    {
      id: "4",
      name: "Serviços DEF",
      plan: "Básico",
      expirationDate: "2025-05-02",
      daysRemaining: 4,
    },
    {
      id: "5",
      name: "Marketing GHI",
      plan: "Premium",
      expirationDate: "2025-04-30",
      daysRemaining: 2,
    },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard SuperADMIN</h1>
      </div>

      {/* Stats summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="card-stats">
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="text-gray-500 flex items-center text-sm font-medium">
              <Users className="h-4 w-4 mr-2 text-primary" />
              Total de Usuários
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold">162</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 font-medium">+8.2%</span> este mês
                </p>
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-green-600">
                  <div className="font-medium">142</div>
                  <span className="text-xs">ativos</span>
                </div>
                <div className="flex items-center gap-1 text-red-500">
                  <div className="font-medium">20</div>
                  <span className="text-xs">inativos</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-stats">
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="text-gray-500 flex items-center text-sm font-medium">
              <TrendingUp className="h-4 w-4 mr-2 text-primary" />
              Clientes Gerenciados
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold">3,854</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 font-medium">+12.4%</span> este mês
                </p>
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-green-600">
                  <div className="font-medium">23.8</div>
                  <span className="text-xs">média/usuário</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-stats">
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="text-gray-500 flex items-center text-sm font-medium">
              <DollarSign className="h-4 w-4 mr-2 text-primary" />
              Faturamento Mensal
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold">{formatCurrency(29300)}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 font-medium">+6.1%</span> este mês
                </p>
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-blue-600">
                  <div className="font-medium">{formatCurrency(181)}</div>
                  <span className="text-xs">média/usuário</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-stats">
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="text-gray-500 flex items-center text-sm font-medium">
              <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
              Vencimentos Próximos
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold">15</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-amber-500 font-medium">5</span> nos próximos 7 dias
                </p>
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-amber-500">
                  <div className="font-medium">9.3%</div>
                  <span className="text-xs">da base</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">Faturamento Mensal</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={monthlyRevenueData}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis
                  fontSize={12}
                  tickFormatter={(value) => `R$${value / 1000}k`}
                />
                <Tooltip
                  formatter={(value: number) => [
                    formatCurrency(value),
                    "Receita",
                  ]}
                />
                <Line
                  type="monotone"
                  dataKey="valor"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">Crescimento de Usuários</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={userGrowthData}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Legend />
                <Bar dataKey="ativos" name="Ativos" fill="#10b981" stackId="a" />
                <Bar dataKey="inativos" name="Inativos" fill="#f87171" stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* More data visualizations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="text-base font-medium">Planos mais populares</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {popularPlans.map((plan, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Package className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium">{plan.name}</span>
                  </div>
                  <div className="text-sm font-semibold">{plan.count} usuários</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="text-base font-medium">Serviços mais utilizados</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {popularServices.map((service, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BarChart3 className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium">{service.name}</span>
                  </div>
                  <div className="text-sm font-semibold">{service.count} clientes</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="text-base font-medium">Vencimentos Próximos</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {usersApproachingExpiration.map((user) => (
                <div key={user.id} className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{user.name}</span>
                    <span className="text-xs text-muted-foreground">{user.plan}</span>
                  </div>
                  <div className={`text-sm font-semibold ${
                    user.daysRemaining <= 3
                      ? "text-red-500"
                      : user.daysRemaining <= 7
                      ? "text-amber-500"
                      : "text-green-600"
                  }`}>
                    {user.daysRemaining} dias
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
