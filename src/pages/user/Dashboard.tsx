
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
} from "recharts";
import { Users, TrendingUp, DollarSign, MessageSquare, AlertTriangle, CircleCheck } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";

const UserDashboard: React.FC = () => {
  const { user } = useAuth();

  // Calculate days until expiration
  const daysUntilExpiration = user?.expirationDate
    ? Math.ceil(
        (new Date(user.expirationDate).getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      )
    : null;

  // Mock data for charts
  const clientsPerMonthData = [
    { name: "Jan", ativos: 18, inativos: 3 },
    { name: "Fev", ativos: 22, inativos: 4 },
    { name: "Mar", ativos: 26, inativos: 3 },
    { name: "Abr", ativos: 28, inativos: 4 },
    { name: "Mai", ativos: 30, inativos: 5 },
    { name: "Jun", ativos: 32, inativos: 5 },
    { name: "Jul", ativos: 38, inativos: 6 },
  ];

  const revenueData = [
    { name: "Jan", valor: 5200 },
    { name: "Fev", valor: 5600 },
    { name: "Mar", valor: 6100 },
    { name: "Abr", valor: 6300 },
    { name: "Mai", valor: 6800 },
    { name: "Jun", valor: 7200 },
    { name: "Jul", valor: 7700 },
  ];

  // Mock data for expiring clients
  const clientsApproachingExpiration = [
    {
      id: "1",
      name: "João Silva",
      service: "Website",
      expirationDate: "2025-05-10",
      daysRemaining: 12,
    },
    {
      id: "2",
      name: "Maria Oliveira",
      service: "Social Media",
      expirationDate: "2025-05-08",
      daysRemaining: 10,
    },
    {
      id: "3",
      name: "Pedro Santos",
      service: "SEO",
      expirationDate: "2025-05-05",
      daysRemaining: 7,
    },
    {
      id: "4",
      name: "Ana Costa",
      service: "Google Ads",
      expirationDate: "2025-05-02",
      daysRemaining: 4,
    },
    {
      id: "5",
      name: "Carlos Ferreira",
      service: "Email Marketing",
      expirationDate: "2025-04-30",
      daysRemaining: 2,
    },
  ];

  const whatsAppStatus = {
    status: "connected", // connected, disconnected, connecting
    messages24h: 178,
    readRate: 92,
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="text-sm text-muted-foreground">
          Bem-vindo, <span className="font-medium text-foreground">{user?.name}</span>
        </div>
      </div>

      {/* Expiration warning */}
      {daysUntilExpiration !== null && daysUntilExpiration < 15 && (
        <Alert variant={daysUntilExpiration <= 3 ? "destructive" : "warning"} className="animate-fade-in">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>
            {daysUntilExpiration <= 0
              ? "Seu acesso expirou!"
              : "Seu acesso expira em breve!"}
          </AlertTitle>
          <AlertDescription>
            {daysUntilExpiration <= 0
              ? "Entre em contato com o suporte para renovar sua assinatura e evitar a suspensão dos serviços."
              : `Restam apenas ${daysUntilExpiration} dias para renovar sua assinatura. Entre em contato com o suporte para mais informações.`}
          </AlertDescription>
        </Alert>
      )}

      {/* Stats summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="card-stats">
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="text-gray-500 flex items-center text-sm font-medium">
              <Users className="h-4 w-4 mr-2 text-primary" />
              Total de Clientes
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold">44</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 font-medium">+15.7%</span> este mês
                </p>
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-green-600">
                  <div className="font-medium">38</div>
                  <span className="text-xs">ativos</span>
                </div>
                <div className="flex items-center gap-1 text-red-500">
                  <div className="font-medium">6</div>
                  <span className="text-xs">inativos</span>
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
                <div className="text-3xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-amber-500 font-medium">2</span> nos próximos 7 dias
                </p>
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-amber-500">
                  <div className="font-medium">11.4%</div>
                  <span className="text-xs">da base</span>
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
                <div className="text-3xl font-bold">{formatCurrency(7700)}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 font-medium">+6.9%</span> este mês
                </p>
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-blue-600">
                  <div className="font-medium">{formatCurrency(175)}</div>
                  <span className="text-xs">média/cliente</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-stats">
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="text-gray-500 flex items-center text-sm font-medium">
              <MessageSquare className="h-4 w-4 mr-2 text-primary" />
              Status WhatsApp
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <Badge variant={whatsAppStatus.status === "connected" ? "success" : whatsAppStatus.status === "connecting" ? "warning" : "destructive"} className="flex items-center gap-1">
                  {whatsAppStatus.status === "connected" ? (
                    <>
                      <CircleCheck className="h-3 w-3" />
                      <span>Conectado</span>
                    </>
                  ) : whatsAppStatus.status === "connecting" ? (
                    <>
                      <div className="h-3 w-3 rounded-full bg-amber-500 animate-pulse" />
                      <span>Conectando</span>
                    </>
                  ) : (
                    <>
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <span>Desconectado</span>
                    </>
                  )}
                </Badge>
                <div className="text-sm font-medium">{whatsAppStatus.messages24h} msgs/24h</div>
              </div>
              <div className="text-xs text-muted-foreground">
                Taxa de leitura: <span className="font-medium text-green-500">{whatsAppStatus.readRate}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">Clientes por Mês</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={clientsPerMonthData}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Bar dataKey="ativos" name="Ativos" fill="#10b981" stackId="a" />
                <Bar dataKey="inativos" name="Inativos" fill="#f87171" stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">Faturamento Mensal</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={revenueData}
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
      </div>

      {/* Expiring clients */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium">Clientes Próximos ao Vencimento</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-200">
                  <th className="pb-2 font-medium text-muted-foreground">Cliente</th>
                  <th className="pb-2 font-medium text-muted-foreground">Serviço</th>
                  <th className="pb-2 font-medium text-muted-foreground">Vencimento</th>
                  <th className="pb-2 font-medium text-muted-foreground text-right">Dias Restantes</th>
                </tr>
              </thead>
              <tbody>
                {clientsApproachingExpiration.map((client) => (
                  <tr key={client.id} className="border-b border-gray-100 last:border-0">
                    <td className="py-3 font-medium">{client.name}</td>
                    <td className="py-3">{client.service}</td>
                    <td className="py-3">
                      {new Date(client.expirationDate).toLocaleDateString("pt-BR")}
                    </td>
                    <td className="py-3 text-right">
                      <Badge variant={
                        client.daysRemaining <= 3
                          ? "destructive"
                          : client.daysRemaining <= 7
                          ? "warning"
                          : "default"
                      }>
                        {client.daysRemaining} dias
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;
