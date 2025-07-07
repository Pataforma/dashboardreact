
import React, { useState } from 'react';
import { tutorData } from '../../data/mockData';

const TutorMyPets = () => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');

  const renderPetCards = () => (
    <div className="row">
      {tutorData.profile.pets.map(pet => (
        <div key={pet.id} className="col-md-6 col-lg-4 mb-4">
          <div 
            className="card pet-card h-100" 
            onClick={() => setSelectedPet(pet)}
          >
            <img 
              src={pet.photo} 
              className="card-img-top" 
              alt={pet.name}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{pet.name}</h5>
              <p className="card-text text-muted">{pet.breed} • {pet.age}</p>
              <span className={`badge mb-3 ${
                pet.healthStatus === 'Healthy' ? 'bg-success' : 
                pet.healthStatus === 'Needs attention' ? 'badge-warning' : 'badge-info'
              }`}>
                {pet.healthStatus}
              </span>
              <div className="mt-auto">
                <button className="btn btn-outline-primary btn-sm w-100 mb-2">
                  <i className="bi bi-eye me-2"></i>
                  View Details
                </button>
                <button className="btn btn-primary btn-sm w-100">
                  <i className="bi bi-calendar-plus me-2"></i>
                  Schedule Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Add New Pet Card */}
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card pet-card h-100 border-dashed d-flex align-items-center justify-content-center" style={{ minHeight: '300px', cursor: 'pointer' }}>
          <div className="text-center text-muted">
            <i className="bi bi-plus-circle display-1"></i>
            <h5 className="mt-3">Add New Pet</h5>
            <p>Register your pet to start tracking their health</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPetDetails = () => {
    if (!selectedPet) return null;

    return (
      <div className="card mt-4">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">
              <i className="bi bi-heart-pulse me-2 text-primary"></i>
              {selectedPet.name}'s Profile
            </h5>
            <div>
              <button className="btn btn-sm btn-outline-primary me-2">
                <i className="bi bi-pencil"></i> Edit
              </button>
              <button 
                className="btn btn-sm btn-outline-secondary"
                onClick={() => setSelectedPet(null)}
              >
                <i className="bi bi-x"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <ul className="nav nav-tabs mb-3">
            <li className="nav-item">
              <a 
                className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveTab('profile'); }}
              >
                <i className="bi bi-info-circle me-2"></i>Basic Info
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeTab === 'health' ? 'active' : ''}`}
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveTab('health'); }}
              >
                <i className="bi bi-heart-pulse me-2"></i>Health Record
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeTab === 'vaccines' ? 'active' : ''}`}
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveTab('vaccines'); }}
              >
                <i className="bi bi-shield-check me-2"></i>Vaccinations
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeTab === 'documents' ? 'active' : ''}`}
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveTab('documents'); }}
              >
                <i className="bi bi-folder me-2"></i>Documents
              </a>
            </li>
          </ul>

          {activeTab === 'profile' && (
            <div className="row">
              <div className="col-md-4">
                <img 
                  src={selectedPet.photo} 
                  alt={selectedPet.name}
                  className="img-fluid rounded mb-3"
                />
                <div className="text-center">
                  <span className={`badge fs-6 ${
                    selectedPet.healthStatus === 'Healthy' ? 'bg-success' : 
                    selectedPet.healthStatus === 'Needs attention' ? 'badge-warning' : 'badge-info'
                  }`}>
                    {selectedPet.healthStatus}
                  </span>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label text-muted">Name</label>
                    <p className="fw-bold">{selectedPet.name}</p>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="form-label text-muted">Species</label>
                    <p className="fw-bold">{selectedPet.species}</p>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="form-label text-muted">Breed</label>
                    <p className="fw-bold">{selectedPet.breed}</p>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="form-label text-muted">Age</label>
                    <p className="fw-bold">{selectedPet.age}</p>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="form-label text-muted">Weight</label>
                    <p className="fw-bold">12 kg</p>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="form-label text-muted">Microchip ID</label>
                    <p className="fw-bold">985141002345678</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'health' && (
            <div>
              <div className="alert alert-info">
                <i className="bi bi-info-circle me-2"></i>
                <strong>Note:</strong> This is a read-only view of your pet's health record as maintained by your veterinarian.
              </div>
              
              <div className="row mb-4">
                <div className="col-md-4">
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <i className="bi bi-thermometer text-primary display-6"></i>
                      <h5 className="mt-2">Last Temperature</h5>
                      <p className="fs-4 mb-0">38.2°C</p>
                      <small className="text-muted">Normal range</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <i className="bi bi-heart text-danger display-6"></i>
                      <h5 className="mt-2">Heart Rate</h5>
                      <p className="fs-4 mb-0">120 bpm</p>
                      <small className="text-muted">Normal range</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <i className="bi bi-scale text-success display-6"></i>
                      <h5 className="mt-2">Weight</h5>
                      <p className="fs-4 mb-0">12 kg</p>
                      <small className="text-muted">Ideal weight</small>
                    </div>
                  </div>
                </div>
              </div>

              <h6 className="mb-3">Recent Medical History</h6>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Veterinarian</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2024-01-15</td>
                      <td><span className="badge bg-primary">Check-up</span></td>
                      <td>Dr. Silva</td>
                      <td>Annual routine examination - All normal</td>
                    </tr>
                    <tr>
                      <td>2023-12-08</td>
                      <td><span className="badge badge-warning">Treatment</span></td>
                      <td>Dr. Santos</td>
                      <td>Mild ear infection - Prescribed antibiotics</td>
                    </tr>
                    <tr>
                      <td>2023-11-20</td>
                      <td><span className="badge badge-info">Vaccination</span></td>
                      <td>Dr. Silva</td>
                      <td>Annual vaccinations completed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'vaccines' && (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Vaccine</th>
                    <th>Date Applied</th>
                    <th>Next Due</th>
                    <th>Status</th>
                    <th>Veterinarian</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedPet.vaccines.map((vaccine, index) => (
                    <tr key={index}>
                      <td>{vaccine.name}</td>
                      <td>{vaccine.date}</td>
                      <td>{vaccine.nextDue || 'N/A'}</td>
                      <td>
                        <span className={`badge ${
                          vaccine.status === 'Aplicada' ? 'bg-success' : 
                          vaccine.status === 'Overdue' ? 'bg-danger' : 'badge-warning'
                        }`}>
                          {vaccine.status}
                        </span>
                      </td>
                      <td>Dr. Silva</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'documents' && (
            <div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">
                        <i className="bi bi-file-earmark-pdf text-danger me-2"></i>
                        Registration Certificate
                      </h6>
                      <p className="card-text text-muted">Official registration document</p>
                      <button className="btn btn-outline-primary btn-sm">
                        <i className="bi bi-download me-2"></i>Download
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">
                        <i className="bi bi-file-earmark-medical text-success me-2"></i>
                        Vaccination Record
                      </h6>
                      <p className="card-text text-muted">Complete vaccination history</p>
                      <button className="btn btn-outline-primary btn-sm">
                        <i className="bi bi-download me-2"></i>Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <button className="btn btn-primary">
                  <i className="bi bi-cloud-upload me-2"></i>
                  Upload Document
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">
            <i className="bi bi-heart-pulse me-2 text-primary"></i>
            My Pets
          </h2>
          <p className="text-muted mb-0">Manage your pets and their health records</p>
        </div>
        <button className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>
          Add New Pet
        </button>
      </div>

      {/* Quick Stats */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="mb-0">{tutorData.profile.pets.length}</h4>
                  <small>Registered Pets</small>
                </div>
                <i className="bi bi-heart-pulse display-6 opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-success text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="mb-0">2</h4>
                  <small>Upcoming Appointments</small>
                </div>
                <i className="bi bi-calendar-check display-6 opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-warning text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="mb-0">1</h4>
                  <small>Due Vaccinations</small>
                </div>
                <i className="bi bi-shield-exclamation display-6 opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-info text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="mb-0">3</h4>
                  <small>Active Reminders</small>
                </div>
                <i className="bi bi-bell display-6 opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pet Cards */}
      {renderPetCards()}

      {/* Pet Details */}
      {selectedPet && renderPetDetails()}
    </div>
  );
};

export default TutorMyPets;
