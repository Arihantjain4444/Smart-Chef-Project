import React from 'react';
import { Link } from 'react-router-dom';

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/', label: 'Smart Generator' },
  { to: '/grocery', label: 'Grocery List' },
  { to: '/recipe/1/cook', label: 'Cooking Mode' },
];

const FEATURES = [
  { icon: '⏱', text: 'Time-based recipes' },
  { icon: '🥦', text: 'Ingredient filter' },
  { icon: '📊', text: 'Nutrition insights' },
  { icon: '🛒', text: 'Auto grocery list' },
];

export function Footer() {
  return (
    <footer className="app-footer">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <h6 className="footer-heading">🔗 Quick Links</h6>
            <ul className="footer-links list-unstyled mb-0">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="footer-heading">⚡ Features</h6>
            <ul className="footer-features list-unstyled mb-0">
              {FEATURES.map((item) => (
                <li key={item.text} className="d-flex align-items-center gap-2 mb-2">
                  <span className="footer-feature-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="footer-heading">👨‍💻 Developer</h6>
            <div className="footer-credit">
              <p className="fw-semibold mb-1">Arihant Jain</p>
              <p className="small text-muted mb-2">Frontend Developer | React</p>
              <div className="d-flex gap-3">
                <a
                  href="https://www.linkedin.com/in/arihantjain4444/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social"
                  title="LinkedIn"
                >
                  💼 LinkedIn
                </a>
                <a
                  href="https://github.com/Arihantjain4444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social"
                  title="GitHub"
                >
                  🐙 GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="footer-divider my-4" />
        <p className="footer-copy small text-center text-muted mb-0">
          © {new Date().getFullYear()} SmartChef. Built with React.
        </p>
      </div>
    </footer>
  );
}
