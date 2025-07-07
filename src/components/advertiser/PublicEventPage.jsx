
import React, { useState } from 'react';

const PublicEventPage = ({ event }) => {
  const [donationAmount, setDonationAmount] = useState('');
  
  const eventData = {
    title: 'Pet Show Feira de Santana 2024',
    date: '15 de Dezembro de 2024',
    time: '14:00',
    description: 'O maior evento pet da região! Venha com seu melhor amigo para um dia cheio de diversão, competições, palestras educativas e muito mais. Evento em prol da Associação Protetora dos Animais de Feira.',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=400&fit=crop',
    address: 'Centro de Convenções de Feira de Santana - Av. Maria Quitéria, 1234',
    registrationType: 'donation',
    ticketPrice: '15.00',
    charityPartner: 'Associação Protetora dos Animais de Feira',
    raised: 2847.50,
    goal: 5000.00,
    sponsors: [
      { name: 'Pet Shop Amigo Fiel', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop', website: '#' },
      { name: 'Clínica Veterinária Vida Animal', logo: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=150&h=80&fit=crop', website: '#' },
      { name: 'Ração Premium Pet', logo: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=150&h=80&fit=crop', website: '#' }
    ]
  };

  const progressPercentage = (eventData.raised / eventData.goal) * 100;

  const handleRegistration = () => {
    console.log('Registration clicked');
    // Implement registration logic
  };

  const handleDonation = () => {
    console.log('Donation amount:', donationAmount);
    // Implement donation logic
  };

  return (
    <div className="container py-4">
      {/* Event Header */}
      <div className="row mb-5">
        <div className="col-lg-8">
          <img 
            src={eventData.image} 
            alt={eventData.title}
            className="img-fluid rounded shadow-sm mb-4"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />
          
          <h1 className="display-5 fw-bold text-primary mb-3">{eventData.title}</h1>
          
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-calendar-event text-primary me-2" style={{ fontSize: '1.2rem' }}></i>
                <span className="fw-bold">{eventData.date}</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-clock text-primary me-2" style={{ fontSize: '1.2rem' }}></i>
                <span>{eventData.time}</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-start">
                <i className="bi bi-geo-alt text-primary me-2 mt-1" style={{ fontSize: '1.2rem' }}></i>
                <span>{eventData.address}</span>
              </div>
            </div>
          </div>

          <p className="lead mb-4">{eventData.description}</p>

          {/* Interactive Map Placeholder */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">
                <i className="bi bi-map me-2"></i>Localização
              </h5>
            </div>
            <div className="card-body p-0">
              <div 
                className="bg-light d-flex align-items-center justify-content-center text-muted"
                style={{ height: '300px' }}
              >
                <div className="text-center">
                  <i className="bi bi-geo-alt" style={{ fontSize: '3rem' }}></i>
                  <p className="mt-2 mb-0">Mapa Interativo</p>
                  <small>Centro de Convenções de Feira de Santana</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration and Donation Sidebar */}
        <div className="col-lg-4">
          <div className="sticky-top" style={{ top: '20px' }}>
            {/* Registration Card */}
            <div className="card shadow-sm mb-4">
              <div className="card-body text-center">
                <h5 className="card-title text-primary mb-3">
                  <i className="bi bi-ticket-perforated me-2"></i>Inscrição
                </h5>
                <div className="mb-3">
                  <span className="h4 text-success">R$ {eventData.ticketPrice}</span>
                  <br />
                  <small className="text-muted">Ingresso com Doação</small>
                </div>
                <button 
                  className="btn btn-primary btn-lg w-100 mb-3"
                  onClick={handleRegistration}
                >
                  <i className="bi bi-person-plus me-2"></i>Quero Participar
                </button>
                <small className="text-muted d-block">
                  <i className="bi bi-shield-check me-1"></i>
                  Inscrição segura e gratuita
                </small>
              </div>
            </div>

            {/* Donation Module */}
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-success text-white text-center">
                <h6 className="mb-0">
                  <i className="bi bi-heart-fill me-2"></i>Apoie Nossa Causa
                </h6>
              </div>
              <div className="card-body">
                <div className="text-center mb-3">
                  <h6 className="text-muted">{eventData.charityPartner}</h6>
                </div>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fw-bold text-success">R$ {eventData.raised.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    <span className="text-muted">R$ {eventData.goal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="progress mb-2" style={{ height: '12px' }}>
                    <div 
                      className="progress-bar bg-success" 
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <small className="text-muted">
                    {Math.round(progressPercentage)}% da meta alcançada
                  </small>
                </div>

                <div className="mb-3">
                  <label className="form-label">Valor da Doação</label>
                  <div className="input-group">
                    <span className="input-group-text">R$</span>
                    <input 
                      type="number" 
                      className="form-control"
                      step="0.01"
                      min="1.00"
                      placeholder="10,00"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                    />
                  </div>
                </div>

                <div className="d-grid gap-2 mb-3">
                  <button 
                    className="btn btn-outline-success"
                    onClick={() => setDonationAmount('10.00')}
                  >
                    R$ 10
                  </button>
                  <div className="row">
                    <div className="col-4">
                      <button 
                        className="btn btn-outline-success btn-sm w-100"
                        onClick={() => setDonationAmount('25.00')}
                      >
                        R$ 25
                      </button>
                    </div>
                    <div className="col-4">
                      <button 
                        className="btn btn-outline-success btn-sm w-100"
                        onClick={() => setDonationAmount('50.00')}
                      >
                        R$ 50
                      </button>
                    </div>
                    <div className="col-4">
                      <button 
                        className="btn btn-outline-success btn-sm w-100"
                        onClick={() => setDonationAmount('100.00')}
                      >
                        R$ 100
                      </button>
                    </div>
                  </div>
                </div>

                <button 
                  className="btn btn-success w-100"
                  onClick={handleDonation}
                  disabled={!donationAmount || parseFloat(donationAmount) < 1}
                >
                  <i className="bi bi-heart-fill me-2"></i>Contribuir Agora
                </button>
              </div>
            </div>

            {/* Event Stats */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h6 className="card-title mb-3">
                  <i className="bi bi-graph-up me-2"></i>Estatísticas do Evento
                </h6>
                <div className="row text-center">
                  <div className="col-6 mb-2">
                    <div className="border-end">
                      <h5 className="text-primary mb-0">127</h5>
                      <small className="text-muted">Inscritos</small>
                    </div>
                  </div>
                  <div className="col-6 mb-2">
                    <h5 className="text-success mb-0">43</h5>
                    <small className="text-muted">Doadores</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      {eventData.sponsors && eventData.sponsors.length > 0 && (
        <div className="row mb-5">
          <div className="col-12">
            <div className="card">
              <div className="card-header text-center">
                <h4 className="mb-0 text-primary">
                  <i className="bi bi-award me-2"></i>Nossos Patrocinadores
                </h4>
                <p className="text-muted mb-0">Empresas que apoiam nossa causa</p>
              </div>
              <div className="card-body">
                <div className="row justify-content-center align-items-center">
                  {eventData.sponsors.map((sponsor, index) => (
                    <div key={index} className="col-md-4 text-center mb-4">
                      <a 
                        href={sponsor.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        <img 
                          src={sponsor.logo} 
                          alt={sponsor.name}
                          className="img-fluid rounded shadow-sm mb-2"
                          style={{ maxHeight: '80px', objectFit: 'contain' }}
                        />
                        <p className="fw-bold text-dark mb-0">{sponsor.name}</p>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Share Section */}
      <div className="row">
        <div className="col-12">
          <div className="card bg-light">
            <div className="card-body text-center">
              <h5 className="mb-3">
                <i className="bi bi-share me-2"></i>Compartilhe este Evento
              </h5>
              <div className="btn-group">
                <button className="btn btn-outline-primary">
                  <i className="bi bi-facebook me-1"></i>Facebook
                </button>
                <button className="btn btn-outline-info">
                  <i className="bi bi-twitter me-1"></i>Twitter
                </button>
                <button className="btn btn-outline-success">
                  <i className="bi bi-whatsapp me-1"></i>WhatsApp
                </button>
                <button className="btn btn-outline-secondary">
                  <i className="bi bi-link me-1"></i>Copiar Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicEventPage;
