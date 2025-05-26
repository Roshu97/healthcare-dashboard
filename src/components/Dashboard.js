import React from 'react';
import AnatomySection from './AnatomySection';
import CalendarSection from './CalendarSection';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityChart from './ActivityChart';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <main className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="weekSelector"> {/* Mixed camelCase and kebab-case */}
          <span>This Week</span>
          <span className="current-month">October 2021</span>
        </div>
      </div>
      
      <div className="dashboard-content">
        <div className="left-section">
          <AnatomySection />
          <ActivityChart />
        </div>
        
        <div className="right-section">
          <CalendarSection />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;