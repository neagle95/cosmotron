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

        {/* Calendar Placeholder */}
        <div className="fade-in" style={{
          background: 'var(--bg-page)',
          border: '2px solid var(--border-medium)',
          padding: '60px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background Grid Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(180deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            opacity: 0.3
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Calendar Icon */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '30px'
            }}>
              <Calendar 
                size={80} 
                color="var(--neon-cyan)"
                style={{
                  filter: 'drop-shadow(0 0 20px var(--neon-cyan))'
                }}
              />
            </div>

            {/* Title */}
            <h3 className="heading-2 neon-text" style={{ 
              marginBottom: '20px',
              fontFamily: 'Orbitron, Arial, sans-serif'
            }}>
              BOOKING SYSTEM
            </h3>

            {/* Description */}
            <p className="body-large" style={{ 
              marginBottom: '40px',
              color: 'var(--text-secondary)',
              maxWidth: '500px',
              margin: '0 auto 40px auto'
            }}>
              Our advanced booking system will be available here soon. Reserve your training sessions and manage your schedule with ease.
            </p>

            {/* Features List */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
              marginBottom: '40px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '20px',
                background: 'rgba(0, 255, 255, 0.05)',
                border: '1px solid rgba(0, 255, 255, 0.2)'
              }}>
                <Clock size={24} color="var(--neon-cyan)" />
                <div>
                  <div className="body-medium" style={{ 
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                    marginBottom: '5px'
                  }}>
                    Time Slots
                  </div>
                  <div className="body-small" style={{ color: 'var(--text-secondary)' }}>
                    Reserve specific training times
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '20px',
                background: 'rgba(255, 0, 255, 0.05)',
                border: '1px solid rgba(255, 0, 255, 0.2)'
              }}>
                <Users size={24} color="var(--neon-magenta)" />
                <div>
                  <div className="body-medium" style={{ 
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                    marginBottom: '5px'
                  }}>
                    Capacity Management
                  </div>
                  <div className="body-small" style={{ color: 'var(--text-secondary)' }}>
                    Ensure optimal training space
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '20px',
                background: 'rgba(138, 43, 226, 0.05)',
                border: '1px solid rgba(138, 43, 226, 0.2)'
              }}>
                <AlertCircle size={24} color="var(--neon-purple)" />
                <div>
                  <div className="body-medium" style={{ 
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                    marginBottom: '5px'
                  }}>
                  Easy Cancellation
                  </div>
                  <div className="body-small" style={{ color: 'var(--text-secondary)' }}>
                    Flexible booking modifications
                  </div>
                </div>
              </div>
            </div>

            {/* Coming Soon Message */}
            <div style={{
              background: 'linear-gradient(135deg, var(--neon-cyan)20, var(--neon-magenta)20)',
              border: '2px solid var(--neon-cyan)',
              padding: '30px',
              maxWidth: '400px',
              margin: '0 auto'
            }}>
              <div className="heading-4" style={{ 
                color: 'var(--neon-cyan)',
                marginBottom: '10px',
                fontFamily: 'Orbitron, Arial, sans-serif'
              }}>
                COMING SOON
              </div>
              <div className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                The booking system will be developed and integrated here shortly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;