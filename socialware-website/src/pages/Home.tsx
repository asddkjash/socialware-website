import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Lock, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Shield size={22} />,
    title: 'Безопасность',
    text: 'Архитектура подготовлена для серверной проверки лицензий и ролей.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Производительность',
    text: 'Современный клиент для Minecraft 1.21.4 с оптимизацией.',
  },
  {
    icon: <Lock size={22} />,
    title: 'Контроль доступа',
    text: 'Роли USER и OWNER, управление подписками и ключами.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Премиальный опыт',
    text: 'Минималистичный интерфейс с плавными анимациями.',
  },
];

const Home: React.FC = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <Sparkles size={14} /> Minecraft Client
          </div>
          <h1 className="gradient-text">SOCIALWARE</h1>
          <p>
            Премиальный клиент для Minecraft с системой лицензий, подписок и личным
            кабинетом. Современный интерфейс, безопасная архитектура, готовность к
            масштабированию.
          </p>
          <div className="hero-actions">
            <Link to="/download" className="btn btn-primary btn-lg">
              Download Client
            </Link>
            <Link to="/subscription" className="btn btn-outline btn-lg">
              View Plans
            </Link>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-inner">
              <div className="big-s">S</div>
              <span>SOCIALWARE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="features">
          {features.map((f) => (
            <div key={f.title} className="card feature">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;