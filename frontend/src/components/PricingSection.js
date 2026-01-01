import React, { useState } from 'react';
import { CreditCard, Banknote, Smartphone, FileText, Star, Check, X, AlertCircle } from 'lucide-react';

const PricingSection = ({ data, language, pricingData }) => {
  const [activeTab, setActiveTab] = useState('memberships');

  const getPaymentIcon = (method) => {
    if (method.includes('Cash') || method.includes('Készpénz')) return <Banknote size={18} />;
    if (method.includes('Bank card') || method.includes('Bankkártya')) return <CreditCard size={18} />;
    if (method.includes('Revolut')) return <Smartphone size={18} />;
    return <CreditCard size={18} />;
  };

  return (
    <section id="pricing" className="section-padding circuit-bg" style={{
      background: 'var(--bg-page)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-large">
          <h2 className="heading-1 fade-in neon-text-magenta" style={{ marginBottom: '30px' }}>
            {pricingData.title}
          </h2>
          <p className="body-large fade-in" style={{ 
            maxWidth: '600px',
            margin: '0 auto',
            color: 'var(--text-secondary)',
            marginBottom: '40px'
          }}>
            {pricingData.subtitle}
          </p>

          {/* Tab Selector */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '50px',
            flexWrap: 'wrap'
          }}>
            <button
              className={activeTab === 'dayPasses' ? 'btn-primary' : 'btn-secondary'}
              onClick={() => setActiveTab('dayPasses')}
              style={{
                padding: '12px 30px',
                fontFamily: 'Orbitron, Arial, sans-serif'
              }}
            >
              {pricingData.dayPasses}
            </button>
            
            <button
              className={activeTab === 'memberships' ? 'btn-primary' : 'btn-secondary'}
              onClick={() => setActiveTab('memberships')}
              style={{
                padding: '12px 30px',
                fontFamily: 'Orbitron, Arial, sans-serif'
              }}
            >
              {pricingData.memberships}
            </button>
          </div>
        </div>

        {/* Day Passes */}
        {activeTab === 'dayPasses' && (
          <div className="fade-in">
            <h3 className="heading-2 neon-text" style={{ 
              textAlign: 'center',
              marginBottom: '40px',
              fontFamily: 'Orbitron, Arial, sans-serif'
            }}>
              {pricingData.dayPasses}
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
              marginBottom: '60px'
            }}>
              {data.dayPasses.map((pass, index) => (
                <div
                  key={index}
                  className="card cyberpunk-border"
                  style={{
                    background: 'var(--bg-card)',
                    padding: '40px 30px',
                    textAlign: 'center',
                    position: 'relative'
                  }}
                >
                  <h4 className="heading-4" style={{ 
                    marginBottom: '20px',
                    color: 'var(--neon-cyan)',
                    fontFamily: 'Orbitron, Arial, sans-serif'
                  }}>
                    {language === 'hu' ? pass.typeHu : pass.type}
                  </h4>
                  
                  <div className="heading-1" style={{ 
                    color: 'var(--neon-magenta)',
                    marginBottom: '15px',
                    fontSize: '2.5rem'
                  }}>
                    {pass.price}
                  </div>
                  
                  <p className="body-medium" style={{ 
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5
                  }}>
                    {language === 'hu' ? pass.noteHu : pass.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Memberships */}
        {activeTab === 'memberships' && (
          <div className="fade-in">
            <h3 className="heading-2 neon-text" style={{ 
              textAlign: 'center',
              marginBottom: '40px',
              fontFamily: 'Orbitron, Arial, sans-serif'
            }}>
              MEMBERSHIPS
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '30px',
              marginBottom: '60px'
            }}>
              {data.memberships.map((membership, index) => (
                <div
                  key={index}
                  className="card cyberpunk-border"
                  style={{
                    background: membership.popular ? 'var(--secondary-purple)30' : 'var(--bg-card)',
                    border: membership.popular ? '3px solid var(--neon-magenta)' : '2px solid var(--border-medium)',
                    padding: '40px 30px',
                    position: 'relative',
                    transform: membership.popular ? 'scale(1.05)' : 'scale(1)'
                  }}
                >
                  {/* Popular Badge */}
                  {membership.popular && (
                    <div style={{
                      position: 'absolute',
                      top: '-15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--neon-magenta)',
                      color: 'var(--text-inverse)',
                      padding: '8px 24px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      fontFamily: 'Orbitron, Arial, sans-serif',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)'
                    }}>
                      <Star size={14} />
                      MOST POPULAR
                    </div>
                  )}

                  <div style={{ textAlign: 'center' }}>
                    <h4 className="heading-4" style={{ 
                      marginBottom: '15px',
                      color: 'var(--neon-cyan)',
                      fontFamily: 'Orbitron, Arial, sans-serif'
                    }}>
                      {membership.type}
                    </h4>
                    
                    <div className="heading-1" style={{ 
                      color: 'var(--neon-magenta)',
                      marginBottom: '10px',
                      fontSize: '2.2rem'
                    }}>
                      {membership.price}
                    </div>
                    
                    <div className="body-medium" style={{ 
                      color: 'var(--text-secondary)',
                      marginBottom: '20px',
                      fontFamily: 'Orbitron, Arial, sans-serif'
                    }}>
                      {membership.validity}
                    </div>
                    
                    <p className="body-small" style={{ 
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      padding: '15px',
                      background: 'var(--bg-page)',
                      border: '1px solid var(--border-light)'
                    }}>
                      {membership.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Payment Methods */}
        <div className="fade-in" style={{ marginBottom: '60px' }}>
          <h3 className="heading-2 neon-text" style={{ 
            textAlign: 'center',
            marginBottom: '40px',
            fontFamily: 'Orbitron, Arial, sans-serif'
          }}>
            PAYMENT METHODS
          </h3>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap'
          }}>
            {data.paymentMethods.map((method, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '20px 30px',
                  background: 'var(--bg-card)',
                  border: '2px solid var(--border-medium)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--neon-cyan)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ color: 'var(--neon-cyan)' }}>
                  {getPaymentIcon(method)}
                </div>
                <span className="body-medium" style={{ 
                  color: 'var(--text-primary)',
                  fontWeight: 500
                }}>
                  {method}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Rules */}
        <div className="fade-in">
          <h3 className="heading-2 neon-text" style={{ 
            textAlign: 'center',
            marginBottom: '40px',
            fontFamily: 'Orbitron, Arial, sans-serif'
          }}>
            MEMBERSHIP USAGE RULES
          </h3>
          
          <div style={{
            background: 'var(--bg-card)',
            border: '2px solid var(--border-medium)',
            padding: '40px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'grid',
              gap: '20px'
            }}>
              {data.rules.map((rule, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px',
                    padding: '15px',
                    background: 'rgba(0, 255, 255, 0.05)',
                    border: '1px solid rgba(0, 255, 255, 0.2)'
                  }}
                >
                  <div style={{ 
                    color: 'var(--neon-cyan)',
                    marginTop: '2px'
                  }}>
                    {rule.includes('cannot') || rule.includes('non-transferable') ? 
                      <X size={18} /> : 
                      <Check size={18} />
                    }
                  </div>
                  <span className="body-medium" style={{ 
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5
                  }}>
                    {rule}
                  </span>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '30px',
              padding: '20px',
              background: 'linear-gradient(135deg, var(--neon-magenta)10, var(--neon-cyan)10)',
              border: '1px solid var(--neon-cyan)',
              textAlign: 'center'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                marginBottom: '10px'
              }}>
                <FileText size={20} color="var(--neon-cyan)" />
                <span className="body-large" style={{ 
                  color: 'var(--neon-cyan)',
                  fontWeight: 600,
                  fontFamily: 'Orbitron, Arial, sans-serif'
                }}>
                  IMPORTANT NOTES
                </span>
              </div>
              <div className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                Prices include VAT • Invoices are provided in all cases
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PricingSection;