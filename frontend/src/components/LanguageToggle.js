import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        background: 'transparent',
        border: '2px solid var(--neon-cyan)',
        color: 'var(--neon-cyan)',
        borderRadius: '0',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontFamily: 'Orbitron, Arial, sans-serif',
        fontSize: '0.9rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.target.style.background = 'var(--neon-cyan)';
        e.target.style.color = 'var(--text-inverse)';
        e.target.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.6)';
        e.target.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'transparent';
        e.target.style.color = 'var(--neon-cyan)';
        e.target.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.2)';
        e.target.style.transform = 'translateY(0)';
      }}
    >
      <Globe size={16} />
      <span>{currentLanguage === 'en' ? 'HU' : 'EN'}</span>
    </button>
  );
};

export default LanguageToggle;