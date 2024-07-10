export interface CustomInviteLinkProps extends InviteLinkData {
  name: string;
  createdAt: string
  email: string;
  type: string;
}

export interface InviteLinkProps {
  data: InviteLinkData[];
  currentPage: number;
  firstPageUrl: string;
  from: number;
  lastPage: number;
  lastPageUrl: string;
  nextPageUrl?: any;
  links: Link[];
  path: string;
  limit: number;
  prevPageUrl?: any;
  to: number;
  total: number;
}

export interface Link {
  url?: string;
  label: string;
  active: boolean;
}

export interface InviteLinkData {
  code: string;
  promotion_id: number;
  uid: string;
  uid_field?: string;
  data?: UserData;
  created_at: string;
}

export interface UserData {
  'first-name': string;
  'last-name': string;
  email: string;
}