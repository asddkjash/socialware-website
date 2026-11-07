import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Logo size="sm" />
        <div className="footer-links">
          <a href="#">Политика</a>
          <a href="#">Условия</a>
          <a href="#">Контакты</a>
        </div>
        <div>© 2026 SOCIALWARE. Демонстрационный сайт.</div>
      </div>
    </footer>
  );
};

export default Footer;