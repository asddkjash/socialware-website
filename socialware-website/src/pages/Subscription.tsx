import React from 'react';
import { Check, Crown } from 'lucide-react';
import { plans } from '../data/demo';
import { useToast } from '../context/ToastContext';

const Subscription: React.FC = () => {
  const { show } = useToast();

  const handleSelect = (name: string) => {
    show(`Покупки пока недоступны. Тариф ${name} недоступен для приобретения.`);
  };

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Subscription</h1>
        <p className="page-subtitle">
          Выберите тарифный план. Оплата будет подключена позже.
        </p>

        <div className="plans">
          {plans.map((plan) => (
            <div key={plan.id} className={`card plan ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && <div className="plan-badge">Рекомендуемый</div>}
              <h3>{plan.name}</h3>
              <div className="duration">{plan.duration}</div>
              <div className="price-placeholder">Цена будет добавлена позже</div>
              <ul>
                <li>
                  <Check size={16} /> Доступ к клиенту
                </li>
                <li>
                  <Check size={16} /> Демонстрационный тариф
                </li>
                {plan.featured && (
                  <li>
                    <Crown size={16} /> Бессрочный доступ
                  </li>
                )}
              </ul>
              <button
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'} btn-block`}
                onClick={() => handleSelect(plan.name)}
              >
                Выбрать тариф
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;