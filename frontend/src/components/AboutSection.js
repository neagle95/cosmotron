import React from 'react';
import { Target, Users, Award, Clock, Cpu, Zap, Shield, Database } from 'lucide-react';

const AboutSection = ({ data }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const iconMap = {
    'Neural Links Active': <Users size={32} />,
    'Victory Protocols': <Award size={32} />,
    'Years Online': <Database size={32} />,
    'System Uptime': <Cpu size={32} />
  };

  return (
    <section id="about" className="section-padding circuit-bg" style={{
      background: 'var(--bg-page)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-large">
          <h2 className="heading-1 fade-in neon-text-magenta" style={{ marginBottom: '30px' }}>
            {data.title}
          </h2>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-magenta))',
            margin: '0 auto',
            boxShadow: '0 0 20px var(--neon-cyan)'
          }} />
        </div>

        {/* Main Content */}
        <div className="grid-2" style={{ 
          alignItems: 'center',
          marginBottom: '80px'
        }}>
          {/* Left Column - Text */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="body-large" style={{ 
              marginBottom: '30px',
              lineHeight: 1.7,
              color: 'var(--text-secondary)'
            }}>
              {data.description}
            </p>
            
            <p className="body-medium" style={{ 
              color: 'var(--text-muted)',
              lineHeight: 1.6
            }}>
              {data.philosophy}
            </p>
          </div>

          {/* Right Column - Single Stat Card */}
          <div className="fade-in" style={{ animationDelay: '0.4s' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center'
            }}>
              {data.stats.map((stat, index) => (
                <div 
                  key={index}
                  className="card cyberpunk-border"
                  style={{
                    background: 'var(--bg-card)',
                    padding: '40px 30px',
                    textAlign: 'center',
                    cursor: stat.clickable ? 'pointer' : 'default',
                    position: 'relative',
                    overflow: 'hidden',
                    maxWidth: '300px',
                    width: '100%',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => stat.clickable && scrollToSection(stat.navigateTo)}
                  onMouseEnter={(e) => {
                    if (stat.clickable) {
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                      e.currentTarget.style.borderColor = 'var(--neon-cyan)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 255, 255, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (stat.clickable) {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.borderColor = 'var(--border-medium)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  {/* Animated background effect */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(45deg, 
                      rgba(0, 255, 255, 0.1), 
                      rgba(255, 0, 255, 0.1), 
                      rgba(138, 43, 226, 0.1))`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none'
                  }} className="card-bg-effect" />
                  
                  <div style={{
                    color: 'var(--neon-cyan)',
                    marginBottom: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    filter: 'drop-shadow(0 0 10px var(--neon-cyan))',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {iconMap[stat.label] || <Award size={32} />}
                  </div>
                  
                  <div className="heading-2 neon-text" style={{ 
                    marginBottom: '10px',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {stat.number}
                  </div>
                  
                  <div className="body-medium" style={{
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontSize: '0.9rem',
                    fontFamily: 'Orbitron, Arial, sans-serif',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {stat.label}
                  </div>

                  {/* Click indicator for clickable cards */}
                  {stat.clickable && (
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '15px',
                      color: 'var(--neon-cyan)',
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontFamily: 'Orbitron, Arial, sans-serif',
                      opacity: 0.7
                    }}>
                      CLICK TO VIEW
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Quote/Mission */}
        <div 
          className="fade-in"
          style={{
            background: `linear-gradient(135deg, 
              var(--bg-card), 
              var(--secondary-purple)20)`,
            padding: '60px 40px',
            border: '2px solid var(--border-medium)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Cyberpunk Background Patterns */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, 
              rgba(0, 255, 255, 0.1) 0%, 
              rgba(255, 0, 255, 0.05) 50%, 
              transparent 100%)`,
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite'
          }} />
          
          <div style={{
            position: 'absolute',
            bottom: '-30%',
            left: '-10%',
            width: '150px',
            height: '150px',
            background: `radial-gradient(circle, 
              rgba(255, 0, 255, 0.1) 0%, 
              rgba(138, 43, 226, 0.05) 50%, 
              transparent 100%)`,
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite reverse'
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <blockquote className="heading-3 neon-text-magenta" style={{
              marginBottom: '20px',
              fontStyle: 'italic',
              fontWeight: 600,
              lineHeight: 1.3,
              fontFamily: 'Orbitron, Arial, sans-serif'
            }}>
              "EVERY REP COMPUTES. EVERY SET MATTERS. EVERY LIFT TRANSCENDS HUMAN LIMITATIONS."
            </blockquote>
            
            <cite className="body-medium" style={{
              color: 'var(--text-muted)',
              fontStyle: 'normal',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontFamily: 'Orbitron, Arial, sans-serif'
            }}>
              — COSMOTRON NEURAL PROTOCOLS
            </cite>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .card:hover .card-bg-effect {
          opacity: 1 !important;
        }

        @media (max-width: 768px) {
          .grid-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;