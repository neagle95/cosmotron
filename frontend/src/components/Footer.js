import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Music, Dumbbell } from 'lucide-react';

const Footer = ({ data, footerData, contactData, navigationData }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'instagram': return <Instagram size={20} />;
      case 'facebook': return <Facebook size={20} />;
      case 'tiktok': return <Music size={20} />;
      default: return <Mail size={20} />;
    }
  };

  const quickLinks = navigationData ? [
    { label: navigationData.aboutUs, id: 'about' },
    { label: navigationData.leaderboard, id: 'leaderboard' },
    { label: navigationData.booking, id: 'booking' },
    { label: navigationData.equipment, id: 'equipment' },
    { label: navigationData.pricing, id: 'pricing' },
    { label: navigationData.contact, id: 'contact' }
  ] : [
    { label: 'About Us', id: 'about' },
    { label: 'Leaderboard', id: 'leaderboard' },
    { label: 'Booking', id: 'booking' },
    { label: 'Equipment', id: 'equipment' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <footer style={{
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border-medium)',
      position: 'relative'
    }}>
      {/* Main Footer Content */}
      <div className="container" style={{ padding: '80px 40px 40px' }}>
        <div className="grid-4" style={{ gap: '50px', alignItems: 'flex-start' }}>
          {/* Brand Column */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '25px'
            }}>
              <div style={{
                background: 'var(--brand-primary)',
                color: 'var(--text-inverse)',
                padding: '12px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Dumbbell size={24} />
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'Inter, Arial, sans-serif',
                  fontWeight: 900,
                  fontSize: '1.5rem',
                  color: 'var(--brand-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  margin: 0
                }}>
                  COSMOTRON
                </h3>
                <p style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  margin: '2px 0 0 0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {footerData.slogan}
                </p>
              </div>
            </div>
            
            <p className="body-small" style={{ 
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              marginBottom: '25px'
            }}>
              Perth's premier powerlifting facility, where elite athletes and beginners train together to achieve extraordinary strength.
            </p>

            {/* Social Media */}
            <div>
              <h4 style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '15px'
              }}>
                {contactData.followUs}
              </h4>
              <div style={{
                display: 'flex',
                gap: '12px'
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
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      background: 'var(--bg-page)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '50%',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--brand-primary)';
                      e.currentTarget.style.color = 'var(--brand-primary)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-medium)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {getSocialIcon(platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '25px'
            }}>
              {footerData.quickLinks}
            </h4>
            <nav>
              <ul style={{ 
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {quickLinks.map((link) => (
                  <li key={link.id} style={{ marginBottom: '12px' }}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        padding: '4px 0',
                        textAlign: 'left',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = 'var(--brand-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'var(--text-secondary)';
                      }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '25px'
            }}>
              {footerData.contactInfo}
            </h4>
            
            <div style={{ marginBottom: '20px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                marginBottom: '15px'
              }}>
                <MapPin size={16} color="var(--brand-primary)" style={{ marginTop: '2px' }} />
                <div>
                  <p className="body-small" style={{ 
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    margin: 0
                  }}>
                    {data.address}
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '15px'
              }}>
                <Phone size={16} color="var(--brand-primary)" />
                <p className="body-small" style={{ 
                  color: 'var(--text-secondary)',
                  margin: 0
                }}>
                  {data.phone}
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <Mail size={16} color="var(--brand-primary)" />
                <p className="body-small" style={{ 
                  color: 'var(--text-secondary)',
                  margin: 0
                }}>
                  {data.email}
                </p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '25px'
            }}>
              {footerData.openingHours}
            </h4>
            
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px',
                paddingBottom: '8px',
                borderBottom: '1px solid var(--border-light)'
              }}>
                <span className="body-small" style={{ 
                  color: 'var(--text-primary)',
                  fontWeight: 500
                }}>
                  Mon - Fri
                </span>
                <span className="body-small" style={{ 
                  color: 'var(--text-secondary)'
                }}>
                  {data.hours.weekdays}
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px',
                paddingBottom: '8px',
                borderBottom: '1px solid var(--border-light)'
              }}>
                <span className="body-small" style={{ 
                  color: 'var(--text-primary)',
                  fontWeight: 500
                }}>
                  Saturday
                </span>
                <span className="body-small" style={{ 
                  color: 'var(--text-secondary)'
                }}>
                  {data.hours.saturday}
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span className="body-small" style={{ 
                  color: 'var(--text-primary)',
                  fontWeight: 500
                }}>
                  Sunday
                </span>
                <span className="body-small" style={{ 
                  color: 'var(--text-secondary)'
                }}>
                  {data.hours.sunday}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid var(--border-medium)',
        padding: '30px 0'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <p className="body-small" style={{ 
              color: 'var(--text-secondary)',
              margin: 0
            }}>
              © {new Date().getFullYear()} {footerData.copyright}
            </p>
            
            <div style={{
              display: 'flex',
              gap: '30px',
              alignItems: 'center'
            }}>
              <a 
                href="#privacy" 
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {footerData.privacyPolicy}
              </a>
              <a 
                href="#terms" 
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {footerData.termsConditions}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 1200px) {
          .grid-4 {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px !important;
          }
        }
        
        @media (max-width: 768px) {
          .grid-4 {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          
          div[style*="flex-wrap: wrap"] {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 15px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;