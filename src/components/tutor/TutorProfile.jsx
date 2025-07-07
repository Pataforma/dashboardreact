
import React, { useState } from 'react';
import { tutorData } from '../../data/mockData';

const TutorProfile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: tutorData.profile.name,
    email: 'maria.silva@email.com',
    phone: '(11) 99999-9999',
    address: 'Rua das Flores, 123 - São Paulo, SP',
    emergencyContact: 'João Silva - (11) 88888-8888',
    preferredClinic: 'VetCare Clinic',
    preferredVet: 'Dr. Silva'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // Simulate saving data
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const renderPersonalInfo = () => (
    <div className="card">
      <div className="card-header">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            <i className="bi bi-person-circle me-2"></i>
            Personal Information
          </h5>
          <button 
            className={`btn btn-sm ${isEditing ? 'btn-success' : 'btn-outline-primary'}`}
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
          >
            <i className={`bi ${isEditing ? 'bi-check-lg' : 'bi-pencil'} me-2`}></i>
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4 text-center">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b3d1?w=200&h=200&fit=crop&crop=face"
              alt="Profile"
              className="rounded-circle mb-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            {isEditing && (
              <button className="btn btn-outline-primary btn-sm">
                <i className="bi bi-camera me-2"></i>
                Change Photo
              </button>
            )}
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Full Name</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="form-control-plaintext fw-bold">{formData.name}</p>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                {isEditing ? (
                  <input 
                    type="email" 
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="form-control-plaintext">{formData.email}</p>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Phone</label>
                {isEditing ? (
                  <input 
                    type="tel" 
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="form-control-plaintext">{formData.phone}</p>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Emergency Contact</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    className="form-control"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="form-control-plaintext">{formData.emergencyContact}</p>
                )}
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Address</label>
                {isEditing ? (
                  <textarea 
                    className="form-control"
                    name="address"
                    rows="2"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="form-control-plaintext">{formData.address}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPreferences = () => (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0">
          <i className="bi bi-heart-pulse me-2"></i>
          Pet Care Preferences
        </h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Preferred Clinic</label>
            {isEditing ? (
              <select 
                className="form-select"
                name="preferredClinic"
                value={formData.preferredClinic}
                onChange={handleInputChange}
              >
                <option value="VetCare Clinic">VetCare Clinic</option>
                <option value="PetHealth Clinic">PetHealth Clinic</option>
                <option value="Emergency Vet 24h">Emergency Vet 24h</option>
              </select>
            ) : (
              <p className="form-control-plaintext">{formData.preferredClinic}</p>
            )}
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Preferred Veterinarian</label>
            {isEditing ? (
              <select 
                className="form-select"
                name="preferredVet"
                value={formData.preferredVet}
                onChange={handleInputChange}
              >
                <option value="Dr. Silva">Dr. Silva</option>
                <option value="Dr. Santos">Dr. Santos</option>
                <option value="Dr. Costa">Dr. Costa</option>
                <option value="Dr. Oliveira">Dr. Oliveira</option>
              </select>
            ) : (
              <p className="form-control-plaintext">{formData.preferredVet}</p>
            )}
          </div>
        </div>
        
        <div className="row">
          <div className="col-12 mb-3">
            <label className="form-label">Notification Preferences</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="emailNotifs" defaultChecked />
              <label className="form-check-label" htmlFor="emailNotifs">
                Email notifications for appointments and reminders
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="smsNotifs" defaultChecked />
              <label className="form-check-label" htmlFor="smsNotifs">
                SMS notifications for urgent matters
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="pushNotifs" defaultChecked />
              <label className="form-check-label" htmlFor="pushNotifs">
                Push notifications in the app
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderConnectedServices = () => (
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h6 className="mb-0">
              <i className="bi bi-hospital me-2"></i>
              Connected Veterinary Clinics
            </h6>
          </div>
          <div className="card-body">
            <div className="list-group list-group-flush">
              <div className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>VetCare Clinic</strong>
                  <br />
                  <small className="text-muted">Dr. Silva - Primary Vet</small>
                </div>
                <span className="badge bg-success">Connected</span>
              </div>
              <div className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>PetHealth Clinic</strong>
                  <br />
                  <small className="text-muted">Dr. Santos - Specialist</small>
                </div>
                <span className="badge bg-success">Connected</span>
              </div>
              <div className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>Emergency Vet 24h</strong>
                  <br />
                  <small className="text-muted">Emergency Services</small>
                </div>
                <span className="badge badge-warning">Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h6 className="mb-0">
              <i className="bi bi-shield-check me-2"></i>
              Data Sharing & Privacy
            </h6>
          </div>
          <div className="card-body">
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="shareHealth" defaultChecked />
              <label className="form-check-label" htmlFor="shareHealth">
                <strong>Share health records</strong> with connected veterinarians
              </label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="shareFinancial" defaultChecked />
              <label className="form-check-label" htmlFor="shareFinancial">
                <strong>Share financial data</strong> for expense tracking
              </label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="shareAppointments" defaultChecked />
              <label className="form-check-label" htmlFor="shareAppointments">
                <strong>Share appointment history</strong> across clinics
              </label>
            </div>
            <hr />
            <small className="text-muted">
              <i className="bi bi-info-circle me-1"></i>
              Your data is encrypted and only shared with authorized veterinary professionals.
            </small>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAccountSettings = () => (
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h6 className="mb-0">
              <i className="bi bi-key me-2"></i>
              Account Security
            </h6>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <button className="btn btn-outline-primary w-100 mb-2">
                <i className="bi bi-lock me-2"></i>
                Change Password
              </button>
              <button className="btn btn-outline-info w-100 mb-2">
                <i className="bi bi-shield-check me-2"></i>
                Enable Two-Factor Authentication
              </button>
              <button className="btn btn-outline-secondary w-100">
                <i className="bi bi-download me-2"></i>
                Download My Data
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h6 className="mb-0">
              <i className="bi bi-gear me-2"></i>
              Account Actions
            </h6>
          </div>
          <div className="card-body">
            <div className="alert alert-warning">
              <strong>Dangerous Actions</strong>
              <p className="mb-0 mt-2">These actions cannot be undone.</p>
            </div>
            <button className="btn btn-outline-warning w-100 mb-2">
              <i className="bi bi-pause-circle me-2"></i>
              Deactivate Account
            </button>
            <button className="btn btn-outline-danger w-100">
              <i className="bi bi-trash me-2"></i>
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">
            <i className="bi bi-person-circle me-2 text-primary"></i>
            My Profile
          </h2>
          <p className="text-muted mb-0">Manage your account settings and preferences</p>
        </div>
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
                  <h4 className="mb-0">3</h4>
                  <small>Connected Clinics</small>
                </div>
                <i className="bi bi-hospital display-6 opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-info text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="mb-0">2</h4>
                  <small>Years as Member</small>
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
                  <h4 className="mb-0">15</h4>
                  <small>Total Appointments</small>
                </div>
                <i className="bi bi-clipboard-check display-6 opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'personal' ? 'active' : ''}`}
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveTab('personal'); }}
          >
            <i className="bi bi-person me-2"></i>
            Personal Info
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'preferences' ? 'active' : ''}`}
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveTab('preferences'); }}
          >
            <i className="bi bi-heart me-2"></i>
            Preferences
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'connected' ? 'active' : ''}`}
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveTab('connected'); }}
          >
            <i className="bi bi-link me-2"></i>
            Connected Services
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'account' ? 'active' : ''}`}
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveTab('account'); }}
          >
            <i className="bi bi-gear me-2"></i>
            Account Settings
          </a>
        </li>
      </ul>

      {/* Tab Content */}
      {activeTab === 'personal' && renderPersonalInfo()}
      {activeTab === 'preferences' && renderPreferences()}
      {activeTab === 'connected' && renderConnectedServices()}
      {activeTab === 'account' && renderAccountSettings()}
    </div>
  );
};

export default TutorProfile;
