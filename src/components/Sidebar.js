import React from 'react';
import pandaLogo from '../img/panda-logo.png';
import github_icon from '../img/github-icon.png';
import x_icon from '../img/x-icon.png';
import linkedin_icon from '../img/linkedin-icon.png';
import '../styles/Sidebar.css';

function Sidebar({ activeSection }) {
  const navItems = [
    { id: 'about', text: 'About' },
    { id: 'works', text: 'Works' },
    { id: 'skills', text: 'Skills' },
    { id: 'publications', text: 'Publications' },
    { id: 'awards', text: 'Awards' },
    { id: 'history', text: 'History' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <img src={pandaLogo} alt="Panda Logo" className="logo" />
        </div>
        <div className="name-container">
          <span className="sidebar-name">Nozomu Iwai</span>
        </div>
      </div>
      <nav className="nav-list">
        <ul>
          {navItems.map((item) => (
            <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
              <a href={`#${item.id}`}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="social_icons">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={github_icon} alt="Github" className="linkedin-icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={x_icon} alt="X" className="linkedin-icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedin_icon} alt="LinkedIn" className="linkedin-icon" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;