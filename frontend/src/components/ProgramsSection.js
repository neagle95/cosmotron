import React, { useState } from 'react';
import { Clock, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
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

  return (
    <section id="programs" className="section-padding" style={{
      background: 'var(--bg-card)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-large">
          <h2 className="heading-1 fade-in" style={{ marginBottom: '30px' }}>
            TRAINING PROGRAMS
          </h2>
          <p className="body-large fade-in" style={{ 
            maxWidth: '600px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            From your first deadlift to competition podium - we have the program to get you there.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid-2" style={{ gap: '40px' }}>
          {data.map((program, index) => (
            <div 
              key={program.id}
              className="card fade-in"
              style={{
                animationDelay: `${index * 0.2}s`,
                background: 'var(--bg-page)',
                border: '2px solid var(--border-medium)',
                position: 'relative',
                overflow: 'visible'
              }}
            >
              {/* Popular Badge */}
              {program.title === 'Competition Prep' && (
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '30px',
                  background: 'var(--brand-primary)',
                  color: 'var(--text-inverse)',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  MOST POPULAR
                </div>
              )}

              <div className="card-content" style={{ padding: '40px' }}>
                {/* Program Header */}
                <div style={{ marginBottom: '30px' }}>
                  <h3 className="heading-3" style={{ 
                    marginBottom: '15px',
                    color: 'var(--text-primary)'
                  }}>
                    {program.title}
                  </h3>
                  
                  <p className="body-medium" style={{ 
                    marginBottom: '20px',
                    lineHeight: 1.6
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
                      <DollarSign size={18} color="var(--brand-primary)" />
                      <span className="body-small" style={{ 
                        color: 'var(--brand-primary)',
                        fontWeight: 600
                      }}>
                        {program.price}
                      </span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Clock size={18} color="var(--text-secondary)" />
                      <span className="body-small">
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
                    color: 'var(--text-primary)'
                  }}>
                    What's Included:
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
                          padding: '8px 0'
                        }}
                      >
                        <CheckCircle size={16} color="var(--brand-primary)" />
                        <span className="body-small" style={{ flex: 1 }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button 
                  className="btn-primary"
                  onClick={() => handleInquiry(program)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  Get Started
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          padding: '20px'
        }}>
          <div style={{
            background: 'var(--bg-page)',
            borderRadius: '16px',
            padding: '40px',
            maxWidth: '500px',
            width: '100%',
            border: '2px solid var(--border-medium)',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <h3 className="heading-3" style={{ 
              marginBottom: '10px',
              textAlign: 'center'
            }}>
              {selectedProgram?.title}
            </h3>
            
            <p className="body-medium" style={{ 
              textAlign: 'center',
              marginBottom: '30px',
              color: 'var(--text-secondary)'
            }}>
              Fill out this form and we'll contact you within 24 hours
            </p>

            {submitMessage ? (
              <div style={{
                textAlign: 'center',
                padding: '40px',
                color: 'var(--brand-primary)'
              }}>
                <CheckCircle size={48} style={{ marginBottom: '20px' }} />
                <p className="body-large">{submitMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={inquiryForm.name}
                  onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '15px',
                    marginBottom: '20px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '1rem'
                  }}
                />
                
                <input
                  type="email"
                  placeholder="Email Address"
                  value={inquiryForm.email}
                  onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '15px',
                    marginBottom: '20px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '1rem'
                  }}
                />
                
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={inquiryForm.phone}
                  onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '15px',
                    marginBottom: '20px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '1rem'
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
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select Experience Level</option>
                  <option value="beginner">Complete Beginner</option>
                  <option value="some">Some Experience</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
                
                <textarea
                  placeholder="What are your fitness goals?"
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
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    resize: 'vertical'
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
                    style={{ flex: 1 }}
                  >
                    Cancel
                  </button>
                  
                  <button 
                    type="submit"
                    className="btn-primary"
                    disabled={isSubmitting}
                    style={{ flex: 1 }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProgramsSection;