
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { veterinarianData } from '../data/mockData';

const VeterinarianDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedPatient, setSelectedPatient] = useState(null);

  const sidebarItems = [
    { key: 'dashboard', label: 'Dashboard', icon: 'bi-speedometer2' },
    { key: 'patients', label: 'Pacientes', icon: 'bi-heart-pulse' },
    { key: 'calendar', label: 'Agenda', icon: 'bi-calendar3' },
    { key: 'prescriptions', label: 'Receitas', icon: 'bi-prescription2' },
    { key: 'financial', label: 'Financeiro', icon: 'bi-graph-up' },
    { key: 'profile', label: 'Perfil', icon: 'bi-person' }
  ];

  const renderPatientModal = () => {
    if (!selectedPatient) return null;

    return (
      <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Prontuário - {selectedPatient.petName}</h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setSelectedPatient(null)}
              ></button>
            </div>
            <div className="modal-body">
              <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Informações Gerais</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Histórico Clínico</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Receitas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Documentos</a>
                </li>
              </ul>
              
              <div className="row">
                <div className="col-md-6">
                  <h6>Dados do Animal</h6>
                  <p><strong>Nome:</strong> {selectedPatient.petName}</p>
                  <p><strong>Espécie:</strong> {selectedPatient.species}</p>
                  <p><strong>Raça:</strong> {selectedPatient.breed}</p>
                </div>
                <div className="col-md-6">
                  <h6>Tutor</h6>
                  <p><strong>Nome:</strong> {selectedPatient.tutorName}</p>
                  <p><strong>Última Visita:</strong> {selectedPatient.lastVisit}</p>
                  <p><strong>Status:</strong> 
                    <span className={`badge ms-2 ${
                      selectedPatient.status === 'Saudável' ? 'bg-success' : 
                      selectedPatient.status === 'Acompanhamento' ? 'badge-warning' : 'bg-danger'
                    }`}>
                      {selectedPatient.status}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                <i className="bi bi-plus-circle me-2"></i>Nova Entrada
              </button>
              <button type="button" className="btn btn-outline-primary">
                <i className="bi bi-prescription2 me-2"></i>Criar Receita
              </button>
              <button type="button" className="btn btn-outline-primary">
                <i className="bi bi-upload me-2"></i>Upload Exame
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderDashboard = () => (
    <div className="fade-in">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <img 
                    src={veterinarianData.profile.photo} 
                    alt="Veterinário"
                    className="rounded-circle"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-8">
                  <h3 className="mb-1">{veterinarianData.profile.name}</h3>
                  <p className="text-muted mb-0">{veterinarianData.profile.specialty}</p>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-outline-primary">
                    <i className="bi bi-link-45deg me-2"></i>
                    Copiar Link Público
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-calendar3 text-primary" style={{ fontSize: '2rem' }}></i>
              <h4 className="mt-2">{veterinarianData.stats.consultasAgendadas}</h4>
              <p className="text-muted mb-0">Consultas Agendadas</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-exclamation-triangle text-warning" style={{ fontSize: '2rem' }}></i>
              <h4 className="mt-2">{veterinarianData.stats.pendencias}</h4>
              <p className="text-muted mb-0">Pendências</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-envelope text-primary" style={{ fontSize: '2rem' }}></i>
              <h4 className="mt-2">{veterinarianData.stats.novasMensagens}</h4>
              <p className="text-muted mb-0">Novas Mensagens</p>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Agenda Interativa</h5>
              <div className="btn-group">
                <button className="btn btn-outline-primary btn-sm">Dia</button>
                <button className="btn btn-primary btn-sm">Semana</button>
                <button className="btn btn-outline-primary btn-sm">Mês</button>
              </div>
            </div>
            <div className="card-body">
              <div className="calendar-placeholder bg-light rounded p-4 text-center">
                <i className="bi bi-calendar3 text-muted" style={{ fontSize: '3rem' }}></i>
                <p className="text-muted mt-2">Visualização da Agenda</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Patient List */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Lista de Pacientes</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nome do Pet</th>
                      <th>Tutor</th>
                      <th>Última Visita</th>
                      <th>Status</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {veterinarianData.patients.map(patient => (
                      <tr key={patient.id}>
                        <td><strong>{patient.petName}</strong></td>
                        <td>{patient.tutorName}</td>
                        <td>{patient.lastVisit}</td>
                        <td>
                          <span className={`badge ${
                            patient.status === 'Saudável' ? 'bg-success' : 
                            patient.status === 'Acompanhamento' ? 'badge-warning' : 'bg-danger'
                          }`}>
                            {patient.status}
                          </span>
                        </td>
                        <td>
                          <button 
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => setSelectedPatient(patient)}
                          >
                            Ver Prontuário
                          </button>
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
      {renderPatientModal()}
    </div>
  );
};

export default VeterinarianDashboard;
