import React, { useState } from 'react';
import { Clock, User, Users, Calendar, CheckCircle } from 'lucide-react';
import { mockAPI } from '../mock';

const ScheduleSection = ({ data }) => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedClass, setSelectedClass] = useState(null);
  const [isBookingModal, setIsBookingModal] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleBookClass = (classInfo) => {
    setSelectedClass(classInfo);
    setIsBookingModal(true);
  };

  const handleSubmitBooking = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await mockAPI.bookClass(selectedClass.name, bookingForm);
      setSubmitMessage(result.message);
      setBookingForm({ name: '', email: '', phone: '', experience: '' });
      setTimeout(() => {
        setIsBookingModal(false);
        setSubmitMessage('');
      }, 2000);
    } catch (error) {
      setSubmitMessage('Error booking class. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getDaySchedule = (day) => {
    return data.find(schedule => schedule.day === day);
  };

  const currentDaySchedule = getDaySchedule(selectedDay);

  return (
    <section id="schedule" className="section-padding" style={{
      background: 'var(--bg-card)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-large">
          <h2 className="heading-1 fade-in" style={{ marginBottom: '30px' }}>
            CLASS SCHEDULE
          </h2>
          <p className="body-large fade-in" style={{ 
            maxWidth: '600px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            Join our structured classes or train during open gym hours with coach supervision.
          </p>
        </div>

        {/* Day Selector */}
        <div 
          className="fade-in"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '50px',
            flexWrap: 'wrap',
            gap: '10px'
          }}
        >
          {data.map((schedule) => (
            <button
              key={schedule.day}
              onClick={() => setSelectedDay(schedule.day)}
              style={{
                background: selectedDay === schedule.day ? 'var(--brand-primary)' : 'var(--bg-page)',
                color: selectedDay === schedule.day ? 'var(--text-inverse)' : 'var(--text-primary)',
                border: selectedDay === schedule.day ? 'none' : '1px solid var(--border-medium)',
                padding: '12px 24px',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (selectedDay !== schedule.day) {
                  e.target.style.borderColor = 'var(--brand-primary)';
                  e.target.style.color = 'var(--brand-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedDay !== schedule.day) {
                  e.target.style.borderColor = 'var(--border-medium)';
                  e.target.style.color = 'var(--text-primary)';
                }
              }}
            >
              {schedule.day}
            </button>
          ))}
        </div>

        {/* Selected Day Schedule */}
        <div className="fade-in">
          <h3 className="heading-2" style={{ 
            textAlign: 'center',
            marginBottom: '40px',
            color: 'var(--text-primary)'
          }}>
            {selectedDay} Classes
          </h3>

          <div style={{ 
            display: 'grid',
            gap: '20px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {currentDaySchedule?.classes.map((classInfo, index) => (
              <div 
                key={index}
                style={{
                  background: 'var(--bg-page)',
                  padding: '30px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '30px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--brand-primary)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Class Info */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '10px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--brand-primary)'
                    }}>
                      <Clock size={18} />
                      <span className="body-medium" style={{ fontWeight: 600 }}>
                        {classInfo.time}
                      </span>
                    </div>
                    
                    <div style={{
                      background: 'var(--secondary-olive)',
                      color: 'var(--text-primary)',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      textTransform: 'uppercase'
                    }}>
                      {classInfo.spots}
                    </div>
                  </div>

                  <h4 className="heading-4" style={{ 
                    marginBottom: '8px',
                    color: 'var(--text-primary)'
                  }}>
                    {classInfo.name}
                  </h4>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--text-secondary)'
                  }}>
                    <User size={16} />
                    <span className="body-small">
                      Coach: {classInfo.coach}
                    </span>
                  </div>
                </div>

                {/* Book Button */}
                <button 
                  className="btn-secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookClass(classInfo);
                  }}
                  style={{
                    fontSize: '0.9rem',
                    padding: '12px 20px',
                    whiteSpace: 'nowrap'
                  }}
                  disabled={classInfo.spots.includes('Available') ? false : classInfo.spots.split('/')[0] === classInfo.spots.split('/')[1]}
                >
                  {classInfo.spots.includes('Available') ? 'Join Class' : 
                   classInfo.spots.split('/')[0] === classInfo.spots.split('/')[1] ? 'Full' : 'Book Spot'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Notes */}
        <div 
          className="fade-in"
          style={{
            background: 'var(--bg-page)',
            padding: '40px',
            borderRadius: '16px',
            border: '1px solid var(--border-medium)',
            marginTop: '60px',
            textAlign: 'center'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '20px'
          }}>
            <Calendar size={24} color="var(--brand-primary)" />
            <h3 className="heading-4" style={{ 
              color: 'var(--text-primary)',
              margin: 0
            }}>
              Important Schedule Notes
            </h3>
          </div>

          <div className="grid-2" style={{ gap: '30px', textAlign: 'left' }}>
            <div>
              <h4 className="body-medium" style={{ 
                color: 'var(--text-primary)',
                marginBottom: '10px',
                fontWeight: 600
              }}>
                Class Booking:
              </h4>
              <ul style={{ 
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                paddingLeft: '20px'
              }}>
                <li>Book classes up to 48 hours in advance</li>
                <li>Cancel at least 2 hours before class time</li>
                <li>Late arrivals (15+ min) may forfeit their spot</li>
              </ul>
            </div>

            <div>
              <h4 className="body-medium" style={{ 
                color: 'var(--text-primary)',
                marginBottom: '10px',
                fontWeight: 600
              }}>
                Open Training:
              </h4>
              <ul style={{ 
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                paddingLeft: '20px'
              }}>
                <li>No booking required for open training times</li>
                <li>Coach supervision available during all hours</li>
                <li>Equipment available first-come, first-served</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Class Booking Modal */}
      {isBookingModal && (
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
            overflowY: 'auto'
          }}>
            <h3 className="heading-3" style={{ 
              marginBottom: '15px',
              textAlign: 'center',
              color: 'var(--text-primary)'
            }}>
              Book Your Spot
            </h3>
            
            <div style={{
              textAlign: 'center',
              marginBottom: '30px',
              padding: '20px',
              background: 'var(--bg-card)',
              borderRadius: '12px',
              border: '1px solid var(--border-medium)'
            }}>
              <h4 className="body-large" style={{ 
                color: 'var(--brand-primary)',
                marginBottom: '8px'
              }}>
                {selectedClass?.name}
              </h4>
              <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                {selectedDay} at {selectedClass?.time} with {selectedClass?.coach}
              </p>
            </div>

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
              <form onSubmit={handleSubmitBooking}>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
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
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
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
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
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
                
                <select
                  value={bookingForm.experience}
                  onChange={(e) => setBookingForm({...bookingForm, experience: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '15px',
                    marginBottom: '30px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select Experience Level</option>
                  <option value="beginner">Complete Beginner</option>
                  <option value="some">Some Experience</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
                
                <div style={{
                  display: 'flex',
                  gap: '15px'
                }}>
                  <button 
                    type="button"
                    onClick={() => setIsBookingModal(false)}
                    className="btn-secondary"
                    style={{ flex: 1 }}
                  >
                    Cancel
                  </button>
                  
                  <button 
                    type="submit"
                    className="btn-primary"
                    disabled={isSubmitting}
                    style={{ flex: 1 }}
                  >
                    {isSubmitting ? 'Booking...' : 'Book Class'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ScheduleSection;