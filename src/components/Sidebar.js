import React from 'react';
import pandaLogo from '../img/panda-logo.png';
import linkedin_icon from '../img/linkedin-icon.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={pandaLogo} alt="Panda Logo" className="logo" />
        <span className="sidebar-name">Nozomu Iwai</span>
      </div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#publications">Publications</a></li>
          <li><a href="#awards">Awards</a></li>
          <li><a href="#history">History</a></li>
        </ul>
      </nav>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src={linkedin_icon} alt="LinkedIn" className="linkedin-icon" />
      </a>
    </div>
  );
}

export default Sidebar;