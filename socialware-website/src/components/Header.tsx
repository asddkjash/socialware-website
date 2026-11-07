import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, LogOut, User as UserIcon } from 'lucide-react';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/download', label: 'Download' },
  { to: '/subscription', label: 'Subscription' },
  { to: '/keys', label: 'My Keys' },
  { to: '/account', label: 'My Account' },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();


  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" onClick={close}>
          <Logo />
        </Link>

        <nav className="nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          {isAuthenticated ? (
            <>
              <Link to="/account" className="btn btn-ghost btn-sm">
                <UserIcon size={16} />
                {user?.username}
              </Link>
              <button className="btn btn-ghost btn-sm" onClick={logout} aria-label="Выйти">
                <LogOut size={16} />
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm">
              Войти
            </Link>
          )}
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Меню">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={close}
          >
            {item.label}
          </NavLink>
        ))}
        {!isAuthenticated && (
          <Link to="/login" className="btn btn-primary" onClick={close}>
            Войти
          </Link>
        )}
        {isAuthenticated && (
          <button
            className="btn btn-ghost"
            onClick={() => {
              logout();
              close();
            }}
          >
            Выйти
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;