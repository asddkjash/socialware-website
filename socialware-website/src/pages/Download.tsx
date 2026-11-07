import React from 'react';
import { Download as DownloadIcon, AlertCircle } from 'lucide-react';
import { CLIENT_VERSION, MINECRAFT_VERSION } from '../data/demo';
import { useToast } from '../context/ToastContext';

const Download: React.FC = () => {
  const { show } = useToast();

  const handleDownload = () => {
    show('Загрузка пока недоступна. Файл клиента будет добавлен позже.');
  };

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Download</h1>
        <p className="page-subtitle">
          Скачайте клиент SOCIALWARE. Поддерживается Minecraft {MINECRAFT_VERSION}.
        </p>

        <div className="card download-card">
          <div className="logo" style={{ justifyContent: 'center', marginBottom: 8 }}>
            <div className="logo-mark">S</div>
            <span>SOCIALWARE</span>
          </div>
          <p style={{ color: 'var(--text-muted)', marginTop: 8 }}>
            Премиальный клиент для Minecraft.
          </p>

          <div className="download-meta">
            <div className="meta-item">
              <div className="label">Версия клиента</div>
              <div className="value">{CLIENT_VERSION}</div>
            </div>
            <div className="meta-item">
              <div className="label">Minecraft</div>
              <div className="value">{MINECRAFT_VERSION}</div>
            </div>
          </div>

          <button className="btn btn-primary btn-block btn-lg" onClick={handleDownload}>
            <DownloadIcon size={18} /> Download
          </button>

          <div className="notice">
            <AlertCircle size={18} />
            <span>
              Загрузка пока недоступна. Реальный файл клиента будет добавлен позже.
              Ссылка на скачивание появится после публикации релиза.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;