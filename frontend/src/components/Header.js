import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { label: 'About Us', id: 'about' },
    { label: 'Leaderboard', id: 'leaderboard' },
    { label: 'Booking', id: 'booking' },
    { label: 'Equipment', id: 'equipment' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled ? 'rgba(10, 10, 15, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: isScrolled ? '1px solid var(--border-medium)' : 'none'
      }}
    >
      <div className="container">
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 0',
          minHeight: '80px'
        }}>
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('hero')}
            style={{
              cursor: 'pointer',
              fontFamily: 'Orbitron, Arial, sans-serif',
              fontWeight: 900,
              fontSize: '1.8rem',
              color: 'var(--neon-cyan)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textShadow: '0 0 10px var(--neon-cyan)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.textShadow = '0 0 20px var(--neon-cyan)';
              e.target.style.color = 'var(--neon-magenta)';
            }}
            onMouseLeave={(e) => {
              e.target.style.textShadow = '0 0 10px var(--neon-cyan)';
              e.target.style.color = 'var(--neon-cyan)';
            }}
          >
            COSMOTRON
          </div>

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }} className="desktop-nav">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: '2px solid var(--neon-cyan)',
              color: 'var(--neon-cyan)',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '0',
              boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)',
              transition: 'all 0.3s ease'
            }}
            className="mobile-menu-button"
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.6)';
              e.target.style.color = 'var(--text-inverse)';
              e.target.style.backgroundColor = 'var(--neon-cyan)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.3)';
              e.target.style.color = 'var(--neon-cyan)';
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-page)',
            border: '1px solid var(--border-medium)',
            borderTop: 'none',
            padding: '20px 0'
          }} className="mobile-nav">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '15px 40px',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  textAlign: 'left',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--bg-card)';
                  e.target.style.color = 'var(--brand-primary)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'var(--text-primary)';
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;