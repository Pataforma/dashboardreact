
import React, { useState } from 'react';
import AppSidebar from './common/AppSidebar';
import TutorMyPets from './tutor/TutorMyPets';
import TutorAppointments from './tutor/TutorAppointments';
import TutorFinancial from './tutor/TutorFinancial';
import TutorNotifications from './tutor/TutorNotifications';
import TutorProfile from './tutor/TutorProfile';
import { tutorData } from '../data/mockData';

const TutorDashboard = () => {
  const [activeModule, setActiveModule] = useState('my-pets');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const sidebarItems = [
    { key: 'my-pets', label: 'My Pets', icon: 'bi-heart-pulse' },
    { key: 'appointments', label: 'Appointments', icon: 'bi-calendar-check' },
    { key: 'financial', label: 'Financial', icon: 'bi-credit-card' },
    { key: 'notifications', label: 'Notifications', icon: 'bi-bell' },
    { key: 'profile', label: 'Profile', icon: 'bi-person-circle' }
  ];

  const renderMainContent = () => {
    switch (activeModule) {
      case 'my-pets':
        return <TutorMyPets />;
      case 'appointments':
        return <TutorAppointments />;
      case 'financial':
        return <TutorFinancial />;
      case 'notifications':
        return <TutorNotifications />;
      case 'profile':
        return <TutorProfile />;
      default:
        return <TutorMyPets />;
    }
  };

  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <AppSidebar
        items={sidebarItems}
        activeItem={activeModule}
        onItemClick={setActiveModule}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        userInfo={{
          name: tutorData.profile.name,
          role: 'Pet Owner',
          photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b3d1?w=150&h=150&fit=crop&crop=face'
        }}
      />
      
      <div className={`main-content flex-grow-1 ${sidebarCollapsed ? 'ps-2' : 'ps-3'}`}>
        {renderMainContent()}
      </div>
    </div>
  );
};

export default TutorDashboard;
