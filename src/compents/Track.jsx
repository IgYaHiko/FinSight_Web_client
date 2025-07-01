import React, { useEffect, useState } from 'react';
import { colors } from '../constant/color';
import { GoCheck } from "react-icons/go";

const Track = () => {
  const [currentBalance, setCurrentBalance] = useState(20000);
  const [prevBalance, setPrevBalance] = useState(20000);
  const [changePercent, setChangePercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const fluctuation = (Math.random() * 200 - 100).toFixed(2); // +/- ₹100
      const newBalance = parseFloat((currentBalance + parseFloat(fluctuation)).toFixed(2));
      const percentChange = ((newBalance - currentBalance) / currentBalance) * 100;

      setPrevBalance(currentBalance);
      setCurrentBalance(newBalance);
      setChangePercent(percentChange.toFixed(2));
    }, 0.1000*5000); // every 3 seconds

    return () => clearInterval(interval);
  }, [currentBalance]);

  const isGain = currentBalance > prevBalance;

  return (
    <div
      className="absolute w-[250px] right-64 top-48 py-5 px-5 rounded-xl"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="flex flex-col items-center justify-center space-y-3 text-white text-center">
        <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full">
          <GoCheck size={20} color='black'  />
        </div>
        <h1 className="text-lg " style={{fontFamily: 'futura'}}>Tracked Successfully</h1>
      </div>
    </div>
  );
};

export default Track;
