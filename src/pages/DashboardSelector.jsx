
import React from 'react';

const DashboardSelector = ({ onSelectDashboard }) => {
  const dashboards = [
    {
      id: 'veterinarian',
      title: 'Veterinário',
      description: 'Gerencie consultas, pacientes e prontuários médicos',
      icon: 'bi-heart-pulse',
      color: 'primary'
    },
    {
      id: 'tutor',
      title: 'Tutor (Dono do Pet)',
      description: 'Acompanhe a saúde e bem-estar dos seus pets',
      icon: 'bi-heart',
      color: 'success'
    },
    {
      id: 'partner',
      title: 'Parceiro (ONG/Abrigo)',
      description: 'Organize adoções e eventos para pets',
      icon: 'bi-building',
      color: 'warning'
    },
    {
      id: 'advertiser',
      title: 'Organizador de Eventos',
      description: 'Crie e gerencie eventos relacionados a pets',
      icon: 'bi-megaphone',
      color: 'info'
    }
  ];

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">
            <i className="bi bi-heart-fill me-3"></i>
            Pataforma
          </h1>
          <p className="lead text-muted">
            Escolha seu perfil para acessar o dashboard personalizado
          </p>
        </div>

        <div className="row justify-content-center">
          {dashboards.map(dashboard => (
            <div key={dashboard.id} className="col-lg-6 col-xl-5 mb-4">
              <div 
                className="card h-100 shadow-sm border-0 dashboard-card"
                style={{ cursor: 'pointer' }}
                onClick={() => onSelectDashboard(dashboard.id)}
              >
                <div className="card-body p-4 text-center">
                  <div className={`mb-3`}>
                    <i className={`bi ${dashboard.icon} text-${dashboard.color}`} 
                       style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h4 className="card-title fw-bold mb-3">{dashboard.title}</h4>
                  <p className="card-text text-muted">{dashboard.description}</p>
                  <button className={`btn btn-${dashboard.color} mt-3`}>
                    Acessar Dashboard
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <p className="text-muted">
            <i className="bi bi-shield-check me-2"></i>
            Plataforma segura e confiável para cuidar do seu pet
          </p>
        </div>
      </div>

      <style jsx>{`
        .dashboard-card {
          transition: all 0.3s ease !important;
        }
        .dashboard-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
        }
      `}</style>
    </div>
  );
};

export default DashboardSelector;
