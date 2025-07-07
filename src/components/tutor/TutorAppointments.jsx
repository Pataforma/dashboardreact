
import React, { useState } from 'react';

const TutorAppointments = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const upcomingAppointments = [
    {
      id: 1,
      petName: 'Max',
      petPhoto: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=150&h=150&fit=crop',
      type: 'Routine Check-up',
      date: '2024-01-20',
      time: '10:00 AM',
      veterinarian: 'Dr. Silva',
      clinic: 'VetCare Clinic',
      address: 'Rua das Flores, 123',
      status: 'Confirmed',
      isTelemedicine: false,
      cost: 'R$ 120,00'
    },
    {
      id: 2,
      petName: 'Luna',
      petPhoto: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=150&h=150&fit=crop',
      type: 'Telemedicine Consultation',
      date: '2024-01-22',
      time: '2:00 PM',
      veterinarian: 'Dr. Santos',
      clinic: 'PetHealth Online',
      address: 'Online Consultation',
      status: 'Confirmed',
      isTelemedicine: true,
      cost: 'R$ 80,00',
      meetingLink: 'https://pataforma.com/meet/abc123'
    }
  ];

  const appointmentHistory = [
    {
      id: 3,
      petName: 'Max',
      petPhoto: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=150&h=150&fit=crop',
      type: 'Vaccination',
      date: '2023-12-15',
      time: '11:00 AM',
      veterinarian: 'Dr. Silva',
      clinic: 'VetCare Clinic',
      status: 'Completed',
      cost: 'R$ 95,00',
      notes: 'Annual vaccinations completed successfully'
    },
    {
      id: 4,
      petName: 'Luna',
      petPhoto: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=150&h=150&fit=crop',
      type: 'Emergency Visit',
      date: '2023-11-28',
      time: '4:30 PM',
      veterinarian: 'Dr. Costa',
      clinic: 'Emergency Vet 24h',
      status: 'Completed',
      cost: 'R$ 250,00',
      notes: 'Treated minor cut on paw. Antibiotics prescribed.'
    }
  ];

  const renderAppointmentCard = (appointment, showActions = true) => (
    <div key={appointment.id} className="card mb-3">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-md-2">
            <img 
              src={appointment.petPhoto} 
              alt={appointment.petName}
              className="rounded-circle"
              style={{ width: '60px', height: '60px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-3">
            <h6 className="mb-1">{appointment.petName}</h6>
            <p className="text-muted mb-0">{appointment.type}</p>
            {appointment.isTelemedicine && (
              <span className="badge badge-info mt-1">
                <i className="bi bi-camera-video me-1"></i>
                Telemedicine
              </span>
            )}
          </div>
          <div className="col-md-2">
            <p className="mb-0">
              <i className="bi bi-calendar3 me-2"></i>
              {appointment.date}
            </p>
            <p className="mb-0">
              <i className="bi bi-clock me-2"></i>
              {appointment.time}
            </p>
          </div>
          <div className="col-md-2">
            <p className="mb-0">
              <i className="bi bi-person-badge me-2"></i>
              {appointment.veterinarian}
            </p>
            <p className="text-muted mb-0 small">{appointment.clinic}</p>
          </div>
          <div className="col-md-2">
            <span className={`badge ${
              appointment.status === 'Confirmed' ? 'bg-success' : 
              appointment.status === 'Completed' ? 'badge-info' : 'badge-warning'
            }`}>
              {appointment.status}
            </span>
            {appointment.cost && (
              <p className="mb-0 mt-1 fw-bold text-primary">{appointment.cost}</p>
            )}
          </div>
          <div className="col-md-1">
            {showActions && (
              <div className="dropdown">
                <button className="btn btn-outline-primary btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a 
                      className="dropdown-item" 
                      href="#"
                      onClick={(e) => { e.preventDefault(); setSelectedAppointment(appointment); }}
                    >
                      <i className="bi bi-eye me-2"></i>View Details
                    </a>
                  </li>
                  {appointment.status === 'Confirmed' && (
                    <>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-pencil me-2"></i>Reschedule
                        </a>
                      </li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <a className="dropdown-item text-danger" href="#">
                          <i className="bi bi-x-circle me-2"></i>Cancel
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAppointmentDetails = () => {
    if (!selectedAppointment) return null;

    return (
      <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                <i className="bi bi-calendar-event me-2"></i>
                Appointment Details
              </h5>
              <button 
                type="button" 
                className="btn-close"
                onClick={() => setSelectedAppointment(null)}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-4">
                  <img 
                    src={selectedAppointment.petPhoto} 
                    alt={selectedAppointment.petName}
                    className="img-fluid rounded mb-3"
                  />
                  <h6>{selectedAppointment.petName}</h6>
                  <p className="text-muted">{selectedAppointment.type}</p>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label text-muted">Date & Time</label>
                      <p className="fw-bold">
                        <i className="bi bi-calendar3 me-2"></i>
                        {selectedAppointment.date} at {selectedAppointment.time}
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label text-muted">Veterinarian</label>
                      <p className="fw-bold">
                        <i className="bi bi-person-badge me-2"></i>
                        {selectedAppointment.veterinarian}
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label text-muted">Clinic</label>
                      <p className="fw-bold">
                        <i className="bi bi-hospital me-2"></i>
                        {selectedAppointment.clinic}
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label text-muted">Status</label>
                      <p>
                        <span className={`badge ${
                          selectedAppointment.status === 'Confirmed' ? 'bg-success' : 
                          selectedAppointment.status === 'Completed' ? 'badge-info' : 'badge-warning'
                        }`}>
                          {selectedAppointment.status}
                        </span>
                      </p>
                    </div>
                    <div className="col-12 mb-3">
                      <label className="form-label text-muted">Location</label>
                      <p className="fw-bold">
                        <i className="bi bi-geo-alt me-2"></i>
                        {selectedAppointment.address}
                      </p>
                    </div>
                    {selectedAppointment.cost && (
                      <div className="col-sm-6 mb-3">
                        <label className="form-label text-muted">Cost</label>
                        <p className="fw-bold text-primary fs-5">{selectedAppointment.cost}</p>
                      </div>
                    )}
                  </div>

                  {selectedAppointment.isTelemedicine && selectedAppointment.status === 'Confirmed' && (
                    <div className="alert alert-info">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="alert-heading mb-1">
                            <i className="bi bi-camera-video me-2"></i>
                            Telemedicine Consultation
                          </h6>
                          <p className="mb-0">You can join the consultation 10 minutes before the scheduled time.</p>
                        </div>
                        <div>
                          <span className="badge bg-success me-2">
                            <i className="bi bi-wifi me-1"></i>
                            Connection Ready
                          </span>
                          <button className="btn btn-primary">
                            <i className="bi bi-camera-video me-2"></i>
                            Join Teleconsultation
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedAppointment.notes && (
                    <div className="mt-3">
                      <label className="form-label text-muted">Notes</label>
                      <p className="text-muted">{selectedAppointment.notes}</p>
                    </div>
                  )}

                  {selectedAppointment.status === 'Confirmed' && (
                    <div className="mt-4">
                      <button className="btn btn-outline-primary me-2">
                        <i className="bi bi-pencil me-2"></i>
                        Reschedule
                      </button>
                      <button className="btn btn-outline-danger">
                        <i className="bi bi-x-circle me-2"></i>
                        Cancel Appointment
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">
            <i className="bi bi-calendar-check me-2 text-primary"></i>
            Appointments
          </h2>
          <p className="text-muted mb-0">Manage your pet's appointments and consultations</p>
        </div>
        <button className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>
          Schedule Appointment
        </button>
      </div>

      {/* Quick Stats */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="mb-0">{upcomingAppointments.length}</h4>
                  <small>Upcoming</small>
                </div>
                <i className="bi bi-calendar-plus display-6 opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-info text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="mb-0">1</h4>
                  <small>Telemedicine</small>
                </div>
                <i className="bi bi-camera-video display-6 opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-success text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="mb-0">{appointmentHistory.length}</h4>
                  <small>Completed</small>
                </div>
                <i className="bi bi-check-circle display-6 opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-warning text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="mb-0">R$ 545</h4>
                  <small>Total Spent</small>
                </div>
                <i className="bi bi-currency-dollar display-6 opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'upcoming' ? 'active' : ''}`}
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveTab('upcoming'); }}
          >
            <i className="bi bi-calendar-plus me-2"></i>
            Upcoming ({upcomingAppointments.length})
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'history' ? 'active' : ''}`}
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveTab('history'); }}
          >
            <i className="bi bi-clock-history me-2"></i>
            History ({appointmentHistory.length})
          </a>
        </li>
      </ul>

      {/* Appointments List */}
      {activeTab === 'upcoming' && (
        <div>
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map(appointment => renderAppointmentCard(appointment))
          ) : (
            <div className="text-center py-5">
              <i className="bi bi-calendar-x text-muted display-1"></i>
              <h5 className="mt-3 text-muted">No upcoming appointments</h5>
              <p className="text-muted">Schedule your next appointment to keep your pets healthy</p>
              <button className="btn btn-primary">
                <i className="bi bi-plus-circle me-2"></i>
                Schedule Appointment
              </button>
            </div>
          )}
        </div>
      )}

      {activeTab === 'history' && (
        <div>
          {appointmentHistory.length > 0 ? (
            appointmentHistory.map(appointment => renderAppointmentCard(appointment, false))
          ) : (
            <div className="text-center py-5">
              <i className="bi bi-clock-history text-muted display-1"></i>
              <h5 className="mt-3 text-muted">No appointment history</h5>
              <p className="text-muted">Your completed appointments will appear here</p>
            </div>
          )}
        </div>
      )}

      {/* Appointment Details Modal */}
      {renderAppointmentDetails()}
    </div>
  );
};

export default TutorAppointments;
