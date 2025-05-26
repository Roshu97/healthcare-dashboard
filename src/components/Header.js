import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Temporarily hide the notification badge until we implement the counter
      <div className="notification-badge">3</div> */}
      <div className="header-left">
        <div className="logo">
          <span className="logo-text">Health</span>
          <span className="logo-accent">care.</span>
          {/* <span className="version">v0.9</span> */}
        </div>
      </div>
      
      <div className="header-center">
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
          />
        </div>
      </div>
      
      <div className="header-right">
        <Bell className="notification-icon" size={20} />
        <div className="add-button">
          <Plus size={20} />
        </div>
        <div className="user-avatar">
          <img src="https://via.placeholder.com/40" alt="User" />
        </div>
      </div>
    </header>
  );
};

export default Header;