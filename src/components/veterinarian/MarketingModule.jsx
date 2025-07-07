
import React, { useState } from 'react';

const MarketingModule = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPreview, setShowPreview] = useState(false);

  const renderProfileEditor = () => (
    <div className="row">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            <h6 className="mb-0">Editor de Perfil Público</h6>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Nome Profissional</label>
                  <input type="text" className="form-control" defaultValue="Dr. João Silva" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">CRMV</label>
                  <input type="text" className="form-control" defaultValue="CRMV-BA 1234" />
                </div>
              </div>
              
              <div className="mb-3">
                <label className="form-label">Foto de Perfil</label>
                <input type="file" className="form-control" accept="image/*" />
                <small className="text-muted">Recomendado: 400x400px, formato JPG ou PNG</small>
              </div>

              <div className="mb-3">
                <label className="form-label">Bio Profissional</label>
                <textarea 
                  className="form-control" 
                  rows="4" 
                  defaultValue="Veterinário com mais de 10 anos de experiência em clínica geral e cirurgia. Especialista em cães e gatos, atendimento humanizado e cuidado integral dos pets."
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">Especialidades</label>
                <input 
                  type="text" 
                  className="form-control" 
                  defaultValue="Clínica Geral, Cirurgia, Dermatologia Veterinária"
                  placeholder="Separe por vírgulas"
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Endereço da Clínica</label>
                  <textarea 
                    className="form-control" 
                    rows="2"
                    defaultValue="Rua das Flores, 123 - Centro, Feira de Santana - BA"
                  ></textarea>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">WhatsApp para Contato</label>
                  <input type="tel" className="form-control" defaultValue="(75) 99999-9999" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Horário de Funcionamento</label>
                  <textarea 
                    className="form-control" 
                    rows="2"
                    defaultValue="Segunda a Sexta: 8h às 18h&#10;Sábado: 8h às 12h"
                  ></textarea>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Valor Consulta</label>
                  <input type="number" className="form-control" defaultValue="50" step="0.01" />
                  <small className="text-muted">Valor base para consulta geral</small>
                </div>
              </div>

              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary">
                  <i className="bi bi-check-circle me-2"></i>Salvar Alterações
                </button>
                <button 
                  type="button" 
                  className="btn btn-outline-info"
                  onClick={() => setShowPreview(!showPreview)}
                >
                  <i className="bi bi-eye me-2"></i>
                  {showPreview ? 'Ocultar' : 'Visualizar'} Prévia
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showPreview && (
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h6 className="mb-0">Prévia do Perfil</h6>
            </div>
            <div className="card-body">
              <div className="text-center mb-3">
                <img 
                  src="https://via.placeholder.com/100x100" 
                  alt="Dr. João Silva"
                  className="rounded-circle mb-2"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <h6>Dr. João Silva</h6>
                <small className="text-muted">CRMV-BA 1234</small>
              </div>
              
              <p className="small">
                Veterinário com mais de 10 anos de experiência em clínica geral e cirurgia...
              </p>
              
              <div className="mb-2">
                <strong className="small">Especialidades:</strong>
                <br />
                <small className="text-muted">Clínica Geral, Cirurgia, Dermatologia</small>
              </div>
              
              <div className="mb-2">
                <strong className="small">Consulta:</strong>
                <br />
                <span className="text-primary">R$ 50,00</span>
              </div>
              
              <button className="btn btn-success btn-sm w-100 mb-2">
                <i className="bi bi-whatsapp me-1"></i>WhatsApp
              </button>
              
              <button className="btn btn-primary btn-sm w-100">
                <i className="bi bi-calendar me-1"></i>Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderAnnouncements = () => (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="mb-0">Anúncios na Plataforma</h6>
        <button className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>Novo Anúncio
        </button>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h6 className="mb-0">Criar Novo Anúncio</h6>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Título do Anúncio</label>
              <input type="text" className="form-control" placeholder="Ex: Campanha de Vacinação Dezembro 2024" />
            </div>
            
            <div className="mb-3">
              <label className="form-label">Descrição</label>
              <textarea 
                className="form-control" 
                rows="3"
                placeholder="Descreva sua promoção ou campanha..."
              ></textarea>
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">Tipo de Anúncio</label>
                <select className="form-select">
                  <option>Promoção</option>
                  <option>Campanha de Saúde</option>
                  <option>Novo Serviço</option>
                  <option>Informativo</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Data de Início</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Data de Fim</label>
                <input type="date" className="form-control" />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              <i className="bi bi-megaphone me-2"></i>Publicar Anúncio
            </button>
          </form>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h6 className="mb-0">Anúncios Ativos</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Tipo</th>
                  <th>Período</th>
                  <th>Visualizações</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Campanha Antirrábica</strong></td>
                  <td><span className="badge bg-info">Campanha</span></td>
                  <td>01/12 - 31/12</td>
                  <td>234</td>
                  <td><span className="badge bg-success">Ativo</span></td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-1">
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      <i className="bi bi-pause"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReviews = () => (
    <div className="card">
      <div className="card-header">
        <h6 className="mb-0">Avaliações de Clientes</h6>
      </div>
      <div className="card-body">
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="text-center">
              <h2 className="text-primary">4.8</h2>
              <div className="text-warning mb-2">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <small className="text-muted">Baseado em 24 avaliações</small>
            </div>
          </div>
          <div className="col-md-9">
            <div className="mb-2">
              <div className="d-flex justify-content-between">
                <span>5 estrelas</span>
                <span>20</span>
              </div>
              <div className="progress" style={{ height: '8px' }}>
                <div className="progress-bar" style={{ width: '83%' }}></div>
              </div>
            </div>
            <div className="mb-2">
              <div className="d-flex justify-content-between">
                <span>4 estrelas</span>
                <span>3</span>
              </div>
              <div className="progress" style={{ height: '8px' }}>
                <div className="progress-bar" style={{ width: '12%' }}></div>
              </div>
            </div>
            <div className="mb-2">
              <div className="d-flex justify-content-between">
                <span>3 estrelas</span>
                <span>1</span>
              </div>
              <div className="progress" style={{ height: '8px' }}>
                <div className="progress-bar" style={{ width: '4%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="reviews-list">
          <div className="review-item mb-3">
            <div className="d-flex justify-content-between">
              <strong>Maria Silva</strong>
              <div className="text-warning">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
            <small className="text-muted">Há 2 dias</small>
            <p className="mt-2 mb-0">Excelente atendimento! Dr. João foi muito atencioso com minha gatinha Luna. Recomendo!</p>
          </div>

          <div className="review-item mb-3">
            <div className="d-flex justify-content-between">
              <strong>Carlos Santos</strong>
              <div className="text-warning">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
            <small className="text-muted">Há 1 semana</small>
            <p className="mt-2 mb-0">Profissional competente e clínica bem equipada. Meu cão se recuperou rapidamente da cirurgia.</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>
          <i className="bi bi-megaphone me-2 text-primary"></i>
          Marketing & Perfil Público
        </h4>
      </div>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveTab('profile'); }}
          >
            <i className="bi bi-person-badge me-2"></i>Perfil Público
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'announcements' ? 'active' : ''}`}
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveTab('announcements'); }}
          >
            <i className="bi bi-megaphone me-2"></i>Anúncios
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveTab('reviews'); }}
          >
            <i className="bi bi-star me-2"></i>Avaliações
          </a>
        </li>
      </ul>

      {activeTab === 'profile' && renderProfileEditor()}
      {activeTab === 'announcements' && renderAnnouncements()}
      {activeTab === 'reviews' && renderReviews()}
    </div>
  );
};

export default MarketingModule;
