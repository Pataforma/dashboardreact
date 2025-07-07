
import React, { useState } from 'react';

const TutorNotifications = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'appointment',
      title: 'Appointment Reminder',
      message: 'Max has a routine check-up scheduled for tomorrow at 10:00 AM with Dr. Silva.',
      time: '2 hours ago',
      read: false,
      priority: 'high',
      petName: 'Max',
      actionable: true
    },
    {
      id: 2,
      type: 'vaccination',
      title: 'Vaccination Due',
      message: 'Luna\'s annual vaccination is due next week. Please schedule an appointment.',
      time: '1 day ago',
      read: false,
      priority: 'medium',
      petName: 'Luna',
      actionable: true
    },
    {
      id: 3,
      type: 'telemedicine',
      title: 'Telemedicine Session Ready',
      message: 'Your telemedicine consultation with Dr. Santos is ready to join.',
      time: '3 hours ago',
      read: true,
      priority: 'high',
      petName: 'Luna',
      actionable: true
    },
    {
      id: 4,
      type: 'payment',
      title: 'Payment Confirmation',
      message: 'Payment of R$ 120.00 for Max\'s check-up has been processed successfully.',
      time: '2 days ago',
      read: true,
      priority: 'low',
      petName: 'Max',
      actionable: false
    },
    {
      id: 5,
      type: 'health',
      title: 'Health Record Updated',
      message: 'Dr. Silva has updated Luna\'s health record with recent examination results.',
      time: '3 days ago',
      read: true,
      priority: 'medium',
      petName: 'Luna',
      actionable: true
    },
    {
      id: 6,
      type: 'reminder',
      title: 'Medication Reminder',
      message: 'Time to give Luna her prescribed medication (Antibiotics - 2x daily)',
      time: '5 hours ago',
      read: false,
      priority: 'high',
      petName: 'Luna',
      actionable: true
    }
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'appointment':
        return 'bi-calendar-check';
      case 'vaccination':
        return 'bi-shield-check';
      case 'telemedicine':
        return 'bi-camera-video';
      case 'payment':
        return 'bi-credit-card';
      case 'health':
        return 'bi-heart-pulse';
      case 'reminder':
        return 'bi-alarm';
      default:
        return 'bi-bell';
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-danger';
      case 'medium':
        return 'badge-warning';
      case 'low':
        return 'badge-info';
      default:
        return 'bg-secondary';
    }
  };

  const getFilteredNotifications = () => {
    switch (activeTab) {
      case 'unread':
        return notifications.filter(notif => !notif.read);
      case 'appointments':
        return notifications.filter(notif => notif.type === 'appointment' || notif.type === 'telemedicine');
      case 'health':
        return notifications.filter(notif => notif.type === 'vaccination' || notif.type === 'health' || notif.type === 'reminder');
      default:
        return notifications;
    }
  };

  const unreadCount = notifications.filter(notif => !notif.read).length;

  const renderNotificationCard = (notification) => (
    <div 
      key={notification.id} 
      className={`card mb-3 ${!notification.read ? 'border-primary' : ''}`}
    >
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-md-1">
            <i className={`bi ${getNotificationIcon(notification.type)} display-6 ${
              notification.priority === 'high' ? 'text-danger' : 
              notification.priority === 'medium' ? 'text-warning' : 'text-primary'
            }`}></i>
          </div>
          <div className="col-md-8">
            <div className="d-flex align-items-center mb-2">
              <h6 className="mb-0 me-2">{notification.title}</h6>
              <span className={`badge ${getPriorityBadge(notification.priority)} me-2`}>
                {notification.priority}
              </span>
              {!notification.read && (
                <span className="badge bg-primary">New</span>
              )}
            </div>
            <p className="mb-2">{notification.message}</p>
            <div className="d-flex align-items-center text-muted">
              <small className="me-3">
                <i className="bi bi-clock me-1"></i>
                {notification.time}
              </small>
              {notification.petName && (
                <small className="me-3">
                  <i className="bi bi-heart me-1"></i>
                  {notification.petName}
                </small>
              )}
            </div>
          </div>
          <div className="col-md-3 text-end">
            {notification.actionable && (
              <div className="mb-2">
                {notification.type === 'appointment' && (
                  <button className="btn btn-sm btn-outline-primary me-2">
                    <i className="bi bi-calendar-check me-1"></i>
                    View
                  </button>
                )}
                {notification.type === 'vaccination' && (
                  <button className="btn btn-sm btn-outline-success me-2">
                    <i className="bi bi-calendar-plus me-1"></i>
                    Schedule
                  </button>
                )}
                {notification.type === 'telemedicine' && (
                  <button className="btn btn-sm btn-primary me-2">
                    <i className="bi bi-camera-video me-1"></i>
                    Join
                  </button>
                )}
                {notification.type === 'health' && (
                  <button className="btn btn-sm btn-outline-info me-2">
                    <i className="bi bi-eye me-1"></i>
                    View Record
                  </button>
                )}
                {notification.type === 'reminder' && (
                  <button className="btn btn-sm btn-outline-warning me-2">
                    <i className="bi bi-check-circle me-1"></i>
                    Mark Done
                  </button>
                )}
              </div>
            )}
            <div>
              {!notification.read && (
                <button 
                  className="btn btn-sm btn-outline-secondary me-2"
                  onClick={() => markAsRead(notification.id)}
                >
                  <i className="bi bi-eye me-1"></i>
                  Mark Read
                </button>
              )}
              <button 
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteNotification(notification.id)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
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
            <i className="bi bi-bell me-2 text-primary"></i>
            Notifications
            {unreadCount > 0 && (
              <span className="badge bg-danger ms-2">{unreadCount}</span>
            )}
          </h2>
          <p className="text-muted mb-0">Stay updated with your pets' care and appointments</p>
        </div>
        <div>
          {unreadCount > 0 && (
            <button className="btn btn-outline-primary me-2" onClick={markAllAsRead}>
              <i className="bi bi-check-all me-2"></i>
              Mark All Read
            </button>
          )}
          <button className="btn btn-primary">
            <i className="bi bi-gear me-2"></i>
            Settings
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="mb-0">{notifications.length}</h4>
                  <small>Total Notifications</small>
                </div>
                <i className="bi bi-bell display-6 opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-danger text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="mb-0">{unreadCount}</h4>
                  <small>Unread</small>
                </div>
                <i className="bi bi-exclamation-circle display-6 opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-warning text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="mb-0">{notifications.filter(n => n.priority === 'high').length}</h4>
                  <small>High Priority</small>
                </div>
                <i className="bi bi-alert-triangle display-6 opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-success text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="mb-0">{notifications.filter(n => n.actionable).length}</h4>
                  <small>Actionable</small>
                </div>
                <i className="bi bi-check-circle display-6 opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'all' ? 'active' : ''}`}
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveTab('all'); }}
          >
            <i className="bi bi-list me-2"></i>
            All ({notifications.length})
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'unread' ? 'active' : ''}`}
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveTab('unread'); }}
          >
            <i className="bi bi-bell me-2"></i>
            Unread ({unreadCount})
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'appointments' ? 'active' : ''}`}
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveTab('appointments'); }}
          >
            <i className="bi bi-calendar-check me-2"></i>
            Appointments
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'health' ? 'active' : ''}`}
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveTab('health'); }}
          >
            <i className="bi bi-heart-pulse me-2"></i>
            Health & Care
          </a>
        </li>
      </ul>

      {/* Notifications List */}
      <div>
        {getFilteredNotifications().length > 0 ? (
          getFilteredNotifications().map(notification => renderNotificationCard(notification))
        ) : (
          <div className="text-center py-5">
            <i className="bi bi-bell-slash text-muted display-1"></i>
            <h5 className="mt-3 text-muted">No notifications</h5>
            <p className="text-muted">
              {activeTab === 'unread' ? 
                'All caught up! No unread notifications.' : 
                'You\'ll see notifications about your pets here.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorNotifications;
