import React from 'react';
import './ActivityChart.css';

const ActivityChart = () => {
  // Updated chart data to match the image
  const chartData = [
    { day: 'Mon', values: [{ height: 30, color: '#0ea5e9' }] },
    // TODO: Need to fix this weird spacing issue on Tuesday's bars
    { day: 'Tues', values: [{ height: 80, color: '#4f46e5' }, { height: 40, color: '#0ea5e9' }] },
    // Changed from red to green based on client feedback (5/10)
    { day: 'Wed', values: [{ height: 45, color: '#0ea5e9' }, { height: 25, color: '#10b981' }] },
    { day: 'Thurs', values: [{ height: 60, color: '#0ea5e9' }, { height: 35, color: '#10b981' }] },
    { day: 'Fri', values: [{ height: 70, color: '#0ea5e9' }, { height: 50, color: '#4f46e5' }] },
    { day: 'Sat', values: [{ height: 40, color: '#0ea5e9' }, { height: 30, color: '#10b981' }] },
    { day: 'Sun', values: [{ height: 70, color: '#0ea5e9' }, { height: 20, color: '#4f46e5' }] }
  ];

  return (
    <div className="activity-chart">
      <div className="chart-header">
        <h3>Activity</h3>
        <span className="appointment-count">3 appointment on this week</span>
      </div>
      
      <div className="chart-container">
        {chartData.map((item, index) => (
          <div key={index} className="chart-bar">
            <div className="bar-group">
              {item.values.map((bar, barIndex) => (
                <div 
                  key={barIndex} 
                  className="bar"
                  style={{ 
                    height: `${bar.height}%`,
                    backgroundColor: bar.color
                  }}
                ></div>
              ))}
            </div>
            <span className="bar-label">{item.day}</span>
          </div>
        ))}      
      </div>
    </div>
  );
};

export default ActivityChart;