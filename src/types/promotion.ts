export interface PromotionProps {
  id: number;
  name: string;
  starts_at: string;
  ends_at?: any;
  microsite_url: string;
  status: string;
  created_at: string;
  updated_at: string;
  form: Form;
}

export interface Form {
  name: string;
  created_at: string;
  updated_at: string;
  fields: Field[];
}

export interface Field {
  id: number;
  name: string;
  is_identifier_field: boolean;
  is_uid_field: boolean;
  is_optin: boolean;
  type: string;
  slug: string;
  created_at: string;
  updated_at: string;
}
