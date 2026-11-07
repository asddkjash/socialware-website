import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  return (
    <div className="logo">
      <div className="logo-mark" style={size === 'sm' ? { width: 28, height: 28, fontSize: 15 } : undefined}>
        S
      </div>
      <span>SOCIALWARE</span>
    </div>
  );
};

export default Logo;