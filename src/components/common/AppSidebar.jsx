
import React from 'react';

const AppSidebar = ({ items, activeItem, onItemClick, isCollapsed, onToggleCollapse, userInfo }) => {
  return (
    <div className={`sidebar ${isCollapsed ? 'sidebar-collapsed' : ''} d-flex flex-column`}>
      {/* Header with toggle button */}
      <div className="sidebar-header p-3 border-bottom">
        <div className="d-flex align-items-center justify-content-between">
          {!isCollapsed && (
            <h5 className="text-primary fw-bold mb-0">
              <i className="bi bi-heart-fill me-2"></i>
              Pataforma
            </h5>
          )}
          <button 
            className="btn btn-sm btn-outline-primary"
            onClick={onToggleCollapse}
          >
            <i className={`bi ${isCollapsed ? 'bi-chevron-right' : 'bi-chevron-left'}`}></i>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav flex-column flex-grow-1 p-2">
        {items.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`nav-link d-flex align-items-center ${activeItem === item.key ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onItemClick(item.key);
            }}
            title={isCollapsed ? item.label : ''}
          >
            <i className={`bi ${item.icon} ${isCollapsed ? '' : 'me-2'}`}></i>
            {!isCollapsed && <span>{item.label}</span>}
          </a>
        ))}
      </nav>

      {/* User info at bottom */}
      {userInfo && (
        <div className="sidebar-footer p-3 border-top">
          {!isCollapsed ? (
            <div className="d-flex align-items-center">
              <img 
                src={userInfo.photo} 
                alt={userInfo.name}
                className="rounded-circle me-2"
                style={{ width: '32px', height: '32px', objectFit: 'cover' }}
              />
              <div className="flex-grow-1">
                <div className="small fw-bold">{userInfo.name}</div>
                <div className="text-muted" style={{ fontSize: '0.75rem' }}>{userInfo.role}</div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <img 
                src={userInfo.photo} 
                alt={userInfo.name}
                className="rounded-circle"
                style={{ width: '32px', height: '32px', objectFit: 'cover' }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AppSidebar;
