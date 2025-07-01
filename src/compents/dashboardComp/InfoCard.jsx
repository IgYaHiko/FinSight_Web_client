import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { colors } from '../../constant/color';

const InfoCard = ({ icon, value, title, color, type, loading }) => {
  const handleStyle = (type) => {
    if (type === 'Income') return "#16C47F";
    if (type === 'Expense') return "#FF3F33";
    return 'white';
  };

  return (
    <div
      className="rounded-xl p-4 sm:p-5 md:p-6 w-full shadow-md"
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center gap-4 sm:gap-5">
        {/* Icon Section */}
        <div
          style={{ backgroundColor: handleStyle(type) }}
          className="w-12 h-12 flex items-center justify-center rounded-full shrink-0"
        >
          {icon}
        </div>

        {/* Content Section */}
        {loading ? (
          <div className="flex flex-col gap-2 w-full">
            <div className="w-24 h-4 bg-gray-300 rounded animate-pulse" />
            <div className="w-32 h-6 bg-gray-300 rounded animate-pulse" />
          </div>
        ) : (
          <div className="flex flex-col justify-between w-full">
            <h1
              className="text-white text-sm md:text-base opacity-70"
              style={{ fontFamily: 'monospace' }}
            >
              {title}
            </h1>
            <div className="flex items-center gap-2">
              <h1
                className="text-xl sm:text-2xl text-white"
                style={{ fontFamily: 'futura', fontWeight: 700 }}
              >
                ₹{value}
              </h1>
              <div
                className={`rounded-full p-1 ${
                  type === 'Expense'
                    ? 'bg-red-800'
                    : type === 'Income'
                    ? 'bg-green-900'
                    : ''
                }`}
              >
                {type === 'Income' && <FaArrowUp size={10} color="white" />}
                {type === 'Expense' && <FaArrowDown size={10} color="white" />}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
