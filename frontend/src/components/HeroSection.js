import React from 'react';

const HeroSection = ({ data }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" style={{
      background: `linear-gradient(135deg, rgba(26, 28, 27, 0.8), rgba(26, 28, 27, 0.6)), url(${data.backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(26, 28, 27, 0.7), rgba(63, 72, 22, 0.3))',
        zIndex: 1
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          maxWidth: '800px',
          textAlign: 'left'
        }}>
          {/* Main Title */}
          <h1 className="brand-display fade-in" style={{
            marginBottom: '20px',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
            animationDelay: '0.2s'
          }}>
            {data.title}
          </h1>

          {/* Slogan */}
          <h2 className="heading-3 fade-in" style={{
            marginBottom: '30px',
            color: 'var(--text-secondary)',
            fontWeight: 600,
            animationDelay: '0.4s'
          }}>
            {data.slogan}
          </h2>

          {/* Subtitle */}
          <p className="body-large fade-in" style={{
            marginBottom: '50px',
            maxWidth: '600px',
            lineHeight: 1.6,
            color: 'var(--neutral-light)',
            animationDelay: '0.6s'
          }}>
            {data.subtitle}
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap'
          }} className="fade-in" style={{ animationDelay: '0.8s' }}>
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('contact')}
              style={{
                fontSize: '1.1rem',
                padding: '1.2em 2.5em',
                boxShadow: '0 8px 30px rgba(217, 251, 6, 0.3)'
              }}
            >
              Try for Free
            </button>
            
            <button 
              className="btn-secondary"
              onClick={() => scrollToSection('membership')}
              style={{
                fontSize: '1.1rem',
                padding: '1.2em 2.5em'
              }}
            >
              View Membership Plans
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        color: 'var(--text-secondary)',
        fontSize: '0.8rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        animation: 'bounce 2s infinite'
      }}>
        <span>Scroll Down</span>
        <div style={{
          width: '2px',
          height: '30px',
          background: 'var(--brand-primary)',
          borderRadius: '1px'
        }} />
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        @media (max-width: 768px) {
          section {
            background-attachment: scroll !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;