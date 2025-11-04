import React, { useState } from 'react';
import { Check, Star, ArrowRight, X } from 'lucide-react';
import { mockAPI } from '../mock';

const MembershipSection = ({ data }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    questions: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await mockAPI.submitMembershipInquiry(selectedPlan.id, inquiryForm);
      setSubmitMessage(result.message);
      setInquiryForm({ name: '', email: '', phone: '', startDate: '', questions: '' });
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
    <section id="membership" className="section-padding" style={{
      background: 'var(--bg-page)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-large">
          <h2 className="heading-1 fade-in" style={{ marginBottom: '30px' }}>
            MEMBERSHIP PLANS
          </h2>
          <p className="body-large fade-in" style={{ 
            maxWidth: '600px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            Choose the membership that fits your training goals and schedule.
          </p>
        </div>

        {/* Membership Grid */}
        <div className="grid-4" style={{ gap: '30px', marginBottom: '60px' }}>
          {data.map((plan, index) => (
            <div 
              key={plan.id}
              className="card fade-in"
              style={{
                background: plan.popular ? 'var(--secondary-olive)' : 'var(--bg-card)',
                border: plan.popular ? '3px solid var(--brand-primary)' : '1px solid var(--border-medium)',
                position: 'relative',
                transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--brand-primary)',
                  color: 'var(--text-inverse)',
                  padding: '8px 24px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <Star size={14} />
                  MOST POPULAR
                </div>
              )}

              <div className="card-content" style={{ 
                padding: '40px 30px',
                textAlign: 'center'
              }}>
                {/* Plan Name */}
                <h3 className="heading-3" style={{ 
                  marginBottom: '10px',
                  color: 'var(--text-primary)',
                  fontSize: '1.5rem'
                }}>
                  {plan.name}
                </h3>

                {/* Price */}
                <div style={{ marginBottom: '20px' }}>
                  <span className="heading-1" style={{ 
                    color: 'var(--brand-primary)',
                    fontSize: '2.5rem'
                  }}>
                    {plan.price}
                  </span>
                  <span className="body-medium" style={{ 
                    color: 'var(--text-secondary)',
                    marginLeft: '5px'
                  }}>
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p className="body-small" style={{ 
                  marginBottom: '30px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5
                }}>
                  {plan.description}
                </p>

                {/* Features */}
                <ul style={{ 
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 30px 0',
                  textAlign: 'left'
                }}>
                  {plan.features.map((feature, idx) => (
                    <li 
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '12px',
                        padding: '5px 0'
                      }}
                    >
                      <Check size={16} color="var(--brand-primary)" />
                      <span className="body-small" style={{ 
                        flex: 1,
                        color: 'var(--text-secondary)'
                      }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  className={plan.popular ? "btn-primary" : "btn-secondary"}
                  onClick={() => handleSelectPlan(plan)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  Choose Plan
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Membership Comparison */}
        <div 
          className="fade-in"
          style={{
            background: 'var(--bg-card)',
            padding: '50px 40px',
            borderRadius: '16px',
            border: '1px solid var(--border-medium)'
          }}
        >
          <h3 className="heading-2" style={{ 
            textAlign: 'center',
            marginBottom: '40px',
            color: 'var(--text-primary)'
          }}>
            ALL MEMBERSHIPS INCLUDE
          </h3>

          <div className="grid-3" style={{ gap: '40px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'var(--brand-primary)',
                color: 'var(--text-inverse)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                24/7
              </div>
              <h4 className="heading-4" style={{ 
                marginBottom: '15px',
                color: 'var(--text-primary)'
              }}>
                Access Hours
              </h4>
              <p className="body-small">
                Train whenever it fits your schedule with 24/7 keycard access.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'var(--brand-primary)',
                color: 'var(--text-inverse)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                ∞
              </div>
              <h4 className="heading-4" style={{ 
                marginBottom: '15px',
                color: 'var(--text-primary)'
              }}>
                Unlimited Training
              </h4>
              <p className="body-small">
                No session limits - train as often as you want with full equipment access.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'var(--brand-primary)',
                color: 'var(--text-inverse)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                ✓
              </div>
              <h4 className="heading-4" style={{ 
                marginBottom: '15px',
                color: 'var(--text-primary)'
              }}>
                No Contracts
              </h4>
              <p className="body-small">
                Flexible memberships with no long-term commitments or hidden fees.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Inquiry Modal */}
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
            overflowY: 'auto',
            position: 'relative'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                fontSize: '1.5rem',
                cursor: 'pointer',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={20} />
            </button>

            <h3 className="heading-3" style={{ 
              marginBottom: '10px',
              textAlign: 'center',
              color: 'var(--text-primary)'
            }}>
              {selectedPlan?.name}
            </h3>
            
            <div style={{
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              <span className="heading-2" style={{ 
                color: 'var(--brand-primary)',
                fontSize: '2rem'
              }}>
                {selectedPlan?.price}
              </span>
              <span className="body-medium" style={{ 
                color: 'var(--text-secondary)',
                marginLeft: '5px'
              }}>
                {selectedPlan?.period}
              </span>
            </div>

            {submitMessage ? (
              <div style={{
                textAlign: 'center',
                padding: '40px',
                color: 'var(--brand-primary)'
              }}>
                <Check size={48} style={{ marginBottom: '20px' }} />
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
                
                <input
                  type="date"
                  placeholder="Preferred Start Date"
                  value={inquiryForm.startDate}
                  onChange={(e) => setInquiryForm({...inquiryForm, startDate: e.target.value})}
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
                
                <textarea
                  placeholder="Any questions or special requirements?"
                  value={inquiryForm.questions}
                  onChange={(e) => setInquiryForm({...inquiryForm, questions: e.target.value})}
                  rows={3}
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
                
                <button 
                  type="submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                  style={{ 
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  {isSubmitting ? 'Processing...' : 'Start My Membership'}
                  {!isSubmitting && <ArrowRight size={18} />}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default MembershipSection;