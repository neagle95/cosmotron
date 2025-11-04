import React from 'react';
import { Dumbbell, Award, Shield, Zap, Cpu, Settings, Database, HardDrive } from 'lucide-react';

const EquipmentSection = ({ data }) => {
  const getEquipmentIcon = (name) => {
    if (name.includes('MATRICES')) return <Database size={24} />;
    if (name.includes('MASS UNITS')) return <HardDrive size={24} />;
    if (name.includes('PLATFORMS')) return <Cpu size={24} />;
    if (name.includes('MONOLIFT')) return <Settings size={24} />;
    return <Dumbbell size={24} />;
  };

  return (
    <section id="equipment" className="section-padding circuit-bg" style={{
      background: 'var(--bg-page)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-large">
          <h2 className="heading-1 fade-in neon-text-magenta" style={{ marginBottom: '30px' }}>
            EQUIPMENT
          </h2>
          <p className="body-large fade-in" style={{ 
            maxWidth: '600px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            Train with competition-grade equipment that exceeds international powerlifting standards.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid-2" style={{ gap: '30px' }}>
          {data.map((equipment, index) => (
            <div 
              key={equipment.id}
              className="fade-in cyberpunk-border"
              style={{
                background: 'var(--bg-card)',
                overflow: 'hidden',
                border: '2px solid var(--border-medium)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                animationDelay: `${index * 0.2}s`,
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.borderColor = 'var(--neon-cyan)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'var(--border-medium)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Equipment Image */}
              <div style={{
                height: '250px',
                backgroundImage: `linear-gradient(rgba(10, 10, 15, 0.4), rgba(26, 26, 46, 0.7)), url(${equipment.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'flex-end',
                position: 'relative'
              }}>
                {/* Equipment Icon Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-magenta))',
                  color: 'var(--text-inverse)',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                }}>
                  {getEquipmentIcon(equipment.name)}
                </div>

                {/* Holographic Grid Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `
                    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(180deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px',
                  opacity: 0.3
                }} />

                {/* Equipment Name Overlay */}
                <div style={{
                  background: 'linear-gradient(transparent, rgba(10, 10, 15, 0.95))',
                  width: '100%',
                  padding: '30px 25px 25px',
                  color: 'var(--text-primary)',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <h3 className="heading-4 neon-text" style={{ 
                    marginBottom: '0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    fontFamily: 'Orbitron, Arial, sans-serif'
                  }}>
                    {equipment.name}
                  </h3>
                </div>
              </div>

              {/* Equipment Description */}
              <div style={{ padding: '30px 25px' }}>
                <p className="body-medium" style={{ 
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  marginBottom: '20px'
                }}>
                  {equipment.description}
                </p>

                {/* Equipment Features/Specs */}
                <div style={{
                  padding: '15px',
                  background: 'var(--bg-page)',
                  border: '1px solid var(--border-light)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Animated border effect */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-magenta), var(--neon-purple))',
                    animation: 'pulse-glow 2s ease-in-out infinite'
                  }} />
                  
                  <div className="body-small" style={{
                    color: 'var(--neon-cyan)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: 600,
                    fontFamily: 'Orbitron, Arial, sans-serif',
                    textAlign: 'center'
                  }}>
                    ✓ COMPETITION GRADE ✓ IPF CERTIFIED ✓ ELITE SPEC
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default EquipmentSection;