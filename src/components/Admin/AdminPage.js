import React from 'react';
import './AdminPage.css';

const AdminPage = () => (
  <div className="admin-container">
    {/* Sidebar */}
    <div className="sidebar">
      <ul>
        <li><i className="fas fa-home"></i> Home</li>
        <li><i className="fas fa-user"></i> Users</li>
        <li><i className="fas fa-chart-bar"></i> Analytics</li>
        <li><i className="fas fa-cog"></i> Settings</li>
      </ul>
    </div>

    {/* Main Content */}
    <div className="main-content">
      <div className="dashboard-header">
        <h1>Welcome Back, Admin!</h1>
        <button>Check Now</button>
      </div>

      <div className="info-cards">
        <div className="info-card">
          
        </div>
        <div className="info-card">
          
        </div>
        <div className="info-card">
          
        </div>
      </div>
    </div>

    {/* Upcoming Check-ups */}
    <div className="checkups">
      <div className="calendar">
        <h2>Upcoming Check-ups</h2>
        <p>December 2024</p>
      </div>
    </div>
  </div>
);

export default AdminPage;
