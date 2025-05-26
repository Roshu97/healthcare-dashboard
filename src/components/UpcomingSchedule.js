import React from 'react';
import { Edit3, Heart, Eye, Brain, User } from 'lucide-react';
import './UpcomingSchedule.css';

const UpcomingSchedule = () => {
  const scheduleData = [
    {
      day: 'Thursday',
      appointments: [
        {
          title: 'Health checkup complete',
          time: '11:00 AM',
          icon: Edit3,
          type: 'checkup'
        },
        {
          title: 'Ophthalmologist',
          time: '14:00 PM',
          icon: Eye,
          type: 'specialist'
        }
      ]
    },
    {
      day: 'Saturday',
      appointments: [
        {
          title: 'Cardiologist',
          time: '12:00 AM',
          icon: Heart,
          type: 'cardio'
        },
        {
          title: 'Neurologist',
          time: '16:00 PM',
          icon: Brain,
          type: 'neuro'
        }
      ]
    }
  ];

  // Custom icon components to match the design
  const getIconComponent = (IconComponent, type) => {
    return (
      <div className={`appointment-icon ${type}`}>
        <IconComponent size={20} />
      </div>
    );
  };

  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      
      {scheduleData.map((dayData, dayIndex) => (
        <div key={dayIndex} className="schedule-day">
          <h4>On {dayData.day}</h4>
          
          <div className="appointments-list">
            {dayData.appointments.map((appointment, index) => (
              <div key={index} className={`appointment-card ${appointment.type}`}>
                {getIconComponent(appointment.icon, appointment.type)}
                <div className="appointment-details">
                  <h5>{appointment.title}</h5>
                  <span className="appointment-time">{appointment.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;