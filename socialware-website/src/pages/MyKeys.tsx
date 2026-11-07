import React from 'react';
import { Copy, Key as KeyIcon } from 'lucide-react';
import { demoKeys } from '../data/demo';
import { useToast } from '../context/ToastContext';

const MyKeys: React.FC = () => {
  const { show } = useToast();

  const handleCopy = async (key: string) => {
    try {
      await navigator.clipboard.writeText(key);
      show('Ключ скопирован в буфер обмена.');
    } catch {
      show('Не удалось скопировать ключ.');
    }
  };

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">My Keys</h1>
        <p className="page-subtitle">
          Ваши лицензионные ключи. Демонстрационные данные.
        </p>

        <div className="keys-list">
          {demoKeys.map((k) => (
            <div key={k.id} className="card key-card">
              <div className="key-info">
                <div className="row">
                  <KeyIcon size={18} color="var(--accent-2)" />
                  <strong>{k.plan}</strong>
                  <span className={`status ${k.status}`}>{k.status === 'active' ? 'Активен' : 'Истёк'}</span>
                </div>
                <div className="key-value">{k.key}</div>
                <div className="key-meta">
                  <span>
                    Создан: <strong>{k.createdAt}</strong>
                  </span>
                  <span>
                    Истекает: <strong>{k.expiresAt}</strong>
                  </span>
                </div>
              </div>
              <button className="btn btn-ghost btn-sm" onClick={() => handleCopy(k.key)}>
                <Copy size={16} /> Копировать
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyKeys;