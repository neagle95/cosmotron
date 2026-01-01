import React from 'react';

const HeroSection = ({ data, navigationData }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" style={{
      background: `
        linear-gradient(135deg, rgba(10, 10, 15, 0.7), rgba(26, 26, 46, 0.6)), 
        url(https://customer-assets.emergentagent.com/job_cosmotron-lift/artifacts/y7cv6qi4_file_0000000015586230bbc3a706feb53869_conversation_id%3D67ffb4f5-5e74-8012-b17e-3fbcd28753a7%26message_id%3D829414af-438b-439d-ab88-a793497798f3.png)
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }} className="circuit-bg">
      {/* Cyberpunk Overlay Effects */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 50%, rgba(255, 0, 255, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, rgba(10, 10, 15, 0.8), rgba(138, 43, 226, 0.1))
        `,
        zIndex: 1
      }} />

      {/* Animated Grid Lines */}
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
        backgroundSize: '50px 50px',
        animation: 'grid-move 20s linear infinite',
        zIndex: 1
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          maxWidth: '800px',
          textAlign: 'left'
        }}>
          {/* Main Title */}
          <h1 className="brand-display fade-in glitch-text" style={{
            marginBottom: '20px',
            animationDelay: '0.2s'
          }}>
            {data.title}
          </h1>

          {/* Slogan */}
          <h2 className="heading-2 fade-in neon-text-magenta" style={{
            marginBottom: '30px',
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
            color: 'var(--text-secondary)',
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
              className="btn-primary cyberpunk-border"
              onClick={() => scrollToSection('pricing')}
              style={{
                fontSize: '1.1rem',
                padding: '1.2em 2.5em'
              }}
            >
              PRICING
            </button>
            
            <button 
              className="btn-secondary cyberpunk-border"
              onClick={() => scrollToSection('leaderboard')}
              style={{
                fontSize: '1.1rem',
                padding: '1.2em 2.5em'
              }}
            >
              LEADERBOARD
            </button>
          </div>
        </div>
      </div>

      {/* Cyberpunk Scroll Indicator */}
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
        color: 'var(--neon-cyan)',
        fontSize: '0.8rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontFamily: 'Orbitron, Arial, sans-serif',
        animation: 'pulse-glow 2s infinite'
      }}>
        <span>SCROLL DOWN</span>
        <div style={{
          width: '2px',
          height: '30px',
          background: 'linear-gradient(180deg, var(--neon-cyan), transparent)',
          borderRadius: '1px',
          boxShadow: '0 0 10px var(--neon-cyan)'
        }} />
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @media (max-width: 768px) {
          section {
            background-attachment: scroll !important;
          }
          
          .fade-in {
            animation-delay: 0s !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;