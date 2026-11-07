import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, History } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { demoUser, demoSubscription, demoActivations } from '../data/demo';
import type { User } from '../types';

const Account: React.FC = () => {
  const { user: authUser, isAuthenticated } = useAuth();
  const user: User = authUser ?? demoUser;
  const sub = demoSubscription;

  const isLifetime = sub.expiresAt === null;

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">My Account</h1>
        <p className="page-subtitle">Личный кабинет. Демонстрационные данные.</p>

        {!isAuthenticated && (
          <div className="notice" style={{ marginTop: 16 }}>
            Вы не вошли в систему. Показаны демонстрационные данные.{' '}
            <Link to="/login" style={{ color: 'var(--accent-2)', marginLeft: 4 }}>
              Войти
            </Link>
          </div>
        )}

        <div className="dashboard-grid">
          <div className="card profile-card">
            <div className="avatar">{user.username.charAt(0).toUpperCase()}</div>
            <h3>{user.username}</h3>
            <div style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 4 }}>{user.email}</div>
            <div className="role-badge">
              <Shield size={12} />
              {user.role}
              {user.role === 'OWNER' ? ' (Owner)' : ''}
            </div>
          </div>

          <div>
            <div className="info-grid">
              <div className="info-item">
                <div className="label">Имя пользователя</div>
                <div className="value">{user.username}</div>
              </div>
              <div className="info-item">
                <div className="label">Email</div>
                <div className="value">{user.email}</div>
              </div>
              <div className="info-item">
                <div className="label">Роль</div>
                <div className="value accent">{user.role}</div>
              </div>
              <div className="info-item">
                <div className="label">Подписка</div>
                <div className="value accent">{sub.plan}</div>
              </div>
              <div className="info-item">
                <div className="label">Статус</div>
                <div className="value">{sub.status === 'active' ? 'Активна' : 'Истекла'}</div>
              </div>
              <div className="info-item">
                <div className="label">Окончание</div>
                <div className="value">
                  {isLifetime ? 'Does not expire' : sub.expiresAt ? new Date(sub.expiresAt).toLocaleDateString('ru-RU') : '—'}
                </div>
              </div>
              <div className="info-item">
                <div className="label">Осталось дней</div>
                <div className="value">
                  {isLifetime ? 'Does not expire' : sub.daysLeft ?? '—'}
                </div>
              </div>
            </div>

            <h2 className="section-title">
              <History size={18} style={{ verticalAlign: 'middle', marginRight: 8 }} />
              История активаций
            </h2>
            <div className="activation-list">
              {demoActivations.map((a) => (
                <div key={a.id} className="activation-item">
                  <div>
                    <strong>{a.plan}</strong>
                    <div className="date">{a.date}</div>
                  </div>
                  <span className={`status ${a.status === 'Active' ? 'active' : 'expired'}`}>
                    {a.status === 'Active' ? 'Активна' : 'Истекла'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;