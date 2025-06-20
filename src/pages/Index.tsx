
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import CertificatesSection from '../components/CertificatesSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F0529] via-[#4A2574] to-[#0F0529]">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <CertificatesSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default Index;
