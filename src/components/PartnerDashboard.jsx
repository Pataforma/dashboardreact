
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { partnerData } from '../data/mockData';
import styles from './PartnerDashboard.module.css';

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
      <div className={`modal fade show d-block ${styles.modal}`}>
        <div className="modal-dialog">
          <div className={`modal-content ${styles.modalContent}`}>
            <div className={`modal-header ${styles.modalHeader}`}>
              <h5 className={`modal-title ${styles.modalTitle}`}>Post de Adoção - {selectedPet.name}</h5>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
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
              <div className={`card ${styles.adoptionPost}`}>
                <div className="card-body">
                  <h6 className={styles.adoptionPostTitle}>🐾 PROCURA-SE UM LAR CHEIO DE AMOR!</h6>
                  <div className={styles.adoptionPostContent}>
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
            </div>
            <div className={`modal-footer ${styles.modalActions}`}>
              <button type="button" className={`btn btn-outline-primary ${styles.downloadButton}`}>
                <i className="bi bi-download me-2"></i>Baixar Imagem
              </button>
              <button type="button" className={`btn btn-primary ${styles.shareButton}`}>
                <i className="bi bi-share me-2"></i>Compartilhar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderDashboard = () => (
    <div className={styles.fadeIn}>
      {/* KPIs */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className={`card ${styles.kpiCard}`}>
            <div className="card-body text-center">
              <i className={`bi bi-heart text-primary ${styles.kpiIcon}`}></i>
              <h3 className="mt-2">{partnerData.profile.stats.petsForAdoption}</h3>
              <p className="text-muted mb-0">Pets para Adoção</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className={`card ${styles.kpiCard}`}>
            <div className="card-body text-center">
              <i className={`bi bi-house-heart text-success ${styles.kpiIcon}`}></i>
              <h3 className="mt-2">{partnerData.profile.stats.adoptionsThisMonth}</h3>
              <p className="text-muted mb-0">Adoções Este Mês</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className={`card ${styles.kpiCard}`}>
            <div className="card-body text-center">
              <i className={`bi bi-calendar-event text-warning ${styles.kpiIcon}`}></i>
              <h3 className="mt-2">{partnerData.profile.stats.activeEvents}</h3>
              <p className="text-muted mb-0">Eventos Ativos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Manage Pets Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div className={`card ${styles.sectionCard}`}>
            <div className={`card-header ${styles.sectionHeader} d-flex justify-content-between align-items-center`}>
              <h5 className={styles.sectionTitle}>Gerenciar Pets</h5>
              <div className="d-flex gap-2">
                <select 
                  className={`form-select form-select-sm ${styles.filterSelect}`}
                  value={filterSpecies}
                  onChange={(e) => setFilterSpecies(e.target.value)}
                >
                  <option value="all">Todas as Espécies</option>
                  <option value="cão">Cães</option>
                  <option value="gato">Gatos</option>
                </select>
                <button className={`btn btn-primary btn-sm ${styles.createButton}`}>
                  <i className="bi bi-plus-circle me-1"></i>Novo Pet
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                {filteredPets.map(pet => (
                  <div key={pet.id} className="col-md-6 col-lg-4 mb-4">
                    <div className={`card ${styles.petCard}`}>
                      <img 
                        src={pet.photo} 
                        className={`card-img-top ${styles.petCardImage}`}
                        alt={pet.name}
                      />
                      <div className="card-body">
                        <h6 className={`card-title ${styles.petCardTitle}`}>{pet.name}</h6>
                        <p className={`card-text ${styles.petCardText}`}>
                          {pet.species} • {pet.age} • {pet.size}
                        </p>
                        <span className={`badge ${styles.statusBadge} badge-${pet.statusColor} mb-3`}>
                          {pet.status}
                        </span>
                        <div className="d-grid">
                          <button 
                            className={`btn btn-primary btn-sm ${styles.adoptionButton}`}
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
          <div className={`card ${styles.sectionCard}`}>
            <div className={`card-header ${styles.sectionHeader} d-flex justify-content-between align-items-center`}>
              <h5 className={styles.sectionTitle}>Eventos</h5>
              <button className={`btn btn-primary ${styles.createButton}`}>
                <i className="bi bi-plus-circle me-2"></i>Criar Novo Evento
              </button>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className={`table ${styles.eventTable}`}>
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
                        <td><strong className={styles.eventTitle}>{event.name}</strong></td>
                        <td>{event.date}</td>
                        <td>
                          <small className={styles.engagementText}>{event.engagement}</small>
                        </td>
                        <td>
                          <div className="btn-group btn-group-sm">
                            <button className={`btn btn-outline-primary ${styles.actionButton}`}>
                              <i className="bi bi-pencil"></i>
                            </button>
                            <button className={`btn btn-outline-info ${styles.actionButton}`}>
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
    <div className={`container-fluid ${styles.dashboardContainer}`}>
      <div className="row">
        <div className="col-md-3 col-lg-2 px-0">
          <Sidebar 
            items={sidebarItems} 
            activeItem={activeSection}
            onItemClick={setActiveSection}
          />
        </div>
        <div className="col-md-9 col-lg-10">
          <div className={styles.mainContent}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className={styles.userGreeting}>
                <i className={`bi bi-building me-2 ${styles.brandIcon}`}></i>
                {partnerData.profile.name}
              </h2>
            </div>
            
            {activeSection === 'dashboard' && renderDashboard()}
            {activeSection !== 'dashboard' && (
              <div className={styles.developmentPlaceholder}>
                <i className={`bi bi-gear ${styles.developmentIcon}`}></i>
                <h4 className={`mt-3 ${styles.developmentTitle}`}>Seção em Desenvolvimento</h4>
                <p className={styles.developmentText}>Esta funcionalidade será implementada em breve.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {renderAdoptionModal()}
    </div>
  );
};

export default PartnerDashboard;
