import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockData } from '../data/mock';
import { Globe } from 'lucide-react';

const HomePage = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('men');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Navigation handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Contact form handler
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await mockData.submitContactForm(contactForm);
      alert(result.message);
      setContactForm({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Error sending message. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-content">
          <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            COSMOTRON
          </a>
          
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>{t('nav.home')}</a></li>
            <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>{t('nav.about')}</a></li>
            <li><a href="#equipment" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('equipment'); }}>{t('nav.equipment')}</a></li>
            <li><a href="#pricing" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>{t('nav.pricing')}</a></li>
            <li><a href="#leaderboard" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('leaderboard'); }}>{t('nav.leaderboard')}</a></li>
            <li><a href="#booking" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('booking'); }}>{t('nav.booking')}</a></li>
            <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>{t('nav.contact')}</a></li>
          </ul>
          
          <button className="language-toggle" onClick={toggleLanguage}>
            <Globe size={16} style={{ marginRight: '5px' }} />
            {language.toUpperCase()}
          </button>
          
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-menu">
            <li><a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>{t('nav.home')}</a></li>
            <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>{t('nav.about')}</a></li>
            <li><a href="#equipment" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('equipment'); }}>{t('nav.equipment')}</a></li>
            <li><a href="#pricing" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>{t('nav.pricing')}</a></li>
            <li><a href="#leaderboard" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('leaderboard'); }}>{t('nav.leaderboard')}</a></li>
            <li><a href="#booking" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('booking'); }}>{t('nav.booking')}</a></li>
            <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>{t('nav.contact')}</a></li>
            <li>
              <button className="language-toggle" onClick={toggleLanguage}>
                <Globe size={16} style={{ marginRight: '5px' }} />
                {language.toUpperCase()}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="cyber-title">{t('hero.title')}</h1>
            <h2 className="cyber-subtitle">{t('hero.subtitle')}</h2>
            <p className="cyber-text" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
              {t('hero.description')}
            </p>
            <div className="hero-buttons">
              <button className="cyber-btn" onClick={() => scrollToSection('pricing')}>
                {t('hero.cta.pricing')}
              </button>
              <button className="cyber-btn cyber-btn-magenta" onClick={() => scrollToSection('leaderboard')}>
                {t('hero.cta.leaderboard')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="cyber-title">{t('about.title')}</h2>
          <div className="card-grid">
            <div className="cyber-card">
              <p className="cyber-text">{t('about.description')}</p>
              <br />
              <p className="cyber-text">{t('about.philosophy')}</p>
            </div>
            <div className="cyber-card" style={{ cursor: 'pointer' }} onClick={() => scrollToSection('leaderboard')}>
              <h3 className="glow-cyan" style={{ marginBottom: '1rem' }}>{t('about.leaderboard.title')}</h3>
              <p className="cyber-text">{t('about.leaderboard.description')}</p>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(45deg, var(--cyber-cyan), var(--cyber-magenta))' }}></div>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(45deg, var(--cyber-magenta), var(--cyber-purple))' }}></div>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(45deg, var(--cyber-purple), var(--cyber-cyan))' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="section">
        <div className="container">
          <h2 className="cyber-title">{t('equipment.title')}</h2>
          <h3 className="cyber-subtitle">{t('equipment.subtitle')}</h3>
          <div className="card-grid">
            {mockData.equipment.map((item) => (
              <div key={item.id} className="cyber-card">
                <div style={{ 
                  height: '200px', 
                  background: `url(${item.image}) center/cover`,
                  marginBottom: '1rem',
                  border: '1px solid var(--cyber-border)'
                }}></div>
                <h4 className="glow-cyan" style={{ marginBottom: '0.5rem' }}>
                  {t(`equipment.${item.name.toLowerCase().replace(' ', '')}`)}
                </h4>
                <p className="cyber-text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section">
        <div className="container">
          <h2 className="cyber-title">{t('pricing.title')}</h2>
          <div className="card-grid">
            <div className="cyber-card">
              <h3 className="glow-cyan" style={{ marginBottom: '1rem' }}>{t('pricing.monthly')}</h3>
              <div style={{ fontSize: '2rem', color: 'var(--cyber-magenta)', fontFamily: 'Orbitron', marginBottom: '1rem' }}>
                {t('pricing.monthly.price')}
              </div>
              <p className="cyber-text" style={{ marginBottom: '2rem' }}>{t('pricing.monthly.desc')}</p>
              <ul style={{ listStyle: 'none', color: 'var(--cyber-text-dim)' }}>
                <li>✓ {t('pricing.features.access')}</li>
                <li>✓ {t('pricing.features.equipment')}</li>
                <li>✓ {t('pricing.features.coaching')}</li>
                <li>✓ {t('pricing.features.community')}</li>
              </ul>
            </div>
            <div className="cyber-card">
              <h3 className="glow-cyan" style={{ marginBottom: '1rem' }}>{t('pricing.quarterly')}</h3>
              <div style={{ fontSize: '2rem', color: 'var(--cyber-magenta)', fontFamily: 'Orbitron', marginBottom: '1rem' }}>
                {t('pricing.quarterly.price')}
              </div>
              <p className="cyber-text" style={{ marginBottom: '2rem' }}>{t('pricing.quarterly.desc')}</p>
              <ul style={{ listStyle: 'none', color: 'var(--cyber-text-dim)' }}>
                <li>✓ {t('pricing.features.access')}</li>
                <li>✓ {t('pricing.features.equipment')}</li>
                <li>✓ {t('pricing.features.coaching')}</li>
                <li>✓ {t('pricing.features.community')}</li>
              </ul>
            </div>
            <div className="cyber-card">
              <h3 className="glow-cyan" style={{ marginBottom: '1rem' }}>{t('pricing.yearly')}</h3>
              <div style={{ fontSize: '2rem', color: 'var(--cyber-magenta)', fontFamily: 'Orbitron', marginBottom: '1rem' }}>
                {t('pricing.yearly.price')}
              </div>
              <p className="cyber-text" style={{ marginBottom: '2rem' }}>{t('pricing.yearly.desc')}</p>
              <ul style={{ listStyle: 'none', color: 'var(--cyber-text-dim)' }}>
                <li>✓ {t('pricing.features.access')}</li>
                <li>✓ {t('pricing.features.equipment')}</li>
                <li>✓ {t('pricing.features.coaching')}</li>
                <li>✓ {t('pricing.features.community')}</li>
              </ul>
            </div>
          </div>
          <div className="cyber-card" style={{ marginTop: '2rem' }}>
            <p className="cyber-text" style={{ marginBottom: '1rem' }}>{t('pricing.payment')}</p>
            <p className="glow-cyan" style={{ marginBottom: '0.5rem' }}>{t('pricing.rules.title')}</p>
            <p className="cyber-text">{t('pricing.rules.respect')}</p>
            <p className="cyber-text">{t('pricing.rules.rerack')}</p>
            <p className="cyber-text">{t('pricing.rules.spotting')}</p>
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section id="leaderboard" className="section">
        <div className="container">
          <h2 className="cyber-title">{t('leaderboard.title')}</h2>
          <div className="tabs-container">
            <div className="tabs-header">
              <button 
                className={`tab-btn ${activeTab === 'men' ? 'active' : ''}`}
                onClick={() => setActiveTab('men')}
              >
                {t('leaderboard.men')}
              </button>
              <button 
                className={`tab-btn ${activeTab === 'women' ? 'active' : ''}`}
                onClick={() => setActiveTab('women')}
              >
                {t('leaderboard.women')}
              </button>
            </div>
            
            <div className="leaderboard-grid" style={{ display: 'grid', gap: '1rem' }}>
              {mockData.leaderboard[activeTab].map((athlete, index) => (
                <div key={athlete.id} className="cyber-card" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '2rem',
                  background: index < 3 ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(192, 192, 192, 0.1))' : undefined
                }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    background: `url(${athlete.image}) center/cover`,
                    border: index < 3 ? '3px solid gold' : '2px solid var(--cyber-cyan)'
                  }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                      <span style={{ 
                        fontSize: '1.5rem', 
                        fontFamily: 'Orbitron', 
                        color: index < 3 ? 'gold' : 'var(--cyber-cyan)'
                      }}>
                        #{index + 1}
                      </span>
                      <h4 className="glow-magenta">{athlete.name}</h4>
                    </div>
                    <div style={{ display: 'flex', gap: '2rem', color: 'var(--cyber-text-dim)' }}>
                      <span><strong>{t('leaderboard.total')}:</strong> {athlete.total}kg</span>
                      <span><strong>S:</strong> {athlete.squat}kg</span>
                      <span><strong>B:</strong> {athlete.bench}kg</span>
                      <span><strong>D:</strong> {athlete.deadlift}kg</span>
                      <span><strong>{t('leaderboard.competitions')}:</strong> {athlete.competitions}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section">
        <div className="container">
          <h2 className="cyber-title">{t('booking.title')}</h2>
          <div className="cyber-card" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h3 className="glow-magenta" style={{ marginBottom: '2rem' }}>{t('booking.coming.title')}</h3>
            <p className="cyber-text" style={{ fontSize: '1.2rem' }}>{t('booking.coming.desc')}</p>
            <button className="cyber-btn" style={{ marginTop: '2rem' }} onClick={() => scrollToSection('contact')}>
              {t('nav.contact')}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="cyber-title">{t('contact.title')}</h2>
          <div className="card-grid">
            <div className="cyber-card">
              <h3 className="glow-cyan" style={{ marginBottom: '2rem' }}>{t('contact.address')}</h3>
              <p className="cyber-text" style={{ marginBottom: '1rem' }}>
                <strong>COSMOTRON Powerlifting Gym</strong><br />
                {t('contact.city')}
              </p>
              <p className="cyber-text" style={{ marginBottom: '1rem' }}>
                <strong>{t('contact.hours')}</strong><br />
                {t('contact.hours.weekday')}<br />
                {t('contact.hours.weekend')}
              </p>
              <p className="cyber-text">
                <strong>{t('contact.phone')}:</strong> +36 30 123 4567<br />
                <strong>{t('contact.email')}:</strong> info@cosmotron.hu
              </p>
            </div>
            
            <div className="cyber-card">
              <form className="cyber-form" onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <label className="form-label">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t('contact.form.message')}</label>
                  <textarea 
                    className="form-textarea" 
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="cyber-btn" style={{ width: '100%' }}>
                  {t('contact.form.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>COSMOTRON</h4>
              <p className="cyber-text">{t('footer.slogan')}</p>
            </div>
            <div className="footer-section">
              <h4>{t('nav.home')}</h4>
              <ul>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>{t('nav.about')}</a></li>
                <li><a href="#equipment" onClick={(e) => { e.preventDefault(); scrollToSection('equipment'); }}>{t('nav.equipment')}</a></li>
                <li><a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>{t('nav.pricing')}</a></li>
                <li><a href="#leaderboard" onClick={(e) => { e.preventDefault(); scrollToSection('leaderboard'); }}>{t('nav.leaderboard')}</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>{t('contact.title')}</h4>
              <ul>
                <li>info@cosmotron.hu</li>
                <li>+36 30 123 4567</li>
                <li>{t('contact.city')}</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Social</h4>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">TikTok</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;