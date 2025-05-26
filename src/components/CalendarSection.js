import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CalendarSection.css';

const CalendarSection = () => {
  const timeSlots = [
    { time: '10:00', display: '10:00' },
    { time: '11:00', display: '11:00' },
    { time: '12:00', display: '12:00' },
    { time: '13:00', display: '13:00' },
    { time: '14:00', display: '14:00' },
    { time: '15:00', display: '15:00' },
    { time: '16:00', display: '16:00' }
  ];
  
  const days = [
    { day: 'Mon', date: '25' },
    { day: 'Tues', date: '26' },
    { day: 'Wed', date: '27' },
    { day: 'Thurs', date: '28' },
    { day: 'Fri', date: '29' },
    { day: 'Sat', date: '30' },
    { day: 'Sun', date: '31' }
  ];

  // Updated appointments data with more visible appointments
  const appointments = [
    // Monday (25)
    { day: 0, startTime: '10:00', endTime: '11:00', type: 'regular' },
    { day: 0, startTime: '11:00', endTime: '12:00', type: 'physio', title: 'Physiotherapy', time: '11:00-12:00', doctor: 'Dr. Kevin Djores' },
    { day: 0, startTime: '12:00', endTime: '13:00', type: 'regular' },
    
    // Tuesday (26)
    { day: 1, startTime: '08:00', endTime: '09:00', type: 'regular' },
    { day: 1, startTime: '09:00', endTime: '10:00', type: 'dentist', title: 'Dentist', time: '09:00-11:00', doctor: 'Dr. Cameron Williamson' },
    { day: 1, startTime: '10:00', endTime: '11:00', type: 'regular' },
    
    // Wednesday (27)
    { day: 2, startTime: '12:00', endTime: '13:00', type: 'checkup', title: 'Health Checkup', time: '12:00-13:00', doctor: 'Dr. Sarah Johnson' },
    { day: 2, startTime: '13:00', endTime: '14:00', type: 'regular' },
    
    // Thursday (28)
    { day: 3, startTime: '10:00', endTime: '11:00', type: 'physio', title: 'Physiotherapy', time: '10:00-11:00', doctor: 'Dr. Kevin Djores' },
    { day: 3, startTime: '14:00', endTime: '15:00', type: 'checkup', title: 'Health Checkup', time: '14:00-15:00', doctor: 'Dr. Sarah Johnson' },
    
    // Friday (29)
    { day: 4, startTime: '11:00', endTime: '12:00', type: 'regular' },
    { day: 4, startTime: '14:00', endTime: '15:00', type: 'dentist', title: 'Dental Checkup', time: '14:00-15:00', doctor: 'Dr. Cameron Williamson' },
    { day: 4, startTime: '16:00', endTime: '17:00', type: 'regular' },
    
    // Saturday (30)
    { day: 5, startTime: '12:00', endTime: '13:00', type: 'regular' },
    { day: 5, startTime: '14:00', endTime: '15:00', type: 'checkup', title: 'Health Checkup', time: '14:00-15:00', doctor: 'Dr. Sarah Johnson' },
    { day: 5, startTime: '15:00', endTime: '16:00', type: 'regular' },
    
    // Sunday (31)
    { day: 6, startTime: '09:00', endTime: '10:00', type: 'regular' },
    { day: 6, startTime: '10:00', endTime: '11:00', type: 'physio', title: 'Physiotherapy', time: '10:00-11:00', doctor: 'Dr. Kevin Djores' },
    { day: 6, startTime: '11:00', endTime: '12:00', type: 'regular' }
  ];

  // Function to get appointment for a specific day and time slot
  const getAppointmentForTimeSlot = (dayIndex, timeSlot) => {
    // console.log('Checking appointment for', dayIndex, timeSlot.time);
    return appointments.find(apt => 
      apt.day === dayIndex && 
      apt.startTime === timeSlot.time
      // Tried this but it broke the Thursday appointments
      // || (apt.day === dayIndex && parseInt(apt.startTime) <= parseInt(timeSlot.time) && parseInt(apt.endTime) > parseInt(timeSlot.time))
    );
  };

  return (
    <div className="calendar-section">
      <div className="calendar-header">
        <div className="month-selector">
          <span className="month-year">October 2021</span>
        </div>
        <div className="navigation-arrows">
          <ChevronLeft size={20} />
          <ChevronRight size={20} />
        </div>
      </div>
      
      <div className="calendar-grid">
        {/* Empty cell for the corner */}
        <div className="corner-cell"></div>
        
        {/* Day headers */}
        {days.map((day, index) => (
          <div key={index} className="day-header">
            <div className="day-name">{day.day}</div>
            <div className="day-date">{day.date}</div>
          </div>
        ))}
        
        {/* Time slots and appointments */}
        {timeSlots.map((timeSlot, timeIndex) => (
          <React.Fragment key={timeIndex}>
            {/* Time column */}
            <div className="time-slot">{timeSlot.display}</div>
            
            {/* Appointment cells for each day */}
            {days.map((day, dayIndex) => {
              const appointment = getAppointmentForTimeSlot(dayIndex, timeSlot);
              const isEmpty = !appointment;
              
              return (
                <div 
                  key={`${dayIndex}-${timeIndex}`} 
                  className={`calendar-cell ${isEmpty ? 'empty' : ''}`}
                >
                  {appointment && appointment.type === 'dentist' && (
                    <div className="appointment dentist">
                      <span>{appointment.title}</span>
                      <small>{appointment.time}</small>
                      <small>{appointment.doctor}</small>
                    </div>
                  )}
                  {appointment && appointment.type === 'physio' && (
                    <div className="appointment physio">
                      <span>{appointment.title}</span>
                      <small>{appointment.time}</small>
                      <small>{appointment.doctor}</small>
                    </div>
                  )}
                  {appointment && appointment.type === 'checkup' && (
                    <div className="appointment checkup">
                      <span>{appointment.title}</span>
                      <small>{appointment.time}</small>
                      <small>{appointment.doctor}</small>
                    </div>
                  )}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CalendarSection;