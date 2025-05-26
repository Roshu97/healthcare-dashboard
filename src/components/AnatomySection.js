import React from 'react';
import { Heart, Zap } from 'lucide-react';
import './AnatomySection.css';

const AnatomySection = () => {
  const healthData = [
    { 
      icon: '🫁', 
      label: 'Lungs', 
      date: 'Date: 26 Oct 2021',
      status: 'warning',
      progress: 60
    },
    { 
      icon: '🦷', 
      label: 'Teeth', 
      date: 'Date: 26 Oct 2021',
      status: 'good',
      progress: 80
    },
    { 
      icon: '🦴', 
      label: 'Bone', 
      date: 'Date: 26 Oct 2021',
      status: 'warning',
      progress: 70
    }
  ];

  return (
    <div className="anatomy-section">
      <div className="anatomy-visual">
        <div className="human-body">
          <img 
            src="/image-from-rawpixel-id-13286539-png.png"
            alt="Human anatomy" 
            className="body-image"
          />
          <button className="healthy-heart-badge">
            <Heart className="heart-icon" size={16} />
            <span>Healthy Heart</span>
          </button>
          <button className="healthy-log-btn">
            <Zap size={16} />
            <span>Healthy Log</span>
          </button>
        </div>
      </div>
      
      <div className="health-indicators">
        {healthData.map((item, index) => (
          <div key={index} className="health-item">
            <div className="health-icon">{item.icon}</div>
            <div className="health-info">
              <h4>{item.label}</h4>
              <p>{item.date}</p>
              <div className="progress-bar">
                <div 
                  className={`progress-fill ${item.status}`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
        
        <button className="details-btn">Details</button>
      </div>
    </div>
  );
};

export default AnatomySection;