import React, { useState } from 'react';
import { Award, Mail, Star, Trophy } from 'lucide-react';

const TrainersSection = ({ data }) => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const openTrainerModal = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const closeTrainerModal = () => {
    setSelectedTrainer(null);
  };

  return (
    <section id="trainers" className="section-padding" style={{
      background: 'var(--bg-card)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-large">
          <h2 className="heading-1 fade-in" style={{ marginBottom: '30px' }}>
            MEET YOUR COACHES
          </h2>
          <p className="body-large fade-in" style={{ 
            maxWidth: '600px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            Learn from elite athletes and certified professionals who've walked the path to strength.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid-3" style={{ gap: '40px' }}>
          {data.map((trainer, index) => (
            <div 
              key={trainer.id}
              className="card fade-in"
              style={{
                background: 'var(--bg-page)',
                cursor: 'pointer',
                animationDelay: `${index * 0.2}s`,
                overflow: 'hidden'
              }}
              onClick={() => openTrainerModal(trainer)}
            >
              {/* Trainer Image */}
              <div style={{
                height: '300px',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${trainer.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'flex-end',
                position: 'relative'
              }}>
                {/* Achievement Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'var(--brand-primary)',
                  color: 'var(--text-inverse)',
                  padding: '8px 12px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <Trophy size={14} />
                  ELITE
                </div>

                {/* Name Overlay */}
                <div style={{
                  background: 'linear-gradient(transparent, rgba(26, 28, 27, 0.95))',
                  width: '100%',
                  padding: '40px 25px 25px'
                }}>
                  <h3 className="heading-4" style={{ 
                    color: 'var(--text-primary)',
                    marginBottom: '5px'
                  }}>
                    {trainer.name}
                  </h3>
                  <p className="body-small" style={{ 
                    color: 'var(--brand-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: 600
                  }}>
                    {trainer.title}
                  </p>
                </div>
              </div>

              {/* Trainer Info */}
              <div className="card-content" style={{ padding: '30px 25px' }}>
                <p className="body-small" style={{ 
                  marginBottom: '20px',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)'
                }}>
                  {trainer.bio}
                </p>

                {/* Specialties */}
                <div style={{ marginBottom: '20px' }}>
                  <h4 className="body-medium" style={{ 
                    marginBottom: '12px',
                    color: 'var(--text-primary)',
                    fontWeight: 600
                  }}>
                    Specialties:
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {trainer.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        style={{
                          background: 'var(--secondary-olive)',
                          color: 'var(--text-primary)',
                          padding: '6px 12px',
                          borderRadius: '15px',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          textTransform: 'uppercase',
                          letterSpacing: '0.02em'
                        }}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View More Button */}
                <button 
                  className="btn-secondary"
                  style={{
                    width: '100%',
                    fontSize: '0.9rem',
                    padding: '12px 20px'
                  }}
                >
                  View Full Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trainer Modal */}
      {selectedTrainer && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          padding: '20px'
        }} onClick={closeTrainerModal}>
          <div 
            style={{
              background: 'var(--bg-page)',
              borderRadius: '20px',
              maxWidth: '600px',
              width: '100%',
              border: '2px solid var(--border-medium)',
              overflow: 'hidden',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div style={{
              height: '300px',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${selectedTrainer.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'flex-end',
              position: 'relative'
            }}>
              {/* Close Button */}
              <button
                onClick={closeTrainerModal}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.5rem',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ×
              </button>

              <div style={{
                background: 'linear-gradient(transparent, rgba(26, 28, 27, 0.95))',
                width: '100%',
                padding: '40px 40px 30px'
              }}>
                <h2 className="heading-2" style={{ 
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                  fontSize: '2rem'
                }}>
                  {selectedTrainer.name}
                </h2>
                <p className="body-large" style={{ 
                  color: 'var(--brand-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontWeight: 600
                }}>
                  {selectedTrainer.title}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '40px' }}>
              {/* Bio */}
              <div style={{ marginBottom: '30px' }}>
                <h3 className="heading-4" style={{ 
                  marginBottom: '15px',
                  color: 'var(--text-primary)'
                }}>
                  About
                </h3>
                <p className="body-medium" style={{ 
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)'
                }}>
                  {selectedTrainer.bio}
                </p>
              </div>

              {/* Achievements */}
              <div style={{ marginBottom: '30px' }}>
                <h3 className="heading-4" style={{ 
                  marginBottom: '15px',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Award size={20} color="var(--brand-primary)" />
                  Achievements
                </h3>
                <ul style={{ 
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {selectedTrainer.achievements.map((achievement, idx) => (
                    <li 
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '10px',
                        padding: '10px 0',
                        borderBottom: idx < selectedTrainer.achievements.length - 1 ? '1px solid var(--border-light)' : 'none'
                      }}
                    >
                      <Star size={16} color="var(--brand-primary)" />
                      <span className="body-medium" style={{ 
                        color: 'var(--text-secondary)'
                      }}>
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specialties */}
              <div style={{ marginBottom: '30px' }}>
                <h3 className="heading-4" style={{ 
                  marginBottom: '15px',
                  color: 'var(--text-primary)'
                }}>
                  Specialties
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  {selectedTrainer.specialties.map((specialty, idx) => (
                    <span 
                      key={idx}
                      style={{
                        background: 'var(--brand-primary)',
                        color: 'var(--text-inverse)',
                        padding: '10px 16px',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em'
                      }}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Button */}
              <button 
                className="btn-primary"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
              >
                <Mail size={18} />
                Train with {selectedTrainer.name.split(' ')[0]}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrainersSection;