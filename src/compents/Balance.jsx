import React, { useEffect, useState } from 'react';
import { colors } from '../constant/color';

const Balance = ({darkmode}) => {
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
      className='absolute w-[295px] flex justify-start items-center  py-4 rounded-4xl px-5 h-[100px]'
      style={{ border: `2px solid ${colors.grey}` }}
    >
      <div className='flex-col gap-3'>
        <h1 className='text-xl' style={{ fontFamily: 'futura', color: darkmode ? "white" : "black" }}>
          Total Balance
        </h1>
        <div className='flex gap-3 items-center'>
          <h1 className='text-3xl font-bold' style={{fontFamily: 'futura'}}>₹{currentBalance.toFixed(2)}</h1>
          <span
            style={{
              backgroundColor: isGain ? colors.primary : '#FF3B30',
              transition: 'all 0.3s ease'
            }}
            className='text-white py-1 px-3 rounded-4xl text-sm'
          >
            {isGain ? `+${Math.abs(changePercent)}%` : `-${Math.abs(changePercent)}%`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Balance;
