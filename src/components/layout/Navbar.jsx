import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/useAppContext';

export function Navbar() {
  const location = useLocation();
  const { darkMode, toggleDarkMode, groceryList } = useAppContext();
  const groceryCount = groceryList.filter((i) => !i.checked).length;

  const navLink = (to, label, icon) => {
    const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
    return (
      <Link
        className={`nav-link px-3 py-2 rounded ${isActive ? 'active bg-opacity-25' : ''}`}
        to={to}
      >
        <span className="me-1">{icon}</span>
        {label}
        {to === '/grocery' && groceryCount > 0 && (
          <span className="badge bg-danger ms-1">{groceryCount}</span>
        )}
      </Link>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-chef">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
          <span className="fs-4">🍳</span>
          SmartChef
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto gap-1">
            <li className="nav-item">{navLink('/', 'Discover', '🔍')}</li>
            <li className="nav-item">{navLink('/grocery', 'Grocery List', '🛒')}</li>
          </ul>
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-light btn-sm"
              onClick={toggleDarkMode}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
