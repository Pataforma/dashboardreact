
import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ items, activeItem, onItemClick }) => {
  return (
    <div className={`${styles.sidebar} p-3`}>
      <div className="mb-4">
        <h4 className={styles.brandTitle}>
          <i className={`bi bi-heart-fill me-2 ${styles.brandIcon}`}></i>
          Pataforma
        </h4>
      </div>
      <nav className={`nav flex-column ${styles.nav}`}>
        {items.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`${styles.navLink} ${activeItem === item.key ? styles.active : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onItemClick(item.key);
            }}
          >
            <i className={`bi ${item.icon} ${styles.navIcon}`}></i>
            <span className={styles.navText}>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
