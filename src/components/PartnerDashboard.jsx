
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { partnerData } from '../data/mockData';

const PartnerDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [filterSpecies, setFilterSpecies] = useState('all');
  const [showAdoptionModal, setShowAdoptionModal] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const sidebarItems = [
    { key: 'dashboard', label: 'Dashboard', icon: 'bi-speedometer2' },
    { key: 'pets', label: 'Gerenciar Pets', icon: 'bi-heart' },
    { key: 'events', label: 'Eventos', icon: 'bi-calendar-event' },
    { key: 'messages', label: 'Mensagens', icon: 'bi-chat' },
    { key: 'reports', label: 'Relatórios', icon: 'bi-graph-up' }
  ];

  const filteredPets = filterSpecies === 'all' 
    ? partnerData.pets 
    : partnerData.pets.filter(pet => pet.species.toLowerCase() === filterSpecies);

  const renderAdoptionModal = () => {
    if (!showAdoptionModal || !selectedPet) return null;

    return (
      <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Post de Adoção - {selectedPet.name}</h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setShowAdoptionModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <div className="text-center mb-3">
                <img 
                  src={selectedPet.photo} 
                  alt={selectedPet.name}
                  className="img-fluid rounded"
                  style={{ maxHeight: '200px' }}
                />
              </div>
              <div className="card">
                <div className="card-body">
                  <h6>🐾 PROCURA-SE UM LAR CHEIO DE AMOR!</h6>
                  <p><strong>Nome:</strong> {selectedPet.name}</p>
                  <p><strong>Espécie:</strong> {selectedPet.species}</p>
                  <p><strong>Idade:</strong> {selectedPet.age}</p>
                  <p><strong>Porte:</strong> {selectedPet.size}</p>
                  <p className="mt-3">
                    💕 {selectedPet.name} está à procura de uma família que o ame incondicionalmente. 
                    É carinhoso, brincalhão e está pronto para levar alegria ao seu novo lar!
                  </p>
                  <p><strong>Contato:</strong> {partnerData.profile.name}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-primary">
                <i className="bi bi-download me-2"></i>Baixar Imagem
              </button>
              <button type="button" className="btn btn-primary">
                <i className="bi bi-share me-2"></i>Compartilhar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderDashboard = () => (
    <div className="fade-in">
      {/* KPIs */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-heart text-primary" style={{ fontSize: '2.5rem' }}></i>
              <h3 className="mt-2">{partnerData.profile.stats.petsForAdoption}</h3>
              <p className="text-muted mb-0">Pets para Adoção</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-house-heart text-success" style={{ fontSize: '2.5rem' }}></i>
              <h3 className="mt-2">{partnerData.profile.stats.adoptionsThisMonth}</h3>
              <p className="text-muted mb-0">Adoções Este Mês</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-calendar-event text-warning" style={{ fontSize: '2.5rem' }}></i>
              <h3 className="mt-2">{partnerData.profile.stats.activeEvents}</h3>
              <p className="text-muted mb-0">Eventos Ativos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Manage Pets Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Gerenciar Pets</h5>
              <div className="d-flex gap-2">
                <select 
                  className="form-select form-select-sm"
                  value={filterSpecies}
                  onChange={(e) => setFilterSpecies(e.target.value)}
                >
                  <option value="all">Todas as Espécies</option>
                  <option value="cão">Cães</option>
                  <option value="gato">Gatos</option>
                </select>
                <button className="btn btn-primary btn-sm">
                  <i className="bi bi-plus-circle me-1"></i>Novo Pet
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                {filteredPets.map(pet => (
                  <div key={pet.id} className="col-md-6 col-lg-4 mb-4">
                    <div className="card pet-card">
                      <img 
                        src={pet.photo} 
                        className="card-img-top" 
                        alt={pet.name}
                      />
                      <div className="card-body">
                        <h6 className="card-title">{pet.name}</h6>
                        <p className="card-text text-muted small">
                          {pet.species} • {pet.age} • {pet.size}
                        </p>
                        <span className={`badge badge-${pet.statusColor} mb-3`}>
                          {pet.status}
                        </span>
                        <div className="d-grid">
                          <button 
                            className="btn btn-primary btn-sm"
                            onClick={() => {
                              setSelectedPet(pet);
                              setShowAdoptionModal(true);
                            }}
                          >
                            <i className="bi bi-share me-1"></i>
                            Gerar Post de Adoção
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Eventos</h5>
              <button className="btn btn-primary">
                <i className="bi bi-plus-circle me-2"></i>Criar Novo Evento
              </button>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nome do Evento</th>
                      <th>Data</th>
                      <th>Engajamento</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {partnerData.events.map(event => (
                      <tr key={event.id}>
                        <td><strong>{event.name}</strong></td>
                        <td>{event.date}</td>
                        <td>
                          <small className="text-muted">{event.engagement}</small>
                        </td>
                        <td>
                          <div className="btn-group btn-group-sm">
                            <button className="btn btn-outline-primary">
                              <i className="bi bi-pencil"></i>
                            </button>
                            <button className="btn btn-outline-info">
                              <i className="bi bi-eye"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-2 px-0">
          <Sidebar 
            items={sidebarItems} 
            activeItem={activeSection}
            onItemClick={setActiveSection}
          />
        </div>
        <div className="col-md-9 col-lg-10 main-content p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>
              <i className="bi bi-building me-2 text-primary"></i>
              {partnerData.profile.name}
            </h2>
          </div>
          
          {activeSection === 'dashboard' && renderDashboard()}
          {activeSection !== 'dashboard' && (
            <div className="text-center py-5">
              <i className="bi bi-gear text-muted" style={{ fontSize: '3rem' }}></i>
              <h4 className="mt-3 text-muted">Seção em Desenvolvimento</h4>
              <p className="text-muted">Esta funcionalidade será implementada em breve.</p>
            </div>
          )}
        </div>
      </div>
      {renderAdoptionModal()}
    </div>
  );
};

export default PartnerDashboard;
