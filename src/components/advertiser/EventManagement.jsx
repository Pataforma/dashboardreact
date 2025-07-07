
import React, { useState } from 'react';

const EventManagement = ({ event, onBack }) => {
  const [activeTab, setActiveTab] = useState('checkin');

  const attendees = [
    { id: 1, name: 'Maria Silva Santos', email: 'maria@email.com', phone: '(75) 99999-1234', checkedIn: true, checkinTime: '14:30' },
    { id: 2, name: 'João Pedro Oliveira', email: 'joao@email.com', phone: '(75) 99999-5678', checkedIn: false, checkinTime: null },
    { id: 3, name: 'Ana Carolina Lima', email: 'ana@email.com', phone: '(75) 99999-9999', checkedIn: true, checkinTime: '14:45' },
    { id: 4, name: 'Carlos Eduardo Santos', email: 'carlos@email.com', phone: '(75) 99999-3333', checkedIn: false, checkinTime: null }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [qrScanner, setQrScanner] = useState(false);

  const filteredAttendees = attendees.filter(attendee => 
    attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attendee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const checkedInCount = attendees.filter(a => a.checkedIn).length;
  const totalAttendees = attendees.length;

  const handleCheckIn = (attendeeId) => {
    console.log('Check-in attendee:', attendeeId);
    // Implement check-in logic
  };

  const renderCheckInTool = () => (
    <div className="row">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            <h6 className="mb-0">
              <i className="bi bi-qr-code-scan me-2"></i>Check-in Tool
            </h6>
          </div>
          <div className="card-body">
            {!qrScanner ? (
              <div className="text-center py-4">
                <i className="bi bi-qr-code" style={{ fontSize: '4rem', color: '#6c757d' }}></i>
                <h5 className="mt-3">Scanner QR Code</h5>
                <p className="text-muted mb-3">
                  Escaneie o QR Code do ingresso do participante para fazer o check-in
                </p>
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={() => setQrScanner(true)}
                >
                  <i className="bi bi-camera me-2"></i>Ativar Scanner
                </button>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="border rounded p-4 bg-light">
                  <i className="bi bi-camera-video" style={{ fontSize: '3rem', color: '#28a745' }}></i>
                  <p className="mt-2 mb-3">Scanner ativo - Aponte para o QR Code</p>
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => setQrScanner(false)}
                  >
                    Fechar Scanner
                  </button>
                </div>
                <div className="mt-3">
                  <small className="text-muted">
                    Modo simulação - Em produção, a câmera seria ativada aqui
                  </small>
                </div>
              </div>
            )}

            {/* Manual Check-in */}
            <div className="mt-4 pt-4 border-top">
              <h6>Check-in Manual</h6>
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Digite o nome ou email do participante"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-outline-primary">
                  <i className="bi bi-search"></i>
                </button>
              </div>
              
              {searchTerm && (
                <div className="mt-2">
                  {filteredAttendees.slice(0, 3).map(attendee => (
                    <div key={attendee.id} className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <div>
                        <strong>{attendee.name}</strong>
                        <br />
                        <small className="text-muted">{attendee.email}</small>
                      </div>
                      <button 
                        className={`btn btn-sm ${attendee.checkedIn ? 'btn-success' : 'btn-outline-primary'}`}
                        onClick={() => handleCheckIn(attendee.id)}
                        disabled={attendee.checkedIn}
                      >
                        {attendee.checkedIn ? (
                          <>
                            <i className="bi bi-check-circle me-1"></i>Check-in OK
                          </>
                        ) : (
                          <>
                            <i className="bi bi-person-check me-1"></i>Fazer Check-in
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <h6 className="mb-0">Estatísticas em Tempo Real</h6>
          </div>
          <div className="card-body">
            <div className="text-center mb-4">
              <div className="progress mb-2" style={{ height: '25px' }}>
                <div 
                  className="progress-bar bg-success" 
                  style={{ width: `${(checkedInCount / totalAttendees) * 100}%` }}
                >
                  {Math.round((checkedInCount / totalAttendees) * 100)}%
                </div>
              </div>
              <h4 className="text-success">{checkedInCount} / {totalAttendees}</h4>
              <p className="text-muted mb-0">Participantes Presentes</p>
            </div>
            
            <div className="row text-center">
              <div className="col-6">
                <div className="border-end">
                  <h5 className="text-primary">{totalAttendees - checkedInCount}</h5>
                  <small className="text-muted">Aguardando</small>
                </div>
              </div>
              <div className="col-6">
                <h5 className="text-success">{checkedInCount}</h5>
                <small className="text-muted">Confirmados</small>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-header">
            <h6 className="mb-0">Últimos Check-ins</h6>
          </div>
          <div className="card-body">
            {attendees.filter(a => a.checkedIn).slice(-3).map(attendee => (
              <div key={attendee.id} className="d-flex align-items-center mb-2">
                <div className="bg-success rounded-circle me-2" style={{ width: '8px', height: '8px' }}></div>
                <div className="flex-grow-1">
                  <small className="fw-bold">{attendee.name}</small>
                  <br />
                  <small className="text-muted">{attendee.checkinTime}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderGuestList = () => (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h6 className="mb-0">
          <i className="bi bi-people me-2"></i>Lista de Participantes
        </h6>
        <div className="d-flex gap-2">
          <input 
            type="text" 
            className="form-control form-control-sm" 
            placeholder="Buscar participante..."
            style={{ width: '250px' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-outline-primary btn-sm">
            <i className="bi bi-download me-1"></i>Exportar
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Status</th>
                <th>Check-in</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredAttendees.map(attendee => (
                <tr key={attendee.id}>
                  <td><strong>{attendee.name}</strong></td>
                  <td>{attendee.email}</td>
                  <td>{attendee.phone}</td>
                  <td>
                    {attendee.checkedIn ? (
                      <span className="badge bg-success">
                        <i className="bi bi-check-circle me-1"></i>Presente
                      </span>
                    ) : (
                      <span className="badge bg-warning">
                        <i className="bi bi-clock me-1"></i>Aguardando
                      </span>
                    )}
                  </td>
                  <td>
                    {attendee.checkedIn ? (
                      <small className="text-muted">{attendee.checkinTime}</small>
                    ) : (
                      <small className="text-muted">-</small>
                    )}
                  </td>
                  <td>
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-primary" title="Enviar mensagem">
                        <i className="bi bi-envelope"></i>
                      </button>
                      <button className="btn btn-outline-info" title="Ver detalhes">
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
  );

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4>
            <button 
              className="btn btn-outline-secondary me-3"
              onClick={onBack}
            >
              <i className="bi bi-arrow-left"></i>
            </button>
            Gerenciar: {event.title}
          </h4>
          <p className="text-muted mb-0">
            <i className="bi bi-calendar me-1"></i>{event.date} • 
            <i className="bi bi-people ms-2 me-1"></i>{totalAttendees} inscritos
          </p>
        </div>
        <div className="btn-group">
          <button className="btn btn-outline-primary">
            <i className="bi bi-share me-1"></i>Compartilhar
          </button>
          <button className="btn btn-outline-success">
            <i className="bi bi-pencil me-1"></i>Editar Evento
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'checkin' ? 'active' : ''}`}
            onClick={() => setActiveTab('checkin')}
          >
            <i className="bi bi-qr-code-scan me-2"></i>Check-in
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'guests' ? 'active' : ''}`}
            onClick={() => setActiveTab('guests')}
          >
            <i className="bi bi-people me-2"></i>Lista de Convidados
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      {activeTab === 'checkin' && renderCheckInTool()}
      {activeTab === 'guests' && renderGuestList()}
    </div>
  );
};

export default EventManagement;
