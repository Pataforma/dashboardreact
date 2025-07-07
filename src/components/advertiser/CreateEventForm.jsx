
import React, { useState } from 'react';

const CreateEventForm = ({ onCancel, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    mainImage: null,
    modality: 'presencial',
    address: '',
    lat: null,
    lng: null,
    registrationType: 'free',
    ticketPrice: '',
    charityPartner: '',
    sponsors: [{ logo: null, website: '', name: '' }]
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addSponsor = () => {
    setFormData(prev => ({
      ...prev,
      sponsors: [...prev.sponsors, { logo: null, website: '', name: '' }]
    }));
  };

  const updateSponsor = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      sponsors: prev.sponsors.map((sponsor, i) => 
        i === index ? { ...sponsor, [field]: value } : sponsor
      )
    }));
  };

  const removeSponsor = (index) => {
    setFormData(prev => ({
      ...prev,
      sponsors: prev.sponsors.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event data:', formData);
    onSave(formData);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0">Criar Novo Evento</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {/* Event Details Section */}
          <div className="row mb-4">
            <div className="col-12">
              <h6 className="text-primary mb-3">
                <i className="bi bi-info-circle me-2"></i>Detalhes do Evento
              </h6>
            </div>
            <div className="col-md-8 mb-3">
              <label className="form-label">Título do Evento *</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Ex: Pet Show Feira de Santana 2024"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Imagem Principal</label>
              <input 
                type="file" 
                className="form-control" 
                accept="image/*"
                onChange={(e) => handleInputChange('mainImage', e.target.files[0])}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Data do Evento *</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Horário *</label>
              <input 
                type="time" 
                className="form-control"
                value={formData.time}
                onChange={(e) => handleInputChange('time', e.target.value)}
                required
              />
            </div>
            <div className="col-12 mb-3">
              <label className="form-label">Descrição *</label>
              <textarea 
                className="form-control" 
                rows="4" 
                placeholder="Descreva seu evento em detalhes..."
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                required
              ></textarea>
            </div>
          </div>

          {/* Modality Section */}
          <div className="row mb-4">
            <div className="col-12">
              <h6 className="text-primary mb-3">
                <i className="bi bi-geo-alt me-2"></i>Modalidade do Evento
              </h6>
            </div>
            <div className="col-12 mb-3">
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="modality" 
                  id="presencial"
                  value="presencial"
                  checked={formData.modality === 'presencial'}
                  onChange={(e) => handleInputChange('modality', e.target.value)}
                />
                <label className="form-check-label" htmlFor="presencial">
                  <i className="bi bi-building me-1"></i>Presencial
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="modality" 
                  id="online"
                  value="online"
                  checked={formData.modality === 'online'}
                  onChange={(e) => handleInputChange('modality', e.target.value)}
                />
                <label className="form-check-label" htmlFor="online">
                  <i className="bi bi-camera-video me-1"></i>Online
                </label>
              </div>
            </div>
            {formData.modality === 'presencial' && (
              <div className="col-12 mb-3">
                <label className="form-label">Endereço do Local *</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Rua, número, bairro, cidade"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  required
                />
                <small className="form-text text-muted">
                  <i className="bi bi-map me-1"></i>
                  O mapa interativo será exibido após salvar o endereço
                </small>
              </div>
            )}
          </div>

          {/* Registration Section */}
          <div className="row mb-4">
            <div className="col-12">
              <h6 className="text-primary mb-3">
                <i className="bi bi-ticket me-2"></i>Tipo de Inscrição
              </h6>
            </div>
            <div className="col-md-6 mb-3">
              <select 
                className="form-select"
                value={formData.registrationType}
                onChange={(e) => handleInputChange('registrationType', e.target.value)}
              >
                <option value="free">Inscrição Gratuita</option>
                <option value="donation">Ingresso com Doação</option>
                <option value="paid">Ingresso Pago</option>
              </select>
            </div>
            {(formData.registrationType === 'donation' || formData.registrationType === 'paid') && (
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  {formData.registrationType === 'donation' ? 'Valor Sugerido' : 'Preço do Ingresso'}
                </label>
                <div className="input-group">
                  <span className="input-group-text">R$</span>
                  <input 
                    type="number" 
                    className="form-control"
                    step="0.01"
                    value={formData.ticketPrice}
                    onChange={(e) => handleInputChange('ticketPrice', e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Charity Partner Section */}
          <div className="row mb-4">
            <div className="col-12">
              <h6 className="text-primary mb-3">
                <i className="bi bi-heart me-2"></i>Causa Beneficiada (Opcional)
              </h6>
            </div>
            <div className="col-12 mb-3">
              <select 
                className="form-select"
                value={formData.charityPartner}
                onChange={(e) => handleInputChange('charityPartner', e.target.value)}
              >
                <option value="">Selecione uma ONG parceira</option>
                <option value="ong1">Associação Protetora dos Animais de Feira</option>
                <option value="ong2">Grupo de Resgate Animal FSA</option>
                <option value="ong3">ONG Patinha Carente</option>
              </select>
              <small className="form-text text-muted">
                As doações coletadas no evento serão direcionadas para a ONG selecionada
              </small>
            </div>
          </div>

          {/* Sponsors Section */}
          <div className="row mb-4">
            <div className="col-12">
              <h6 className="text-primary mb-3">
                <i className="bi bi-award me-2"></i>Patrocinadores
              </h6>
            </div>
            {formData.sponsors.map((sponsor, index) => (
              <div key={index} className="col-12 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="mb-0">Patrocinador {index + 1}</h6>
                      {formData.sponsors.length > 1 && (
                        <button 
                          type="button" 
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => removeSponsor(index)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      )}
                    </div>
                    <div className="row">
                      <div className="col-md-4 mb-2">
                        <label className="form-label">Nome do Patrocinador</label>
                        <input 
                          type="text" 
                          className="form-control form-control-sm"
                          placeholder="Nome da empresa"
                          value={sponsor.name}
                          onChange={(e) => updateSponsor(index, 'name', e.target.value)}
                        />
                      </div>
                      <div className="col-md-4 mb-2">
                        <label className="form-label">Logo</label>
                        <input 
                          type="file" 
                          className="form-control form-control-sm"
                          accept="image/*"
                          onChange={(e) => updateSponsor(index, 'logo', e.target.files[0])}
                        />
                      </div>
                      <div className="col-md-4 mb-2">
                        <label className="form-label">Website (Opcional)</label>
                        <input 
                          type="url" 
                          className="form-control form-control-sm"
                          placeholder="https://..."
                          value={sponsor.website}
                          onChange={(e) => updateSponsor(index, 'website', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-12">
              <button 
                type="button" 
                className="btn btn-outline-primary btn-sm"
                onClick={addSponsor}
              >
                <i className="bi bi-plus-circle me-2"></i>Adicionar Patrocinador
              </button>
            </div>
          </div>

          {/* Form Actions */}
          <div className="row">
            <div className="col-12">
              <hr />
              <div className="d-flex gap-2 justify-content-end">
                <button 
                  type="button" 
                  className="btn btn-outline-secondary"
                  onClick={onCancel}
                >
                  Cancelar
                </button>
                <button 
                  type="button" 
                  className="btn btn-outline-primary"
                  onClick={() => console.log('Save as draft')}
                >
                  Salvar Rascunho
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                >
                  <i className="bi bi-check-circle me-2"></i>Publicar Evento
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEventForm;
