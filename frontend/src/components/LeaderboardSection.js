import React, { useState } from 'react';
import { Trophy, Medal, Award, Users, ExternalLink } from 'lucide-react';

const LeaderboardSection = ({ data, leaderboardData }) => {
  const [activeTab, setActiveTab] = useState('men');

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return <Trophy size={24} color="#FFD700" />;
      case 2: return <Medal size={24} color="#C0C0C0" />;
      case 3: return <Award size={24} color="#CD7F32" />;
      default: return <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-secondary)' }}>#{rank}</span>;
    }
  };

  const getRankStyle = (rank) => {
    switch (rank) {
      case 1:
        return {
          border: '3px solid #FFD700',
          boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)',
          background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), var(--bg-card))'
        };
      case 2:
        return {
          border: '3px solid #C0C0C0',
          boxShadow: '0 0 20px rgba(192, 192, 192, 0.4)',
          background: 'linear-gradient(135deg, rgba(192, 192, 192, 0.1), var(--bg-card))'
        };
      case 3:
        return {
          border: '3px solid #CD7F32',
          boxShadow: '0 0 20px rgba(205, 127, 50, 0.4)',
          background: 'linear-gradient(135deg, rgba(205, 127, 50, 0.1), var(--bg-card))'
        };
      default:
        return {
          border: '2px solid var(--border-medium)',
          background: 'var(--bg-card)'
        };
    }
  };

  const currentData = activeTab === 'men' ? data.men : data.women;

  return (
    <section id="leaderboard" className="section-padding circuit-bg" style={{
      background: 'var(--bg-page)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-large">
          <h2 className="heading-1 fade-in neon-text" style={{ marginBottom: '30px' }}>
            {leaderboardData.title}
          </h2>
          <p className="body-large fade-in" style={{ 
            maxWidth: '600px',
            margin: '0 auto',
            color: 'var(--text-secondary)',
            marginBottom: '40px'
          }}>
            {leaderboardData.subtitle}
          </p>

          {/* Tab Selector */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '50px'
          }}>
            <button
              className={activeTab === 'men' ? 'btn-primary' : 'btn-secondary'}
              onClick={() => setActiveTab('men')}
              style={{
                padding: '12px 30px',
                fontFamily: 'Orbitron, Arial, sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <Users size={18} />
              {leaderboardData.topMen}
            </button>
            
            <button
              className={activeTab === 'women' ? 'btn-primary' : 'btn-secondary'}
              onClick={() => setActiveTab('women')}
              style={{
                padding: '12px 30px',
                fontFamily: 'Orbitron, Arial, sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <Users size={18} />
              TOP 10 WOMEN
            </button>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="fade-in" style={{
          background: 'var(--bg-card)',
          border: '2px solid var(--border-medium)',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Table Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '60px 80px 1fr 80px 80px 80px 80px 80px',
            gap: '15px',
            padding: '20px',
            background: 'linear-gradient(135deg, var(--secondary-purple)30, var(--bg-page))',
            borderBottom: '2px solid var(--border-medium)',
            fontFamily: 'Orbitron, Arial, sans-serif',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.9rem',
            color: 'var(--neon-cyan)'
          }}>
            <div style={{ textAlign: 'center' }}>RANK</div>
            <div style={{ textAlign: 'center' }}>PHOTO</div>
            <div>NAME</div>
            <div style={{ textAlign: 'center' }}>SQUAT</div>
            <div style={{ textAlign: 'center' }}>BENCH</div>
            <div style={{ textAlign: 'center' }}>DEADLIFT</div>
            <div style={{ textAlign: 'center' }}>TOTAL</div>
            <div style={{ textAlign: 'center' }}>DOTS</div>
          </div>

          {/* Table Body */}
          <div>
            {currentData.map((athlete, index) => (
              <div
                key={athlete.rank}
                style={{
                  ...getRankStyle(athlete.rank),
                  display: 'grid',
                  gridTemplateColumns: '60px 80px 1fr 80px 80px 80px 80px 80px',
                  gap: '15px',
                  padding: '20px',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                className="leaderboard-row"
              >
                {/* Rank */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  {getRankIcon(athlete.rank)}
                </div>

                {/* Photo */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    backgroundImage: `url(${athlete.photo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: '2px solid var(--neon-cyan)',
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)'
                  }} />
                </div>

                {/* Name */}
                <div style={{
                  fontFamily: 'Orbitron, Arial, sans-serif',
                  fontWeight: 600,
                  color: athlete.rank <= 3 ? 'var(--neon-cyan)' : 'var(--text-primary)',
                  fontSize: athlete.rank <= 3 ? '1.1rem' : '1rem'
                }}>
                  {athlete.name}
                </div>

                {/* Stats */}
                {['squat', 'bench', 'deadlift', 'total'].map((lift) => (
                  <div
                    key={lift}
                    style={{
                      textAlign: 'center',
                      fontFamily: 'Rajdhani, Arial, sans-serif',
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {athlete[lift]} kg
                  </div>
                ))}

                {/* DOTS */}
                <div style={{
                  textAlign: 'center',
                  fontFamily: 'Orbitron, Arial, sans-serif',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: 'var(--neon-magenta)'
                }}>
                  {athlete.dots}
                </div>

                {/* Top 3 glow effect */}
                {athlete.rank <= 3 && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: athlete.rank === 1 ? '#FFD700' : athlete.rank === 2 ? '#C0C0C0' : '#CD7F32',
                    boxShadow: `0 0 10px ${athlete.rank === 1 ? '#FFD700' : athlete.rank === 2 ? '#C0C0C0' : '#CD7F32'}`
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* How to get on the list button */}
        <div className="text-center" style={{ marginTop: '50px' }}>
          <button 
            className="btn-secondary cyberpunk-border"
            style={{
              fontSize: '1.1rem',
              padding: '15px 30px',
              fontFamily: 'Orbitron, Arial, sans-serif',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <ExternalLink size={20} />
            HOW CAN I GET ON THE LIST?
          </button>
        </div>
      </div>

      <style jsx>{`
        .leaderboard-row:hover {
          transform: translateX(5px);
        }
        
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 50px 60px 1fr 60px 60px 60px 70px 70px !important;
            gap: 8px !important;
            padding: 15px 10px !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LeaderboardSection;