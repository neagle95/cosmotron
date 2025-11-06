import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Instagram, Facebook, Youtube } from 'lucide-react';
import { mockAPI } from '../mock';

const ContactSection = ({ data, contactData }) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await mockAPI.submitContactForm(contactForm);
      setSubmitMessage(result.message);
      setContactForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => {
        setSubmitMessage('');
      }, 3000);
    } catch (error) {
      setSubmitMessage('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'instagram': return <Instagram size={20} />;
      case 'facebook': return <Facebook size={20} />;
      case 'youtube': return <Youtube size={20} />;
      default: return <Mail size={20} />;
    }
  };

  return (
    <section id="contact" className="section-padding" style={{
      background: 'var(--bg-page)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-large">
          <h2 className="heading-1 fade-in" style={{ marginBottom: '30px' }}>
            {contactData.title}
          </h2>
          <p className="body-large fade-in" style={{ 
            maxWidth: '600px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            {contactData.subtitle}
          </p>
        </div>

        <div className="grid-2" style={{ gap: '60px', alignItems: 'flex-start' }}>
          {/* Contact Information */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="heading-3" style={{ 
              marginBottom: '40px',
              color: 'var(--text-primary)'
            }}>
              VISIT COSMOTRON
            </h3>

            {/* Contact Details */}
            <div style={{ marginBottom: '50px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                marginBottom: '30px',
                padding: '25px',
                background: 'var(--bg-card)',
                borderRadius: '12px',
                border: '1px solid var(--border-medium)'
              }}>
                <div style={{
                  background: 'var(--brand-primary)',
                  color: 'var(--text-inverse)',
                  padding: '12px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '48px',
                  height: '48px'
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="heading-4" style={{ 
                    marginBottom: '8px',
                    color: 'var(--text-primary)'
                  }}>
                    Address
                  </h4>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                    {data.address}
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                marginBottom: '30px',
                padding: '25px',
                background: 'var(--bg-card)',
                borderRadius: '12px',
                border: '1px solid var(--border-medium)'
              }}>
                <div style={{
                  background: 'var(--brand-primary)',
                  color: 'var(--text-inverse)',
                  padding: '12px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '48px',
                  height: '48px'
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="heading-4" style={{ 
                    marginBottom: '8px',
                    color: 'var(--text-primary)'
                  }}>
                    Phone
                  </h4>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                    {data.phone}
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                marginBottom: '30px',
                padding: '25px',
                background: 'var(--bg-card)',
                borderRadius: '12px',
                border: '1px solid var(--border-medium)'
              }}>
                <div style={{
                  background: 'var(--brand-primary)',
                  color: 'var(--text-inverse)',
                  padding: '12px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '48px',
                  height: '48px'
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="heading-4" style={{ 
                    marginBottom: '8px',
                    color: 'var(--text-primary)'
                  }}>
                    Email
                  </h4>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                    {data.email}
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                padding: '25px',
                background: 'var(--bg-card)',
                borderRadius: '12px',
                border: '1px solid var(--border-medium)'
              }}>
                <div style={{
                  background: 'var(--brand-primary)',
                  color: 'var(--text-inverse)',
                  padding: '12px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '48px',
                  height: '48px'
                }}>
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="heading-4" style={{ 
                    marginBottom: '12px',
                    color: 'var(--text-primary)'
                  }}>
                    Opening Hours
                  </h4>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <p className="body-small" style={{ marginBottom: '5px' }}>
                      <strong>Mon-Fri:</strong> {data.hours.weekdays}
                    </p>
                    <p className="body-small" style={{ marginBottom: '5px' }}>
                      <strong>Saturday:</strong> {data.hours.saturday}
                    </p>
                    <p className="body-small">
                      <strong>Sunday:</strong> {data.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="heading-4" style={{ 
                marginBottom: '20px',
                color: 'var(--text-primary)'
              }}>
                Follow Us
              </h4>
              <div style={{
                display: 'flex',
                gap: '15px'
              }}>
                {Object.entries(data.socialMedia).map(([platform, handle]) => (
                  <a
                    key={platform}
                    href={`https://${platform}.com/${handle.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 16px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '25px',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--brand-primary)';
                      e.currentTarget.style.color = 'var(--brand-primary)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-medium)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {getSocialIcon(platform)}
                    {handle}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in" style={{ animationDelay: '0.4s' }}>
            <div style={{
              background: 'var(--bg-card)',
              padding: '40px',
              borderRadius: '16px',
              border: '1px solid var(--border-medium)'
            }}>
              <h3 className="heading-3" style={{ 
                marginBottom: '30px',
                color: 'var(--text-primary)',
                textAlign: 'center'
              }}>
                SEND US A MESSAGE
              </h3>

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
                  <div className="grid-2" style={{ gap: '20px', marginBottom: '20px' }}>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      required
                      style={{
                        width: '100%',
                        padding: '15px',
                        background: 'var(--bg-page)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '1rem'
                      }}
                    />
                    
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      required
                      style={{
                        width: '100%',
                        padding: '15px',
                        background: 'var(--bg-page)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  
                  <div className="grid-2" style={{ gap: '20px', marginBottom: '20px' }}>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '15px',
                        background: 'var(--bg-page)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '1rem'
                      }}
                    />
                    
                    <select
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                      required
                      style={{
                        width: '100%',
                        padding: '15px',
                        background: 'var(--bg-page)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '1rem'
                      }}
                    >
                      <option value="">Select Subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="classes">Class Information</option>
                      <option value="personal-training">Personal Training</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <textarea
                    placeholder="Your message..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '15px',
                      marginBottom: '30px',
                      background: 'var(--bg-page)',
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
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send size={18} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div 
          className="fade-in"
          style={{
            marginTop: '60px',
            height: '300px',
            background: 'var(--bg-card)',
            borderRadius: '16px',
            border: '1px solid var(--border-medium)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Map placeholder with address */}
          <div style={{
            textAlign: 'center',
            color: 'var(--text-secondary)'
          }}>
            <MapPin size={48} color="var(--brand-primary)" style={{ marginBottom: '20px' }} />
            <h4 className="heading-4" style={{ 
              marginBottom: '10px',
              color: 'var(--text-primary)'
            }}>
              Find Us Here
            </h4>
            <p className="body-medium">{data.address}</p>
            <p className="body-small" style={{ 
              marginTop: '10px',
              color: 'var(--text-muted)'
            }}>
              Interactive map will be integrated here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;