
import React from 'react';

const Sidebar = ({ items, activeItem, onItemClick }) => {
  return (
    <div className="sidebar p-3">
      <div className="mb-4">
        <h4 className="text-primary fw-bold">
          <i className="bi bi-heart-fill me-2"></i>
          Pataforma
        </h4>
      </div>
      <nav className="nav flex-column">
        {items.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`nav-link ${activeItem === item.key ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onItemClick(item.key);
            }}
          >
            <i className={`bi ${item.icon} me-2`}></i>
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
