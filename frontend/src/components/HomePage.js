import React, { useState, useEffect } from 'react';
import { mockData, mockAPI } from '../mock';
import { useLanguage } from '../context/LanguageContext';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import LeaderboardSection from './LeaderboardSection';
import BookingSection from './BookingSection';
import EquipmentSection from './EquipmentSection';
import PricingSection from './PricingSection';
import ContactSection from './ContactSection';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const { currentLanguage } = useLanguage();

  const data = mockData[currentLanguage];

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'var(--bg-page)'
      }}>
        <div className="brand-display" style={{ opacity: 0.7 }}>
          {currentLanguage === 'en' ? 'LOADING...' : 'BETÖLTÉS...'}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <HeroSection data={data.hero} />
      <AboutSection data={data.about} />
      <LeaderboardSection data={mockData.leaderboard} leaderboardData={data.leaderboard} />
      <BookingSection data={data.booking} />
      <EquipmentSection data={mockData.equipment} language={currentLanguage} />
      <PricingSection data={mockData.pricing} language={currentLanguage} pricingData={data.pricing} />
      <ContactSection data={mockData.contact} contactData={data.contact} />
      <Footer data={mockData.contact} footerData={data.footer} contactData={data.contact} navigationData={data.navigation} />
    </div>
  );
};

export default HomePage;