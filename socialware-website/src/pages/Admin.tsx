import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Admin: React.FC = () => {
  const { user } = useAuth();
  const isOwner = user?.role === 'OWNER';

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Admin Panel</h1>
        <p className="page-subtitle">Административная панель.</p>

        <div className="card" style={{ maxWidth: 640, marginTop: 40, textAlign: 'center' }}>
          <ShieldAlert size={40} color="var(--accent-2)" style={{ margin: '0 auto 16px' }} />
          {isOwner ? (
            <p>Доступ разрешён. Здесь будет управление пользователями и подписками.</p>
          ) : (
            <p>
              В демонстрационном режиме административная панель недоступна. Роль OWNER
              назначается только на сервере после подключения авторизации.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;