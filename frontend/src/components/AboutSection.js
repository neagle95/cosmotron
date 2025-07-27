import React from 'react';
import { Target, Users, Award, Clock } from 'lucide-react';

const AboutSection = ({ data }) => {
  const iconMap = {
    'Members Strong': <Users size={32} />,
    'Competition Medals': <Award size={32} />,
    'Years of Excellence': <Target size={32} />,
    'Gym Access': <Clock size={32} />
  };

  return (
    <section id="about" className="section-padding" style={{
      background: 'var(--bg-page)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-large">
          <h2 className="heading-1 fade-in" style={{ marginBottom: '30px' }}>
            {data.title}
          </h2>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'var(--brand-primary)',
            margin: '0 auto'
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
              lineHeight: 1.7
            }}>
              {data.description}
            </p>
            
            <p className="body-medium" style={{ 
              color: 'var(--text-secondary)',
              lineHeight: 1.6
            }}>
              {data.philosophy}
            </p>
          </div>

          {/* Right Column - Stats */}
          <div className="fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="grid-2" style={{ gap: '30px' }}>
              {data.stats.map((stat, index) => (
                <div 
                  key={index}
                  style={{
                    background: 'var(--bg-card)',
                    padding: '40px 30px',
                    borderRadius: '12px',
                    textAlign: 'center',
                    border: '1px solid var(--border-medium)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.borderColor = 'var(--brand-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--border-medium)';
                  }}
                >
                  <div style={{
                    color: 'var(--brand-primary)',
                    marginBottom: '15px',
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    {iconMap[stat.label] || <Target size={32} />}
                  </div>
                  
                  <div className="heading-2" style={{ 
                    marginBottom: '10px',
                    color: 'var(--brand-primary)'
                  }}>
                    {stat.number}
                  </div>
                  
                  <div className="body-medium" style={{
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontSize: '0.9rem'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Quote/Mission */}
        <div 
          className="fade-in"
          style={{
            background: 'linear-gradient(135deg, var(--secondary-olive), var(--bg-card))',
            padding: '60px 40px',
            borderRadius: '20px',
            textAlign: 'center',
            border: '1px solid var(--border-medium)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '200px',
            height: '200px',
            background: 'rgba(217, 251, 6, 0.05)',
            borderRadius: '50%',
            transform: 'rotate(45deg)'
          }} />
          
          <div style={{
            position: 'absolute',
            bottom: '-30%',
            left: '-10%',
            width: '150px',
            height: '150px',
            background: 'rgba(217, 251, 6, 0.03)',
            borderRadius: '50%'
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <blockquote className="heading-3" style={{
              marginBottom: '20px',
              fontStyle: 'italic',
              color: 'var(--text-primary)',
              fontWeight: 600,
              lineHeight: 1.3
            }}>
              "EVERY REP COUNTS. EVERY SET MATTERS. EVERY LIFT IS A STEP TOWARD GREATNESS."
            </blockquote>
            
            <cite className="body-medium" style={{
              color: 'var(--text-secondary)',
              fontStyle: 'normal',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              — COSMOTRON TRAINING PHILOSOPHY
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;