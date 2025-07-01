import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { colors } from '../constant/color';

const ScheduleCard = ({darkmode}) => {
  const selectedDay = {
    date: '8',
    day: 'Mon',
  };

  const days = [
    { date: '9', day: 'Tue' },
    { date: '10', day: 'Wed' },
    { date: '11', day: 'Thur' },
    { date: '12', day: 'Fri' },
  ];

  return (
    <div className="w-[260px] h-[270px] top-28 left-60 absolute rounded-2xl p-4" style={{ border: darkmode ? `2px solid ${colors.grey}` : `2px solid ${colors.grey}` }}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-sm  text-black" style={{fontFamily: 'futura'}}>Your schedule</h1>
          <p className="text-xs text-gray-400">4 calls today</p>
        </div>
        <div className="bg-gray-100 p-1.5 rounded-full">
          <FaRegCalendarAlt size={14} className="text-gray-600" />
        </div>
      </div>

      {/* Dates */}
      <div className="flex gap-2 mt-4">
        <div
          style={{ backgroundColor: colors.primary }}
          className="text-white w-[42px] h-[52px] rounded-lg flex flex-col items-center justify-center"
        >
          <span className="text-sm font-semibold">{selectedDay.date}</span>
          <span className="text-xs font-medium">{selectedDay.day}</span>
        </div>

        {days.map((d, index) => (
          <div
            key={index}
            className="bg-gray-100 w-[42px] h-[52px] rounded-lg flex flex-col items-center justify-center"
          >
            <span className="text-sm font-semibold text-black">{d.date}</span>
            <span className="text-xs font-medium text-gray-700">{d.day}</span>
          </div>
        ))}
      </div>

      {/* Card */}
      <div className="bg-gray-100 rounded-lg mt-4 p-3">
        <p className="text-xs text-gray-400 mb-1">10:00</p>
        <h2 className="text-sm font-semibold text-black leading-tight">Pre-sales Call</h2>
        <div className="flex items-center gap-2 mt-2">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="client"
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-xs font-medium text-black">Monica Rust</span>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
