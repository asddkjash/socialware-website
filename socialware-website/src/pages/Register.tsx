import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const { register } = useAuth();
  const { show } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      show('Пароли не совпадают.');
      return;
    }
    const res = register(username, email, password);
    show(res.message);
    if (res.ok) navigate('/account');
  };

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Register</h1>
        <p className="page-subtitle">Демонстрационная регистрация.</p>

        <div className="card form-card">
          <div className="demo-note">
            Демо-режим. Пароль не сохраняется. Реальная регистрация будет доступна позже.
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="reg-username">Имя пользователя</label>
              <input
                id="reg-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="DemoUser"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="reg-email">Email</label>
              <input
                id="reg-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="reg-password">Password</label>
              <input
                id="reg-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="reg-confirm">Подтверждение пароля</label>
              <input
                id="reg-confirm"
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              <UserPlus size={16} /> Зарегистрироваться
            </button>
            <div className="form-footer">
              <span>Уже есть аккаунт?</span>
              <Link to="/login">Войти</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;