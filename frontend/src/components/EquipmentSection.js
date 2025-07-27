import React from 'react';
import { Dumbbell, Award, Shield, Zap } from 'lucide-react';

const EquipmentSection = ({ data }) => {
  const getEquipmentIcon = (name) => {
    if (name.includes('Rack')) return <Shield size={24} />;
    if (name.includes('Plates')) return <Award size={24} />;
    if (name.includes('Platform')) return <Dumbbell size={24} />;
    if (name.includes('Monolift')) return <Zap size={24} />;
    return <Dumbbell size={24} />;
  };

  return (
    <section id="equipment" className="section-padding" style={{
      background: 'var(--bg-page)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-large">
          <h2 className="heading-1 fade-in" style={{ marginBottom: '30px' }}>
            PREMIUM EQUIPMENT
          </h2>
          <p className="body-large fade-in" style={{ 
            maxWidth: '600px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            Train with competition-grade equipment that meets international powerlifting standards.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid-2" style={{ gap: '30px', marginBottom: '80px' }}>
          {data.map((equipment, index) => (
            <div 
              key={equipment.id}
              className="fade-in"
              style={{
                background: 'var(--bg-card)',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border-medium)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                animationDelay: `${index * 0.2}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'var(--brand-primary)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(217, 251, 6, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-medium)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Equipment Image */}
              <div style={{
                height: '250px',
                backgroundImage: `linear-gradient(rgba(26, 28, 27, 0.3), rgba(26, 28, 27, 0.6)), url(${equipment.image})`,
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
                  background: 'var(--brand-primary)',
                  color: 'var(--text-inverse)',
                  padding: '12px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {getEquipmentIcon(equipment.name)}
                </div>

                {/* Equipment Name Overlay */}
                <div style={{
                  background: 'linear-gradient(transparent, rgba(26, 28, 27, 0.9))',
                  width: '100%',
                  padding: '30px 25px 25px',
                  color: 'var(--text-primary)'
                }}>
                  <h3 className="heading-4" style={{ 
                    marginBottom: '0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em'
                  }}>
                    {equipment.name}
                  </h3>
                </div>
              </div>

              {/* Equipment Description */}
              <div style={{ padding: '30px 25px' }}>
                <p className="body-medium" style={{ 
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)'
                }}>
                  {equipment.description}
                </p>

                {/* Equipment Features/Specs */}
                <div style={{
                  marginTop: '20px',
                  padding: '15px',
                  background: 'var(--bg-page)',
                  borderRadius: '8px',
                  border: '1px solid var(--border-light)'
                }}>
                  <div className="body-small" style={{
                    color: 'var(--brand-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: 600
                  }}>
                    ✓ Competition Grade ✓ IPF Certified ✓ Premium Quality
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Equipment Highlights */}
        <div 
          className="fade-in"
          style={{
            background: 'linear-gradient(135deg, var(--secondary-olive), var(--bg-card))',
            padding: '60px 40px',
            borderRadius: '20px',
            textAlign: 'center',
            border: '1px solid var(--border-medium)'
          }}
        >
          <h3 className="heading-2" style={{ 
            marginBottom: '30px',
            color: 'var(--text-primary)'
          }}>
            WHY OUR EQUIPMENT MATTERS
          </h3>

          <div className="grid-3" style={{ gap: '40px' }}>
            <div>
              <div style={{
                color: 'var(--brand-primary)',
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <Award size={40} />
              </div>
              <h4 className="heading-4" style={{ 
                marginBottom: '15px',
                color: 'var(--text-primary)'
              }}>
                Competition Standard
              </h4>
              <p className="body-small">
                All our equipment meets IPF specifications, so you train exactly like you compete.
              </p>
            </div>

            <div>
              <div style={{
                color: 'var(--brand-primary)',
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <Shield size={40} />
              </div>
              <h4 className="heading-4" style={{ 
                marginBottom: '15px',
                color: 'var(--text-primary)'
              }}>
                Safety First
              </h4>
              <p className="body-small">
                Premium safety features and regular maintenance ensure you can lift with confidence.
              </p>
            </div>

            <div>
              <div style={{
                color: 'var(--brand-primary)',
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <Zap size={40} />
              </div>
              <h4 className="heading-4" style={{ 
                marginBottom: '15px',
                color: 'var(--text-primary)'
              }}>
                Performance Edge
              </h4>
              <p className="body-small">
                Precision calibrated plates and perfectly balanced bars for consistent, accurate training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;