import React, { useState } from 'react';
import AppSidebar from './common/AppSidebar';
import CreateEventForm from './advertiser/CreateEventForm';
import EventManagement from './advertiser/EventManagement';
import PublicEventPage from './advertiser/PublicEventPage';
import { advertiserData } from '../data/mockData';

const AdvertiserDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [managingEvent, setManagingEvent] = useState(null);
  const [viewingPublicEvent, setViewingPublicEvent] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const sidebarItems = [
    { key: 'dashboard', label: 'Dashboard', icon: 'bi-speedometer2' },
    { key: 'events', label: 'Meus Eventos', icon: 'bi-calendar-event' },
    { key: 'create', label: 'Criar Evento', icon: 'bi-plus-circle' },
    { key: 'analytics', label: 'Análises', icon: 'bi-graph-up' },
    { key: 'financial', label: 'Financeiro', icon: 'bi-credit-card' },
    { key: 'sponsors', label: 'Patrocinadores', icon: 'bi-award' }
  ];

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

  const renderDashboard = () => (
    <div className="fade-in">
      {/* KPIs Row */}
      <div className="row mb-4">
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-calendar-event text-primary" style={{ fontSize: '2.5rem' }}></i>
              <h3 className="mt-2">12</h3>
              <p className="text-muted mb-0">Eventos Ativos</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-people text-success" style={{ fontSize: '2.5rem' }}></i>
              <h3 className="mt-2">1.847</h3>
              <p className="text-muted mb-0">Total de Inscritos</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-heart text-danger" style={{ fontSize: '2.5rem' }}></i>
              <h3 className="mt-2">R$ 12.450</h3>
              <p className="text-muted mb-0">Doações Arrecadadas</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-eye text-warning" style={{ fontSize: '2.5rem' }}></i>
              <h3 className="mt-2">15.234</h3>
              <p className="text-muted mb-0">Visualizações</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Events */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Eventos Recentes</h5>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setShowCreateForm(true);
                  setActiveSection('create');
                }}
              >
                <i className="bi bi-plus-circle me-2"></i>Criar Novo Evento
              </button>
            </div>
            <div className="card-body">
              <div className="row">
                {advertiserData.events.slice(0, 3).map(event => (
                  <div key={event.id} className="col-md-4 mb-3">
                    <div className="card">
                      <div className="card-body">
                        <h6 className="card-title">{event.title}</h6>
                        <p className="card-text text-muted small">
                          <i className="bi bi-calendar me-1"></i>{event.date}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className={`badge ${event.status === 'Publicado' ? 'bg-success' : 'bg-warning'}`}>
                            {event.status}
                          </span>
                          <div className="btn-group btn-group-sm">
                            <button 
                              className="btn btn-outline-primary"
                              onClick={() => {
                                setManagingEvent(event);
                                setActiveSection('manage');
                              }}
                            >
                              <i className="bi bi-gear"></i>
                            </button>
                            <button 
                              className="btn btn-outline-info"
                              onClick={() => {
                                setViewingPublicEvent(event);
                                setActiveSection('public');
                              }}
                            >
                              <i className="bi bi-eye"></i>
                            </button>
                          </div>
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
    </div>
  );

  const renderEventsList = () => (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Meus Eventos</h5>
        <button 
          className="btn btn-primary"
          onClick={() => {
            setShowCreateForm(true);
            setActiveSection('create');
          }}
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
                <th>Inscritos</th>
                <th>Doações</th>
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
                      event.status === 'Publicado' ? 'bg-success' : 'bg-warning'
                    }`}>
                      {event.status}
                    </span>
                  </td>
                  <td>{event.registrations}</td>
                  <td>R$ {(event.registrations * 15).toLocaleString('pt-BR')}</td>
                  <td>
                    <div className="btn-group btn-group-sm">
                      <button 
                        className="btn btn-outline-primary"
                        onClick={() => {
                          setManagingEvent(event);
                          setActiveSection('manage');
                        }}
                        title="Gerenciar"
                      >
                        <i className="bi bi-gear"></i>
                      </button>
                      <button 
                        className="btn btn-outline-info"
                        onClick={() => {
                          setViewingPublicEvent(event);
                          setActiveSection('public');
                        }}
                        title="Ver página pública"
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                      <button 
                        className="btn btn-outline-success"
                        onClick={() => {
                          setSelectedEvent(event);
                          setActiveSection('analytics');
                        }}
                        title="Ver análises"
                      >
                        <i className="bi bi-graph-up"></i>
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
  );

  const renderMainContent = () => {
    if (showCreateForm || activeSection === 'create') {
      return (
        <CreateEventForm 
          onCancel={() => {
            setShowCreateForm(false);
            setActiveSection('dashboard');
          }}
          onSave={(eventData) => {
            console.log('Saving event:', eventData);
            setShowCreateForm(false);
            setActiveSection('events');
          }}
        />
      );
    }

    if (managingEvent && activeSection === 'manage') {
      return (
        <EventManagement 
          event={managingEvent}
          onBack={() => {
            setManagingEvent(null);
            setActiveSection('events');
          }}
        />
      );
    }

    if (viewingPublicEvent && activeSection === 'public') {
      return (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4>
              <button 
                className="btn btn-outline-secondary me-3"
                onClick={() => {
                  setViewingPublicEvent(null);
                  setActiveSection('events');
                }}
              >
                <i className="bi bi-arrow-left"></i>
              </button>
              Página Pública - {viewingPublicEvent.title}
            </h4>
            <button className="btn btn-outline-primary">
              <i className="bi bi-box-arrow-up-right me-2"></i>Abrir em Nova Aba
            </button>
          </div>
          <PublicEventPage event={viewingPublicEvent} />
        </div>
      );
    }

    switch (activeSection) {
      case 'dashboard':
        return renderDashboard();
      case 'events':
        return renderEventsList();
      case 'analytics':
        return selectedEvent ? renderEventAnalytics() : (
          <div className="text-center py-5">
            <i className="bi bi-graph-up text-muted" style={{ fontSize: '3rem' }}></i>
            <h4 className="mt-3 text-muted">Selecione um Evento</h4>
            <p className="text-muted">Escolha um evento na lista para ver as análises detalhadas.</p>
          </div>
        );
      default:
        return (
          <div className="text-center py-5">
            <i className="bi bi-gear text-muted" style={{ fontSize: '3rem' }}></i>
            <h4 className="mt-3 text-muted">Seção em Desenvolvimento</h4>
            <p className="text-muted">Esta funcionalidade será implementada em breve.</p>
          </div>
        );
    }
  };

  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <AppSidebar
        items={sidebarItems}
        activeItem={activeSection}
        onItemClick={(section) => {
          setActiveSection(section);
          if (section === 'create') {
            setShowCreateForm(true);
          } else {
            setShowCreateForm(false);
            setManagingEvent(null);
            setViewingPublicEvent(null);
            setSelectedEvent(null);
          }
        }}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        userInfo={{
          name: advertiserData.profile.name,
          role: 'Event Producer',
          photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
        }}
      />
      
      <div className={`main-content flex-grow-1 ${sidebarCollapsed ? 'ps-2' : 'ps-3'}`}>
        {!managingEvent && !viewingPublicEvent && !showCreateForm && (
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>
              <i className="bi bi-megaphone me-2 text-primary"></i>
              Olá, {advertiserData.profile.name}!
            </h2>
          </div>
        )}
        {renderMainContent()}
      </div>
    </div>
  );
};

export default AdvertiserDashboard;
