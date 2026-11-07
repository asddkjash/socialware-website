export type Role = 'USER' | 'OWNER';

export interface User {
  id: string;
  username: string;
  email: string;
  role: Role;
  avatarUrl?: string;
}

export type SubscriptionStatus = 'active' | 'expired' | 'none';

export interface Subscription {
  plan: string;
  status: SubscriptionStatus;
  expiresAt: string | null; // ISO date or null for lifetime
  daysLeft: number | null; // null for lifetime
}

export interface Activation {
  id: string;
  plan: string;
  date: string;
  status: string;
}

export interface LicenseKey {
  id: string;
  plan: string;
  key: string;
  status: 'active' | 'expired';
  createdAt: string;
  expiresAt: string;
}

export interface Plan {
  id: string;
  name: string;
  duration: string;
  description: string;
  featured?: boolean;
}