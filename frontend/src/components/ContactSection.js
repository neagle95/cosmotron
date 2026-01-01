import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const ContactSection = ({ data, contactData, language }) => {
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

        {/* Contact Information */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="heading-3" style={{ 
              marginBottom: '40px',
              color: 'var(--text-primary)'
            }}>
              {contactData.visitUs}
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
                    {contactData.address}
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
                    {contactData.phone}
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
                    {contactData.email}
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
                    {contactData.openingHours}
                  </h4>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <p className="body-small" style={{ marginBottom: '5px' }}>
                      <strong>{language === 'hu' ? 'Hét - Szo:' : 'Mon - Sat:'}</strong> {language === 'hu' ? data.hours.weekdaysHu : data.hours.weekdays}
                    </p>
                    <p className="body-small">
                      <strong>{language === 'hu' ? 'Vasárnap:' : 'Sunday:'}</strong> {language === 'hu' ? data.hours.sundayHu : data.hours.sunday}
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
                {contactData.followUs}
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
          {/* Map with address */}
          <div>
            <h4 className="heading-4" style={{ 
              marginBottom: '20px',
              color: 'var(--text-primary)',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}>
              <MapPin size={24} color="var(--brand-primary)" />
              {contactData.findUs}
            </h4>
            <p className="body-medium" style={{
              textAlign: 'center',
              marginBottom: '20px',
              color: 'var(--text-secondary)'
            }}>
              {data.address}
            </p>
            {/* Google Maps Embed */}
            <div style={{
              width: '100%',
              height: '400px',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '2px solid var(--border-medium)'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.464!2d20.145516!3d46.246820!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4744873f7f9c8e89%3A0x5e0f1c1c1c1c1c1c!2sSzeged%2C%20K%C3%A1lv%C3%A1ria%20sgt.%2014%2C%206724%20Hungary!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cosmotron Gym Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;