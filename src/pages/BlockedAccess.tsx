
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Mail, Phone } from "lucide-react";

const BlockedAccess: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-red-50 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </div>
          <CardTitle className="text-xl text-red-600">Acesso Bloqueado</CardTitle>
          <CardDescription className="text-base">
            Seu acesso ao sistema está temporariamente bloqueado devido a pendências de pagamento.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center text-sm text-gray-500">
            <p>
              Para reativar seu acesso, por favor regularize seus pagamentos ou 
              entre em contato com o suporte para mais informações.
            </p>
          </div>

          <div className="space-y-4">
            <Button variant="default" className="w-full flex items-center justify-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Contato por Email</span>
            </Button>
            
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Contato por Telefone</span>
            </Button>
          </div>

          <div className="text-center text-xs text-gray-400 pt-4">
            <p>
              Após a confirmação do pagamento, seu acesso será restaurado automaticamente
              em até 1 hora.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlockedAccess;
