import React, { createContext, useCallback, useContext, useState } from 'react';
import type { User } from '../types';
import { demoUser, DEMO_CREDENTIALS } from '../data/demo';

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isDemo: boolean;
  login: (email: string, password: string) => { ok: boolean; message: string };
  register: (username: string, email: string, password: string) => { ok: boolean; message: string };
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((email: string, password: string) => {
    // Демонстрационный режим: проверка только тестовых данных.
    // Реальная авторизация будет подключена через Supabase.
    if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
      setUser({ ...demoUser });
      return { ok: true, message: 'Демо-вход выполнен.' };
    }
    return { ok: false, message: 'Неверные тестовые данные. Используйте demo@socialware.test / DemoPass123!' };
  }, []);

  const register = useCallback((username: string, email: string, _password: string) => {
    // Демо-регистрация: пароль не сохраняется.
    const newUser: User = {
      id: `demo-${Date.now()}`,
      username: username || 'DemoUser',
      email: email || 'demo@socialware.test',
      role: 'USER',
    };
    setUser(newUser);
    return { ok: true, message: 'Демо-аккаунт создан. Реальная регистрация будет доступна позже.' };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isDemo: true,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};