
import React, { useState } from 'react';
import AppSidebar from './common/AppSidebar';
import FinanceiroModule from './veterinarian/FinanceiroModule';
import EstoqueModule from './veterinarian/EstoqueModule';
import MarketingModule from './veterinarian/MarketingModule';
import { veterinarianData } from '../data/mockData';

const VeterinarianDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const sidebarItems = [
    { key: 'dashboard', label: 'Dashboard', icon: 'bi-speedometer2' },
    { key: 'agenda', label: 'Agenda & Consultas', icon: 'bi-calendar3' },
    { key: 'patients', label: 'Pacientes', icon: 'bi-heart-pulse' },
    { key: 'financeiro', label: 'Financeiro', icon: 'bi-graph-up' },
    { key: 'estoque', label: 'Estoque & Insumos', icon: 'bi-box-seam' },
    { key: 'marketing', label: 'Marketing & Perfil', icon: 'bi-megaphone' },
    { key: 'reports', label: 'Relatórios', icon: 'bi-file-text' },
    { key: 'profile', label: 'Configurações', icon: 'bi-gear' }
  ];

  const userInfo = {
    name: veterinarianData.profile.name,
    photo: veterinarianData.profile.photo,
    role: 'Veterinário'
  };

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
              <button type="button" className="btn btn-outline-primary me-2">
                <i className="bi bi-camera-video me-2"></i>Iniciar Teleconsulta
              </button>
              <button type="button" className="btn btn-primary">
                <i className="bi bi-plus-circle me-2"></i>Nova Entrada
              </button>
              <button type="button" className="btn btn-outline-primary">
                <i className="bi bi-prescription2 me-2"></i>Criar Receita
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
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-calendar3 text-primary" style={{ fontSize: '2rem' }}></i>
              <h4 className="mt-2">{veterinarianData.stats.consultasAgendadas}</h4>
              <p className="text-muted mb-0">Consultas Hoje</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-exclamation-triangle text-warning" style={{ fontSize: '2rem' }}></i>
              <h4 className="mt-2">3</h4>
              <p className="text-muted mb-0">Estoque Baixo</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-cash-coin text-success" style={{ fontSize: '2rem' }}></i>
              <h4 className="mt-2">R$ 1.250</h4>
              <p className="text-muted mb-0">Receita Hoje</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-envelope text-primary" style={{ fontSize: '2rem' }}></i>
              <h4 className="mt-2">{veterinarianData.stats.novasMensagens}</h4>
              <p className="text-muted mb-0">Novas Mensagens</p>
            </div>
          </div>
        </div>
      </div>

      {/* Próximas Tarefas */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h6 className="mb-0">
                <i className="bi bi-list-task me-2"></i>
                Próximas Tarefas
              </h6>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                <div className="list-group-item d-flex justify-content-between align-items-center">
                  Aprovar retorno para o pet Rex
                  <span className="badge bg-warning">Pendente</span>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center">
                  Fazer pedido de vacina V8
                  <span className="badge bg-danger">Urgente</span>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center">
                  Ligar para fornecedor de seringas
                  <span className="badge bg-info">Hoje</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h6 className="mb-0">
                <i className="bi bi-clock me-2"></i>
                Próximas Consultas
              </h6>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="me-3">
                  <div className="text-primary fw-bold">14:00</div>
                </div>
                <div className="flex-grow-1">
                  <div className="fw-bold">Rex - Consulta de retorno</div>
                  <small className="text-muted">Tutor: Maria Silva</small>
                </div>
                <button className="btn btn-sm btn-outline-primary">
                  <i className="bi bi-camera-video"></i>
                </button>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <div className="text-primary fw-bold">15:30</div>
                </div>
                <div className="flex-grow-1">
                  <div className="fw-bold">Luna - Vacinação</div>
                  <small className="text-muted">Tutor: João Santos</small>
                </div>
                <button className="btn btn-sm btn-outline-primary">
                  <i className="bi bi-camera-video"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Patient List */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h6 className="mb-0">Pacientes Recentes</h6>
              <button 
                className="btn btn-sm btn-primary"
                onClick={() => setActiveSection('patients')}
              >
                Ver Todos
              </button>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Pet</th>
                      <th>Tutor</th>
                      <th>Última Visita</th>
                      <th>Status</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {veterinarianData.patients.slice(0, 3).map(patient => (
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
                            Ver
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

  const renderAgenda = () => (
    <div className="fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>
          <i className="bi bi-calendar3 me-2 text-primary"></i>
          Agenda & Consultas
        </h4>
        <button className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>Nova Consulta
        </button>
      </div>

      <div className="card mb-4">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h6 className="mb-0">Agenda Semanal</h6>
          <div className="btn-group">
            <button className="btn btn-outline-primary btn-sm">Dia</button>
            <button className="btn btn-primary btn-sm">Semana</button>
            <button className="btn btn-outline-primary btn-sm">Mês</button>
          </div>
        </div>
        <div className="card-body">
          <div className="calendar-placeholder bg-light rounded p-5 text-center">
            <i className="bi bi-calendar3 text-muted" style={{ fontSize: '4rem' }}></i>
            <p className="text-muted mt-3">Visualização completa da agenda</p>
            <small className="text-muted">Clique em uma consulta para ver detalhes e iniciar teleconsulta</small>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h6 className="mb-0">Consultas de Hoje</h6>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card border-primary">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h6 className="card-title">14:00 - Rex</h6>
                      <p className="card-text">
                        <strong>Tutor:</strong> Maria Silva<br />
                        <strong>Tipo:</strong> Consulta de retorno<br />
                        <strong>Status da Conexão:</strong> <span className="text-success">Online</span>
                      </p>
                    </div>
                    <span className="badge bg-primary">Hoje</span>
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <button className="btn btn-primary btn-sm">
                      <i className="bi bi-camera-video me-1"></i>Iniciar Teleconsulta
                    </button>
                    <button className="btn btn-outline-primary btn-sm">
                      <i className="bi bi-file-text me-1"></i>Prontuário
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h6 className="card-title">15:30 - Luna</h6>
                      <p className="card-text">
                        <strong>Tutor:</strong> João Santos<br />
                        <strong>Tipo:</strong> Vacinação<br />
                        <strong>Status da Conexão:</strong> <span className="text-warning">Aguardando</span>
                      </p>
                    </div>
                    <span className="badge bg-secondary">Agendado</span>
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <button className="btn btn-outline-primary btn-sm" disabled>
                      <i className="bi bi-camera-video me-1"></i>Teleconsulta
                    </button>
                    <button className="btn btn-outline-primary btn-sm">
                      <i className="bi bi-file-text me-1"></i>Prontuário
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPatients = () => (
    <div className="fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>
          <i className="bi bi-heart-pulse me-2 text-primary"></i>
          Gerenciar Pacientes
        </h4>
        <button className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>Novo Paciente
        </button>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <h6 className="mb-0">Lista de Pacientes</h6>
            </div>
            <div className="col-md-6">
              <div className="d-flex gap-2">
                <input type="text" className="form-control form-control-sm" placeholder="Buscar paciente..." />
                <select className="form-select form-select-sm">
                  <option>Todos</option>
                  <option>Saudáveis</option>
                  <option>Em Acompanhamento</option>
                  <option>Críticos</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Nome do Pet</th>
                  <th>Tutor</th>
                  <th>Espécie/Raça</th>
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
                    <td>{patient.species} - {patient.breed}</td>
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
                      <div className="btn-group btn-group-sm">
                        <button 
                          className="btn btn-outline-primary"
                          onClick={() => setSelectedPatient(patient)}
                        >
                          <i className="bi bi-file-text"></i>
                        </button>
                        <button className="btn btn-outline-success">
                          <i className="bi bi-camera-video"></i>
                        </button>
                        <button className="btn btn-outline-info">
                          <i className="bi bi-pencil"></i>
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
  );

  return (
    <div className="container-fluid vh-100 d-flex">
      <div className={`${isSidebarCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}>
        <AppSidebar 
          items={sidebarItems} 
          activeItem={activeSection}
          onItemClick={setActiveSection}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          userInfo={userInfo}
        />
      </div>
      
      <div className="flex-grow-1 main-content p-4">
        {activeSection === 'dashboard' && renderDashboard()}
        {activeSection === 'agenda' && renderAgenda()}
        {activeSection === 'patients' && renderPatients()}
        {activeSection === 'financeiro' && <FinanceiroModule />}
        {activeSection === 'estoque' && <EstoqueModule />}
        {activeSection === 'marketing' && <MarketingModule />}
        {['reports', 'profile'].includes(activeSection) && (
          <div className="text-center py-5">
            <i className="bi bi-gear text-muted" style={{ fontSize: '3rem' }}></i>
            <h4 className="mt-3 text-muted">Seção em Desenvolvimento</h4>
            <p className="text-muted">Esta funcionalidade será implementada em breve.</p>
          </div>
        )}
      </div>
      {renderPatientModal()}
    </div>
  );
};

export default VeterinarianDashboard;
