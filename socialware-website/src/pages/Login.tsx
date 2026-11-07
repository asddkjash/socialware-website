import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const { show } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = login(email, password);
    show(res.message);
    if (res.ok) navigate('/account');
  };

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Login</h1>
        <p className="page-subtitle">Демонстрационный вход.</p>

        <div className="card form-card">
          <div className="demo-note">
            Демо-режим. Тестовые данные: <strong>demo@socialware.test</strong> /{' '}
            <strong>DemoPass123!</strong>. Реальная авторизация будет подключена позже.
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="login-email">Email</label>
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@socialware.test"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              <LogIn size={16} /> Войти
            </button>
            <div className="form-footer">
              <span>Нет аккаунта?</span>
              <Link to="/register">Регистрация</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;