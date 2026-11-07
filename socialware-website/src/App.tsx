import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Download from './pages/Download';
import Subscription from './pages/Subscription';
import MyKeys from './pages/MyKeys';
import Account from './pages/Account';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ToastProvider>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<Download />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/keys" element={<MyKeys />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </ToastProvider>
    </AuthProvider>
  );
};

export default App;