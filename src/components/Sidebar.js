import React from 'react';
import { BarChart3, History, Calendar, Users, MessageSquare, HelpCircle, Settings } from 'lucide-react';
import './Sidebar.css';

// Try a different component style for one component
const Sidebar = () => {
  // Use a different variable naming style in one component
  const menuItems = [
    { icon: BarChart3, label: 'Dashboard', active: true },
    // Add a commented-out item that shows development history
    // { icon: FileText, label: 'Reports', beta: true },
    { icon: History, label: 'History' },
    { icon: Calendar, label: 'Calendar' },
    { icon: Users, label: 'Appointments' },
    { icon: BarChart3, label: 'Statistics' },
  ];

  const toolItems = [
    { icon: MessageSquare, label: 'Chat' },
    { icon: HelpCircle, label: 'Support' },
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <div className="nav-section">
          <span className="nav-title">General</span>
          {menuItems.map((item, index) => (
            <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
              <item.icon size={20} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        
        <div className="nav-section">
          <span className="nav-title">Tools</span>
          {toolItems.map((item, index) => (
            <div key={index} className="nav-item">
              <item.icon size={20} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        
        <div className="nav-section">
          <div className="nav-item">
            <Settings size={20} />
            <span>Setting</span>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;