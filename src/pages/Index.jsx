
import React, { useState } from 'react';
import DashboardSelector from './DashboardSelector';
import VeterinarianDashboard from '../components/VeterinarianDashboard';
import TutorDashboard from '../components/TutorDashboard';
import PartnerDashboard from '../components/PartnerDashboard';
import AdvertiserDashboard from '../components/AdvertiserDashboard';

const Index = () => {
  const [selectedDashboard, setSelectedDashboard] = useState(null);

  const renderDashboard = () => {
    switch (selectedDashboard) {
      case 'veterinarian':
        return <VeterinarianDashboard />;
      case 'tutor':
        return <TutorDashboard />;
      case 'partner':
        return <PartnerDashboard />;
      case 'advertiser':
        return <AdvertiserDashboard />;
      default:
        return <DashboardSelector onSelectDashboard={setSelectedDashboard} />;
    }
  };

  return (
    <div className="App">
      {selectedDashboard && (
        <div className="position-fixed top-0 start-0 p-3" style={{ zIndex: 1050 }}>
          <button 
            className="btn btn-outline-primary btn-sm"
            onClick={() => setSelectedDashboard(null)}
          >
            <i className="bi bi-arrow-left me-2"></i>
            Voltar à Seleção
          </button>
        </div>
      )}
      {renderDashboard()}
    </div>
  );
};

export default Index;
