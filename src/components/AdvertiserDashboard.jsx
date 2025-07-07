
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { advertiserData } from '../data/mockData';

const AdvertiserDashboard = () => {
  const [activeSection, setActiveSection] = useState('events');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const sidebarItems = [
    { key: 'events', label: 'Meus Eventos', icon: 'bi-calendar-event' },
    { key: 'create', label: 'Criar Novo', icon: 'bi-plus-circle' },
    { key: 'analytics', label: 'Análises', icon: 'bi-graph-up' }
  ];

  const renderCreateEventForm = () => (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0">Criar Novo Evento</h5>
      </div>
      <div className="card-body">
        <form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Título do Evento</label>
              <input type="text" className="form-control" placeholder="Ex: Pet Show 2024" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Data do Evento</label>
              <input type="date" className="form-control" />
            </div>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Descrição</label>
            <textarea className="form-control" rows="4" placeholder="Descreva seu evento..."></textarea>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Localização</label>
              <input type="text" className="form-control" placeholder="Endereço do evento" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Capacidade</label>
              <input type="number" className="form-control" placeholder="Número de participantes" />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Categoria</label>
            <select className="form-select">
              <option>Selecione uma categoria</option>
              <option>Adoção</option>
              <option>Treinamento</option>
              <option>Saúde</option>
              <option>Recreação</option>
            </select>
          </div>

          <div className="d-flex gap-2">
            <button type="button" className="btn btn-outline-secondary" onClick={() => setShowCreateForm(false)}>
              Cancelar
            </button>
            <button type="button" className="btn btn-outline-primary">
              Salvar como Rascunho
            </button>
            <button type="submit" className="btn btn-primary">
              Publicar Evento
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const renderEventAnalytics = () => {
    if (!selectedEvent) return null;

    return (
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Análises - {selectedEvent.title}</h5>
            </div>
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-md-6">
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <h3 className="text-primary">{selectedEvent.views}</h3>
                      <p className="mb-0">Visualizações</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <h3 className="text-success">{selectedEvent.registrations}</h3>
                      <p className="mb-0">Inscrições</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="chart-placeholder bg-light rounded p-4 text-center">
                <i className="bi bi-bar-chart text-muted" style={{ fontSize: '3rem' }}></i>
                <p className="text-muted mt-2">Gráfico de Engajamento</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h6 className="mb-0">Ferramentas de Compartilhamento</h6>
            </div>
            <div className="card-body">
              <div className="d-grid gap-2">
                <button className="btn btn-outline-primary">
                  <i className="bi bi-link me-2"></i>Copiar Link
                </button>
                <button className="btn btn-outline-primary">
                  <i className="bi bi-qr-code me-2"></i>Baixar QR Code
                </button>
                <button className="btn btn-outline-primary">
                  <i className="bi bi-share me-2"></i>Compartilhar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderEventsList = () => (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Meus Eventos</h5>
        <button 
          className="btn btn-primary"
          onClick={() => setShowCreateForm(true)}
        >
          <i className="bi bi-plus-circle me-2"></i>Criar Novo Evento
        </button>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Data</th>
                <th>Status</th>
                <th>Visualizações</th>
                <th>Inscrições</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {advertiserData.events.map(event => (
                <tr key={event.id}>
                  <td><strong>{event.title}</strong></td>
                  <td>{event.date}</td>
                  <td>
                    <span className={`badge ${
                      event.status === 'Publicado' ? 'bg-success' : 'badge-warning'
                    }`}>
                      {event.status}
                    </span>
                  </td>
                  <td>{event.views.toLocaleString()}</td>
                  <td>{event.registrations}</td>
                  <td>
                    <div className="dropdown">
                      <button className="btn btn-sm btn-outline-primary dropdown-toggle" 
                              data-bs-toggle="dropdown">
                        Ações
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-pencil me-2"></i>Editar
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-people me-2"></i>Ver Inscrições
                          </a>
                        </li>
                        <li>
                          <a 
                            className="dropdown-item" 
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedEvent(event);
                              setActiveSection('analytics');
                            }}
                          >
                            <i className="bi bi-graph-up me-2"></i>Ver Análises
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
            onItemClick={(section) => {
              setActiveSection(section);
              if (section === 'create') {
                setShowCreateForm(true);
                setActiveSection('events');
              }
              if (section === 'events') {
                setShowCreateForm(false);
                setSelectedEvent(null);
              }
            }}
          />
        </div>
        <div className="col-md-9 col-lg-10 main-content p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>
              <i className="bi bi-megaphone me-2 text-primary"></i>
              Olá, {advertiserData.profile.name}!
            </h2>
          </div>

          {showCreateForm && renderCreateEventForm()}
          {!showCreateForm && activeSection === 'events' && renderEventsList()}
          {activeSection === 'analytics' && renderEventAnalytics()}
        </div>
      </div>
    </div>
  );
};

export default AdvertiserDashboard;
