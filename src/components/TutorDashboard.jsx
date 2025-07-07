
import React, { useState } from 'react';
import { tutorData } from '../data/mockData';

const TutorDashboard = () => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');

  const renderPetCards = () => (
    <div className="row">
      {tutorData.profile.pets.map(pet => (
        <div key={pet.id} className="col-md-6 col-lg-4 mb-4">
          <div 
            className="card pet-card" 
            onClick={() => setSelectedPet(pet)}
          >
            <img 
              src={pet.photo} 
              className="card-img-top" 
              alt={pet.name}
            />
            <div className="card-body">
              <h5 className="card-title">{pet.name}</h5>
              <p className="card-text text-muted">{pet.breed} • {pet.age}</p>
              <span className={`badge badge-${pet.statusColor}`}>
                {pet.healthStatus}
              </span>
              <div className="mt-3">
                <button className="btn btn-outline-primary btn-sm w-100">
                  Ver Perfil
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderPetDetails = () => {
    if (!selectedPet) return null;

    return (
      <div className="card mt-4">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Detalhes - {selectedPet.name}</h5>
            <button 
              className="btn btn-sm btn-outline-secondary"
              onClick={() => setSelectedPet(null)}
            >
              <i className="bi bi-x"></i>
            </button>
          </div>
        </div>
        <div className="card-body">
          <ul className="nav nav-tabs mb-3">
            <li className="nav-item">
              <a 
                className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveTab('profile'); }}
              >
                Perfil
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeTab === 'health' ? 'active' : ''}`}
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveTab('health'); }}
              >
                Histórico de Saúde
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeTab === 'vaccines' ? 'active' : ''}`}
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveTab('vaccines'); }}
              >
                Vacinas
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeTab === 'documents' ? 'active' : ''}`}
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveTab('documents'); }}
              >
                Documentos
              </a>
            </li>
          </ul>

          {activeTab === 'profile' && (
            <div className="row">
              <div className="col-md-4">
                <img 
                  src={selectedPet.photo} 
                  alt={selectedPet.name}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-8">
                <h6>Informações Básicas</h6>
                <p><strong>Nome:</strong> {selectedPet.name}</p>
                <p><strong>Espécie:</strong> {selectedPet.species}</p>
                <p><strong>Raça:</strong> {selectedPet.breed}</p>
                <p><strong>Idade:</strong> {selectedPet.age}</p>
                <p><strong>Status de Saúde:</strong> 
                  <span className={`badge ms-2 badge-${selectedPet.statusColor}`}>
                    {selectedPet.healthStatus}
                  </span>
                </p>
              </div>
            </div>
          )}

          {activeTab === 'vaccines' && (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Vacina</th>
                    <th>Data</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedPet.vaccines.map((vaccine, index) => (
                    <tr key={index}>
                      <td>{vaccine.name}</td>
                      <td>{vaccine.date}</td>
                      <td>
                        <span className={`badge ${
                          vaccine.status === 'Aplicada' ? 'bg-success' : 
                          vaccine.status === 'Agendada' ? 'badge-info' : 'badge-warning'
                        }`}>
                          {vaccine.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {(activeTab === 'health' || activeTab === 'documents') && (
            <div className="text-center py-4">
              <i className="bi bi-file-medical text-muted" style={{ fontSize: '3rem' }}></i>
              <p className="text-muted mt-2">Nenhum registro encontrado</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      {/* Top Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i className="bi bi-heart-fill me-2"></i>
            Pataforma
          </a>
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" href="#">Meus Pets</a>
            <a className="nav-link" href="#">Consultas</a>
            <a className="nav-link" href="#">Lembretes</a>
            <a className="nav-link" href="#">Servições Locais</a>
          </div>
        </div>
      </nav>

      <div className="container">
        {/* Header Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h2 className="mb-1">Olá, {tutorData.profile.name}!</h2>
                    <p className="text-muted mb-0">Gerencie a saúde e bem-estar dos seus pets</p>
                  </div>
                  <div className="col-md-4 text-end">
                    <button className="btn btn-primary">
                      <i className="bi bi-plus-circle me-2"></i>
                      Cadastrar Novo Pet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meus Pets Section */}
        <div className="row mb-4">
          <div className="col-12">
            <h4 className="mb-3">
              <i className="bi bi-heart-pulse me-2 text-primary"></i>
              Meus Pets
            </h4>
            {renderPetCards()}
          </div>
        </div>

        {/* Pet Details */}
        {selectedPet && renderPetDetails()}

        {/* Reminders Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-bell me-2"></i>
                  Próximos Lembretes
                </h5>
              </div>
              <div className="card-body">
                {tutorData.reminders.map((reminder, index) => (
                  <div key={index} className="row align-items-center mb-3 p-3 bg-light rounded">
                    <div className="col-md-2">
                      <span className={`badge ${
                        reminder.type === 'Consulta' ? 'badge-info' : 'badge-warning'
                      }`}>
                        {reminder.type}
                      </span>
                    </div>
                    <div className="col-md-3">
                      <strong>{reminder.pet}</strong>
                    </div>
                    <div className="col-md-3">
                      {reminder.date}
                    </div>
                    <div className="col-md-4">
                      {reminder.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDashboard;
