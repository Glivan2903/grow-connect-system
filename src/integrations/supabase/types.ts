export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      appointments: {
        Row: {
          client_name: string
          created_at: string
          id: string
          notes: string | null
          scheduled_for: string
          status: string
          title: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          client_name: string
          created_at?: string
          id?: string
          notes?: string | null
          scheduled_for: string
          status?: string
          title?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          client_name?: string
          created_at?: string
          id?: string
          notes?: string | null
          scheduled_for?: string
          status?: string
          title?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      campanhas_disparadas: {
        Row: {
          data_envio: string
          delay: number
          id: number
          instancia: string
          nome: string
          quantidade_numeros: number
        }
        Insert: {
          data_envio?: string
          delay?: number
          id?: number
          instancia: string
          nome: string
          quantidade_numeros: number
        }
        Update: {
          data_envio?: string
          delay?: number
          id?: number
          instancia?: string
          nome?: string
          quantidade_numeros?: number
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          active: boolean | null
          bot_message: string | null
          conversation_id: string | null
          created_at: string | null
          data: string | null
          id: number
          message_type: string | null
          phone: string | null
          user_message: string | null
        }
        Insert: {
          active?: boolean | null
          bot_message?: string | null
          conversation_id?: string | null
          created_at?: string | null
          data?: string | null
          id?: number
          message_type?: string | null
          phone?: string | null
          user_message?: string | null
        }
        Update: {
          active?: boolean | null
          bot_message?: string | null
          conversation_id?: string | null
          created_at?: string | null
          data?: string | null
          id?: number
          message_type?: string | null
          phone?: string | null
          user_message?: string | null
        }
        Relationships: []
      }
      chats: {
        Row: {
          app: string | null
          conversation_id: string | null
          created_at: string | null
          id: number
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          app?: string | null
          conversation_id?: string | null
          created_at?: string | null
          id?: number
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          app?: string | null
          conversation_id?: string | null
          created_at?: string | null
          id?: number
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      cliente_servicos: {
        Row: {
          cliente_id: string | null
          criado_em: string | null
          id: string
          servico_id: string | null
        }
        Insert: {
          cliente_id?: string | null
          criado_em?: string | null
          id?: string
          servico_id?: string | null
        }
        Update: {
          cliente_id?: string | null
          criado_em?: string | null
          id?: string
          servico_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cliente_servicos_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cliente_servicos_servico_id_fkey"
            columns: ["servico_id"]
            isOneToOne: false
            referencedRelation: "servicos"
            referencedColumns: ["id"]
          },
        ]
      }
      clientes: {
        Row: {
          admin_id: string | null
          atualizado_em: string | null
          criado_em: string | null
          documento: string | null
          email: string
          endereco: string | null
          expira_em: string
          id: string
          nome: string
          plano_id: string | null
          recorrente: boolean | null
          renovacao_automatica: boolean | null
          status: string
          telefone: string
        }
        Insert: {
          admin_id?: string | null
          atualizado_em?: string | null
          criado_em?: string | null
          documento?: string | null
          email: string
          endereco?: string | null
          expira_em: string
          id?: string
          nome: string
          plano_id?: string | null
          recorrente?: boolean | null
          renovacao_automatica?: boolean | null
          status?: string
          telefone: string
        }
        Update: {
          admin_id?: string | null
          atualizado_em?: string | null
          criado_em?: string | null
          documento?: string | null
          email?: string
          endereco?: string | null
          expira_em?: string
          id?: string
          nome?: string
          plano_id?: string | null
          recorrente?: boolean | null
          renovacao_automatica?: boolean | null
          status?: string
          telefone?: string
        }
        Relationships: [
          {
            foreignKeyName: "clientes_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "perfis"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clientes_plano_id_fkey"
            columns: ["plano_id"]
            isOneToOne: false
            referencedRelation: "planos"
            referencedColumns: ["id"]
          },
        ]
      }
      dados_cliente: {
        Row: {
          asaas_customer_id: string | null
          cpf_cnpj: string | null
          created_at: string | null
          email: string | null
          id: number
          nome: string | null
          nome_pet: string | null
          payments: Json | null
          porte_pet: string | null
          raca_pet: string | null
          sessionid: string | null
          telefone: string | null
        }
        Insert: {
          asaas_customer_id?: string | null
          cpf_cnpj?: string | null
          created_at?: string | null
          email?: string | null
          id?: number
          nome?: string | null
          nome_pet?: string | null
          payments?: Json | null
          porte_pet?: string | null
          raca_pet?: string | null
          sessionid?: string | null
          telefone?: string | null
        }
        Update: {
          asaas_customer_id?: string | null
          cpf_cnpj?: string | null
          created_at?: string | null
          email?: string | null
          id?: number
          nome?: string | null
          nome_pet?: string | null
          payments?: Json | null
          porte_pet?: string | null
          raca_pet?: string | null
          sessionid?: string | null
          telefone?: string | null
        }
        Relationships: []
      }
      documents: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
          titulo: string | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
          titulo?: string | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
          titulo?: string | null
        }
        Relationships: []
      }
      n8n_chat_histories: {
        Row: {
          id: number
          message: Json
          session_id: string
        }
        Insert: {
          id?: number
          message: Json
          session_id: string
        }
        Update: {
          id?: number
          message?: Json
          session_id?: string
        }
        Relationships: []
      }
      pausa_bot: {
        Row: {
          data: string | null
          id: number
          number: string | null
          status: string | null
        }
        Insert: {
          data?: string | null
          id?: number
          number?: string | null
          status?: string | null
        }
        Update: {
          data?: string | null
          id?: number
          number?: string | null
          status?: string | null
        }
        Relationships: []
      }
      perfis: {
        Row: {
          atualizado_em: string | null
          criado_em: string | null
          email: string
          id: string
          nome: string
          telefone: string | null
          tipo: string
        }
        Insert: {
          atualizado_em?: string | null
          criado_em?: string | null
          email: string
          id: string
          nome?: string
          telefone?: string | null
          tipo: string
        }
        Update: {
          atualizado_em?: string | null
          criado_em?: string | null
          email?: string
          id?: string
          nome?: string
          telefone?: string | null
          tipo?: string
        }
        Relationships: []
      }
      planos: {
        Row: {
          atualizado_em: string | null
          criado_em: string | null
          descricao: string | null
          id: string
          nome: string
          periodicidade: string
          recursos: string[] | null
          status: string
          valor: number
        }
        Insert: {
          atualizado_em?: string | null
          criado_em?: string | null
          descricao?: string | null
          id?: string
          nome: string
          periodicidade: string
          recursos?: string[] | null
          status?: string
          valor: number
        }
        Update: {
          atualizado_em?: string | null
          criado_em?: string | null
          descricao?: string | null
          id?: string
          nome?: string
          periodicidade?: string
          recursos?: string[] | null
          status?: string
          valor?: number
        }
        Relationships: []
      }
      servicos: {
        Row: {
          atualizado_em: string | null
          criado_em: string | null
          descricao: string | null
          id: string
          nome: string
          status: string
          valor: number
        }
        Insert: {
          atualizado_em?: string | null
          criado_em?: string | null
          descricao?: string | null
          id?: string
          nome: string
          status?: string
          valor: number
        }
        Update: {
          atualizado_em?: string | null
          criado_em?: string | null
          descricao?: string | null
          id?: string
          nome?: string
          status?: string
          valor?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
