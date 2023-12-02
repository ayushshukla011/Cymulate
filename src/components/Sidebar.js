import React from 'react';
import './Sidebar.css'; // Create a CSS file for your styles

const Sidebar = () => {
  return (
    <div className="sidebar">
        <h2 className='dashboard-heading'>Dashboard</h2>
      <ul>
        <li>IMMEDIATE THREATS INTELLIGENCE</li>
        <li>EMAIL GATEWAY</li>
        <li>WEB GATEWAY</li>
        <li>WEB APPLICATION FIREWALL</li>
        <li>PHISING AWARENESS</li>
        <li>ENDPOINT SECURITY</li>
        <li>LATERAL MOVEMENT</li>
        <li>DATA EXFILTRATION</li>
        <li>FULL-KILL CHAIN APT</li>
        <li>ACTIVITY CENTER</li>
        <li>REPORTS</li>
      </ul>
    </div>
  );
};

export default Sidebar;
