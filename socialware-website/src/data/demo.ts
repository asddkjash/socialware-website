import type { User, Subscription, Activation, LicenseKey, Plan } from '../types';

export const DEMO_CREDENTIALS = {
  email: 'demo@socialware.test',
  password: 'DemoPass123!',
};

export const demoUser: User = {
  id: 'demo-user-001',
  username: 'DemoUser',
  email: 'demo@socialware.test',
  role: 'USER',
};

export const demoSubscription: Subscription = {
  plan: 'MONTHLY',
  status: 'active',
  expiresAt: '2026-12-01T00:00:00.000Z',
  daysLeft: 24,
};

export const demoActivations: Activation[] = [
  { id: 'a1', plan: '7 DAYS', date: '2026-10-15', status: 'Expired' },
  { id: 'a2', plan: 'MONTHLY', date: '2026-11-01', status: 'Active' },
];

export const demoKeys: LicenseKey[] = [
  {
    id: 'k1',
    plan: '7 DAYS',
    key: 'SW-DEMO-XXXX-0000-AAAA',
    status: 'expired',
    createdAt: '2026-10-15',
    expiresAt: '2026-10-22',
  },
  {
    id: 'k2',
    plan: 'MONTHLY',
    key: 'SW-DEMO-YYYY-1111-BBBB',
    status: 'active',
    createdAt: '2026-11-01',
    expiresAt: '2026-12-01',
  },
];

export const plans: Plan[] = [
  {
    id: '7days',
    name: '7 DAYS',
    duration: '7 дней',
    description: 'Демонстрационный тариф на 7 дней.',
  },
  {
    id: 'monthly',
    name: 'MONTHLY',
    duration: '30 дней',
    description: 'Демонстрационный тариф на 30 дней.',
  },
  {
    id: 'lifetime',
    name: 'LIFETIME',
    duration: 'Бессрочно',
    description: 'Демонстрационный тариф без срока действия.',
    featured: true,
  },
];

export const CLIENT_VERSION = 'Demo';
export const MINECRAFT_VERSION = '1.21.4';