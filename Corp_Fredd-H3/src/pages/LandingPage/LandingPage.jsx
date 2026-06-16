import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import StatsSection from './components/StatsSection.jsx';
import GovernanceSection from './components/GovernanceSection.jsx';
import MatrixSection from './components/MatrixSection.jsx';
import DownloadSection from './components/DownloadSection.jsx';
import AdvantagesSection from './components/AdvantagesSection.jsx';

const LandingPage = () => {
  return (
    <div style={{ width: '100%', backgroundColor: '#f8fafc' }}>
      <HeroSection />
      <StatsSection />
      <GovernanceSection />
      <MatrixSection />
      <DownloadSection />
      <AdvantagesSection />
    </div>
  );
};

export default LandingPage;