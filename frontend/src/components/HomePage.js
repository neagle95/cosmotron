import React, { useState, useEffect } from 'react';
import { mockData, mockAPI } from '../mock';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProgramsSection from './ProgramsSection';
import EquipmentSection from './EquipmentSection';
import TrainersSection from './TrainersSection';
import MembershipSection from './MembershipSection';
import ScheduleSection from './ScheduleSection';
import ContactSection from './ContactSection';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  const [data, setData] = useState(mockData);
  const [loading, setLoading] = useState(true);

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
          LOADING...
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <HeroSection data={data.hero} />
      <AboutSection data={data.about} />
      <ProgramsSection data={data.programs} />
      <EquipmentSection data={data.equipment} />
      <TrainersSection data={data.trainers} />
      <MembershipSection data={data.memberships} />
      <ScheduleSection data={data.schedule} />
      <ContactSection data={data.contact} />
      <Footer data={data.contact} />
    </div>
  );
};

export default HomePage;