import React from 'react';
import { Calendar, Mail, Scale } from 'lucide-react';

const BookingSection = ({ data }) => {
  return (
    <section id="booking" className="section-padding circuit-bg" style={{
      background: 'var(--bg-card)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-large">
          <h2 className="heading-1 fade-in neon-text-magenta" style={{ marginBottom: '30px' }}>
            {data.title}
          </h2>
          <p className="body-large fade-in" style={{ 
            maxWidth: '600px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            {data.subtitle}
          </p>
        </div>

        {/* Booking Information */}
        <div className="fade-in" style={{
          background: 'var(--bg-page)',
          border: '2px solid var(--border-medium)',
          borderRadius: '16px',
          padding: '50px',
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Icons Section */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginBottom: '40px'
          }}>
            <Calendar 
              size={60} 
              color="var(--neon-cyan)"
              style={{
                filter: 'drop-shadow(0 0 15px var(--neon-cyan))'
              }}
            />
            <Mail 
              size={60} 
              color="var(--neon-magenta)"
              style={{
                filter: 'drop-shadow(0 0 15px var(--neon-magenta))'
              }}
            />
            <Scale 
              size={60} 
              color="var(--neon-purple)"
              style={{
                filter: 'drop-shadow(0 0 15px var(--neon-purple))'
              }}
            />
          </div>

          {/* Main Text */}
          <div style={{ marginBottom: '30px' }}>
            <p className="body-large" style={{ 
              color: 'var(--text-primary)',
              marginBottom: '15px',
              lineHeight: 1.8,
              textAlign: 'center'
            }}>
              {data.mainText}
            </p>
            <p className="body-large" style={{ 
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              textAlign: 'center'
            }}>
              {data.coordinationText}
            </p>
          </div>

          {/* Weigh-in Options */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            borderRadius: '12px',
            padding: '30px',
            marginBottom: '30px'
          }}>
            <h4 className="heading-4" style={{ 
              color: 'var(--brand-primary)',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              {data.weighInTitle}
            </h4>
            <ul style={{ 
              paddingLeft: '20px',
              color: 'var(--text-secondary)',
              lineHeight: 2
            }}>
              {data.weighInOptions.map((option, idx) => (
                <li key={idx} className="body-medium">{option}</li>
              ))}
            </ul>
          </div>

          {/* Example Email */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))',
            border: '2px solid var(--neon-cyan)',
            borderRadius: '12px',
            padding: '30px'
          }}>
            <h4 className="heading-4" style={{ 
              color: 'var(--neon-cyan)',
              marginBottom: '15px',
              fontFamily: 'Orbitron, Arial, sans-serif'
            }}>
              {data.exampleTitle}
            </h4>
            <p className="body-medium" style={{ 
              color: 'var(--text-primary)',
              fontStyle: 'italic',
              lineHeight: 1.8,
              margin: 0
            }}>
              {data.exampleText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;