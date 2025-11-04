import React, { useState } from 'react';
import { Clock, DollarSign, CheckCircle, ArrowRight, Zap, Cpu, Settings } from 'lucide-react';
import { mockAPI } from '../mock';

const ProgramsSection = ({ data }) => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    goals: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInquiry = (program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await mockAPI.submitMembershipInquiry(selectedProgram.id, inquiryForm);
      setSubmitMessage(result.message);
      setInquiryForm({ name: '', email: '', phone: '', experience: '', goals: '' });
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitMessage('');
      }, 2000);
    } catch (error) {
      setSubmitMessage('Error submitting inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getProgramIcon = (title) => {
    if (title.includes('ELITE')) return <Zap size={24} />;
    if (title.includes('INITIALIZATION')) return <Settings size={24} />;
    if (title.includes('TECHNIQUE')) return <Cpu size={24} />;
    return <ArrowRight size={24} />;
  };

  return (
    <section id="programs" className="section-padding circuit-bg" style={{
      background: 'var(--bg-card)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-large">
          <h2 className="heading-1 fade-in neon-text" style={{ marginBottom: '30px' }}>
            TRAINING PROTOCOLS
          </h2>
          <p className="body-large fade-in" style={{ 
            maxWidth: '600px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            From neural initialization to elite enhancement - select the protocol matrix that matches your evolutionary path.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid-2" style={{ gap: '40px' }}>
          {data.map((program, index) => (
            <div 
              key={program.id}
              className="card cyberpunk-border fade-in"
              style={{
                animationDelay: `${index * 0.2}s`,
                background: 'var(--bg-page)',
                border: '2px solid var(--border-medium)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Popular Badge */}
              {program.title === 'ELITE PROTOCOL' && (
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '30px',
                  background: 'linear-gradient(135deg, var(--neon-magenta), var(--secondary-purple))',
                  color: 'var(--neutral-white)',
                  padding: '8px 20px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontFamily: 'Orbitron, Arial, sans-serif',
                  boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)'
                }}>
                  MOST ADVANCED
                </div>
              )}

              {/* Animated Background Effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(45deg, 
                  rgba(0, 255, 255, 0.05), 
                  rgba(255, 0, 255, 0.05), 
                  transparent 50%)`,
                opacity: 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none'
              }} className="program-bg-effect" />

              <div className="card-content" style={{ padding: '40px', position: 'relative', zIndex: 1 }}>
                {/* Program Header */}
                <div style={{ marginBottom: '30px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '15px'
                  }}>
                    <div style={{
                      color: 'var(--neon-cyan)',
                      filter: 'drop-shadow(0 0 10px var(--neon-cyan))'
                    }}>
                      {getProgramIcon(program.title)}
                    </div>
                    <h3 className="heading-3 neon-text-magenta" style={{ 
                      margin: 0,
                      fontFamily: 'Orbitron, Arial, sans-serif'
                    }}>
                      {program.title}
                    </h3>
                  </div>
                  
                  <p className="body-medium" style={{ 
                    marginBottom: '20px',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)'
                  }}>
                    {program.description}
                  </p>

                  {/* Program Meta */}
                  <div style={{
                    display: 'flex',
                    gap: '30px',
                    marginBottom: '25px',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <DollarSign size={18} color="var(--neon-cyan)" />
                      <span className="body-small" style={{ 
                        color: 'var(--neon-cyan)',
                        fontWeight: 600,
                        fontFamily: 'Orbitron, Arial, sans-serif'
                      }}>
                        {program.price}
                      </span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Clock size={18} color="var(--text-secondary)" />
                      <span className="body-small" style={{ color: 'var(--text-muted)' }}>
                        {program.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div style={{ marginBottom: '30px' }}>
                  <h4 className="heading-4" style={{ 
                    marginBottom: '20px',
                    fontSize: '1.1rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'Orbitron, Arial, sans-serif'
                  }}>
                    Enhancement Matrix:
                  </h4>
                  
                  <ul style={{ 
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {program.features.map((feature, idx) => (
                      <li 
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          marginBottom: '12px',
                          padding: '8px 12px',
                          background: 'rgba(0, 255, 255, 0.05)',
                          border: '1px solid rgba(0, 255, 255, 0.2)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 255, 255, 0.1)';
                          e.currentTarget.style.borderColor = 'var(--neon-cyan)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 255, 255, 0.05)';
                          e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.2)';
                        }}
                      >
                        <CheckCircle size={16} color="var(--neon-cyan)" />
                        <span className="body-small" style={{ 
                          flex: 1,
                          color: 'var(--text-secondary)'
                        }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button 
                  className="btn-primary cyberpunk-border"
                  onClick={() => handleInquiry(program)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    fontFamily: 'Orbitron, Arial, sans-serif'
                  }}
                >
                  INITIALIZE PROTOCOL
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Inquiry Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          padding: '20px',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            background: 'var(--bg-page)',
            border: '2px solid var(--neon-cyan)',
            padding: '40px',
            maxWidth: '500px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 0 50px rgba(0, 255, 255, 0.3)'
          }}>
            <h3 className="heading-3 neon-text-magenta" style={{ 
              marginBottom: '10px',
              textAlign: 'center',
              fontFamily: 'Orbitron, Arial, sans-serif'
            }}>
              {selectedProgram?.title}
            </h3>
            
            <p className="body-medium" style={{ 
              textAlign: 'center',
              marginBottom: '30px',
              color: 'var(--text-secondary)'
            }}>
              Initialize neural link - response within 24 system cycles
            </p>

            {submitMessage ? (
              <div style={{
                textAlign: 'center',
                padding: '40px',
                color: 'var(--neon-cyan)'
              }}>
                <CheckCircle size={48} style={{ 
                  marginBottom: '20px',
                  filter: 'drop-shadow(0 0 20px var(--neon-cyan))'
                }} />
                <p className="body-large">{submitMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="User Designation"
                  value={inquiryForm.name}
                  onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '15px',
                    marginBottom: '20px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    fontFamily: 'Rajdhani, Arial, sans-serif'
                  }}
                />
                
                <input
                  type="email"
                  placeholder="Neural Link Address"
                  value={inquiryForm.email}
                  onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '15px',
                    marginBottom: '20px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    fontFamily: 'Rajdhani, Arial, sans-serif'
                  }}
                />
                
                <input
                  type="tel"
                  placeholder="Communication Frequency"
                  value={inquiryForm.phone}
                  onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '15px',
                    marginBottom: '20px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    fontFamily: 'Rajdhani, Arial, sans-serif'
                  }}
                />
                
                <select
                  value={inquiryForm.experience}
                  onChange={(e) => setInquiryForm({...inquiryForm, experience: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '15px',
                    marginBottom: '20px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    fontFamily: 'Rajdhani, Arial, sans-serif'
                  }}
                >
                  <option value="">Select Enhancement Level</option>
                  <option value="beginner">Neural Initiate</option>
                  <option value="some">Basic Enhancement</option>
                  <option value="intermediate">Advanced Protocol</option>
                  <option value="advanced">Elite Operative</option>
                </select>
                
                <textarea
                  placeholder="Enhancement objectives and target parameters..."
                  value={inquiryForm.goals}
                  onChange={(e) => setInquiryForm({...inquiryForm, goals: e.target.value})}
                  required
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '15px',
                    marginBottom: '30px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    resize: 'vertical',
                    fontFamily: 'Rajdhani, Arial, sans-serif'
                  }}
                />
                
                <div style={{
                  display: 'flex',
                  gap: '15px'
                }}>
                  <button 
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="btn-secondary"
                    style={{ 
                      flex: 1,
                      fontFamily: 'Orbitron, Arial, sans-serif'
                    }}
                  >
                    ABORT
                  </button>
                  
                  <button 
                    type="submit"
                    className="btn-primary"
                    disabled={isSubmitting}
                    style={{ 
                      flex: 1,
                      fontFamily: 'Orbitron, Arial, sans-serif'
                    }}
                  >
                    {isSubmitting ? 'PROCESSING...' : 'SUBMIT INQUIRY'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .card:hover .program-bg-effect {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default ProgramsSection;